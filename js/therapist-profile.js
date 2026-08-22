/**
 * MINDWORKS — THERAPIST PROFILE JS
 * Handles: photo injection from CONTENT, FAQ accordion,
 * scroll reveal, sticky nav, mobile menu
 */

// ── FAQ TOGGLE ───────────────────────────────────────────────────
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all others first
  document.querySelectorAll('.faq-item.open').forEach(openItem => {
    if (openItem !== item) openItem.classList.remove('open');
  });
  item.classList.toggle('open', !isOpen);
}

document.addEventListener('DOMContentLoaded', () => {

  // ── PHOTO INJECTION ────────────────────────────────────────────
  // Each profile page's <body> carries data-therapist-id="..."
  // matching an id in CONTENT.therapists.list (content.js). This
  // means the photo only ever needs to be set in one place —
  // content.js — and it'll show up here, on the homepage grid,
  // and in the homepage hero deck automatically.
  const portrait = document.querySelector('.profile-portrait');
  const therapistId = document.body.dataset.therapistId;
  if (portrait && therapistId && typeof CONTENT !== 'undefined') {
    const t = CONTENT.therapists.list.find(x => x.id === therapistId);
    if (t && t.photo) {
      // t.photo is root-relative (e.g. "images/team/x.jpeg", no leading
      // slash) — prefix with window.MW_ROOT (set synchronously by
      // shared.js) so it resolves correctly from this page's depth
      // (profile pages sit one level down, in /therapists/).
      const root = window.MW_ROOT || '../';
      portrait.innerHTML = `<img src="${root}${t.photo}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 20%;display:block;">`;
    }
  }

  // ── SCROLL REVEAL ──────────────────────────────────────────────
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ── STICKY NAV SHADOW ──────────────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── MOBILE MENU ────────────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
      // Small delay so display:flex kicks in before transition
      requestAnimationFrame(() => mobileMenu.classList.add('open'));
      hamburger.setAttribute('aria-expanded', 'true');
    });
    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    };
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  // ── DISCOVERY CALL TOOLTIP (nav CTA) ──────────────────────────
  const navCta = document.querySelector('.nav-cta');
  if (navCta && typeof CONTENT !== 'undefined') {
    const tooltipText = CONTENT.nav?.cta?.tooltip;
    if (tooltipText) {
      const tip = document.createElement('div');
      tip.className = 'discovery-tooltip';
      tip.innerHTML = `
        <div class="dt-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <p>${tooltipText}</p>
      `;
      navCta.style.position = 'relative';
      navCta.appendChild(tip);
      navCta.addEventListener('mouseenter', () => tip.classList.add('visible'));
      navCta.addEventListener('mouseleave', () => tip.classList.remove('visible'));
    }
  }
});
