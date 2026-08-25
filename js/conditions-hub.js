/* ─────────────────────────────────────────────────────────────────
   MINDWORKS COUNSELLING — CONDITIONS HUB RENDERER
   Renders /conditions/index.html from window.CONDITIONS_INDEX
   (js/conditions-content.js). Separate from condition-page.js
   since the hub's shape (a list of cards) is different from an
   individual condition page's shape (signs/approach/FAQ).
───────────────────────────────────────────────────────────────── */
(function () {
  function renderBreadcrumb(d) {
    const el = document.getElementById('chBreadcrumb');
    if (!el) return;
    el.innerHTML =
      '<a href="/">Home</a>' +
      '<span class="cp-sep">/</span>' +
      '<span class="cp-current">' + d.pageLabel + '</span>';
  }

  function renderHero(d) {
    const eyebrow = document.getElementById('chEyebrowText');
    const h1 = document.getElementById('chH1');
    const intro = document.getElementById('chIntro');
    if (eyebrow) eyebrow.textContent = d.eyebrow;
    if (h1) h1.innerHTML = d.h1;
    if (intro) intro.textContent = d.intro;
  }

  function renderGrid(d) {
    const wrap = document.getElementById('chGrid');
    if (!wrap || !Array.isArray(d.items)) return;
    const root = window.MW_ROOT || './';

    wrap.innerHTML = d.items.map(function (item) {
      return '<a class="ch-card" href="' + root + item.href + '">' +
        '<span class="ch-card-tag">' + item.tag + '</span>' +
        '<span class="ch-card-title">' + item.title + '</span>' +
        '<span class="ch-card-teaser">' + item.teaser + '</span>' +
        '<span class="ch-card-link">Learn more' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>' +
        '</span>' +
      '</a>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const d = window.CONDITIONS_INDEX;
    if (!d) {
      console.error('conditions-hub.js: window.CONDITIONS_INDEX not found. Make sure js/conditions-content.js loads before this script.');
      return;
    }
    renderBreadcrumb(d);
    renderHero(d);
    renderGrid(d);

    document.querySelectorAll('.reveal').forEach(function (el) {
      requestAnimationFrame(function () { el.classList.add('in'); });
    });
  });
})();
