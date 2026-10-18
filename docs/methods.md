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

  <section class="experiment-figure-section" aria-labelledby="materials-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Materials</p><h3 id="materials-title">Strains, media, reagents and equipment</h3><p>Everything the protocols below draw on. The host strain for both cloning and expression was <em>E. coli</em> Ek317, which was also the source of the parental plasmid prep.</p></div>

    <h4>Strains and plasmids</h4>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Name</th><th>Role</th></tr></thead><tbody>
      <tr><td><em>E. coli</em> Ek317</td><td>Cloning and expression host; also the source of the parental pMH45 plasmid prep</td></tr>
      <tr><td>pMH45 (pJL14 + ZitB)</td><td>Parental cadmium-sensing plasmid from Prof. Chu&rsquo;s lab</td></tr>
      <tr><td>pMH54 (SalI / XbaI-cut)</td><td>Linearised display vector used as the ligation backbone</td></tr>
      <tr><td>pTK03, pYC08</td><td>External reference plasmids included on characterisation plates</td></tr>
    </tbody></table></div>

    <h4>Media</h4>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Medium</th><th>Composition / notes</th><th>Used for</th></tr></thead><tbody>
      <tr><td>LB</td><td>Standard Luria&ndash;Bertani broth or agar</td><td>Routine culture, plates</td></tr>
      <tr><td>LB + Km</td><td>LB with kanamycin at working concentration</td><td>Selection of transformants</td></tr>
      <tr><td>LB + Glu + Km</td><td>LB + glucose + kanamycin</td><td>Plate-reader assay cultures</td></tr>
      <tr><td>LB + Glu + Km + Cd</td><td>As above, plus CdCl<sub>2</sub> from a 10 mM stock</td><td>Cadmium induction series</td></tr>
      <tr><td>SOB</td><td>Low-salt rich medium</td><td>Competent-cell growth</td></tr>
      <tr><td>SOC</td><td>SOB + glucose, pre-warmed</td><td>Post-electroporation recovery</td></tr>
      <tr><td>0.9% saline</td><td>Sterile</td><td>Serial dilution before plating</td></tr>
      <tr><td>No-Na medium</td><td>Sodium-free formulation</td><td>Parallel growth comparison runs</td></tr>
    </tbody></table></div>

    <h4>Key reagents</h4>
    <ul>
      <li>QIAprep Spin Miniprep Kit (Buffers P1, P2, N3, PB, PE).</li>
      <li>Zymo-Spin column kit (DNA Binding Buffer, DNA Wash Buffer).</li>
      <li>Phusion High-Fidelity DNA Polymerase with 5&times; HF Buffer and 5&times; GC Buffer.</li>
      <li>Taq DNA polymerase with 10&times; buffer and DMSO (colony screening only).</li>
      <li>FastDigest SalI and XbaI with 10&times; FD Green Buffer.</li>
      <li>DpnI with its reaction buffer.</li>
      <li>T4 DNA Ligase with 10&times; T4 DNA Ligase Buffer.</li>
      <li>10 mM dNTP mix; primers VISP1&ndash;VISP2 and USPrimer 3&ndash;7; screening primers TK07P1 and PU12P2.</li>
      <li>Agarose, 1&times; TAE, 1 kb DNA ladder, 10% (v/v) glycerol, liquid nitrogen.</li>
    </ul>

    <h4>Equipment</h4>
    <ul>
      <li>Thermocycler; refrigerated microcentrifuge and 50 ml-capable centrifuge (4 °C, 9,000&ndash;14,000 rpm).</li>
      <li>Electroporation system with 1 mm cuvettes; 37 °C shaking incubator (225 rpm) and static incubator.</li>
      <li>Horizontal gel tank and power supply; gel documentation system.</li>
      <li>Microplate reader with OD<sub>600</sub> and GFP fluorescence channels, 37 °C with shaking.</li>
      <li>Nucleic acid quantification (spectrophotometer / fluorometer); &minus;80 °C freezer.</li>
    </ul>
  </section>

  <section class="experiment-figure-section" aria-labelledby="protocol-set-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Protocol set</p><h3 id="protocol-set-title">The nineteen procedures, as run at the bench</h3><p>Each protocol states the reagents, volumes, cycling conditions and checkpoints actually used, so the work can be repeated without reconstructing it from the daily logs. Volumes are per single reaction unless a master-mix multiplier is given. Enzymes, master mixes and competent cells are assembled on ice. Where a protocol here differs from an early notebook entry, this is the corrected version &mdash; the deviations and the reasons for them are in <a href="#protocol-revisions-title">Protocol revisions</a>. The note boxes mark the points where something went wrong in 2026; they are checkpoints, not asides.</p></div>

    <div class="experiment-log-grid">

      <details class="experiment-log-entry" open>
        <summary><span class="experiment-log-date">Protocol 1</span><strong>Plasmid miniprep (QIAprep spin column)</strong></summary>
        <p><strong>Purpose:</strong> recover the parental plasmid (pMH45) from an overnight <em>E. coli</em> Ek317 culture for use as the template in downstream cloning.</p>
        <div class="protocol-steps"><ol>
          <li>Pellet 1&ndash;5 ml of overnight bacterial culture by centrifugation at 9,000 rpm for 10 min at 25 °C. Discard the supernatant completely.</li>
          <li>Resuspend the pellet in 250 µl Buffer P1 and transfer to a 1.5 ml microcentrifuge tube.</li>
          <li>Add 250 µl Buffer P2 and mix by inverting 4&ndash;6 times until the solution clears. Do not let lysis run longer than 2 min.</li>
          <li>Add 350 µl Buffer N3 and mix immediately by inverting 4&ndash;6 times.</li>
          <li>Centrifuge 10 min at 13,000 rpm.</li>
          <li>Apply 800 µl of the supernatant to a QIAprep 2.0 spin column. Centrifuge 30&ndash;60 s and discard the flow-through.</li>
          <li>Wash with 0.5 ml Buffer PB. Centrifuge 30&ndash;60 s and discard the flow-through.</li>
          <li>Wash with 0.75 ml Buffer PE. Centrifuge 30&ndash;60 s and discard the flow-through.</li>
          <li>Dry spin 3 min to remove residual wash buffer.</li>
          <li>Incubate the open column at 55 °C for 3 min to evaporate traces of ethanol.</li>
          <li>Transfer the column to a clean 1.5 ml tube, add 30 µl ddH<sub>2</sub>O to the membrane, stand 1 min at 55 °C, and centrifuge 1 min to elute.</li>
        </ol></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> quantify the eluate before use. Record the concentration &mdash; every ligation volume downstream is calculated from it, and carrying forward a concentration measured on a different prep was the single most costly error of the 2026 season.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 2</span><strong>Inverse Phusion PCR (vector linearisation)</strong></summary>
        <p><strong>Purpose:</strong> amplify the entire plasmid outward from the insertion point, linearising the vector and appending the SalI and XbaI restriction sites.</p>
        <h5>Reaction mixture (30 µl)</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Amount</th><th>Comment</th></tr></thead><tbody>
          <tr><td>DNA template (pMH45 miniprep)</td><td>20 ng</td><td>Volume = target mass &divide; stock conc.; e.g. 20 &divide; 40.67 &asymp; 0.49 µl</td></tr>
          <tr><td>5&times; Phusion HF Buffer</td><td>6.0 µl</td><td>Run a parallel reaction with 5&times; GC Buffer</td></tr>
          <tr><td>10 mM dNTP mix</td><td>0.6 µl</td><td></td></tr>
          <tr><td>Primer VISP1</td><td>0.3 µl</td><td></td></tr>
          <tr><td>Primer VISP2</td><td>0.3 µl</td><td></td></tr>
          <tr><td>Phusion polymerase</td><td>0.3 µl</td><td>Add last, on ice</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>to 30 µl</td><td>&asymp; 22.0 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>30 µl</strong></td><td></td></tr>
        </tbody></table></div>
        <h5>Thermocycler programme</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Step</th><th>Temperature</th><th>Time</th><th>Cycles</th></tr></thead><tbody>
          <tr><td>Initial denaturation</td><td>98 °C</td><td>30 s</td><td>1</td></tr>
          <tr><td>Denaturation</td><td>98 °C</td><td>10 s</td><td>30</td></tr>
          <tr><td>Annealing</td><td>61 °C</td><td>20 s</td><td>30</td></tr>
          <tr><td>Extension</td><td>72 °C</td><td>1 min 45 s</td><td>30</td></tr>
          <tr><td>Final extension</td><td>72 °C</td><td>3 min</td><td>1</td></tr>
          <tr><td>Hold</td><td>4 °C</td><td>&infin;</td><td>&mdash;</td></tr>
        </tbody></table></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> set up HF and GC buffer reactions side by side and keep them labelled and separately quantified for the rest of the workflow. The two products do not have the same concentration and must never share a dilution calculation.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 3</span><strong>DNA cleanup (Zymo spin column)</strong></summary>
        <p><strong>Purpose:</strong> remove polymerase, salts, unreacted primers and buffer from a template, PCR product or ligation reaction.</p>
        <div class="protocol-steps"><ol>
          <li>Mix the DNA with DNA Binding Buffer at the ratio in the table below and transfer to a Zymo-Spin column in a collection tube.</li>
          <li>Centrifuge at 13,000 rpm for 1 min; discard the flow-through.</li>
          <li>Add 200 µl DNA Wash Buffer and centrifuge at 13,000 rpm for 1 min. Discard the flow-through. Repeat this wash once more (two washes total).</li>
          <li>Dry spin at 14,000 rpm for 3 min to remove all residual ethanol.</li>
          <li>Incubate the open column at 55 °C for 3 min.</li>
          <li>Transfer the column to a clean 1.5 ml tube. Add 20&ndash;28 µl ddH<sub>2</sub>O directly onto the column matrix, incubate 1 min at room temperature, and centrifuge at 13,000 rpm for 1 min.</li>
        </ol></div>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Sample type</th><th>Sample : Binding Buffer</th><th>Worked example</th></tr></thead><tbody>
          <tr><td>Plasmid / DNA template</td><td>1 : 2</td><td>20 µl : 40 µl (or 25 µl : 50 µl)</td></tr>
          <tr><td>MT PCR product</td><td>1 : 5</td><td>20 µl : 100 µl (or 25 µl : 125 µl)</td></tr>
          <tr><td>Ligation product</td><td>1 : 5</td><td>20 µl : 100 µl</td></tr>
        </tbody></table></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> residual ethanol is the most common cause of a failed electroporation (arcing). Do not skip the dry spin or the 55 °C open-lid step.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 4</span><strong>Gel excision</strong></summary>
        <p><strong>Purpose:</strong> recover a target DNA fragment from an agarose gel and remove the agarose and other unwanted fragments. Used in place of a straight column cleanup whenever the gel shows more than one band.</p>
        <div class="protocol-steps"><ol>
          <li>Excise the DNA fragment from the agarose gel using a scalpel and transfer it into a 1.5 ml microcentrifuge tube.</li>
          <li>Add 3 volumes of ADB to each volume of agarose excised from the gel.</li>
          <li>Incubate at 55 °C for 5&ndash;10 min until the gel slice is completely dissolved.</li>
          <li>Transfer the melted agarose solution to a Zymo-Spin column in a collection tube.</li>
          <li>Centrifuge at 13,000 rpm for 60 s. Discard the flow-through.</li>
          <li>Add 200 µl of DNA Wash Buffer to the column and centrifuge at 13,000 rpm for 60 s. Discard the flow-through.</li>
          <li>Add 200 µl of DNA Wash Buffer to the column and centrifuge at 13,000 rpm for 60 s. Discard the flow-through.</li>
          <li>Dry spin at 14,000 rpm for 2 min.</li>
          <li>Add 32 µl of ddH<sub>2</sub>O directly to the column matrix. Place the column into a 1.5 ml tube and centrifuge for 60 s to elute the DNA.</li>
          <li>Keep the 1.5 ml tube and discard the spin column.</li>
        </ol></div>
        <p>Worked ADB volumes from the pVIS5&ndash;pVIS8 build, at three times the gel weight:</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Fragment</th><th>Gel weight</th><th>ADB</th></tr></thead><tbody>
          <tr><td>pVIS6</td><td>50 mg</td><td>150 mg</td></tr>
          <tr><td>pVIS7</td><td>100 mg</td><td>300 mg</td></tr>
          <tr><td>pVIS8</td><td>110 mg</td><td>330 mg</td></tr>
        </tbody></table></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 5</span><strong>DpnI digestion of parental template</strong></summary>
        <p><strong>Purpose:</strong> destroy the methylated parental plasmid carried over from <em>E. coli</em> so that only the PCR-amplified vector survives into the ligation.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>Purified plasmid (PCR product)</td><td>17.5 µl</td></tr>
          <tr><td>10&times; CutSmart Buffer</td><td>2.0 µl</td></tr>
          <tr><td>DpnI</td><td>0.5 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>20 µl</strong></td></tr>
        </tbody></table></div>
        <p>Incubate at 37 °C for 2 h, then hold at 4 °C. Clean up the digest (Protocol 3, 1:2 ratio) before proceeding.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 6</span><strong>Primer reconstitution</strong></summary>
        <p>Reconstitute lyophilised primers (USPrimer 3&ndash;7 and the VISP series) in ddH<sub>2</sub>O to the supplier-specified stock concentration. Vortex briefly, spin down, and leave at room temperature for 10 min before first use so the pellet fully dissolves. Prepare working dilutions in a separate tube; never pipette from the stock at the bench. Store stocks at &minus;20 °C and avoid more than five freeze&ndash;thaw cycles.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Construct</th><th>Forward primer</th><th>Reverse primer</th><th>Annealing T<sub>m</sub></th></tr></thead><tbody>
          <tr><td>MT1 (IaMT2)</td><td>USPrimer 3</td><td>USPrimer 4</td><td>59.8 °C</td></tr>
          <tr><td>MT2 (SmtA)</td><td>USPrimer 3</td><td>USPrimer 5</td><td>60.8 °C</td></tr>
          <tr><td>MT3 (EGR_09832)</td><td>USPrimer 3</td><td>USPrimer 6</td><td>60.8 °C</td></tr>
          <tr><td>MT4 (OsMTI-1b)</td><td>USPrimer 3</td><td>USPrimer 7</td><td>60.8 °C</td></tr>
          <tr><td>Colony screening</td><td>TK07P1</td><td>PU12P2</td><td>57.6 °C</td></tr>
        </tbody></table></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 7</span><strong>Phusion PCR for MT inserts</strong></summary>
        <p><strong>Purpose:</strong> amplify each MT coding sequence with flanking restriction sites ready for digestion and ligation. Keep all tubes and master-mix components strictly on ice during setup.</p>
        <h5>Reaction mixture (30 µl)</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>DNA template</td><td>2.0 µl</td></tr>
          <tr><td>5&times; Phusion HF Buffer</td><td>6.0 µl</td></tr>
          <tr><td>10 mM dNTP mix</td><td>0.6 µl</td></tr>
          <tr><td>Forward primer</td><td>0.3 µl</td></tr>
          <tr><td>Reverse primer</td><td>0.3 µl</td></tr>
          <tr><td>Phusion polymerase</td><td>0.3 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>20.5 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>30 µl</strong></td></tr>
        </tbody></table></div>
        <h5>Thermocycler programme</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Step</th><th>Temperature</th><th>Time</th><th>Cycles</th></tr></thead><tbody>
          <tr><td>Initial denaturation</td><td>98 °C</td><td>30 s</td><td>1</td></tr>
          <tr><td>Denaturation</td><td>98 °C</td><td>10 s</td><td>30</td></tr>
          <tr><td>Annealing</td><td>T<sub>m</sub> (see Protocol 6)</td><td>20 s</td><td>30</td></tr>
          <tr><td>Extension</td><td>72 °C</td><td>30 s</td><td>30</td></tr>
          <tr><td>Final extension</td><td>72 °C</td><td>3 min</td><td>1</td></tr>
          <tr><td>Hold</td><td>4 °C</td><td>&infin;</td><td>&mdash;</td></tr>
        </tbody></table></div>
        <p>Clean up the product (Protocol 3, 1:5 ratio) and quantify. Record the concentration against the construct label &mdash; it feeds directly into the ligation calculation in Protocol 9.</p>
        <h5>Variant for pVIS5&ndash;pVIS8: amplifying the anchor out</h5>
        <p>The same reaction is used to rebuild each construct without its Lpp-OmpA anchor, by amplifying outward from either side of the anchor so that it falls outside the product. The template is a verified pVIS1&ndash;pVIS4 miniprep at 8 ng (0.8 µl), with ddH<sub>2</sub>O made up to 21.7 µl, and each strain is run as two samples.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Template</th><th>Primer 1</th><th>Primer 2</th><th>Template volume</th><th>ddH<sub>2</sub>O for the dilution</th></tr></thead><tbody>
          <tr><td>pVIS1</td><td>VIS1p8</td><td>VIS1p9</td><td>1 µl</td><td>10.6 µl</td></tr>
          <tr><td>pVIS2</td><td>VIS1p8</td><td>VIS2p1</td><td>1 µl</td><td>10 µl</td></tr>
          <tr><td>pVIS3</td><td>VIS1p8</td><td>VIS3p1</td><td>1 µl</td><td>13.81 µl</td></tr>
          <tr><td>pVIS4</td><td>VIS1p8</td><td>VIS4p1</td><td>1 µl</td><td>13.5 µl</td></tr>
        </tbody></table></div>
        <p><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), 59.7 °C / 63 °C (20 s), 72 °C (3 min 55 s)] &times; 30 cycles; 72 °C (3 min); 4 °C (&infin;). The product goes to gel excision (Protocol 4) whenever the gel shows more than one band, and to a straight cleanup when it shows one, then on to self-circularisation (Protocol 10).</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 8</span><strong>Restriction digestion (SalI / XbaI)</strong></summary>
        <p><strong>Purpose:</strong> generate compatible sticky ends on both the linearised vector and each MT insert. Both are digested with the same enzyme pair and in parallel.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>Purified DNA fragment</td><td>16 µl</td></tr>
          <tr><td>10&times; FD Green Buffer</td><td>2 µl</td></tr>
          <tr><td>XbaI</td><td>1 µl</td></tr>
          <tr><td>SalI</td><td>1 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>20 µl</strong></td></tr>
        </tbody></table></div>
        <p>Incubate at 37 °C for 2 h, then hold at 4 °C. Clean up each digest with Protocol 3 before ligation (1:2 for the vector, 1:5 for inserts) and re-quantify.</p>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> re-quantify after digestion and cleanup rather than reusing the pre-digestion reading. The digestion and two column passes both lose material, and the ligation molar ratio is only as good as this number.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 9</span><strong>T4 ligation</strong></summary>
        <p><strong>Purpose:</strong> covalently join the digested vector and the MT insert to form the complete recombinant plasmid (pVIS1&ndash;pVIS4).</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Amount</th></tr></thead><tbody>
          <tr><td>Vector DNA</td><td>100 ng</td></tr>
          <tr><td>Insert DNA</td><td>3 : 1 insert-to-vector molar ratio</td></tr>
          <tr><td>10&times; T4 DNA Ligase Buffer</td><td>2.0 µl</td></tr>
          <tr><td>T4 DNA Ligase</td><td>0.2&ndash;0.3 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>to 20 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>20 µl</strong></td></tr>
        </tbody></table></div>
        <p>Incubate at 16 °C for 14&ndash;16 h, then 37 °C for 1 h to inactivate the ligase, then hold at 4 °C. Clean up the ligation product (Protocol 3, 1:5) before electroporation &mdash; salt carryover from the ligase buffer will cause arcing.</p>
        <h5>Calculating the insert volume</h5>
        <ol>
          <li>Vector volume (µl) = 100 ng &divide; vector concentration (ng/µl). Worked example: 100 &divide; 42.9 &asymp; 2.33 µl.</li>
          <li>Enter the vector length, insert length, vector mass (100 ng) and a 3:1 molar ratio into NEBioCalculator to obtain the required insert mass, then divide by the measured insert concentration.</li>
          <li>Make up the remainder to 20 µl with ddH<sub>2</sub>O.</li>
        </ol>
        <p>Worked values from the 20 July run, for reference:</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Construct</th><th>Insert conc. (ng/µl)</th><th>Insert volume</th><th>ddH<sub>2</sub>O to 20 µl</th></tr></thead><tbody>
          <tr><td>MT1</td><td>29.3</td><td>1.62 µl</td><td>13.85 µl</td></tr>
          <tr><td>MT2</td><td>14.7</td><td>2.02 µl</td><td>13.45 µl</td></tr>
          <tr><td>MT3</td><td>22.7</td><td>2.11 µl</td><td>13.36 µl</td></tr>
          <tr><td>MT4</td><td>39.2</td><td>0.82 µl</td><td>14.65 µl</td></tr>
        </tbody></table></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> these volumes are valid only for the specific preps they were measured on. Recalculate from a fresh quantification every time.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 10</span><strong>Ligation by self-circularisation</strong></summary>
        <p><strong>Purpose:</strong> circularise the modified plasmid after the Lpp-OmpA membrane-targeting sequence has been removed. This is the recipe used for pVIS5&ndash;pVIS8, where there is no separate insert to join &mdash; the amplified backbone is simply closed on itself.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Amount</th></tr></thead><tbody>
          <tr><td>Digestion product</td><td>50 ng</td></tr>
          <tr><td>10&times; T4 DNA Ligase Buffer</td><td>5.0 µl</td></tr>
          <tr><td>PEG 4000 (50% w/v)</td><td>5.0 µl</td></tr>
          <tr><td>T4 DNA Ligase</td><td>1.0 µl</td></tr>
          <tr><td>T4 PNK</td><td>1.0 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>up to 50 µl</td></tr>
          <tr><td><strong>Total Volume</strong></td><td><strong>50 µl</strong></td></tr>
        </tbody></table></div>
        <p><strong>Thermocycler:</strong> 24 °C for 2 h, then hold at 4 °C.</p>
        <p>Purify with the DNA Clean &amp; Concentrator-5 kit and elute the ligation product in 10 µl ddH<sub>2</sub>O &mdash; not the 20&ndash;28 µl used elsewhere, because the product goes straight into electroporation.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 11</span><strong>Preparation of electrocompetent <em>E. coli</em></strong></summary>
        <p><strong>Purpose:</strong> harvest <em>E. coli</em> Ek317 in mid-exponential phase and strip it of salt by repeated cold, low-salt washes, so that it survives and takes up DNA during electroporation.</p>
        <div class="protocol-steps"><ol>
          <li><strong>Start the day before:</strong> inoculate a tiny amount of Ek317 into 2 ml SOB (or 5 ml LB) and shake overnight at 37 °C, 225 rpm.</li>
          <li><strong>Subculture:</strong> transfer 0.25 ml of the overnight culture into 50 ml SOB. Incubate at 37 °C, 225 rpm for approximately 2 h until OD<sub>600</sub> &asymp; 0.6.</li>
          <li><strong>Chill:</strong> transfer the culture to a 50 ml conical tube and hold on ice for 10 min. Everything from here on stays at 4 °C.</li>
          <li><strong>Wash 1:</strong> centrifuge at 9,000 rpm, 10 min, 4 °C. Discard the supernatant. Resuspend the pellet in 3 ml ice-cold ddH<sub>2</sub>O by gentle pipetting, then add a further 47 ml ice-cold ddH<sub>2</sub>O.</li>
          <li><strong>Wash 2:</strong> centrifuge as above, discard supernatant, resuspend in 3 ml ice-cold ddH<sub>2</sub>O, then add 12 ml ddH<sub>2</sub>O. Repeat once.</li>
          <li><strong>Wash 3:</strong> centrifuge as above and discard the supernatant, draining carefully.</li>
          <li><strong>Final resuspension, same-day use:</strong> add 200 µl ice-cold ddH<sub>2</sub>O to concentrate the cells. Aliquot 40 µl per tube into 1.5 ml tubes and keep on ice.</li>
          <li><strong>Final resuspension, frozen stocks:</strong> resuspend in 4 ml 10% (v/v) glycerol, centrifuge at 9,000 rpm, 10 min, 4 °C, drain, and resuspend the pellet in 0.8 ml 10% glycerol. Aliquot 40 µl into 20 pre-chilled tubes on ice, shock-freeze in liquid nitrogen, and store at &minus;80 °C.</li>
        </ol></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> do not let the culture overshoot OD<sub>600</sub> 0.6 and do not let the cells warm up between washes. Frozen aliquots are thawed on ice immediately before use and are never refrozen.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 12</span><strong>Transformation by electroporation</strong></summary>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Parameter</th><th>Setting</th></tr></thead><tbody>
          <tr><td>Voltage</td><td>1800 V</td></tr>
          <tr><td>Capacitance</td><td>25 µF</td></tr>
          <tr><td>Resistance</td><td>200 &Omega;</td></tr>
          <tr><td>Cuvette gap</td><td>1 mm</td></tr>
          <tr><td>Organism preset</td><td><em>E. coli</em>, 1 mm, 1.8 kV</td></tr>
        </tbody></table></div>
        <div class="protocol-steps"><ol>
          <li>Combine 4 µl of cleaned ligation product with 40 µl of electrocompetent cells in a pre-chilled 1 mm cuvette. Mix by gentle tapping; avoid bubbles.</li>
          <li>Wipe the cuvette dry on the outside and apply the pulse.</li>
          <li>Immediately add 800 µl of warm SOC medium to the cuvette. Do not pipette up and down &mdash; recover the cells by gentle swirling.</li>
          <li>Transfer the whole suspension to a culture tube.</li>
          <li>Recover at 37 °C, 225 rpm, for 1 h.</li>
        </ol></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> record the time constant after each pulse. A sharp drop, or an audible arc, means residual salt or ethanol in the DNA &mdash; discard the cuvette, re-clean the ligation product and repeat with a fresh aliquot of cells.</p></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 13</span><strong>Dilution and aseptic plating</strong></summary>
        <div class="protocol-steps"><ol>
          <li><strong>Dilution:</strong> mix 10 µl of recovered culture with 90 µl of 0.9% saline to give a 10<sup>&minus;1</sup> dilution.</li>
          <li>Pass the cell spreader through the flame, then stand it in ethanol to cool.</li>
          <li>Briefly pass the spreader through the flame again to burn off the ethanol and let it dry.</li>
          <li>Pipette 40 µl of the undiluted transformation mixture onto one half of an LB + Km agar plate and spread evenly.</li>
          <li>Re-sterilise the spreader (steps 2&ndash;3).</li>
          <li>Pipette 40 µl of the 10<sup>&minus;1</sup> dilution onto the other half of the same plate and spread evenly.</li>
          <li>Repeat for each construct, one plate per construct.</li>
          <li>Invert the plates and incubate overnight at 37 °C.</li>
        </ol></div>
        <p>Always plate a no-DNA control (cells + pulse, no ligation product) alongside. Colonies on that plate indicate contaminated medium or a failed kanamycin selection.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 14</span><strong>Colony gridding</strong></summary>
        <p>Pick 16 well-separated colonies per construct from the transformant plate and patch them onto a mapped 16-square grid plate (LB + Km), keeping the numbering consistent with the colony PCR lane order. Incubate at 37 °C until patches are visible. Grid plates may be stored at 4 °C and screened a day or more later &mdash; screening from a refrigerated grid plate worked reliably through July.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 15</span><strong>Colony PCR screening (Taq)</strong></summary>
        <p><strong>Purpose:</strong> verify insertion of the MT fragment directly from transformant colonies, using primers TK07P1 and PU12P2.</p>
        <h5>Template preparation</h5>
        <div class="protocol-steps"><ol>
          <li>Touch a single gridded colony with a sterile pipette tip and resuspend it in 10 µl sterile ddH<sub>2</sub>O.</li>
          <li>Heat the sample at 96 °C for 12 min to lyse the cells, then spin briefly and keep on ice.</li>
        </ol></div>
        <div class="experiment-note-card"><p class="mb-0"><strong>Note:</strong> transfer only a trace of biomass &mdash; just touching the colony is enough. Overloading the template with cells inhibits the reaction and produced a run of blank gels in mid-July.</p></div>
        <h5>Master mix</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>1&times;</th><th>20&times;</th><th>36&times;</th><th>52&times;</th></tr></thead><tbody>
          <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>227 µl</td><td>408.6 µl</td><td>590.2 µl</td></tr>
          <tr><td>10&times; buffer</td><td>1.5 µl</td><td>30 µl</td><td>54 µl</td><td>78 µl</td></tr>
          <tr><td>DMSO</td><td>0.6 µl</td><td>12 µl</td><td>21.6 µl</td><td>31.2 µl</td></tr>
          <tr><td>10 mM dNTP</td><td>0.3 µl</td><td>6 µl</td><td>10.8 µl</td><td>15.6 µl</td></tr>
          <tr><td>50 mM primer TK07P1</td><td>0.09 µl</td><td>1.8 µl</td><td>3.24 µl</td><td>4.68 µl</td></tr>
          <tr><td>50 mM primer PU12P2</td><td>0.09 µl</td><td>1.8 µl</td><td>3.24 µl</td><td>4.68 µl</td></tr>
          <tr><td>Taq polymerase</td><td>0.07 µl</td><td>1.4 µl</td><td>2.52 µl</td><td>3.64 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>14 µl</strong></td><td><strong>280 µl</strong></td><td><strong>504 µl</strong></td><td><strong>728 µl</strong></td></tr>
        </tbody></table></div>
        <p>Dispense 14 µl of master mix per tube and add 1 µl of heat-lysed template (15 µl total). Always include two wells of a construct known to work as a positive control &mdash; MT1 served this role throughout the season &mdash; and one no-template well.</p>
        <h5>Thermocycler programme</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Step</th><th>Temperature</th><th>Time</th><th>Cycles</th></tr></thead><tbody>
          <tr><td>Initial denaturation</td><td>94 °C</td><td>2 min</td><td>1</td></tr>
          <tr><td>Denaturation</td><td>94 °C</td><td>30 s</td><td>35</td></tr>
          <tr><td>Annealing</td><td>57.6 °C</td><td>10 s</td><td>35</td></tr>
          <tr><td>Extension</td><td>72 °C</td><td>2 min</td><td>35</td></tr>
          <tr><td>Final extension</td><td>72 °C</td><td>3 min 30 s</td><td>1</td></tr>
          <tr><td>Hold</td><td>4 °C</td><td>&infin;</td><td>&mdash;</td></tr>
        </tbody></table></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 16</span><strong>Agarose gel electrophoresis</strong></summary>
        <h5>Casting</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Tray</th><th>TAE</th><th>SafeView stain</th><th>Agarose for 1%</th><th>Agarose for 2%</th></tr></thead><tbody>
          <tr><td>7 &times; 7 cm, 8-pin comb</td><td>22 ml</td><td>2 µl</td><td>0.22 g</td><td>0.44 g</td></tr>
          <tr><td>16 &times; 7 cm, 26-pin comb</td><td>45 ml</td><td>4 µl</td><td>0.45 g</td><td>0.9 g</td></tr>
          <tr><td>16 &times; 10 cm, two 26-pin combs</td><td>60 ml</td><td>8 µl</td><td>0.60 g</td><td>1.20 g</td></tr>
        </tbody></table></div>
        <div class="protocol-steps"><ol>
          <li>Place the mixture of TAE buffer and agarose in the microwave until it fully dissolves.</li>
          <li>Balance the gel tray.</li>
          <li>Add the corresponding amount of nucleic acid gel stain to the gel tray.</li>
          <li>Pour the fully dissolved mixture into the gel tray.</li>
          <li>Stir the mixture until the stain is fully dissolved.</li>
          <li>Attach the comb to the gel tray.</li>
          <li>Leave the gel to set for at least 30 min.</li>
        </ol></div>

        <h5>Loading</h5>
        <div class="protocol-steps"><ol>
          <li>Carefully take out the comb without breaking the gel.</li>
          <li>Load 5 µl of ladder at the start and end of the samples. Use the Omics 1 kb DNA RTU ladder for samples from 0.5 kb to 10 kb, and the Bioman 100 bp ladder for samples from 50 bp to 1 kb.</li>
          <li>Mix 1 µl of Omics-Bio 6&times; nucleic acid load buffer with 5 µl of sample.</li>
          <li>Load the mixture into the well.</li>
        </ol></div>
        <p>Colony PCR products contain FD Green or loading dye as supplied; Phusion products require added loading dye.</p>

        <h5>Running</h5>
        <p>130 mV for 18 min.</p>
        <p>Expected insert-containing band sizes: MT1 657 bp, MT2 597 bp, MT3 951 bp, MT4 645 bp, plus the flanking amplified region. Photograph every gel, annotate the lane map on the image, and file it in the dated experimental-data folder.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 17</span><strong>Glycerol stocks and sequencing submission</strong></summary>
        <div class="protocol-steps"><ol>
          <li>From the original transformant plate, use a sterile inoculating loop to pick each verified colony (for example pVIS1 #2, #9 and #15).</li>
          <li><strong>Sequencing plate:</strong> spread each picked colony over roughly one third of a fresh LB + Km plate.</li>
          <li><strong>Reference plate:</strong> streak a single line per colony on a second plate, labelled identically, as the retained copy.</li>
          <li>Incubate both at 37 °C overnight, then submit the sequencing plate and store the reference plate at 4 °C.</li>
          <li>For long-term storage, grow a verified clone overnight in LB + Km, mix with sterile glycerol to a final 15&ndash;25% (v/v), and freeze at &minus;80 °C.</li>
        </ol></div>
        <h5>Streaking from a grid plate</h5>
        <div class="protocol-steps"><ol>
          <li>Use an inoculating loop and pick up the bacteria from the grid plate.</li>
          <li>For a stock plate, cover the plate with bacteria using the loop, entirely or partially depending on sample distribution. For a sequencing plate, draw a single line with the loop on an LB plate.</li>
          <li>Incubate at 37 °C overnight.</li>
        </ol></div>
        <h5>Sequencing primer</h5>
        <p>Primer : ddH<sub>2</sub>O = 2 µl : 8 µl, giving a total of 10 µl per sample sent for sequencing.</p>
        <p>Align returned sequencing reads against the SnapGene reference map for the construct and confirm the MT insert, both junctions, the linker and the reading frame before the clone enters any characterisation assay.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 18</span><strong>Plate-reader characterisation (GFP and growth)</strong></summary>
        <p><strong>Purpose:</strong> measure GFP reporter output and growth rate across a cadmium concentration series, comparing display constructs against the sensor-only control.</p>
        <h5>Overnight pre-culture plate</h5>
        <p>The day before the run, set up a 96-well pre-culture plate. Inoculate each strain into LB + Glu + Km in triplicate wells, fill all perimeter wells (row A, row H, columns 1 and 12) with sterile ddH<sub>2</sub>O as an evaporation barrier, seal, and incubate at 37 °C with shaking overnight.</p>
        <p>Strain set used on 21&ndash;22 September: pMH45 (sensor-only control), pVIS5-22, pVIS6-2, pVIS7-1, pVIS8-12, pVIS8-13, plus reference plasmids pTK03 and pYC08. Strains are identified by clone number, not just construct, and the clone number is recorded on the plate map.</p>
        <h5>Cadmium series</h5>
        <p>Prepare the induction series by diluting a 10 mM CdCl<sub>2</sub> stock into LB + Glu + Km:</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Condition</th><th>Cd<sup>2+</sup> (nM)</th><th>Medium</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>LB + Glu + Km (no Cd)</td></tr>
          <tr><td>A</td><td>8</td><td>LB + Glu + Km + Cd</td></tr>
          <tr><td>B</td><td>40</td><td>LB + Glu + Km + Cd</td></tr>
          <tr><td>C</td><td>200</td><td>LB + Glu + Km + Cd</td></tr>
          <tr><td>D</td><td>300</td><td>LB + Glu + Km + Cd</td></tr>
          <tr><td>E</td><td>400</td><td>LB + Glu + Km + Cd</td></tr>
        </tbody></table></div>
        <p>Each strain occupies one block of six columns (conditions 0 and A&ndash;E) across three replicate rows, giving two strains per row-block on a 96-well plate. Include a medium-only blank for every Cd concentration so that background fluorescence and absorbance can be subtracted per condition.</p>
        <h5>Run</h5>
        <div class="protocol-steps"><ol>
          <li>Dilute the overnight pre-cultures into the prepared Cd-containing media to a common starting OD<sub>600</sub> (approximately 0.05).</li>
          <li>Load the assay plate following the recorded plate map, keeping the perimeter wells as ddH<sub>2</sub>O.</li>
          <li>Seal with a gas-permeable membrane and load into the plate reader at 37 °C with continuous or interval shaking.</li>
          <li>Read OD<sub>600</sub> and GFP fluorescence at fixed intervals for the full growth curve, typically 12&ndash;18 h.</li>
          <li>Export the raw data with the plate map embedded in the same workbook, named by date and strain set (for example 20260921pMH45_pVIS567.xlsx).</li>
        </ol></div>
        <h5>Analysis</h5>
        <ol>
          <li>Subtract the medium-only blank for the matching Cd condition from both OD<sub>600</sub> and fluorescence.</li>
          <li>Report GFP normalised to OD<sub>600</sub> (GFP/OD) as the primary reporter metric; raw GFP alone confounds expression with biomass.</li>
          <li>Extract the maximum specific growth rate from the exponential phase of each curve to quantify construct burden and cadmium toxicity separately.</li>
          <li>Average the three replicate wells and plot with the spread shown; keep each replicate traceable to its well.</li>
          <li>Where a parallel no-sodium medium run exists, normalise the display constructs to their matching controls in the same medium before comparing across media.</li>
        </ol>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 19</span><strong>Media, solutions and stocks</strong></summary>
        <p>Everything prepared in-house. Media are autoclaved; the saline is membrane-filtered, and all culture handling takes place in the laminar flow cabinet.</p>

        <h5>LB medium</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Amount</th></tr></thead><tbody>
          <tr><td>Sodium chloride</td><td>10 g</td></tr>
          <tr><td>Bacto tryptone</td><td>10 g</td></tr>
          <tr><td>Bacto yeast extract</td><td>5 g</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>up to 1 L</td></tr>
        </tbody></table></div>

        <h5>Medium without NaCl</h5>
        <p>Made from 24 September onward, after the testing centre advised that the sodium in standard LB would force a dilution that pushed the cadmium below what their assay could read.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Amount</th></tr></thead><tbody>
          <tr><td>Bacto tryptone</td><td>3.5 g</td></tr>
          <tr><td>Bacto yeast extract</td><td>3.5 g</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>up to 350 ml</td></tr>
        </tbody></table></div>

        <h5>0.9% saline</h5>
        <ul>
          <li>0.45 g NaCl, ddH<sub>2</sub>O up to 50 ml.</li>
          <li>Sterilise with a membrane filter rather than the autoclave.</li>
        </ul>

        <h5>SOC medium</h5>
        <p>Super Optimal Broth with Catabolite repression = SOB + glucose: 25 ml of SOB with 303 µl of glucose.</p>

        <h5>Glycerol stock</h5>
        <ul>
          <li>1 ml of 0.9% saline, 87 µl of DMSO, a glycerol stock vial, and the bacteria.</li>
          <li>Pick the bacteria from the plate with an inoculating loop.</li>
          <li>Vortex the vial until the bacteria are fully dissolved.</li>
        </ul>
      </details>
    </div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="protocol-revisions-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Revisions</p><h3 id="protocol-revisions-title">Protocol revisions</h3><p>Each entry records a failure encountered during the 2026 season, the diagnosis, and the change now built into the protocols above. The chronological record of what happened on which day is in the <a href="notebook">Notebook</a>; this section is what we changed as a result.</p></div>
    <div class="experiment-log-grid">
      <div class="experiment-note-card experiment-note-bug">
        <p class="mb-1"><strong>MT2 deferred at first ligation.</strong> On 29 June the MT2 insert measured a concentration of roughly 6 ng/µl, too low for a 3:1 ligation at 100 ng of vector. MT1, MT3 and MT4 were ligated and MT2 was deferred. The MT2 insert was re-amplified on 30 June and ligated on 6 July.</p>
        <p class="mb-0"><strong>Revision:</strong> quantify all inserts before the ligation day and re-amplify any below about 10 ng/µl rather than compensating with volume.</p>
      </div>
      <div class="experiment-note-card experiment-note-bug">
        <p class="mb-1"><strong>Blank colony PCR gels, 9&ndash;16 July.</strong> Four consecutive screening runs gave no bands for MT2, MT3 or MT4 while the MT1 control amplified normally, which localised the fault to the template rather than the master mix or the cycling programme. Root-cause analysis on 13 July identified excessive biomass transfer during template preparation.</p>
        <p class="mb-0"><strong>Revision:</strong> the template-prep step in Protocol 15 now specifies touching the colony only, and the MT1 positive control is mandatory on every screening plate.</p>
      </div>
      <div class="experiment-note-card experiment-note-bug">
        <p class="mb-1"><strong>Buffer-mismatched concentration carry-over.</strong> The 20 July ligation redo reused vector concentration values measured on an earlier prep. The vector had since been amplified with GC buffer rather than HF buffer, and the two preparations do not have the same concentration, so the calculated volumes were wrong.</p>
        <p class="mb-0"><strong>Revision:</strong> HF and GC products are now labelled, stored and quantified separately, and every ligation is calculated from a quantification taken after the final cleanup of that specific sample.</p>
      </div>
      <div class="experiment-note-card experiment-note-bug">
        <p class="mb-0"><strong>Ligation redo for MT2, MT3 and MT4.</strong> After the July screening failures, ligation was repeated for all three constructs on 20 July with freshly cleaned material, followed by electroporation and plating on 21 July. Verified clones were selected for sequencing from that round.</p>
      </div>
      <div class="experiment-note-card experiment-note-bug">
        <p class="mb-1"><strong>Dim GFP signal from pVIS1&ndash;pVIS4.</strong> The first plate-reader runs on 10 and 15 September showed all four pVIS constructs giving markedly lower GFP output than the sensor-only pMH45 control. Two explanations are compatible with that result: the display construct imposes a metabolic burden that reduces reporter expression, or surface-displayed MT sequesters Cd<sup>2+</sup> before it can reach the CadR.10 regulator, which is the intended behaviour of the system.</p>
        <p class="mb-0"><strong>Revision:</strong> the scaffold-only controls pVIS5&ndash;pVIS8 &mdash; Lpp-OmpA with no MT attached &mdash; were built to separate these, and were characterised on 21 September. A scaffold-only construct that is also dim implicates burden; one that matches pMH45 implicates sequestration.</p>
      </div>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">At the bench</p><h3>Safety, waste and record-keeping</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>Cadmium salts are toxic and a suspected carcinogen. Stocks were weighed and diluted in a fume hood, with nitrile gloves and eye protection and a dedicated set of tips and tubes kept for cadmium work. All cadmium-containing medium, cultures and plasticware were collected as heavy-metal waste; cadmium-containing liquid never went down the sink and was never autoclaved with general biological waste. All biological waste was autoclaved or disinfected before disposal in line with the host lab&rsquo;s procedures.</p>
      <p>Liquid nitrogen was handled with insulated gloves and a face shield, and a container of liquid nitrogen was never sealed. With flaming spreaders, the ethanol jar was kept well away from the open flame and a lit spreader was never returned to the jar. Nucleic acid stains and UV transilluminators followed the host lab&rsquo;s handling and shielding rules.</p>
      <p>Each experimental day has a dated folder holding the raw instrument output, gel photographs with annotated lane maps, and a short log entry stating what was run, what was observed and what was decided. Construct maps are maintained in SnapGene and updated when a sequencing result confirms or corrects an assembly. Plate-reader workbooks keep the plate map on the same sheet as the data, and when a protocol is changed at the bench the change and its reason are recorded so the next person inherits the reasoning and not only the result.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Cadmium waste</span><small>Collected separately as heavy-metal waste &mdash; never down the sink, never autoclaved with biological waste</small></div></div>
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
