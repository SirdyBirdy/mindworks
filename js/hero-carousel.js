/**
 * ============================================================
 *  MINDWORKS — HERO TEAM DECK
 *  Stacked card deck with blurred/dimmed back cards peeking.
 *  Click front card or arrows to cycle. Back cards fan on hover.
 *  To add photos: replace portrait-slide-placeholder with <img>.
 * ============================================================
 */

(function () {
  "use strict";

  const AUTOSCROLL_DELAY = 4200;
  const CYCLE_MS         = 520;   // front card fly-off + next rise duration

  const carousel = document.getElementById("heroCarousel");
  const deck     = document.getElementById("carouselDeck");
  const prevBtn  = document.getElementById("carouselPrev");
  const nextBtn  = document.getElementById("carouselNext");
  const dotsWrap = document.getElementById("carouselDots");

  if (!deck) return;

  const cards = Array.from(deck.querySelectorAll(".deck-card"));
  const total  = cards.length;
  let   order  = cards.map((_, i) => i); // order[0] = index of front card
  let   animating = false;
  let   timer     = null;

  /* ── Arrow vertical position — read from actual deck height ── */
  function positionArrows() {
    const deckH = deck.offsetHeight;
    if (prevBtn) prevBtn.style.top = (deckH / 2) + "px";
    if (nextBtn) nextBtn.style.top = (deckH / 2) + "px";
  }
  positionArrows();
  window.addEventListener("resize", positionArrows, { passive: true });

  /* ── Build dots ─────────────────────────────────────── */
  order.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Show team member " + (i + 1));
    dot.addEventListener("click", () => {
      // rotate until that person is on top
      const steps = order.indexOf(i);
      if (steps === 0) return;
      let n = steps;
      (function step() {
        if (n-- <= 0) return;
        cycleNext(false, step);
      })();
      resetTimer();
    });
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));

  /* ── Lay out the deck ───────────────────────────────── */
  function applyLayout(animated) {
    const depth = Math.min(total, 4); // max visible stack depth

    order.forEach((cardIdx, stackPos) => {
      const card = cards[cardIdx];
      const isFront = stackPos === 0;

      // How far back in the stack (capped)
      const z = depth - Math.min(stackPos, depth - 1);

      // Progressive offset + rotation for back cards
      const offsetY  = stackPos === 0 ? 0 : stackPos * 6;
      const offsetX  = stackPos === 0 ? 0 : stackPos * 4;
      const rotate   = stackPos === 0 ? 0 : (stackPos % 2 === 0 ? stackPos * 1.2 : -(stackPos * 1.4));
      const scale    = stackPos === 0 ? 1 : Math.max(0.88, 1 - stackPos * 0.04);
      const blur     = stackPos === 0 ? 0 : Math.min(stackPos * 2.5, 8);
      const dim      = stackPos === 0 ? 1 : Math.max(0.38, 1 - stackPos * 0.22);

      card.style.zIndex     = z;
      card.style.transform  = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.filter     = stackPos === 0 ? "none" : `blur(${blur}px) brightness(${dim})`;
      card.style.transition = animated
        ? `transform ${CYCLE_MS}ms cubic-bezier(0.4,0,0.2,1), filter ${CYCLE_MS}ms ease, opacity ${CYCLE_MS}ms ease`
        : "none";
      card.style.pointerEvents = isFront ? "auto" : "none";
      card.style.cursor        = isFront ? "pointer" : "default";
      card.setAttribute("aria-hidden", isFront ? "false" : "true");
    });

    // Update dots to reflect current front
    dots.forEach((d, i) => d.classList.toggle("active", i === order[0]));
  }

  applyLayout(false);

  /* ── Fan on hover ───────────────────────────────────── */
  deck.addEventListener("mouseenter", () => {
    order.forEach((cardIdx, stackPos) => {
      if (stackPos === 0) return;
      const card = cards[cardIdx];
      const extra = stackPos * 5;
      const baseTransform = card.style.transform;
      // peek out a bit more
      const offsetY  = stackPos * 6 + extra * 0.4;
      const offsetX  = stackPos * 4 + extra * 0.6;
      const rotate   = stackPos % 2 === 0 ? stackPos * 1.8 : -(stackPos * 2.0);
      const scale    = Math.max(0.88, 1 - stackPos * 0.04);
      card.style.transition = "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease";
      card.style.transform  = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale})`;
    });
  });

  deck.addEventListener("mouseleave", () => {
    applyLayout(true);
  });

  /* ── Cycle: front card flies off, rest rise up ──────── */
  function cycleNext(userAction, callback) {
    if (animating) return;
    animating = true;

    const frontIdx  = order[0];
    const frontCard = cards[frontIdx];

    // Fly the front card off to the top-right
    frontCard.style.transition = `transform ${CYCLE_MS * 0.7}ms cubic-bezier(0.4,0,0.8,0.2), opacity ${CYCLE_MS * 0.6}ms ease`;
    frontCard.style.transform  = "translateX(120px) translateY(-80px) rotate(18deg) scale(0.92)";
    frontCard.style.opacity    = "0";

    setTimeout(() => {
      // Rotate order array: front goes to back
      order.push(order.shift());

      // Reset the card that just flew off (now at back, hidden)
      frontCard.style.transition = "none";
      frontCard.style.opacity    = "1";

      // Animate the rest settling into new positions
      applyLayout(true);

      setTimeout(() => {
        animating = false;
        if (typeof callback === "function") callback();
      }, CYCLE_MS);

    }, CYCLE_MS * 0.65);

    if (userAction) resetTimer();
  }

  function cyclePrev(userAction) {
    if (animating) return;
    // Bring the back card to front: rotate order the other way
    // Do it by rotating (total-1) times forward
    let steps = total - 1;
    (function step() {
      if (steps-- <= 0) return;
      cycleNext(false, step);
    })();
    if (userAction) resetTimer();
  }

  /* ── Click front card ───────────────────────────────── */
  deck.addEventListener("click", e => {
    const front = cards[order[0]];
    if (front.contains(e.target) || e.target === front) {
      cycleNext(true);
    }
  });

  /* ── Arrow buttons ──────────────────────────────────── */
  nextBtn?.addEventListener("click", () => cycleNext(true));
  prevBtn?.addEventListener("click", () => cyclePrev(true));

  /* ── Autoscroll ─────────────────────────────────────── */
  function startTimer() { timer = setInterval(() => cycleNext(false), AUTOSCROLL_DELAY); }
  function stopTimer()  { clearInterval(timer); timer = null; }
  function resetTimer() { stopTimer(); startTimer(); }

  startTimer();

  carousel?.addEventListener("mouseenter", stopTimer);
  carousel?.addEventListener("mouseleave", startTimer);
  carousel?.addEventListener("focusin",    stopTimer);
  carousel?.addEventListener("focusout",   startTimer);

  /* ── Touch / swipe ──────────────────────────────────── */
  let touchStartX = null;
  carousel?.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; stopTimer(); }, { passive: true });
  carousel?.addEventListener("touchend",   e => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) { delta < 0 ? cycleNext(true) : cyclePrev(true); }
    touchStartX = null;
    startTimer();
  }, { passive: true });

  /* ── Keyboard ───────────────────────────────────────── */
  carousel?.setAttribute("tabindex", "0");
  carousel?.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { cycleNext(true); e.preventDefault(); }
    if (e.key === "ArrowLeft")  { cyclePrev(true); e.preventDefault(); }
  });

})();
