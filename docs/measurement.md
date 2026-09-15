<article class="student-lab-page measurement-textbook" aria-labelledby="measurement-preview-title">
  <header class="lab-page-intro">
    <div>
      <span class="mock-data-stamp">MOCK DATA · UI PREVIEW</span>
      <p class="lab-book-label">Wet Lab Field Guide · Chapter 04</p>
      <h2 id="measurement-preview-title">How do we know the sensor works?</h2>
      <p class="lab-page-lead">Read the experiment like a textbook: begin with the color change, build a calibration curve, then decide whether an unknown sample can be trusted.</p>
    </div>
    <aside class="lab-margin-note"><strong>Question for this page</strong><span>Does the signal rise when Cd²⁺ concentration increases?</span></aside>
  </header>

  <section class="lesson-spread" aria-labelledby="measurement-principle">
    <div class="lesson-copy">
      <span class="pencil-label">The principle</span>
      <h3 id="measurement-principle">Concentration becomes a visible signal</h3>
      <p>Known cadmium concentrations give us reference points. After the reaction, the plate reader turns each color intensity into an absorbance value. Those points become a standard curve for estimating an unknown sample.</p>
      <p class="lab-question">If the blank is not near zero, what might have contaminated the run?</p>
    </div>
    <figure class="measurement-process" aria-label="Diagram of the measurement principle">
      <div class="sample-tubes"><i></i><i></i><i></i><i></i><i></i></div>
      <span class="process-arrow" aria-hidden="true">→</span>
      <div class="well-plate" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <span class="process-arrow" aria-hidden="true">→</span>
      <div class="mini-curve" aria-hidden="true"><span></span></div>
      <figcaption>Known samples → measured color → calibration curve</figcaption>
    </figure>
  </section>

  <section class="experiment-walkthrough" aria-labelledby="measurement-walkthrough">
    <div class="section-hand-title"><span>Try the experiment</span><h3 id="measurement-walkthrough">One run, four checkpoints</h3></div>
    <ol>
      <li><span>1</span><div><strong>Prepare standards</strong><p>Make a concentration series from 0.00 to 1.00 μM Cd²⁺.</p></div></li>
      <li><span>2</span><div><strong>Add the reporter</strong><p>Use the same volume and reaction time for every well.</p></div></li>
      <li><span>3</span><div><strong>Read absorbance</strong><p>Measure each concentration in replicate and record the mean.</p></div></li>
      <li><span>4</span><div><strong>Check the curve</strong><p>Confirm the trend, blank, replicates, and R² before using it.</p></div></li>
    </ol>
  </section>

  <section class="result-spread" aria-labelledby="measurement-result">
    <figure class="textbook-graph">
      <div class="graph-heading"><span>Mock result</span><strong>Cadmium response curve</strong></div>
      <svg viewBox="0 0 620 300" role="img" aria-label="Mock calibration curve increasing with cadmium concentration">
        <path class="graph-axis" d="M64 28V248H590"/>
        <path class="graph-guide" d="M64 198H590M64 148H590M64 98H590M164 28V248M264 28V248M364 28V248M464 28V248M564 28V248"/>
        <path class="graph-line" d="M72 230L164 211L264 183L364 143L464 96L564 48"/>
        <g class="graph-points"><circle cx="72" cy="230" r="7"/><circle cx="164" cy="211" r="7"/><circle cx="264" cy="183" r="7"/><circle cx="364" cy="143" r="7"/><circle cx="464" cy="96" r="7"/><circle cx="564" cy="48" r="7"/></g>
        <g class="graph-labels"><text x="60" y="275">0.00</text><text x="151" y="275">0.05</text><text x="251" y="275">0.10</text><text x="351" y="275">0.25</text><text x="451" y="275">0.50</text><text x="548" y="275">1.00 μM</text></g>
      </svg>
      <figcaption>Illustrative values only. Final figures will use measured data, error bars, sample size, and a fitted equation.</figcaption>
    </figure>

    <aside class="result-checks">
      <span class="pencil-label">Can we trust it?</span>
      <h3 id="measurement-result">Read the evidence, not one big number</h3>
      <dl>
        <div><dt>Blank</dt><dd>0.04 AU <small>close to baseline</small></dd></div>
        <div><dt>Replicates</dt><dd>18 / 20 <small>two need review</small></dd></div>
        <div><dt>Calibration</dt><dd>R² = 0.987 <small>mock fit</small></dd></div>
        <div><dt>Next check</dt><dd>Repeat 0.50 μM <small>confirm consistency</small></dd></div>
      </dl>
    </aside>
  </section>
</article>
