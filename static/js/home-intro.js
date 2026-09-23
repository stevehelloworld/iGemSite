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

  function play(element, keyframes, options) {
    const animation = element.animate(keyframes, { fill: "forwards", ...options });
    running.push(animation);
    return animation.finished.catch(() => undefined);
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
  }

  async function runIntro() {
    const width = window.innerWidth;
    const germWidth = germ.getBoundingClientRect().width;
    const ionWidth = ion.getBoundingClientRect().width;
    const halfGap = Math.min(34, Math.max(16, width * .022));
    const germOffscreen = -(width / 2 + germWidth / 2 + 60);
    const ionOffscreen = width / 2 + ionWidth / 2 + 60;
    const germMeet = -halfGap;
    const ionMeet = halfGap;

    // Slide straight toward each other from opposite edges, like Joy-Cons docking in.
    const germSlide = play(germ, [
      { opacity: 0, transform: `translate3d(calc(-50% + ${germOffscreen}px), -50%, 0)` },
      { opacity: 1, offset: .12 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${germMeet - 14}px), -50%, 0)`, offset: .82 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0)` }
    ], { duration: 440, easing: easeOut });

    const ionSlide = play(ion, [
      { opacity: 0, transform: `translate3d(calc(-50% + ${ionOffscreen}px), -50%, 0)` },
      { opacity: 1, offset: .12 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${ionMeet + 14}px), -50%, 0)`, offset: .82 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0)` }
    ], { duration: 380, easing: easeOut });

    await Promise.all([germSlide, ionSlide]);
    if (finished) return;

    // Click: a quick snap on contact.
    spark();
    await Promise.all([
      play(germ, [
        { transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0) scale(1, 1)` },
        { transform: `translate3d(calc(-50% + ${germMeet + 5}px), -50%, 0) scale(1.08, .92)`, offset: .45 },
        { transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0) scale(1, 1)` }
      ], { duration: 120, easing: "ease-out" }),
      play(ion, [
        { transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0) scale(1, 1)` },
        { transform: `translate3d(calc(-50% + ${ionMeet - 5}px), -50%, 0) scale(1.08, .92)`, offset: .45 },
        { transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0) scale(1, 1)` }
      ], { duration: 120, easing: "ease-out" })
    ]);
    if (finished) return;

    // They click together and transition into our icon, centered on screen.
    logo.style.left = "50%";
    logo.style.top = "50%";

    await Promise.all([
      play(germ, [
        { opacity: 1, filter: "blur(0)", transform: `translate3d(calc(-50% + ${germMeet}px), -50%, 0) scale(1)` },
        { opacity: 0, filter: "blur(4px)", transform: "translate3d(-50%, -50%, 0) scale(.4)" }
      ], { duration: 220, easing: easeOut }),
      play(ion, [
        { opacity: 1, filter: "blur(0)", transform: `translate3d(calc(-50% + ${ionMeet}px), -50%, 0) scale(1)` },
        { opacity: 0, filter: "blur(4px)", transform: "translate3d(-50%, -50%, 0) scale(.4)" }
      ], { duration: 220, easing: easeOut }),
      play(logo, [
        { opacity: 0, transform: "translate3d(-50%, -50%, 0) scale(.5) rotate(-6deg)" },
        { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1) rotate(0deg)" }
      ], { duration: 320, easing: easeOut })
    ]);
    if (finished) return;

    await new Promise((resolve) => window.setTimeout(resolve, 180));
    if (finished) return;

    // Reveal the real navbar logo underneath before the overlay fades away.
    navbarLogo.style.opacity = "1";

    // Enlarge the icon from the center and fade the whole intro out to reveal the page.
    await Promise.all([
      play(logo, [
        { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" },
        { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1.55)", offset: .7 },
        { opacity: 0, transform: "translate3d(-50%, -50%, 0) scale(1.9)" }
      ], { duration: 720, easing: easeOut }),
      play(intro, [
        { opacity: 1, offset: .3 },
        { opacity: 0 }
      ], { duration: 720, easing: easeOut })
    ]);

    finishIntro();
  }

  skip.addEventListener("click", finishIntro);
  window.addEventListener("pagehide", finishIntro, { once: true });
  runIntro().catch(finishIntro);
});
