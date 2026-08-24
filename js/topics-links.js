/**
 * topics-links.js — Mindworks Counselling
 *
 * Progressive enhancement for the homepage Topics/bento section.
 * main.js renders CONTENT.topics.cells into .bento-cell elements; this
 * script runs afterwards and, for any cell that has an `href` set in
 * content.js, makes the matching rendered cell clickable.
 *
 * Deliberately does NOT touch main.js. It only reads the DOM main.js
 * already produced, and bails out safely if that markup doesn't look
 * like what it expects (e.g. main.js changes cell count or structure),
 * rather than risk breaking the homepage render.
 *
 * Load order on index.html: content.js, shared.js, main.js, THEN this.
 */
(function () {
  function init() {
    const cells = window.CONTENT && window.CONTENT.topics && window.CONTENT.topics.cells;
    const wrap  = document.querySelector('.bento');
    if (!Array.isArray(cells) || !wrap) return;

    const nodes = wrap.querySelectorAll('.bento-cell');
    // Guard: only proceed if main.js rendered exactly one cell per
    // content entry. If main.js's markup ever changes shape, this
    // script just does nothing instead of linking the wrong cell.
    if (!nodes.length || nodes.length !== cells.length) return;

    const root = window.MW_ROOT || './';

    cells.forEach(function (cell, i) {
      if (!cell.href) return;
      const el = nodes[i];
      if (!el) return;

      el.style.cursor = 'pointer';
      el.setAttribute('role', 'link');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', cell.text ? cell.text.replace(/<[^>]+>/g, '') : 'Learn more');

      const go = function () {
        window.location.href = root + cell.href;
      };

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
