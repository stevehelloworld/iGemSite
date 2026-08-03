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
    const hpStory = document.querySelector(".hp-story");
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

    function updateHpStory() {
        if (!hpStory) return;

        const storyRect = hpStory.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const storyProgress = Math.min(1, Math.max(0, -storyRect.top / storyTravel));

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

    function updateStoryMotion() {
        updateSceneGroup(story, scenes);
        updateSceneGroup(taiwanStory, taiwanScenes);
        updateSolutionStory();
        updateHighlightStory();
        updateHpStory();

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
                                    <clipPath id="hp-clip-government-full"><circle cx="626" cy="203" r="197" /><rect x="616" y="385" width="20" height="92" /></clipPath>
                                    <clipPath id="hp-clip-industry-full"><circle cx="207" cy="529" r="197" /><polygon points="384,552 470,584 458,618 370,584" /></clipPath>
                                    <clipPath id="hp-clip-researchers-full"><circle cx="1032" cy="529" r="197" /><polygon points="784,584 870,552 884,584 796,618" /></clipPath>
                                    <clipPath id="hp-clip-public-full"><circle cx="330" cy="1024" r="202" /><polygon points="410,792 508,834 492,872 396,830" /></clipPath>
                                    <clipPath id="hp-clip-wastewater-full"><circle cx="925" cy="1024" r="202" /><polygon points="762,834 844,792 858,830 776,872" /></clipPath>
                                </defs>

                                <g class="hp-layer hp-layer-team" data-hp-center>
                                    <image href="/static/assets/images/hp-reference-diagram.png" width="1254" height="1254" clip-path="url(#hp-clip-team-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram.png" width="1254" height="1254" clip-path="url(#hp-clip-government-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram.png" width="1254" height="1254" clip-path="url(#hp-clip-industry-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram.png" width="1254" height="1254" clip-path="url(#hp-clip-researchers-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram.png" width="1254" height="1254" clip-path="url(#hp-clip-public-full)" />
                                </g>
                                <g class="hp-layer hp-layer-branch" data-hp-branch>
                                    <image href="/static/assets/images/hp-reference-diagram.png" width="1254" height="1254" clip-path="url(#hp-clip-wastewater-full)" />
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
