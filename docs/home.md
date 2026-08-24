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
                <img src="/static/assets/images/problem/pollution-path-panorama-optimized.jpg" alt="A colored-pencil panorama showing heavy metals moving from industrial wastewater through a river and rice fields to a nearby community">
                <figcaption class="metal-legend-v2"><span class="metal-pb"></span> Lead (Pb) <span class="metal-cd"></span> Cadmium (Cd)</figcaption>
            </figure>

            <ol class="story-notes-v2" aria-label="Heavy-metal pollution pathway">
                <li class="is-active" data-water-step="0"><span>At the pipe</span><strong>Mixed industrial effluent enters the river.</strong></li>
                <li data-water-step="1"><span>In the ecosystem</span><strong>Persistent metals collect in water and living organisms.</strong></li>
                <li data-water-step="2"><span>Through irrigation</span><strong>Contaminated water carries metals into soil and crops.</strong></li>
                <li data-water-step="3"><span>At home</span><strong>Communities meet the same pollution through water and food.</strong></li>
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
                    <img src="/static/assets/images/taiwan-scenes/taiwan-base-map-flat.png" alt="Hand-drawn physical map of Taiwan">
                    <button class="map-pin-v2 pin-taoyuan is-active" type="button" data-map-pin="0" aria-label="Show Taoyuan"><span></span></button>
                    <button class="map-pin-v2 pin-taichung" type="button" data-map-pin="1" aria-label="Show Taichung"><span></span></button>
                    <button class="map-pin-v2 pin-kaohsiung" type="button" data-map-pin="2" aria-label="Show Kaohsiung"><span></span></button>
                    <svg class="map-route-v2" viewBox="0 0 100 150" aria-hidden="true"><path d="M59 22 C52 39 50 50 46 62 S38 94 30 111"/></svg>
                </figure>

                <div class="location-window-v2">
                    <img src="/static/assets/images/taiwan-scenes/taiwan-city-vignettes-optimized.jpg" alt="Three colored-pencil scenes showing industrial river discharge, agricultural irrigation, and harbor pollution in Taiwan">
                    <div class="location-copy-v2 is-active" data-map-step="0"><span>Taoyuan</span><h3>Industrial parks meet the river</h3><p>Electronics and metal-processing effluent can introduce Pb and Cd into northern waterways.</p></div>
                    <div class="location-copy-v2" data-map-step="1"><span>Taichung</span><h3>River pollution reaches farmland</h3><p>Irrigation creates a direct path from contaminated water to soil, crops, and food safety.</p></div>
                    <div class="location-copy-v2" data-map-step="2"><span>Kaohsiung</span><h3>Industry meets the harbor</h3><p>Industrial discharge and busy port activity increase the metal load faced by coastal ecosystems.</p></div>
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
    const highlightScenes = document.querySelectorAll("[data-highlight-scene]");
    const highlightStory = document.querySelector(".highlight-story");
    const hpStory = document.querySelector(".hp-story");
    const engineeringStory = document.querySelector(".engineering-story");
    const teamStory = document.querySelector(".team-story");
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

    function updateHighlightStory() {
        if (!highlightStory || !highlightScenes.length) return;

        const storyRect = highlightStory.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const entryLead = window.innerHeight * 0.9;
        const storyProgress = Math.min(1, Math.max(0, (entryLead - storyRect.top) / (storyTravel + entryLead)));

        function ease(value) {
            const clamped = Math.min(1, Math.max(0, value));
            return clamped * clamped * (3 - 2 * clamped);
        }

        highlightScenes.forEach((scene, index) => {
            let strength = 0;

            if (index === 0) {
                if (storyProgress < 0.2) {
                    strength = ease(storyProgress / 0.08);
                } else if (storyProgress < 0.32) {
                    strength = ease((0.32 - storyProgress) / 0.12);
                }
            } else if (index === 1) {
                if (storyProgress >= 0.28 && storyProgress < 0.9) {
                    strength = ease((storyProgress - 0.28) / 0.08);
                } else if (storyProgress >= 0.9) {
                    strength = ease((1 - storyProgress) / 0.1);
                }
            }

            scene.style.setProperty("--scene-opacity", strength.toFixed(3));
            scene.style.setProperty("--scene-offset", ((1 - strength) * 64).toFixed(1) + "px");
            scene.style.setProperty("--scene-scale", (0.9 + strength * 0.1).toFixed(3));
            scene.classList.toggle("is-visible", strength > 0.08);
        });

        const cards = highlightStory.querySelectorAll("[data-highlight-card]");
        const cardStarts = [0.38, 0.48, 0.58, 0.68];
        cards.forEach((card, index) => {
            const cardStrength = storyProgress >= cardStarts[index] ? ease((storyProgress - cardStarts[index]) / 0.08) : 0;
            card.style.setProperty("--card-opacity", cardStrength.toFixed(3));
            card.style.setProperty("--card-offset", ((1 - cardStrength) * 34).toFixed(1) + "px");
        });

        const futurePanel = highlightStory.querySelector("[data-highlight-future]");
        if (futurePanel) {
            const futureStrength = storyProgress >= 0.78 ? ease((storyProgress - 0.78) / 0.08) : 0;
            futurePanel.style.setProperty("--future-opacity", futureStrength.toFixed(3));
            futurePanel.style.setProperty("--future-offset", ((1 - futureStrength) * 38).toFixed(1) + "px");
        }
    }

    function updateHpStory() {
        if (!hpStory) return;

        const storyRect = hpStory.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const entryLead = window.innerHeight * 0.9;
        const storyProgress = Math.min(1, Math.max(0, (entryLead - storyRect.top) / (storyTravel + entryLead)));

        function ease(value) {
            const clamped = Math.min(1, Math.max(0, value));
            return clamped * clamped * (3 - 2 * clamped);
        }

        const wholeScene = hpStory.querySelector("[data-hp-scene]");
        let sceneStrength = 0;
        if (storyProgress < 0.97) {
            sceneStrength = ease(storyProgress / 0.08);
        } else {
            sceneStrength = ease((1 - storyProgress) / 0.03);
        }

        if (wholeScene) {
            wholeScene.style.setProperty("--scene-opacity", sceneStrength.toFixed(3));
            wholeScene.style.setProperty("--scene-offset", ((1 - sceneStrength) * 64).toFixed(1) + "px");
            wholeScene.style.setProperty("--scene-scale", (0.9 + sceneStrength * 0.1).toFixed(3));
            wholeScene.classList.toggle("is-visible", sceneStrength > 0.08);
        }

        const centerStrength = storyProgress >= 0.06 ? ease((storyProgress - 0.06) / 0.1) : 0;
        hpStory.querySelectorAll("[data-hp-center]").forEach((center) => {
            center.style.setProperty("--hp-center-opacity", centerStrength.toFixed(3));
            center.style.setProperty("--hp-center-offset", ((1 - centerStrength) * 32).toFixed(1) + "px");
        });

        const branches = hpStory.querySelectorAll("[data-hp-branch]");
        const branchStarts = [0.2, 0.3, 0.4, 0.5, 0.6];
        branches.forEach((branch, index) => {
            const branchStrength = storyProgress >= branchStarts[index] ? ease((storyProgress - branchStarts[index]) / 0.08) : 0;
            branch.style.setProperty("--branch-opacity", branchStrength.toFixed(3));
            branch.style.setProperty("--branch-offset", ((1 - branchStrength) * 24).toFixed(1) + "px");
        });

        const fullDiagram = hpStory.querySelector("[data-hp-full]");
        if (fullDiagram) {
            const fullStrength = storyProgress >= 0.58 ? ease((storyProgress - 0.58) / 0.08) : 0;
            fullDiagram.style.setProperty("--full-opacity", fullStrength.toFixed(3));
        }

        const textLines = hpStory.querySelectorAll("[data-hp-line]");
        const textStarts = [0.68, 0.75, 0.82];
        textLines.forEach((line, index) => {
            const lineStrength = storyProgress >= textStarts[index] ? ease((storyProgress - textStarts[index]) / 0.07) : 0;
            line.style.setProperty("--line-opacity", lineStrength.toFixed(3));
            line.style.setProperty("--line-offset", ((1 - lineStrength) * 28).toFixed(1) + "px");
        });

        const button = hpStory.querySelector("[data-hp-button]");
        if (button) {
            const buttonStrength = storyProgress >= 0.89 ? ease((storyProgress - 0.89) / 0.06) : 0;
            button.style.setProperty("--button-opacity", buttonStrength.toFixed(3));
            button.style.setProperty("--button-offset", ((1 - buttonStrength) * 24).toFixed(1) + "px");
        }
    }

    function updateEngineeringStory() {
        if (!engineeringStory) return;

        const storyRect = engineeringStory.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const entryLead = window.innerHeight * 0.9;
        const storyProgress = Math.min(1, Math.max(0, (entryLead - storyRect.top) / (storyTravel + entryLead)));

        function ease(value) {
            const clamped = Math.min(1, Math.max(0, value));
            return clamped * clamped * (3 - 2 * clamped);
        }

        const wholeScene = engineeringStory.querySelector("[data-engineering-scene]");
        let sceneStrength = 0;
        if (storyProgress < 0.97) {
            sceneStrength = ease(storyProgress / 0.08);
        } else {
            sceneStrength = ease((1 - storyProgress) / 0.03);
        }

        if (wholeScene) {
            wholeScene.style.setProperty("--scene-opacity", sceneStrength.toFixed(3));
            wholeScene.style.setProperty("--scene-offset", ((1 - sceneStrength) * 64).toFixed(1) + "px");
            wholeScene.style.setProperty("--scene-scale", (0.9 + sceneStrength * 0.1).toFixed(3));
            wholeScene.classList.toggle("is-visible", sceneStrength > 0.08);
        }

        const centerStrength = storyProgress >= 0.08 ? ease((storyProgress - 0.08) / 0.1) : 0;
        engineeringStory.querySelectorAll("[data-engineering-center]").forEach((center) => {
            center.style.setProperty("--engineering-center-opacity", centerStrength.toFixed(3));
            center.style.setProperty("--engineering-center-offset", ((1 - centerStrength) * 28).toFixed(1) + "px");
        });

        const nodes = engineeringStory.querySelectorAll("[data-engineering-node]");
        const nodeStarts = [0.08, 0.14, 0.2, 0.26];
        nodes.forEach((node, index) => {
            const nodeStrength = storyProgress >= nodeStarts[index] ? ease((storyProgress - nodeStarts[index]) / 0.08) : 0;
            node.style.setProperty("--engineering-node-opacity", nodeStrength.toFixed(3));
            node.style.setProperty("--engineering-node-offset", ((1 - nodeStrength) * 22).toFixed(1) + "px");
        });

        const engineeringFull = engineeringStory.querySelector("[data-engineering-full]");
        if (engineeringFull) {
            const fullStrength = storyProgress >= 0.24 ? ease((storyProgress - 0.24) / 0.08) : 0;
            engineeringFull.style.setProperty("--engineering-full-opacity", fullStrength.toFixed(3));
        }

        const textLines = engineeringStory.querySelectorAll("[data-engineering-line]");
        const textStarts = [0.3, 0.36, 0.42, 0.48];
        textLines.forEach((line, index) => {
            const lineStrength = storyProgress >= textStarts[index] ? ease((storyProgress - textStarts[index]) / 0.07) : 0;
            line.style.setProperty("--line-opacity", lineStrength.toFixed(3));
            line.style.setProperty("--line-offset", ((1 - lineStrength) * 28).toFixed(1) + "px");
        });

        const button = engineeringStory.querySelector("[data-engineering-button]");
        if (button) {
            const buttonStrength = storyProgress >= 0.56 ? ease((storyProgress - 0.56) / 0.06) : 0;
            button.style.setProperty("--button-opacity", buttonStrength.toFixed(3));
            button.style.setProperty("--button-offset", ((1 - buttonStrength) * 24).toFixed(1) + "px");
        }
    }

    function updateTeamStory() {
        if (!teamStory) return;

        const storyRect = teamStory.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const entryLead = window.innerHeight * 0.9;
        const storyProgress = Math.min(1, Math.max(0, (entryLead - storyRect.top) / (storyTravel + entryLead)));

        function ease(value) {
            const clamped = Math.min(1, Math.max(0, value));
            return clamped * clamped * (3 - 2 * clamped);
        }

        const wholeScene = teamStory.querySelector("[data-team-scene]");
        let sceneStrength = 0;
        if (storyProgress < 0.97) {
            sceneStrength = ease(storyProgress / 0.08);
        } else {
            sceneStrength = ease((1 - storyProgress) / 0.03);
        }

        if (wholeScene) {
            wholeScene.style.setProperty("--scene-opacity", sceneStrength.toFixed(3));
            wholeScene.style.setProperty("--scene-offset", ((1 - sceneStrength) * 64).toFixed(1) + "px");
            wholeScene.style.setProperty("--scene-scale", (0.9 + sceneStrength * 0.1).toFixed(3));
            wholeScene.classList.toggle("is-visible", sceneStrength > 0.08);
        }

        const photo = teamStory.querySelector("[data-team-photo]");
        if (photo) {
            const photoStrength = storyProgress >= 0.12 ? ease((storyProgress - 0.12) / 0.1) : 0;
            photo.style.setProperty("--team-photo-opacity", photoStrength.toFixed(3));
            photo.style.setProperty("--team-photo-offset", ((1 - photoStrength) * 28).toFixed(1) + "px");
        }

        const textLines = teamStory.querySelectorAll("[data-team-line]");
        const textStarts = [0.32, 0.5];
        textLines.forEach((line, index) => {
            const lineStrength = storyProgress >= textStarts[index] ? ease((storyProgress - textStarts[index]) / 0.08) : 0;
            line.style.setProperty("--line-opacity", lineStrength.toFixed(3));
            line.style.setProperty("--line-offset", ((1 - lineStrength) * 26).toFixed(1) + "px");
        });

        const button = teamStory.querySelector("[data-team-button]");
        if (button) {
            const buttonStrength = storyProgress >= 0.74 ? ease((storyProgress - 0.74) / 0.07) : 0;
            button.style.setProperty("--button-opacity", buttonStrength.toFixed(3));
            button.style.setProperty("--button-offset", ((1 - buttonStrength) * 24).toFixed(1) + "px");
        }
    }

    function updateStoryMotion() {
        updateSceneGroup(story, scenes);
        updateSceneGroup(taiwanStory, taiwanScenes);
        updateSolutionStory();
        updateHighlightStory();
        updateHpStory();
        updateEngineeringStory();
        updateTeamStory();

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
                <img src="/static/assets/images/solution/bioremediation-process-panorama-optimized.jpg" alt="A colored-pencil treatment channel showing polluted water, engineered bacteria binding metals, membrane separation, metal recovery, and clean water">
            </figure>

            <ol class="treatment-steps-v2" aria-label="Biological heavy-metal treatment steps">
                <li class="is-active" data-treatment-step="0"><span>1</span><strong>Detect</strong><small>Identify Pb²⁺ and Cd²⁺ in the incoming water.</small></li>
                <li data-treatment-step="1"><span>2</span><strong>Capture</strong><small>Metallothionein domains hold the target ions.</small></li>
                <li data-treatment-step="2"><span>3</span><strong>Separate</strong><small>A membrane keeps engineered bacteria inside the system.</small></li>
                <li data-treatment-step="3"><span>4</span><strong>Recover</strong><small>Bound metals are collected instead of becoming sludge.</small></li>
                <li data-treatment-step="4"><span>5</span><strong>Release</strong><small>Cleaner water returns to the environment.</small></li>
            </ol>
        </div>
    </div>
</div>

<!-- PROJECT HIGHLIGHTS -->
<div class="homepage-card highlight-card">
    <div class="highlight-gradient-bridge" aria-hidden="true"></div>
    <div class="highlight-story" data-intro-fade="true">
        <div class="highlight-stage">
            <article class="highlight-scene highlight-title-scene" data-highlight-scene>
                <h2>PROJECT HIGHLIGHTS</h2>
            </article>

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
                        src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/sapling2.avif"
                        class="future-image">
                </div>
            </article>
        </div>
    </div>
</div>
</div>


<div class="grid-row">

<div class="homepage-card hp-card" aria-labelledby="hp-title">
    <div class="hp-gradient-bridge" aria-hidden="true"></div>
    <div class="hp-story" data-intro-fade="true">
        <div class="hp-stage">
            <article class="hp-scene" data-hp-scene>
                <h2 id="hp-title">HUMAN PRACTICES</h2>
                <div class="hp-layout">
                    <div class="hp-visual">
                        <div class="hp-image-wrapper" aria-label="Human Practices stakeholder map">
                            <svg class="hp-layered-diagram" viewBox="0 0 1254 1254" role="img" aria-labelledby="hp-diagram-title">
                                <title id="hp-diagram-title">TEAM connects with Government, Industry, Researchers, Public, and Wastewater stakeholders.</title>
                                <defs>
                                    <clipPath id="hp-clip-team-full"><circle cx="626" cy="628" r="200" /></clipPath>
                                    <clipPath id="hp-clip-government-full"><circle cx="626" cy="203" r="197" /><rect x="612" y="378" width="28" height="108" /></clipPath>
                                    <clipPath id="hp-clip-industry-full"><circle cx="207" cy="529" r="197" /><polygon points="382,540 486,578 472,624 358,586" /></clipPath>
                                    <clipPath id="hp-clip-researchers-full"><circle cx="1032" cy="529" r="197" /><polygon points="770,578 874,540 898,586 784,624" /></clipPath>
                                    <clipPath id="hp-clip-public-full"><circle cx="330" cy="1024" r="202" /><polygon points="418,794 566,926 524,974 374,842" /></clipPath>
                                    <clipPath id="hp-clip-wastewater-full"><circle cx="925" cy="1024" r="202" /><polygon points="708,926 856,794 900,842 748,974" /></clipPath>
                                </defs>

                                <g class="hp-layer hp-layer-team" data-hp-center>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" clip-path="url(#hp-clip-team-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" clip-path="url(#hp-clip-government-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" clip-path="url(#hp-clip-industry-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" clip-path="url(#hp-clip-researchers-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" clip-path="url(#hp-clip-public-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" clip-path="url(#hp-clip-wastewater-full)" />
                                </g>
                                <g class="hp-layer hp-layer-full" data-hp-full>
                                    <image href="/static/assets/images/hp-reference-diagram-flat.png" width="1254" height="1254" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="hp-text">
                        <div class="hp-section-block" data-hp-line>
                            <h3>Listen</h3>
                            <p>Understand stakeholder needs.</p>
                        </div>

                        <div class="hp-section-block" data-hp-line>
                            <h3>Integrate</h3>
                            <p>Refine our design with feedback.</p>
                        </div>

                        <div class="hp-section-block" data-hp-line>
                            <h3>Impact</h3>
                            <p>Create practical real-world solutions.</p>
                        </div>

                        <a href="human-practices" class="btn-cycle" data-hp-button>
                            VIEW MORE ...
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="homepage-card engineering-card" aria-labelledby="engineering-title">
    <div class="engineering-gradient-bridge" aria-hidden="true"></div>
    <div class="engineering-story">
        <div class="engineering-stage">
            <article class="engineering-scene" data-engineering-scene>
                <h2 id="engineering-title">ENGINEERING CYCLE</h2>
                <div class="engineering-layout">
                    <div class="engineering-visual">
                        <div class="engineering-image-wrapper" aria-label="Engineering cycle showing Design, Build, Test, and Learn around a central gear">
                            <svg class="engineering-layered-diagram" viewBox="0 0 1280 1280" role="img" aria-labelledby="engineering-diagram-title">
                                <title id="engineering-diagram-title">Engineering cycle with Design, Build, Test, and Learn arranged around a central gear.</title>
                                <defs>
                                    <clipPath id="engineering-clip-center"><circle cx="640" cy="640" r="176" /></clipPath>
                                    <clipPath id="engineering-clip-design">
                                        <circle cx="640" cy="216" r="196" />
                                        <path d="M248 605 C338 395, 466 274, 520 252 L540 286 C484 312, 374 418, 286 630 Z" />
                                        <path d="M758 250 C862 276, 986 392, 1042 606 L1006 630 C948 422, 840 318, 738 286 Z" />
                                    </clipPath>
                                    <clipPath id="engineering-clip-build">
                                        <circle cx="1070" cy="640" r="196" />
                                        <path d="M758 250 C862 276, 986 392, 1042 606 L1006 630 C948 422, 840 318, 738 286 Z" />
                                        <path d="M1042 674 C984 884, 878 992, 770 1030 L748 994 C846 958, 948 850, 1006 650 Z" />
                                    </clipPath>
                                    <clipPath id="engineering-clip-test">
                                        <circle cx="640" cy="1060" r="196" />
                                        <path d="M1042 674 C984 884, 878 992, 770 1030 L748 994 C846 958, 948 850, 1006 650 Z" />
                                        <path d="M510 994 C398 954, 294 846, 238 676 L274 650 C332 848, 430 956, 532 1030 Z" />
                                    </clipPath>
                                    <clipPath id="engineering-clip-learn">
                                        <circle cx="216" cy="640" r="196" />
                                        <path d="M510 994 C398 954, 294 846, 238 676 L274 650 C332 848, 430 956, 532 1030 Z" />
                                        <path d="M248 605 C338 395, 466 274, 520 252 L540 286 C484 312, 374 418, 286 630 Z" />
                                    </clipPath>
                                </defs>
                                <g class="engineering-layer engineering-layer-center" data-engineering-center>
                                    <image href="/static/assets/images/engineering-cycle-flat.png" width="1280" height="1280" clip-path="url(#engineering-clip-center)" />
                                </g>
                                <g class="engineering-layer engineering-layer-node" data-engineering-node>
                                    <image href="/static/assets/images/engineering-cycle-flat.png" width="1280" height="1280" clip-path="url(#engineering-clip-design)" />
                                </g>
                                <g class="engineering-layer engineering-layer-node" data-engineering-node>
                                    <image href="/static/assets/images/engineering-cycle-flat.png" width="1280" height="1280" clip-path="url(#engineering-clip-build)" />
                                </g>
                                <g class="engineering-layer engineering-layer-node" data-engineering-node>
                                    <image href="/static/assets/images/engineering-cycle-flat.png" width="1280" height="1280" clip-path="url(#engineering-clip-test)" />
                                </g>
                                <g class="engineering-layer engineering-layer-node" data-engineering-node>
                                    <image href="/static/assets/images/engineering-cycle-flat.png" width="1280" height="1280" clip-path="url(#engineering-clip-learn)" />
                                </g>
                                <g class="engineering-layer engineering-layer-full" data-engineering-full>
                                    <image href="/static/assets/images/engineering-cycle-flat.png" width="1280" height="1280" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="engineering-text">
                        <div class="cycle-step" data-engineering-line>
                            <strong>Design</strong>
                            <p>Plan our biological solution.</p>
                        </div>

                        <div class="cycle-step" data-engineering-line>
                            <strong>Build</strong>
                            <p>Construct and optimize.</p>
                        </div>

                        <div class="cycle-step" data-engineering-line>
                            <strong>Test</strong>
                            <p>Evaluate system performance.</p>
                        </div>

                        <div class="cycle-step" data-engineering-line>
                            <strong>Learn</strong>
                            <p>Improve through iteration.</p>
                        </div>

                        <a href="engineering" class="btn-cycle" data-engineering-button>
                            SEE OUR ITERATIONS
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="homepage-card team-card" aria-labelledby="team-story-title">
    <div class="team-gradient-bridge" aria-hidden="true"></div>
    <div class="team-story" data-intro-fade="true">
        <div class="team-stage">
            <article class="team-scene" data-team-scene>
                <h2 id="team-story-title">MEET OUR TEAM</h2>
                <div class="team-layout">
                    <div class="team-photo-slot" data-team-photo>
                        <div class="team-photo-frame">
                            <img class="team-collaboration-illustration" src="/static/assets/images/team-collaboration-optimized.jpg" alt="Colored-pencil illustration of high-school students combining wet lab, data analysis, design, and outreach around one water-treatment project">
                            <p class="team-photo-date">One project, many kinds of work</p>
                        </div>
                    </div>

                    <div class="team-text">
                        <div class="team-section-block" data-team-line>
                            <h3>Interdisciplinary Collaboration</h3>
                            <p>Wet lab, dry lab, design, and outreach members work together as one connected team.</p>
                        </div>

                        <div class="team-section-block" data-team-line>
                            <h3>Meet Every Member</h3>
                            <p>Explore the full team page to see members, roles, and areas of expertise in more detail.</p>
                        </div>

                        <a href="/team" class="btn-cycle" data-team-button>
                            VIEW ALL MEMBERS
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>

</div>

</div>
