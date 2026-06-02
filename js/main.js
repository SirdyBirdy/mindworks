/**
 * ─────────────────────────────────────────────────────────────────
 *  MINDWORKS COUNSELLING — MAIN JS
 *  Renders homepage from CONTENT, handles nav, tooltips, reveals
 * ─────────────────────────────────────────────────────────────────
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONTENT === "undefined") return;

  // ── RENDER: NAV ─────────────────────────────────────────────────
  const navMid = document.querySelector(".nav-mid");
  if (navMid) {
    navMid.innerHTML = CONTENT.nav.links.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join("");
  }
  const navCta = document.querySelector(".nav-cta");
  if (navCta) {
    navCta.setAttribute("href", CONTENT.nav.cta.href);
    navCta.setAttribute("target", "_blank");
    navCta.setAttribute("rel", "noopener");
    const navCtaSpan = navCta.querySelector("span");
    if (navCtaSpan) navCtaSpan.textContent = CONTENT.nav.cta.label;
    navCta.setAttribute("data-tooltip", CONTENT.nav.cta.tooltip);
  }

  // ── RENDER: HERO ────────────────────────────────────────────────
  const eyebrowText = document.querySelector(".hero-left .eyebrow-text");
  if (eyebrowText) eyebrowText.textContent = CONTENT.hero.eyebrow;

  const h1 = document.querySelector(".hero-h1");
  if (h1) h1.innerHTML = CONTENT.hero.h1;

  const heroBody = document.querySelector(".hero-body");
  if (heroBody) heroBody.textContent = CONTENT.hero.body;

  const primaryBtn = document.querySelector(".btn-primary");
  if (primaryBtn) {
    primaryBtn.setAttribute("href", CONTENT.hero.ctaPrimary.href);
    primaryBtn.setAttribute("target", "_blank");
    primaryBtn.setAttribute("rel", "noopener");
    const span = primaryBtn.querySelector("span");
    if (span) span.textContent = CONTENT.hero.ctaPrimary.label;
    if (CONTENT.hero.ctaPrimary.tooltip) {
      primaryBtn.setAttribute("data-tooltip", CONTENT.hero.ctaPrimary.tooltip);
    }
  }

  const secondaryBtn = document.querySelector(".btn-secondary");
  if (secondaryBtn) {
    secondaryBtn.setAttribute("href", CONTENT.hero.ctaSecondary.href);
    secondaryBtn.querySelector("span")
      ? secondaryBtn.querySelector("span").textContent = CONTENT.hero.ctaSecondary.label
      : secondaryBtn.firstChild.textContent = CONTENT.hero.ctaSecondary.label;
  }

  const statNum = document.querySelector(".stat-float-num");
  if (statNum) statNum.textContent = CONTENT.hero.statNumber;

  const statLabel = document.querySelector(".stat-float-label");
  if (statLabel) statLabel.textContent = CONTENT.hero.statLabel;

  const ticker = document.querySelector(".hero-ticker-text");
  if (ticker) ticker.textContent = CONTENT.hero.availabilityText;

  const caption = document.querySelector(".portrait-caption");
  if (caption) caption.textContent = CONTENT.hero.portraitCaption;

  // ── RENDER: MARQUEE ─────────────────────────────────────────────
  const marqueeTrack = document.querySelector(".marquee-track");
  if (marqueeTrack) {
    const doubled = [...CONTENT.marquee, ...CONTENT.marquee];
    marqueeTrack.innerHTML = doubled.map(t =>
      `<span class="m-item">${t}</span>`
    ).join("");
  }

  // ── RENDER: APPROACH ────────────────────────────────────────────
  const approachLeft = document.querySelector(".approach-left");
  if (approachLeft) {
    const ey = approachLeft.querySelector(".eyebrow-text");
    if (ey) ey.textContent = CONTENT.approach.eyebrow;
    const h2 = approachLeft.querySelector("h2");
    if (h2) h2.innerHTML = CONTENT.approach.h2;
    const p = approachLeft.querySelector("p");
    if (p) p.textContent = CONTENT.approach.body;
  }

  document.querySelectorAll(".approach-card").forEach((card, i) => {
    const d = CONTENT.approach.cards[i];
    if (!d) return;
    card.querySelector(".ac-num").textContent = d.num;
    card.querySelector(".ac-title").textContent = d.title;
    card.querySelector(".ac-body").textContent = d.body;
  });

  // ── RENDER: TOPICS ──────────────────────────────────────────────
  const topicsEyebrow = document.querySelector(".topics .eyebrow");
  if (topicsEyebrow) topicsEyebrow.innerHTML = `<span class="eyebrow-line"></span>${CONTENT.topics.eyebrow}`;

  const topicsH2 = document.querySelector(".topics-header h2");
  if (topicsH2) topicsH2.innerHTML = CONTENT.topics.h2;

  // ── RENDER: THERAPISTS ──────────────────────────────────────────
  const WA_ICON = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" width="11" height="11"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const tGrid = document.querySelector(".t-grid");
  if (tGrid) {
    tGrid.innerHTML = CONTENT.therapists.list.map((t, i) => `
      <div class="t-card reveal reveal-d${(i % 4) + 1}">
        <div class="t-img">
          ${t.photo ? `<img src="${t.photo}" alt="${t.name}" loading="lazy">` : t.initials}
        </div>
        <div class="t-body">
          <div class="t-name">${t.name}</div>
          <div class="t-spec">${t.specialisms.join(" · ")}</div>
          <div class="t-foot">
            <span class="t-exp">${t.experience}</span>
            <span class="t-price">${t.price}</span>
          </div>
          <div class="t-actions">
            <a href="therapists/${t.id}.html" class="t-profile-link">View profile →</a>
            <a href="${t.bookingLink}" target="_blank" rel="noopener" class="t-book-btn">
              ${WA_ICON} ${CONTENT.therapists.bookCTALabel}
            </a>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ── RENDER: ASSESSMENTS ─────────────────────────────────────────
  const assessGrid = document.querySelector(".assess-grid");
  if (assessGrid) {
    assessGrid.innerHTML = CONTENT.assessments.cards.map((c, i) => `
      <div class="assess-card reveal reveal-d${i + 1}">
        <div class="assess-q">${c.label}</div>
        <div class="assess-title">${c.title}</div>
        <div class="assess-desc">${c.description}</div>
        <button class="assess-link" onclick="openAssessmentModal('${c.id}')">
          ${c.linkLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </button>
      </div>
    `).join("");
  }

  // ── RENDER: PULL QUOTE ──────────────────────────────────────────
  const pqText = document.querySelector(".pq-text");
  if (pqText) pqText.textContent = `"${CONTENT.pullQuote.quote}"`;

  const pqAttr = document.querySelector(".pq-attr");
  if (pqAttr) pqAttr.textContent = CONTENT.pullQuote.attribution;

  // ── RENDER: FOOTER CTA ──────────────────────────────────────────
  const fctaEyebrow = document.querySelector(".fcta-eyebrow");
  if (fctaEyebrow) fctaEyebrow.textContent = CONTENT.footerCta.eyebrow;

  const fctaH = document.querySelector(".fcta-h");
  if (fctaH) fctaH.innerHTML = CONTENT.footerCta.h2;

  const fctaSub = document.querySelector(".fcta-sub");
  if (fctaSub) fctaSub.innerHTML = CONTENT.footerCta.body;

  const fctaPrimary = document.querySelector(".btn-cream");
  if (fctaPrimary) {
    fctaPrimary.setAttribute("href", CONTENT.footerCta.ctaPrimary.href);
    fctaPrimary.setAttribute("target", "_blank");
    fctaPrimary.setAttribute("rel", "noopener");
    const span = fctaPrimary.querySelector("span");
    if (span) span.textContent = CONTENT.footerCta.ctaPrimary.label;
  }

  const fctaSecondary = document.querySelector(".btn-ghost-dark");
  if (fctaSecondary) {
    fctaSecondary.setAttribute("href", CONTENT.footerCta.ctaSecondary.href);
    fctaSecondary.setAttribute("target", "_blank");
    fctaSecondary.setAttribute("rel", "noopener");
    fctaSecondary.textContent = CONTENT.footerCta.ctaSecondary.label;
  }

  // ── RENDER: FOOTER ──────────────────────────────────────────────
  const footerDesc = document.querySelector(".f-desc");
  if (footerDesc) footerDesc.textContent = CONTENT.footer.description;

  document.querySelectorAll(".f-col").forEach((col, i) => {
    const data = CONTENT.footer.columns[i];
    if (!data) return;
    const label = col.querySelector(".f-label");
    if (label) label.textContent = data.heading;
    const links = col.querySelector(".f-links");
    if (links) links.innerHTML = data.links.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join("");
  });

  // ── DISCOVERY CALL TOOLTIP ──────────────────────────────────────
  document.querySelectorAll("[data-tooltip]").forEach(el => {
    const tip = document.createElement("div");
    tip.className = "discovery-tooltip";
    tip.innerHTML = `
      <div class="dt-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        Opens WhatsApp
      </div>
      <p>${el.getAttribute("data-tooltip")}</p>
    `;
    el.style.position = "relative";
    el.appendChild(tip);
    el.addEventListener("mouseenter", () => tip.classList.add("visible"));
    el.addEventListener("mouseleave", () => tip.classList.remove("visible"));
    el.addEventListener("focus",      () => tip.classList.add("visible"));
    el.addEventListener("blur",       () => tip.classList.remove("visible"));
  });

  // ── MOBILE NAV ──────────────────────────────────────────────────
  const hamburger = document.querySelector(".nav-hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open);
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileMenu.classList.remove("open"));
    });
  }

  // ── SCROLL REVEAL ───────────────────────────────────────────────
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

  // ── STICKY NAV SHADOW ───────────────────────────────────────────
  const nav = document.querySelector("nav#mainNav");
  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
});
