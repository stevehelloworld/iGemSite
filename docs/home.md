<div class="homepage-grid">

<div class="grid-row">

<section class="homepage-card problem-card" aria-labelledby="problem-title">
    <div class="problem-story-intro">
        <p class="problem-eyebrow">THE WATER WE LIVE WITH</p>
        <h2 id="problem-title">THE PROBLEM</h2>
        <p>Heavy-metal pollution is not one isolated issue. Scroll through the three connected pressures facing water, ecosystems, and communities.</p>
    </div>

    <div class="problem-story" data-exit-fade="true">
        <div class="problem-stage">
        <article class="problem-scene lead-scene" data-problem-scene>
            <div class="problem-scene-visual" aria-hidden="true">
                <div class="problem-pie">
                    <span class="pie-slice slice-one"></span>
                    <span class="pie-slice slice-two"></span>
                    <span class="pie-slice slice-three"></span>
                    <div class="pie-core"><img src="/static/assets/images/problem/lead-mascot.png" alt=""></div>
                </div>
                <span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span><span class="orbit-dot dot-three"></span>
            </div>
            <div class="problem-scene-copy">
                <span class="problem-step">01 / 03</span>
                <h3>Lead Pollution</h3>
                <p>Lead exposure causes serious health risks and accumulates in living organisms.</p>
                <div class="problem-facts"><span>Industrial discharge</span><span>Bioaccumulation</span><span>Health risk</span></div>
            </div>
        </article>

        <article class="problem-scene cadmium-scene" data-problem-scene>
            <div class="problem-scene-visual" aria-hidden="true">
                <div class="problem-pie">
                    <span class="pie-slice slice-one"></span>
                    <span class="pie-slice slice-two"></span>
                    <span class="pie-slice slice-three"></span>
                    <div class="pie-core"><img src="/static/assets/images/problem/cadmium-mascot.png" alt=""></div>
                </div>
                <span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span><span class="orbit-dot dot-three"></span>
            </div>
            <div class="problem-scene-copy">
                <span class="problem-step">02 / 03</span>
                <h3>Cadmium Threat</h3>
                <p>Cadmium is toxic even at low concentrations and persists in the environment.</p>
                <div class="problem-facts"><span>Persistent metal</span><span>Soil transfer</span><span>Low-dose toxicity</span></div>
            </div>
        </article>

        <article class="problem-scene water-scene" data-problem-scene>
            <div class="problem-scene-visual" aria-hidden="true">
                <div class="problem-pie">
                    <span class="pie-slice slice-one"></span>
                    <span class="pie-slice slice-two"></span>
                    <span class="pie-slice slice-three"></span>
                    <div class="pie-core"><img src="/static/assets/images/problem/wastewater-mascot.png" alt=""></div>
                </div>
                <span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span><span class="orbit-dot dot-three"></span>
            </div>
            <div class="problem-scene-copy">
                <span class="problem-step">03 / 03</span>
                <h3>Wastewater Challenge</h3>
                <p>Industrial wastewater releases heavy metals that are difficult to remove effectively.</p>
                <div class="problem-facts"><span>Mixed effluent</span><span>Complex treatment</span><span>Cleaner water needed</span></div>
            </div>
        </article>
        </div>
    </div>

    <section id="taiwan-locations" class="taiwan-story" data-intro-fade="true" aria-label="Pollution locations in Taiwan">
        <div class="taiwan-stage">
            <article class="taiwan-scene taiwan-blank-scene" data-taiwan-scene aria-hidden="true">
                <div class="taiwan-map-frame"><img src="/static/assets/images/taiwan-scenes/taiwan-base-map.png" alt=""></div>
            </article>

            <article class="taiwan-scene taoyuan-location" data-taiwan-scene>
                <div class="taiwan-map-frame" aria-hidden="true">
                    <img src="/static/assets/images/taiwan-scenes/taiwan-base-map.png" alt="">
                    <span class="taiwan-pulse"></span>
                </div>
                <div class="taiwan-location-copy">
                    <span class="taiwan-kicker">LOCATION 01 / 03</span>
                    <h3>Taoyuan</h3>
                    <p>Industrial park effluents contribute to Pb and Cd contamination.</p>
                    <span class="location-rule"></span>
                </div>
            </article>

            <article class="taiwan-scene taiwan-blank-scene" data-taiwan-scene aria-hidden="true">
                <div class="taiwan-map-frame"><img src="/static/assets/images/taiwan-scenes/taiwan-base-map.png" alt=""></div>
            </article>

            <article class="taiwan-scene taichung-location" data-taiwan-scene>
                <div class="taiwan-map-frame" aria-hidden="true">
                    <img src="/static/assets/images/taiwan-scenes/taiwan-base-map.png" alt="">
                    <span class="taiwan-pulse"></span>
                </div>
                <div class="taiwan-location-copy">
                    <span class="taiwan-kicker">LOCATION 02 / 03</span>
                    <h3>Taichung</h3>
                    <p>Heavy metal pollution in rivers affects agricultural safety.</p>
                    <span class="location-rule"></span>
                </div>
            </article>

            <article class="taiwan-scene taiwan-blank-scene" data-taiwan-scene aria-hidden="true">
                <div class="taiwan-map-frame"><img src="/static/assets/images/taiwan-scenes/taiwan-base-map.png" alt=""></div>
            </article>

            <article class="taiwan-scene kaohsiung-location" data-taiwan-scene>
                <div class="taiwan-map-frame" aria-hidden="true">
                    <img src="/static/assets/images/taiwan-scenes/taiwan-base-map.png" alt="">
                    <span class="taiwan-pulse"></span>
                </div>
                <div class="taiwan-location-copy">
                    <span class="taiwan-kicker">LOCATION 03 / 03</span>
                    <h3>Kaohsiung</h3>
                    <p>Industrial wastewater and harbor activities increase metal load.</p>
                    <span class="location-rule"></span>
                </div>
            </article>
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
    const progressButton = document.querySelector(".story-progress-button");
    let queued = false;

    function updateSceneGroup(storyElement, sceneElements) {
        if (!storyElement || !sceneElements.length) return;

        const storyRect = storyElement.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const storyProgress = Math.min(1, Math.max(0, -storyRect.top / storyTravel));
        const sceneSpan = 1 / sceneElements.length;
        const preFadeWindow = 0.18;
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

            if (localProgress >= -preFadeWindow && localProgress < 0 && index > 0) {
                strength = ease((localProgress + preFadeWindow) / preFadeWindow);
            } else if (localProgress >= 0 && localProgress <= 1) {
                if (index === 0 && storyElement.dataset.introFade === "true" && localProgress < introWindow) {
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
        const storyProgress = Math.min(1, Math.max(0, -storyRect.top / storyTravel));
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
        const storyProgress = Math.min(1, Math.max(0, -storyRect.top / storyTravel));

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

    function updateStoryMotion() {
        updateSceneGroup(story, scenes);
        updateSceneGroup(taiwanStory, taiwanScenes);
        updateSolutionStory();
        updateHighlightStory();

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

<div class="homepage-card solution-card" aria-labelledby="solution-title">
    <div class="solution-gradient-bridge" aria-hidden="true"></div>
    <div class="solution-story" data-intro-fade="true">
        <div class="solution-stage">
            <article class="solution-scene solution-title-scene" data-solution-scene>
                <span class="solution-eyebrow">FROM DETECTION TO CLEAN WATER</span>
                <h2 id="solution-title">OUR SOLUTION</h2>
            </article>

            <article class="solution-scene solution-step-scene detection-solution" data-solution-scene>
                <div class="solution-icon-wrap"><img src="/static/assets/images/solution/detection.png" alt=""></div>
                <div class="solution-copy"><span class="solution-step">01 / 05</span><h3>Detection</h3><p>Identify Pb²⁺ and Cd²⁺ contamination in wastewater.</p></div>
            </article>

            <article class="solution-scene solution-step-scene capture-solution" data-solution-scene>
                <div class="solution-icon-wrap"><img src="/static/assets/images/solution/capture.png" alt=""></div>
                <div class="solution-copy"><span class="solution-step">02 / 05</span><h3>Capture</h3><p>Engineered proteins selectively bind heavy metal ions.</p></div>
            </article>

            <article class="solution-scene solution-step-scene sequestration-solution" data-solution-scene>
                <div class="solution-icon-wrap"><img src="/static/assets/images/solution/sequestration.png" alt=""></div>
                <div class="solution-copy"><span class="solution-step">03 / 05</span><h3>Sequestration</h3><p>Bound metals are safely retained within biological systems.</p></div>
            </article>

            <article class="solution-scene solution-step-scene removal-solution" data-solution-scene>
                <div class="solution-icon-wrap"><img src="/static/assets/images/solution/removal.png" alt=""></div>
                <div class="solution-copy"><span class="solution-step">04 / 05</span><h3>Removal</h3><p>Heavy metals are removed from wastewater streams.</p></div>
            </article>

            <article class="solution-scene solution-step-scene clean-water-solution" data-solution-scene>
                <div class="solution-icon-wrap"><img src="/static/assets/images/solution/clean-water.png" alt=""></div>
                <div class="solution-copy"><span class="solution-step">05 / 05</span><h3>Clean Water</h3><p>Produce safer water for environmental discharge.</p></div>
            </article>
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
                        <i class="bi bi-flask"></i>
                        <div>
                            <h3>90%</h3>
                            <p>Pb Removal Efficiency</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-beaker"></i>
                        <div>
                            <h3>75%</h3>
                            <p>Cd Removal Efficiency</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-people-fill"></i>
                        <div>
                            <h3>500+</h3>
                            <p>People Reached</p>
                        </div>
                    </div>

                    <div class="highlight-box" data-highlight-card>
                        <i class="bi bi-handshake"></i>
                        <div>
                            <h3>12</h3>
                            <p>Stakeholders Engaged</p>
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

<div class="homepage-card hp-card">
    <h2>HUMAN PRACTICES</h2>
    <div class="hp-layout">
        <div class="hp-image-wrapper">
            <img src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/human-practices2.avif" alt="Human Practices Diagram">
        </div>

        <div class="hp-text">

            <div class="hp-section-block">
                <h3>Listen</h3>
                <p>Understand stakeholder needs.</p>
            </div>

            <div class="hp-section-block">
                <h3>Integrate</h3>
                <p>Refine our design with feedback.</p>
            </div>

            <div class="hp-section-block">
                <h3>Impact</h3>
                <p>Create practical real-world solutions.</p>
            </div>

            <a href="human-practices" class="btn-cycle">
                VIEW MORE ...
            </a>

        </div>
    </div>
</div>

<div class="homepage-card engineering-card">
    <h2>ENGINEERING CYCLE</h2>
    <div class="engineering-content">
        <div class="engineering-image">
            <img src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/engineering-cycle.avif"
                 alt="Engineering Cycle">
        </div>

        <div class="engineering-text">
            <div class="cycle-step">
                <strong>Design</strong>
                <p>Plan our biological solution.</p>
            </div>

            <div class="cycle-step">
                <strong>Build</strong>
                <p>Construct and optimize.</p>
            </div>

            <div class="cycle-step">
                <strong>Test</strong>
                <p>Evaluate system performance.</p>
            </div>

            <div class="cycle-step">
                <strong>Learn</strong>
                <p>Improve through iteration.</p>
            </div>

            <a href="engineering" class="btn-cycle">
                SEE OUR ITERATIONS
            </a>
        </div>
    </div>
</div>

<div class="homepage-card team-card">

<h2>MEET OUR TEAM</h2>

<p>[Insert team photo]</p>

<p>Introduce team members, roles, and areas of expertise.</p>

<p>
<a href="/team">View All Members →</a>
</p>

</div>

</div>

</div>
