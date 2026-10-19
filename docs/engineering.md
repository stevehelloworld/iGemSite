<section class="experiment-page engineering-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">PROJECT / ENGINEERING</p>
    <h2>Design, build, test, and learn</h2>
    <p class="experiment-lead">We engineered two configurations of four metallothionein candidates on a cadmium-responsive GFP sensor and compared their growth and fluorescence. The cycle produced measurable design differences, while also exposing what these readouts cannot establish about cadmium binding.</p>
    <div class="experiment-tag-row"><span>Design</span><span>Build</span><span>Test</span><span>Learn</span></div>
  </div>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Design</p><h3>Compare surface-display and anchor-deleted designs</h3></div>
    <div class="experiment-section-copy">
      <p>We started from pMH45, a cadmium-responsive GFP sensor. Four candidate MT sequences were added with the Lpp-OmpA surface-display anchor to create pVIS1&ndash;4. We then removed the anchor from each corresponding construct to create pVIS5&ndash;8, retaining the MT coding sequence. These latter constructs were intended to test an intracellular configuration; the cellular location of the MT was not directly measured.</p>
      <p>The pairings recorded in the build notes are pVIS1/pVIS5 (IaMT2), pVIS2/pVIS6 (SmtA), pVIS3/pVIS7 (EGR_09832), and pVIS4/pVIS8 (OsMTI-1b). See <a href="parts">Parts</a> for the construct map and literature rationale.</p>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Build</p><h3>Iterate through cloning and sequence checks</h3></div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide"><span>Build record</span><small>Assembly, screening, and sequence confirmation are recorded in the notebook</small></div>
      <article class="experiment-section-copy">
        <p>The build workflow used inverse PCR, insert amplification, restriction digestion, ligation, transformation, colony screening, and sequencing. Early colony-PCR and ligation problems led the team to revise template preparation, re-quantify cleaned DNA before ligation, and repeat selected assemblies.</p>
        <p>The notebook records correct sequence results for pVIS5, pVIS6, and pVIS7 clones on September 14. After earlier pVIS8 clones showed a deletion after the RBS, pVIS8-11 was later recorded as having the correct sequence and was selected for plate-reader testing. The dated records are linked from <a href="notebook">Notebook</a>.</p>
      </article>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Test</p><h3>Measure growth and reporter output</h3></div>
    <div class="experiment-section-copy">
      <p>We tested the constructs at 0, 8, 40, 200, 300, and 400 nM Cd<sup>2+</sup> in 96-well plate assays, measuring OD<sub>600</sub> and GFP over time. The MT constructs changed the GFP output relative to pMH45, and pVIS3 and pVIS7 showed notable growth impairment under parts of the tested range.</p>
      <p>The assays did not directly quantify cadmium in cells or spent medium, verify surface display, or include a cadmium-independent expression reporter. A lower GFP/OD<sub>600</sub> therefore cannot by itself be interpreted as more cadmium captured.</p>
      <p>See the complete measurements, plots, and analysis on <a href="results">Results</a> and <a href="measurement">Measurements</a>.</p>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Learn</p><h3>Make the next iteration answer the mechanism</h3></div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide"><span>Next tests</span><small>Direct cadmium measurement, localization, and a constitutive reporter</small></div>
      <article class="experiment-section-copy">
        <ul>
          <li>Measure cadmium in washed cell pellets and spent medium by ICP-MS or atomic absorption.</li>
          <li>Verify surface display and compare it with the anchor-deleted constructs.</li>
          <li>Add a cadmium-independent reporter to distinguish changes in sensor response from changes in overall expression or cell physiology.</li>
          <li>Run the strongest candidates side by side on one plate with matched controls.</li>
        </ul>
        <p>These are proposed follow-up experiments. They have not been completed in the results reported here.</p>
      </article>
    </div>
  </section>
</section>
