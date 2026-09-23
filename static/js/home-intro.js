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
  const chaseEase = "cubic-bezier(.37, 0, .63, 1)";

  function play(element, keyframes, options) {
    const animation = element.animate(keyframes, { fill: "forwards", ...options });
    running.push(animation);
    return animation.finished.catch(() => undefined);
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
    const catchX = width * (width < 576 ? .2 : .23);
    const curve = Math.min(76, window.innerHeight * .09);

    const germChase = play(germ, [
      { opacity: 0, transform: `translate3d(calc(-50% - ${width * .72}px), calc(-50% + ${curve * .7}px), 0) rotate(2deg)` },
      { opacity: 1, offset: .08 },
      { opacity: 1, transform: `translate3d(calc(-50% - ${width * .48}px), calc(-50% - ${curve * .55}px), 0) rotate(-2deg)`, offset: .28 },
      { opacity: 1, transform: `translate3d(calc(-50% - ${width * .18}px), calc(-50% + ${curve * .28}px), 0) rotate(1deg)`, offset: .58 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${catchX - 68}px), -50%, 0) rotate(0deg)` }
    ], { duration: 3000, easing: chaseEase });

    const ionChase = play(ion, [
      { opacity: 0, transform: `translate3d(calc(-50% - ${width * .42}px), calc(-50% - ${curve * .18}px), 0) rotate(-3deg)` },
      { opacity: 1, offset: .08 },
      { opacity: 1, transform: `translate3d(calc(-50% - ${width * .23}px), calc(-50% - ${curve}px), 0) rotate(-7deg)`, offset: .27 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${width * .02}px), calc(-50% - ${curve * .2}px), 0) rotate(4deg)`, offset: .52 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${catchX + 92}px), calc(-50% + ${curve * .62}px), 0) rotate(7deg)`, offset: .78 },
      { opacity: 1, transform: `translate3d(calc(-50% + ${catchX + 42}px), -50%, 0) rotate(0deg)` }
    ], { duration: 3000, easing: chaseEase });

    await Promise.all([germChase, ionChase]);
    if (finished) return;

    const logoSize = logo.getBoundingClientRect().width;
    const startLeft = (width / 2) + catchX - (logoSize / 2);
    const startTop = (window.innerHeight / 2) - (logoSize / 2);
    logo.style.left = `${startLeft}px`;
    logo.style.top = `${startTop}px`;

    await Promise.all([
      play(germ, [
        { opacity: 1, filter: "blur(0)", transform: `translate3d(calc(-50% + ${catchX - 68}px), -50%, 0) scale(1)` },
        { opacity: 0, filter: "blur(5px)", transform: `translate3d(calc(-50% + ${catchX}px), -50%, 0) scale(.72)` }
      ], { duration: 280, easing: easeOut }),
      play(ion, [
        { opacity: 1, filter: "blur(0)", transform: `translate3d(calc(-50% + ${catchX + 42}px), -50%, 0) scale(1)` },
        { opacity: 0, filter: "blur(5px)", transform: `translate3d(calc(-50% + ${catchX}px), -50%, 0) scale(.35)` }
      ], { duration: 240, easing: easeOut }),
      play(logo, [
        { opacity: 0, transform: "scale(.62) rotate(-4deg)" },
        { opacity: 1, transform: "scale(1) rotate(0deg)" }
      ], { duration: 340, easing: easeOut })
    ]);
    if (finished) return;

    await new Promise((resolve) => window.setTimeout(resolve, 260));
    if (finished) return;

    const target = navbarLogo.getBoundingClientRect();
    const targetScale = target.width / logoSize;
    const deltaX = target.left - startLeft;
    const deltaY = target.top - startTop;

    await Promise.all([
      play(logo, [
        { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
        { opacity: 1, transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${targetScale})` }
      ], { duration: 980, easing: easeOut }),
      play(intro, [
        { opacity: 1, offset: .58 },
        { opacity: 0 }
      ], { duration: 980, easing: easeOut })
    ]);

    finishIntro();
  }

  skip.addEventListener("click", finishIntro);
  window.addEventListener("pagehide", finishIntro, { once: true });
  runIntro().catch(finishIntro);
});
