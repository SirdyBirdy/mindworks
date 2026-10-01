/**
 * PAGE / THERAPISTS INDEX
 * Renders therapists/index.html — the full team grid — from
 * content/therapists.js.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONTENT === 'undefined') return;
  const grid = document.getElementById('tiGrid');
  if (!grid) return;

  grid.innerHTML = CONTENT.therapists.list.map((t, i) => `
    <div class="t-card reveal reveal-d${(i % 4) + 1}" data-href="${t.id}.html" style="cursor:pointer">
      <div class="t-img">${t.photo ? `<img src="${mwAsset(t.photo)}" alt="${t.name}" loading="lazy">` : t.initials}</div>
      <div class="t-body">
        <div class="t-name">${t.name}</div>
        <div class="t-spec">${t.specialisms.join(' · ')}</div>
        <div class="t-foot"><span class="t-exp">${t.experienceLabel}</span><span class="t-price">${t.price}</span></div>
        <div class="t-actions">
          <a href="${t.id}.html" class="t-profile-link" onclick="event.stopPropagation()">View profile →</a>
          <a href="${CONTENT.whatsapp.bookWith(t.name.split(' ')[0])}" target="_blank" rel="noopener" class="t-book-btn" onclick="event.stopPropagation()">
            ${MW_ICON_WHATSAPP} Book with ${t.name.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>`).join('');

  grid.querySelectorAll('.t-card[data-href]').forEach(card => {
    card.addEventListener('click', () => { window.location.href = card.dataset.href; });
  });

  requestAnimationFrame(() => window.mwObserveReveals && window.mwObserveReveals());
});
