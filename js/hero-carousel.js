/**
 * ============================================================
 *  MINDWORKS — HERO TEAM CAROUSEL
 *  Autoscrolls through team member photos in the hero.
 *  Controls: prev/next arrows · dot indicators · touch/swipe
 *  Autoscroll pauses on hover and resumes on leave.
 *
 *  To add team photos, replace the placeholder divs in
 *  index.html with <img> tags:
 *    <img src="images/team/dimple.jpg" alt="Dimple Kishnani">
 * ============================================================
 */

(function () {
  "use strict";

  const AUTOSCROLL_DELAY = 3800; // ms between slides
  const TRANSITION_MS    = 600;  // must match CSS transition duration

  const track    = document.getElementById("carouselTrack");
  const prevBtn  = document.getElementById("carouselPrev");
  const nextBtn  = document.getElementById("carouselNext");
  const dotsWrap = document.getElementById("carouselDots");

  if (!track) return; // carousel not present on this page

  const slides     = Array.from(track.querySelectorAll(".portrait-slide"));
  const total      = slides.length;
  let   current    = 0;
  let   timer      = null;
  let   transitioning = false;

  /* ── Build dot indicators ─────────────────────────────── */
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className  = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));

  /* ── Core navigation ──────────────────────────────────── */
  function goTo(index, userAction) {
    if (transitioning) return;
    if (index === current) return;

    transitioning = true;
    current = ((index % total) + total) % total;

    // Slide the track
    track.style.transform = `translateX(-${current * 100}%)`;

    // Update dots
    dots.forEach((d, i) => d.classList.toggle("active", i === current));

    setTimeout(() => { transitioning = false; }, TRANSITION_MS);

    // If user manually navigated, reset the autoscroll timer
    if (userAction) resetTimer();
  }

  function next(userAction) { goTo(current + 1, userAction); }
  function prev(userAction) { goTo(current - 1, userAction); }

  /* ── Arrow buttons ────────────────────────────────────── */
  prevBtn?.addEventListener("click", () => prev(true));
  nextBtn?.addEventListener("click", () => next(true));

  /* ── Autoscroll ───────────────────────────────────────── */
  function startTimer() {
    timer = setInterval(() => next(false), AUTOSCROLL_DELAY);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function resetTimer() {
    stopTimer();
    startTimer();
  }

  startTimer();

  // Pause on hover / focus inside carousel
  const carousel = document.getElementById("heroCarousel");
  carousel?.addEventListener("mouseenter", stopTimer);
  carousel?.addEventListener("mouseleave", startTimer);
  carousel?.addEventListener("focusin",    stopTimer);
  carousel?.addEventListener("focusout",   startTimer);

  /* ── Touch / swipe support ────────────────────────────── */
  let touchStartX = null;

  carousel?.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
    stopTimer();
  }, { passive: true });

  carousel?.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next(true) : prev(true);
    }
    touchStartX = null;
    startTimer();
  }, { passive: true });

  /* ── Keyboard support (when carousel or child is focused) ─ */
  carousel?.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft")  { prev(true); e.preventDefault(); }
    if (e.key === "ArrowRight") { next(true); e.preventDefault(); }
  });

})();
