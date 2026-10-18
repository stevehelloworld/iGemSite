<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / EXPERIMENTS</p>
    <h2>Construction of four metallothionein plasmids</h2>
    <p class="experiment-lead">Our wet-lab work follows four MT variants through plasmid extraction, inverse PCR, insert amplification, restriction digestion, ligation, electroporation, colony PCR, and sequencing preparation. This page reflects the procedures documented from June 23 to August 4, 2026, together with the cadmium dose-response assays run that September.</p>
    <div class="experiment-tag-row" aria-label="Experimental workflow"><span>DNA extraction</span><span>Inverse PCR</span><span>XbaI / SalI digestion</span><span>T4 ligation</span><span>Colony PCR</span></div>
  </div>

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

  <section class="experiment-figure-section" aria-labelledby="protocol-sequence-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Build sequence</p><h3 id="protocol-sequence-title">Procedure for each plasmid generation</h3><p>The constructs were built in three rounds, each reusing the same cloning cycle. pVIS1 is assembled on the pMH45 backbone, pVIS2–4 are assembled on pVIS1, and pVIS5–8 are derived from the first four plasmids by amplifying around the lpp-OmpA anchor so that it is left out.</p></div>
    <div class="experiment-grid protocol-grid">
      <article class="protocol-card">
        <div class="protocol-card-head"><h4>pVIS1</h4><p>From the pMH45 template</p></div>
        <ol>
          <li>Extract pMH45 plasmid</li>
          <li>Inverse Phusion PCR for pMH45 plasmid</li>
          <li>DpnI digestion</li>
          <li>Phusion PCR for MT1 constructs</li>
          <li>Restriction enzyme digestion</li>
          <li>Ligation</li>
          <li>Transformation via electroporation</li>
          <li>Plating</li>
          <li>Colony PCR</li>
          <li>Send sequence</li>
        </ol>
      </article>
      <article class="protocol-card">
        <div class="protocol-card-head"><h4>pVIS2, 3, 4</h4><p>From the pVIS1 template</p></div>
        <ol>
          <li>Extract pVIS1 plasmid</li>
          <li>Inverse Phusion PCR for pVIS1 plasmid</li>
          <li>DpnI digestion for pVIS1 plasmid</li>
          <li>Phusion PCR for MT2, 3, 4 construct</li>
          <li>Restriction enzyme digestion</li>
          <li>Ligation</li>
          <li>Transformation via electroporation</li>
          <li>Plating</li>
          <li>Colony PCR</li>
          <li>Send sequence</li>
        </ol>
      </article>
      <article class="protocol-card">
        <div class="protocol-card-head"><h4>pVIS5–8</h4><p>From the four finished plasmids, without lpp-OmpA</p></div>
        <ol>
          <li>Extract pVIS1, 2, 3, 4 plasmid
            <ol class="protocol-substeps">
              <li>pVIS1 #2</li>
              <li>pVIS2 #8</li>
              <li>pVIS3 #6</li>
              <li>pVIS4 #1</li>
            </ol>
          </li>
          <li>Phusion PCR for the 4 plasmids
            <ol class="protocol-substeps">
              <li>Excluding lpp-OmpA for all 4 strains</li>
            </ol>
          </li>
          <li>DpnI digestion</li>
          <li>Ligation</li>
          <li>Transformation via electroporation</li>
          <li>Plating</li>
          <li>Colony PCR</li>
          <li>Send sequence</li>
        </ol>
      </article>
    </div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="construct-table-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Construct set</p><h3 id="construct-table-title">Primer combinations used for MT amplification</h3></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Variant</th><th>Gene</th><th>Primer pair</th><th>Annealing temperature</th><th>Initial ligation status</th></tr></thead><tbody>
      <tr><td>MT1</td><td>IaMT2</td><td>Primer 3 + Primer 4</td><td>59.8 °C</td><td>Ligated June 29</td></tr>
      <tr><td>MT2</td><td>SmtA</td><td>Primer 3 + Primer 5</td><td>60.8 °C</td><td>Deferred and repeated</td></tr>
      <tr><td>MT3</td><td>EGR_09832</td><td>Primer 3 + Primer 6</td><td>60.8 °C</td><td>Ligated June 29</td></tr>
      <tr><td>MT4</td><td>OsMTI-1b</td><td>Primer 3 + Primer 7</td><td>60.8 °C</td><td>Ligated June 29</td></tr>
    </tbody></table></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="mt-structure-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Predicted structures</p><h3 id="mt-structure-title">AlphaFold predictions of the four MT constructs</h3><p>Each panel pairs the predicted 3D model (left) with its Predicted Aligned Error plot (right). A tight green diagonal means the model is confident about how each part of the sequence sits relative to the rest. Expand any card for four more rotations of the same prediction.</p></div>
    <div class="experiment-grid mt-structure-grid">
      <figure class="mt-structure-card">
        <img src="static/assets/images/mt-structures/mt1-iamt2/view-1.webp" alt="Predicted 3D model of the MT1 (IaMT2) construct beside its predicted aligned error plot" loading="lazy">
        <figcaption><strong>MT1 · IaMT2</strong><span>Primer 3 + Primer 4</span></figcaption>
        <details class="mt-structure-more"><summary>More views</summary><div class="mt-structure-views">
          <img src="static/assets/images/mt-structures/mt1-iamt2/view-2.webp" alt="MT1 (IaMT2) prediction, rotation 2" loading="lazy">
          <img src="static/assets/images/mt-structures/mt1-iamt2/view-3.webp" alt="MT1 (IaMT2) prediction, rotation 3" loading="lazy">
          <img src="static/assets/images/mt-structures/mt1-iamt2/view-4.webp" alt="MT1 (IaMT2) prediction, rotation 4" loading="lazy">
          <img src="static/assets/images/mt-structures/mt1-iamt2/view-5.webp" alt="MT1 (IaMT2) prediction, rotation 5" loading="lazy">
        </div></details>
      </figure>
      <figure class="mt-structure-card">
        <img src="static/assets/images/mt-structures/mt2-smta/view-1.webp" alt="Predicted 3D model of the MT2 (SmtA) construct beside its predicted aligned error plot" loading="lazy">
        <figcaption><strong>MT2 · SmtA</strong><span>Primer 3 + Primer 5</span></figcaption>
        <details class="mt-structure-more"><summary>More views</summary><div class="mt-structure-views">
          <img src="static/assets/images/mt-structures/mt2-smta/view-2.webp" alt="MT2 (SmtA) prediction, rotation 2" loading="lazy">
          <img src="static/assets/images/mt-structures/mt2-smta/view-3.webp" alt="MT2 (SmtA) prediction, rotation 3" loading="lazy">
          <img src="static/assets/images/mt-structures/mt2-smta/view-4.webp" alt="MT2 (SmtA) prediction, rotation 4" loading="lazy">
          <img src="static/assets/images/mt-structures/mt2-smta/view-5.webp" alt="MT2 (SmtA) prediction, rotation 5" loading="lazy">
        </div></details>
      </figure>
      <figure class="mt-structure-card">
        <img src="static/assets/images/mt-structures/mt3-egr-09832/view-1.webp" alt="Predicted 3D model of the MT3 (EGR_09832) construct beside its predicted aligned error plot" loading="lazy">
        <figcaption><strong>MT3 · EGR_09832</strong><span>Primer 3 + Primer 6</span></figcaption>
        <details class="mt-structure-more"><summary>More views</summary><div class="mt-structure-views">
          <img src="static/assets/images/mt-structures/mt3-egr-09832/view-2.webp" alt="MT3 (EGR_09832) prediction, rotation 2" loading="lazy">
          <img src="static/assets/images/mt-structures/mt3-egr-09832/view-3.webp" alt="MT3 (EGR_09832) prediction, rotation 3" loading="lazy">
          <img src="static/assets/images/mt-structures/mt3-egr-09832/view-4.webp" alt="MT3 (EGR_09832) prediction, rotation 4" loading="lazy">
          <img src="static/assets/images/mt-structures/mt3-egr-09832/view-5.webp" alt="MT3 (EGR_09832) prediction, rotation 5" loading="lazy">
        </div></details>
      </figure>
      <figure class="mt-structure-card">
        <img src="static/assets/images/mt-structures/mt4-osmti-1b/view-1.webp" alt="Predicted 3D model of the MT4 (OsMTI-1b) construct beside its predicted aligned error plot" loading="lazy">
        <figcaption><strong>MT4 · OsMTI-1b</strong><span>Primer 3 + Primer 7</span></figcaption>
        <details class="mt-structure-more"><summary>More views</summary><div class="mt-structure-views">
          <img src="static/assets/images/mt-structures/mt4-osmti-1b/view-2.webp" alt="MT4 (OsMTI-1b) prediction, rotation 2" loading="lazy">
          <img src="static/assets/images/mt-structures/mt4-osmti-1b/view-3.webp" alt="MT4 (OsMTI-1b) prediction, rotation 3" loading="lazy">
          <img src="static/assets/images/mt-structures/mt4-osmti-1b/view-4.webp" alt="MT4 (OsMTI-1b) prediction, rotation 4" loading="lazy">
          <img src="static/assets/images/mt-structures/mt4-osmti-1b/view-5.webp" alt="MT4 (OsMTI-1b) prediction, rotation 5" loading="lazy">
        </div></details>
      </figure>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Core protocol 01</p><h3>Plasmid extraction and inverse PCR</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>Plasmid MH45 was extracted from a 1–5 ml overnight culture of <em>E. coli</em> Ek317 with a QIA Spin MiniPrep workflow. Cells were pelleted at 9,000 rpm for 10 minutes at 25 °C, lysed with P1/P2/N3 buffers, clarified at 13,000 rpm, washed with PB and PE, dried, heated at 55 °C, and eluted in 30 µl ddH<sub>2</sub>O.</p>
      <p>The vector was linearized by inverse Phusion PCR using VISP1 and VISP2. The 30-cycle program was 98 °C for 10 seconds, 61 °C for 20 seconds, and 72 °C for 1 minute 45 seconds, followed by a 3-minute final extension at 72 °C.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Inverse PCR purpose</span><small>Amplify outward across the plasmid to create a linear vector and add restriction sites</small></div></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="dna-extraction-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Step-by-step</p><h3 id="dna-extraction-title">DNA extraction (QIAprep Spin Miniprep Kit)</h3><p>The full bench protocol as followed, from the kit's Quick-Start Protocol dated February 2015.</p></div>
    <div class="protocol-steps">
      <ol>
          <li>Pellet 1–5 ml bacterial overnight culture by centrifugation at 9000 rpm for 10 minutes at 25 °C.</li>
          <li>Resuspend pellet bacterial cells in 250 µl buffer P1 and transfer to a microcentrifuge tube.</li>
          <li>Add 250 µl Buffer P2 and mix thoroughly by inverting the tube 4~6 times until the solution becomes clear. Do not allow the lysis reaction to proceed over 2 minutes.</li>
          <li>Add 350 µl of Buffer N3 and mix immediately and thoroughly by inverting the tube 4~6 times.</li>
          <li>Centrifuge for 10 minutes at 13,000 rpm.</li>
          <li>Apply 800 µl supernatant from step 5 to the QIAprep 2.0 spin column by pipetting.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow through.</li>
          <li>Wash the QIA 2.0 spin column by adding 0.5 ml Buffer PB.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow through.</li>
          <li>Wash the QIA 2.0 spin column by adding 0.75 ml buffer PE.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow through.</li>
          <li>Centrifuge for 3 minutes at 13,000 rpm.</li>
          <li>Heat for 3 minutes at 55 °C.</li>
          <li>Place the QIAprep 2.0 spin column in a clean 1.5 ml microcentrifuge tube.</li>
          <li>Add 30 µl of ddH<sub>2</sub>O. Stand for 1 minute at 55 °C.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm.</li>
      </ol>
    </div>
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

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Core protocol 04</p><h3>Cadmium dose-response assay</h3></div>
    <div class="experiment-section-layout"><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Plate reader</span><small>GFP and OD<sub>600</sub> read together at 37 °C with orbital shaking between reads</small></div><article class="experiment-section-copy">
      <p>Once the eight constructs were verified they were assayed in a plate reader against a cadmium gradient of 0, 40, 200, 300, and 400 nM, in both a standard medium and a sodium-free variant. Each construct was run in three replicate wells, with GFP fluorescence and OD<sub>600</sub> recorded from the same well so that signal could be expressed per unit of growth.</p>
      <p>Every plate carried pMH45, the metallothionein-free sensor, as the isogenic control, plus pTK03 as the fluorescence-negative reference and pYC08 as the fluorescence-positive reference. Reported GFP/OD<sub>600</sub> is the pTK03-subtracted fluorescence divided by blank-subtracted OD<sub>600</sub>, averaged across the replicate wells. The pVIS1–4 and pVIS5–8 sets were run on separate days, so cross-set comparisons are scaled using the reference strains present on both plates. The full derivation and the resulting data are on the <a href="results">cadmium response</a> page.</p>
    </article></div>
  </section>

  <section class="experiment-log-panel">
    <div class="experiment-flow-header experiment-log-header"><p class="experiment-card-kicker">Outcome</p><h3>Troubleshooting guided the next iteration</h3><p>Colony PCR did not consistently yield visible products. The team recorded the failures and revised the workflow.</p></div>
    <div class="experiment-log-grid">
      <details class="experiment-log-entry" open><summary><span class="experiment-log-date">July 9–16</span><strong>Repeated colony-PCR screening</strong></summary><p>MT2, MT3, and MT4 were screened across several rounds. MT1 controls succeeded on July 14, while MT2 failed and no result was observed for the MT3 and MT4 screens.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">Root cause</span><strong>Template preparation</strong></summary><p>The July 13 review identified excessive biomass transfer during colony template preparation as one likely source of poor amplification.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 20</span><strong>Ligation repeated</strong></summary><p>MT2, MT3, and MT4 ligations were repeated. The team also noted that GC-buffer and HF-buffer plasmid preparations could have different concentrations, invalidating an earlier volume assumption.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 21</span><strong>Sequencing preparation</strong></summary><p>Following another transformation, colonies PVIS1 #2, #9, and #15 were selected and plated for sequencing preparation.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 22</span><strong>Empty plates, then a six-way ligation</strong></summary><p>The July 21 transformation produced no colonies on any plate. Fresh LB + kanamycin plates were poured, and six ligations were set up to test the HF-buffer and GC-buffer plasmid preparations against each of MT2, MT3, and MT4.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 23–24</span><strong>Screening the six-way round</strong></summary><p>13 colonies from PVIS2 and 15 each from PVIS3 and PVIS4 were gridded, then screened by colony PCR over two days with PVIS1 as the control.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 28</span><strong>Restart from the plasmid</strong></summary><p>The vector was linearised again by inverse PCR, MT2–MT4 were re-amplified, and the template was removed with DpnI. Glycerol stocks were banked for PVIS1 #2, #9, and #15.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">July 30–31</span><strong>Third transformation round</strong></summary><p>MT2, MT3, and MT4 were transformed again and plated at whole-cell, 10⁻¹, and 10⁻². 20 colonies were gridded per construct and the first eight of each were screened.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">August 3</span><strong>Constructs rebuilt from fresh plasmid</strong></summary><p>Plasmid was extracted again at 109–117 ng/µl and the inserts re-amplified, giving 30.0 ng/µl for MT2, 37.5 for MT3, and 18.9 for MT4 before SalI/XbaI digestion and ligation.</p></details>
      <details class="experiment-log-entry"><summary><span class="experiment-log-date">August 4</span><strong>Sent for sequencing</strong></summary><p>The rebuilt constructs were cleaned, submitted for sequencing, and transformed again. The reads that came back are reported on the <a href="measurement">measurements</a> page.</p></details>
    </div>
  </section>
</section>
