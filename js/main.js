/**
 * ============================================================
 *  MINDWORKS COUNSELLING — MAIN JS
 *  Renders every section from CONTENT. All behaviour here.
 *  No inline scripts in index.html.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONTENT === "undefined") return;

  /* ── helpers ─────────────────────────────────────────────── */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);
  const set = (sel, prop, val, ctx = document) => { const el = $(sel, ctx); if (el) el[prop] = val; };

  // Resolves a root-relative asset path (e.g. content.js photo fields,
  // which are written like "images/team/x.jpeg" with no leading slash)
  // against window.MW_ROOT — set synchronously by shared.js based on
  // how deep the current page is. This is what makes the same photo
  // path in content.js work correctly from index.html, from a page one
  // level deep like therapists/x.html, and under a GitHub Pages preview
  // subpath, without needing separate absolute/relative variants.
  const assetPath = (path) => (window.MW_ROOT || './') + path;

  /* ─────────────────────────────────────────────────────────
     STICKY BAR
  ───────────────────────────────────────────────────────── */
  const stickyBar    = document.getElementById("stickyBar");
  const stickyDismiss = document.getElementById("stickyDismiss");
  const stickyTextEl = $(".sticky-bar-text", stickyBar);
  const stickyCtaEl  = $(".sticky-bar-cta",  stickyBar);
  if (stickyTextEl) stickyTextEl.innerHTML = CONTENT.stickyBar.text;
  if (stickyCtaEl) {
    stickyCtaEl.href        = CONTENT.stickyBar.cta.href;
    stickyCtaEl.textContent = CONTENT.stickyBar.cta.label;
  }

  let barDismissed = false;
  function handleScroll() {
    if (barDismissed) return;
    const heroH  = $(".hero")?.offsetHeight || 600;
    const navEl  = document.getElementById("mainNav");
    const visible = window.scrollY > heroH * 0.7;
    stickyBar.classList.toggle("visible", visible);
    if (navEl) navEl.style.top = visible ? stickyBar.offsetHeight + "px" : "0";
  }
  stickyDismiss?.addEventListener("click", () => {
    barDismissed = true;
    stickyBar.classList.remove("visible");
    const navEl = document.getElementById("mainNav");
    if (navEl) navEl.style.top = "0";
  });
  window.addEventListener("scroll", handleScroll, { passive: true });

  /* ─────────────────────────────────────────────────────────
     NAV
  ───────────────────────────────────────────────────────── */
  const navMid = $(".nav-mid");
  if (navMid) navMid.innerHTML = CONTENT.nav.links
    .map(l => `<a href="${l.href}">${l.label}</a>`).join("");

  const navCta = $(".nav-cta");
  if (navCta) {
    navCta.href = CONTENT.nav.cta.href;
    navCta.setAttribute("target", "_blank");
    navCta.setAttribute("rel", "noopener");
    const sp = $("span", navCta);
    if (sp) sp.textContent = CONTENT.nav.cta.label;
    navCta.dataset.tooltip = CONTENT.nav.cta.tooltip;
  }

  // Mobile menu links
  const mobileMenu = $(".mobile-menu");
  if (mobileMenu) {
    // Keep close button, replace links
    const closeBtn = $(".mobile-menu-close", mobileMenu);
    mobileMenu.innerHTML = "";
    if (closeBtn) mobileMenu.appendChild(closeBtn);
    CONTENT.nav.mobileLinks.forEach(l => {
      const a = document.createElement("a");
      a.href = l.href; a.textContent = l.label;
      mobileMenu.appendChild(a);
    });
    const cta = document.createElement("a");
    cta.href = CONTENT.nav.mobileCta.href;
    cta.className = "mm-cta";
    cta.textContent = CONTENT.nav.mobileCta.label;
    cta.target = "_blank"; cta.rel = "noopener";
    mobileMenu.appendChild(cta);
  }

  // Mobile menu toggle
  const hamburger  = $(".nav-hamburger");
  const mobileClose = $(".mobile-menu-close");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
    });
    mobileClose?.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
    $$("a", mobileMenu).forEach(a =>
      a.addEventListener("click", () => mobileMenu.classList.remove("open"))
    );
  }

  /* ─────────────────────────────────────────────────────────
     HERO
  ───────────────────────────────────────────────────────── */
  const h = CONTENT.hero;
  set(".hero-left .eyebrow-text", "textContent", h.eyebrow);
  set(".hero-h1",   "innerHTML",  h.h1);
  set(".hero-body", "textContent", h.body);
  set(".stat-float-num",   "textContent", h.statNumber);
  set(".stat-float-label", "textContent", h.statLabel);
  set(".hero-ticker-text", "textContent", h.availability);
  set(".portrait-caption", "textContent", h.portraitCaption);

  // Portrait — swap placeholder for img if src provided
  const portraitWrap = $(".portrait-wrap");
  if (portraitWrap && h.portraitSrc) {
    portraitWrap.innerHTML = `<img src="${h.portraitSrc}" alt="${h.portraitAlt}">
      <div class="portrait-caption">${h.portraitCaption}</div>`;
  }

  const primaryBtn = $(".btn-primary");
  if (primaryBtn) {
    primaryBtn.href = h.ctaPrimary.href;
    primaryBtn.target = "_blank"; primaryBtn.rel = "noopener";
    const sp = $("span", primaryBtn);
    if (sp) sp.textContent = h.ctaPrimary.label;
  }
  const secondaryBtn = $(".btn-secondary");
  if (secondaryBtn) {
    secondaryBtn.href = h.ctaSecondary.href;
    const sp = $("span", secondaryBtn);
    if (sp) sp.textContent = h.ctaSecondary.label;
    else secondaryBtn.firstChild && (secondaryBtn.firstChild.textContent = h.ctaSecondary.label);
  }

  /* ── HERO TEAM DECK (carousel cards) ──────────────────────
     Builds the .deck-card elements inside #carouselDeck from
     CONTENT.hero.deckCards. This MUST run before hero-carousel.js
     initializes, since that script just animates whatever
     .deck-card elements already exist — it doesn't create them.
     (hero-carousel.js is wrapped in its own DOMContentLoaded
     listener registered after this one, so ordering is safe.)

     Each card gets a data-href attribute (from CONTENT.hero.
     deckCards[i].href) so hero-carousel.js can navigate to that
     therapist's profile page when the front card is clicked.
  ───────────────────────────────────────────────────────────── */
  const carouselDeck = $("#carouselDeck");
  if (carouselDeck && Array.isArray(h.deckCards)) {
    carouselDeck.innerHTML = h.deckCards.map(card => `
      <div class="deck-card" data-href="${card.href || ''}" style="background:${card.gradient || 'var(--teal)'}">
        <div class="deck-card-img">
          ${card.photo
            ? `<img src="${assetPath(card.photo)}" alt="${card.name}" loading="lazy">`
            : `<div class="deck-card-placeholder">${card.initials}</div>`}
        </div>
        <div class="deck-card-caption">
          <div class="deck-card-name">${card.name}</div>
          <div class="deck-card-role">${card.role}</div>
        </div>
        <div class="deck-card-hint">Tap to view profile</div>
      </div>`).join("");

    // Let hero-carousel.js know the cards are ready, in case it's
    // listening (see hero-carousel.js changes).
    document.dispatchEvent(new CustomEvent("mw:deckCardsReady"));
  }

  /* ─────────────────────────────────────────────────────────
     MARQUEE
  ───────────────────────────────────────────────────────── */
  const track = $(".marquee-track");
  if (track) {
    const items = [...CONTENT.marquee, ...CONTENT.marquee];
    track.innerHTML = items.map(t => `<span class="m-item">${t}</span>`).join("");
  }

  /* ─────────────────────────────────────────────────────────
     APPROACH
  ───────────────────────────────────────────────────────── */
  const al = $(".approach-left");
  if (al) {
    set(".eyebrow-text", "textContent", CONTENT.approach.eyebrow, al);
    set("h2", "innerHTML",  CONTENT.approach.h2,   al);
    set("p",  "textContent", CONTENT.approach.body, al);
  }
  $$(".approach-card").forEach((card, i) => {
    const d = CONTENT.approach.cards[i]; if (!d) return;
    set(".ac-num",   "textContent", d.num,   card);
    set(".ac-title", "textContent", d.title, card);
    set(".ac-body",  "textContent", d.body,  card);
  });

  /* ─────────────────────────────────────────────────────────
     TOPICS
  ───────────────────────────────────────────────────────── */
  const topicsEy = $(".topics .eyebrow");
  if (topicsEy) topicsEy.innerHTML = `<span class="eyebrow-line"></span>${CONTENT.topics.eyebrow}`;
  set(".topics-header h2", "innerHTML", CONTENT.topics.h2);

  const bento = $(".bento");
  if (bento) bento.innerHTML = CONTENT.topics.cells.map((c, i) => `
    <div class="bento-cell${c.size === 'large' ? ' bento-large' : ''} reveal reveal-d${(i%4)+1}">
      <div class="bc-num">${c.label}</div>
      <div class="bc-text">${c.text}</div>
    </div>`).join("");

  /* ─────────────────────────────────────────────────────────
     THERAPISTS
     The whole .t-card navigates to the therapist's profile page
     on click. The "Book with X" button stops the click from
     bubbling so it still opens WhatsApp in a new tab instead of
     also triggering the card's navigation.
  ───────────────────────────────────────────────────────── */
  const tgEy = $(".therapists .eyebrow");
  if (tgEy) tgEy.innerHTML = `<span class="eyebrow-line"></span>${CONTENT.therapists.eyebrow}`;
  set(".therapists-h", "innerHTML", CONTENT.therapists.h2);

  const viewAll = $(".therapists-top a[href]");
  if (viewAll) viewAll.href = CONTENT.therapists.viewAllHref;

  const tGrid = $(".t-grid");
  if (tGrid) tGrid.innerHTML = CONTENT.therapists.list.map((t, i) => `
    <div class="t-card reveal reveal-d${(i%4)+1}" data-href="${t.profileHref}" style="cursor:pointer">
      <div class="t-img">${t.photo
        ? `<img src="${assetPath(t.photo)}" alt="${t.name}" loading="lazy">`
        : t.initials}</div>
      <div class="t-body">
        <div class="t-name">${t.name}</div>
        <div class="t-spec">${t.specialisms.join(" · ")}</div>
        <div class="t-foot">
          <span class="t-exp">${t.experience}</span>
          <span class="t-price">${t.price}</span>
        </div>
        <div class="t-actions">
          <a href="${t.profileHref}" class="t-profile-link" onclick="event.stopPropagation()">View profile →</a>
          <a href="${t.bookingLink}" target="_blank" rel="noopener" class="t-book-btn" onclick="event.stopPropagation()">
            ${WA_ICON_SVG} Book with ${t.name.split(" ")[0]}
          </a>
        </div>
      </div>
    </div>`).join("");

  // Whole-card click → profile page (ignored for clicks already
  // handled by the nested links above, since those stopPropagation).
  $$(".t-card[data-href]").forEach(card => {
    card.addEventListener("click", () => {
      if (card.dataset.href) window.location.href = card.dataset.href;
    });
  });

  /* ─────────────────────────────────────────────────────────
     ASSESSMENTS
  ───────────────────────────────────────────────────────── */
  const asEy = $(".assess .eyebrow");
  if (asEy) asEy.innerHTML = `<span class="eyebrow-line"></span>${CONTENT.assessments.eyebrow}`;
  set(".assess-top h2",  "innerHTML",  CONTENT.assessments.h2);
  set(".assess-sub",     "textContent", CONTENT.assessments.subtitle);

  const assessGrid = $(".assess-grid");
  if (assessGrid) assessGrid.innerHTML = CONTENT.assessments.cards.map((c, i) => `
    <div class="assess-card reveal reveal-d${i+1}">
      <div class="assess-q">${c.label}</div>
      <div class="assess-title">${c.title}</div>
      <div class="assess-desc">${c.description}</div>
      <button class="assess-link" onclick="openAssessmentModal('${c.id}')">
        ${c.linkLabel}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
      </button>
    </div>`).join("");

  /* ─────────────────────────────────────────────────────────
     PULL QUOTE
  ───────────────────────────────────────────────────────── */
  set(".pq-label", "textContent", CONTENT.pullQuote.eyebrow);
  set(".pq-text",  "textContent", `"${CONTENT.pullQuote.quote}"`);
  set(".pq-attr",  "textContent", CONTENT.pullQuote.attribution);

  /* ─────────────────────────────────────────────────────────
     LOCATIONS
     Each card's .loc-map shows a real photo when CONTENT.locations
     .list[i].image is set (root-relative, resolved via assetPath —
     same convention as therapist/hero photos). If `image` is empty
     (or the location is the online entry, which has no physical
     photo to show), it falls back to the original pin/globe SVG +
     pulse-dot treatment exactly as before. This is a pure fallback:
     nothing breaks for locations that don't have a photo yet.
  ───────────────────────────────────────────────────────── */
  const locEy = $(".locations .eyebrow");
  if (locEy) locEy.innerHTML = `<span class="eyebrow-line"></span>${CONTENT.locations.eyebrow}`;
  set(".locations-top h2", "innerHTML",  CONTENT.locations.h2);
  set(".locations-sub",    "textContent", CONTENT.locations.subtitle);

  const locGrid = $(".locations-grid");
  if (locGrid) locGrid.innerHTML = CONTENT.locations.list.map((loc, i) => {
    const hasPhoto = !loc.online && loc.image;

    const mapInner = hasPhoto
      ? `<img src="${assetPath(loc.image)}" alt="${loc.name} — Mindworks Counselling" loading="lazy">
         <div class="loc-map-photo-badge"><span class="loc-map-pulse"></span>${loc.name}</div>`
      : `
        ${!loc.online ? '<div class="loc-map-pulse"></div>' : ''}
        <div class="loc-map-pin${loc.online ? '-dark' : ''}">
          ${loc.online
            ? `<svg viewBox="0 0 24 24" style="stroke:rgba(247,246,242,0.5);fill:none;stroke-width:1.5;width:32px;height:32px"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
            : `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`}
          <span class="loc-map-label"${loc.online ? ' style="color:rgba(247,246,242,0.5)"' : ''}>${loc.name}</span>
        </div>`;

    return `
    <div class="loc-card reveal reveal-d${i+1}">
      <div class="loc-map${hasPhoto ? ' loc-map-photo' : ''}"${loc.online ? ' style="background:var(--ink)"' : ''}>
        ${mapInner}
      </div>
      <div class="loc-body">
        <span class="loc-tag"><span class="loc-tag-dot"></span>${loc.tag}</span>
        <div class="loc-name">${loc.name}</div>
        <div class="loc-address">${loc.address}</div>
        <div class="loc-details">
          <div class="loc-detail">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${loc.hours}
          </div>
          <div class="loc-detail">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            ${loc.therapists}
          </div>
        </div>
        <div class="loc-actions">
          <a href="${loc.mapsHref}" class="loc-directions" target="_blank" rel="noopener">
            ${loc.mapsLabel}
            <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </div>
    </div>`;
  }).join("");

  /* ─────────────────────────────────────────────────────────
     FOOTER CTA
  ───────────────────────────────────────────────────────── */
  set(".fcta-eyebrow", "textContent", CONTENT.footerCta.eyebrow);
  set(".fcta-h",       "innerHTML",   CONTENT.footerCta.h2);
  set(".fcta-sub",     "innerHTML",   CONTENT.footerCta.body);

  const fctaPrimary = $(".btn-cream");
  if (fctaPrimary) {
    fctaPrimary.href = CONTENT.footerCta.ctaPrimary.href;
    fctaPrimary.target = "_blank"; fctaPrimary.rel = "noopener";
    const sp = $("span", fctaPrimary);
    if (sp) sp.textContent = CONTENT.footerCta.ctaPrimary.label;
  }
  const fctaSecondary = $(".btn-ghost-dark");
  if (fctaSecondary) {
    fctaSecondary.href = CONTENT.footerCta.ctaSecondary.href;
    fctaSecondary.target = "_blank"; fctaSecondary.rel = "noopener";
    fctaSecondary.textContent = CONTENT.footerCta.ctaSecondary.label;
  }

  /* ─────────────────────────────────────────────────────────
     FOOTER
  ───────────────────────────────────────────────────────── */
  set(".f-desc", "textContent", CONTENT.footer.description);
  $$(".f-col").forEach((col, i) => {
    const d = CONTENT.footer.columns[i]; if (!d) return;
    set(".f-label", "textContent", d.heading, col);
    const links = $(".f-links", col);
    if (links) links.innerHTML = d.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("");
  });

  /* ─────────────────────────────────────────────────────────
     TOOLTIPS
  ───────────────────────────────────────────────────────── */
  $$("[data-tooltip]").forEach(el => {
    const tip = document.createElement("div");
    tip.className = "discovery-tooltip";
    tip.innerHTML = `<div class="dt-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>Opens WhatsApp</div>
      <p>${el.dataset.tooltip}</p>`;
    el.style.position = "relative";
    el.appendChild(tip);
    el.addEventListener("mouseenter", () => tip.classList.add("visible"));
    el.addEventListener("mouseleave", () => tip.classList.remove("visible"));
    el.addEventListener("focus",      () => tip.classList.add("visible"));
    el.addEventListener("blur",       () => tip.classList.remove("visible"));
  });

  /* ─────────────────────────────────────────────────────────
     SCROLL REVEAL
  ───────────────────────────────────────────────────────── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  // Observe after a tick so JS-rendered elements are in DOM
  requestAnimationFrame(() => $$(".reveal").forEach(el => obs.observe(el)));

  /* ─────────────────────────────────────────────────────────
     NAV SHADOW ON SCROLL
  ───────────────────────────────────────────────────────── */
  const mainNav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    mainNav?.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
});
