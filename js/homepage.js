/**
 * ============================================================
 *  MINDWORKS COUNSELLING — HOMEPAGE RENDERER
 *  Reads from CONTENT (content.js) and builds every section.
 *  No content lives in index.html; edit content.js instead.
 * ============================================================
 */

(function () {

  /* ── HELPERS ─────────────────────────────────────────── */

  const WA_ICON = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" width="11" height="11"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const ARROW_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>`;
  const CLOCK_SVG = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  const PEOPLE_SVG = `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`;
  const PIN_SVG   = `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
  const GLOBE_SVG = `<svg viewBox="0 0 24 24" style="stroke: rgba(247,246,242,0.5)"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`;

  function eyebrow(text) {
    return `<div class="eyebrow"><span class="eyebrow-line"></span><span class="eyebrow-text">${text}</span></div>`;
  }

  /* ── 1. HERO ─────────────────────────────────────────── */
  (function buildHero() {
    const h = CONTENT.hero;

    // Build deck cards HTML
    const cardsHTML = h.deckCards.map((c, i) => `
      <div class="deck-card">
        <div class="deck-card-img">
          ${c.photo
            ? `<img src="${c.photo}" alt="${c.name}">`
            : `<div class="deck-card-placeholder" style="background:${c.gradient}">${c.initials}</div>`
          }
        </div>
        <div class="deck-card-caption">
          <div class="deck-card-name">${c.name}</div>
          <div class="deck-card-role">${c.role}</div>
        </div>
        ${i === 0 ? `<div class="deck-card-hint">tap to browse</div>` : ''}
      </div>
    `).join('');

    document.getElementById('hero').innerHTML = `
      <div class="hero-left">
        ${eyebrow(h.eyebrow)}
        <h1 class="hero-h1">${h.h1}</h1>
        <p class="hero-body">${h.body}</p>
        <div class="hero-actions">
          <a href="${h.ctaPrimary.href}" class="btn-primary" target="_blank" rel="noopener">
            <span>${h.ctaPrimary.label}</span>
            ${ARROW_SVG}
          </a>
          <a href="${h.ctaSecondary.href}" class="btn-secondary">
            ${h.ctaSecondary.label}
            ${ARROW_SVG}
          </a>
        </div>
      </div>

      <div class="hero-right">
        <div class="blob"></div>
        <div class="portrait-carousel" id="heroCarousel">
          <div class="portrait-deck" id="carouselDeck">
            ${cardsHTML}
          </div>
          <button class="carousel-arrow carousel-arrow-prev" id="carouselPrev" aria-label="Previous team member">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="carousel-arrow carousel-arrow-next" id="carouselNext" aria-label="Next team member">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div class="carousel-dots" id="carouselDots"></div>
        </div>

        <div class="stat-float">
          <div class="stat-float-num">${h.statNumber}</div>
          <div class="stat-float-label">${h.statLabel}</div>
        </div>
        <div class="hero-ticker">
          <span class="ticker-dot"></span>
          <span class="hero-ticker-text">${h.availability}</span>
        </div>
      </div>
    `;
  })();

  /* ── 2. MARQUEE ──────────────────────────────────────── */
  (function buildMarquee() {
    // Double the items so the CSS scroll loop is seamless
    const items = [...CONTENT.marquee, ...CONTENT.marquee];
    const html = items.map(t => `<span class="m-item">${t}</span>`).join('');
    document.getElementById('mw-marquee').innerHTML = `<div class="marquee-track">${html}</div>`;
  })();

  /* ── 3. APPROACH ─────────────────────────────────────── */
  (function buildApproach() {
    const a = CONTENT.approach;
    const cardsHTML = a.cards.map((c, i) => `
      <div class="approach-card">
        <div class="ac-num">${c.num}</div>
        <div class="ac-title">${c.title}</div>
        <div class="ac-body">${c.body}</div>
      </div>
    `).join('');

    document.getElementById('approach').innerHTML = `
      <div class="approach-left">
        ${eyebrow(a.eyebrow)}
        <h2>${a.h2}</h2>
        <p>${a.body}</p>
      </div>
      <div class="approach-right">
        ${cardsHTML}
      </div>
    `;
  })();

  /* ── 4. TOPICS / BENTO ───────────────────────────────── */
  (function buildTopics() {
    const t = CONTENT.topics;
    const cellsHTML = t.cells.map(c => {
      const large = c.size === 'large' ? ' bento-large' : '';
      return `
        <div class="bento-cell${large}">
          <div class="bc-num">${c.label}</div>
          <div class="bc-text">${c.text}</div>
        </div>
      `;
    }).join('');

    document.getElementById('topics').innerHTML = `
      <div class="topics-header">
        <div>
          ${eyebrow(t.eyebrow)}
          <h2>${t.h2}</h2>
        </div>
      </div>
      <div class="bento">
        ${cellsHTML}
      </div>
    `;
  })();

  /* ── 5. THERAPISTS ───────────────────────────────────── */
  (function buildTherapists() {
    const th = CONTENT.therapists;

    const cardsHTML = th.list.map((t, i) => `
      <div class="t-card">
        <div class="t-img">
          ${t.photo ? `<img src="${t.photo}" alt="${t.name}">` : t.initials}
        </div>
        <div class="t-body">
          <div class="t-name">${t.name}</div>
          <div class="t-spec">${t.specialisms}</div>
          <div class="t-foot">
            <span class="t-exp">${t.experience}</span>
            <span class="t-price">${t.price}</span>
          </div>
          <div class="t-actions">
            <a href="${t.profileHref}" class="t-profile-link">View profile →</a>
            <a href="${t.bookingLink}" class="t-book-btn" target="_blank" rel="noopener">
              ${WA_ICON}
              ${t.bookingLabel}
            </a>
          </div>
        </div>
      </div>
    `).join('');

    document.getElementById('therapists').innerHTML = `
      <div class="therapists-top">
        <div>
          ${eyebrow(th.eyebrow)}
          <h2 class="therapists-h">${th.h2}</h2>
        </div>
        <a href="${th.viewAllHref}"
           style="font-size:0.78rem;color:rgba(249,244,235,0.4);text-decoration:none;display:flex;align-items:center;gap:0.4rem;transition:color 0.2s"
           onmouseover="this.style.color='rgba(249,244,235,0.8)'"
           onmouseout="this.style.color='rgba(249,244,235,0.4)'">
          ${th.viewAllLabel}
          ${ARROW_SVG}
        </a>
      </div>
      <div class="t-grid">
        ${cardsHTML}
      </div>
    `;
  })();

  /* ── 6. ASSESSMENTS ──────────────────────────────────── */
  (function buildAssessments() {
    const a = CONTENT.assessments;

    const cardsHTML = a.cards.map((c, i) => `
      <div class="assess-card">
        <div class="assess-q">${c.label}</div>
        <div class="assess-title">${c.title}</div>
        <div class="assess-desc">${c.description}</div>
        <button class="assess-link" onclick="openAssessmentModal('${c.id}')">
          ${c.linkLabel}
          <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </button>
      </div>
    `).join('');

    document.getElementById('assessments').innerHTML = `
      <div class="assess-top">
        <div>
          ${eyebrow(a.eyebrow)}
          <h2>${a.h2}</h2>
        </div>
        <p class="assess-sub">${a.subtitle}</p>
      </div>
      <div class="assess-grid">
        ${cardsHTML}
      </div>
    `;
  })();

  /* ── 7. PULL QUOTE ───────────────────────────────────── */
  (function buildPullQuote() {
    const pq = CONTENT.pullQuote;
    document.getElementById('pull-quote').innerHTML = `
      <div>
        <div class="pq-label">${pq.eyebrow}</div>
        <div class="pq-accent-line"></div>
      </div>
      <div>
        <p class="pq-text">"${pq.quote}"</p>
        <p class="pq-attr">${pq.attribution}</p>
      </div>
    `;
  })();

  /* ── 8. LOCATIONS ────────────────────────────────────── */
  (function buildLocations() {
    const lc = CONTENT.locations;

    const cardsHTML = lc.list.map((loc, i) => {
      const mapInner = loc.online
        ? `<div class="loc-map" style="background: var(--ink);">
             <div class="loc-map-pin">
               ${GLOBE_SVG}
               <span class="loc-map-label" style="color: rgba(247,246,242,0.5)">${loc.mapLabel}</span>
             </div>
           </div>`
        : `<div class="loc-map">
             <div class="loc-map-pulse"></div>
             <div class="loc-map-pin">
               ${PIN_SVG}
               <span class="loc-map-label">${loc.mapLabel}</span>
             </div>
           </div>`;

      return `
        <div class="loc-card">
          ${mapInner}
          <div class="loc-body">
            <span class="loc-tag"><span class="loc-tag-dot"></span>${loc.tag}</span>
            <div class="loc-name">${loc.name}</div>
            <div class="loc-address">${loc.address}</div>
            <div class="loc-details">
              <div class="loc-detail">
                ${CLOCK_SVG}
                ${loc.hours}
              </div>
              <div class="loc-detail">
                ${PEOPLE_SVG}
                ${loc.therapists}
              </div>
            </div>
            <div class="loc-actions">
              <a href="${loc.mapsHref}" class="loc-directions" target="_blank" rel="noopener">
                ${loc.mapsLabel}
                ${ARROW_SVG}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('locations').innerHTML = `
      <div class="locations-top">
        <div>
          ${eyebrow(lc.eyebrow)}
          <h2>${lc.h2}</h2>
        </div>
        <p class="locations-sub">${lc.subtitle}</p>
      </div>
      <div class="locations-grid">
        ${cardsHTML}
      </div>
    `;
  })();

  /* ── 9. FOOTER CTA ───────────────────────────────────── */
  (function buildFooterCta() {
    const fc = CONTENT.footerCta;
    document.getElementById('footer-cta').innerHTML = `
      <div class="fcta-bg" aria-hidden="true">mindworks</div>
      <div class="fcta-eyebrow">${fc.eyebrow}</div>
      <h2 class="fcta-h">${fc.h2}</h2>
      <p class="fcta-sub">${fc.body}</p>
      <div class="fcta-actions">
        <a href="${fc.ctaPrimary.href}" class="btn-cream" target="_blank" rel="noopener">
          <span>${fc.ctaPrimary.label}</span>
          ${ARROW_SVG}
        </a>
        <a href="${fc.ctaSecondary.href}" class="btn-ghost-dark" target="_blank" rel="noopener">
          ${fc.ctaSecondary.label}
        </a>
      </div>
    `;
  })();

})();
