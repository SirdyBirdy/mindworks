/**
 * PAGE / BLOG INDEX
 * Renders blog/index.html's filterable post grid from
 * content/blog-posts.js. Posts live at the site root as
 * "/<slug>" (no /blog/ prefix, no .html) so they keep the exact
 * URLs they had on the old site and don't lose their SEO. The
 * links are built with mwAsset(), which resolves from this
 * page's depth (blog/ -> "../<slug>").
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONTENT === 'undefined' || !CONTENT.blog) return;

  const posts = CONTENT.blog.posts;
  const grid = document.getElementById('blog-grid');
  const filtersEl = document.getElementById('blog-filters');
  let activeTag = 'all';

  const tags = [...new Set(posts.map(p => p.tag).filter(Boolean))];
  filtersEl.querySelector('[data-tag="all"]')?.addEventListener('click', () => setFilter('all'));
  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.tag = tag;
    btn.textContent = tag;
    btn.addEventListener('click', () => setFilter(tag));
    filtersEl.appendChild(btn);
  });

  function setFilter(tag) {
    activeTag = tag;
    filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.tag === tag));
    renderPosts();
  }

  function renderPosts() {
    const filtered = activeTag === 'all' ? posts : posts.filter(p => p.tag === activeTag);
    if (!filtered.length) {
      grid.innerHTML = '<div class="blog-empty"><p>Nothing here yet.</p></div>';
      return;
    }
    grid.innerHTML = filtered.map((post, i) => {
      const isFeatured = post.featured && activeTag === 'all';
      return `
        <a href="${mwAsset(post.slug)}" class="post-card${isFeatured ? ' featured' : ''} reveal reveal-d${(i % 4) + 1}">
          <div class="post-thumb" data-num="${String(i + 1).padStart(2, '0')}">
            <span class="post-thumb-tag">${post.tag || 'Article'}</span>
          </div>
          <div class="post-body">
            <div class="post-meta">
              <span>${post.date}</span><span class="post-meta-dot"></span><span>${post.readTime}</span>
              ${post.author ? `<span class="post-meta-dot"></span><span>${post.author}</span>` : ''}
            </div>
            <div class="post-title">${post.title}</div>
            <div class="post-excerpt">${post.excerpt}</div>
            <span class="post-link">Read${MW_ICON_ARROW}</span>
          </div>
        </a>`;
    }).join('');
    requestAnimationFrame(() => window.mwObserveReveals && window.mwObserveReveals());
  }

  renderPosts();
});
