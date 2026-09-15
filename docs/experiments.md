<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / EXPERIMENTS</p>
    <h2>Construction of four metallothionein plasmids</h2>
    <p class="experiment-lead">Our wet-lab work follows four MT variants through plasmid extraction, inverse PCR, insert amplification, restriction digestion, ligation, electroporation, colony PCR, and sequencing preparation. This page reflects the procedures and outcomes documented from June 23 to July 21, 2026.</p>
    <div class="experiment-tag-row" aria-label="Experimental workflow"><span>DNA extraction</span><span>Inverse PCR</span><span>XbaI / SalI digestion</span><span>T4 ligation</span><span>Colony PCR</span></div>
  </div>

  <aside class="experiment-progress-rail" aria-label="Experiments page progress">
    <button class="experiment-progress-icon" type="button" aria-label="Back to top"><i class="bi bi-flask"></i></button>
    <div class="experiment-progress-track" aria-hidden="true"><span class="experiment-progress-fill"></span><span class="experiment-progress-thumb"></span></div>
    <div class="experiment-progress-current">Overview</div>
  </aside>

  <section class="experiment-flow-panel" aria-labelledby="experiment-flow-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Workflow</p><h3 id="experiment-flow-title">From template plasmid to screened colonies</h3><p>The same workflow was applied across MT1, MT2, MT3, and MT4, with repeated ligation and colony-PCR rounds when screening did not produce a usable result.</p></div>
    <div class="experiment-flow-diagram">
      <div class="experiment-flow-node"><span>1</span><h4>Prepare</h4><p>Extract plasmid MH45 from <em>E. coli</em> Ek317 and linearize it by inverse Phusion PCR.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>2</span><h4>Amplify</h4><p>Amplify MT1–MT4 using primer 3 paired with primers 4–7.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>3</span><h4>Digest</h4><p>Digest vector and inserts with XbaI and SalI to produce compatible ends.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>4</span><h4>Transform</h4><p>Ligate at a 3:1 insert-to-vector molar ratio and electroporate competent cells.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node experiment-flow-node-iterate"><span>5</span><h4>Screen</h4><p>Pick colonies, run colony PCR, troubleshoot, and prepare selected colonies for sequencing.</p></div>
    </div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="construct-table-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Construct set</p><h3 id="construct-table-title">Primer combinations used for MT amplification</h3></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Variant</th><th>Primer pair</th><th>Annealing temperature</th><th>Initial ligation status</th></tr></thead><tbody>
      <tr><td>MT1</td><td>Primer 3 + Primer 4</td><td>59.8 °C</td><td>Ligated June 29</td></tr>
      <tr><td>MT2</td><td>Primer 3 + Primer 5</td><td>60.8 °C</td><td>Deferred and repeated</td></tr>
      <tr><td>MT3</td><td>Primer 3 + Primer 6</td><td>60.8 °C</td><td>Ligated June 29</td></tr>
      <tr><td>MT4</td><td>Primer 3 + Primer 7</td><td>60.8 °C</td><td>Ligated June 29</td></tr>
    </tbody></table></div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Core protocol 01</p><h3>Plasmid extraction and inverse PCR</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>Plasmid MH45 was extracted from a 1–5 ml overnight culture of <em>E. coli</em> Ek317 with a QIA Spin MiniPrep workflow. Cells were pelleted at 9,000 rpm for 10 minutes at 25 °C, lysed with P1/P2/N3 buffers, clarified at 13,000 rpm, washed with PB and PE, dried, heated at 55 °C, and eluted in 30 µl ddH<sub>2</sub>O.</p>
      <p>The vector was linearized by inverse Phusion PCR using VISP1 and VISP2. The 30-cycle program was 98 °C for 10 seconds, 61 °C for 20 seconds, and 72 °C for 1 minute 45 seconds, followed by a 3-minute final extension at 72 °C.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Inverse PCR purpose</span><small>Amplify outward across the plasmid to create a linear vector and add restriction sites</small></div></div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Core protocol 02</p><h3>Cleanup, digestion, and ligation</h3></div>
    <div class="experiment-section-layout"><div class="experiment-figure-slot experiment-figure-slot-wide"><span>XbaI + SalI</span><small>Vector and PCR products were double-digested for 2 hours at 37 °C</small></div><article class="experiment-section-copy">
      <p>PCR products were purified with a Zymo spin column. The linearized vector was treated with DpnI for 2 hours at 37 °C to remove methylated parental plasmid.</p>
      <p>Each XbaI/SalI digestion contained 16 µl DNA fragment, 2 µl 10× FD Green Buffer, 1 µl XbaI, and 1 µl SalI. Ligation used 100 ng vector, insert at a 3:1 molar ratio, T4 DNA ligase buffer, T4 DNA ligase, and ddH<sub>2</sub>O to 20 µl.</p>
    </article></div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Core protocol 03</p><h3>Electroporation and selection</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>Electrocompetent cells were prepared from <em>E. coli</em> Ek317 grown in SOB to approximately OD<sub>600</sub> 0.6. Chilled cells were repeatedly washed, concentrated, and held on ice. Later preparations used 10% glycerol, liquid-nitrogen freezing, and −80 °C storage.</p>
      <p>For transformation, 4 µl ligation product was combined with 40 µl competent cells in a 1 mm cuvette. Recorded pulse settings were 1,800 V, 25 µF, and 200 Ω. Cells recovered in 800 µl warm SOC at 37 °C and 225 rpm for one hour before plating on LB + kanamycin.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Selection workflow</span><small>Undiluted and 10<sup>−1</sup> samples were plated on kanamycin agar</small></div></div>
  </section>

  <section class="experiment-log-panel">
    <div class="experiment-flow-header experiment-log-header"><p class="experiment-card-kicker">Outcome</p><h3>Troubleshooting guided the next iteration</h3><p>Colony PCR did not consistently yield visible products. The team recorded the failures and revised the workflow.</p></div>
    <div class="experiment-log-grid">
      <details class="experiment-log-entry" open><summary><span class="experiment-log-date">July 9–16</span><strong>Repeated colony-PCR screening</strong></summary><p>MT2, MT3, and MT4 were screened across several rounds. MT1 controls succeeded on July 14, while MT2 failed and no result was observed for the MT3 and MT4 screens.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">Root cause</span><strong>Template preparation</strong></summary><p>The July 13 review identified excessive biomass transfer during colony template preparation as one likely source of poor amplification.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 20</span><strong>Ligation repeated</strong></summary><p>MT2, MT3, and MT4 ligations were repeated. The team also noted that GC-buffer and HF-buffer plasmid preparations could have different concentrations, invalidating an earlier volume assumption.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 21</span><strong>Sequencing preparation</strong></summary><p>Following another transformation, colonies PV1S1 #2, #9, and #15 were selected and plated for sequencing preparation.</p></details>
    </div>
  </section>
</section>
