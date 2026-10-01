/**
 * ============================================================
 *  PAGE / CONDITION
 *  One engine for both the conditions hub (conditions/index.html)
 *  and every individual condition landing page
 *  (conditions/<slug>/index.html). Reads content/conditions.js;
 *  which one it renders is decided by document.body.dataset.
 *  conditionSlug — "hub" for the index, or a key from
 *  CONTENT.conditions for a detail page.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONTENT === 'undefined') return;
  const slug = document.body.dataset.conditionSlug;
  if (slug === 'hub') renderHub(); else renderDetail(slug);
  document.querySelectorAll('a[data-wa-general]').forEach(a => { a.href = CONTENT.whatsapp.general; });
  requestAnimationFrame(() => window.mwObserveReveals && window.mwObserveReveals());
});

function renderBreadcrumb(label) {
  const el = document.getElementById('cpBreadcrumb');
  if (!el) return;
  el.innerHTML = `<a href="${mwAsset('index.html')}">Home</a><span class="cp-sep">/</span><span class="cp-current">${label}</span>`;
}

function renderHub() {
  const d = CONTENT.conditionsHub;
  renderBreadcrumb('What we help with');
  const eyebrow = document.getElementById('cpEyebrowText');
  const h1 = document.getElementById('cpH1');
  const intro = document.getElementById('cpIntro');
  if (eyebrow) eyebrow.textContent = d.eyebrow;
  if (h1) h1.innerHTML = d.h1;
  if (intro) intro.textContent = d.intro;

  const grid = document.getElementById('cpGrid');
  if (grid) {
    grid.innerHTML = CONTENT.conditionsOrder.map(key => {
      const c = CONTENT.conditions[key];
      return `<a class="ch-card" href="${c.slug}/index.html">
        <span class="ch-card-tag">${c.tag}</span>
        <span class="ch-card-title">${c.title}</span>
        <span class="ch-card-teaser">${c.teaser}</span>
        <span class="ch-card-link">Learn more${MW_ICON_ARROW}</span>
      </a>`;
    }).join('');
  }
}

function renderDetail(slug) {
  const c = CONTENT.conditions[slug];
  if (!c) return;

  document.title = `${c.metaTitle} | Mindworks Counselling`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${location.origin}/conditions/${c.slug}/`);

  renderBreadcrumb(c.title);
  const eyebrow = document.getElementById('cpEyebrowText');
  const h1 = document.getElementById('cpH1');
  const intro = document.getElementById('cpIntro');
  if (eyebrow) eyebrow.textContent = c.eyebrow;
  if (h1) h1.innerHTML = c.h1;
  if (intro) intro.textContent = c.intro;

  const signs = document.getElementById('cpSignsGrid');
  if (signs) signs.innerHTML = c.signs.map(s => `
    <div class="cp-sign-card"><svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg><span>${s}</span></div>`).join('');

  const approachIntro = document.getElementById('cpApproachIntro');
  const approachBody = document.getElementById('cpApproachBody');
  const modalities = document.getElementById('cpModalities');
  if (approachIntro) approachIntro.textContent = c.approachIntro;
  if (approachBody) approachBody.textContent = c.approachBody;
  if (modalities) modalities.innerHTML = c.modalities.map(m => `<span class="cp-modality-pill">${m}</span>`).join('');

  const fitYes = document.getElementById('cpFitYes');
  const fitNo = document.getElementById('cpFitNo');
  if (fitYes) fitYes.textContent = c.whoFor;
  if (fitNo) fitNo.textContent = c.whoNotFor;

  const faqList = document.getElementById('cpFaqList');
  if (faqList) {
    faqList.innerHTML = c.faq.map((item, i) => `
      <div class="cp-faq-item" id="cpFaqItem${i}">
        <div class="cp-faq-q" onclick="window.cpToggleFaq(${i})"><span>${item.q}</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div>
        <div class="cp-faq-a">${item.a}</div>
      </div>`).join('');
    injectFaqSchema(c.faq);
  }

  const fctaEyebrow = document.getElementById('cpFctaEyebrow');
  const fctaH = document.getElementById('cpFctaH');
  const fctaSub = document.getElementById('cpFctaSub');
  if (fctaEyebrow) fctaEyebrow.textContent = c.footerCta.eyebrow;
  if (fctaH) fctaH.innerHTML = c.footerCta.heading;
  if (fctaSub) fctaSub.textContent = c.footerCta.sub;
}

function injectFaqSchema(faq) {
  if (!faq.length) return;
  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a.replace(/<[^>]+>/g, '') } })),
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

window.cpToggleFaq = function (i) {
  const item = document.getElementById(`cpFaqItem${i}`);
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.cp-faq-item.open').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
};
