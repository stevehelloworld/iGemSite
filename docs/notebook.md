<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">LABORATORY NOTEBOOK</p>
    <h2>Wet Lab Chronological Record</h2>
    <p class="experiment-lead">This notebook records the procedures, calculations, observations, and troubleshooting steps documented between June 23 and July 21, 2026.</p>
  </div>

  <!-- June 23, 2026 -->
  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 23, 2026</p>
      <h3>DNA Extraction and Inverse Phusion PCR</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>DNA Extraction Protocol</h4>
        <p>The following 11-step protocol was executed for Plasmid (MH45) extraction from <em>E. coli</em> (Ek317) using the QIA Spin MiniPrep Kit (Quick Start Protocol, Feb 2015):</p>
        <ol>
          <li>Pellet 1–5 ml bacterial overnight culture by centrifugation at 9,000 rpm for 10 min at 25 °C.</li>
          <li>Resuspend pelleted bacterial cells in 250 µl Buffer P1 and transfer to a microcentrifuge tube.</li>
          <li>Add 250 µl Buffer P2 and mix thoroughly by inverting the tube 4–6 times until the solution becomes clear. Do not allow the lysis reaction to proceed for more than 2 min.</li>
          <li>Add 350 µl Buffer N3 and mix immediately and thoroughly by inverting the tube 4–6 times.</li>
          <li>Centrifuge for 10 min at 13,000 rpm.</li>
          <li>Apply 800 µl supernatant from step 5 to the QIAprep 2.0 spin column by pipetting. Centrifuge for 30–60 s and discard the flow-through.</li>
          <li>Wash the QIA 2.0 spin column by adding 0.5 ml Buffer PB. Centrifuge for 30–60 s and discard the flow-through.</li>
          <li>Wash the QIA 2.0 spin column by adding 0.75 ml Buffer PE. Centrifuge for 30–60 s and discard the flow-through.</li>
          <li>Centrifuge for 3 min to remove residual wash buffer.</li>
          <li>Incubate at 55 °C for 3 min.</li>
          <li>Place the QIAprep 2.0 spin column in a clean 1.5 ml microcentrifuge tube. To elute DNA, add 30 µl of ddH<sub>2</sub>O. Stand for 1 min at 55 °C and centrifuge for 1 min.</li>
        </ol>

        <h4>Inverse Phusion PCR Setup</h4>
        <h5>Reaction Mixture</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volumes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>DNA Template</td><td>20 ng</td></tr>
              <tr><td>5x Phusion HF Buffer</td><td>6.0 µl</td></tr>
              <tr><td>5x Phusion GC Buffer</td><td>6.0 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.6 µl</td></tr>
              <tr><td>Primer 1 (VISP1)</td><td>0.3 µl</td></tr>
              <tr><td>Primer 2 (VISP2)</td><td>0.3 µl</td></tr>
              <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>22.01 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>30 µl</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h5>Thermocycle Conditions</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Temperature</th>
                <th>Time</th>
                <th>Cycles</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>98 °C</td><td>30 s</td><td>1</td></tr>
              <tr><td>98 °C</td><td>10 s</td><td>30</td></tr>
              <tr><td>61 °C (TM)</td><td>20 s</td><td>30</td></tr>
              <tr><td>72 °C</td><td>1:45</td><td>30</td></tr>
              <tr><td>72 °C</td><td>3 min</td><td>1</td></tr>
              <tr><td>4 °C</td><td>∞</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Experimental Notes</h4>
        <ul>
          <li><strong>Target Mass Calculation:</strong> Volume = Target Mass (ng) / Stock Concentration (ng/µl). Specifically: 20 / 40.67 ≈ 0.49 µl.</li>
          <li><strong>PCR Purpose:</strong> Amplify the entire plasmid vector outward to linearize the plasmid and add restriction enzyme binding sites.</li>
        </ul>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>DNA Extraction & PCR</span>
        <small>Plasmid MH45 MiniPrep isolation and linearized vector amplicon</small>
      </div>
    </div>
  </section>

  <!-- June 25, 2026 -->
  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 25, 2026</p>
      <h3>DNA Cleaning, Digestion, and Primer Reconstitution</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Cleanup & Digestion</span>
        <small>Zymo-Spin purification, DpnI digestion, and MT1–MT4 PCR products</small>
      </div>

      <article class="experiment-section-copy">
        <h4>DNA Clean (Zymo Spin Column)</h4>
        <p>Purification of DNA templates/PCR products to remove polymerases, salts, unreacted primers, and buffers:</p>
        <ol>
          <li>Mix DNA Template with Binding Buffer at a 1:2 ratio (25 µl : 50 µl). Transfer to a Zymo-Spin column in a collection tube.</li>
          <li>Centrifuge at 13,000 rpm for 1 min; discard the flow-through.</li>
          <li>Add 200 µl DNA Washing Buffer and centrifuge at 13,000 rpm for 1 min. Discard the flow-through. Repeat step 3 for 2 times.</li>
          <li><strong>Dry Spin:</strong> Centrifuge at 14,000 rpm for 3 min to completely remove residual ethanol.</li>
          <li><strong>Heat:</strong> 55 °C for 3 min, open lid.</li>
          <li>Add 20 µl ddH<sub>2</sub>O directly to the column matrix; incubate at room temperature for 1 min. Centrifuge at 13,000 rpm for 1 min.</li>
        </ol>

        <h4>DpnI Digestion & Incubation</h4>
        <p>Digestion of methylated template DNA (parental plasmid isolated from <em>E. coli</em>).</p>
        <h5>Reaction Mixture</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Plasmid (DNA Template)</td><td>17.5 µl</td></tr>
              <tr><td>Buffer</td><td>2 µl</td></tr>
              <tr><td>DpnI</td><td>0.5 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>20 µl</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h5>Thermocycle</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Temperature</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>37 °C</td><td>2 hr</td></tr>
              <tr><td>4 °C</td><td>∞</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Primer Reconstitution & MT Constructs</h4>
        <ul>
          <li><strong>Primer Reconstitution:</strong> Lyophilized primers (USPrimers 3–7) were reconstituted into liquid working solutions using ddH<sub>2</sub>O.</li>
          <li><strong>MT Constructs Directive:</strong> Execute Phusion PCR to amplify four target constructs. Ensure all reaction tubes and master mix components are maintained on ice.</li>
        </ul>

        <h5>Primer Combinations & Reaction Mixtures</h5>
        <ul>
          <li><strong>MT1:</strong> Primer 3 & 4</li>
          <li><strong>MT2:</strong> Primer 3 & 5</li>
          <li><strong>MT3:</strong> Primer 3 & 6</li>
          <li><strong>MT4:</strong> Primer 3 & 7</li>
        </ul>

        <h5>Master Mix Reaction Table</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>DNA Template</td><td>2 µl</td></tr>
              <tr><td>5x Phusion HF Buffer</td><td>6 µl</td></tr>
              <tr><td>dNTP (10 mM)</td><td>0.6 µl</td></tr>
              <tr><td>Primer 1</td><td>0.3 µl</td></tr>
              <tr><td>Primer 2</td><td>0.3 µl</td></tr>
              <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>20.5 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>30 µl</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h5>Specific Thermocycle Conditions</h5>
        <ul>
          <li><strong>MT2, 3, 4 TM:</strong> 60.8 °C</li>
          <li><strong>MT1 TM:</strong> 59.8 °C</li>
          <li><strong>Cycling parameters:</strong> 98 °C (30 s); [98 °C (10 s), TM (20 s), 72 °C (30 s)] × 30 cycles; 72 °C (3 min); 4 °C (∞).</li>
        </ul>

        <h4>Restriction Enzyme Digestion</h4>
        <p>Digestion of purified DNA fragments (<em>E. coli</em> plasmid ×2 & 4 MT PCR products) to generate compatible sticky ends.</p>
        <h5>Reaction Mixture</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>DNA fragments</td><td>16 µl</td></tr>
              <tr><td>10x FD Green Buffer</td><td>2 µl</td></tr>
              <tr><td>Restriction Enzyme (XbaI)</td><td>1 µl</td></tr>
              <tr><td>Restriction Enzyme (SalI)</td><td>1 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>20 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 37 °C for 2 hr; 4 °C for ∞.</p>
      </article>
    </div>
  </section>

  <!-- June 29, 2026 -->
  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 29, 2026</p>
      <h3>Ligation and Bacterial Cultivation</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>DNA Cleaning Update</h4>
        <p>Binding Buffer ratios utilized for purification:</p>
        <ul>
          <li><strong><em>E. coli</em> plasmid (DNA Template):</strong> Binding Buffer = 1:2 (20 µl : 40 µl).</li>
          <li><strong>MT (PCR Product):</strong> Binding Buffer = 1:5 (20 µl : 100 µl).</li>
        </ul>

        <h4>Ligation for MT1, 3, and 4</h4>
        <p>Covalent joining of digested vectors (Plasmid MH45) and MT inserts. MT2 was deferred due to a low concentration of 6.</p>
        <p><strong>Vector DNA Volume Calculation:</strong> Vector DNA = 100 ng / 42.9 (Concentration) = 2.33 µl</p>

        <h5>Reaction Mixture</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume/Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Vector DNA</td><td>100 ng</td></tr>
              <tr><td>Insert DNA</td><td>3:1 molar ratio</td></tr>
              <tr><td>T4 DNA Ligase Buffer</td><td>2.0 µl</td></tr>
              <tr><td>T4 DNA Ligase</td><td>0.2 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>Up to 20 µl</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 16 °C for 14 hr; 37 °C for 1 hr; 4 °C for ∞.</p>

        <h5>Concentration Values and Resulting Volumes</h5>
        <ul>
          <li>MT1 Concentration: 29.3</li>
          <li>MT3 Concentration: 22.7</li>
          <li>MT4 Concentration: 39.2</li>
        </ul>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Variant</th>
                <th>Insert DNA Volume</th>
                <th>ddH<sub>2</sub>O Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>MT1</td><td>1.62 µl</td><td>13.85 µl</td></tr>
              <tr><td>MT3</td><td>2.11 µl</td><td>13.36 µl</td></tr>
              <tr><td>MT4</td><td>0.82 µl</td><td>14.65 µl</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Bacterial Cultivation</h4>
        <ul>
          <li><strong>Strain:</strong> <em>E. coli</em> Ek317.</li>
          <li><strong>Medium:</strong> 2,000 µl of SOB.</li>
          <li><strong>Conditions:</strong> Shaker at 37 °C, 225 rpm.</li>
        </ul>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Ligation & Cultivation</span>
        <small>T4 ligation formulation and E. coli Ek317 liquid culture</small>
      </div>
    </div>
  </section>

  <!-- June 30, 2026 -->
  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">June 30, 2026</p>
      <h3>MT2 PCR, Competent Cells, and Electroporation</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Electroporation & Gel</span>
        <small>Electro-competent cells, pulse setup, and MT2 agarose gel</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Phusion PCR for MT2</h4>
        <ul>
          <li><strong>Primer Combination:</strong> Primer 3 & 5.</li>
          <li><strong>Reaction Mixture:</strong> DNA Template (2 µl), 5x Phusion HF Buffer (6 µl), dNTP (0.6 µl), Primer 3 (0.3 µl), Primer 5 (0.3 µl), Phusion polymerase (0.3 µl), ddH<sub>2</sub>O (20.5 µl).</li>
          <li><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), TM: 60.8 °C (20 s), 72 °C (30 s)] × 30 cycles; 72 °C (3 min); 4 °C (∞).</li>
        </ul>

        <h4>Preparation of Electro-Competent Cells</h4>
        <ol>
          <li><strong>Inoculation & Subculture:</strong> Transfer 0.25 ml overnight culture into 50 ml SOB medium. Incubate for ~2 hours until reaching mid-log phase (OD<sub>600</sub> ~ 0.6).</li>
          <li><strong>Chilling:</strong> Transfer culture to a 50 ml conical tube and incubate on ice for 10 min.</li>
          <li><strong>Wash Series 1:</strong> Centrifuge at 9,000 rpm for 10 min at 4 °C. Discard supernatant. Resuspend pellets in 3 ml cold ddH<sub>2</sub>O, then add 47 ml ddH<sub>2</sub>O.</li>
          <li><strong>Wash Series 2:</strong> Repeat the centrifugation and resuspension process twice. For these repetitions, resuspend the pellet in 3 ml cold ddH<sub>2</sub>O, then add 12 ml ddH<sub>2</sub>O.</li>
          <li><strong>Wash Series 3:</strong> Centrifuge at 9,000 rpm for 10 min at 4 °C. Discard supernatant.</li>
          <li><strong>Final Resuspension:</strong> Add 200 µl ddH<sub>2</sub>O to concentrate cells. Aliquot 40 µl per tube and maintain on ice.</li>
        </ol>

        <h4>Electroporation – Transformation</h4>
        <p><strong>Electroporation Setup (MT1, MT3, MT4):</strong></p>
        <ol>
          <li>Combine 4 µl target DNA construct with 40 µl electro-competent cells in a chilled cuvette.</li>
          <li>Apply an electrical pulse.</li>
          <li>Immediately add 800 µl warm SOC medium (SOB + Glucose). Do not pipette.</li>
          <li>Transfer suspension to a culture tube.</li>
          <li>Incubate at 37 °C with shaking (225 rpm) for 1 hour.</li>
        </ol>

        <h4>Dilution & Plating (Aseptic Spreading)</h4>
        <ol>
          <li>Dip cell spreader through flame and cool in ethanol.</li>
          <li>Pass through flame to ensure ethanol is burned off and the spreader is dry.</li>
          <li>Pipette 40 µl undiluted mixture onto Kanamycin (LB+Km) agar plate.</li>
          <li>Repeat spreader sterilization.</li>
          <li>Pipette 40 µl of 10<sup>−1</sup> diluted sample (10 µl culture + 90 µl 0.9% saline) onto LB+Km plate.</li>
          <li>Repeat for MT3 and MT4.</li>
          <li>Incubate overnight at 37 °C.</li>
        </ol>

        <h4>Gel Electrophoresis Results</h4>
        <p><strong>MT2 Composition:</strong> 22 ml TAE, 0.22 g Agarose (1%).</p>
      </article>
    </div>
  </section>

  <!-- July 2, 2026 -->
  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 2, 2026</p>
      <h3>Colony PCR (MT1) and Digestion (MT2)</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Colony PCR Protocol</h4>
        <ul>
          <li><strong>Grid Setup:</strong> Picked 16 colonies from MT1 transformant plate onto a mapped 16-grid plate (LB+Km).</li>
          <li><strong>Template Prep:</strong> Resuspend colony in 10 µl sterile ddH<sub>2</sub>O. Heat at 96 °C for 12 min.</li>
        </ul>

        <h5>Taq Reaction Mixture</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>1x Volume</th>
                <th>18x Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>204.3 µl</td></tr>
              <tr><td>10x Buffer</td><td>1.5 µl</td><td>27 µl</td></tr>
              <tr><td>DMSO</td><td>0.6 µl</td><td>10.8 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.3 µl</td><td>5.4 µl</td></tr>
              <tr><td>50 mM Primer 1</td><td>0.09 µl</td><td>1.62 µl</td></tr>
              <tr><td>50 mM Primer 2</td><td>0.09 µl</td><td>1.62 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.26 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>252 µl</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h5>Thermocycle</h5>
        <p>94 °C (2 min); [94 °C (30 s), 57.6 °C (10 s), 72 °C (2 min)] × 35 cycles; 72 °C (3 min 30 s); 4 °C (∞).</p>

        <h4>Restriction Enzyme (MT2)</h4>
        <p>Double digestion of MT2 constructs using XbaI and SalI (16 µl DNA, 2 µl 10x Buffer, 1 µl XbaI, 1 µl SalI) at 37 °C for 2 hr.</p>

        <h4>MT3 & MT4 Status</h4>
        <p>Picked 16 colonies for MT3 and MT4 onto grid plates; incubated at 37 °C.</p>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Colony Screening</span>
        <small>16-grid master plate and MT1 colony PCR amplicon</small>
      </div>
    </div>
  </section>

  <!-- July 6, 2026 -->
  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 6, 2026</p>
      <h3>MT2 Ligation and Unsuccessful Colony PCR</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Screening Assessment</span>
        <small>Gel electrophoresis results demonstrating negative colony amplicon</small>
      </div>

      <article class="experiment-section-copy">
        <h4>MT2 Ligation</h4>
        <ul>
          <li><strong>Reaction Mixture:</strong> Vector DNA (100 ng), Insert DNA (3:1), T4 Ligase Buffer (2.0 µl), T4 Ligase (0.2 µl), ddH<sub>2</sub>O (up to 20 µl).</li>
          <li><strong>Calculations:</strong> MT2 Concentration = 14.7; Vector Concentration = 42.9. NEBioCalculator Volume: 29.78 / 14.7 = 2.02 µl insert DNA.</li>
          <li><strong>Thermocycle:</strong> 16 °C (14 hr), 37 °C (1 hr), 4 °C (∞).</li>
        </ul>

        <h4>Colony PCR (MT3 & MT4)</h4>
        <p>Master Mix (36x) prepared using Taq Reaction Mixture components for a total volume of 504 µl.</p>

        <div class="experiment-note-card">
          <p class="mb-0"><strong>Experimental Result Note:</strong> "Because the result came out unsuccessfully, we’re choosing more samples and reducing Colony PCR for MT3 & 4."</p>
        </div>
      </article>
    </div>
  </section>

  <!-- July 7, 2026 -->
  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 7, 2026</p>
      <h3>MT2 Transformation Redo</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Electro-Competent Cell Prep</h4>
        <p>Final resuspension: Suspend pellet with 0.8 ml of 10% glycerol. Aliquot 40 µl into 20 tubes on ice. Shock-freeze in liquid nitrogen and store at −80 °C.</p>

        <h4>Electroporation Parameters</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Voltage (V)</td><td>1800</td></tr>
              <tr><td>Capacitance (µF)</td><td>25</td></tr>
              <tr><td>Resistance (Ω)</td><td>200</td></tr>
              <tr><td>Cuvette (mm)</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Plating</h4>
        <p>Standard aseptic spreading for MT2 was executed (undiluted and 10<sup>−1</sup> samples) on LB+Km plates.</p>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Transformation Redo</span>
        <small>Electroporation pulse conditions and MT2 transformant colonies</small>
      </div>
    </div>
  </section>

  <!-- July 8 ~ July 16, 2026 -->
  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 8 ~ July 16, 2026</p>
      <h3>Troubleshooting and Colony PCR Series</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Troubleshooting Gels</span>
        <small>Comparison of MT1 positive controls vs unsuccessful MT2–4 runs</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Chronological Log of Colony PCRs</h4>
        <ul>
          <li><strong>July 8:</strong> Picked 16 colonies for MT2 onto the grid.</li>
          <li><strong>July 9:</strong> Colony PCR (MT2 ×16, MT3 ×16, MT4 ×16, MT1 ×2). Total 52x Master Mix.</li>
          <li><strong>July 13:</strong> Colony PCR (MT2 ×16, MT1 ×2 control). Root cause analysis identified excessive biomass transfer during template preparation.</li>
          <li><strong>July 14:</strong> Colony PCR (MT2 ×16, MT1 ×2). MT1 succeeded; MT2 failed.</li>
          <li><strong>July 15:</strong> Colony PCR (MT3 ×16, MT1 ×2). No results observed.</li>
          <li><strong>July 16:</strong> Colony PCR (MT4 ×16, MT1 ×2). Decision made to redo ligation for MT2, MT3, and MT4.</li>
        </ul>

        <h4>Master Mix Preparation Tables</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>1x</th>
                <th>20x (July 13–16)</th>
                <th>52x (July 9)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>227 µl</td><td>590.2 µl</td></tr>
              <tr><td>10x Buffer</td><td>1.5 µl</td><td>30 µl</td><td>78 µl</td></tr>
              <tr><td>DMSO</td><td>0.6 µl</td><td>12 µl</td><td>31.2 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.3 µl</td><td>6 µl</td><td>15.6 µl</td></tr>
              <tr><td>50 mM Primer 1</td><td>0.09 µl</td><td>1.8 µl</td><td>4.68 µl</td></tr>
              <tr><td>50 mM Primer 2</td><td>0.09 µl</td><td>1.8 µl</td><td>4.68 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.4 µl</td><td>3.64 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>280 µl</strong></td><td><strong>728 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </section>

  <!-- July 20, 2026 -->
  <section class="experiment-section">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 20, 2026</p>
      <h3>Ligation Redo for MT2, 3, and 4</h3>
    </div>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Revised Ligation Protocol</h4>
        <ul>
          <li><strong>Redo Mixture:</strong> Vector DNA (100 ng), Insert DNA (3:1), 2.8 µl T4 DNA Ligase Buffer, 0.3 µl T4 DNA Ligase, ddH<sub>2</sub>O (up to 20 µl).</li>
          <li><strong>Buffer Note:</strong> "We use the GC Buffer for the plasmid, which is different from the MH45 last time, using HF Buffer at Phusion PCR."</li>
        </ul>

        <h4>Calculation Corrections and Volumes</h4>
        <ul>
          <li><strong>Vector Concentration:</strong> 42.9 (100 ÷ 42.9 ≈ 2.33 µl).</li>
          <li><strong>MT2 Concentration:</strong> 14.7 (29.78 ÷ 14.7 ≈ 2.02 µl insert).</li>
        </ul>

        <h5>Resulting ddH<sub>2</sub>O Volumes for Redo</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Variant</th>
                <th>ddH<sub>2</sub>O Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>MT2</td><td>13.95 µl</td></tr>
              <tr><td>MT3</td><td>13.76 µl</td></tr>
              <tr><td>MT4</td><td>14.65 µl</td></tr>
            </tbody>
          </table>
        </div>

        <div class="experiment-note-card experiment-note-bug">
          <p class="mb-1"><strong>Bug Note:</strong> "which is incorrect because we didn’t use the same sample as last time."</p>
          <p class="mb-0"><strong>Additional Bug Note:</strong> "A couple days later, we found out that the concentration for GC & HF Plasmid may be different."</p>
        </div>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Ligation Redo</span>
        <small>T4 reaction adjustments and buffer troubleshooting records</small>
      </div>
    </div>
  </section>

  <!-- July 21, 2026 -->
  <section class="experiment-section experiment-section-reverse">
    <div class="experiment-section-header">
      <p class="experiment-card-kicker">July 21, 2026</p>
      <h3>Final Transformation and Sequencing Prep</h3>
    </div>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Sequencing Plates</span>
        <small>Streaked clones and 1/3-plate glycerol/streak stocks of PV1S1</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Transformation via Electroporation</h4>
        <ol>
          <li>Combined 4 µl target DNA (ligation product) with 40 µl electro-competent cells.</li>
          <li><strong>System Setup:</strong> 1800 V, 25 µF, 200 Ω, 1 mm cuvette.</li>
          <li><strong>Recovery:</strong> 800 µl warm SOC, 37 °C shaking (225 rpm) for 1 hour.</li>
        </ol>

        <h4>Sequence Plating + Stock</h4>
        <ul>
          <li><strong>Colonies Picked:</strong> Selected transformant colonies PV1S1 #2, #9, and #15 for sequencing.</li>
          <li><strong>Procedure:</strong> Used an inoculating loop to pick from the original plate.</li>
        </ul>
        <ul style="list-style-type: circle; margin-left: 20px;">
          <li><strong>Stock:</strong> Evenly spread colonies on 1/3 of a plate.</li>
          <li><strong>Sequencing:</strong> Draw one simple line for each colony on a separate plate.</li>
        </ul>
        <p><strong>Incubation:</strong> Incubated at 37 °C.</p>
      </article>
    </div>
  </section>
</section>
