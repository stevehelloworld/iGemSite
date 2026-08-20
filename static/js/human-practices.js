document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".journey-timeline");
  const panels = Array.from(document.querySelectorAll(".journey-panel"));

  if (!timeline || panels.length === 0) return;

  const tabs = Array.from(timeline.querySelectorAll(".journey-dot"));
  timeline.setAttribute("role", "tablist");
  timeline.setAttribute("aria-label", "Integrated Human Practices Journey");

  function activateTab(tab, moveFocus = false) {
    const targetId = tab.dataset.panel;

    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });

    panels.forEach((panel) => {
      const active = panel.id === targetId;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });

    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    const targetId = tab.dataset.panel;
    tab.id = `journey-tab-${targetId}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", targetId);

    const panel = panels.find((item) => item.id === targetId);
    if (panel) {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
    }

    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;

      if (nextIndex !== null) {
        event.preventDefault();
        activateTab(tabs[nextIndex], true);
      }
    });
  });

  activateTab(tabs.find((tab) => tab.classList.contains("active")) || tabs[0]);
});
