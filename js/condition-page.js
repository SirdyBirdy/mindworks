/* ─────────────────────────────────────────────────────────────────
   MINDWORKS COUNSELLING — CONDITION PAGE RENDERER
   One engine for every /[condition]/index.html page. Each page loads
   its own small data file (js/condition-content/[name].js) BEFORE
   this script, which sets window.CONDITION_CONTENT. This file never
   contains page-specific copy — only rendering logic.
───────────────────────────────────────────────────────────────── */

(function () {
  function renderBreadcrumb(c) {
    const el = document.getElementById('cpBreadcrumb');
    if (!el) return;
    el.innerHTML =
      '<a href="/">Home</a>' +
      '<span class="cp-sep">/</span>' +
      '<span class="cp-current">' + c.pageLabel + '</span>';
  }

  function renderHero(c) {
    const eyebrow = document.getElementById('cpEyebrowText');
    const h1 = document.getElementById('cpH1');
    const intro = document.getElementById('cpIntro');
    if (eyebrow) eyebrow.textContent = c.eyebrow;
    if (h1) h1.innerHTML = c.h1;
    if (intro) intro.textContent = c.intro;
  }

  function renderSigns(c) {
    const wrap = document.getElementById('cpSignsGrid');
    if (!wrap || !Array.isArray(c.signs)) return;
    wrap.innerHTML = c.signs.map(function (s) {
      return '<div class="cp-sign-card">' +
        '<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>' +
        '<span>' + s + '</span></div>';
    }).join('');
  }

  function renderApproach(c) {
    const introEl = document.getElementById('cpApproachIntro');
    const bodyEl = document.getElementById('cpApproachBody');
    const pillsEl = document.getElementById('cpModalities');
    if (introEl) introEl.textContent = c.approachIntro;
    if (bodyEl) bodyEl.textContent = c.approachBody;
    if (pillsEl && Array.isArray(c.modalities)) {
      pillsEl.innerHTML = c.modalities.map(function (m) {
        return '<span class="cp-modality-pill">' + m + '</span>';
      }).join('');
    }
  }

  function renderFit(c) {
    const yesEl = document.getElementById('cpFitYes');
    const noEl = document.getElementById('cpFitNo');
    if (yesEl) yesEl.textContent = c.whoFor;
    if (noEl) noEl.textContent = c.whoNotFor;
  }

  function renderFaq(c) {
    const wrap = document.getElementById('cpFaqList');
    if (!wrap || !Array.isArray(c.faq)) return;
    wrap.innerHTML = c.faq.map(function (item, i) {
      return '<div class="cp-faq-item" id="cpFaqItem' + i + '">' +
        '<div class="cp-faq-q" onclick="window.cpToggleFaq(' + i + ')">' +
          '<span>' + item.q + '</span>' +
          '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>' +
        '</div>' +
        '<div class="cp-faq-a">' + item.a + '</div>' +
      '</div>';
    }).join('');
  }

  function renderFooterCta(c) {
    const eyebrow = document.getElementById('cpFctaEyebrow');
    const h = document.getElementById('cpFctaH');
    const sub = document.getElementById('cpFctaSub');
    if (eyebrow) eyebrow.textContent = c.footerCta.eyebrow;
    if (h) h.innerHTML = c.footerCta.heading;
    if (sub) sub.textContent = c.footerCta.sub;
  }

  function injectFaqSchema(c) {
    if (!Array.isArray(c.faq) || !c.faq.length) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": c.faq.map(function (item) {
        return {
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a.replace(/<[^>]+>/g, '') }
        };
      })
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // Toggle handler exposed globally (mirrors the existing toggleFaq pattern
  // used on therapist profile pages, kept separate/namespaced so the two
  // don't collide if ever loaded on the same page).
  window.cpToggleFaq = function (i) {
    const item = document.getElementById('cpFaqItem' + i);
    if (!item) return;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.cp-faq-item.open').forEach(function (el) { el.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
  };

  document.addEventListener('DOMContentLoaded', function () {
    const c = window.CONDITION_CONTENT;
    if (!c) {
      console.error('condition-page.js: window.CONDITION_CONTENT not found. Make sure the page-specific content file loads before condition-page.js.');
      return;
    }
    renderBreadcrumb(c);
    renderHero(c);
    renderSigns(c);
    renderApproach(c);
    renderFit(c);
    renderFaq(c);
    renderFooterCta(c);
    injectFaqSchema(c);

    // trigger reveal-on-scroll if shared.js's observer hasn't already caught these
    document.querySelectorAll('.reveal').forEach(function (el) {
      requestAnimationFrame(function () { el.classList.add('in'); });
    });
  });
})();
