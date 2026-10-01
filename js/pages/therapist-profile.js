/**
 * ============================================================
 *  PAGE / THERAPIST PROFILE
 *  Builds an entire therapist profile page from one entry in
 *  content/therapists.js. Each therapists/<slug>.html is now
 *  just a shell: <body data-therapist-id="..."> plus the mount
 *  points chrome.js and this file need. All the actual content
 *  — bio, FAQ, fit, education — lives in content/therapists.js
 *  and nowhere else, so it's edited once and stays consistent
 *  with the home page cards and the discovery modal.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONTENT === 'undefined') return;

  const id = document.body.dataset.therapistId;
  const t = CONTENT.therapists.list.find(x => x.id === id);
  const root = document.getElementById('profileRoot');
  if (!t || !root) {
    if (root) root.innerHTML = '<p style="padding:4rem 2.5rem">Couldn\u2019t find that therapist\u2019s profile.</p>';
    return;
  }

  const first = t.name.split(' ')[0];
  const wa = CONTENT.whatsapp.bookWith(first);

  document.title = `${t.name} — ${CONTENT.site.wordmark.replace(/<[^>]+>/g, '')} Counselling`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', `${t.name} — ${t.role} at Mindworks Counselling, Pune. ${t.specialisms.join(', ')}. ${t.formats}.`);

  const faqHTML = t.faq.map((item, i) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">
        ${item.q}
        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="faq-a">${item.a}</div>
    </div>`).join('');

  const metaGrid = [
    ['Session fee', t.price + (t.priceDetail ? '' : ' / session')],
    t.duration ? ['Duration', t.duration] : null,
    ['Availability', t.availability],
    ['Formats', t.formats],
    ['Languages', t.languages],
    ['Discovery call', 'Free · 15 min'],
  ].filter(Boolean).map(([label, value]) => `
    <div class="profile-meta-item">
      <div class="profile-meta-label">${label}</div>
      <div class="profile-meta-value">${value}</div>
    </div>`).join('');

  root.innerHTML = `
    <a href="${mwAsset('index.html')}#therapists" class="profile-back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      Back to all therapists
    </a>

    <div class="profile-hero">
      <div>
        <div class="profile-portrait">
          ${t.photo ? `<img src="${mwAsset(t.photo)}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 20%;display:block;">` : `<div class="profile-portrait-placeholder">${t.initials}</div>`}
        </div>
        <div class="profile-tags">${t.tags.map(tag => `<span class="profile-tag">${tag}</span>`).join('')}</div>
      </div>
      <div class="profile-right">
        <div class="profile-eyebrow eyebrow"><span class="eyebrow-line"></span>${t.role}</div>
        <h1 class="profile-name">${t.name}</h1>
        <div class="profile-role">${t.role}</div>
        <div class="profile-credentials">${t.credentials}</div>
        <div class="profile-tagline">"${t.tagline}"</div>
        <div class="profile-meta">${metaGrid}${t.priceDetail ? `<div class="profile-meta-item" style="grid-column:1/-1"><div class="profile-meta-label">Also</div><div class="profile-meta-value">${t.priceDetail}</div></div>` : ''}</div>
        <div class="profile-cta">
          <a href="${wa}" target="_blank" rel="noopener" class="btn-primary"><span>Book with ${first}</span>${MW_ICON_ARROW}</a>
          <a href="${CONTENT.whatsapp.general}" target="_blank" rel="noopener" class="btn-secondary">WhatsApp first</a>
        </div>
      </div>
    </div>

    <div class="profile-body">
      <div class="profile-section reveal">
        <div class="profile-section-label">What people bring</div>
        <div><h2>What do people most commonly come to ${first} with?</h2>
          <ul class="specialty-list">${t.peopleBring.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
      </div>

      <div class="profile-section reveal">
        <div class="profile-section-label">Approach</div>
        <div><h2>How ${first} works</h2>
          ${t.introPull ? `<p class="profile-intro-pull">"${t.introPull}"</p>` : ''}
          <p>${t.approach}</p>
          <p><strong>Modalities:</strong> ${t.modalities.join(' · ')}</p>
        </div>
      </div>

      ${t.inTheRoom ? `
      <div class="profile-section reveal">
        <div class="profile-section-label">In the room</div>
        <div><h2>What does a session with ${first} actually feel like?</h2><p>${t.inTheRoom}</p></div>
      </div>` : ''}

      <div class="profile-section reveal">
        <div class="profile-section-label">Good fit</div>
        <div><h2>Who does ${first} work especially well with?</h2>
          <div class="fit-grid">${t.fitFor.map(f => `<div class="fit-item">${f}</div>`).join('')}</div>
          ${t.notFitFor ? `<p style="margin-top:1.25rem;font-size:0.82rem;color:var(--muted)"><strong>Who might not be the best fit:</strong> ${t.notFitFor}</p>` : ''}
        </div>
      </div>

      <div class="profile-section reveal">
        <div class="profile-section-label">${first}\u2019s story</div>
        <div><h2>How did ${first} get into this work?</h2>
          ${t.story.map(p => `<p>${p}</p>`).join('')}
          ${t.outsideSessions ? `<div class="outside-sessions"><p>${t.outsideSessions}</p></div>` : ''}
        </div>
      </div>

      <div class="profile-section reveal">
        <div class="profile-section-label">Before you start</div>
        <div><h2>What ${first} wishes people knew before starting therapy</h2>
          <div class="wish-block"><p>"${t.wishTheyKnew}"</p></div>
        </div>
      </div>

      <div class="profile-section reveal">
        <div class="profile-section-label">Qualifications</div>
        <div><h2>Education & credentials</h2>
          <ul class="edu-list">${t.education.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
      </div>

      <div class="profile-section reveal">
        <div class="profile-section-label">FAQ</div>
        <div><h2>Common questions</h2><div class="faq-list">${faqHTML}</div></div>
      </div>
    </div>

    <div class="profile-footer-cta">
      <div class="pfc-bg" aria-hidden="true">mindworks</div>
      <div class="pfc-eyebrow">Ready to start?</div>
      <h2 class="pfc-h">Book with <em>${first}</em></h2>
      <div class="pfc-actions">
        <a href="${wa}" target="_blank" rel="noopener" class="btn-cream"><span>Book free 15-min call</span>${MW_ICON_ARROW}</a>
        <a href="${CONTENT.whatsapp.general}" target="_blank" rel="noopener" class="btn-ghost-dark">WhatsApp instead</a>
      </div>
    </div>
  `;

  requestAnimationFrame(() => window.mwObserveReveals && window.mwObserveReveals());
});

// ── FAQ TOGGLE (shared with condition pages' markup pattern) ──
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(o => { if (o !== item) o.classList.remove('open'); });
  item.classList.toggle('open', !isOpen);
}
