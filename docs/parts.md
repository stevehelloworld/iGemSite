<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / PARTS</p>
    <h2>The parts behind Cadture</h2>
    <p class="experiment-lead">Cadture is built from one cadmium-responsive sensor backbone and four metallothionein coding sequences. pVIS1&ndash;4 were designed for surface display; pVIS5&ndash;8 were derived by removing the Lpp-OmpA anchor while retaining the corresponding MT coding sequence. The second set was intended as an intracellular-MT comparison, but localization was not directly tested.</p>
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
      <p>For pVIS1&ndash;4, each metallothionein coding sequence was inserted into loop 3 of the OmpA display scaffold. pVIS5&ndash;8 were later derived by deleting the Lpp-OmpA anchor while retaining the matching MT sequence. pMH45 is the same-plate sensor control used in the comparisons on the <a href="results">Results</a> page.</p>
    </article><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Why one backbone</span><small>Holding the sensor constant isolates the effect of the metallothionein itself</small></div></div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="plasmid-title">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">Plasmids</p><h3 id="plasmid-title">Eight constructs in two sets</h3><p>pVIS1 through pVIS4 include the Lpp-OmpA display anchor. pVIS5 through pVIS8 were derived from the corresponding first-set construct by amplifying around and removing that anchor; the MT coding sequence was retained. This design was intended to compare anchor-present and anchor-deleted variants. The deleted-anchor design alone does not prove the location or expression of the MT protein.</p></div>
    <figure class="experiment-figure-panel">
      <a href="static/assets/images/parts/wet-design-workflow.webp" target="_blank" rel="noopener" aria-label="Open the full wet-lab design workflow diagram">
        <img src="static/assets/images/parts/wet-design-workflow.webp" alt="Wet-lab construct workflow showing the pMH45 backbone, assembly of four metallothionein constructs, and later removal of the Lpp-OmpA anchor to make pVIS5 through pVIS8" loading="lazy">
      </a>
      <figcaption>Wet-lab design and build workflow, reproduced from the team&rsquo;s design diagram. Plasmid maps were generated with SnapGene.</figcaption>
    </figure>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Plasmid</th><th>Metallothionein</th><th>Lpp-OmpA anchor</th><th>Built from</th></tr></thead><tbody>
      <tr><td>pMH45</td><td>None (sensor only)</td><td>Scaffold present, no MT</td><td>pJL14 + zitB</td></tr>
      <tr><td>pVIS1</td><td>IaMT2 (MT1)</td><td>Present; designed for surface display</td><td>pMH45</td></tr>
      <tr><td>pVIS2</td><td>SmtA (MT2)</td><td>Present; designed for surface display</td><td>pVIS1</td></tr>
      <tr><td>pVIS3</td><td>EGR_09832 (MT3)</td><td>Present; designed for surface display</td><td>pVIS1</td></tr>
      <tr><td>pVIS4</td><td>OsMTI-1b (MT4)</td><td>Present; designed for surface display</td><td>pVIS1</td></tr>
      <tr><td>pVIS5</td><td>IaMT2 (MT1)</td><td>Removed; MT retained</td><td>pVIS1</td></tr>
      <tr><td>pVIS6</td><td>SmtA (MT2)</td><td>Removed; MT retained</td><td>pVIS2</td></tr>
      <tr><td>pVIS7</td><td>EGR_09832 (MT3)</td><td>Removed; MT retained</td><td>pVIS3</td></tr>
      <tr><td>pVIS8</td><td>OsMTI-1b (MT4)</td><td>Removed; MT retained</td><td>pVIS4</td></tr>
    </tbody></table></div>
    <p>The notebook records sequence-confirmed clones for pVIS5, pVIS6, and pVIS7 on September 14. Earlier pVIS8 clones contained a deletion after the RBS; pVIS8-11 was later recorded as sequence-correct and selected for plate-reader testing. The plate-result workbooks themselves do not annotate the MT identity, so the mapping above comes from the build records.</p>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Sources</p><h3>Where each sequence came from</h3></div>
    <div class="experiment-section-layout"><div class="experiment-figure-slot experiment-figure-slot-wide"><span>Sequence records</span><small>Database accessions consulted while choosing the four metallothioneins</small></div><article class="experiment-section-copy">
      <p>The four sequences were shortlisted from published records before cloning. IaMT2 came from GenBank <strong>MG471388.1</strong>, SmtA from <em>Synechococcus elongatus</em> PCC 7942 (GenBank <strong>CP130602.1</strong>, cross-checked against <strong>X64585.1</strong>), EGR_09832 from <strong>XM_024499081.1</strong>, and OsMTI-1b from rice sequence records including <strong>NM_001417563.1</strong>. The construct-specific sequence details are listed in the lab records.</p>
      <p>The internal MT-choice document contains conflicting Registry identifiers for some candidates. We therefore omit Registry IDs here until each has been checked against the current Registry entry. The candidate source organisms and sequence accessions remain the basis of this page.</p>
    </article></div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Literature rationale</p><h3>Why test these designs?</h3></div>
    <div class="experiment-section-copy">
      <p>Metallothioneins are cysteine-rich proteins studied for metal binding. Prior work offers a rationale for testing both the proteins and the surface-display strategy: Lu et al. reported greater cadmium adsorption for <em>E. coli</em> displaying Tetrahymena MTT5, and He et al. reported increased cadmium tolerance and adsorption for <em>E. coli</em> displaying EGR_09832. Yoshida et al. reported enhanced cadmium uptake by <em>E. coli</em> expressing a human metallothionein fusion. These are results from those studies, not measurements from our team.</p>
      <p>The cited work justified testing candidate designs; it does not establish that our constructs bind cadmium. Our own assays measured growth and GFP response. Direct cadmium quantification and localization measurements remain necessary.</p>
      <ul>
        <li>Lu et al. (2023), <a href="https://doi.org/10.1016/j.chemosphere.2022.136850" target="_blank" rel="noopener">Chemosphere</a>.</li>
        <li>He et al. (2024), <a href="https://doi.org/10.1016/j.dwt.2024.100070" target="_blank" rel="noopener">Desalination and Water Treatment</a>.</li>
        <li>Yoshida et al. (2002), <a href="https://doi.org/10.2144/02323st08" target="_blank" rel="noopener">BioTechniques</a>.</li>
      </ul>
    </div>
  </section>
</section>
