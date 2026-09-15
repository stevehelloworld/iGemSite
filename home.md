<div class="homepage-grid">

<div class="grid-row">

<section class="homepage-card problem-card" aria-labelledby="problem-title">
    <div class="problem-story" data-intro-fade="true">
        <div class="problem-stage">
        <article class="problem-scene problem-title-scene" data-problem-scene>
            <p class="problem-eyebrow">THE WATER WE LIVE WITH</p>
            <h2 id="problem-title">THE PROBLEM</h2>
            <p>Heavy-metal pollution is not one isolated issue. Scroll through the three connected pressures facing water, ecosystems, and communities.</p>
        </article>

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

    <section id="taiwan-locations" class="taiwan-story" data-intro-fade="true" aria-labelledby="taiwan-title">
        <div class="taiwan-stage">
            <article class="taiwan-scene taiwan-title-scene" data-taiwan-scene>
                <span class="taiwan-eyebrow">FROM NORTH TO SOUTH</span>
                <h2 id="taiwan-title">WHERE WATER IS AT RISK</h2>
                <p>Trace the regions where industrial activity and heavy-metal pollution put water, ecosystems, and communities under pressure.</p>
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
    const progressButton = document.querySelector(".story-progress-button");
    let queued = false;

    function updateSceneGroup(storyElement, sceneElements) {
        if (!storyElement || !sceneElements.length) return;

        const storyRect = storyElement.getBoundingClientRect();
        const storyTravel = Math.max(1, storyRect.height - window.innerHeight);
        const storyProgress = Math.min(1, Math.max(0, -storyRect.top / storyTravel));
        const sceneSpan = 1 / sceneElements.length;
        const activeIndex = Math.min(sceneElements.length - 1, Math.floor(storyProgress / sceneSpan));
        const localProgress = Math.min(1, (storyProgress - activeIndex * sceneSpan) / sceneSpan);

        sceneElements.forEach((scene, index) => {
            let strength = 0;

            if (index === activeIndex) {
                if ((index > 0 || storyElement.dataset.introFade === "true") && localProgress < 0.14) {
                    strength = localProgress / 0.14;
                } else if (index < sceneElements.length - 1 && localProgress > 0.76) {
                    strength = (1 - localProgress) / 0.24;
                } else {
                    strength = 1;
                }
            }

            const opacity = strength * strength * (3 - 2 * strength);
            const offset = (1 - strength) * 64;
            const scale = 0.88 + strength * 0.12;

            scene.style.setProperty("--scene-opacity", opacity.toFixed(3));
            scene.style.setProperty("--scene-offset", offset.toFixed(1) + "px");
            scene.style.setProperty("--scene-scale", scale.toFixed(3));
            scene.classList.toggle("is-visible", strength > 0.08);
        });
    }

    function updateStoryMotion() {
        updateSceneGroup(story, scenes);
        updateSceneGroup(taiwanStory, taiwanScenes);

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

<div class="homepage-card solution-card">

<h2>OUR SOLUTION</h2>

<p>🔍 <strong>Detection</strong><br>
Identify Pb²⁺ and Cd²⁺ contamination in wastewater.</p>

<p>🧲 <strong>Capture</strong><br>
Engineered proteins selectively bind heavy metal ions.</p>

<p>📦 <strong>Sequestration</strong><br>
Bound metals are safely retained within biological systems.</p>

<p>♻️ <strong>Removal</strong><br>
Heavy metals are removed from wastewater streams.</p>

<p>💧 <strong>Clean Water</strong><br>
Produce safer water for environmental discharge.</p>

</div>

<!-- PROJECT HIGHLIGHTS -->
<div class="homepage-card highlight-card">
    <h2>PROJECT HIGHLIGHTS</h2>
    <div class="highlight-grid">
        <div class="highlight-box">
            <i class="bi bi-diagram-3-fill"></i>
            <div>
                <h3>Dual-Function System</h3>
                <p>One engineered E. coli for detection and remediation.</p>
            </div>
        </div>

        <div class="highlight-box">
            <i class="bi bi-broadcast-pin"></i>
            <div>
                <h3>Real-Time Biosensing</h3>
                <p>Responsive detection of Cd²⁺.</p>
            </div>
        </div>

        <div class="highlight-box">
            <i class="bi bi-magnet-fill"></i>
            <div>
                <h3>Metal Sequestration</h3>
                <p>Metallothionein captures toxic heavy metal ions.</p>
            </div>
        </div>

        <div class="highlight-box">
            <i class="bi bi-recycle"></i>
            <div>
                <h3>Sustainable Solution</h3>
                <p>An eco-friendly approach toward cleaner wastewater.</p>
            </div>
        </div>
    </div>

    <div class="future-box">
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
    <div class="engineering-gradient-bridge"></div>
    <div class="engineering-story">
        <div class="engineering-stage">
            <article class="engineering-scene is-visible">
                <h2>ENGINEERING CYCLE</h2>
                <div class="engineering-layout">
                    <div class="engineering-visual">
                        <div class="engineering-image-wrapper">
                            <img src="/static/assets/images/engineering-cycle-reference.png"
                                 alt="Engineering cycle showing Design, Build, Test, and Learn around a central gear">
                        </div>
                    </div>

                    <div class="engineering-text">
                        <div class="cycle-step" style="--line-opacity:1;--line-offset:0px;">
                            <strong>Design</strong>
                            <p>Plan our biological solution.</p>
                        </div>

                        <div class="cycle-step" style="--line-opacity:1;--line-offset:0px;">
                            <strong>Build</strong>
                            <p>Construct and optimize.</p>
                        </div>

                        <div class="cycle-step" style="--line-opacity:1;--line-offset:0px;">
                            <strong>Test</strong>
                            <p>Evaluate system performance.</p>
                        </div>

                        <div class="cycle-step" style="--line-opacity:1;--line-offset:0px;">
                            <strong>Learn</strong>
                            <p>Improve through iteration.</p>
                        </div>

                        <a href="engineering" class="btn-cycle" style="--button-opacity:1;--button-offset:0px;">
                            SEE OUR ITERATIONS
                        </a>
                    </div>
                </div>
            </article>
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
