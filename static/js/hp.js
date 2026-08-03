/* =======================================================
   Integrated Human Practices Journey
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const dots = document.querySelectorAll(".journey-dot");
    const panels = document.querySelectorAll(".journey-panel");
    const lines = document.querySelectorAll(".timeline-line");

    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            const target = dot.dataset.panel;

            /* Remove current active status */
            dots.forEach(d => d.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            lines.forEach(l=>l.classList.remove("active"));

            /* Activate selected dot */
            dot.classList.add("active");
            const index = [...dots].indexOf(dot);

            for(let i=0;i<index;i++){
                lines[i].classList.add("active");
            }

            /* Show corresponding panel */
            const panel = document.getElementById(target);

            if(panel){

                panel.classList.add("active");

            }

        });

    });

});