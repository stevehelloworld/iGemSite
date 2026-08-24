document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".home-page");
  if (!root) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.querySelector(".homepage-hero");
  const heroImage = document.querySelector(".hero-background");
  const heroParticles = [...document.querySelectorAll(".hero-motion-layer span")];
  const waterStory = document.querySelector("[data-water-story]");
  const mapStory = document.querySelector("[data-map-story]");
  const treatmentStory = document.querySelector("[data-treatment-story]");
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const ease = (value) => {
    const x = clamp(value);
    return 1 - Math.pow(1 - x, 4);
  };
  let queued = false;

  function storyProgress(element) {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    return clamp(-rect.top / travel);
  }

  function activateByProgress(container, selector, progress) {
    const items = [...container.querySelectorAll(selector)];
    if (!items.length) return 0;
    const index = Math.min(items.length - 1, Math.floor(progress * items.length));
    items.forEach((item, itemIndex) => item.classList.toggle("is-active", itemIndex === index));
    return index;
  }

  function updateHero() {
    if (!hero || !heroImage) return;
    const rect = hero.getBoundingClientRect();
    const progress = clamp(-rect.top / Math.max(1, rect.height));
    hero.style.setProperty("--hero-progress", progress.toFixed(4));
    hero.style.setProperty("--hero-scale", (1.035 + progress * 0.08).toFixed(4));
    hero.style.setProperty("--hero-cue-opacity", clamp(1 - progress * 2.4).toFixed(4));
    heroImage.style.setProperty("--hero-pan", `${(progress * 68).toFixed(1)}px`);
    heroParticles.forEach((particle, index) => {
      const travel = Number.parseFloat(particle.style.getPropertyValue("--particle-travel")) || 36;
      particle.style.setProperty("--particle-parallax", `${(progress * travel * (index % 2 ? -1 : 1)).toFixed(1)}px`);
    });
  }

  function updateWaterStory() {
    if (!waterStory) return;
    const progress = storyProgress(waterStory);
    const index = activateByProgress(waterStory, "[data-water-step]", progress);
    const local = ease((progress * 4) - index);
    waterStory.style.setProperty("--water-progress", progress.toFixed(4));
    waterStory.style.setProperty("--water-index", index);
    waterStory.style.setProperty("--water-local", local.toFixed(4));
  }

  function setMapIndex(index) {
    if (!mapStory) return;
    mapStory.querySelectorAll("[data-map-step]").forEach((item, itemIndex) => item.classList.toggle("is-active", itemIndex === index));
    mapStory.querySelectorAll("[data-map-pin]").forEach((item, itemIndex) => item.classList.toggle("is-active", itemIndex === index));
    mapStory.style.setProperty("--map-index", index);
  }

  function updateMapStory() {
    if (!mapStory) return;
    const progress = storyProgress(mapStory);
    const index = Math.min(2, Math.floor(progress * 3));
    setMapIndex(index);
    mapStory.style.setProperty("--map-progress", progress.toFixed(4));
  }

  function updateTreatmentStory() {
    if (!treatmentStory) return;
    const progress = storyProgress(treatmentStory);
    const index = activateByProgress(treatmentStory, "[data-treatment-step]", progress);
    treatmentStory.style.setProperty("--treatment-progress", progress.toFixed(4));
    treatmentStory.style.setProperty("--treatment-index", index);
  }

  function update() {
    updateHero();
    updateWaterStory();
    updateMapStory();
    updateTreatmentStory();
    queued = false;
  }

  function requestUpdate() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  }

  mapStory?.querySelectorAll("[data-map-pin]").forEach((pin) => {
    pin.addEventListener("click", () => {
      const index = Number(pin.dataset.mapPin || 0);
      const travel = Math.max(1, mapStory.offsetHeight - window.innerHeight);
      window.scrollTo({ top: mapStory.offsetTop + travel * ((index + 0.5) / 3), behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  if (reduceMotion) {
    root.classList.add("home-reduced-motion");
    setMapIndex(0);
    return;
  }

  root.classList.add("home-motion-ready");
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
});
