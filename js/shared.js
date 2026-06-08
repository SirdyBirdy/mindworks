/**
 * shared.js — Mindworks Counselling
 *
 * Injects the sticky bar, desktop nav, mobile island, and footer
 * into every page. Edit once here; it reflects everywhere.
 *
 * Each HTML file needs:
 *   1. <div id="mw-sticky-bar"></div>      ← sticky discovery bar
 *   2. <div id="mw-nav"></div>             ← desktop nav
 *   3. <div id="mw-mobile-island"></div>   ← floating mobile island (expandable)
 *   4. <div id="mw-footer"></div>          ← footer + f-bottom strip
 *
 *   Plus this script tag (adjust path depth as needed):
 *   <script src="../js/shared.js"></script>   (from a sub-page)
 *   <script src="js/shared.js"></script>      (from index.html)
 */

(function () {
  /* ─────────────────────────────────────────
     CONFIGURATION — edit paths & content here
  ───────────────────────────────────────── */

  const depth = (document.currentScript?.src || '')
    .replace(location.origin, '')
    .split('/')
    .filter(Boolean)
    .length - 2;

  const root = depth > 0 ? '../'.repeat(depth) : './';

  const WA_NUMBER   = '919067485858';
  const WA_CALL_MSG = encodeURIComponent("Hi, I'd like to schedule a discovery call");
  const WA_PLAIN    = `https://wa.me/${WA_NUMBER}`;
  const WA_CALL     = `https://wa.me/${WA_NUMBER}?text=${WA_CALL_MSG}`;

  /* ─────────────────────────────────────────
     STICKY DISCOVERY BAR
  ───────────────────────────────────────── */
  const stickyBarHTML = /* html */`
    <div class="sticky-bar" id="stickyBar" role="complementary" aria-label="Book a discovery call">
      <span class="sticky-bar-text"><em>mindworks</em> — Ready when you are.</span>
      <a href="${WA_CALL}" class="sticky-bar-cta" target="_blank" rel="noopener"
         aria-label="Schedule a discovery call on WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Schedule a discovery call
      </a>
      <button class="sticky-bar-dismiss" id="stickyDismiss" aria-label="Dismiss">×</button>
    </div>
  `;

  /* ─────────────────────────────────────────
     DESKTOP NAV
     (hamburger removed — mobile uses the island)
  ───────────────────────────────────────── */
  const navHTML = /* html */`
    <nav id="mainNav">
      <a href="${root}index.html" class="logo"><em>mind</em>works</a>
      <div class="nav-mid">
        <a href="${root}index.html#therapists">Our therapists</a>
        <a href="${root}index.html#assessments">Self-assessments</a>
        <a href="${root}index.html#locations">Locations</a>
        <a href="${root}blog/blog.html">Journal</a>
      </div>
      <div class="nav-right">
        <a href="${WA_CALL}" class="nav-cta" target="_blank" rel="noopener">
          <span>Schedule a discovery call</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
    </nav>
  `;

  /* ─────────────────────────────────────────
     MOBILE FLOATING ISLAND
     Collapsed: "mindworks  ≡" pill
     Expanded:  grows upward to reveal nav links
  ───────────────────────────────────────── */
  const mobileIslandHTML = /* html */`
    <style>
      .mobile-island {
        position: fixed;
        bottom: 28px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 900;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: auto;
        min-width: 160px;
        border-radius: 999px;
        background: rgba(32, 178, 170, 0.18);
        box-shadow: 0 4px 24px rgba(32,178,170,0.18), 0 1.5px 6px rgba(0,0,0,0.08);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(32, 178, 170, 0.28);
        overflow: hidden;
        transition: border-radius 0.35s cubic-bezier(0.4,0,0.2,1),
                    min-width 0.35s cubic-bezier(0.4,0,0.2,1);
      }
      .mobile-island.island-open {
        border-radius: 20px;
      }

      /* ── Expanded links ── */
      .island-nav-links {
        display: flex;
        flex-direction: column;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1),
                    opacity 0.25s ease;
      }
      .mobile-island.island-open .island-nav-links {
        max-height: 260px;
        opacity: 1;
      }
      .island-nav-links a {
        display: block;
        padding: 13px 28px;
        font-size: 0.97rem;
        font-weight: 500;
        color: rgba(255,255,255,0.92);
        text-decoration: none;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        white-space: nowrap;
        transition: background 0.15s, color 0.15s;
        -webkit-tap-highlight-color: transparent;
      }
      .island-nav-links a:last-child { border-bottom: none; }
      .island-nav-links a:active,
      .island-nav-links a:hover {
        background: rgba(255,255,255,0.1);
        color: #fff;
      }

      /* ── Collapsed trigger bar ── */
      .island-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 13px 20px;
        cursor: pointer;
        background: none;
        border: none;
        width: 100%;
        -webkit-tap-highlight-color: transparent;
      }
      .island-trigger-label {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: rgba(255,255,255,0.95);
        font-style: italic;
      }
      .island-trigger-label em {
        font-style: normal;
      }
      .island-hamburger {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex-shrink: 0;
      }
      .island-hamburger span {
        display: block;
        width: 18px;
        height: 1.5px;
        background: rgba(255,255,255,0.9);
        border-radius: 2px;
        transform-origin: center;
        transition: transform 0.28s ease, opacity 0.2s ease, width 0.28s ease;
      }
      .mobile-island.island-open .island-hamburger span:nth-child(1) {
        transform: translateY(5.5px) rotate(45deg);
      }
      .mobile-island.island-open .island-hamburger span:nth-child(2) {
        opacity: 0;
        width: 0;
      }
      .mobile-island.island-open .island-hamburger span:nth-child(3) {
        transform: translateY(-5.5px) rotate(-45deg);
      }

      @media (min-width: 768px) {
        .mobile-island { display: none !important; }
      }
    </style>

    <nav class="mobile-island" id="mobileIsland" role="navigation" aria-label="Site navigation">

      <!-- Expanded links (above trigger) -->
      <div class="island-nav-links" id="islandNavLinks">
        <a href="${root}index.html#therapists">Our therapists</a>
        <a href="${root}index.html#assessments">Self-assessments</a>
        <a href="${root}index.html#locations">Locations</a>
        <a href="${root}blog/blog.html">Journal</a>
        <a href="${WA_CALL}" target="_blank" rel="noopener">Schedule a discovery call →</a>
      </div>

      <!-- Always-visible trigger -->
      <button class="island-trigger" id="islandMenuToggle"
              aria-expanded="false" aria-controls="islandNavLinks"
              aria-label="Toggle navigation menu">
        <span class="island-trigger-label"><em>mind</em>works</span>
        <span class="island-hamburger" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </button>

    </nav>
  `;

  /* ─────────────────────────────────────────
     FOOTER
  ───────────────────────────────────────── */
  const footerHTML = /* html */`
    <footer>
      <div>
        <div class="f-brand"><em>mind</em>works counselling</div>
        <div class="f-desc">A small Pune-based therapy practice. Certified, supervised, queer-affirmative. Online sessions across India.</div>
      </div>
      <div class="f-col">
        <div class="f-label">Services</div>
        <div class="f-links">
          <a href="${root}index.html#therapists">Individual therapy</a>
          <a href="${root}index.html#therapists">Couples counselling</a>
          <a href="${root}index.html#assessments">Self-assessments</a>
        </div>
      </div>
      <div class="f-col">
        <div class="f-label">Navigate</div>
        <div class="f-links">
          <a href="${root}index.html#therapists">Our therapists</a>
          <a href="${root}index.html#locations">Locations</a>
          <a href="${root}blog/blog.html">Journal</a>
        </div>
      </div>
      <div class="f-col">
        <div class="f-label">Connect</div>
        <div class="f-links">
          <a href="tel:+91${WA_NUMBER.replace('91','')}">+91 90674 85858</a>
          <a href="${WA_PLAIN}" target="_blank" rel="noopener">WhatsApp</a>
          <a href="https://instagram.com/mindworkscounselling" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </footer>
    <div class="f-bottom">
      <span>© 2025 Mindworks Counselling</span>
      <span>Pune, India</span>
    </div>
  `;

  /* ─────────────────────────────────────────
     INJECT INTO THE DOM
  ───────────────────────────────────────── */
  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  function init() {
    inject('mw-sticky-bar',    stickyBarHTML);
    inject('mw-nav',           navHTML);
    inject('mw-mobile-island', mobileIslandHTML);
    inject('mw-footer',        footerHTML);

    initStickyBar();
    initIsland();
    initNavScroll();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ─────────────────────────────────────────
     BEHAVIOURS
  ───────────────────────────────────────── */

  function initStickyBar() {
    const bar     = document.getElementById('stickyBar');
    const dismiss = document.getElementById('stickyDismiss');
    const navEl   = document.getElementById('mainNav');
    if (!bar) return;

    let dismissed = false;

    function update() {
      if (dismissed) return;
      const heroH = document.querySelector('.hero')?.offsetHeight || 600;
      const show  = window.scrollY > heroH * 0.7;
      bar.classList.toggle('visible', show);
      if (navEl) navEl.style.top = (show ? bar.offsetHeight : 0) + 'px';
    }

    dismiss?.addEventListener('click', () => {
      dismissed = true;
      bar.classList.remove('visible');
      if (navEl) navEl.style.top = '0';
    });

    window.addEventListener('scroll', update, { passive: true });
  }

  function initIsland() {
    const island  = document.getElementById('mobileIsland');
    const toggle  = document.getElementById('islandMenuToggle');
    const links   = document.getElementById('islandNavLinks');
    if (!island || !toggle) return;

    function openMenu() {
      island.classList.add('island-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      island.classList.remove('island-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
      island.classList.contains('island-open') ? closeMenu() : openMenu();
    });

    // Close when a nav link is tapped
    links?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // Close on outside tap
    document.addEventListener('click', e => {
      if (!island.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  function initNavScroll() {
    const navEl = document.getElementById('mainNav');
    if (!navEl) return;
    window.addEventListener('scroll', () => navEl.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
  }

  function initReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

})();
