<section class="experiment-page engineering-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">PROJECT / ENGINEERING</p>
    <h2>Design, build, test, and learn</h2>
    <p class="experiment-lead">We completed two design iterations around a cadmium-responsive GFP sensor: first adding four metallothionein candidates with an Lpp–OmpA anchor, then making paired anchor-deleted constructs. Growth and fluorescence helped us refine the next questions, but did not directly measure cadmium capture or establish where each protein localized.</p>
    <div class="experiment-tag-row"><span>Design</span><span>Build</span><span>Test</span><span>Learn</span></div>
  </div>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Design</p><h3>Build paired designs to investigate the role of the anchor</h3></div>
    <div class="experiment-section-copy">
      <p>We started from pMH45, a cadmium-responsive GFP sensor. In the first design iteration, four candidate metallothionein (MT) sequences were paired with the Lpp&ndash;OmpA anchor to create pVIS1&ndash;4. For the second iteration, we removed that anchor while retaining the corresponding MT coding sequence, creating pVIS5&ndash;8. The anchor-deleted designs were intended to change protein localization, but localization was not directly measured.</p>
      <p>The recorded pairs are pVIS1/pVIS5 (IaMT2), pVIS2/pVIS6 (SmtA), pVIS3/pVIS7 (EGR_09832), and pVIS4/pVIS8 (OsMTI-1b). See <a href="parts">Parts</a> for construct maps and the literature rationale.</p>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Build</p><h3>Iterate through cloning and sequence checks</h3></div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide"><span>Build record</span><small>Assembly, screening, and sequence confirmation are recorded in the notebook</small></div>
      <article class="experiment-section-copy">
        <p>The build workflow used inverse PCR, insert amplification, restriction digestion, ligation, transformation, colony screening, and sequencing. Early colony-PCR and ligation problems led the team to revise template preparation, re-quantify cleaned DNA before ligation, and repeat selected assemblies.</p>
        <p>The notebook records sequence checks for pVIS5, pVIS6, and pVIS7 clones on September 14. After earlier pVIS8 clones showed a deletion after the RBS, pVIS8-11 was later recorded as having the expected sequence and selected for plate-reader testing. The complete clone-to-assay mapping is not yet linked to all measurement records. See the dated entries in the <a href="notebook">Notebook</a>.</p>
      </article>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Test</p><h3>Measure growth and reporter output</h3></div>
    <div class="experiment-section-copy">
      <p>Across several 96-well plate-reader runs, we measured OD<sub>600</sub> and instrument-scaled GFP fluorescence over time. The first four dose-mapped runs used nominal added Cd<sup>2+</sup> levels of 0, 8, 40, 200, 300, and 400 nM, with different construct subsets in different runs. A later run has condition codes without a verified concentration key, so it is not included in numeric dose-response fits.</p>
      <p>Fluorescence and growth differed among constructs and conditions; pVIS3 and pVIS7 showed growth impairment in parts of the measured range. The assays did not directly quantify cadmium in cell pellets or spent medium, verify protein localization, or include a cadmium-independent expression reporter. A lower GFP signal therefore cannot by itself be interpreted as more cadmium captured.</p>
      <p>See the five-run analysis on <a href="model">Model</a>, and the measurements and plots on <a href="results">Results</a> and <a href="measurement">Measurements</a>.</p>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Learn</p><h3>Use the fluorescence differences to define the next tests</h3></div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide"><span>Next tests</span><small>Direct cadmium measurement, localization, and a constitutive reporter</small></div>
      <article class="experiment-section-copy">
        <ul>
          <li>Measure cadmium in washed cell pellets and spent medium by ICP-MS or atomic absorption, with defined sample fractions and suitable controls.</li>
          <li>Verify localization for the sequence-confirmed constructs before comparing anchored and anchor-deleted designs.</li>
          <li>Add a cadmium-independent reporter to distinguish changes in sensor response from changes in overall expression or cell physiology.</li>
          <li>Run selected paired constructs side by side with matched cultures, controls, and a predefined readout time.</li>
        </ul>
        <p>The first cycle's lower fluorescence raised the question of whether the MT design affected the sensor response. The second cycle changed the anchor as a design comparison; it did not establish intracellular sequestration. The tests above are proposed follow-up work and have not been completed in the results reported here.</p>
      </article>
    </div>
  </section>
</section>
