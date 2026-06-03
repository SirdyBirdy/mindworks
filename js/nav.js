document.getElementById('site-nav').innerHTML = `
  <div class="sticky-bar" id="stickyBar" role="complementary" aria-label="Book a discovery call">
    <span class="sticky-bar-text"><em>mindworks</em> — Ready when you are.</span>
    <a href="https://wa.me/919067485858?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20call" class="sticky-bar-cta" target="_blank" rel="noopener" aria-label="Schedule a discovery call on WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Schedule a discovery call
    </a>
    <button class="sticky-bar-dismiss" id="stickyDismiss" aria-label="Dismiss">×</button>
  </div>

  <nav id="mainNav">
    <a href="/index.html" class="logo"><em>mind</em>works</a>
    <div class="nav-mid">
      <a href="/index.html#therapists">Our therapists</a>
      <a href="/index.html#assessments">Self-assessments</a>
      <a href="/index.html#locations">Locations</a>
      <a href="/blog/blog.html">Journal</a>
    </div>
    <div class="nav-right">
      <a href="https://wa.me/919067485858?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20call" class="nav-cta" target="_blank" rel="noopener">
        <span>Schedule a discovery call</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
      </a>
    </div>
  </nav>

  <nav class="mobile-island" role="navigation" aria-label="Quick navigation">
    <a href="/index.html#therapists" class="island-item">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>
      Team
    </a>
    <a href="/index.html#locations" class="island-item">
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      Find us
    </a>
    <div class="island-divider" aria-hidden="true"></div>
    <a href="https://wa.me/919067485858?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20call" class="island-item-cta" target="_blank" rel="noopener" aria-label="Schedule a discovery call on WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Discovery call
    </a>
  </nav>
`;

// ── Sticky bar behaviour ──────────────────────────────────────────
const stickyBar = document.getElementById('stickyBar');
const stickyDismiss = document.getElementById('stickyDismiss');
let barDismissed = false;

stickyDismiss?.addEventListener('click', () => {
  barDismissed = true;
  stickyBar.classList.remove('visible');
  document.getElementById('mainNav').style.top = '0';
});

window.addEventListener('scroll', () => {
  if (!barDismissed) {
    if (window.scrollY > 300) {
      stickyBar.classList.add('visible');
      document.getElementById('mainNav').style.top = stickyBar.offsetHeight + 'px';
    } else {
      stickyBar.classList.remove('visible');
      document.getElementById('mainNav').style.top = '0';
    }
  }
  document.getElementById('mainNav')?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
