/**
 * PAGE / BLOG POST
 * Every post's article body is written directly into its own
 * .html file (it's a real, one-off piece of writing — that's
 * not duplication, it's the article). This file only fills in
 * the one thing that used to be hand-maintained per post and
 * silently drifted: the "next read" link, computed here from
 * content/blog-posts.js so reordering the journal never again
 * means editing 39 files by hand.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONTENT === 'undefined' || !CONTENT.blog) return;
  const nextEl = document.querySelector('.post-next');
  if (!nextEl) return;

  const posts = CONTENT.blog.posts;
  const slug = document.body.dataset.postSlug;
  const i = posts.findIndex(p => p.slug === slug);
  if (i === -1) return;
  const next = posts[(i + 1) % posts.length];

  nextEl.href = mwAsset(next.slug);
  nextEl.querySelector('.post-next-title').textContent = next.title;
});
