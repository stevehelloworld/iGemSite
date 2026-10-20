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
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Protocol set</p><h3 id="protocol-set-title">The twenty-one procedures, as recorded in the lab protocol</h3><p>The procedures below are reproduced from the team&rsquo;s lab protocol document. Reagents, volumes, ratios and cycling conditions are given as recorded there; where the source states a value without a unit or a derivation, it is reproduced unchanged rather than inferred. Enzymes, master mixes and competent cells are assembled on ice.</p></div>

    <div class="experiment-log-grid">

      <details class="experiment-log-entry" open>
        <summary><span class="experiment-log-date">Protocol 1</span><strong>DNA extraction (QIAprep Spin Miniprep Kit)</strong></summary>
        <p><strong>Purpose:</strong> isolate plasmid DNA from overnight bacterial cultures for downstream PCR, digestion, ligation and sequence verification.</p>
        <p class="protocol-source">QIAprep Spin Miniprep Kit &mdash; Quick Start Protocol, February 2015.</p>
        <div class="protocol-steps"><ol>
          <li>Pellet 1&ndash;5 ml bacterial overnight culture by centrifugation at 9,000 rpm for 10 minutes at 25 °C.</li>
          <li>Resuspend the pelleted bacterial cells in 250 µl Buffer P1 and transfer to a microcentrifuge tube.</li>
          <li>Add 250 µl Buffer P2 and mix thoroughly by inverting the tube 4&ndash;6 times until the solution becomes clear. Do not allow the lysis reaction to proceed over 2 minutes.</li>
          <li>Add 350 µl of Buffer N3 and mix immediately and thoroughly by inverting the tube 4&ndash;6 times.</li>
          <li>Centrifuge for 10 minutes at 13,000 rpm.</li>
          <li>Apply 800 µl supernatant from step 5 to the QIAprep 2.0 spin column by pipetting.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow-through.</li>
          <li>Wash the QIAprep 2.0 spin column by adding 0.5 ml Buffer PB.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow-through.</li>
          <li>Wash the QIAprep 2.0 spin column by adding 0.75 ml Buffer PE.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow-through.</li>
          <li>Centrifuge for 3 minutes at 13,000 rpm.</li>
          <li>Heat for 3 minutes at 55 °C.</li>
          <li>Place the QIAprep 2.0 spin column in a clean 1.5 ml microcentrifuge tube.</li>
          <li>Add 30 µl of ddH<sub>2</sub>O. Stand for 1 minute at 55 °C.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm.</li>
          <li>Keep the 1.5 ml tube and discard the spin column.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 2</span><strong>DNA clean</strong></summary>
        <p><strong>Purpose:</strong> remove salts, residual enzymes, primers and other contaminants from DNA samples before the next cloning step.</p>
        <div class="protocol-steps"><ol>
          <li>Mix the DNA template with Binding Buffer at the ratio in the table below.</li>
          <li>Transfer to a Zymo-Spin column in a collection tube.</li>
          <li>Centrifuge for 1 minute at 13,000 rpm. Discard the flow-through.</li>
          <li>Add 200 µl DNA Wash Buffer to the column. Centrifuge for 1 minute at 13,000 rpm. Discard the flow-through. Repeat this wash step.</li>
          <li>Dry spin: centrifuge at 14,000 rpm for 3 minutes.</li>
          <li>Heat for 3 minutes, open lid, at 55 °C.</li>
          <li>Add 20 µl ddH<sub>2</sub>O directly to the column matrix, incubate at room temperature for 1 minute. Centrifuge at 13,000 rpm for 1 minute.</li>
          <li>Keep the 1.5 ml tube and discard the spin column.</li>
        </ol></div>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Application</th><th>DNA Binding Buffer : Sample</th></tr></thead><tbody>
          <tr><td>Plasmid, genomic DNA (&gt;2 kb)</td><td>2 : 1</td></tr>
          <tr><td>PCR product, DNA fragment</td><td>5 : 1</td></tr>
        </tbody></table></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 3</span><strong>Gel excision</strong></summary>
        <p><strong>Purpose:</strong> recover a target DNA fragment from an agarose gel and remove the agarose and other unwanted fragments.</p>
        <div class="protocol-steps"><ol>
          <li>Excise the DNA fragment from the agarose gel using a scalpel and transfer it into a 1.5 ml microcentrifuge tube.</li>
          <li>Add 3 volumes of ADB to each volume of agarose excised from the gel.</li>
          <li>Incubate at 55 °C for 5&ndash;10 minutes until the gel slice is completely dissolved.</li>
          <li>Transfer the melted agarose solution to a Zymo-Spin&trade; column in a collection tube.</li>
          <li>Centrifuge at 13,000 rpm for 60 seconds. Discard the flow-through.</li>
          <li>Add 200 µl of DNA Wash Buffer to the column and centrifuge at 13,000 rpm for 60 seconds. Discard the flow-through.</li>
          <li>Add 200 µl of DNA Wash Buffer to the column and centrifuge at 13,000 rpm for 60 seconds. Discard the flow-through.</li>
          <li>Dry spin at 14,000 rpm for 2 minutes.</li>
          <li>Add 32 µl of ddH<sub>2</sub>O or water directly to the column matrix. Place the column into a 1.5 ml tube and centrifuge for 60 seconds to elute DNA.</li>
          <li>Keep the 1.5 ml tube and discard the spin column.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 4</span><strong>Inverse Phusion PCR</strong></summary>
        <p><strong>Purpose:</strong> amplify or linearize the plasmid using high-fidelity PCR to produce vector DNA for the planned construct.</p>
        <h5>Reaction mixture</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>5&times; Phusion HF Buffer / 5&times; Phusion GC Buffer *</td><td>6.0 µl</td></tr>
          <tr><td>10 mM dNTP</td><td>0.6 µl</td></tr>
          <tr><td>Primer 1</td><td>0.6 µl</td></tr>
          <tr><td>Primer 2</td><td>0.3 µl</td></tr>
          <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>22.01 µl</td></tr>
          <tr><td><strong>Total volume</strong></td><td><strong>30 µl</strong></td></tr>
        </tbody></table></div>
        <p class="protocol-source">* Choose the Phusion buffer according to your sample&rsquo;s GC percentage.</p>
        <h5>Thermocycle</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody>
          <tr><td>98 °C</td><td>30 seconds</td></tr>
          <tr><td>98 °C</td><td>10 seconds *</td></tr>
          <tr><td>61 °C (T<sub>M</sub>)</td><td>20 seconds *</td></tr>
          <tr><td>72 °C</td><td>1:45 minutes *</td></tr>
          <tr><td>72 °C</td><td>3 minutes</td></tr>
          <tr><td>4 °C</td><td>&infin;</td></tr>
        </tbody></table></div>
        <p class="protocol-source">* Repeat 30 cycles.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 5</span><strong>DpnI digestion</strong></summary>
        <p><strong>Purpose:</strong> remove methylated parental plasmid following amplification to reduce background from the starting template.</p>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>Plasmid (DNA template)</td><td>17.5 µl</td></tr>
          <tr><td>Buffer</td><td>2 µl</td></tr>
          <tr><td>DpnI</td><td>0.5 µl</td></tr>
          <tr><td><strong>Total volume</strong></td><td><strong>20 µl</strong></td></tr>
        </tbody></table></div>
        <h5>Thermocycle</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody>
          <tr><td>37 °C</td><td>2 hr</td></tr>
          <tr><td>4 °C</td><td>&infin;</td></tr>
        </tbody></table></div>
        <p class="protocol-source">Buffer = 10&times; CutSmart Buffer.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 6</span><strong>Phusion PCR for the MT constructs</strong></summary>
        <p><strong>Purpose:</strong> amplify the planned construct regions; in pVIS5&ndash;pVIS8, exclude the lpp-OmpA membrane-targeting sequence.</p>
        <h5>Phusion PCR for pVIS1, 2, 3, 4 &mdash; master mix reaction table</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>DNA template</td><td>3 µl</td></tr>
          <tr><td>5&times; Phusion HF Buffer</td><td>6 µl</td></tr>
          <tr><td>dNTP (10 mM)</td><td>0.6 µl</td></tr>
          <tr><td>Primer 1</td><td>0.3 µl</td></tr>
          <tr><td>Primer 2</td><td>0.3 µl</td></tr>
          <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>20.5 µl</td></tr>
          <tr><td><strong>Total volume</strong></td><td><strong>30 µl</strong></td></tr>
        </tbody></table></div>
        <h5>Specific thermocycle conditions</h5>
        <ul>
          <li>MT2, 3, 4 T<sub>M</sub>: 60.8 °C</li>
          <li>MT1 T<sub>M</sub>: 59.8 °C</li>
          <li>Cycling parameters: 98 °C (30 s); [98 °C (10 s), T<sub>M</sub> (20 s), 72 °C (30 s)] &times; 30 cycles; 72 °C (3 min); 4 °C (&infin;).</li>
        </ul>
        <h5>Phusion PCR for pVIS5, 6, 7, 8 &mdash; plasmid template dilution</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Plasmid template</th><th>Plasmid template</th><th>ddH<sub>2</sub>O</th></tr></thead><tbody>
          <tr><td>pVIS1</td><td>1 µl</td><td>10.6 µl</td></tr>
          <tr><td>pVIS2</td><td>1 µl</td><td>10 µl</td></tr>
          <tr><td>pVIS3</td><td>1 µl</td><td>13.81 µl</td></tr>
          <tr><td>pVIS4</td><td>1 µl</td><td>13.5 µl</td></tr>
        </tbody></table></div>
        <h5>Primer combination</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Plasmid template</th><th>Primer 1</th><th>Primer 2</th></tr></thead><tbody>
          <tr><td>pVIS1</td><td>VIS1p8</td><td>VIS1p9</td></tr>
          <tr><td>pVIS2</td><td>VIS1p8</td><td>VIS2p1</td></tr>
          <tr><td>pVIS3</td><td>VIS1p8</td><td>VIS3p1</td></tr>
          <tr><td>pVIS4</td><td>VIS1p8</td><td>VIS4p1</td></tr>
        </tbody></table></div>
        <p class="protocol-source">Each plasmid template is run as 2 samples.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 7</span><strong>Restriction enzyme digestion</strong></summary>
        <p><strong>Purpose:</strong> cut the vector and insert DNA with XbaI and SalI to produce compatible ends for ligation.</p>
        <h5>Reaction mixture</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume</th></tr></thead><tbody>
          <tr><td>DNA fragment</td><td>16 µl</td></tr>
          <tr><td>10&times; FD Green Buffer</td><td>2 µl</td></tr>
          <tr><td>XbaI</td><td>1 µl</td></tr>
          <tr><td>SalI</td><td>1 µl</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>20 µl</strong></td></tr>
        </tbody></table></div>
        <p class="protocol-source">37 °C for 2 h &rarr; 4 °C &infin;.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 8</span><strong>Ligation for pVIS1, 2, 3, 4</strong></summary>
        <p><strong>Purpose:</strong> join the vector and insert DNA for pVIS1&ndash;pVIS4.</p>
        <h5>Reaction mixture</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume / amount</th></tr></thead><tbody>
          <tr><td>Vector DNA</td><td>100 ng</td></tr>
          <tr><td>Insert DNA</td><td>3:1 molar ratio</td></tr>
          <tr><td>T4 DNA Ligase Buffer</td><td>2.0 µl</td></tr>
          <tr><td>T4 DNA Ligase</td><td>0.2 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>Up to 20 µl</td></tr>
          <tr><td><strong>Total volume</strong></td><td><strong>20 µl</strong></td></tr>
        </tbody></table></div>
        <h5>Thermocycle</h5>
        <ul>
          <li>16 °C for 14 hr</li>
          <li>37 °C for 1 hr</li>
          <li>4 °C for &infin;</li>
        </ul>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 9</span><strong>Ligation for pVIS5, 6, 7, 8</strong></summary>
        <p><strong>Purpose:</strong> circularize the modified plasmid after removal of the membrane-targeting sequence and purify the product.</p>
        <h5>Reaction mixture</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>Volume / amount</th></tr></thead><tbody>
          <tr><td>Digestion product</td><td>50 ng</td></tr>
          <tr><td>10&times; T4 DNA Ligase Buffer</td><td>5.0 µl</td></tr>
          <tr><td>PEG 4000 (50% w/v)</td><td>5.0 µl</td></tr>
          <tr><td>T4 DNA Ligase</td><td>1.0 µl</td></tr>
          <tr><td>T4 PNK</td><td>1.0 µl</td></tr>
          <tr><td>ddH<sub>2</sub>O</td><td>&mdash;</td></tr>
        </tbody></table></div>
        <p class="protocol-source">Note that for the DNA clean after ligation, elute the ligation product in 10 µl ddH<sub>2</sub>O.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 10</span><strong>Transformation via electroporation</strong></summary>
        <p><strong>Purpose:</strong> introduce constructed plasmid DNA into electrocompetent <em>E. coli</em> through an electrical pulse.</p>
        <div class="protocol-steps"><ol>
          <li>Combine 4 µl of target DNA construct with 40 µl of prepared electrocompetent cells in a cold electroporation cuvette.</li>
          <li>Apply an electrical pulse via the electroporation system at the settings below.</li>
          <li>Immediately add 800 µl warm SOC medium (SOB + glucose). Do not pipette.</li>
          <li>Transfer the suspension to a culture tube.</li>
          <li>Incubate at 37 °C with shaking (225 rpm) for 1 hour.</li>
        </ol></div>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Setting</th><th>Value</th></tr></thead><tbody>
          <tr><td>Voltage (V)</td><td>1800</td></tr>
          <tr><td>Capacitance (µF)</td><td>25</td></tr>
          <tr><td>Resistance (&Omega;)</td><td>200</td></tr>
          <tr><td>Cuvette (mm)</td><td>1</td></tr>
        </tbody></table></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 11</span><strong>Agarose gel: casting, loading and running</strong></summary>
        <p><strong>Purpose:</strong> separate DNA fragments by size to check PCR, digestion and screening products.</p>
        <h5>Cast gel</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Tray and comb</th><th>TAE buffer</th><th>SafeView&trade; stain</th><th>Agarose (1%)</th><th>Agarose (2%)</th></tr></thead><tbody>
          <tr><td>7&times;7 cm, 8-pin comb</td><td>22 mL</td><td>2 µl</td><td>0.22 g</td><td>0.44 g</td></tr>
          <tr><td>16&times;7 cm, 26-pin comb</td><td>45 mL</td><td>4 µl</td><td>0.45 g</td><td>0.9 g</td></tr>
          <tr><td>16&times;10 cm, two 26-pin combs</td><td>60 mL</td><td>8 µl</td><td>0.60 g</td><td>1.20 g</td></tr>
        </tbody></table></div>
        <div class="protocol-steps"><ol>
          <li>Place the mixture of TAE buffer and agarose in the microwave until it fully dissolves.</li>
          <li>Balance the gel tray.</li>
          <li>Add the corresponding amount of nucleic acid gel stain to the gel tray.</li>
          <li>Pour the fully dissolved mixture into the gel tray.</li>
          <li>Stir the mixture until the nucleic acid gel stain is fully dissolved.</li>
          <li>Attach the comb to the gel tray.</li>
          <li>Leave the gel to set for at least 30 minutes.</li>
        </ol></div>
        <h5>Load gel</h5>
        <div class="protocol-steps"><ol>
          <li>Carefully take up the comb without breaking the gel.</li>
          <li>Load 5 µl of ladder at the start and end of the sample. Choose the ladder based on the base-pair size of the sample:
            <ol class="protocol-substeps">
              <li>Omics 1 kb DNA RTU (Ready-to-Use) Ladder &mdash; use for samples from 0.5 kb to 10 kb.</li>
              <li>Bioman 100 bp DNA Ladder/Marker (Ready to use) &mdash; use for samples from 50 bp to 1 kb.</li>
            </ol>
          </li>
          <li>Mix 1 µl of Omics-Bio 6&times; Nucleic Acid Load Buffer with 5 µl of sample.</li>
          <li>Load the mixture from step 2 into the well where the comb was originally placed.</li>
        </ol></div>
        <h5>Run gel</h5>
        <ul>
          <li>130 mV for 18 minutes</li>
        </ul>
      </details>
      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 12</span><strong>Dilution and plating (aseptic spreading)</strong></summary>
        <p><strong>Purpose:</strong> spread transformed bacteria on selective agar to obtain isolated colonies for downstream screening.</p>
        <div class="protocol-steps"><ol>
          <li>Dip the cell spreader through a flame and cool it in ethanol.</li>
          <li>Pass through the flame to ensure the ethanol is burned off and the spreader is dry.</li>
          <li>Pipette 40 µl of the undiluted mixture onto a kanamycin (LB+Km) agar plate.</li>
          <li>Repeat the spreader sterilization.</li>
          <li>Pipette 40 µl of the 10<sup>&minus;1</sup> diluted sample (10 µl culture + 90 µl 0.9% saline) onto an LB+Km plate.</li>
          <li>Incubate overnight at 37 °C.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 13</span><strong>Colony PCR screening</strong></summary>
        <p><strong>Purpose:</strong> screen transformed colonies using PCR to identify candidates with the expected DNA construct. Transformants are screened directly from culture plates, so a colony does not have to be picked a day in advance.</p>
        <div class="protocol-steps"><ol>
          <li>Grid setup: pick 16 colonies from the <em>E. coli</em> EK317 + MT1 transformant plate onto a mapped 16-grid plate (U3 + KM).</li>
          <li>Template prep: touch the selected colony with a sterile pipette tip and resuspend in 10 ml sterile water (ddH<sub>2</sub>O). Heat the sample at 96 °C for 12 minutes.</li>
        </ol></div>
        <h5>Taq reaction mixture (master mix)</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Component</th><th>1&times;</th><th>18&times;</th></tr></thead><tbody>
          <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>&mdash;</td></tr>
          <tr><td>10&times; Buffer</td><td>1.5 µl</td><td>27 µl</td></tr>
          <tr><td>DMSO</td><td>0.6 µl</td><td>10.8 µl</td></tr>
          <tr><td>10 mM dUTP</td><td>0.3 µl</td><td>5.4 µl</td></tr>
          <tr><td>50 mM Primer 1 (TKO7 P1)</td><td>0.09 µl</td><td>1.62 µl</td></tr>
          <tr><td>50 mM Primer 2 (PU12 P2)</td><td>0.09 µl</td><td>1.62 µl</td></tr>
          <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.26 µl</td></tr>
          <tr><td><strong>Total volume</strong></td><td><strong>14 µl</strong></td><td><strong>252 µl</strong></td></tr>
        </tbody></table></div>
        <h5>Thermocycle</h5>
        <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Temperature</th><th>Time</th><th>Cycles</th></tr></thead><tbody>
          <tr><td>94 °C</td><td>2 m</td><td>1</td></tr>
          <tr><td>94 °C</td><td>30 s</td><td>35</td></tr>
          <tr><td>57.6 °C (T<sub>M</sub>)</td><td>10 s</td><td>35</td></tr>
          <tr><td>72 °C</td><td>2 m</td><td>35</td></tr>
          <tr><td>72 °C</td><td>3 m 30 s</td><td>1</td></tr>
          <tr><td>4 °C</td><td>&infin;</td><td>&mdash;</td></tr>
        </tbody></table></div>
        <p class="protocol-source">Source note, reproduced as recorded: &ldquo;Take W of sample and 14 ml of master mix.&rdquo;</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 14</span><strong>Colony propagation</strong></summary>
        <p><strong>Purpose:</strong> propagate bacteria from selected colonies for follow-up verification or plasmid preparation.</p>
        <div class="protocol-steps"><ol>
          <li>Use an inoculating loop and pick up the bacteria from the grid plate.</li>
          <li>Cover the plate with bacteria using the inoculating loop, entirely or partially depending on sample distribution.</li>
          <li>Incubate at 37 °C overnight.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 15</span><strong>Sequencing preparation</strong></summary>
        <p><strong>Purpose:</strong> grow selected isolates and prepare sequencing primers so that the plasmid sequence can be checked.</p>
        <div class="protocol-steps"><ol>
          <li>Use an inoculating loop and pick up the bacteria from the grid plate.</li>
          <li>Draw a line using the loop on the plate with LB medium.</li>
          <li>Incubate the plate overnight at 37 °C.</li>
          <li>Primer : ddH<sub>2</sub>O = 2 µl : 8 µl. A total of 10 µl per sample is sent for sequencing.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 16</span><strong>Bacterial cultivation</strong></summary>
        <p><strong>Purpose:</strong> grow plasmid-free cells ahead of a transformation planned for the following day.</p>
        <ul>
          <li>Strain: <em>E. coli</em> Ek317.</li>
          <li>Medium: 2,000 µl of SOB inoculated with a tiny amount of Ek317.</li>
          <li>Conditions: shaker at 37 °C, 225 rpm.</li>
        </ul>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 17</span><strong>Preparation of electrocompetent cells</strong></summary>
        <p><strong>Purpose:</strong> prepare electrocompetent <em>E. coli</em> by growing cells to the desired phase, chilling them and performing repeated cold, low-salt washes.</p>
        <div class="protocol-steps"><ol>
          <li>Inoculation and subculture: transfer 0.25 mL of overnight culture into 50 mL of SOB medium. Incubate for about 2 hours until reaching mid-log exponential phase (OD &asymp; 0.6).</li>
          <li>Chilling: transfer the culture into a 50 mL conical tube and incubate on ice for 10 min.</li>
          <li>Wash series 1: centrifuge at 9,000 rpm for 10 min at 4 °C. Discard the supernatant. Resuspend the cell pellet in 3 mL cold ddH<sub>2</sub>O + 47 mL ddH<sub>2</sub>O.</li>
          <li>Wash series 2: repeat twice. Centrifuge at 9,000 rpm for 10 min at 4 °C. Discard the supernatant. Resuspend the pellet in 3 mL cold ddH<sub>2</sub>O, then add 12 mL ddH<sub>2</sub>O.</li>
          <li>Wash series 3: centrifuge at 9,000 rpm for 10 min at 4 °C. Discard the supernatant.</li>
          <li>Final resuspension and aliquoting: add 200 ddH<sub>2</sub>O to concentrate the cells. Aliquot 40 per tube into 5 &times; 1.5 mL microcentrifuge tubes and keep on ice.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 18</span><strong>0.9% saline</strong></summary>
        <p><strong>Purpose:</strong> prepare sterile saline for the dilution step before plating.</p>
        <ul>
          <li>0.45 g of NaCl</li>
          <li>Up to 50 mL of ddH<sub>2</sub>O</li>
        </ul>
        <p class="protocol-source">Conducted in a laminar flow cabinet. Use a membrane filter to sterilize the 0.9% saline.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 19</span><strong>LB medium and medium without NaCl</strong></summary>
        <p><strong>Purpose:</strong> prepare standard LB and a medium without added NaCl for the indicated culture and testing conditions.</p>
        <h5>LB medium</h5>
        <ul>
          <li>Sodium chloride 10 g</li>
          <li>Bacto tryptone 10 g</li>
          <li>Bacto yeast extract 5 g</li>
          <li>ddH<sub>2</sub>O, up to 1 L</li>
        </ul>
        <h5>Medium without NaCl</h5>
        <ul>
          <li>Bacto tryptone 3.5 g</li>
          <li>Bacto yeast extract 3.5 g</li>
          <li>ddH<sub>2</sub>O, up to 350 ml</li>
        </ul>
        <p class="protocol-source">Put the medium in the autoclave for sterilization.</p>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 20</span><strong>Glycerol stock</strong></summary>
        <p><strong>Purpose:</strong> prepare bacterial stock material for later recovery and continued testing.</p>
        <h5>Material</h5>
        <ul>
          <li>1 mL of 0.9% saline</li>
          <li>87 µl of DMSO</li>
          <li>Glycerol stock vial</li>
          <li>Bacteria</li>
        </ul>
        <div class="protocol-steps"><ol>
          <li>Use an inoculating loop and pick up the bacteria from the plate.</li>
          <li>Vortex the vial until the bacteria are fully dissolved.</li>
        </ol></div>
      </details>

      <details class="experiment-log-entry">
        <summary><span class="experiment-log-date">Protocol 21</span><strong>SOC medium</strong></summary>
        <p><strong>Purpose:</strong> prepare glucose-supplemented SOB (SOC) medium for bacterial recovery or culture.</p>
        <p>Super Optimal Broth with Catabolite repression = Super Optimal Broth (SOB) + glucose.</p>
        <ul>
          <li>25 mL of SOB</li>
          <li>303 µl of glucose</li>
        </ul>
      </details>

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
