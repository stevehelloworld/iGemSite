<div class="homepage-grid">

<div class="grid-row">

<section class="homepage-card problem-card story-v2-card" aria-labelledby="problem-title">
    <div class="water-story-v2" data-water-story>
        <div class="water-story-stage-v2">
            <header class="story-heading-v2">
                <p class="story-chapter-name">THE WATER WE LIVE WITH</p>
                <h2 id="problem-title">THE PROBLEM</h2>
                <p>Follow one drop of industrial wastewater as cadmium moves through water, farmland, and the people who depend on it.</p>
            </header>

            <figure class="pollution-panorama-v2">
                <img src="static/assets/images/problem/pollution-path-panorama-optimized.webp?v=20261013-pb2" alt="A colored-pencil panorama illustrating cadmium moving from industrial wastewater through a river and rice fields to a nearby community">
                <figcaption class="metal-legend-v2"> <span class="metal-cd"></span> Cadmium (Cd)</figcaption>
            </figure>

            <ol class="story-notes-v2" aria-label="Heavy-metal pollution pathway">
                <li class="is-active" data-water-step="0"><button type="button" aria-pressed="true"><span>At the pipe</span><strong>Mixed industrial effluent enters the river.</strong></button></li>
                <li data-water-step="1"><button type="button" aria-pressed="false"><span>In the ecosystem</span><strong>Persistent metals collect in water and living organisms.</strong></button></li>
                <li data-water-step="2"><button type="button" aria-pressed="false"><span>Through irrigation</span><strong>Contaminated water carries metals into soil and crops.</strong></button></li>
                <li data-water-step="3"><button type="button" aria-pressed="false"><span>At home</span><strong>Communities meet the same pollution through water and food.</strong></button></li>
            </ol>
        </div>
    </div>

    <section id="taiwan-locations" class="map-journey-v2" data-map-story aria-labelledby="taiwan-title">
        <div class="map-stage-v2">
            <header class="story-heading-v2 map-heading-v2">
                <p class="story-chapter-name">TAIWAN + GLOBAL HISTORY</p>
                <h2 id="taiwan-title">WHERE WATER IS AT RISK</h2>
                <p>Switch between water risks across Taiwan and a global historical case from Japan.</p>
            </header>

            <div class="map-view-switch" role="group" aria-label="Choose map view">
                <button class="map-view-button is-active" type="button" data-map-view-button="taiwan" aria-controls="map-view-taiwan" aria-pressed="true">Taiwan</button>
                <button class="map-view-button" type="button" data-map-view-button="world" aria-controls="map-view-world" aria-pressed="false">World</button>
            </div>

            <div id="map-view-taiwan" class="map-view-panel" data-map-view-panel="taiwan">
                <div class="map-composition-v2">
                    <figure class="persistent-map-v2">
                        <img src="static/assets/images/taiwan-scenes/taiwan-base-map-flat.png" alt="Hand-drawn physical map of Taiwan">
                        <button class="map-pin-v2 pin-taoyuan is-active" type="button" data-map-pin="0" aria-label="Show Taoyuan" aria-pressed="true"><span></span></button>
                        <button class="map-pin-v2 pin-taichung" type="button" data-map-pin="1" aria-label="Show Taichung" aria-pressed="false"><span></span></button>
                        <button class="map-pin-v2 pin-kaohsiung" type="button" data-map-pin="2" aria-label="Show Kaohsiung" aria-pressed="false"><span></span></button>
                        <svg class="map-route-v2" viewBox="0 0 100 150" aria-hidden="true"><path d="M59 22 C52 39 50 50 46 62 S38 94 30 111"/></svg>
                    </figure>

                    <div class="location-window-v2">
                        <img src="static/assets/images/taiwan-scenes/taiwan-city-vignettes-optimized.webp?v=20261013-pb2" alt="Three colored-pencil scenes showing industrial river discharge, agricultural irrigation, and harbor pollution in Taiwan">
                        <div class="location-copy-v2 is-active" data-map-step="0"><span>Taoyuan</span><h3>Industrial parks meet the river</h3><p>Electronics and metal-processing effluent can introduce Cd into northern waterways.</p></div>
                        <div class="location-copy-v2" data-map-step="1"><span>Taichung</span><h3>River pollution reaches farmland</h3><p>Irrigation creates a direct path from contaminated water to soil, crops, and food safety.</p></div>
                        <div class="location-copy-v2" data-map-step="2"><span>Kaohsiung</span><h3>Industry meets the harbor</h3><p>Industrial discharge and busy port activity increase the metal load faced by coastal ecosystems.</p></div>
                        <button class="map-next-v2" type="button" data-map-next aria-label="Show next location">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="map-view-world" class="map-view-panel world-map-composition-v2" data-map-view-panel="world" hidden>
                <figure class="world-map-figure-v2">
                    <svg viewBox="0 0 1000 500" role="img" aria-labelledby="world-map-title world-map-description">
                        <title id="world-map-title">Schematic world map with Minamata Bay marked in Japan</title>
                        <desc id="world-map-description">Simplified continents on a pale blue ocean. A marker identifies Minamata Bay in southwestern Japan.</desc>
                        <rect class="world-map-ocean-v2" width="1000" height="500" rx="14"/>
                        <g class="world-map-grid-v2" aria-hidden="true">
                            <path d="M0 125H1000M0 250H1000M0 375H1000M250 0V500M500 0V500M750 0V500"/>
                        </g>
                        <g class="world-map-land-v2" aria-hidden="true">
                            <path d="M85 106 112 83 145 76 169 84 187 72 212 84 226 101 253 106 269 124 258 140 237 143 229 160 211 165 202 181 187 184 178 201 162 211 153 235 140 244 128 231 119 211 108 199 101 180 86 165 77 148 85 131Z"/>
                            <path d="M182 215 198 225 208 242 224 252 215 265 204 259 197 246 186 237Z"/>
                            <path d="M204 270 229 270 248 282 257 298 251 315 260 332 250 350 246 372 235 389 231 411 218 434 211 410 207 388 199 367 195 346 188 324 187 302 194 285Z"/>
                            <path d="M258 61 280 51 302 58 314 72 304 87 284 97 266 88Z"/>
                            <path d="M443 111 454 99 469 101 478 111 471 121 458 125Z"/>
                            <path d="M454 143 477 135 498 143 510 159 509 181 501 197 499 219 488 239 480 263 468 279 461 257 459 236 448 214 445 190 438 171 444 155Z"/>
                            <path d="M481 104 496 91 515 94 526 105 516 114 500 115Z"/>
                            <path d="M505 93 535 78 564 82 585 72 612 80 639 76 659 85 683 78 710 86 736 82 760 91 789 91 808 101 831 102 847 114 840 125 822 125 812 136 793 133 781 145 764 140 749 153 730 149 716 161 699 154 682 160 668 148 648 151 632 137 613 143 598 129 578 137 561 126 542 135 528 123 510 126Z"/>
                            <path d="M618 147 638 151 648 166 645 184 654 196 644 215 633 202 628 184 617 171Z"/>
                            <path d="M682 179 699 184 707 197 702 209 691 202Z"/>
                            <path d="M730 203 748 207 761 219 756 231 740 226Z"/>
                            <path d="M780 241 803 233 829 239 846 252 841 268 824 278 802 274 786 263Z"/>
                            <path d="M858 146 864 152 861 161 866 168 862 178 857 173 859 164 855 157Z"/>
                        </g>
                        <g class="world-map-marker-v2" aria-hidden="true">
                            <path d="M672 111H823L859 158"/>
                            <rect x="505" y="94" width="167" height="34" rx="5"/>
                            <text x="516" y="116">MINAMATA BAY · JAPAN</text>
                            <circle cx="861" cy="162" r="14" class="world-map-marker-halo-v2"/>
                            <circle cx="861" cy="162" r="5" class="world-map-marker-dot-v2"/>
                        </g>
                    </svg>
                    <figcaption>Schematic global view · the marker identifies Minamata Bay in southwestern Japan.</figcaption>
                </figure>

                <article class="water-history-v2" aria-labelledby="minamata-title">
                    <div class="water-history-date">
                        <span>GLOBAL CASE</span>
                        <strong>1956</strong>
                        <small>Minamata Bay, Japan</small>
                    </div>
                    <div class="water-history-copy">
                        <h3 id="minamata-title">When pollution reached the food chain</h3>
                        <p>Minamata disease was first officially identified in 1956. Methylmercury in factory wastewater entered the sea and accumulated in fish and shellfish, exposing people who ate them. This is a mercury pollution case; our project studies cadmium.</p>
                        <a href="https://www.env.go.jp/en/chemi/hs/minamata2002/summary.html" target="_blank" rel="noopener noreferrer">Read the history from Japan&rsquo;s Ministry of the Environment</a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</section>

<button class="story-progress-button" type="button" aria-label="Back to top" title="Back to top">
    <svg class="story-progress-ring" viewBox="0 0 56 56" aria-hidden="true">
        <circle class="story-progress-track" cx="28" cy="28" r="24"></circle>
        <circle class="story-progress-value" cx="28" cy="28" r="24"></circle>
    </svg>
    <span aria-hidden="true">↑</span>
</button>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const scenes = document.querySelectorAll("[data-problem-scene]");
    const story = document.querySelector(".problem-story");
    const taiwanScenes = document.querySelectorAll("[data-taiwan-scene]");
    const taiwanStory = document.querySelector(".taiwan-story");
    const solutionScenes = document.querySelectorAll("[data-solution-scene]");
    const solutionStory = document.querySelector(".solution-story");
    const progressButton = document.querySelector(".story-progress-button");
    let queued = false;

    function updateSceneGroup(storyElement, sceneElements) {
        if (!storyElement || !sceneElements.length) return;

        const storyRect = storyElement.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const entryLead = window.innerHeight * 0.9;
        const storyProgress = Math.min(1, Math.max(0, (entryLead - storyRect.top) / (storyTravel + entryLead)));
        const sceneSpan = 1 / sceneElements.length;
        const introWindow = 0.14;
        const exitStart = 0.72;
        const shouldExitLast = storyElement.dataset.exitFade === "true";

        function ease(value) {
            const clamped = Math.min(1, Math.max(0, value));
            return clamped * clamped * (3 - 2 * clamped);
        }

        sceneElements.forEach((scene, index) => {
            let strength = 0;
            const localProgress = (storyProgress - index * sceneSpan) / sceneSpan;

            if (localProgress >= 0 && localProgress <= 1) {
                if (localProgress < introWindow) {
                    strength = ease(localProgress / introWindow);
                } else {
                    strength = 1;
                }

                if ((index < sceneElements.length - 1 || shouldExitLast) && localProgress > exitStart) {
                    strength = Math.min(strength, ease((1 - localProgress) / (1 - exitStart)));
                }
            }

            const opacity = strength;
            const offset = (1 - strength) * 64;
            const scale = 0.88 + strength * 0.12;

            scene.style.setProperty("--scene-opacity", opacity.toFixed(3));
            scene.style.setProperty("--scene-offset", offset.toFixed(1) + "px");
            scene.style.setProperty("--scene-scale", scale.toFixed(3));
            scene.classList.toggle("is-visible", strength > 0.08);
        });
    }

    function updateSolutionStory() {
        if (!solutionStory || !solutionScenes.length) return;

        const storyRect = solutionStory.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const entryLead = window.innerHeight * 0.9;
        const storyProgress = Math.min(1, Math.max(0, (entryLead - storyRect.top) / (storyTravel + entryLead)));
        const sceneSpan = 1 / solutionScenes.length;

        function ease(value) {
            const clamped = Math.min(1, Math.max(0, value));
            return clamped * clamped * (3 - 2 * clamped);
        }

        solutionScenes.forEach((scene, index) => {
            const localProgress = (storyProgress - index * sceneSpan) / sceneSpan;
            let sceneStrength = 0;
            let detailStrength = 0;

            if (localProgress >= -0.16 && localProgress < 0 && index > 0) {
                sceneStrength = ease((localProgress + 0.16) / 0.16);
            } else if (localProgress >= 0 && localProgress <= 1) {
                if (index === 0 && localProgress < 0.16) {
                    sceneStrength = ease(localProgress / 0.16);
                } else if (localProgress > 0.82 && index < solutionScenes.length - 1) {
                    sceneStrength = ease((1 - localProgress) / 0.18);
                } else {
                    sceneStrength = 1;
                }

                if (scene.classList.contains("solution-step-scene")) {
                    if (localProgress > 0.32 && localProgress < 0.78) {
                        detailStrength = ease((localProgress - 0.32) / 0.18);
                    } else if (localProgress >= 0.78) {
                        detailStrength = 1;
                    }
                }
            }

            const offset = (1 - sceneStrength) * 64;
            const scale = 0.9 + sceneStrength * 0.1;

            scene.style.setProperty("--scene-opacity", sceneStrength.toFixed(3));
            scene.style.setProperty("--scene-offset", offset.toFixed(1) + "px");
            scene.style.setProperty("--scene-scale", scale.toFixed(3));
            scene.style.setProperty("--detail-opacity", detailStrength.toFixed(3));
            scene.style.setProperty("--detail-offset", ((1 - detailStrength) * 28).toFixed(1) + "px");
            scene.classList.toggle("is-visible", sceneStrength > 0.08);
        });
    }

    function updateStoryMotion() {
        updateSceneGroup(story, scenes);
        updateSceneGroup(taiwanStory, taiwanScenes);
        updateSolutionStory();

        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
        progressButton.style.setProperty("--page-progress", progress.toFixed(4));
        progressButton.classList.toggle("is-active", window.scrollY > 180);
        queued = false;
    }

    function requestUpdate() {
        if (!queued) {
            queued = true;
            window.requestAnimationFrame(updateStoryMotion);
        }
    }

    progressButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateStoryMotion();
});
</script>

<div class="homepage-card solution-card story-v2-card" aria-labelledby="solution-title">
    <div class="treatment-story-v2" data-treatment-story>
        <div class="treatment-stage-v2">
            <header class="story-heading-v2 treatment-heading-v2">
                <p class="story-chapter-name">WHAT WE BUILT AND WHAT COMES NEXT</p>
                <h2 id="solution-title">OUR DESIGN GOAL</h2>
                <p>Only steps 1 and 2 were implemented this season: we measured GFP response and built and compared MT candidate constructs. Direct Cd binding was not measured. Steps 3–5 are future goals; this five-step pathway has not been demonstrated as a treatment process.</p>
            </header>

            <figure class="treatment-panorama-v2">
                <img src="static/assets/images/solution/bioremediation-process-panorama-optimized.webp?v=20261013-pb2" alt="An illustration of a proposed cadmium treatment pathway using engineered bacteria, containment, and metal recovery">
            </figure>

            <ol class="treatment-steps-v2" aria-label="Proposed cadmium treatment steps">
                <li class="is-active" data-treatment-step="0"><button type="button" aria-pressed="true"><span>1</span><strong>Detect</strong><small><b class="treatment-step-status treatment-step-status--done">Implemented this season:</b> GFP response measured under controlled Cd²⁺ exposure.</small></button></li>
                <li data-treatment-step="1"><button type="button" aria-pressed="false"><span>2</span><strong>Test MT candidates</strong><small><b class="treatment-step-status treatment-step-status--done">Implemented this season:</b> Constructs were built and compared; direct Cd binding remains unmeasured.</small></button></li>
                <li data-treatment-step="2"><button type="button" aria-pressed="false"><span>3</span><strong>Contain</strong><small><b class="treatment-step-status treatment-step-status--future">Future goal:</b> Develop and test a membrane-based containment setup.</small></button></li>
                <li data-treatment-step="3"><button type="button" aria-pressed="false"><span>4</span><strong>Recover</strong><small><b class="treatment-step-status treatment-step-status--future">Future goal:</b> Demonstrate metal recovery from contained biomass.</small></button></li>
                <li data-treatment-step="4"><button type="button" aria-pressed="false"><span>5</span><strong>Verify</strong><small><b class="treatment-step-status treatment-step-status--future">Future goal:</b> Measure Cd in cells and remaining solution before claiming removal.</small></button></li>
            </ol>
        </div>
    </div>
</div>

<!-- PROJECT HIGHLIGHTS -->
<div class="homepage-card highlight-card">
    <div class="highlight-gradient-bridge" aria-hidden="true"></div>
    <div class="highlight-story" data-intro-fade="true">
        <div class="highlight-stage">
            <article class="highlight-scene" data-highlight-scene>
                <h2 class="highlight-kicker-title">PROJECT HIGHLIGHTS</h2>
                <div class="highlight-grid">
                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-diagram-3-fill"></i>
                        <div>
                            <h3>Paired Design</h3>
                            <p>A cadmium-responsive GFP sensor with four MT candidates.</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-broadcast-pin"></i>
                        <div>
                            <h3>GFP Response</h3>
                            <p>We tracked GFP fluorescence during controlled Cd²⁺ exposure.</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-magnet-fill"></i>
                        <div>
                            <h3>Binding Hypothesis</h3>
                            <p>Candidate metallothioneins were selected for testing; direct binding was not measured.</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-recycle"></i>
                        <div>
                            <h3>Next Measurement</h3>
                            <p>Quantify cadmium in washed cells and spent medium.</p>
                        </div>
                    </div>
                </div>

                <div class="future-box" data-highlight-future>
                    <div class="future-text">
                        <div class="future-title">
                            <i class="bi bi-leaf-fill"></i>
                            <span>Towards a Sustainable Future</span>
                        </div>
                        <p>
                            A possible route to
                            investigate, pending
                            direct measurements
                            and containment tests.
                        </p>
                    </div>

                    <img
                        src="static/assets/images/vis-logo-heart.png"
                        class="future-image"
                        alt="VIS heart logo">
                </div>
            </article>
        </div>
    </div>
</div>
</div>

</div>
