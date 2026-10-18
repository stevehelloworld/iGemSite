<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / MEASUREMENTS</p>
    <h2>Building and verifying the constructs</h2>
    <p class="experiment-lead">This page covers whether the plasmids were built correctly: how many colonies were screened, how many rounds it took, and what the sequencing returned. How the finished constructs behave under cadmium is on the <a href="results">cadmium response</a> page.</p>
    <div class="experiment-tag-row" aria-label="Verification steps"><span>Colony PCR</span><span>Four build rounds</span><span>Sanger sequencing</span><span>Nine reads</span></div>
  </div>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Summary</p><h3>One construct worked first time, three took four rounds</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>pVIS1 was assembled and screened successfully in the first attempt, and glycerol stocks of colonies #2, #9 and #15 were banked on 28 July. pVIS2, pVIS3 and pVIS4 are built on the pVIS1 backbone, and those three needed four separate ligation and transformation rounds between 29 June and 4 August before sequencing confirmed them.</p>
      <p>The repeated failures were not one problem. A July review traced poor colony PCR amplification to too much biomass being carried into the template prep; a later round found that the HF-buffer and GC-buffer plasmid preparations were at different concentrations, which invalidated a volume assumption used in the ligation setup.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Screening effort</span><small>Over 100 colonies gridded and picked across the four rounds</small></div></div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Starting material</p><h3>The vector linearised cleanly in both buffers</h3></div>
    <div class="experiment-section-layout"><figure class="gel-figure"><img src="static/assets/images/gels/0623-inverse-pcr-pmh45.webp" alt="Agarose gel of the 23 June inverse PCR. A DNA ladder lane sits beside the VIS1 HF and VIS1 GC lanes, both showing a single strong band level with the 6,000 bp marker." loading="lazy"><figcaption>23 June &middot; inverse PCR of pMH45, with the 6,000 bp position marked on the gel</figcaption></figure><article class="experiment-section-copy">
      <p>The first result of the project was the inverse PCR that opens the pMH45 backbone. The 23 June gel was run with the product from both the HF-buffer and the GC-buffer reaction, labelled VIS1 HF and VIS1 GC, against a DNA ladder.</p>
      <p>Both lanes gave a single strong band at approximately 6,000 bp, which is the expected size for the linearised plasmid, and neither showed a smear or a second product. That confirmed the vector was usable from either buffer, and both preparations were carried forward &mdash; a choice that mattered later, because the two preparations turned out to be at different concentrations.</p>
    </article></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="screen-log-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Screening record</p><h3 id="screen-log-title">Colony PCR, day by day</h3><p>Each screen used primers TK07 P1 and PU12 P2, with MT1 colonies included as a positive control on every plate. The outcome column records what was read off the gel at the time.</p></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Date</th><th>Screened</th><th>Outcome</th></tr></thead><tbody>
      <tr><td>2 July</td><td>MT1 &times; 16</td><td>Product obtained across most of the 16 colonies, giving the first usable construct</td></tr>
      <tr><td>6 July</td><td>MT2</td><td>No amplicon. The team recorded the run as unsuccessful and decided to pick more colonies and cut back the MT3 and MT4 screens</td></tr>
      <tr><td>9 July</td><td>MT2 &times; 16, MT3 &times; 16, MT4 &times; 16, MT1 &times; 2</td><td>Screened on one 52-reaction master mix; no usable product for MT2, MT3 or MT4</td></tr>
      <tr><td>13 July</td><td>MT2 &times; 16, MT1 &times; 2</td><td>Failed again. Root-cause review identified excessive biomass carried into the template preparation</td></tr>
      <tr><td>14 July</td><td>MT2 &times; 16, MT1 &times; 2</td><td>MT1 control succeeded; MT2 failed</td></tr>
      <tr><td>15 July</td><td>MT3 &times; 16, MT1 &times; 2</td><td>No results observed</td></tr>
      <tr><td>16 July</td><td>MT4 &times; 16, MT1 &times; 2</td><td>No usable product. Decision taken to redo the ligations for MT2, MT3 and MT4</td></tr>
      <tr><td>23&ndash;24 July</td><td>43 colonies (PVIS2 &times; 13, PVIS3 &times; 15, PVIS4 &times; 15)</td><td>Screened over two days after the six-way HF/GC ligation round</td></tr>
      <tr><td>31 July</td><td>24 colonies (8 each of PVIS2, PVIS3, PVIS4)</td><td>Screened from the third transformation round</td></tr>
    </tbody></table></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>The pattern across these nine screens is the useful result: the MT1 control amplified on essentially every plate while MT2, MT3 and MT4 did not, which separates a problem with the colony-PCR reaction from a problem with the constructs themselves. Because the control worked, the reaction conditions were sound, and attention moved to the ligation and transformation steps &mdash; which is what the 28 July restart and the 3 August rebuild addressed.</p>
    </article></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="round-table-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Build rounds</p><h3 id="round-table-title">What each round produced</h3><p>Every round followed the same cycle of ligation, electroporation, plating and colony PCR. The outcome column records what was observed at the screening gel, as logged in the <a href="notebook">notebook</a>.</p></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Round</th><th>Ligation</th><th>Screened</th><th>Constructs</th><th>Outcome</th></tr></thead><tbody>
      <tr><td>1</td><td>29 June</td><td>2–16 July</td><td>MT1, MT3, MT4</td><td>MT1 screening succeeded on 14 July; MT2 failed and no usable result was seen for MT3 or MT4</td></tr>
      <tr><td>2</td><td>20 July</td><td>21–22 July</td><td>MT2, MT3, MT4</td><td>No colonies grew on any plate from the 21 July transformation</td></tr>
      <tr><td>3</td><td>22 July</td><td>23–24 July</td><td>MT2, MT3, MT4</td><td>Six ligations testing HF- against GC-buffer plasmid; 43 colonies gridded and all screened across two days</td></tr>
      <tr><td>4</td><td>30 July</td><td>31 July</td><td>MT2, MT3, MT4</td><td>20 colonies gridded per construct, first eight of each screened</td></tr>
      <tr><td>Rebuild</td><td>3 August</td><td>4 August</td><td>MT2, MT3, MT4</td><td>Constructs remade from freshly extracted plasmid and sent for sequencing</td></tr>
    </tbody></table></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="seq-table-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Sequencing</p><h3 id="seq-table-title">Nine reads, eight of them the intended insert</h3><p>Each colony was sequenced from primer PU12p2, returning a 1,050 bp read. We identified each read by matching it against the four reference insert sequences; the identity column is the reference that matched, and every read matched one of the four unambiguously.</p></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Colony</th><th>Intended insert</th><th>Read identity</th><th>Verdict</th></tr></thead><tbody>
      <tr><td>pVIS2 #1</td><td>SmtA</td><td>SmtA</td><td>Correct (re-sequenced)</td></tr>
      <tr><td>pVIS2 #2</td><td>SmtA</td><td>IaMT2</td><td>Wrong insert — carries the parent's MT1</td></tr>
      <tr><td>pVIS2 #3</td><td>SmtA</td><td>SmtA</td><td>Correct</td></tr>
      <tr><td>pVIS2 #8</td><td>SmtA</td><td>SmtA</td><td>Correct — taken forward</td></tr>
      <tr><td>pVIS3 #3</td><td>EGR_09832</td><td>EGR_09832</td><td>Correct</td></tr>
      <tr><td>pVIS3 #6</td><td>EGR_09832</td><td>EGR_09832</td><td>Correct — taken forward</td></tr>
      <tr><td>pVIS3 #7</td><td>EGR_09832</td><td>EGR_09832</td><td>Flagged by the facility as multiple templates</td></tr>
      <tr><td>pVIS3 #8</td><td>EGR_09832</td><td>EGR_09832</td><td>Correct</td></tr>
      <tr><td>pVIS4 #1</td><td>OsMTI-1b</td><td>OsMTI-1b</td><td>Correct — taken forward</td></tr>
    </tbody></table></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="gel-gallery-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Gels</p><h3 id="gel-gallery-title">The screening gels</h3><p>Every screening gel from the construction work, in order. All were run against a DNA ladder, and the MT1 positive control appears on most plates. They are reproduced in greyscale because the originals were photographed under UV illumination, where the bands read more clearly without the orange cast.</p></div>
    <div class="experiment-grid gel-grid">
      <figure class="gel-card">
        <img src="static/assets/images/gels/0630-mt2-pcr.webp" alt="Agarose gel from 30 June: MT2 insert PCR. Amplification of the MT2 insert before digestion." loading="lazy">
        <figcaption><strong>30 June</strong><span>MT2 insert PCR</span><small>Amplification of the MT2 insert before digestion</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0702-colony-pcr-mt1.webp" alt="Agarose gel from 2 July: Colony PCR, MT1 x 16. The screen that produced the first usable construct." loading="lazy">
        <figcaption><strong>2 July</strong><span>Colony PCR, MT1 &times; 16</span><small>The screen that produced the first usable construct</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0706-colony-pcr-mt3.webp" alt="Agarose gel from 6 July: Colony PCR, MT3. No amplicon at the expected size." loading="lazy">
        <figcaption><strong>6 July</strong><span>Colony PCR, MT3</span><small>No amplicon at the expected size</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0706-colony-pcr-mt4.webp" alt="Agarose gel from 6 July: Colony PCR, MT4. No amplicon at the expected size." loading="lazy">
        <figcaption><strong>6 July</strong><span>Colony PCR, MT4</span><small>No amplicon at the expected size</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0709-colony-pcr-mt2-mt3.webp" alt="Agarose gel from 9 July: Colony PCR, MT2 and MT3. Part of the 52-reaction screen across all three constructs." loading="lazy">
        <figcaption><strong>9 July</strong><span>Colony PCR, MT2 and MT3</span><small>Part of the 52-reaction screen across all three constructs</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0709-colony-pcr-mt3-mt4.webp" alt="Agarose gel from 9 July: Colony PCR, MT3 and MT4, MT1 control. Part of the 52-reaction screen across all three constructs." loading="lazy">
        <figcaption><strong>9 July</strong><span>Colony PCR, MT3 and MT4, MT1 control</span><small>Part of the 52-reaction screen across all three constructs</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0713-colony-pcr-mt2.webp" alt="Agarose gel from 13 July: Colony PCR, MT2, MT1 control. The run that prompted the template-preparation review." loading="lazy">
        <figcaption><strong>13 July</strong><span>Colony PCR, MT2, MT1 control</span><small>The run that prompted the template-preparation review</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0714-colony-pcr-mt2.webp" alt="Agarose gel from 14 July: Colony PCR, MT2, MT1 control. MT1 control amplified; MT2 did not." loading="lazy">
        <figcaption><strong>14 July</strong><span>Colony PCR, MT2, MT1 control</span><small>MT1 control amplified; MT2 did not</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0715-colony-pcr-mt3-mt4.webp" alt="Agarose gel from 15 July: Colony PCR, MT3 and MT4, MT1 control. No results observed." loading="lazy">
        <figcaption><strong>15 July</strong><span>Colony PCR, MT3 and MT4, MT1 control</span><small>No results observed</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0716-colony-pcr-mt3-mt4.webp" alt="Agarose gel from 16 July: Colony PCR, MT3 and MT4, MT1 control. The screen after which the ligations were redone." loading="lazy">
        <figcaption><strong>16 July</strong><span>Colony PCR, MT3 and MT4, MT1 control</span><small>The screen after which the ligations were redone</small></figcaption>
      </figure>
      <figure class="gel-card">
        <img src="static/assets/images/gels/0723-colony-pcr-mt2-mt3-mt4.webp" alt="Agarose gel from 23 July: Colony PCR, MT2, MT3 and MT4. First screen of the six-way HF/GC ligation round." loading="lazy">
        <figcaption><strong>23 July</strong><span>Colony PCR, MT2, MT3 and MT4</span><small>First screen of the six-way HF/GC ligation round</small></figcaption>
      </figure>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Interpretation</p><h3>Why one colony carried the wrong metallothionein</h3></div>
    <div class="experiment-section-layout"><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Background clones</span><small>Intact parent plasmid survives and transforms alongside the intended ligation</small></div><article class="experiment-section-copy">
      <p>pVIS2, pVIS3 and pVIS4 all use pVIS1 as their vector, and pVIS1 already carries the IaMT2 insert. Colony pVIS2 #2 returned the IaMT2 sequence rather than SmtA, which is what a surviving parent plasmid looks like: template that escaped linearisation or DpnI digestion, re-circularised and transformed, giving a kanamycin-resistant colony with the old insert still in place.</p>
      <p>That is a useful thing to know rather than a wasted plate. It means a colony growing on selection is not evidence that the new insert is present, and it is consistent with the colony-PCR rounds that produced bands without producing the construct we wanted. Only sequencing separated the two cases, which is why all three constructs were sequenced before being carried into the pVIS5–8 build.</p>
    </article></div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Outcome</p><h3>The clones taken forward</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>Four verified clones were carried into the next build: pVIS1 #2, pVIS2 #8, pVIS3 #6 and pVIS4 #1. These are the plasmids that were re-amplified to leave out the Lpp-OmpA anchor and produce pVIS5–pVIS8, and they are the same constructs measured on the <a href="results">cadmium response</a> page.</p>
      <p>Sequencing covered pVIS2, pVIS3 and pVIS4 only. pVIS1 was confirmed by colony PCR and banked as a glycerol stock in July rather than being sequenced in this batch, so its insert has not been verified by sequence here.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Into the next round</span><small>pVIS1 #2 · pVIS2 #8 · pVIS3 #6 · pVIS4 #1</small></div></div>
  </section>
</section>
