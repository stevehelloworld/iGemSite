/* =======================================================
   Integrated Human Practices Journey
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const dots = document.querySelectorAll(".journey-dot");
    const panels = document.querySelectorAll(".journey-panel");

    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            const target = dot.dataset.panel;

            /* Remove current active status */
            dots.forEach(d => d.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            /* Activate selected dot */
            dot.classList.add("active");

            /* Show corresponding panel */
            const panel = document.getElementById(target);

            if(panel){

                panel.classList.add("active");

            }

        });

    });

});