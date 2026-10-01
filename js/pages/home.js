/**
 * ============================================================
 *  PAGE / HOME
 *  Renders every index.html section from CONTENT (content/site.js
 *  + content/home.js + content/therapists.js). Nav, sticky bar,
 *  and footer are handled by js/core/chrome.js, not here.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONTENT === 'undefined') return;

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);
  const set = (sel, prop, val, ctx = document) => { const el = $(sel, ctx); if (el != null && val != null) el[prop] = val; };

  /* ── HERO ──────────────────────────────────────────────── */
  const h = CONTENT.hero;
  set('.hero-left .eyebrow-text', 'textContent', h.eyebrow);
  set('.hero-h1', 'innerHTML', h.h1);
  set('.hero-body', 'textContent', h.body);
  set('.stat-float-num', 'textContent', h.statNumber);
  set('.stat-float-label', 'textContent', h.statLabel);
  set('.hero-ticker-text', 'textContent', h.ticker);

  const primaryBtn = $('.btn-primary');
  if (primaryBtn) {
    primaryBtn.href = CONTENT.whatsapp.general;
    const sp = $('span', primaryBtn);
    if (sp) sp.textContent = h.ctaPrimary.label;
  }
  const secondaryBtn = $('.btn-secondary');
  if (secondaryBtn) {
    secondaryBtn.href = h.ctaSecondary.href;
    const sp = $('span', secondaryBtn);
    if (sp) sp.textContent = h.ctaSecondary.label;
  }

  /* Hero team deck cards — built here, then animated by
     js/features/hero-carousel.js, which listens for this event. */
  const carouselDeck = $('#carouselDeck');
  if (carouselDeck) {
    const deckCards = CONTENT.therapists.list.map(t => ({
      initials: t.initials, gradient: t.gradient, photo: t.photo,
      name: t.name, role: t.role, href: `therapists/${t.id}.html`,
    }));
    carouselDeck.innerHTML = deckCards.map(card => `
      <div class="deck-card" data-href="${card.href}" style="background:${card.gradient}">
        <div class="deck-card-img">
          ${card.photo ? `<img src="${mwAsset(card.photo)}" alt="${card.name}" loading="lazy">` : `<div class="deck-card-placeholder">${card.initials}</div>`}
        </div>
        <div class="deck-card-caption">
          <div class="deck-card-name">${card.name}</div>
          <div class="deck-card-role">${card.role}</div>
        </div>
        <div class="deck-card-hint">Tap to view profile</div>
      </div>`).join('');
    document.dispatchEvent(new CustomEvent('mw:deckCardsReady'));
  }

  /* ── MARQUEE ───────────────────────────────────────────── */
  const track = $('.marquee-track');
  if (track) {
    const items = [...CONTENT.marquee, ...CONTENT.marquee];
    track.innerHTML = items.map(t => `<span class="m-item">${t}</span>`).join('');
  }

  /* ── APPROACH ──────────────────────────────────────────── */
  const al = $('.approach-left');
  if (al) {
    set('.eyebrow-text', 'textContent', CONTENT.approach.eyebrow, al);
    set('h2', 'innerHTML', CONTENT.approach.h2, al);
    set('p', 'textContent', CONTENT.approach.body, al);
  }
  $$('.approach-card').forEach((card, i) => {
    const d = CONTENT.approach.cards[i]; if (!d) return;
    set('.ac-num', 'textContent', d.num, card);
    set('.ac-title', 'textContent', d.title, card);
    set('.ac-body', 'textContent', d.body, card);
  });

  /* ── TOPICS ────────────────────────────────────────────── */
  const topicsEy = $('.topics .eyebrow');
  if (topicsEy) topicsEy.innerHTML = `<span class="eyebrow-line"></span>${CONTENT.topics.eyebrow}`;
  set('.topics-header h2', 'innerHTML', CONTENT.topics.h2);
  const topicsViewAll = $('.topics-header a[href]');
  if (topicsViewAll) topicsViewAll.href = mwAsset(CONTENT.topics.viewAllHref);

  const bento = $('.bento');
  if (bento) bento.innerHTML = CONTENT.topics.cells.map((c, i) => `
    <div class="bento-cell${c.size === 'large' ? ' bento-large' : ''} reveal reveal-d${(i % 4) + 1}">
      <div class="bc-num">${c.label}</div>
      <div class="bc-text">${c.text}</div>
    </div>`).join('');

  /* ── THERAPISTS ────────────────────────────────────────── */
  const ts = CONTENT.therapistsSection;
  const tgEy = $('.therapists .eyebrow');
  if (tgEy) tgEy.innerHTML = `<span class="eyebrow-line"></span>${ts.eyebrow}`;
  set('.therapists-h', 'innerHTML', ts.h2);
  const tViewAll = $('.therapists-top a[href]');
  if (tViewAll) tViewAll.href = mwAsset(ts.viewAllHref);

  const tGrid = $('.t-grid');
  if (tGrid) tGrid.innerHTML = CONTENT.therapists.list.map((t, i) => `
    <div class="t-card reveal reveal-d${(i % 4) + 1}" data-href="${mwAsset('therapists/' + t.id + '.html')}" style="cursor:pointer">
      <div class="t-img">${t.photo
        ? `<img src="${mwAsset(t.photo)}" alt="${t.name}" loading="lazy">`
        : t.initials}</div>
      <div class="t-body">
        <div class="t-name">${t.name}</div>
        <div class="t-spec">${t.specialisms.join(' · ')}</div>
        <div class="t-foot">
          <span class="t-exp">${t.experienceLabel}</span>
          <span class="t-price">${t.price}</span>
        </div>
        <div class="t-actions">
          <a href="${mwAsset('therapists/' + t.id + '.html')}" class="t-profile-link" onclick="event.stopPropagation()">View profile →</a>
          <a href="${CONTENT.whatsapp.bookWith(t.name.split(' ')[0])}" target="_blank" rel="noopener" class="t-book-btn" onclick="event.stopPropagation()">
            ${MW_ICON_WHATSAPP} Book with ${t.name.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>`).join('');

  $$('.t-card[data-href]').forEach(card => {
    card.addEventListener('click', () => { if (card.dataset.href) window.location.href = card.dataset.href; });
  });

  /* ── ASSESSMENTS ───────────────────────────────────────── */
  const as = CONTENT.assessmentsSection;
  const asEy = $('.assess .eyebrow');
  if (asEy) asEy.innerHTML = `<span class="eyebrow-line"></span>${as.eyebrow}`;
  set('.assess-top h2', 'innerHTML', as.h2);
  set('.assess-sub', 'textContent', as.subtitle);

  const assessGrid = $('.assess-grid');
  if (assessGrid) assessGrid.innerHTML = as.cards.map((c, i) => `
    <div class="assess-card reveal reveal-d${i + 1}">
      <div class="assess-q">${c.label}</div>
      <div class="assess-title">${c.title}</div>
      <div class="assess-desc">${c.description}</div>
      <button class="assess-link" onclick="openAssessmentModal('${c.id}')">
        ${c.linkLabel}
        ${MW_ICON_ARROW}
      </button>
    </div>`).join('');

  /* ── PULL QUOTE ────────────────────────────────────────── */
  set('.pq-label', 'textContent', CONTENT.pullQuote.eyebrow);
  set('.pq-text', 'textContent', `"${CONTENT.pullQuote.quote}"`);
  set('.pq-attr', 'textContent', CONTENT.pullQuote.attribution);

  /* ── LOCATIONS ─────────────────────────────────────────── */
  const ls = CONTENT.locationsSection;
  const locEy = $('.locations .eyebrow');
  if (locEy) locEy.innerHTML = `<span class="eyebrow-line"></span>${ls.eyebrow}`;
  set('.locations-top h2', 'innerHTML', ls.h2);
  set('.locations-sub', 'textContent', ls.subtitle);

  const locGrid = $('.locations-grid');
  if (locGrid) locGrid.innerHTML = ls.list.map((loc, i) => {
    const hasPhoto = !loc.online && loc.image;
    const mapInner = hasPhoto
      ? `<img src="${mwAsset(loc.image)}" alt="${loc.name} — Mindworks Counselling" loading="lazy">
         <div class="loc-map-photo-badge"><span class="loc-map-pulse"></span>${loc.name}</div>`
      : `${!loc.online ? '<div class="loc-map-pulse"></div>' : ''}
        <div class="loc-map-pin${loc.online ? '-dark' : ''}">
          ${loc.online
            ? `<svg viewBox="0 0 24 24" style="stroke:rgba(247,246,242,0.5);fill:none;stroke-width:1.5;width:32px;height:32px"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
            : `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`}
          <span class="loc-map-label"${loc.online ? ' style="color:rgba(247,246,242,0.5)"' : ''}>${loc.name}</span>
        </div>`;
    return `
    <div class="loc-card reveal reveal-d${i + 1}">
      <div class="loc-map${hasPhoto ? ' loc-map-photo' : ''}"${loc.online ? ' style="background:var(--ink)"' : ''}>${mapInner}</div>
      <div class="loc-body">
        <span class="loc-tag"><span class="loc-tag-dot"></span>${loc.tag}</span>
        <div class="loc-name">${loc.name}</div>
        <div class="loc-address">${loc.address}</div>
        <div class="loc-details">
          <div class="loc-detail"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${loc.hours}</div>
          <div class="loc-detail"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>${loc.therapists}</div>
        </div>
        <div class="loc-actions">
          <a href="${loc.mapsHref}" class="loc-directions" target="_blank" rel="noopener">${loc.mapsLabel}${MW_ICON_ARROW}</a>
        </div>
      </div>
    </div>`;
  }).join('');

  /* ── FOOTER CTA ────────────────────────────────────────── */
  set('.fcta-eyebrow', 'textContent', CONTENT.footerCta.eyebrow);
  set('.fcta-h', 'innerHTML', CONTENT.footerCta.h2);
  set('.fcta-sub', 'innerHTML', CONTENT.footerCta.body);

  const fctaPrimary = $('.btn-cream');
  if (fctaPrimary) {
    fctaPrimary.href = CONTENT.whatsapp.general;
    const sp = $('span', fctaPrimary);
    if (sp) sp.textContent = CONTENT.footerCta.ctaPrimary.label;
  }
  const fctaSecondary = $('.btn-ghost-dark');
  if (fctaSecondary) {
    fctaSecondary.href = CONTENT.whatsapp.general;
    fctaSecondary.textContent = CONTENT.footerCta.ctaSecondary.label;
  }

  /* ── SCROLL REVEAL for everything just rendered ──────────
     chrome.js already ran its reveal observer once on
     DOMContentLoaded, before any of the markup above existed,
     so re-run it here now that these sections have content. */
  requestAnimationFrame(() => window.mwObserveReveals && window.mwObserveReveals());
});
