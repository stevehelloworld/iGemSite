<div class="homepage-grid">

<div class="grid-row">

<section class="homepage-card problem-card story-v2-card" aria-labelledby="problem-title">
    <div class="water-story-v2" data-water-story>
        <div class="water-story-stage-v2">
            <header class="story-heading-v2">
                <p class="story-chapter-name">THE WATER WE LIVE WITH</p>
                <h2 id="problem-title">THE PROBLEM</h2>
                <p>Follow one drop of industrial wastewater as heavy metals move through a river, food, and the people who depend on that water.</p>
            </header>

            <figure class="pollution-panorama-v2">
                <img src="static/assets/images/problem/pollution-path-panorama-optimized.webp?v=20261013-pb2" alt="A colored-pencil panorama showing heavy metals moving from industrial wastewater through a river and rice fields to a nearby community">
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
                <p class="story-chapter-name">FROM NORTH TO SOUTH</p>
                <h2 id="taiwan-title">WHERE WATER IS AT RISK</h2>
                <p>One map stays in view while each location reveals a different route from industry to water.</p>
            </header>

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
                <p class="story-chapter-name">FROM DETECTION TO RECOVERY</p>
                <h2 id="solution-title">OUR SOLUTION</h2>
                <p>Instead of five disconnected cards, follow the same water through one complete treatment channel.</p>
            </header>

            <figure class="treatment-panorama-v2">
                <img src="static/assets/images/solution/bioremediation-process-panorama-optimized.webp?v=20261013-pb2" alt="A colored-pencil treatment channel showing polluted water, engineered bacteria binding metals, membrane separation, metal recovery, and clean water">
            </figure>

            <ol class="treatment-steps-v2" aria-label="Biological heavy-metal treatment steps">
                <li class="is-active" data-treatment-step="0"><button type="button" aria-pressed="true"><span>1</span><strong>Detect</strong><small>Identify Cd²⁺ in the incoming water.</small></button></li>
                <li data-treatment-step="1"><button type="button" aria-pressed="false"><span>2</span><strong>Capture</strong><small>Metallothionein domains hold the target ions.</small></button></li>
                <li data-treatment-step="2"><button type="button" aria-pressed="false"><span>3</span><strong>Separate</strong><small>A membrane keeps engineered bacteria inside the system.</small></button></li>
                <li data-treatment-step="3"><button type="button" aria-pressed="false"><span>4</span><strong>Recover</strong><small>Bound metals are collected instead of becoming sludge.</small></button></li>
                <li data-treatment-step="4"><button type="button" aria-pressed="false"><span>5</span><strong>Release</strong><small>Cleaner water returns to the environment.</small></button></li>
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
                            <h3>Dual-Function System</h3>
                            <p>One engineered E. coli for detection and remediation.</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-broadcast-pin"></i>
                        <div>
                            <h3>Real-Time Biosensing</h3>
                            <p>Responsive detection of Cd²⁺.</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-magnet-fill"></i>
                        <div>
                            <h3>Metal Sequestration</h3>
                            <p>Metallothionein captures toxic heavy metal ions.</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-recycle"></i>
                        <div>
                            <h3>Sustainable Solution</h3>
                            <p>An eco-friendly approach toward cleaner wastewater.</p>
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
                            Developing efficient,
                            safe, and sustainable
                            solutions for heavy
                            metal remediation.
                        </p>
                    </div>

                    <img
                        src="static/assets/images/vis-logo-heart.png"
                        class="future-image">
                </div>
            </article>
        </div>
    </div>
</div>
</div>

</div>
