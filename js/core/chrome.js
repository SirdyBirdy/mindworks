/**
 * ============================================================
 *  CORE / CHROME
 *  Renders the parts every page shares — sticky bar, desktop
 *  nav, mobile menu, footer — from CONTENT (content/site.js),
 *  and wires up their behaviour (scroll reveal, dismiss, menu
 *  toggle). This is the ONLY place that builds this markup;
 *  previously it was duplicated with slightly different copy
 *  hardcoded separately in shared.js.
 *
 *  Every HTML page needs these four mount points:
 *    <div id="mw-sticky-bar"></div>
 *    <div id="mw-nav"></div>
 *    <div id="mw-mobile-menu"></div>
 *    <div id="mw-footer"></div>
 *
 *  Load order: paths.js, icons.js, content/site.js, this file.
 * ============================================================
 */

(function () {
  function mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  /** Brand mark: the uploaded logo image if one is set in content/site.js,
      otherwise the text wordmark. `onDark` picks the footer variant. */
  function brandMark(onDark) {
    const site = CONTENT.site;
    const src = (onDark && site.logoOnDark) || site.logo;
    if (!src) return onDark ? site.nameFull : site.wordmark;
    const h = onDark ? Math.round((site.logoHeight || 30) * 0.9) : (site.logoHeight || 30);
    return `<img class="brand-logo" src="${mwAsset(src)}" alt="${site.logoAlt || site.nameFull}" style="height:${h}px">`;
  }

  function setFavicon() {
    const f = CONTENT.site.favicon;
    if (!f) return;
    let link = document.querySelector('link[rel="icon"]');
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = mwAsset(f);
  }

  function renderStickyBar() {
    mount('mw-sticky-bar', `
      <div class="sticky-bar" id="stickyBar" role="complementary" aria-label="Book a free call">
        <span class="sticky-bar-text">${CONTENT.stickyBar.text}</span>
        <a href="${CONTENT.whatsapp.general}" class="sticky-bar-cta" target="_blank" rel="noopener"
           aria-label="Book a free call on WhatsApp">
          ${MW_ICON_WHATSAPP}
          ${CONTENT.stickyBar.ctaLabel}
        </a>
        <button class="sticky-bar-dismiss" id="stickyDismiss" aria-label="Dismiss">×</button>
      </div>
    `);
  }

  function renderNav() {
    const links = CONTENT.nav.links
      .map(l => `<a href="${mwAsset(l.href)}">${l.label}</a>`).join('');
    mount('mw-nav', `
      <nav id="mainNav">
        <a href="${mwAsset('index.html')}" class="logo">${brandMark(false)}</a>
        <div class="nav-mid">${links}</div>
        <div class="nav-right">
          <a href="${CONTENT.whatsapp.general}" class="nav-cta" target="_blank" rel="noopener" data-tooltip="${CONTENT.nav.ctaTooltip}">
            <span>${CONTENT.nav.cta.label}</span>
            ${MW_ICON_ARROW}
          </a>
          <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false" id="navHamburger">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    `);
  }

  function renderMobileMenu() {
    const links = CONTENT.nav.links
      .map(l => `<a href="${mwAsset(l.href)}">${l.label}</a>`).join('');
    mount('mw-mobile-menu', `
      <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Navigation">
        <button class="mobile-menu-close" aria-label="Close" id="mobileMenuClose">&times;</button>
        ${links}
        <a href="${CONTENT.whatsapp.general}" target="_blank" rel="noopener" class="mm-cta">${CONTENT.nav.cta.label} →</a>
      </div>
    `);
  }

  function renderFooter() {
    const cols = CONTENT.footer.columns.map(col => `
      <div class="f-col">
        <div class="f-label">${col.heading}</div>
        <div class="f-links">${col.links.map(l => `<a href="${l.href.startsWith('http') || l.href.startsWith('tel:') ? l.href : mwAsset(l.href)}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a>`).join('')}</div>
      </div>
    `).join('');
    const crisis = CONTENT.crisisLine ? `
      <div class="f-crisis">${CONTENT.crisisLine.text} <a href="${CONTENT.crisisLine.numberHref}">${CONTENT.crisisLine.number}</a></div>
    ` : '';
    mount('mw-footer', `
      <footer>
        <div>
          <div class="f-brand">${brandMark(true)}</div>
          <div class="f-desc">${CONTENT.footer.blurb}</div>
        </div>
        ${cols}
      </footer>
      <div class="f-bottom">
        <span>${CONTENT.site.copyright}</span>
        ${crisis}
        <span>${CONTENT.site.city}, India</span>
      </div>
    `);
  }

  function wireStickyBar() {
    const bar = document.getElementById('stickyBar');
    const dismiss = document.getElementById('stickyDismiss');
    const nav = document.getElementById('mainNav');
    if (!bar) return;
    let dismissed = false;
    function update() {
      if (dismissed) return;
      const heroH = document.querySelector('.hero')?.offsetHeight || 600;
      const show = window.scrollY > heroH * 0.7;
      bar.classList.toggle('visible', show);
      if (nav) nav.style.top = (show ? bar.offsetHeight : 0) + 'px';
    }
    dismiss?.addEventListener('click', () => {
      dismissed = true;
      bar.classList.remove('visible');
      if (nav) nav.style.top = '0';
    });
    window.addEventListener('scroll', update, { passive: true });
  }

  function wireMobileMenu() {
    const hamburger = document.getElementById('navHamburger');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('mobileMenuClose');
    if (!hamburger || !menu) return;
    hamburger.addEventListener('click', () => {
      menu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    });
    const closeMenu = () => {
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    };
    close?.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  function wireNavScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 10), { passive: true });
  }

  function wireTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(el => {
      const tip = document.createElement('div');
      tip.className = 'discovery-tooltip';
      tip.innerHTML = `<div class="dt-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>Opens WhatsApp</div>
        <p>${el.dataset.tooltip}</p>`;
      el.style.position = 'relative';
      el.appendChild(tip);
      el.addEventListener('mouseenter', () => tip.classList.add('visible'));
      el.addEventListener('mouseleave', () => tip.classList.remove('visible'));
      el.addEventListener('focus', () => tip.classList.add('visible'));
      el.addEventListener('blur', () => tip.classList.remove('visible'));
    });
  }

  function wireReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }
  // Exposed so page-specific renderers (home, therapist profile, condition
  // page) can call it again after they inject their own .reveal elements.
  window.mwObserveReveals = wireReveal;

  function init() {
    if (typeof CONTENT === 'undefined') return;
    setFavicon();
    renderStickyBar();
    renderNav();
    renderMobileMenu();
    renderFooter();
    wireStickyBar();
    wireMobileMenu();
    wireNavScroll();
    wireTooltips();
    wireReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
