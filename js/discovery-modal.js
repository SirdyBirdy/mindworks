/**
 * ============================================================
 *  MINDWORKS — DISCOVERY CALL MODAL
 *  A richer, faster path to WhatsApp than a single generic link.
 *
 *  Auto-wiring: any <a> whose href is exactly the general
 *  "schedule a discovery call" WhatsApp link (WA_GENERAL, set
 *  in content.js) gets intercepted — clicking it opens this
 *  modal instead of jumping straight out. Per-therapist booking
 *  links are untouched, since those already go to the right
 *  person.
 *
 *  Include on every page, after content.js:
 *    <script src="js/content.js"></script>
 *    <script src="js/discovery-modal.js"></script>
 *  (use ../js/discovery-modal.js from one level deep, e.g. /blog/)
 *
 *  Manual use elsewhere: window.openDiscoveryModal() / closeDiscoveryModal()
 * ============================================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    if (typeof CONTENT === "undefined") return;
    injectStyles();
    injectMarkup();
    wireTriggers();
    wireModalBehavior();
  }

  /* ── Styles ──────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById("dm-styles")) return;
    const style = document.createElement("style");
    style.id = "dm-styles";
    style.textContent = `
      .dm-overlay {
        position: fixed; inset: 0; z-index: 999;
        background: rgba(26,42,51,0.42);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        display: flex; align-items: center; justify-content: center;
        padding: 1.5rem;
        opacity: 0; pointer-events: none;
        transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1);
      }
      .dm-overlay.open { opacity: 1; pointer-events: auto; }

      .dm-panel {
        background: var(--card, #fff);
        border-radius: 2rem;
        max-width: 460px; width: 100%;
        max-height: 88vh; overflow-y: auto;
        box-shadow: 0 30px 80px rgba(26,42,51,0.28), 0 4px 16px rgba(26,42,51,0.12);
        padding: 2.5rem 2rem 2rem;
        position: relative;
        transform: scale(0.94) translateY(14px);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease;
      }
      .dm-overlay.open .dm-panel { transform: scale(1) translateY(0); opacity: 1; }

      .dm-close {
        position: absolute; top: 1.25rem; right: 1.25rem;
        width: 32px; height: 32px; border-radius: 50%;
        border: 1px solid var(--border, #e5e0d8); background: transparent;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; color: var(--muted, #8a8378);
        transition: background 0.2s, color 0.2s, transform 0.2s;
      }
      .dm-close:hover { background: var(--ink, #1a2a33); color: var(--cream, #f7f6f2); transform: rotate(90deg); }
      .dm-close svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2; }

      .dm-eyebrow {
        display: flex; align-items: center; gap: 0.5rem;
        font-size: 0.65rem; font-weight: 500; letter-spacing: 0.14em;
        text-transform: uppercase; color: var(--muted, #8a8378);
        margin-bottom: 1rem;
      }
      .dm-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent, #d46a45); flex-shrink: 0; }

      .dm-title {
        font-family: var(--display, serif);
        font-size: clamp(1.6rem, 4vw, 2.1rem);
        font-weight: 400; line-height: 1.12; letter-spacing: -0.03em;
        color: var(--ink, #1a2a33); margin-bottom: 0.6rem;
      }
      .dm-title em { font-style: italic; color: var(--accent, #d46a45); }

      .dm-sub {
        font-size: 0.88rem; color: var(--muted, #8a8378); line-height: 1.6;
        margin-bottom: 1.75rem; max-width: 360px;
      }

      .dm-primary {
        display: flex; align-items: center; justify-content: center; gap: 0.6rem;
        width: 100%; padding: 1rem 1.5rem; border-radius: 100px;
        background: var(--ink, #1a2a33); color: var(--cream, #f7f6f2);
        font-size: 0.92rem; font-weight: 500; text-decoration: none;
        border: none; cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        box-shadow: 0 10px 24px rgba(26,42,51,0.18);
      }
      .dm-primary:hover { transform: translateY(-2px); background: var(--accent, #d46a45); box-shadow: 0 14px 30px rgba(212,106,69,0.3); }
      .dm-primary svg { width: 15px; height: 15px; flex-shrink: 0; }

      .dm-reassure {
        display: flex; justify-content: center; gap: 0.5rem;
        font-size: 0.68rem; color: var(--muted, #8a8378);
        margin-top: 0.75rem; letter-spacing: 0.01em;
      }
      .dm-reassure-dot { color: var(--border, #e5e0d8); }

      .dm-divider {
        display: flex; align-items: center; gap: 0.75rem;
        margin: 1.75rem 0 1.25rem;
        font-size: 0.68rem; font-weight: 500; letter-spacing: 0.08em;
        text-transform: uppercase; color: var(--muted, #8a8378);
      }
      .dm-divider::before, .dm-divider::after {
        content: ""; flex: 1; height: 1px; background: var(--border, #e5e0d8);
      }

      .dm-therapists {
        display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;
      }
      .dm-t-chip {
        display: flex; align-items: center; gap: 0.65rem;
        padding: 0.65rem 0.75rem; border-radius: 1rem;
        border: 1px solid var(--border, #e5e0d8); background: transparent;
        text-decoration: none; cursor: pointer;
        transition: border-color 0.2s, background 0.2s, transform 0.2s;
      }
      .dm-t-chip:hover { border-color: var(--ink, #1a2a33); background: var(--teal-soft, #eef4f2); transform: translateY(-2px); }
      .dm-t-avatar {
        width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        font-family: var(--display, serif); font-size: 0.78rem; font-style: italic;
        color: rgba(255,255,255,0.9); overflow: hidden;
      }
      .dm-t-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .dm-t-info { min-width: 0; }
      .dm-t-name { font-size: 0.8rem; font-weight: 500; color: var(--ink, #1a2a33); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .dm-t-role { font-size: 0.66rem; color: var(--muted, #8a8378); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

      .dm-footer-row {
        display: flex; align-items: center; justify-content: center; gap: 1.25rem;
        margin-top: 1.75rem; padding-top: 1.25rem;
        border-top: 1px solid var(--border, #e5e0d8);
      }
      .dm-footer-link {
        display: flex; align-items: center; gap: 0.4rem;
        font-size: 0.78rem; font-weight: 500; color: var(--muted, #8a8378);
        text-decoration: none; transition: color 0.2s;
      }
      .dm-footer-link:hover { color: var(--ink, #1a2a33); }
      .dm-footer-link svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 1.8; }

      @media (max-width: 480px) {
        .dm-panel { padding: 2.25rem 1.5rem 1.75rem; border-radius: 1.5rem; }
        .dm-therapists { grid-template-columns: 1fr; }
      }
      @media (prefers-reduced-motion: reduce) {
        .dm-overlay, .dm-panel, .dm-close, .dm-primary, .dm-t-chip { transition: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── Markup ──────────────────────────────────────────── */
  function injectMarkup() {
    if (document.getElementById("discoveryModal")) return;

    const t = CONTENT.therapists?.list || [];
    const phoneHref = CONTENT.site?.phoneHref || "#";
    const phoneDisplay = CONTENT.site?.phone || "";
    const waGeneral = CONTENT.hero?.ctaPrimary?.href || CONTENT.site?.whatsappLink || "#";

    const therapistChips = t.map(person => `
      <a href="${person.bookingLink}" target="_blank" rel="noopener" class="dm-t-chip" data-dm-close-after>
        <div class="dm-t-avatar" style="background:${gradientFor(person)}">
          ${person.photo ? `<img src="${person.photo}" alt="${person.name}" loading="lazy">` : person.initials}
        </div>
        <div class="dm-t-info">
          <div class="dm-t-name">${person.name.split(" ")[0]}</div>
          <div class="dm-t-role">${(person.specialisms || []).slice(0, 2).join(" · ")}</div>
        </div>
      </a>
    `).join("");

    const overlay = document.createElement("div");
    overlay.className = "dm-overlay";
    overlay.id = "discoveryModal";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "dmTitle");
    overlay.innerHTML = `
      <div class="dm-panel">
        <button class="dm-close" aria-label="Close" data-dm-close>
          <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div class="dm-eyebrow"><span class="dm-eyebrow-dot"></span>Free · 15 minutes</div>
        <h2 class="dm-title" id="dmTitle">Let's find<br><em>your fit.</em></h2>
        <p class="dm-sub">No paperwork, no commitment — just a real conversation on WhatsApp to see if we're the right fit.</p>

        <a href="${waGeneral}" target="_blank" rel="noopener" class="dm-primary" data-dm-close-after>
          ${typeof WA_ICON_SVG !== "undefined" ? WA_ICON_SVG : ""}
          <span>Message us on WhatsApp</span>
        </a>
        <div class="dm-reassure">
          <span>Usually reply within a few hours</span>
        </div>

        ${therapistChips ? `
          <div class="dm-divider">Or go straight to someone</div>
          <div class="dm-therapists">${therapistChips}</div>
        ` : ""}

        <div class="dm-footer-row">
          <a href="${phoneHref}" class="dm-footer-link">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            ${phoneDisplay}
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  function gradientFor(person) {
    // Reuse hero deck gradient if this person also appears there
    const heroMatch = (CONTENT.hero?.deckCards || []).find(c => c.name === person.name);
    return (heroMatch && heroMatch.gradient) || "var(--teal, #4a8a7f)";
  }

  /* ── Wire up triggers (auto-intercept existing CTAs) ──── */
  function wireTriggers() {
    const waGeneral = CONTENT.hero?.ctaPrimary?.href || CONTENT.site?.whatsappLink;
    if (!waGeneral) return;

    document.querySelectorAll(`a[href="${cssEscape(waGeneral)}"]`).forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        openDiscoveryModal();
      });
    });
  }

  function cssEscape(str) {
    // Minimal escaping for use inside an attribute selector string
    return str.replace(/"/g, '\\"');
  }

  /* ── Open / close behavior ─────────────────────────────── */
  let lastFocused = null;

  function wireModalBehavior() {
    const overlay = document.getElementById("discoveryModal");
    if (!overlay) return;

    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeDiscoveryModal();
    });
    overlay.querySelectorAll("[data-dm-close]").forEach(el =>
      el.addEventListener("click", closeDiscoveryModal)
    );
    overlay.querySelectorAll("[data-dm-close-after]").forEach(el =>
      el.addEventListener("click", () => setTimeout(closeDiscoveryModal, 400))
    );
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeDiscoveryModal();
    });
  }

  window.openDiscoveryModal = function () {
    const overlay = document.getElementById("discoveryModal");
    if (!overlay) return;
    lastFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    overlay.classList.add("open");
    const closeBtn = overlay.querySelector(".dm-close");
    closeBtn && closeBtn.focus();
  };

  window.closeDiscoveryModal = function () {
    const overlay = document.getElementById("discoveryModal");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  };

})();
