/**
 * ============================================================
 *  FEATURE / DISCOVERY MODAL
 *  A faster path to WhatsApp than a single generic button, with
 *  a per-therapist shortcut list. Opens automatically once per
 *  browser session after the visitor scrolls halfway down the
 *  page (CONTENT.discoveryModal), and can be opened manually via
 *  window.openDiscoveryModal(). Regular "Book a free call"
 *  buttons elsewhere are NOT intercepted by this.
 *
 *  Requires content/site.js and content/therapists.js loaded
 *  first.
 * ============================================================
 */

(function () {
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    if (typeof CONTENT === 'undefined' || !CONTENT.discoveryModal) return;
    injectMarkup();
    wireBehavior();
    wireScrollAutoPopup();
  }

  function gradientFor(person) {
    return person.gradient || 'var(--teal, #4a8a7f)';
  }

  function injectMarkup() {
    if (document.getElementById('discoveryModal')) return;
    const m = CONTENT.discoveryModal;
    const people = CONTENT.therapists?.list || [];

    const chips = people.map(p => `
      <a href="${CONTENT.whatsapp.bookWith(p.name.split(' ')[0])}" target="_blank" rel="noopener" class="dm-t-chip" data-dm-close-after>
        <div class="dm-t-avatar" style="background:${gradientFor(p)}">
          ${p.photo ? `<img src="${mwAsset(p.photo)}" alt="${p.name}" loading="lazy">` : p.initials}
        </div>
        <div class="dm-t-info">
          <div class="dm-t-name">${p.name.split(' ')[0]}</div>
          <div class="dm-t-role">${(p.specialisms || []).slice(0, 1).join('')}</div>
        </div>
      </a>
    `).join('');

    const overlay = document.createElement('div');
    overlay.className = 'dm-overlay';
    overlay.id = 'discoveryModal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'dmTitle');
    overlay.innerHTML = `
      <div class="dm-panel">
        <button class="dm-close" aria-label="Close" data-dm-close>
          <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="dm-eyebrow"><span class="dm-eyebrow-dot"></span>${m.eyebrow}</div>
        <h2 class="dm-title" id="dmTitle">${m.title}</h2>
        <p class="dm-sub">${m.body}</p>
        <a href="${CONTENT.whatsapp.general}" target="_blank" rel="noopener" class="dm-primary" data-dm-close-after>
          ${MW_ICON_WHATSAPP}
          <span>${m.primaryLabel}</span>
        </a>
        <div class="dm-reassure"><span>${m.reassurance}</span></div>
        ${chips ? `<div class="dm-divider">${m.divider}</div><div class="dm-therapists">${chips}</div>` : ''}
        <div class="dm-footer-row">
          <a href="${CONTENT.site.phoneHref}" class="dm-footer-link">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            ${CONTENT.site.phone}
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const SESSION_KEY = 'mw_dm_shown';

  function sessionShown() {
    try { return sessionStorage.getItem(SESSION_KEY) === '1'; } catch (e) { return false; }
  }
  function markSessionShown() {
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) { /* no-op */ }
  }

  function wireScrollAutoPopup() {
    const threshold = CONTENT.discoveryModal.autoOpenAtScroll;
    if (!threshold || sessionShown()) return;
    let ticking = false;
    function checkScroll() {
      ticking = false;
      if (sessionShown()) { window.removeEventListener('scroll', onScroll); return; }
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (pct >= threshold) {
        window.removeEventListener('scroll', onScroll);
        const overlay = document.getElementById('discoveryModal');
        if (overlay && !overlay.classList.contains('open')) openDiscoveryModal();
      }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(checkScroll); } }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  let lastFocused = null;

  function wireBehavior() {
    const overlay = document.getElementById('discoveryModal');
    if (!overlay) return;
    overlay.addEventListener('click', e => { if (e.target === overlay) closeDiscoveryModal(); });
    overlay.querySelectorAll('[data-dm-close]').forEach(el => el.addEventListener('click', closeDiscoveryModal));
    overlay.querySelectorAll('[data-dm-close-after]').forEach(el => el.addEventListener('click', () => setTimeout(closeDiscoveryModal, 400)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeDiscoveryModal(); });
  }

  window.openDiscoveryModal = function () {
    const overlay = document.getElementById('discoveryModal');
    if (!overlay) return;
    lastFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    overlay.classList.add('open');
    markSessionShown();
    overlay.querySelector('.dm-close')?.focus();
  };

  window.closeDiscoveryModal = function () {
    const overlay = document.getElementById('discoveryModal');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  };
})();
