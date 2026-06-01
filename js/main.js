/**
 * ─────────────────────────────────────────────────────────────────
 *  MINDWORKS COUNSELLING — MAIN JS
 *  Renders homepage from CONTENT, handles nav, tooltips, reveals
 * ─────────────────────────────────────────────────────────────────
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONTENT === "undefined") return;

  // ── RENDER: NAV ─────────────────────────────────────────────────
  const navEl = document.querySelector("nav");
  if (navEl) {
    navEl.querySelector(".logo em").textContent = "mind";
    const navMid = navEl.querySelector(".nav-mid");
    if (navMid) {
      navMid.innerHTML = CONTENT.nav.links.map(l =>
        `<a href="${l.href}">${l.label}</a>`
      ).join("");
    }
    const navCta = navEl.querySelector(".nav-cta");
    if (navCta) {
      navCta.setAttribute("href", CONTENT.site.bookingUrl);
      navCta.setAttribute("target", "_blank");
      navCta.setAttribute("rel", "noopener");
      navCta.querySelector("span").textContent = CONTENT.nav.cta.label;
      // Discovery tooltip
      navCta.setAttribute("data-tooltip", CONTENT.nav.cta.tooltip);
    }
  }

  // ── RENDER: HERO ────────────────────────────────────────────────
  const heroLeft = document.querySelector(".hero-left");
  if (heroLeft) {
    heroLeft.querySelector(".eyebrow-text").textContent = CONTENT.hero.eyebrow;
    const h1 = heroLeft.querySelector(".hero-h1");
    if (h1) {
      h1.innerHTML = CONTENT.hero.headline.map((line, i) =>
        i === CONTENT.hero.headlineAccentIndex
          ? `<em>${line}</em>`
          : line
      ).join("<br>");
    }
    const body = heroLeft.querySelector(".hero-body");
    if (body) body.textContent = CONTENT.hero.body;
    const primaryCta = heroLeft.querySelector(".btn-primary span");
    if (primaryCta) primaryCta.textContent = CONTENT.hero.primaryCta;
    const primaryBtn = heroLeft.querySelector(".btn-primary");
    if (primaryBtn) {
      primaryBtn.setAttribute("href", CONTENT.site.bookingUrl);
      primaryBtn.setAttribute("target", "_blank");
    }
  }

  const statNum = document.querySelector(".stat-float-num");
  if (statNum) statNum.textContent = CONTENT.hero.statNumber;
  const statLabel = document.querySelector(".stat-float-label");
  if (statLabel) statLabel.textContent = CONTENT.hero.statLabel;
  const ticker = document.querySelector(".hero-ticker-text");
  if (ticker) ticker.textContent = CONTENT.hero.availabilityBadge;
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
    approachLeft.querySelector(".eyebrow-text").textContent = CONTENT.approach.eyebrow;
    const h2 = approachLeft.querySelector("h2");
    if (h2) {
      h2.innerHTML = CONTENT.approach.headline.map((l, i) =>
        i === CONTENT.approach.headlineAccentLine ? `<em style="font-style:italic;color:var(--accent)">${l}</em>` : l
      ).join("<br>");
    }
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

  // ── RENDER: THERAPISTS ──────────────────────────────────────────
  const tGrid = document.querySelector(".t-grid");
  if (tGrid) {
    tGrid.innerHTML = CONTENT.therapists.people.map((t, i) => `
      <div class="t-card reveal reveal-d${(i % 4) + 1}">
        <div class="t-img">${t.photo ? `<img src="../${t.photo}" alt="${t.name}" loading="lazy">` : t.initials}</div>
        <div class="t-body">
          <div class="t-name">${t.name}</div>
          <div class="t-spec">${t.specialties.join(" · ")}</div>
          <div class="t-foot">
            <span class="t-exp">${t.experience}</span>
            <span class="t-price">${t.price}</span>
          </div>
          <div class="t-actions">
            <a href="therapists/${t.slug}.html" class="t-profile-link">View profile →</a>
            <a href="${CONTENT.site.bookingUrl}?counsellor=${encodeURIComponent(t.name)}" 
               target="_blank" rel="noopener" class="t-book-btn">
              Book with me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
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
      <div class="assess-card reveal reveal-d${i + 1}" data-type="${c.id}">
        <div class="assess-q">${c.label}</div>
        <div class="assess-title">${c.title}</div>
        <div class="assess-desc">${c.description}</div>
        <button class="assess-link" onclick="openAssessmentModal('${c.id}')">
          Take the test
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </button>
      </div>
    `).join("");
  }

  // ── RENDER: TESTIMONIAL ─────────────────────────────────────────
  const pqText = document.querySelector(".pq-text");
  if (pqText) pqText.textContent = `"${CONTENT.testimonial.quote}"`;
  const pqAttr = document.querySelector(".pq-attr");
  if (pqAttr) pqAttr.textContent = CONTENT.testimonial.attribution;

  // ── RENDER: FOOTER CTA ──────────────────────────────────────────
  const fctaH = document.querySelector(".fcta-h");
  if (fctaH) {
    fctaH.innerHTML = CONTENT.footerCta.headline.map((l, i) =>
      i === CONTENT.footerCta.headlineAccentLine ? `<em>${l}</em>` : l
    ).join("<br>");
  }
  const fctaSub = document.querySelector(".fcta-sub");
  if (fctaSub) fctaSub.innerHTML = CONTENT.footerCta.subtext.replace("\n", "<br>");
  const fctaPrimary = document.querySelector(".btn-cream");
  if (fctaPrimary) {
    fctaPrimary.setAttribute("href", CONTENT.site.bookingUrl);
    fctaPrimary.setAttribute("target", "_blank");
    fctaPrimary.querySelector("span").textContent = CONTENT.footerCta.primaryCta;
  }
  const fctaSecondary = document.querySelector(".btn-ghost-dark");
  if (fctaSecondary) {
    fctaSecondary.setAttribute("href", CONTENT.site.whatsapp);
    fctaSecondary.setAttribute("target", "_blank");
    fctaSecondary.textContent = CONTENT.footerCta.secondaryCta;
  }

  // ── RENDER: FOOTER ──────────────────────────────────────────────
  const footerDesc = document.querySelector(".f-desc");
  if (footerDesc) footerDesc.textContent = CONTENT.footer.description;
  document.querySelectorAll(".f-col").forEach((col, i) => {
    const data = CONTENT.footer.columns[i];
    if (!data) return;
    col.querySelector(".f-label").textContent = data.label;
    col.querySelector(".f-links").innerHTML = data.links.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join("");
  });

  // ── DISCOVERY CALL TOOLTIP ─────────────────────────────────────
  const tooltipTriggers = document.querySelectorAll("[data-tooltip]");
  tooltipTriggers.forEach(el => {
    const tip = document.createElement("div");
    tip.className = "discovery-tooltip";
    tip.innerHTML = `
      <div class="dt-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <p>${el.getAttribute("data-tooltip")}</p>
    `;
    el.style.position = "relative";
    el.appendChild(tip);

    el.addEventListener("mouseenter", () => tip.classList.add("visible"));
    el.addEventListener("mouseleave", () => tip.classList.remove("visible"));
    el.addEventListener("focus", () => tip.classList.add("visible"));
    el.addEventListener("blur", () => tip.classList.remove("visible"));
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
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
});
