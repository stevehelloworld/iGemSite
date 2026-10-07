<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / PARTS</p>
    <h2>The parts behind Cadture</h2>
    <p class="experiment-lead">Cadture is built from one sensor backbone and four metallothionein coding sequences, combined into eight plasmids. Every insert follows the same cassette layout, so the only intended difference between constructs is which metallothionein is carried and whether it is displayed on the cell surface.</p>
    <div class="experiment-tag-row" aria-label="Part types"><span>Sensor backbone</span><span>Lpp-OmpA display</span><span>Four MT coding sequences</span><span>Eight plasmids</span></div>
  </div>

  <section class="experiment-flow-panel" aria-labelledby="cassette-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Cassette layout</p><h3 id="cassette-title">Every insert is built the same way</h3><p>All four inserts share an identical arrangement, confirmed from the construct sequence files. Only the metallothionein coding region differs between them.</p></div>
    <div class="experiment-flow-diagram">
      <div class="experiment-flow-node"><span>1</span><h4>SalI</h4><p>Restriction site at the 5' end, three bases in.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>2</span><h4>RBS</h4><p>An AGGAGG ribosome binding site ahead of the start codon.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>3</span><h4>Lpp-OmpA</h4><p>A 131-amino-acid display anchor, identical in all four inserts.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>4</span><h4>MT domain</h4><p>The cysteine-rich metallothionein that binds cadmium.</p></div><div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node"><span>5</span><h4>XbaI</h4><p>Stop codon followed by the 3' restriction site.</p></div>
    </div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="mt-insert-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Coding sequences</p><h3 id="mt-insert-title">The four metallothionein inserts</h3><p>Lengths and cysteine counts below were measured directly from the construct sequence files. The amino-acid counts are for the full Lpp-OmpA–MT fusion; the MT domain column is the part that follows the shared 131-residue anchor.</p></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Label</th><th>Gene</th><th>Source organism</th><th>Insert (bp)</th><th>Fusion (aa)</th><th>MT domain (aa)</th><th>Cysteines in MT domain</th></tr></thead><tbody>
      <tr><td>MT1</td><td>IaMT2</td><td>Water spinach (<em>Ipomoea aquatica</em>)</td><td>657</td><td>206</td><td>75</td><td>14</td></tr>
      <tr><td>MT2</td><td>SmtA</td><td>Cyanobacterium (<em>Synechococcus elongatus</em>)</td><td>597</td><td>186</td><td>55</td><td>9</td></tr>
      <tr><td>MT3</td><td>EGR_09832</td><td>Tapeworm (<em>Echinococcus granulosus</em>)</td><td>951</td><td>304</td><td>173</td><td>12</td></tr>
      <tr><td>MT4</td><td>OsMTI-1b</td><td>Rice (<em>Oryza sativa</em>)</td><td>645</td><td>202</td><td>71</td><td>12</td></tr>
    </tbody></table></div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Backbone</p><h3>pMH45, the sensor our parts build on</h3></div>
    <div class="experiment-section-layout"><article class="experiment-section-copy">
      <p>Every construct starts from pMH45, a cadmium-responsive sensor plasmid carrying a regulator that drives GFP from the Preg14 promoter, the ZitB transporter, and the Lpp-OmpA display scaffold, on a pSC101 origin with kanamycin selection.</p>
      <p>Each metallothionein is placed into loop 3 of the OmpA display scaffold, so a pVIS plasmid differs from pMH45 only by the metallothionein it carries. That makes pMH45 the isogenic control for every comparison on the <a href="results">Results</a> page.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Why one backbone</span><small>Holding the sensor constant isolates the effect of the metallothionein itself</small></div></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="plasmid-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Plasmids</p><h3 id="plasmid-title">Eight constructs in two sets</h3><p>pVIS1 through pVIS4 display their metallothionein on the cell surface. pVIS5 through pVIS8 were rebuilt from those four by amplifying around the Lpp-OmpA anchor so that it is left out, which keeps the metallothionein inside the cell.</p></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Plasmid</th><th>Metallothionein</th><th>Lpp-OmpA anchor</th><th>Built from</th></tr></thead><tbody>
      <tr><td>pMH45</td><td>None (sensor only)</td><td>Scaffold present, no MT</td><td>pJL14 + zitB</td></tr>
      <tr><td>pVIS1</td><td>IaMT2 (MT1)</td><td>Present, surface displayed</td><td>pMH45</td></tr>
      <tr><td>pVIS2</td><td>SmtA (MT2)</td><td>Present, surface displayed</td><td>pVIS1</td></tr>
      <tr><td>pVIS3</td><td>EGR_09832 (MT3)</td><td>Present, surface displayed</td><td>pVIS1</td></tr>
      <tr><td>pVIS4</td><td>OsMTI-1b (MT4)</td><td>Present, surface displayed</td><td>pVIS1</td></tr>
      <tr><td>pVIS5–pVIS8</td><td>Individual assignment not recorded</td><td>Removed, kept inside the cell</td><td>pVIS1–pVIS4</td></tr>
    </tbody></table></div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Sources</p><h3>Where each sequence came from</h3></div>
    <div class="experiment-section-layout"><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Sequence records</span><small>Database accessions consulted while choosing the four metallothioneins</small></div><article class="experiment-section-copy">
      <p>The four metallothioneins were shortlisted from published records before cloning. IaMT2 came from GenBank <strong>MG471388.1</strong>, SmtA from <em>Synechococcus elongatus</em> PCC 7942 (GenBank <strong>CP130602.1</strong>, cross-checked against <strong>X64585.1</strong>), EGR_09832 from <strong>XM_024499081.1</strong>, and OsMTI-1b from protein record <strong>NP_001404492.1</strong>.</p>
      <p>Two of the four already had entries in the iGEM Registry when we selected them: <strong>BBa_K2578200</strong> for SmtA and <strong>BBa_K5205000</strong> for OsMTI-1b. Our own Registry submissions are still being prepared, so this page records the constructs as built rather than as deposited parts.</p>
    </article></div>
  </section>
</section>
