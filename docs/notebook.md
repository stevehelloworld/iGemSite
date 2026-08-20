<section class="experiment-page">

  <div class="experiment-hero" style="background: radial-gradient(circle at 12% 18%, rgba(123, 192, 67, 0.15), transparent 32%), linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
    <p class="experiment-eyebrow">LABORATORY NOTEBOOK</p>
    <h2>Wet Lab Chronological Records & Lab Diaries</h2>
    <p class="experiment-lead">
      This notebook serves as the complete, day-by-day record of our wet-lab engineering process. From plasmid extraction and vector linearization to restriction digestion, ligation, electroporation, and colony screening, we document the protocols, parameters, results, and troubleshooting for the construction of <strong>pVIS1, pVIS2, pVIS3, and pVIS4</strong>.
    </p>
  </div>

  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 23, 2026</p>
      <h3>Vector Linearization via Inverse PCR</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> To linearize the vector backbone pMH54 (containing the PcueR-cueR/CadR.10 circuit, ZitB, and Lpp-OmpA display scaffold) at the cloning site in Loop 3 of OmpA.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>Template:</strong> DNA extracted from <em>E. coli</em> MH45 starter culture.</li>
          <li><strong>Polymerase:</strong> Phusion DNA Polymerase.</li>
          <li><strong>Washes & Buffers:</strong> Compared two parallel conditions: Phusion HF buffer and Phusion GC buffer.</li>
          <li><strong>Thermocycling Protocol (30 cycles):</strong> Initial denaturation at 98°C for 30s; 30 cycles of [98°C for 10s / 61°C TM for 20s / 72°C extension for 3 min]; followed by a 72°C final extension for 10 min.</li>
        </ul>
        <p><strong>Results & Observations:</strong> Gel electrophoresis of the VIS1 HF and VIS1 GC products showed a clean, sharp band at ~6 kb, indicating successful vector linearization in both buffer systems.</p>
        <p><strong>Participants:</strong> Ray and wet-lab team.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Gel Electrophoresis: pMH54 Linearization</span>
        <small>Clear ~6 kb bands obtained for both HF and GC buffer conditions</small>
      </div>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 25, 2026</p>
      <h3>MT Insert Amplification & Double Digestion</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Gel Electrophoresis: digested MT1-MT4 PCR inserts</span>
        <small>Bands present at expected sizes: 597 bp, 645 bp, 657 bp, 951 bp</small>
      </div>
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> To amplify the four target metallothionein (MT) insert sequences and perform double restriction digestion on both vector and inserts.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>Template Cleanup:</strong> DpnI digestion (37°C, 2 hours) performed on linearized vector products to remove methyl-templated plasmid background.</li>
          <li><strong>Phusion PCR (30 cycles):</strong> Amplified four MT variants using a shared forward primer (primer 3) against specific reverse primers:
            <br>• <strong>MT1 (IaMT2):</strong> primers 3 & 4 (Annealing: 60.8°C)
            <br>• <strong>MT2 (SmtA):</strong> primers 3 & 5 (Annealing outlier: 59.8°C)
            <br>• <strong>MT3 (EGR_09832):</strong> primers 3 & 6 (Annealing: 60.8°C)
            <br>• <strong>MT4 (OsMTI-1b):</strong> primers 3 & 7 (Annealing: 60.8°C)
          </li>
          <li><strong>Double Digestion:</strong> Setup overnight reaction at 37°C using restriction enzymes <strong>XbaI and SalI</strong>.</li>
        </ul>
        <p><strong>Results & Observations:</strong> Clean separation on gel with exact matching bands for all inserts: MT3 (951 bp), MT1 (657 bp), MT2 (597 bp), and MT4 (645 bp).</p>
      </article>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 29, 2026</p>
      <h3>Ligation Reaction & Competent Host Inoculation</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> Perform ligation of digested vector and insert fragments and inoculate culture for competent cell preparation.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>Ligation Setup:</strong> Reaction volume setup with T4 DNA Ligase using a 1:3 molar ratio of digested pMH54 vector (100 ng) to digested MT inserts. Incubation profile: 16°C for 14 hours &rarr; 37°C for 1 hour &rarr; 4°C hold.</li>
          <li><strong>Concentration Readings:</strong> Column-cleaned digested products measured: MT1 = 20.3%, MT3 = 22.7%, MT4 = 39.2%.</li>
          <li><strong>Troubleshooting:</strong> <strong>MT2 concentration reading was unstable / inconsistent. Ligation for MT2 was postponed for PCR redo.</strong></li>
          <li><strong>Inoculation:</strong> Inoculated <em>E. coli</em> EK371 starter culture in 2 mL SOB media, incubated at 31°C and 225 rpm.</li>
        </ul>
        <p><strong>Participants:</strong> Ray.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Competent Cell SOB Starter</span>
        <small>Inoculation of host strain E. coli EK371 for electrocompetent prep</small>
      </div>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 30, 2026</p>
      <h3>MT2 PCR Redo, Electroporation & Kanamycin Plating</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Agarose Gel: MT2 PCR Redo</span>
        <small>Intense target band at 597 bp verified prior to ligation</small>
      </div>
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> Re-amplify MT2 insert, prepare electrocompetent cells, and transform MT1, MT3, and MT4 constructs.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>MT2 PCR Redo:</strong> Repeated Phusion PCR for MT2 variant under identical thermocycling parameters. Cleaned and confirmed stable concentration.</li>
          <li><strong>Electrocompetent Cell Prep:</strong> Harvested EK371 culture at OD600 ~0.6. Performed multiple cold sterile water washes and spins (9000 rpm) to remove salts, resuspended in electroporation aliquots.</li>
          <li><strong>Electroporation:</strong> Mixed 4 µL of ligation products (pVIS1, pVIS3, pVIS4) with 40 µL competent EK371 cells. Shocked at standard voltage, recovered in 1 mL SOC for 1 hour at 37°C.</li>
          <li><strong>Plating:</strong> Serial-diluted (to 10<sup>-1</sup>) and plated on Km selective agar plates.</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 2, 2026</p>
      <h3>MT1 Colony PCR Screening & MT3/MT4 Colony Picking</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> To screen transformants of MT1 (pVIS1) via colony PCR and prepare MT3 and MT4 grids for screening.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>Colony PCR Setup:</strong> Randomly selected 16 transformant colonies of MT1 from Kanamycin selection plates. Picked and boiled in sterile water at 95°C for 12 minutes to release genomic DNA.</li>
          <li><strong>PCR Profile:</strong> Taq DNA Polymerase, 35-cycle PCR program with 57.6°C annealing temperature.</li>
          <li><strong>MT2 Digestion:</strong> Digested the redone MT2 PCR insert with XbaI/SalI.</li>
          <li><strong>Grid Picking:</strong> Picked 16 distinct colonies each of MT3 and MT4 onto grid plates for screening.</li>
        </ul>
        <p><strong>Results & Observations:</strong> The gel run for MT1 colony PCR showed very faint/weak bands, suggesting low screening efficiency or template dilution. Redo planned if necessary.</p>
        <p><strong>Participants:</strong> Ray with labmates Kelly & Mandy.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Colony PCR Gel: MT1 Screening</span>
        <small>Faint bands suggest need for optimization of templates or primers</small>
      </div>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 6, 2026</p>
      <h3>MT2 Ligation & MT3/MT4 Colony PCR Screening</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Agarose Gel: MT3 & MT4 Colony PCR Results</span>
        <small>Consistent positive bands matching target insert sizes next to ladder</small>
      </div>
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> Set up ligation for MT2 (pVIS2) and run colony PCR screens on MT3 and MT4 transformants.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>MT2 Ligation:</strong> Calculated ligation setup volumes (Vector ≈ 2.33 µL, MT2 insert ≈ 2.01 µL) based on updated 14.7% concentration reading.</li>
          <li><strong>Colony PCR Screening:</strong> Scaled master mix for 36 reactions. Tested 16 colonies each of MT3 and MT4 transformants using Taq polymerase.</li>
          <li><strong>Inoculation:</strong> Inoculated a fresh EK371 culture in 5 mL LB broth at 37°C.</li>
        </ul>
        <p><strong>Results & Observations:</strong> Gels for MT3 and MT4 showed multiple strong, clear bands matching their target sizes (951 bp and 645 bp), confirming successful integrations.</p>
      </article>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 7, 2026</p>
      <h3>MT2 Ligation Purification & Glycerol Electrocompetent Stocking</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> Clean up the MT2 ligation product and prepare cryopreserved electrocompetent cells for MT2 transformation.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>DNA Cleanup:</strong> Column-cleaned the MT2 ligation mixture.</li>
          <li><strong>Glycerol Stock Preparation:</strong> Harvested EK371 culture. Performed multiple washes with ice-cold 10% glycerol solution to remove conductive salts. Resuspended cells, aliquoted into 20 tubes (40 µL each).</li>
          <li><strong>Cryopreservation:</strong> Shock-froze competent cells in liquid nitrogen and stored them at -80°C.</li>
        </ul>
        <p><strong>Participants:</strong> Ray and wet-lab team.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Liquid Nitrogen Shock Freezing</span>
        <small>Preparation of long-term E. coli EK371 electrocompetent cell aliquots</small>
      </div>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 8, 2026</p>
      <h3>MT2 Electroporation & Colony Grid Picking</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Km Selection Plate: pVIS2 transformants</span>
        <small>Isolates visible on Kanamycin selective agar plates</small>
      </div>
      <article class="experiment-section-copy">
        <p><strong>Purpose:</strong> Transform MT2 construct (pVIS2) and isolate colonies for subsequent screening.</p>
        <p><strong>Protocol & Setup:</strong></p>
        <ul class="experiment-list">
          <li><strong>Electroporation:</strong> Electroporated the cleaned MT2 ligation product (pVIS2) into EK371 electrocompetent aliquots. Recovered in SOC and plated on Kanamycin selective media.</li>
          <li><strong>Colony Selection:</strong> Picked 16 colonies from the MT2 transformation plate onto a fresh grid plate for subsequent screening.</li>
        </ul>
      </article>
    </div>
  </section>

  <div class="experiment-inspiration-panel">
    <p class="experiment-card-kicker">Notebook Inspirations</p>
    <ul class="experiment-inspiration-list">
      <li><a href="https://2025.igem.wiki/epfl/notebook" target="_blank" rel="noreferrer noopener">2025 EPFL</a></li>
      <li><a href="https://2025.igem.wiki/wageningenur/notebook" target="_blank" rel="noreferrer noopener">2025 WageningenUR</a></li>
      <li><a href="https://2024.igem.wiki/ju-krakow/notebook" target="_blank" rel="noreferrer noopener">2024 JU-Krakow</a></li>
    </ul>
  </div>

</section>
