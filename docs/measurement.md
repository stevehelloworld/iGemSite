<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / MEASUREMENTS</p>
    <h2>Evaluation of bacterial growth and GFP fluorescence</h2>
    <p class="experiment-lead">We measured bacterial growth and GFP fluorescence under different cadmium concentrations to compare the response of pMH45 and the pVIS constructs. These assays describe growth and reporter output; they did not directly measure cadmium binding, removal from solution, or performance in a treatment system.</p>
    <div class="experiment-tag-row" aria-label="Measurement summary"><span>96-well plate assay</span><span>OD<sub>600</sub> and GFP</span><span>Six cadmium concentrations</span><span>35 kinetic cycles</span></div>
  </div>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">What we measured</p><h3>Two readouts, one plate</h3></div>
    <article class="experiment-section-copy">
      <p>We used a 96-well plate-based assay to monitor optical density at 600 nm (OD<sub>600</sub>) and GFP fluorescence over time. OD<sub>600</sub> served as an indicator of bacterial growth, while fluorescence intensity provided a quantitative readout of GFP expression.</p>
      <p>Measurements were performed across six cadmium concentrations, allowing us to compare the responses of different constructs under the same experimental conditions.</p>
    </article>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Step 1</p><h3>Growth medium preparation</h3></div>
    <article class="experiment-section-copy">
      <p>All culture preparation and liquid-handling procedures were carried out in a laminar flow cabinet.</p>
      <p>The growth medium was supplemented with kanamycin and glucose to support the cultivation of plasmid-bearing <em>E. coli</em> and to maintain the experimental conditions used for fluorescence measurements.</p>
      <p>For medium preparation, 350 µL of kanamycin solution and 11.6 mL of glucose solution were added to 350 mL of LB medium. All media were stored at 4 °C.</p>
    </article>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Step 2</p><h3>Bacterial inoculation</h3></div>
    <article class="experiment-section-copy">
      <p>Bacterial cultures were prepared using 96-well plates. Each designated well received 200 µL of growth medium supplemented with kanamycin and glucose.</p>
      <p>Bacterial material was transferred from the corresponding microorganism stock into each designated well using a pipette tip. The plate was then placed in a shaker and incubated overnight to establish the initial bacterial cultures.</p>
    </article>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Step 3</p><h3>EDTA treatment</h3></div>
    <article class="experiment-section-copy">
      <p>Following initial inoculation, bacterial cultures underwent an additional preparation stage involving ethylenediaminetetraacetic acid (EDTA).</p>
      <p>EDTA is a chelating agent capable of binding metal ions. Its inclusion in the preparation stage was intended to reduce interference from residual metal ions in the preculture medium, an approach also employed in the original pMH45 biosensor study.</p>
      <p>EDTA was added to the growth medium at a ratio of 2 µL EDTA solution to 1998 µL medium. Subsequently, 200 µL of the EDTA-supplemented medium was dispensed into each designated well, followed by 1 µL of bacterial culture from the previous inoculation.</p>
      <p>The plate was incubated overnight in a shaker before proceeding to cadmium exposure measurements.</p>
    </article>
  </section>

  <section class="experiment-figure-section" aria-labelledby="cadmium-exposure-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Step 4</p><h3 id="cadmium-exposure-title">Cadmium exposure and experimental plate preparation</h3><p>To characterise the response of the engineered bacteria to cadmium, we prepared a concentration series consisting of 0, 8, 40, 200, 300 and 400 nM Cd<sup>2+</sup>.</p></div>

    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Condition</th><th>Cd<sup>2+</sup> concentration</th></tr></thead><tbody>
      <tr><td>0</td><td>0 nM</td></tr>
      <tr><td>A</td><td>8 nM</td></tr>
      <tr><td>B</td><td>40 nM</td></tr>
      <tr><td>C</td><td>200 nM</td></tr>
      <tr><td>D</td><td>300 nM</td></tr>
      <tr><td>E</td><td>400 nM</td></tr>
    </tbody></table></div>

    <p>For each experimental condition, the preparation mixture consisted of 700 µL growth medium, 7 µL of the corresponding stock solution (0.8 µM, 4 µM, 20 µM, 30 µM and 40 µM) and 3.5 µL bacterial culture.</p>
    <p>After mixing, 200 µL of the prepared solution was transferred into its designated well in the 96-well plate.</p>
    <p>Positive and negative controls were prepared separately by adding 1 µL of the corresponding bacterial culture to 200 µL of growth medium without added cadmium.</p>
    <p>When necessary, 200 µL of water was added to peripheral wells to reduce evaporation during incubation. The plate was sealed with Parafilm before being put into the microplate reader.</p>
  </section>

  <section class="experiment-figure-section" aria-labelledby="plate-reader-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Step 5</p><h3 id="plate-reader-title">Microplate reader measurements</h3><p>Bacterial growth and GFP fluorescence were monitored using a microplate reader at a constant temperature of 37 °C. The measurement program consisted of 35 kinetic cycles, incorporating orbital shaking, absorbance measurements and fluorescence measurements.</p></div>

    <h4>Optical density (OD<sub>600</sub>)</h4>
    <p>Bacterial growth was monitored by measuring absorbance at 600 nm. The OD<sub>600</sub> measurement parameters were configured as follows:</p>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Parameter</th><th>Setting</th></tr></thead><tbody>
      <tr><td>Wavelength</td><td>600 nm</td></tr>
      <tr><td>Measurement pattern</td><td>X-Line</td></tr>
      <tr><td>Multiple reads per well</td><td>3 &times; 3</td></tr>
      <tr><td>Border distance</td><td>500 µm</td></tr>
      <tr><td>Number of flashes</td><td>25</td></tr>
      <tr><td>Output label</td><td>OD600</td></tr>
    </tbody></table></div>
    <p>Changes in OD<sub>600</sub> over time were recorded to characterise bacterial growth under each cadmium concentration.</p>

    <h4>GFP fluorescence intensity</h4>
    <p>GFP fluorescence was recorded to monitor the response of the cadmium-inducible biosensor system. The fluorescence measurement settings were:</p>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Parameter</th><th>Setting</th></tr></thead><tbody>
      <tr><td>Excitation wavelength</td><td>488 nm</td></tr>
      <tr><td>Emission wavelength</td><td>528 nm</td></tr>
      <tr><td>Measurement mode</td><td>Top</td></tr>
      <tr><td>Z-position</td><td>20,000 µm (manual)</td></tr>
      <tr><td>Measurement pattern</td><td>X-Line</td></tr>
      <tr><td>Multiple reads per well</td><td>2 &times; 2</td></tr>
      <tr><td>Border distance</td><td>500 µm</td></tr>
      <tr><td>Number of flashes</td><td>5</td></tr>
      <tr><td>Gain</td><td>70 (manual)</td></tr>
      <tr><td>Lag time</td><td>0</td></tr>
      <tr><td>Integration time</td><td>40 µs</td></tr>
      <tr><td>Output label</td><td>GFP</td></tr>
    </tbody></table></div>
    <p>Fluorescence measurements were collected throughout the kinetic measurement program to track changes in GFP expression over time.</p>

    <h4>Shaking and incubation conditions</h4>
    <p>Orbital shaking was incorporated into the measurement program to maintain suspension and mixing of bacterial cultures.</p>
    <p>The initial shaking step was configured for 15 seconds, followed by the OD<sub>600</sub> and GFP measurements. A subsequent shaking step lasted 835 seconds. Both shaking steps used an orbital amplitude of 1 mm and a frequency of 87.6 rpm. The entire measurement program was repeated for 35 kinetic cycles at 37 °C.</p>
  </section>

  <section class="experiment-figure-section" aria-labelledby="data-processing-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Step 6</p><h3 id="data-processing-title">Data processing and normalisation</h3><p>To ensure consistent comparisons of bacterial growth and GFP fluorescence across different experimental conditions, we processed the raw microplate reader measurements before conducting further analysis. Our data processing consisted of two main stages: baseline correction of kinetic measurements, and normalisation across experiments using positive and negative controls.</p></div>

    <h4>Baseline correction of growth and GFP fluorescence</h4>
    <p>The microplate reader recorded OD<sub>600</sub> and fluorescence intensity over 35 kinetic cycles. To account for differences in the initial measurement baselines, we applied baseline correction separately to the growth and fluorescence datasets.</p>
    <p>For each measurement series, we identified the lowest recorded value among the 35 kinetic cycles. This minimum value is then subtracted from every measurement within the corresponding series. The baseline correction was performed using the following equation:</p>
    <div class="formula-block"><p><em>X</em><sub>corrected,&thinsp;<em>t</em></sub> = <em>X</em><sub><em>t</em></sub> &minus; min(<em>X</em><sub>1</sub>, &hellip;, <em>X</em><sub>35</sub>)</p></div>

    <h4>Normalisation across experimental runs</h4>
    <p>Because some microplate reader experiments were conducted at different times, direct comparisons between datasets could be influenced by confounding factors. To improve comparability across experimental runs, we used the positive and negative control measurements as reference points for normalisation.</p>
    <p>These control measurements served as common references between experimental datasets, allowing us to adjust the measurements relative to the corresponding control values. The normalisation was performed using the following equation:</p>
    <div class="formula-block"><p><em>Y</em><sub>normal</sub> = <em>Y</em><sub>target,&thinsp;negative</sub> + <span class="formula-fraction"><span class="formula-numerator"><em>Y</em> &minus; <em>Y</em><sub>source,&thinsp;negative</sub></span><span class="formula-denominator"><em>Y</em><sub>source,&thinsp;positive</sub> &minus; <em>Y</em><sub>source,&thinsp;negative</sub></span></span> &middot; (<em>Y</em><sub>target,&thinsp;positive</sub> &minus; <em>Y</em><sub>target,&thinsp;negative</sub>)</p></div>
    <p>Here <em>Y</em> denotes the original experimental measurement from the source dataset. <em>Y</em><sub>source,&thinsp;positive</sub> and <em>Y</em><sub>source,&thinsp;negative</sub> represent the positive and negative control values respectively, corresponding to pYC08 and pTK03. <em>Y</em><sub>target,&thinsp;positive</sub> and <em>Y</em><sub>target,&thinsp;negative</sub> represent the corresponding positive and negative values from the reference dataset to which the source dataset is being normalised. The resulting <em>Y</em><sub>normal</sub> is the normalised value expressed on the scale of the reference dataset.</p>
    <p>This normalisation approach was intended to reduce differences in measurement scales across experimental runs and facilitate comparisons between the engineered plasmids.</p>

    <h4>Data visualisation and statistics</h4>
    <p>Following baseline correction and control-based normalisation, the processed datasets were used to generate growth and GFP fluorescence graphs.</p>
    <p>The resulting measurements provided a basis for comparing the performance of different metallothionein constructs across cadmium concentrations and experimental conditions. These processed data were subsequently analysed in the <a href="results">Results</a> section to evaluate bacterial growth and cadmium-responsive fluorescence performance.</p>

    <div class="experiment-note-card"><p class="mb-0">The pMH45 cadmium-responsive sensor was developed in prior work by He et al. (2021). The procedures described here are the VIS team&rsquo;s documented plate-reader workflow.</p></div>
  </section>
</section>
