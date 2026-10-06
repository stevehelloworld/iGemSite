document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector("[data-home-intro]");
  const germ = document.querySelector("[data-intro-germ]");
  const ion = document.querySelector("[data-intro-ion]");
  const logo = document.querySelector("[data-intro-logo]");
  const skip = document.querySelector("[data-intro-skip]");
  const navbarLogo = document.querySelector(".navbar-brand .site-logo");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!intro || !germ || !ion || !logo || !navbarLogo || reduceMotion) {
    intro?.remove();
    document.body.classList.remove("home-intro-active");
    return;
  }

  document.body.classList.add("home-intro-active");

  const running = [];
  let finished = false;
  const easeOut = "cubic-bezier(.16, 1, .3, 1)";

  const FAST_RATE = 8;
  let fast = false;
  let wake = null;

  function speedUp() {
    if (fast || finished) return;
    fast = true;
    running.forEach((animation) => { animation.playbackRate = FAST_RATE; });
    wake?.();
  }

  function pause(ms) {
    return new Promise((resolve) => {
      wake = resolve;
      window.setTimeout(resolve, ms);
    });
  }

  function play(element, keyframes, options) {
    const animation = element.animate(keyframes, { fill: "forwards", ...options });
    if (fast) animation.playbackRate = FAST_RATE;
    running.push(animation);
    return animation.finished.catch(() => undefined);
  }

  function spinRing(size, duration) {
    const el = document.createElement("div");
    el.className = "home-intro-ring";
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    intro.appendChild(el);
    const done = play(el, [
      { transform: "translate3d(-50%, -50%, 0) rotate(0deg)", opacity: 0 },
      { opacity: 1, offset: .1 },
      { opacity: 1, offset: .85 },
      { transform: "translate3d(-50%, -50%, 0) rotate(900deg)", opacity: 0 }
    ], { duration, easing: "linear" });
    return done.then(() => el.remove());
  }

  function spark() {
    const flash = document.createElement("div");
    flash.className = "home-intro-spark";
    intro.appendChild(flash);
    const animation = flash.animate(
      [
        { transform: "translate3d(-50%, -50%, 0) scale(.4)", opacity: 1 },
        { transform: "translate3d(-50%, -50%, 0) scale(7)", opacity: 0 }
      ],
      { duration: 320, easing: "ease-out" }
    );
    animation.finished.catch(() => undefined).then(() => flash.remove());
  }

  function finishIntro() {
    if (finished) return;
    finished = true;
    running.forEach((animation) => animation.cancel());
    navbarLogo.style.opacity = "1";
    document.body.classList.remove("home-intro-active");
    intro.remove();
    window.dispatchEvent(new Event("scroll"));
  }

  async function runIntro() {
    const width = window.innerWidth;
    const germWidth = germ.getBoundingClientRect().width;
    const ionWidth = ion.getBoundingClientRect().width;
    const halfGap = Math.min(34, Math.max(16, width * .022));
    const germOffscreen = -(width / 2 + germWidth / 2 + 40);
    const ionOffscreen = -(width / 2 + ionWidth / 2 + 20);
    const germMeet = width * .18 - halfGap;
    const ionMeet = width * .18 + halfGap;
    const bend = Math.min(80, window.innerHeight * .1);
    const position = (x, y) => `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`;

    // The ion enters first; the germ follows its curved path and closes the gap.
    const germSlide = play(germ, [
      { opacity: 0, transform: position(germOffscreen, bend * .45) },
      { opacity: 1, transform: position(-width * .32, -bend * .55), offset: .22 },
      { opacity: 1, transform: position(-width * .18, bend), offset: .48 },
      { opacity: 1, transform: position(-width * .08, -bend * .4), offset: .72 },
      { opacity: 1, transform: position(germMeet, 0) }
    ], { duration: 3200, easing: "ease-in-out" });

    const ionSlide = play(ion, [
      { opacity: 0, transform: position(ionOffscreen, 0) },
      { opacity: 1, transform: position(-width * .17, -bend * .75), offset: .22 },
      { opacity: 1, transform: position(width * .03, bend * .6), offset: .48 },
      { opacity: 1, transform: position(width * .12, -bend * .55), offset: .72 },
      { opacity: 1, transform: position(ionMeet, 0) }
    ], { duration: 3200, easing: "ease-in-out" });

    await Promise.all([germSlide, ionSlide]);
    if (finished) return;

    // Click: a quick snap on contact.
    spark();
    await Promise.all([
      play(germ, [
        { transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0) scale(1, 1)` },
        { transform: `translate3d(calc(-50% + ${germMeet + 5}px), -50%, 0) scale(1.08, .92)`, offset: .45 },
        { transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0) scale(1, 1)` }
      ], { duration: 240, easing: "ease-out" }),
      play(ion, [
        { transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0) scale(1, 1)` },
        { transform: `translate3d(calc(-50% + ${ionMeet - 5}px), -50%, 0) scale(1.08, .92)`, offset: .45 },
        { transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0) scale(1, 1)` }
      ], { duration: 240, easing: "ease-out" })
    ]);
    if (finished) return;

    // They click together and transition into our icon, centered on screen.
    logo.style.left = "50%";
    logo.style.top = "50%";

    await Promise.all([
      play(germ, [
        { opacity: 1, filter: "blur(0)", transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0) scale(1)` },
        { opacity: 0, filter: "blur(4px)", transform: "translate3d(-50%, -50%, 0) scale(.4)" }
      ], { duration: 480, easing: easeOut }),
      play(ion, [
        { opacity: 1, filter: "blur(0)", transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0) scale(1)` },
        { opacity: 0, filter: "blur(4px)", transform: "translate3d(-50%, -50%, 0) scale(.4)" }
      ], { duration: 480, easing: easeOut }),
      play(logo, [
        { opacity: 0, transform: "translate3d(-50%, -50%, 0) scale(.5) rotate(-6deg)" },
        { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1) rotate(0deg)" }
      ], { duration: 620, easing: easeOut })
    ]);
    if (finished) return;

    // A loading-style ring spins around the freshly-formed icon.
    await spinRing(logo.getBoundingClientRect().width * 1.32, 900);
    if (finished) return;

    await pause(250);
    if (finished) return;

    // Fly the icon to the navbar logo in the top-left corner while the overlay fades out.
    const logoSize = logo.getBoundingClientRect().width;
    const target = navbarLogo.getBoundingClientRect();
    const deltaX = target.left + target.width / 2 - window.innerWidth / 2;
    const deltaY = target.top + target.height / 2 - window.innerHeight / 2;
    const targetScale = target.width / logoSize;

    window.setTimeout(() => { if (!finished) navbarLogo.style.opacity = "1"; }, 1150);

    await Promise.all([
      play(logo, [
        { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" },
        { opacity: 1, transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(${targetScale})` }
      ], { duration: 1400, easing: "cubic-bezier(.65, 0, .2, 1)" }),
      play(intro, [
        { opacity: 1, offset: .6 },
        { opacity: 0 }
      ], { duration: 1400, easing: "linear" })
    ]);

    finishIntro();
  }

  intro.addEventListener("pointerdown", speedUp);
  skip.addEventListener("click", finishIntro);
  window.addEventListener("pagehide", finishIntro, { once: true });
  runIntro().catch(finishIntro);
});
