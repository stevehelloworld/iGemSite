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
                <img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/problem/pollution-path-panorama-optimized.webp?v=20261013-pb2" alt="A colored-pencil panorama illustrating cadmium moving from industrial wastewater through a river and rice fields to a nearby community">
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
                <p>Compare water risks in Taiwan with five documented cadmium pollution cases around the world.</p>
            </header>

            <div class="map-view-switch" role="group" aria-label="Choose map view">
                <button class="map-view-button is-active" type="button" data-map-view-button="taiwan" aria-controls="map-view-taiwan" aria-pressed="true">Taiwan</button>
                <button class="map-view-button" type="button" data-map-view-button="world" aria-controls="map-view-world" aria-pressed="false">World</button>
            </div>

            <div id="map-view-taiwan" class="map-view-panel" data-map-view-panel="taiwan">
                <div class="map-composition-v2">
                    <figure class="persistent-map-v2">
                        <img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/taiwan-scenes/taiwan-base-map-flat.avif" alt="Hand-drawn physical map of Taiwan">
                        <button class="map-pin-v2 pin-taoyuan is-active" type="button" data-map-pin="0" aria-label="Show Taoyuan" aria-pressed="true"><span></span></button>
                        <button class="map-pin-v2 pin-taichung" type="button" data-map-pin="1" aria-label="Show Taichung" aria-pressed="false"><span></span></button>
                        <button class="map-pin-v2 pin-kaohsiung" type="button" data-map-pin="2" aria-label="Show Kaohsiung" aria-pressed="false"><span></span></button>
                        <svg class="map-route-v2" viewBox="0 0 100 150" aria-hidden="true"><path d="M59 22 C52 39 50 50 46 62 S38 94 30 111"/></svg>
                    </figure>

                    <div class="location-window-v2">
                        <img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/taiwan-scenes/taiwan-city-vignettes-optimized.webp?v=20261013-pb2" alt="Three colored-pencil scenes showing industrial river discharge, agricultural irrigation, and harbor pollution in Taiwan">
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
                    <div class="world-map-image-v2">
                        <img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/world-cadmium-map.avif" alt="Hand-painted physical world map with five numbered markers for documented cadmium pollution cases">
                        <a class="world-map-marker-v2" style="--marker-x:18.7%;--marker-y:24.5%" href="#case-clark-fork" aria-label="Read case 1: Clark Fork River, Montana"><span>1</span></a>
                        <a class="world-map-marker-v2" style="--marker-x:51.5%;--marker-y:21.5%" href="#case-campine" aria-label="Read case 2: Campine region, Belgium and the Netherlands"><span>2</span></a>
                        <a class="world-map-marker-v2" style="--marker-x:88.1%;--marker-y:29.6%" href="#case-jinzu" aria-label="Read case 3: Jinzu River basin, Japan"><span>3</span></a>
                        <a class="world-map-marker-v2" style="--marker-x:77.4%;--marker-y:40.7%" href="#case-mae-sot" aria-label="Read case 4: Mae Sot, Thailand"><span>4</span></a>
                        <a class="world-map-marker-v2" style="--marker-x:80%;--marker-y:36.3%" href="#case-longjiang" aria-label="Read case 5: Longjiang River, China"><span>5</span></a>
                    </div>
                    <figcaption>Hand-painted physical map · numbered locations are approximate and match the cadmium case cards below.</figcaption>
                </figure>

                <div class="world-map-cases-v2">
                    <article class="water-history-v2" id="case-clark-fork" aria-labelledby="clark-fork-title">
                        <div class="water-history-date">
                            <span>CASE 01</span>
                            <strong>1880s–1970s</strong>
                            <small>Clark Fork River, USA</small>
                        </div>
                        <div class="water-history-copy">
                            <h3 id="clark-fork-title">Mining waste entered the river</h3>
                            <p>More than a century of mining and ore processing left cadmium in the Clark Fork system. The U.S. EPA lists cadmium among the site&rsquo;s main contaminants.</p>
                            <a href="https://semspub.epa.gov/work/02/206595.pdf" target="_blank" rel="noopener noreferrer">Read the U.S. EPA site fact sheet</a>
                        </div>
                    </article>

                    <article class="water-history-v2" id="case-campine" aria-labelledby="campine-title">
                        <div class="water-history-date">
                            <span>CASE 02</span>
                            <strong>Late 1800s–1970s</strong>
                            <small>Campine, Belgium &amp; Netherlands</small>
                        </div>
                        <div class="water-history-copy">
                            <h3 id="campine-title">Smelter emissions spread cadmium</h3>
                            <p>Zinc smelters emitted cadmium across the Campine region. A European Commission review describes diffuse contamination over about 350 km&sup2;.</p>
                            <a href="https://publications.jrc.ec.europa.eu/repository/bitstream/JRC53315/publication_scr_belgium_final.pdf" target="_blank" rel="noopener noreferrer">Read the European Commission review</a>
                        </div>
                    </article>

                    <article class="water-history-v2" id="case-jinzu" aria-labelledby="jinzu-title">
                        <div class="water-history-date">
                            <span>CASE 03</span>
                            <strong>1955 / 1968</strong>
                            <small>Jinzu River basin, Japan</small>
                        </div>
                        <div class="water-history-copy">
                            <h3 id="jinzu-title">Itai-itai disease linked to cadmium</h3>
                            <p>The disease was reported in 1955. In 1968, Japan&rsquo;s government identified chronic cadmium poisoning in the Jinzu River basin.</p>
                            <a href="https://www.env.go.jp/en/wpaper/1995/eae240000000065.html" target="_blank" rel="noopener noreferrer">Read Japan&rsquo;s Ministry of the Environment history</a>
                        </div>
                    </article>

                    <article class="water-history-v2" id="case-mae-sot" aria-labelledby="mae-sot-title">
                        <div class="water-history-date">
                            <span>CASE 04</span>
                            <strong>2000–2004</strong>
                            <small>Mae Sot, Thailand</small>
                        </div>
                        <div class="water-history-copy">
                            <h3 id="mae-sot-title">Cadmium reached irrigated rice fields</h3>
                            <p>Creeks near a zinc mine supplied irrigation to rice fields. Surveys from 2000 to 2004 found cadmium above the permitted level in over 90% of sampled rice grain.</p>
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4555274/" target="_blank" rel="noopener noreferrer">Read the Mae Sot exposure study</a>
                        </div>
                    </article>

                    <article class="water-history-v2" id="case-longjiang" aria-labelledby="longjiang-title">
                        <div class="water-history-date">
                            <span>CASE 05</span>
                            <strong>2012</strong>
                            <small>Longjiang River, China</small>
                        </div>
                        <div class="water-history-copy">
                            <h3 id="longjiang-title">Emergency response to river contamination</h3>
                            <p>After dead fish were found, water tests showed cadmium above the national limit. The response aimed to lower river levels and protect the downstream water supply.</p>
                            <a href="https://english.mee.gov.cn/News_service/media_news/201201/t20120131_222997.shtml" target="_blank" rel="noopener noreferrer">Read the report hosted by China&rsquo;s environment ministry</a>
                        </div>
                    </article>
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
                <p class="story-chapter-name">WHAT WE BUILT AND WHAT COMES NEXT</p>
                <h2 id="solution-title">OUR DESIGN GOAL</h2>
                <p>Only steps 1 and 2 were implemented this season: we measured GFP response and built and compared MT candidate constructs. Direct Cd binding was not measured. Steps 3–5 are future goals; this five-step pathway has not been demonstrated as a treatment process.</p>
            </header>

            <figure class="treatment-panorama-v2">
                <img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/solution/bioremediation-process-panorama-optimized.webp?v=20261013-pb2" alt="An illustration of a proposed cadmium treatment pathway using engineered bacteria, containment, and metal recovery">
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
                        src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/vis-logo-heart.avif"
                        class="future-image"
                        alt="VIS heart logo">
                </div>
            </article>
        </div>
    </div>
</div>
</div>

</div>
