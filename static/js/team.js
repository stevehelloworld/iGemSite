document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector("[data-team-page]");
  const story = document.querySelector("[data-team-story]");
  const board = document.querySelector("[data-team-board]");
  const nucleus = document.querySelector("[data-team-nucleus]");
  const links = document.querySelector("[data-team-links]");
  if (!page || !story || !board) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const queryAt = Number(new URLSearchParams(window.location.search).get("at"));
  const nodes = [...page.querySelectorAll(".team-node")];
  const cards = [...page.querySelectorAll(".team-card")];
  const dots = [...page.querySelectorAll(".team-dot")];
  const jumps = [...page.querySelectorAll("[data-jump]")];
  const keys = nodes.map((node) => node.dataset.member);
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const ease = (value) => {
    const x = clamp(value);
    return 1 - Math.pow(1 - x, 4);
  };

  let current = keys[0];
  let queued = false;
  let linkPaths = [];

  page.classList.add("is-ready");
  if (reduceMotion) page.classList.add("is-static");

  function layoutNodes() {
    const isMobile = window.innerWidth <= 980;
    const width = board.clientWidth;
    const height = board.clientHeight;
    const boardBox = board.getBoundingClientRect();
    const nucleusBox = nucleus ? nucleus.getBoundingClientRect() : null;
    const cx = nucleusBox && boardBox.width ? nucleusBox.left + nucleusBox.width / 2 - boardBox.left : width / 2;
    const cy = nucleusBox && boardBox.height ? nucleusBox.top + nucleusBox.height / 2 - boardBox.top : height / 2;

    nodes.forEach((node) => {
      const rawX = isMobile && node.dataset.mobileX ? Number(node.dataset.mobileX) : Number(node.dataset.x);
      const rawY = isMobile && node.dataset.mobileY ? Number(node.dataset.mobileY) : Number(node.dataset.y);
      const x = (rawX / 100) * width;
      const y = (rawY / 100) * height;
      node.style.setProperty("--x", `${x}px`);
      node.style.setProperty("--y", `${y}px`);
      node.style.setProperty("--from-x", `${cx - x}px`);
      node.style.setProperty("--from-y", `${cy - y}px`);
    });

    drawLinks();
  }

  function drawLinks() {
    if (!links || !nucleus) return;
    const isMobile = window.innerWidth <= 980;
    const boardBox = board.getBoundingClientRect();
    const nucleusBox = nucleus.getBoundingClientRect();
    const nx = ((nucleusBox.left + nucleusBox.width / 2 - boardBox.left) / boardBox.width) * 100;
    const ny = ((nucleusBox.top + nucleusBox.height / 2 - boardBox.top) / boardBox.height) * 100;

    links.innerHTML = nodes
      .map((node, index) => {
        const x = isMobile && node.dataset.mobileX ? Number(node.dataset.mobileX) : Number(node.dataset.x);
        const y = isMobile && node.dataset.mobileY ? Number(node.dataset.mobileY) : Number(node.dataset.y);
        return `<path data-link="${node.dataset.member}" d="M ${nx.toFixed(2)} ${ny.toFixed(2)} Q ${(nx + x) / 2} ${(ny + y) / 2 - 8} ${x} ${y}" pathLength="1" style="--i:${index}" />`;
      })
      .join("");
    linkPaths = [...links.querySelectorAll("path")];
  }

  function storyProgress() {
    if (queryAt > 0 && queryAt <= 1) return queryAt;
    const rect = story.getBoundingClientRect();
    const travel = Math.max(1, story.offsetHeight - window.innerHeight);
    return clamp(-rect.top / travel);
  }

  function memberProgress(progress) {
    const assembleStart = 0.06;
    const assembleEnd = 0.36;
    const focusStart = 0.4;
    const focusEnd = 0.94;
    const assemble = ease((progress - assembleStart) / (assembleEnd - assembleStart));
    const focusMix = clamp((progress - focusStart) / (focusEnd - focusStart));
    const focusExact = focusMix * (keys.length - 0.001);
    const focusIndex = Math.min(keys.length - 1, Math.floor(focusExact));
    const focusLocal = focusExact - focusIndex;
    return { assemble, focusIndex, focusLocal, progress };
  }

  function setCurrent(key, { fromUser = false } = {}) {
    current = key;
    const index = keys.indexOf(key);

    nodes.forEach((node) => {
      const on = node.dataset.member === key;
      node.classList.toggle("is-current", on);
      node.setAttribute("aria-pressed", String(on));
    });

    cards.forEach((card) => {
      const on = card.dataset.card === key;
      card.classList.toggle("is-active", on);
      card.setAttribute("aria-hidden", String(!on));
      if (reduceMotion) card.toggleAttribute("hidden", !on);
    });

    dots.forEach((dot) => {
      const on = dot.dataset.member === key;
      dot.classList.toggle("is-active", on);
      dot.setAttribute("aria-selected", String(on));
      dot.tabIndex = on ? 0 : -1;
    });

    linkPaths.forEach((path) => {
      path.classList.toggle("is-current", path.dataset.link === key);
    });

    const node = nodes[index];
    if (node) page.style.setProperty("--group-tint", `var(--tint-${node.dataset.group})`);
    page.style.setProperty("--focus-index", String(index));

    if (fromUser) {
      page.classList.add("is-holding");
      window.setTimeout(() => page.classList.remove("is-holding"), 900);
    }
  }

  function scrollToMember(key) {
    const index = Math.max(0, keys.indexOf(key));
    const focusStart = 0.44;
    const focusEnd = 0.92;
    const t = focusStart + ((index + 0.45) / keys.length) * (focusEnd - focusStart);
    const top = story.getBoundingClientRect().top + window.scrollY + t * (story.offsetHeight - window.innerHeight);
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    setCurrent(key, { fromUser: true });
  }

  function update() {
    const progress = reduceMotion ? 1 : storyProgress();
    const { assemble, focusIndex, focusLocal } = memberProgress(progress);
    const heroCompact = ease(progress / 0.12);
    const spotlightIn = ease((progress - 0.3) / 0.1);
    const stripIn = ease((progress - 0.28) / 0.1);

    page.style.setProperty("--story-progress", progress.toFixed(4));
    page.style.setProperty("--hero-compact", heroCompact.toFixed(4));
    page.style.setProperty("--spotlight-in", spotlightIn.toFixed(4));
    page.style.setProperty("--strip-in", stripIn.toFixed(4));
    page.style.setProperty("--assemble", assemble.toFixed(4));
    page.style.setProperty("--focus-local", focusLocal.toFixed(4));
    page.style.setProperty("--nucleus-scale", (1.02 + progress * 0.05).toFixed(4));
    page.classList.toggle("is-assembled", reduceMotion || assemble > 0.96);

    nodes.forEach((node, index) => {
      const arrive = reduceMotion ? 1 : clamp(assemble * nodes.length - index * 0.72);
      const arrived = ease(arrive);
      node.style.setProperty("--arrive", arrived.toFixed(4));
      node.classList.toggle("is-in", arrived > 0.72);
    });

    linkPaths.forEach((path, index) => {
      const arrive = reduceMotion ? 1 : clamp(assemble * nodes.length - index * 0.72);
      path.style.setProperty("--arrive", ease(arrive).toFixed(4));
    });

    if (!page.classList.contains("is-holding") && assemble > 0.92) {
      const next = keys[focusIndex];
      if (next && next !== current) setCurrent(next);
    }

    queued = false;
  }

  function requestUpdate() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  }

  nodes.forEach((node) => {
    node.addEventListener("click", () => scrollToMember(node.dataset.member));
  });

  dots.forEach((dot, index) => {
    dot.setAttribute("role", "tab");
    dot.addEventListener("click", () => scrollToMember(dot.dataset.member));
    dot.addEventListener("keydown", (event) => {
      let next = null;
      if (event.key === "ArrowRight") next = (index + 1) % dots.length;
      if (event.key === "ArrowLeft") next = (index - 1 + dots.length) % dots.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = dots.length - 1;
      if (next === null) return;
      event.preventDefault();
      scrollToMember(keys[next]);
      dots[next].focus();
    });
  });

  jumps.forEach((button) => {
    button.addEventListener("click", () => scrollToMember(button.dataset.jump));
  });

  const rosterItems = [...page.querySelectorAll(".team-roster-grid button, .team-roster-copy, .team-advisors")];
  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.28 }
    );
    rosterItems.forEach((item, index) => {
      item.style.setProperty("--i", String(index));
      observer.observe(item);
    });
  } else {
    rosterItems.forEach((item) => item.classList.add("is-in"));
  }

  layoutNodes();
  setCurrent(keys[0]);
  update();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => {
    layoutNodes();
    requestUpdate();
  });
});
