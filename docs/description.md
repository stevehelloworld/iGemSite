<section class="experiment-page project-description-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">PROJECT / DESCRIPTION</p>
    <h2>Cadture: testing a cadmium-responsive bacterial design</h2>
    <p class="experiment-lead">Cadmium contamination can threaten agricultural land and food safety. Cadture combines a cadmium-responsive GFP sensor with candidate metallothionein proteins in <em>E. coli</em>. This season, we compared growth and reporter fluorescence across cadmium concentrations; we did not directly measure cadmium binding or removal.</p>
    <div class="experiment-tag-row" aria-label="Project scope"><span>Cadmium (Cd<sup>2+</sup>)</span><span><em>E. coli</em></span><span>GFP response</span><span>Growth assay</span></div>
  </div>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">The problem</p><h3>Cadmium pollution has a documented history in Taiwan</h3></div>
    <div class="experiment-section-copy">
      <p>The Ministry of Environment records Taiwan&rsquo;s first cadmium-rice incident in 1982 in Guanyin, followed by another incident in 1984 in Luzhu. The official account connects the incidents to industrial wastewater entering irrigation channels and farmland. Later farmland investigations have covered several heavy metals and regions; these records describe contamination risk and government monitoring, not samples collected by our team.</p>
      <p>For edible-crop farmland, Taiwan&rsquo;s soil standards list cadmium monitoring and control values of 2.5 and 5 mg/kg, respectively. These are regulatory soil benchmarks, not concentrations used in our laboratory assay. Our plate-reader experiments used 0&ndash;400 nM cadmium in culture medium.</p>
      <p>Sources: the Ministry of Environment&rsquo;s <a href="https://sgw.moenv.gov.tw/public/services/preventive-investigation/national-farmland-survey" target="_blank" rel="noopener">national farmland survey</a> and current <a href="https://sgw.moenv.gov.tw/Public/regulations/standards" target="_blank" rel="noopener">soil pollution standards</a>.</p>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Our question</p><h3>Can metallothionein designs change the sensor and growth readouts?</h3></div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide"><span>Design question</span><small>Compare GFP and growth across candidate MT constructs and cadmium concentrations</small></div>
      <article class="experiment-section-copy">
        <p>Our starting point was pMH45, a cadmium-responsive GFP sensor. We added one of four metallothionein (MT) coding sequences, selected from different organisms based on sequence availability and published work on metal binding or bacterial expression.</p>
        <p>Published studies informed the design rationale. He et al. developed the cadmium-responsive GFP biosensor used as background for this project. Lu et al. reported increased cadmium adsorption for an <em>E. coli</em> strain displaying Tetrahymena MTT5, while He et al. reported increased cadmium tolerance and adsorption for an <em>E. coli</em> strain displaying EGR_09832. Those findings belong to the cited studies; they are not results from VIS.</p>
      </article>
    </div>
  </section>

  <section class="experiment-figure-section">
    <div class="experiment-flow-header"><p class="experiment-card-kicker">The design</p><h3>Four MT candidates, built in two configurations</h3><p>pVIS1&ndash;4 were designed to display an MT with the Lpp-OmpA anchor. pVIS5&ndash;8 were derived by removing that anchor while retaining the corresponding MT coding region. The second set was intended as an intracellular-MT comparison; localization was not directly verified in the results reported here.</p></div>
    <div class="problem-table-wrap"><table class="problem-table"><thead><tr><th>Pair</th><th>MT candidate</th><th>Source</th><th>Design</th></tr></thead><tbody>
      <tr><td>pVIS1 / pVIS5</td><td>IaMT2</td><td>Water spinach (<em>Ipomoea aquatica</em>)</td><td>Surface-display design / anchor-deleted design</td></tr>
      <tr><td>pVIS2 / pVIS6</td><td>SmtA</td><td><em>Synechococcus elongatus</em></td><td>Surface-display design / anchor-deleted design</td></tr>
      <tr><td>pVIS3 / pVIS7</td><td>EGR_09832</td><td><em>Echinococcus granulosus</em></td><td>Surface-display design / anchor-deleted design</td></tr>
      <tr><td>pVIS4 / pVIS8</td><td>OsMTI-1b</td><td>Rice (<em>Oryza sativa</em>)</td><td>Surface-display design / anchor-deleted design</td></tr>
    </tbody></table></div>
    <p>The construct map and cloning workflow are documented on <a href="parts">Parts</a> and <a href="methods">Experiments</a>. The notebook records sequence-confirmed clones for the variants used in later assays.</p>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header"><p class="experiment-card-kicker">What we tested</p><h3>Growth and GFP response in controlled culture</h3></div>
    <div class="experiment-section-copy">
      <p>We compared pMH45 and pVIS constructs in 96-well plate assays at 0, 8, 40, 200, 300 and 400 nM Cd<sup>2+</sup>. The same wells were used to track optical density at 600 nm as a growth readout and GFP fluorescence as a reporter readout. The results show that pVIS constructs altered both signals, with construct-dependent growth effects.</p>
      <p>These measurements do not establish how much cadmium was bound to cells, how much remained in the medium, or whether a treatment process would remove cadmium from water. Lower GFP alone can reflect changes in cadmium availability, sensor expression, cell physiology, or more than one of these factors. See <a href="results">Results</a> for data and limitations.</p>
    </div>
  </section>

  <section class="experiment-section project-references">
    <div class="experiment-section-header"><p class="experiment-card-kicker">Selected references</p><h3>Research that informed the design</h3></div>
    <div class="experiment-section-copy">
      <ol>
        <li>He, M.-Y. et al. (2021). <a href="https://doi.org/10.1021/acssensors.0c02204" target="_blank" rel="noopener">Sensitive and Specific Cadmium Biosensor Developed by Reconfiguring Metal Transport and Leveraging Natural Gene Repositories</a>. <em>ACS Sensors</em>, 6, 995&ndash;1002.</li>
        <li>Lu, C.-W. et al. (2023). <a href="https://doi.org/10.1016/j.chemosphere.2022.136850" target="_blank" rel="noopener">Bioremediation potential of cadmium by recombinant <em>Escherichia coli</em> surface expressing metallothionein MTT5 from <em>Tetrahymena thermophila</em></a>. <em>Chemosphere</em>, 310, 136850.</li>
        <li>He, N. et al. (2024). <a href="https://doi.org/10.1016/j.dwt.2024.100070" target="_blank" rel="noopener">Surface expression of metallothionein enhances bioremediation in <em>Escherichia coli</em></a>. <em>Desalination and Water Treatment</em>, 317, 100070.</li>
        <li>Yoshida, N. et al. (2002). <a href="https://doi.org/10.2144/02323st08" target="_blank" rel="noopener">Bacterium-Based Heavy Metal Biosorbents: Enhanced Uptake of Cadmium by <em>E. coli</em> Expressing a Metallothionein Fused to &beta;-Galactosidase</a>. <em>BioTechniques</em>, 32, 551&ndash;558.</li>
      </ol>
    </div>
  </section>
</section>
