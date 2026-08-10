<section class="experiment-page">

  <div class="experiment-hero">
    <p class="experiment-eyebrow">WET LAB / EXPERIMENTS</p>
    <h2>Engineering E. coli Outer Membrane Display of Metallothionein (OmpA-MT)</h2>
    <p class="experiment-lead">
      We aim to engineer <em>Escherichia coli</em> to display metallothionein (MT) variants on its outer membrane surface (anchored via OmpA Loop 3, aa ~110–120) for the selective biosorption and accumulation of toxic heavy metals, specifically cadmium (Cd<sup>2+</sup>) and lead (Pb<sup>2+</sup>). This page outlines our wet-lab cloning workflow, construct architectures, and chronological experimental logs.
    </p>

    <div class="experiment-tag-row" aria-label="Experiment priorities">
      <span>Vector Linearization</span>
      <span>MT PCR Amplification</span>
      <span>XbaI / SalI Digestion</span>
      <span>T4 Ligation</span>
      <span>Colony PCR Verification</span>
    </div>
  </div>

  <aside class="experiment-progress-rail" aria-label="Experiments page progress">
    <button class="experiment-progress-icon" type="button" aria-label="Back to top">
      <i class="bi bi-flask"></i>
    </button>
    <div class="experiment-progress-track" aria-hidden="true">
      <span class="experiment-progress-fill"></span>
      <span class="experiment-progress-thumb"></span>
    </div>
    <div class="experiment-progress-current">Overview</div>
  </aside>

  <section class="experiment-flow-panel" aria-labelledby="experiment-flow-title">
    <div class="experiment-flow-header">
      <p class="experiment-card-kicker">Workflow</p>
      <h3 id="experiment-flow-title">Five-Step Standard Molecular Cloning Workflow</h3>
      <p>
        The cloning pipeline details the construction of plasmids pVIS1 to pVIS4 from the template cadmium-sensing circuit backbone pMH54.
      </p>
    </div>

    <div class="experiment-flow-diagram">
      <div class="experiment-flow-node">
        <span>1</span>
        <h4>Linearization</h4>
        <p>Inverse PCR to open pMH54 vector backbone at the target insertion site in Loop 3 of OmpA.</p>
      </div>
      <div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node">
        <span>2</span>
        <h4>Amplification</h4>
        <p>Phusion PCR to amplify MT1–MT4 inserts designed by ESM-2 structure models.</p>
      </div>
      <div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node">
        <span>3</span>
        <h4>Digestion</h4>
        <p>Double restriction digestion of linearized vector and PCR inserts using XbaI and SalI enzymes.</p>
      </div>
      <div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node">
        <span>4</span>
        <h4>Ligation</h4>
        <p>T4 DNA Ligation of digested inserts and vector followed by electroporation into <em>E. coli</em> EK371.</p>
      </div>
      <div class="experiment-flow-arrow" aria-hidden="true"><i class="bi bi-arrow-right"></i></div>
      <div class="experiment-flow-node experiment-flow-node-iterate">
        <span>5</span>
        <h4>Screening</h4>
        <p>Colony PCR using Taq polymerase to verify correct insertion and identify positive clones.</p>
      </div>
    </div>

    <div class="experiment-note">
      <i class="bi bi-lightbulb"></i>
      <span><strong>AI Design Context:</strong> The primary candidate sequence, <strong>IaMT2 (MT1)</strong>, was selected through ESM-2 prediction and ColabFold modeling as the lead heavy-metal-binding candidate.</span>
    </div>
  </section>

  <section class="experiment-figure-section" aria-labelledby="experiment-figure-title">
    <div class="experiment-flow-header">
      <p class="experiment-card-kicker">Construct Design</p>
      <h3 id="experiment-figure-title">Plasmid Circuit Architecture & Target Variants</h3>
      <p>
        The base plasmid <strong>pMH54</strong> (5,881 bp, SalI/XbaI-cut) carries a full cadmium-sensing and transport circuit: KanR, pSC101 origin, a <strong>PcueR-cueR/CadR.10</strong> cadmium-responsive regulator, a <strong>Preg14-GFP</strong> reporter loop, <strong>ZitB</strong> exporter, and the <strong>lpp-OmpA</strong> surface-display anchor scaffold containing a Strep-tag.
      </p>
    </div>

    <div class="problem-table-wrap">
      <table class="problem-table">
        <thead>
          <tr>
            <th>Construct Label</th>
            <th>Metallothionein (MT) Source</th>
            <th>Insert size (bp)</th>
            <th>Final Plasmid Label</th>
            <th>Total Plasmid Size (bp)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MT1</td>
            <td>IaMT2 (Water spinach / <em>Ipomoea aquatica</em>)</td>
            <td>657 bp</td>
            <td>pVIS1</td>
            <td>6,538 bp</td>
          </tr>
          <tr>
            <td>MT2</td>
            <td>SmtA (Cyanobacterial MT / <em>Synechococcus elongatus</em>)</td>
            <td>597 bp</td>
            <td>pVIS2</td>
            <td>6,478 bp</td>
          </tr>
          <tr>
            <td>MT3</td>
            <td>EGR_09832 (Echinococcus granulosus)</td>
            <td>951 bp</td>
            <td>pVIS3</td>
            <td>6,832 bp</td>
          </tr>
          <tr>
            <td>MT4</td>
            <td>OsMTI-1b (Rice / <em>Oryza sativa</em>)</td>
            <td>645 bp</td>
            <td>pVIS4</td>
            <td>6,526 bp</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">Design Rationale</p>
      <h3>01. Cell Surface Display Design</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>
          Heavy metal biosorption inside the cytoplasm is often limited by membrane permeability and can trigger internal cellular toxicity. To overcome this:
        </p>
        <ul class="experiment-list">
          <li><strong>Outer Membrane Anchoring:</strong> We fuse the metallothionein sequences to the Lpp-OmpA hybrid protein, displaying MT directly on the outer membrane loop.</li>
          <li><strong>Cadmium/Lead Biosorption:</strong> Metallothioneins contain rich cysteine arrays that coordinate metal ions. In particular, SmtA (cyanobacterial) and IaMT2 (water spinach plant-derived) have highly coordinated zinc/cadmium sites.</li>
          <li><strong>ZitB Exporter:</strong> The integration of the ZitB exporter ensures any heavy metals that slip into the cytoplasm are immediately pumped out into the extracellular space for display binding.</li>
        </ul>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Lpp-OmpA-MT Membrane Topology</span>
        <small>Outer Membrane: Loop 3 insertion site coordinates MT chelating domains externally</small>
      </div>
    </div>
  </section>

  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">Biosensing Circuit</p>
      <h3>02. Cadmium-Responsive Sensing Circuit</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>PcueR-cueR/CadR.10 Logic</span>
        <small>GFP transcription triggered upon cadmium binding to the CadR regulator</small>
      </div>
      <article class="experiment-section-copy">
        <p>
          To monitor biosorption in real-time, the construct includes a feedback reporting loop. The CadR.10 cadmium-responsive regulator modulates the Preg14 promoter.
        </p>
        <p>
          In the absence of Cd<sup>2+</sup>, GFP is repressed. When Cd<sup>2+</sup> binds to CadR.10, the repression is relieved, activating green fluorescent protein (GFP) production. This matches our mathematical ODE modeling parameters for biosorption tracking.
        </p>
      </article>
    </div>
  </section>

  <section class="experiment-log-panel">
    <div class="experiment-flow-header experiment-log-header">
      <p class="experiment-card-kicker">Cloning Log</p>
      <h3>Chronological Wet-Lab Logs</h3>
      <p>
        Detailed documentation of molecular cloning, troubleshooting, and gel electrophoresis screenings from June 23 to July 8, 2026.
      </p>
    </div>

    <div class="experiment-log-grid">
      <details class="experiment-log-entry" open>
        <summary>
          <span class="experiment-log-date">June 23</span>
          <strong>Plasmid Extraction & Vector Linearization</strong>
        </summary>
        <p>
          Started with <em>E. coli</em> MH45. Extracted template plasmid and ran <strong>inverse PCR</strong> to linearize the vector backbone at the target cloning site in OmpA Loop 3.
        </p>
        <p>
          <strong>Reaction Setup:</strong> Evaluated two buffer conditions in parallel using Phusion DNA Polymerase: Phusion HF buffer and Phusion GC buffer. PCR protocol: 98°C initial denaturation (30s), followed by 30 cycles of [98°C (10s) / 61°C TM (20s) / 72°C extension (3 min)], and 72°C final extension (10 min).
        </p>
        <p>
          <strong>Result:</strong> Gel electrophoresis of VIS1 HF / VIS1 GC showed a clean single band at the expected size of ~6 kb, indicating successful vector linearization in both conditions.
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">June 25</span>
          <strong>Phusion PCR for 4 MT Inserts & Restriction Digestion</strong>
        </summary>
        <p>
          Cleaned the linearized vector PCR product and performed a <strong>DpnI digestion</strong> (37°C, 2 hours) to eliminate template plasmid background.
        </p>
        <p>
          Prepared 4 primer pairs (primers 3–7) and set up <strong>Phusion PCR</strong> (30 cycles) to amplify the target MT inserts:
          <br>• <strong>MT1:</strong> Primers 3 & 4 (Annealing: 60.8°C)
          <br>• <strong>MT2:</strong> Primers 3 & 5 (Annealing outlier: 59.8°C)
          <br>• <strong>MT3:</strong> Primers 3 & 6 (Annealing: 60.8°C)
          <br>• <strong>MT4:</strong> Primers 3 & 7 (Annealing: 60.8°C)
        </p>
        <p>
          Cleaned products and performed a 6-reaction double digestion using <strong>XbaI and SalI</strong> (37°C, overnight).
          Gel analysis showed four distinct bands matching expected sizes: MT3 (951 bp), MT1 (657 bp), MT2 (597 bp), and MT4 (645 bp).
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">June 29</span>
          <strong>Ligation Setup & Competent Cell Inoculation</strong>
        </summary>
        <p>
          Cleaned digested fragments. Set up <strong>T4 DNA Ligation</strong> at a 100 ng vector:insert molar ratio of 1:3 (16°C for 14 hours, then 37°C for 1 hour).
        </p>
        <p>
          DNA concentration percentages measured: MT1 (20.3%), MT3 (22.7%), MT4 (39.2%). <strong>MT2 reading was unstable / flagged for redo.</strong>
        </p>
        <p>
          Inoculated <em>E. coli</em> EK371 culture in 2 mL SOB at 31°C, 225 rpm to prepare fresh electrocompetent cells.
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">June 30</span>
          <strong>MT2 PCR Redo, Electroporation & Plating</strong>
        </summary>
        <p>
          Cleaned ligation mixtures for MT1, MT3, and MT4.
          <strong>Redid MT2 insert Phusion PCR</strong> and column-cleaned the product to resolve the concentration issue.
        </p>
        <p>
          Prepared electrocompetent <em>E. coli</em> EK371 cells (OD600 ~0.6, ice-cold water washes, centrifugation at 9,000 rpm).
        </p>
        <p>
          <strong>Electroporated MT1, MT3, MT4 ligations</strong> (4 µL DNA into 40 µL competent cells), recovered in SOC for 1 hour at 37°C, and spread-plated onto Kanamycin selection plates using serial dilution techniques.
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">July 2</span>
          <strong>MT1 Colony PCR Screening & MT3/MT4 Picking</strong>
        </summary>
        <p>
          Performed colony PCR screening for MT1 (pVIS1 transformants) using Taq polymerase (16 colonies picked, boiled at 95°C as crude templates, 35-cycle PCR, 57.6°C annealing).
        </p>
        <p>
          Separately set up SalI/XbaI restriction digestion on the redone MT2 PCR product.
          Picked 16 colonies each from the MT3 and MT4 selection plates onto fresh grid-plates for subsequent colony screening.
        </p>
        <p>
          <strong>Result:</strong> Gel electrophoresis of the MT1 colony PCR showed very faint/weak bands, suggesting low transformant colony yield or template issues.
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">July 6</span>
          <strong>MT2 Ligation & MT3/MT4 Colony PCR Screening</strong>
        </summary>
        <p>
          Calculated insert DNA and vector volumes based on a new 14.7% concentration reading and set up <strong>MT2 ligation</strong>.
        </p>
        <p>
          Ran 16-colony PCR screenings for MT3 and MT4. Prepared PCR master mixes for 36 reactions.
          Inoculated a new EK371 starter culture (5 mL LB, 37°C) for the upcoming MT2 transformation.
        </p>
        <p>
          <strong>Result:</strong> Agarose gels of the colony PCR runs showed multiple clean, intense bands aligned with expected sizes for MT3 and MT4, confirming positive clones on selection plates.
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">July 7</span>
          <strong>MT2 Ligation Clean-up & Electrocompetent Stock Prep</strong>
        </summary>
        <p>
          Purified the MT2 ligation product via column clean-up.
        </p>
        <p>
          Prepped additional electrocompetent EK371 cells specifically for MT2, executing three 10% ice-cold glycerol washes. Aliquoted, shock-froze in liquid nitrogen, and stored tubes at -80°C.
        </p>
      </details>

      <details class="experiment-log-entry">
        <summary>
          <span class="experiment-log-date">July 8</span>
          <strong>MT2 Transformation & Colony Picking</strong>
        </summary>
        <p>
          Electroporated the pVIS2 (MT2) construct into competent cells. After recovery, plated on Km selection plates.
        </p>
        <p>
          Picked 16 resulting colonies from the selection plate onto a fresh grid-plate for subsequent screening by colony PCR.
        </p>
      </details>
    </div>
  </section>

  <div class="experiment-inspiration-panel">
    <p class="experiment-card-kicker">Scientific Literature References</p>
    <ul class="experiment-inspiration-list" style="flex-direction: column; align-items: flex-start; gap: 12px;">
      <li><strong>Surface Display:</strong> Wang et al. (2024). <em>Surface Display of Multiple Metal-Binding Domains in Deinococcus radiodurans Alleviates Cadmium and Lead stress</em>.</li>
      <li><strong>Metallothionein Classification:</strong> Yang et al. (2024). <em>Metallothionein: A Comprehensive Review of Its Classification, Structure, and Biological Functions</em>.</li>
      <li><strong>Cadmium Detection:</strong> He et al. (2021). <em>Sensitive and Specific Cadmium Biosensor Developed by Reconfiguring Metal Transport</em>.</li>
    </ul>
  </div>

</section>


<script>
document.addEventListener("DOMContentLoaded", function () {
  const rail = document.querySelector(".experiment-progress-rail");
  const topButton = document.querySelector(".experiment-progress-icon");
  const fill = document.querySelector(".experiment-progress-fill");
  const thumb = document.querySelector(".experiment-progress-thumb");
  const current = document.querySelector(".experiment-progress-current");
  let railStateTimer = null;
  let currentTimer = null;
  const stepTargets = [
    document.querySelector(".experiment-hero"),
    document.querySelector(".experiment-flow-panel"),
    document.querySelector(".experiment-figure-section"),
    document.querySelector(".experiment-section"),
    document.querySelector(".experiment-log-panel"),
    document.querySelector(".experiment-inspiration-panel")
  ].filter(Boolean);
  const stepNames = ["Intro", "Flow", "Figure", "Proto", "Notes", "Links"];

  if (!rail || !fill || !stepTargets.length) return;

  function updateRail() {
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
    fill.style.setProperty("--exp-progress", progress.toFixed(4));
    fill.style.height = `${Math.max(0, Math.min(100, progress * 100))}%`;
    if (thumb) {
      const track = rail.querySelector(".experiment-progress-track");
      if (track) {
        const thumbSize = 12;
        const trackHeight = track.getBoundingClientRect().height;
        const maxTop = Math.max(0, trackHeight - thumbSize);
        thumb.style.top = `${Math.max(0, Math.min(maxTop, progress * maxTop))}px`;
      }
    }

    const viewportMid = window.scrollY + window.innerHeight * 0.45;
    let activeIndex = 0;
    for (let i = 0; i < stepTargets.length; i++) {
      const rect = stepTargets[i].getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;
      if (viewportMid >= top && viewportMid < bottom) {
        activeIndex = i;
        break;
      }
      if (viewportMid >= bottom) activeIndex = i;
    }

    rail.setAttribute("data-active-step", String(activeIndex));
    rail.classList.add("is-scrolling");
    clearTimeout(railStateTimer);
    railStateTimer = window.setTimeout(() => rail.classList.remove("is-scrolling"), 180);
    if (current) {
      current.textContent = stepNames[Math.min(activeIndex, stepNames.length - 1)] || stepNames[0];
      current.classList.remove("is-visible");
      void current.offsetWidth;
      current.classList.add("is-visible");
      clearTimeout(currentTimer);
      currentTimer = window.setTimeout(() => current.classList.remove("is-visible"), 650);
    }
  }

  const requestUpdate = () => window.requestAnimationFrame(updateRail);
  updateRail();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
</script>
