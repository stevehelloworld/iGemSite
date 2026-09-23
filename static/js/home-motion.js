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
  let queued = false;

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

  function setWaterIndex(index) {
    if (!waterStory) return;
    waterStory.querySelectorAll("[data-water-step]").forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("is-active", isActive);
      item.querySelector("button")?.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    waterStory.style.setProperty("--water-index", index);
  }

  let mapIndex = 0;

  function setMapIndex(index) {
    if (!mapStory) return;
    mapIndex = index;
    mapStory.querySelectorAll("[data-map-step]").forEach((item, itemIndex) => item.classList.toggle("is-active", itemIndex === index));
    mapStory.querySelectorAll("[data-map-pin]").forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    mapStory.style.setProperty("--map-index", index);
  }

  function setTreatmentIndex(index) {
    if (!treatmentStory) return;
    treatmentStory.querySelectorAll("[data-treatment-step]").forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("is-active", isActive);
      item.querySelector("button")?.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    treatmentStory.style.setProperty("--treatment-index", index);
  }

  function update() {
    updateHero();
    queued = false;
  }

  function requestUpdate() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  }

  mapStory?.querySelectorAll("[data-map-pin]").forEach((pin) => {
    pin.addEventListener("click", () => setMapIndex(Number(pin.dataset.mapPin || 0)));
  });

  mapStory?.querySelectorAll("[data-map-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const stepCount = mapStory.querySelectorAll("[data-map-step]").length || 1;
      setMapIndex((mapIndex + 1) % stepCount);
    });
  });

  waterStory?.querySelectorAll("[data-water-step] button").forEach((button, index) => {
    button.addEventListener("click", () => setWaterIndex(index));
  });

  treatmentStory?.querySelectorAll("[data-treatment-step] button").forEach((button, index) => {
    button.addEventListener("click", () => setTreatmentIndex(index));
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
