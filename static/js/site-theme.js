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
      readingProgress.style.setProperty("--reading-progress-tilt", `${(progress * 2 - 1).toFixed(2)}deg`);
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

    const headings = [...pageContent.querySelectorAll(headingSelectors)]
      .filter((heading) => heading.textContent.trim())
      .slice(0, 12);

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
        link.textContent = heading.textContent.trim();
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
