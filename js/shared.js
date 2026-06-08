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
     Collapsed: shows 3 icon pills.
     Expanded:  grows upward to reveal full nav links.
  ───────────────────────────────────────── */
  const mobileIslandHTML = /* html */`
    <style>
      /* ── Island shell ── */
      .mobile-island {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 900;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: min(calc(100vw - 32px), 360px);
        border-radius: 24px;
        overflow: hidden;
        /* Use whatever bg/shadow your CSS already defines; these are fallbacks */
        background: var(--island-bg, rgba(255,255,255,0.96));
        box-shadow: 0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        transition: border-radius 0.3s ease;
      }

      /* ── Expanded nav links (hidden by default) ── */
      .island-nav-links {
        display: flex;
        flex-direction: column;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.28s ease;
        opacity: 0;
      }
      .mobile-island.island-open .island-nav-links {
        max-height: 320px;
        opacity: 1;
      }
      .island-nav-links a {
        display: block;
        padding: 14px 24px;
        font-size: 0.95rem;
        color: var(--text, #1a1a1a);
        text-decoration: none;
        border-bottom: 1px solid var(--divider, rgba(0,0,0,0.06));
        transition: background 0.15s;
      }
      .island-nav-links a:first-child {
        border-top: 1px solid var(--divider, rgba(0,0,0,0.06));
      }
      .island-nav-links a:hover,
      .island-nav-links a:active {
        background: var(--hover-bg, rgba(0,0,0,0.04));
      }

      /* ── Bottom bar (always visible) ── */
      .island-bar {
        display: flex;
        align-items: center;
        gap: 0;
      }

      .island-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 12px 8px;
        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: var(--text-muted, #666);
        text-decoration: none;
        transition: color 0.15s, background 0.15s;
      }
      .island-item svg {
        width: 20px;
        height: 20px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
      }
      .island-item:hover { color: var(--accent, #2d6a4f); }

      /* Menu toggle pill */
      .island-item-menu {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 12px 8px;
        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: var(--text-muted, #666);
        background: none;
        border: none;
        cursor: pointer;
        transition: color 0.15s;
        -webkit-tap-highlight-color: transparent;
      }
      .island-item-menu svg {
        width: 20px;
        height: 20px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
        transition: transform 0.3s ease;
      }
      .mobile-island.island-open .island-item-menu svg {
        transform: rotate(45deg);
      }
      .island-item-menu:hover { color: var(--accent, #2d6a4f); }

      .island-divider {
        width: 1px;
        height: 28px;
        background: var(--divider, rgba(0,0,0,0.1));
        flex-shrink: 0;
      }

      /* CTA pill */
      .island-item-cta {
        flex: 1.4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 12px 8px;
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: var(--cta-text, #fff);
        background: var(--cta-bg, #2d6a4f);
        text-decoration: none;
        transition: opacity 0.15s;
      }
      .island-item-cta svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
        stroke: none;
      }
      .island-item-cta:hover { opacity: 0.88; }

      /* Hide island on desktop */
      @media (min-width: 768px) {
        .mobile-island { display: none !important; }
      }
    </style>

    <nav class="mobile-island" id="mobileIsland" role="navigation" aria-label="Quick navigation">

      <!-- Expandable nav links (slides up when open) -->
      <div class="island-nav-links" id="islandNavLinks">
        <a href="${root}index.html#therapists">Our therapists</a>
        <a href="${root}index.html#assessments">Self-assessments</a>
        <a href="${root}index.html#locations">Locations</a>
        <a href="${root}blog/blog.html">Journal</a>
      </div>

      <!-- Always-visible bottom bar -->
      <div class="island-bar">

        <a href="${root}index.html#therapists" class="island-item">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
          Team
        </a>

        <div class="island-divider" aria-hidden="true"></div>

        <a href="${root}index.html#locations" class="island-item">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          Find us
        </a>

        <div class="island-divider" aria-hidden="true"></div>

        <!-- Menu toggle -->
        <button class="island-item-menu" id="islandMenuToggle"
                aria-expanded="false" aria-controls="islandNavLinks"
                aria-label="Toggle navigation menu">
          <svg viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Menu
        </button>

        <div class="island-divider" aria-hidden="true"></div>

        <a href="${WA_CALL}" class="island-item-cta" target="_blank" rel="noopener"
           aria-label="Schedule a discovery call on WhatsApp">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Call
        </a>

      </div>
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
