/**
 * topics-links.js — Mindworks Counselling
 *
 * Progressive enhancement for the homepage Topics/bento section.
 * Makes every rendered .bento-cell clickable, leading to the
 * /conditions/ hub page (which then leads to each specific
 * condition page). Deliberately one shared destination for the
 * whole grid, not per-cell deep links — keeps content.js's bento
 * copy free to change without needing to stay in sync with which
 * condition pages exist yet.
 *
 * Does NOT touch main.js. Only reads the DOM main.js already
 * produced, and bails out safely if there's nothing to enhance.
 *
 * Load order on index.html: content.js, shared.js, main.js, THEN this.
 */
(function () {
  function init() {
    const wrap = document.querySelector('.bento');
    if (!wrap) return;

    const dest = (window.CONTENT && window.CONTENT.topics && window.CONTENT.topics.viewAllHref) || 'conditions/';
    const root = window.MW_ROOT || './';
    const url  = root + dest;

    const cells = wrap.querySelectorAll('.bento-cell');
    if (!cells.length) return;

    cells.forEach(function (el) {
      el.style.cursor = 'pointer';
      el.setAttribute('role', 'link');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', 'See all conditions we treat');

      const go = function () { window.location.href = url; };

      el.addEventListener('click', go);
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          go();
        }
      });
    });
  }

  function run() {
    // main.js also runs on DOMContentLoaded and needs to finish
    // rendering the bento cells first; deferring a tick keeps this
    // safely after that regardless of script order edge cases.
    setTimeout(init, 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
