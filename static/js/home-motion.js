document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".home-page");
  if (!root) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;
  root.classList.add("home-motion-ready");

  const hero = document.querySelector(".homepage-hero");
  const heroImage = document.querySelector(".hero-background");
  const heroParticles = [...document.querySelectorAll(".hero-motion-layer span")];
  const storyGroups = [
    [".problem-story", "[data-problem-scene]"],
    [".taiwan-story", "[data-taiwan-scene]"],
    [".solution-story", "[data-solution-scene]"],
    [".highlight-story", "[data-highlight-scene]"],
    [".hp-story", "[data-hp-scene]"],
    [".engineering-story", "[data-engineering-scene]"],
    [".team-story", "[data-team-scene]"]
  ].map(([storySelector, sceneSelector]) => {
    const story = document.querySelector(storySelector);
    return story ? { story, stage: story.firstElementChild, scenes: [...story.querySelectorAll(sceneSelector)] } : null;
  }).filter(Boolean);

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
      const direction = index % 2 ? -1 : 1;
      particle.style.setProperty("--particle-parallax", `${(progress * travel * direction).toFixed(1)}px`);
    });
  }

  function updateStories() {
    storyGroups.forEach(({ story, stage, scenes }, groupIndex) => {
      const rect = story.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const entryLead = window.innerHeight * 0.9;
      const progress = clamp((entryLead - rect.top) / (travel + entryLead));
      story.style.setProperty("--story-progress", progress.toFixed(4));
      if (stage) {
        stage.style.setProperty("--stage-pan", `${((progress - 0.5) * 90).toFixed(1)}px`);
        stage.style.setProperty("--stage-turn", `${((progress - 0.5) * (groupIndex % 2 ? -1.4 : 1.4)).toFixed(2)}deg`);
      }

      const span = 1 / Math.max(1, scenes.length);
      scenes.forEach((scene, index) => {
        const local = clamp((progress - index * span) / span);
        const arc = Math.sin(local * Math.PI);
        const direction = index % 2 ? -1 : 1;
        scene.style.setProperty("--motion-progress", local.toFixed(4));
        scene.style.setProperty("--motion-arc", arc.toFixed(4));
        scene.style.setProperty("--motion-x", `${(arc * 26 * direction).toFixed(1)}px`);
        scene.style.setProperty("--motion-copy-x", `${(arc * -10.9 * direction).toFixed(1)}px`);
        scene.style.setProperty("--motion-y", `${((0.5 - local) * 28).toFixed(1)}px`);
        scene.style.setProperty("--motion-turn", `${((local - 0.5) * 3.2 * direction).toFixed(2)}deg`);
        scene.style.setProperty("--motion-mask", `${((1 - arc) * 48).toFixed(2)}%`);
      });

      let currentScene = null;
      let currentStrength = 0.02;
      scenes.forEach((scene) => {
        const strength = Number.parseFloat(getComputedStyle(scene).getPropertyValue("--scene-opacity")) || 0;
        if (strength > currentStrength) {
          currentStrength = strength;
          currentScene = scene;
        }
      });
      if (!currentScene && scenes.length) {
        currentScene = scenes[Math.min(scenes.length - 1, Math.floor(progress * scenes.length))];
      }
      scenes.forEach((scene) => scene.classList.toggle("motion-current", scene === currentScene));
      if (currentScene) {
        currentScene.style.setProperty("--scene-opacity", "1");
        currentScene.style.setProperty("--scene-offset", "0px");
        currentScene.style.setProperty("--scene-scale", "1");
      }
    });
  }

  function updateMotion() {
    updateHero();
    updateStories();
    queued = false;
  }

  function requestUpdate() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(updateMotion);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateMotion();
});
