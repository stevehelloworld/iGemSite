document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pageContent = document.querySelector(".homepage-content");

  const readingProgress = document.querySelector(".site-reading-progress");
  if (readingProgress) {
    let progressQueued = false;

    const updateReadingProgress = () => {
      const scrollingElement = document.scrollingElement || document.documentElement;
      const scrollable = Math.max(1, scrollingElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scrollingElement.scrollTop / scrollable));
      const percent = progress * 100;
      readingProgress.style.setProperty("--reading-progress", progress.toFixed(5));
      readingProgress.style.setProperty("--reading-progress-percent", `${percent.toFixed(3)}%`);
      readingProgress.setAttribute("aria-valuenow", String(Math.round(percent)));
      progressQueued = false;
    };

    const requestProgressUpdate = () => {
      if (progressQueued) return;
      progressQueued = true;
      window.requestAnimationFrame(updateReadingProgress);
    };

    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);
    window.addEventListener("load", requestProgressUpdate, { once: true });
    updateReadingProgress();
  }

  const hero = document.querySelector(
    ".page-header, .problem-statement-hero, .problem-hero-card, .experiment-hero, .model-hero, .mock-page-hero, .ihp-hero, .industry-storybook .section-title"
  );

  if (hero && !reduceMotion) {
    hero.classList.add("vis-hero-motion");
  }

  const toc = document.querySelector("[data-page-toc]");
  const layout = document.querySelector("[data-page-layout]");

  if (toc && layout && pageContent) {
    const headingSelectors = [
      ".results-report h2",
      ".ihp-section .section-title h2",
      ".industry-subheading h3",
      ".problem-section h2",
      ".problem-text-card h2",
      ".experiment-flow-header h3",
      ".experiment-section-header h3",
      ".experiment-figure-section h3",
      ".model-flow-header h3",
      ".model-card h3",
      ".mock-panel h3",
      ".platform-candidate h3"
    ].join(",");

    const headingLimit = document.body.classList.contains("page-notebook") ? Infinity : 12;
    const headings = [...pageContent.querySelectorAll(headingSelectors)]
      .filter((heading) => heading.textContent.trim())
      .slice(0, headingLimit);

    if (headings.length < 2) {
      toc.hidden = true;
      layout.classList.add("toc-empty");
    } else {
      const nav = toc.querySelector("nav");
      const links = [];

      headings.forEach((heading, index) => {
        if (!heading.id) {
          const slug = heading.textContent
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") || `section-${index + 1}`;
          heading.id = `chapter-${slug}-${index + 1}`;
        }

        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        const kicker = document.body.classList.contains("page-notebook")
          ? heading.closest(".experiment-section-header")?.querySelector(".experiment-card-kicker")
          : null;

        if (kicker) {
          const date = document.createElement("span");
          date.className = "page-toc-date";
          date.textContent = kicker.textContent.trim();
          const title = document.createElement("span");
          title.className = "page-toc-title";
          title.textContent = heading.textContent.trim();
          link.append(date, title);
        } else {
          link.textContent = heading.textContent.trim();
        }
        nav.appendChild(link);
        links.push(link);
      });

      const setActive = (id) => {
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      };

      setActive(headings[0].id);

      const tocObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible[0]) setActive(visible[0].target.id);
        },
        { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
      );

      headings.forEach((heading) => tocObserver.observe(heading));
    }
  }

  const notebookEntries = [...document.querySelectorAll("details.notebook-entry")];
  if (notebookEntries.length) {
    const openEntryForHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const entry = document.getElementById(id)?.closest("details.notebook-entry");
      if (entry) entry.open = true;
    };

    openEntryForHash();
    window.addEventListener("hashchange", openEntryForHash);
    document.querySelectorAll(".page-toc a").forEach((link) => {
      link.addEventListener("click", () => {
        const entry = document.querySelector(link.getAttribute("href"))?.closest("details.notebook-entry");
        if (entry) entry.open = true;
      });
    });

    document.querySelectorAll("[data-notebook-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const open = button.dataset.notebookToggle === "open";
        notebookEntries.forEach((entry) => { entry.open = open; });
      });
    });
  }

  const teamTabs = [...document.querySelectorAll("[data-team-tab]")];
  if (teamTabs.length) {
    const panels = [...document.querySelectorAll("[data-team-panel]")];
    const showGroup = (id) => {
      teamTabs.forEach((tab) => tab.setAttribute("aria-selected", String(tab.dataset.teamTab === id)));
      panels.forEach((panel) => { panel.hidden = panel.id !== id; });
    };
    const groupForHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      return panels.some((panel) => panel.id === id) ? id : null;
    };

    showGroup(groupForHash() || teamTabs[0].dataset.teamTab);
    teamTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        showGroup(tab.dataset.teamTab);
        history.replaceState(null, "", `#${tab.dataset.teamTab}`);
      });
    });
    window.addEventListener("hashchange", () => {
      const id = groupForHash();
      if (id) showGroup(id);
    });

    // Hover flips cards for mouse users; touch has no hover, so a tap flips instead.
    document.querySelectorAll(".member-card").forEach((card) => {
      card.addEventListener("pointerup", (event) => {
        if (event.pointerType !== "mouse") card.classList.toggle("is-flipped");
      });
    });
  }

  if (!reduceMotion) {
    const revealSelectors = [
      ".problem-content-grid",
      ".problem-section",
      ".experiment-flow-panel",
      ".experiment-section",
      ".experiment-figure-section",
      ".experiment-grid",
      ".model-flow-panel",
      ".model-grid",
      ".mock-metric-grid",
      ".mock-dashboard-grid",
      ".mock-panel",
      ".ihp-section",
      ".industry-story-row",
      ".homepage-content > .row > .col-12 > h2"
    ].join(",");

    const revealItems = [...new Set(document.querySelectorAll(revealSelectors))];
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("vis-animate-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }
});

/* Navbar adapts to whatever is scrolled beneath it. */
(() => {
  const nav = document.querySelector(".navbar.fixed-top");
  if (!nav) return;

  const imageLuma = new Map();
  let queued = false;

  const luma = ([r, g, b]) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  const imageLuminance = (img) => {
    if (!img.complete || !img.naturalWidth) return null;
    if (imageLuma.has(img.currentSrc)) return imageLuma.get(img.currentSrc);
    let value = null;
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 12;
      canvas.height = 12;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 12, 12);
      const data = ctx.getImageData(0, 0, 12, 12).data;
      let sum = 0;
      for (let i = 0; i < data.length; i += 4) sum += luma([data[i], data[i + 1], data[i + 2]]);
      value = sum / (data.length / 4);
    } catch (error) {
      value = null;
    }
    imageLuma.set(img.currentSrc, value);
    return value;
  };

  const parseColor = (value) => {
    const m = value.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };

  const sample = () => {
    const x = Math.round(window.innerWidth * 0.55);
    const y = Math.round(nav.getBoundingClientRect().height / 2);
    for (const el of document.elementsFromPoint(x, y)) {
      if (nav.contains(el) || el.closest("[data-home-intro]")) continue;
      if (el === document.documentElement || el === document.body) return null;

      if (el.tagName === "IMG") {
        const dark = el.closest(".hero-banner") ? 0.15 : imageLuminance(el);
        if (dark === null) continue;
        return { image: true, light: dark > 0.55 };
      }

      const style = getComputedStyle(el);
      const color = parseColor(style.backgroundColor);
      if (color && color.a > 0.5) {
        return { color: `rgb(${color.r}, ${color.g}, ${color.b})`, light: luma([color.r, color.g, color.b]) > 0.5 };
      }
    }
    return null;
  };

  const update = () => {
    queued = false;
    let result = sample();
    if (!result && document.body.classList.contains("home-page") && window.scrollY < 80) {
      result = { image: true, light: false };
    }
    if (!result) {
      nav.style.removeProperty("--nav-bg");
      nav.classList.remove("nav-on-dark", "nav-on-image");
      return;
    }
    nav.classList.toggle("nav-on-dark", !result.light);
    nav.classList.toggle("nav-on-image", Boolean(result.image));
    if (result.image) nav.style.setProperty("--nav-bg", "transparent");
    else nav.style.setProperty("--nav-bg", result.color);
  };

  const request = () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  window.addEventListener("load", request, { once: true });
  document.addEventListener("DOMContentLoaded", request);
  request();
})();
