/**
 * ============================================================
 *  CORE / PATHS
 *  Works out how deep the current page is (index.html = 0,
 *  therapists/x.html = 1, blog/x.html = 1) from the literal,
 *  authored src of this script's own <script> tag, and exposes
 *  window.MW_ROOT so every other script can build a correct
 *  relative link or image path regardless of page depth or
 *  hosting subpath (works the same on Netlify, GitHub Pages
 *  project pages, or a plain folder preview).
 *
 *  Must load FIRST, before content/site.js and before any
 *  script that calls mwAsset() or mwLink().
 * ============================================================
 */

(function () {
  const rawSrc = document.currentScript?.getAttribute('src') || '';
  const depth = (rawSrc.match(/\.\.\//g) || []).length;
  // Root-absolute src (used by 404.html, which can be served at any depth)
  window.MW_ROOT = rawSrc.startsWith('/') ? '/' : (depth > 0 ? '../'.repeat(depth) : './');
})();

/** Resolve a root-relative path (e.g. "images/team/x.jpeg" or
    "therapists/") against the current page's depth. */
function mwAsset(path) {
  return (window.MW_ROOT || './') + path;
}
