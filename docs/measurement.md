<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / RESULTS</p>
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
