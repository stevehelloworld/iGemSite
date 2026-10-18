<section class="experiment-page">
  <div class="experiment-hero">
    <p class="experiment-eyebrow">LABORATORY NOTEBOOK</p>
    <h2>Wet Lab Chronological Record</h2>
    <p class="experiment-lead">This notebook records the procedures, calculations, observations, and troubleshooting steps documented between June 23 and August 4, 2026. Each entry is collapsed by default — click a date to expand its full protocol.</p>
  </div>

  <div class="notebook-toolbar">
    <button type="button" data-notebook-toggle="open">Expand all</button>
    <button type="button" data-notebook-toggle="close">Collapse all</button>
  </div>

  <!-- June 23, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">June 23, 2026</p>
      <h3>DNA Extraction and Inverse Phusion PCR</h3>
    </summary>
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
  </details>

  <!-- June 25, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">June 25, 2026</p>
      <h3>DNA Cleaning, Digestion, and Primer Reconstitution</h3>
    </summary>
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
        <p>Save the 1.5 ml collection tube holding the eluate and discard the spin column.</p>

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

        <h4>Second DNA Clean (Post-PCR)</h4>
        <p>The clean-up protocol is identical to the Zymo-Spin procedure above; only the Binding Buffer ratio changes with the sample type:</p>
        <ul>
          <li><strong><em>E. coli</em> plasmid (DNA Template) : Binding Buffer = 1:2</strong> &mdash; 25 µl : 50 µl.</li>
          <li><strong>MT (PCR Product) : Binding Buffer = 1:5</strong> &mdash; 25 µl : 125 µl.</li>
        </ul>

        <h4>Restriction Enzyme Digestion</h4>
        <p>Digestion of purified DNA fragments (<em>E. coli</em> plasmid ×2 & 4 MT PCR products) to generate compatible sticky ends for the later ligation.</p>
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

        <h4>Gel Electrophoresis</h4>
        <p>The digested fragments were run out on an agarose gel to check the products of the day.</p>
      </article>
    </div>
  </details>

  <!-- June 29, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">June 29, 2026</p>
      <h3>Ligation and Bacterial Cultivation</h3>
    </summary>
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
        <p><strong>Insert DNA Volume Calculation:</strong> Calculated through NEBioCalculator by entering the insert and vector DNA lengths, using a 3:1 molar ratio.</p>

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
        <p>Transformation was planned for the following day, so plasmid-free cells had to be grown up first.</p>
        <ul>
          <li><strong>Strain:</strong> <em>E. coli</em> Ek317.</li>
          <li><strong>Medium:</strong> 2,000 µl of SOB inoculated with a tiny amount of Ek317.</li>
          <li><strong>Conditions:</strong> Shaker at 37 °C, 225 rpm.</li>
        </ul>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Ligation & Cultivation</span>
        <small>T4 ligation formulation and E. coli Ek317 liquid culture</small>
      </div>
    </div>
  </details>

  <!-- June 30, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">June 30, 2026</p>
      <h3>MT2 PCR, Competent Cells, and Electroporation</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Electroporation & Gel</span>
        <small>Electro-competent cells, pulse setup, and MT2 agarose gel</small>
      </div>

      <article class="experiment-section-copy">
        <h4>DNA Clean (Ligation Products)</h4>
        <p>Same Zymo-Spin protocol as June 25, with the Binding Buffer set for ligation products:</p>
        <ul>
          <li><strong>Ligation Product : Binding Buffer = 1:5</strong> &mdash; 20 µl : 100 µl (the same for MT2, MT3 and MT4).</li>
        </ul>

        <h4>Phusion PCR for MT2</h4>
        <ul>
          <li><strong>Primer Combination:</strong> Primer 3 & 5.</li>
          <li><strong>Reaction Mixture:</strong> DNA Template (2 µl), 5x Phusion HF Buffer (6 µl), dNTP (0.6 µl), Primer 3 (0.3 µl), Primer 5 (0.3 µl), Phusion polymerase (0.3 µl), ddH<sub>2</sub>O (20.5 µl).</li>
          <li><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), TM: 60.8 °C (20 s), 72 °C (30 s)] × 30 cycles; 72 °C (3 min); 4 °C (∞).</li>
        </ul>

        <h4>DNA Clean (MT2 PCR Product)</h4>
        <ul>
          <li><strong>PCR Product (MT2) : Binding Buffer = 1:5</strong> &mdash; 25 µl : 125 µl.</li>
        </ul>

        <h4>Preparation of Electro-Competent Cells</h4>
        <p>Harvest <em>E. coli</em> Ek317 during exponential growth (OD<sub>600</sub> ≈ 0.6) and subject it to repeated chilled, low-salt water washes.</p>
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
  </details>

  <!-- July 2, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 2, 2026</p>
      <h3>Colony PCR (MT1) and Digestion (MT2)</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Colony PCR Protocol</h4>
        <p>Screen transformants straight off the culture plates, so the target insert can be verified without having to pick colonies a day in advance.</p>
        <ul>
          <li><strong>Grid Setup:</strong> Picked 16 colonies from the <em>E. coli</em> Ek317 + MT1 transformant plate onto a mapped 16-grid plate (LB+Km).</li>
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
              <tr><td>50 mM Primer 1 (TK07 P1)</td><td>0.09 µl</td><td>1.62 µl</td></tr>
              <tr><td>50 mM Primer 2 (PU12 P2)</td><td>0.09 µl</td><td>1.62 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.26 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>252 µl</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h5>Thermocycle</h5>
        <p>94 °C (2 min); [94 °C (30 s), 57.6 °C (10 s), 72 °C (2 min)] × 35 cycles; 72 °C (3 min 30 s); 4 °C (∞).</p>
        <p>Each reaction was assembled from 1 µl of sample and 14 µl of master mix, then run out on a gel.</p>

        <h4>Restriction Enzyme (MT2)</h4>
        <p>Double digestion of MT2 constructs using XbaI and SalI (16 µl DNA, 2 µl 10x Buffer, 1 µl XbaI, 1 µl SalI) at 37 °C for 2 hr.</p>

        <h4>DNA Clean (MT2)</h4>
        <ul>
          <li><strong>MT2 : Binding Buffer = 1:5.</strong></li>
        </ul>

        <h4>MT3 & MT4 Status</h4>
        <p>Picked 16 colonies for MT3 and MT4 onto grid plates; incubated at 37 °C.</p>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Colony Screening</span>
        <small>16-grid master plate and MT1 colony PCR amplicon</small>
      </div>
    </div>
  </details>

  <!-- July 6, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 6, 2026</p>
      <h3>MT2 Ligation and Unsuccessful Colony PCR</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Screening Assessment</span>
        <small>Gel electrophoresis results demonstrating negative colony amplicon</small>
      </div>

      <article class="experiment-section-copy">
        <h4>MT2 Ligation</h4>
        <ul>
          <li><strong>Reaction Mixture:</strong> Vector DNA (100 ng), Insert DNA (3:1), T4 Ligase Buffer (2.0 µl), T4 Ligase (0.2 µl), ddH<sub>2</sub>O (up to 20 µl).</li>
          <li><strong>Calculations:</strong> MT2 Concentration = 14.7; Vector Concentration = 42.9. Vector volume: 100 / 42.9 ≈ 2.33 µl. NEBioCalculator insert volume: 29.78 / 14.7 ≈ 2.02 µl. ddH<sub>2</sub>O made up to 13.45 µl.</li>
          <li><strong>Thermocycle:</strong> 16 °C (14 hr), 37 °C (1 hr), 4 °C (∞).</li>
        </ul>

        <h4>Colony PCR (MT3 & MT4)</h4>
        <p>Picked 16 colonies each from the MT3 and MT4 transformant plates onto mapped 16-grid plates (LB+Km). Template prep: touch each colony with a pipette tip, resuspend in 10 µl ddH<sub>2</sub>O, heat at 96 °C for 12 min. Master Mix (36x) prepared using Taq Reaction Mixture components for a total volume of 504 µl; 1 µl sample + 14 µl master mix, then gel electrophoresis.</p>

        <div class="experiment-note-card">
          <p class="mb-0"><strong>Experimental Result Note:</strong> "Because the result came out unsuccessfully, we’re choosing more samples and reducing Colony PCR for MT3 & 4."</p>
        </div>

        <h4>Bacterial Cultivation</h4>
        <p>Strain <em>E. coli</em> Ek317 (without plasmid): 5,000 µl LB inoculated with a small amount of Ek317, shaker at 37 °C, 225 rpm.</p>

        <h4>16-Colony Grid for MT3 & MT4</h4>
        <p>Picked 16 colonies from the original plate onto a gridded plate and incubated at 37 °C.</p>
      </article>
    </div>
  </details>

  <!-- July 7, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 7, 2026</p>
      <h3>MT2 Transformation Redo</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>DNA Clean (Ligation Product)</h4>
        <ul>
          <li><strong>Ligation Product : Binding Buffer = 1:5</strong> &mdash; 20 µl : 100 µl.</li>
        </ul>

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
  </details>

  <!-- July 8 ~ July 16, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 8 ~ July 16, 2026</p>
      <h3>Troubleshooting and Colony PCR Series</h3>
    </summary>
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
          <li><strong>July 15:</strong> Colony PCR (MT3 ×16, MT1 ×2). No results observed; the log notes a possibility that "this is simply due to chance alone."</li>
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
              <tr><td>50 mM Primer 1 (TK07 P1)</td><td>0.09 µl</td><td>1.8 µl</td><td>4.68 µl</td></tr>
              <tr><td>50 mM Primer 2 (PU12 P2)</td><td>0.09 µl</td><td>1.8 µl</td><td>4.68 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.4 µl</td><td>3.64 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>280 µl</strong></td><td><strong>728 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </details>

  <!-- July 20, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 20, 2026</p>
      <h3>Ligation Redo for MT2, 3, and 4</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Revised Ligation Protocol</h4>
        <ul>
          <li><strong>Redo Mixture:</strong> Vector DNA (100 ng), Insert DNA (3:1), 2.8 µl T4 DNA Ligase Buffer, 0.3 µl T4 DNA Ligase, ddH<sub>2</sub>O (up to 20 µl).</li>
          <li><strong>Buffer Note:</strong> "We use the GC Buffer for the plasmid, which is different from the MH45 last time, using HF Buffer at Phusion PCR."</li>
        </ul>

        <p><strong>Thermocycle:</strong> 16 °C (16 hr), 37 °C (1 hr), 4 °C (∞).</p>

        <h4>Calculation Corrections and Volumes</h4>
        <ul>
          <li><strong>Vector Concentration:</strong> 42.9 (100 ÷ 42.9 ≈ 2.33 µl).</li>
          <li><strong>Insert volumes:</strong> calculated through NEBioCalculator at a 3:1 molar ratio.</li>
        </ul>

        <p>The log records the MT2 insert volume for this round as 2.92 µl, where the July 6 ligation recorded 2.02 µl from the same 29.78 / 14.7 calculation. Both figures are reproduced as written in the working log.</p>

        <h5>Concentrations and Resulting Volumes for the Redo</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Variant</th>
                <th>Concentration</th>
                <th>Insert DNA</th>
                <th>ddH<sub>2</sub>O Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>MT2</td><td>14.7</td><td>2.92 µl</td><td>13.45 µl</td></tr>
              <tr><td>MT3</td><td>22.7</td><td>2.11 µl</td><td>13.36 µl</td></tr>
              <tr><td>MT4</td><td>39.2</td><td>0.82 µl</td><td>14.65 µl</td></tr>
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
  </details>

  <!-- July 21, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 21, 2026</p>
      <h3>Final Transformation and Sequencing Prep</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Sequencing Plates</span>
        <small>Streaked clones and 1/3-plate glycerol/streak stocks of PVIS1</small>
      </div>

      <article class="experiment-section-copy">
        <h4>DNA Clean (Ligation Products)</h4>
        <ul>
          <li><strong>Ligation Product : Binding Buffer = 1:5</strong> &mdash; the same for MT2, MT3 and MT4.</li>
        </ul>

        <h4>Transformation via Electroporation (MT2, 3, 4)</h4>
        <ol>
          <li>Combined 4 µl target DNA (ligation product) with 40 µl electro-competent cells.</li>
          <li><strong>System Setup:</strong> 1800 V, 25 µF, 200 Ω, 1 mm cuvette.</li>
          <li>Immediately added 800 µl warm SOC to the cuvette to rescue the cells, without pipetting.</li>
          <li>Transferred the entire suspension to a culture tube.</li>
          <li><strong>Recovery:</strong> 37 °C shaking (225 rpm) for 1 hour.</li>
        </ol>

        <h4>Dilution & Plating</h4>
        <ul>
          <li><strong>Dilution:</strong> 10 µl of recovered culture (PVIS2, 3, 4) with 90 µl of 0.9% saline.</li>
          <li><strong>Plating:</strong> 40 µl of the undiluted culture spread on one side of the plate and 40 µl of the dilution on the other.</li>
        </ul>

        <h4>Sequence Plating + Stock</h4>
        <ul>
          <li><strong>Colonies Picked:</strong> Selected transformant colonies PVIS1 #2, #9, and #15 for sequencing.</li>
          <li><strong>Procedure:</strong> Used an inoculating loop to pick from the original plate.</li>
        </ul>
        <ul style="list-style-type: circle; margin-left: 20px;">
          <li><strong>Stock:</strong> Evenly spread colonies on 1/3 of a plate.</li>
          <li><strong>Sequencing:</strong> Draw one simple line for each colony on a separate plate.</li>
        </ul>
        <p><strong>Incubation:</strong> Incubated at 37 °C.</p>
      </article>
    </div>
  </details>

  <!-- July 22, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 22, 2026</p>
      <h3>Empty Plates, Fresh LB+Km Medium, and a Six-Sample Ligation</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Plating Check for MT2, MT3, and MT4</h4>
        <div class="experiment-note-card experiment-note-bug">
          <p class="mb-0"><strong>Observation:</strong> The plates from the July 21 transformation were expected to show colonies, but no colonies grew on any plate.</p>
        </div>

        <h4>Cell Culture Medium (LB + Kanamycin)</h4>
        <p>Fresh plates were prepared so the bacteria have a selective medium to grow on.</p>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Sodium chloride</td><td>10 g</td></tr>
              <tr><td>Bacterial tryptone</td><td>10 g</td></tr>
              <tr><td>Yeast extract</td><td>5 g</td></tr>
              <tr><td>Water</td><td>Up to 1 L</td></tr>
            </tbody>
          </table>
        </div>
        <p>Send the mixture for sterilization, add kanamycin after sterilization, then pour the medium into plates.</p>

        <h4>Ligation for MT2, MT3, and MT4 (Six Samples)</h4>
        <p>Covalently join the digested vector (plasmid) and MT inserts using T4 ligase. This round tests both the HF-buffer and GC-buffer plasmid preparations against every insert.</p>
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
              <tr><td>T4 DNA Ligase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>Up to 20 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>20 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h5>Samples (6 in total)</h5>
        <ol>
          <li>HF plasmid + MT2</li>
          <li>HF plasmid + MT3</li>
          <li>HF plasmid + MT4</li>
          <li>GC plasmid + MT2</li>
          <li>GC plasmid + MT3</li>
          <li>GC plasmid + MT4</li>
        </ol>
        <h5>Vector / Insert and Water Volumes</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Volume</th>
                <th>ddH<sub>2</sub>O</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>MT2 insert</td><td>2.92 µl</td><td>13.45 µl</td></tr>
              <tr><td>MT3 insert</td><td>2.11 µl</td><td>13.36 µl</td></tr>
              <tr><td>MT4 insert</td><td>0.82 µl</td><td>14.65 µl</td></tr>
              <tr><td>Vector plasmid (HF/GC)</td><td>2.33 µl</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 22 °C for 1 hr; 4 °C for ∞.</p>

        <h4>DNA Clean</h4>
        <p>Same Zymo-Spin protocol as June 25, except: ligation product : binding buffer = 1:5 for all 6 samples, and 10 µl ddH<sub>2</sub>O is added at the last step instead of 20 µl.</p>

        <h4>Transformation via Electroporation (All 6 Samples)</h4>
        <ol>
          <li>Combine 4 µl target DNA (MT2, 3, 4) with 40 µl prepared electro-competent cells.</li>
          <li><strong>System Setup:</strong> 1800 V, 25 µF, 200 Ω, 1 mm cuvette.</li>
          <li>Immediately add 800 µl warm SOC medium (pre-heated at 37 °C) to the cuvette. No pipetting.</li>
          <li>Transfer the entire suspension to a 25 mL culture tube.</li>
          <li>Incubate at 37 °C with shaking (225 rpm) for 1 hour.</li>
        </ol>

        <h4>Dilution & Plating (Three Concentrations)</h4>
        <ul>
          <li><strong>10<sup>−2</sup>:</strong> 0.4 µl bacterial suspension + 39.6 µl 0.9% saline.</li>
          <li><strong>10<sup>−1</sup>:</strong> 4 µl bacterial suspension + 36 µl 0.9% saline.</li>
          <li><strong>Whole cell:</strong> centrifuge the suspension at 6,900 rpm for 8 min, take 40 µl of the suspension on top, discard the flow-through, then pipette the remaining cells in the tube with those 40 µl.</li>
        </ul>
        <p>6 samples in total, each with 2 plates: one plate for whole cell, and a second plate with 10<sup>−1</sup> and 10<sup>−2</sup> on each half. Cell-spreader technique as on June 30.</p>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Six-Sample Ligation</span>
        <small>HF vs GC plasmid preparations paired with MT2, MT3, and MT4 inserts</small>
      </div>
    </div>
  </details>

  <!-- July 23, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 23, 2026</p>
      <h3>Colony PCR of the Six-Sample Transformants</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Colony Screening</span>
        <small>2% agarose gel of the first six colonies from PVIS2, PVIS3, and PVIS4</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Colony PCR (MT2, MT3, MT4; MT1 = Control)</h4>
        <ol>
          <li><strong>Grid Plate:</strong> Selected 13 colonies from PVIS2, 15 from PVIS3, and 15 from PVIS4.</li>
          <li><strong>Template Prep:</strong> Touched the first six colonies of each with a pipette tip and resuspended in 10 µl sterile ddH<sub>2</sub>O.</li>
          <li>Heat sample at 96 °C for 12 min. Samples: PVIS2 ×6, PVIS3 ×6, PVIS4 ×6, PVIS1 ×2.</li>
        </ol>

        <h5>Taq Reaction Mixture (Master Mix)</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>1x</th>
                <th>22x</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>249.7 µl</td></tr>
              <tr><td>10x Buffer</td><td>1.5 µl</td><td>33 µl</td></tr>
              <tr><td>DMSO</td><td>0.6 µl</td><td>13.2 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.3 µl</td><td>6.6 µl</td></tr>
              <tr><td>50 mM Primer 1 (TK07 P1)</td><td>0.09 µl</td><td>1.98 µl</td></tr>
              <tr><td>50 mM Primer 2 (PU12 P2)</td><td>0.09 µl</td><td>1.98 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.54 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>308 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 94 °C (2 min); [94 °C (30 s), 57.6 °C (10 s), 72 °C (2 min)] × 35 cycles; 72 °C (3 min 30 s); 4 °C (∞).</p>
        <p>Take 14 µl master mix and 1 µl sample. Remember to centrifuge the sample for 1 minute first.</p>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>100 bp ladder</li>
          <li>2% agarose gel: 44 mL TAE + 0.88 g agarose</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- July 24, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 24, 2026</p>
      <h3>Colony PCR of the Remaining Colonies</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Colony PCR (MT2, MT3, MT4; MT1 = Control)</h4>
        <ol>
          <li><strong>Grid Plate:</strong> Selected the rest of the colonies from yesterday (PVIS2 #7–13; PVIS3 and PVIS4 #7–15).</li>
          <li><strong>Template Prep:</strong> Touched each selected colony with a pipette tip and resuspended in 10 µl sterile ddH<sub>2</sub>O.</li>
          <li>Heat sample at 96 °C for 12 min. Samples: PVIS2 ×7, PVIS3 ×9, PVIS4 ×9, PVIS1 ×2.</li>
        </ol>

        <h5>Taq Reaction Mixture (Master Mix)</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>1x</th>
                <th>30x</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>340.5 µl</td></tr>
              <tr><td>10x Buffer</td><td>1.5 µl</td><td>45 µl</td></tr>
              <tr><td>DMSO</td><td>0.6 µl</td><td>18 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.3 µl</td><td>9 µl</td></tr>
              <tr><td>50 mM Primer 1 (TK07 P1)</td><td>0.09 µl</td><td>2.7 µl</td></tr>
              <tr><td>50 mM Primer 2 (PU12 P2)</td><td>0.09 µl</td><td>2.7 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>2.1 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>420 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 94 °C (2 min); [94 °C (30 s), 57.6 °C (10 s), 72 °C (2 min)] × 35 cycles; 72 °C (3 min 30 s); 4 °C (∞).</p>
        <p>Take 14 µl master mix and 1 µl sample. The sample needs to be centrifuged for 1 minute first.</p>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>100 bp ladder</li>
          <li>2% agarose gel: 60 mL TAE + 1.2 g agarose</li>
        </ul>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Second Screening Gel</span>
        <small>Remaining PVIS2–4 colonies against the PVIS1 control</small>
      </div>
    </div>
  </details>

  <!-- July 28, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 28, 2026</p>
      <h3>Restart from the Plasmid: Inverse PCR, MT PCR, DpnI, and Stocks</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Rebuilt Starting Material</span>
        <small>Linearized plasmid, fresh MT2–MT4 amplicons, and PVIS1 glycerol stocks</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Inverse Phusion PCR (Plasmid)</h4>
        <p>Amplify the entire plasmid vector outward to linearize the plasmid and add the restriction enzyme cutting sites. Two samples were run with exactly the same mixture.</p>
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
              <tr><td>5x Phusion HF Buffer</td><td>6 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.6 µl</td></tr>
              <tr><td>Primer 1 (VISP1)</td><td>0.3 µl</td></tr>
              <tr><td>Primer 2 (VISP2)</td><td>0.3 µl</td></tr>
              <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>22.01 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>30 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li><strong>Template Volume:</strong> Target Mass / Stock Concentration = 20 / 40.67 ≈ 0.49 µl.</li>
          <li><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), 61 °C (20 s), 72 °C (1:45)] × 30 cycles; 72 °C (3 min); 4 °C (∞).</li>
          <li><strong>Gel:</strong> 1% gel, 1 kb ladder, 22 mL TAE + 0.22 g agarose.</li>
        </ul>

        <h4>Phusion PCR for MT2, MT3, and MT4</h4>
        <p><strong>Primer Combinations:</strong> MT2 = Primer 3 & 5; MT3 = Primer 3 & 6; MT4 = Primer 3 & 7.</p>
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
              <tr><td>10 mM dNTP</td><td>0.6 µl</td></tr>
              <tr><td>Primer 1</td><td>0.3 µl</td></tr>
              <tr><td>Primer 2</td><td>0.3 µl</td></tr>
              <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>20.5 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>30 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), 60.8 °C (20 s), 72 °C (30 s)] × 30 cycles; 72 °C (3 min); 4 °C (∞).</li>
          <li><strong>Gel:</strong> 100 bp ladder, 2% gel, 22 mL TAE + 0.44 g agarose.</li>
        </ul>

        <h4>DNA Clean (Plasmid)</h4>
        <p>Same protocol as June 25, except for the binding buffer amount and the last centrifuge step. Plasmid : binding buffer = 1:2 (25 µl : 50 µl). Last step: after adding sterile water, centrifuge into the same 1.5 mL tube.</p>

        <h4>DpnI Digestion (Plasmid)</h4>
        <p>Digest the methylated template DNA (parental plasmid isolated from <em>E. coli</em>).</p>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Plasmid (DNA Template)</td><td>20 µl</td></tr>
              <tr><td>Buffer</td><td>2 µl</td></tr>
              <tr><td>DpnI</td><td>0.5 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>22.5 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 37 °C for 2 hr; 4 °C for ∞.</p>

        <h4>DNA Clean (MT2, MT3, MT4)</h4>
        <p>MT constructs : binding buffer = 1:5 (25 µl : 125 µl). Last step: centrifuge into the same 1.5 mL tube for the same MT construct.</p>

        <h4>Making 0.9% Saline</h4>
        <p>0.45 g NaCl + ddH<sub>2</sub>O up to 50 mL.</p>

        <h4>Making Glycerol Stock for PVIS1 #2, #9, #15</h4>
        <ul>
          <li><strong>Material:</strong> 1 mL 0.9% saline + 87 µl DMSO + bacteria, in a bacteria stock tube (glycerol stock vial).</li>
          <li>Use an inoculating loop to pick up the bacteria from each plate. For each strain, keep 2 stocks (6 vials in total).</li>
          <li>After picking up the bacteria, vortex the vial until the bacteria are fully dissolved.</li>
        </ul>

        <h4>DNA Clean (Plasmid after DpnI)</h4>
        <p>Same protocol as June 25 except for the binding buffer amount: plasmid : binding buffer = 1:2 (22.5 µl : 45 µl).</p>
      </article>
    </div>
  </details>

  <!-- July 30, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 30, 2026</p>
      <h3>Third Transformation of MT2, MT3, and MT4</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>DNA Clean (MT2, MT3, MT4)</h4>
        <p>Same protocol as June 25, except: ligation product : binding buffer = 1:2 (20 µl : 40 µl), and 10 µl ddH<sub>2</sub>O is added at the last step instead of 20 µl.</p>

        <h4>Transformation via Electroporation</h4>
        <ol>
          <li>Combine 4 µl target DNA (MT2 / 3 / 4) with 40 µl prepared electro-competent cells.</li>
          <li><strong>System Setup:</strong> 1800 V, 25 µF, 200 Ω, 1 mm cuvette.</li>
          <li>Immediately add 800 µl warmed SOC medium to the cuvette. No pipetting.</li>
          <li>Transfer the entire suspension to a culture tube.</li>
          <li>Incubate at 37 °C with shaking (225 rpm) for 1.5 hours.</li>
        </ol>

        <h4>Dilution & Plating (Three Concentrations)</h4>
        <ul>
          <li><strong>10<sup>−2</sup>:</strong> 0.4 µl bacterial suspension + 39.6 µl 0.9% saline.</li>
          <li><strong>10<sup>−1</sup>:</strong> 4 µl bacterial suspension + 36 µl 0.9% saline.</li>
          <li><strong>Whole cell:</strong> centrifuge at 6,900 rpm for 8 min, take 40 µl of the suspension on top, discard the flow-through, then pipette the remaining cells with those 40 µl.</li>
        </ul>
        <p>3 samples in total, each with 2 plates: one with whole cell, the second with 10<sup>−1</sup> and 10<sup>−2</sup> on each half. Cell-spreader technique as on June 30.</p>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Third-Round Plates</span>
        <small>Whole-cell and diluted platings for MT2, MT3, and MT4</small>
      </div>
    </div>
  </details>

  <!-- July 31, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">July 31, 2026</p>
      <h3>Colony PCR of the Third-Round Transformants</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Third Screening Gel</span>
        <small>First eight colonies each from PVIS2, PVIS3, and PVIS4</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Colony PCR (MT2, MT3, MT4; MT1 = Control)</h4>
        <ol>
          <li><strong>Grid Plate:</strong> Selected 20 colonies each from PVIS2, PVIS3, and PVIS4.</li>
          <li><strong>Template Prep:</strong> Touched the first eight colonies of each with a pipette tip and resuspended in 10 µl sterile ddH<sub>2</sub>O.</li>
          <li>Heat sample at 96 °C for 12 min. Samples: PVIS2 ×8, PVIS3 ×8, PVIS4 ×8, PVIS1 ×2.</li>
        </ol>

        <h5>Taq Reaction Mixture (Master Mix)</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>1x</th>
                <th>28x</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ddH<sub>2</sub>O</td><td>11.35 µl</td><td>317.8 µl</td></tr>
              <tr><td>10x Buffer</td><td>1.5 µl</td><td>42 µl</td></tr>
              <tr><td>DMSO</td><td>0.6 µl</td><td>16.8 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.3 µl</td><td>8.4 µl</td></tr>
              <tr><td>50 mM Primer 1 (TK07 P1)</td><td>0.09 µl</td><td>2.52 µl</td></tr>
              <tr><td>50 mM Primer 2 (PU12 P2)</td><td>0.09 µl</td><td>2.52 µl</td></tr>
              <tr><td>Taq Polymerase</td><td>0.07 µl</td><td>1.96 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>14 µl</strong></td><td><strong>392 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 94 °C (2 min); [94 °C (30 s), 57.6 °C (10 s), 72 °C (2 min)] × 35 cycles; 72 °C (3 min 30 s); 4 °C (∞).</p>
        <p>Take 1 µl sample + 14 µl master mix. Remember to centrifuge the sample for 1 minute first.</p>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>60 mL TAE</li>
          <li>2% gel, 1.2 g agarose</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- August 3, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">August 3, 2026</p>
      <h3>Rebuilding the Constructs: PCR, Digestion, and Ligation</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Phusion PCR for MT2, MT3, and MT4 (Two Samples per MT)</h4>
        <p><strong>Primer Combinations:</strong> MT2 = Primer 3 & 5; MT3 = Primer 3 & 6; MT4 = Primer 3 & 7.</p>
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
              <tr><td>10 mM dNTP</td><td>0.6 µl</td></tr>
              <tr><td>Primer 1</td><td>0.3 µl</td></tr>
              <tr><td>Primer 2</td><td>0.3 µl</td></tr>
              <tr><td>Phusion Polymerase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>20.5 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>30 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), 60.8 °C (20 s), 72 °C (30 s)] × 30 cycles; 72 °C (3 min); 4 °C (∞).</p>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>22 mL TAE + 0.44 g agarose (2% gel)</li>
          <li>1 kb ladder</li>
        </ul>

        <h4>DNA Clean (Binding Buffer : Sample = 5:1)</h4>
        <p>Same protocol as June 25, except that the last step combines the 2 samples from the same MT.</p>

        <h4>Concentration Tests</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Sample</th>
                <th>Concentration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>MT2</td><td>30</td></tr>
              <tr><td>MT3</td><td>37.5</td></tr>
              <tr><td>MT4</td><td>18.9</td></tr>
              <tr><td>Plasmid extractions (×3)</td><td>109.3, 117.2, 110.1</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Plasmid Extraction</h4>
        <p>Same QIA Spin MiniPrep protocol as June 23.</p>

        <h4>Restriction Enzyme Digestion (MT + Plasmid)</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>DNA fragments</td><td>~1000</td></tr>
              <tr><td>10x Buffer (Green)</td><td>3 µl</td></tr>
              <tr><td>Restriction Enzyme (SalI)</td><td>1 µl</td></tr>
              <tr><td>Restriction Enzyme (XbaI)</td><td>1 µl</td></tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li><strong>Thermocycle:</strong> 37 °C for 2 hr; 4 °C for ∞.</li>
          <li><strong>Gel:</strong> 1% gel, 1 kb ladder, 130 V, 18 min.</li>
        </ul>

        <h4>DNA Clean</h4>
        <p>Same protocol as June 25 for the MT constructs.</p>

        <h4>Ligation</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th>Components</th>
                <th>Volume/Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Vector DNA</td><td>100 ng (8 µl)</td></tr>
              <tr><td>Insert DNA</td><td>3:1 molar ratio (8 µl)</td></tr>
              <tr><td>T4 DNA Ligase Buffer</td><td>2 µl</td></tr>
              <tr><td>T4 DNA Ligase</td><td>0.2 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>Up to 20 µl (1.8 µl)</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>20 µl</strong></td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Digestion Gel</span>
        <small>MT2–MT4 amplicons and freshly extracted plasmid after SalI/XbaI digestion</small>
      </div>
    </div>
  </details>

  <!-- August 4, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">August 4, 2026</p>
      <h3>Sequencing, Cleanup, and Transformation</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Sequencing Submission</span>
        <small>Samples sent for sequencing before the next transformation round</small>
      </div>

      <article class="experiment-section-copy">
        <h4>Sequencing</h4>
        <p>Samples were sent for sequencing.</p>

        <h4>DNA Clean</h4>
        <p>Same protocol as June 25; plasmid : binding buffer = 1:2.</p>

        <h4>Transformation via Electroporation</h4>
        <p>Transformation carried out following the electroporation protocol above.</p>
      </article>
    </div>
  </details>

  <!-- August 5, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">August 5, 2026</p>
      <h3>Colony PCR and Gel</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>Colony PCR followed by gel electrophoresis.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Screening</span>
        <small>The last screening round before the August break</small>
      </div>
    </div>
  </details>

  <!-- August 28, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">August 28, 2026</p>
      <h3>Culturing the Four Verified Clones</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Four 50 ml tubes</span>
        <small>10 ml LB + 10 µl kanamycin each, one per verified clone</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Bacterial Culture</h4>
        <p>10 ml of LB medium and 10 µl of kanamycin were added to each 50 ml tube, for all four strains:</p>
        <ul>
          <li>pVIS1 #2</li>
          <li>pVIS2 #8</li>
          <li>pVIS3 #6</li>
          <li>pVIS4 #1</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- August 29, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">August 29, 2026</p>
      <h3>Plasmid Extraction and Quantification</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>DNA Extraction</h4>
        <p>Two samples were extracted for each strain.</p>

        <h4>Concentration Test</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr><th>Strain</th><th>Concentration (sample #1)</th><th>Concentration (sample #2)</th></tr>
            </thead>
            <tbody>
              <tr><td>pVIS1 #1</td><td>117.8 ng/µl</td><td>135.9 ng/µl</td></tr>
              <tr><td>pVIS2 #8</td><td>111.8 ng/µl</td><td>121.6 ng/µl</td></tr>
              <tr><td>pVIS3 #6</td><td>153.4 ng/µl</td><td>129.5 ng/µl</td></tr>
              <tr><td>pVIS4 #1</td><td>149.9 ng/µl</td><td>119.8 ng/µl</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>1 kb ladder</li>
          <li>7 &times; 7 cm tray, 1% gel (22 ml TAE and 0.22 g agarose)</li>
        </ul>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Eight preps</span>
        <small>Two per clone, all between 111 and 154 ng/µl</small>
      </div>
    </div>
  </details>

  <!-- August 31, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">August 31, 2026</p>
      <h3>Cutting Out Lpp-OmpA to Build pVIS5&ndash;pVIS8</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Scaffold removal</span>
        <small>Phusion PCR around the plasmid, leaving the Lpp-OmpA anchor out of the product</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Phusion PCR (excluding Lpp-OmpA)</h4>
        <p>Amplify the plasmid, excluding Lpp-OmpA, for all four strains. Each strain was run as two samples.</p>
        <h5>Reaction Mixture</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th>Component</th><th>Volume</th></tr></thead>
            <tbody>
              <tr><td>Plasmid template</td><td>8 ng &rarr; 0.8 µl</td></tr>
              <tr><td>5&times; Phusion HF Buffer</td><td>6 µl</td></tr>
              <tr><td>10 mM dNTP</td><td>0.6 µl</td></tr>
              <tr><td>Primer 1</td><td>0.3 µl</td></tr>
              <tr><td>Primer 2</td><td>0.3 µl</td></tr>
              <tr><td>Phusion polymerase</td><td>0.3 µl</td></tr>
              <tr><td>ddH<sub>2</sub>O</td><td>21.7 µl</td></tr>
              <tr><td><strong>Total Volume</strong></td><td><strong>30 µl</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h5>Primer Combinations and Template Dilutions</h5>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th>Template</th><th>Primer 1</th><th>Primer 2</th><th>Template</th><th>ddH<sub>2</sub>O</th></tr></thead>
            <tbody>
              <tr><td>pVIS1</td><td>VIS1p8</td><td>VIS1p9</td><td>1 µl</td><td>10.6 µl</td></tr>
              <tr><td>pVIS2</td><td>VIS1p8</td><td>VIS2p1</td><td>1 µl</td><td>10 µl</td></tr>
              <tr><td>pVIS3</td><td>VIS1p8</td><td>VIS3p1</td><td>1 µl</td><td>13.81 µl</td></tr>
              <tr><td>pVIS4</td><td>VIS1p8</td><td>VIS4p1</td><td>1 µl</td><td>13.5 µl</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Thermocycle:</strong> 98 °C (30 s); [98 °C (10 s), 59.7 °C / 63 °C (20 s), 72 °C (3 min 55 s)] &times; 30 cycles; 72 °C (3 min); 4 °C (&infin;).</p>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>1 kb ladder</li>
          <li>7 &times; 7 cm tray, 1% gel (22 ml TAE and 0.22 g agarose)</li>
        </ul>

        <h4>Cleanup and Excision</h4>
        <ul>
          <li>DNA clean for pVIS5.</li>
          <li>Gel excision for pVIS6, 7 and 8.</li>
        </ul>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th></th><th>pVIS6</th><th>pVIS7</th></tr></thead>
            <tbody>
              <tr><td>Gel weight</td><td>50 mg</td><td>100 mg</td></tr>
              <tr><td>ADB</td><td>150 mg</td><td>300 mg</td></tr>
            </tbody>
          </table>
        </div>
        <p>DpnI digestion, then DNA clean for pVIS5, 6 and 7 after DpnI.</p>

        <div class="experiment-note-card experiment-note-bug">
          <p class="mb-0"><strong>Troubleshooting:</strong> accidentally cut the band for pVIS8, therefore redo Phusion PCR for pVIS8 tomorrow.</p>
        </div>

        <div class="experiment-note-card">
          <p class="mb-1"><strong>Summary:</strong> did Phusion PCR using a designed primer to cut out the Lpp-OmpA part for pVIS1&ndash;4, creating pVIS5&ndash;8, where pVIS1 and pVIS5 share the same MT, and the others follow the same logic.</p>
          <p class="mb-0"><strong>Explanation:</strong> DNA clean is done for pVIS5 because the gel photo shows one clear band. Gel photos of pVIS5, 6 and 7 show 2 bands, therefore, to better preserve the fragment we want, gel excision is done.</p>
        </div>
      </article>
    </div>
  </details>

  <!-- September 1, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 1, 2026</p>
      <h3>pVIS8 Redo, Self-Circularisation and Transformation</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Phusion PCR using pVIS4 #1</h4>
        <p>The pVIS8 amplification was repeated from the pVIS4 #1 template.</p>

        <h4>Gel Electrophoresis</h4>
        <ul>
          <li>1 kb ladder</li>
          <li>7 &times; 7 cm tray, 1% gel (22 ml TAE and 0.22 g agarose)</li>
        </ul>

        <h4>Gel Excision</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th></th><th>pVIS8</th></tr></thead>
            <tbody>
              <tr><td>Gel weight</td><td>110 mg</td></tr>
              <tr><td>ADB</td><td>330 mg</td></tr>
            </tbody>
          </table>
        </div>
        <p>DpnI digestion, then DNA clean.</p>

        <h4>Concentration Test</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th>Plasmid</th><th>Concentration</th></tr></thead>
            <tbody>
              <tr><td>pVIS5</td><td>30.05 ng/µl</td></tr>
              <tr><td>pVIS6</td><td>5.7 ng/µl</td></tr>
              <tr><td>pVIS7</td><td>20.4 ng/µl</td></tr>
              <tr><td>pVIS8</td><td>13.2 ng/µl</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Ligation</h4>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th>Plasmid</th><th>Digestion mixture (DM)</th><th>Amount added (DM / concentration)</th></tr></thead>
            <tbody>
              <tr><td>pVIS5</td><td>50 ng</td><td>1.67 µl</td></tr>
              <tr><td>pVIS6</td><td>All</td><td>15.41 µl</td></tr>
              <tr><td>pVIS7</td><td>50 ng</td><td>2.5 µl</td></tr>
              <tr><td>pVIS8</td><td>100 ng</td><td>7.7 µl</td></tr>
            </tbody>
          </table>
        </div>
        <p>DNA clean, then transformation via electroporation of a total of 4 samples, followed by plating.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Four self-circularised</span>
        <small>pVIS6 was so dilute at 5.7 ng/µl that the whole digestion mixture went in</small>
      </div>
    </div>
  </details>

  <!-- September 2, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 2, 2026</p>
      <h3>Screening the Scaffold-Free Constructs</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>2% gel</span>
        <small>100 bp ladder, because the screening product is short</small>
      </div>
      <article class="experiment-section-copy">
        <p>Colony PCR followed by gel electrophoresis.</p>
        <ul>
          <li>100 bp ladder</li>
          <li>16 &times; 10 cm tray, 2% gel (60 ml TAE and 1.2 g agarose)</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- September 3, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 3, 2026</p>
      <h3>Second Screening Round</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>Colony PCR followed by gel electrophoresis.</p>
        <ul>
          <li>100 bp ladder</li>
          <li>16 &times; 10 cm tray, 2% gel (60 ml TAE and 1.2 g agarose)</li>
        </ul>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Repeat screen</span>
        <small>Same gel conditions as the previous day</small>
      </div>
    </div>
  </details>

  <!-- September 4, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 4, 2026</p>
      <h3>First Clones Picked for Sequencing</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Three clones</span>
        <small>pVIS6-1, pVIS7-2 and pVIS8-4 plated for stock and for sequencing</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Stock Plating</h4>
        <ul><li>pVIS6-1</li><li>pVIS7-2</li><li>pVIS8-4</li></ul>
        <h4>Sequence Plating and Preparation</h4>
        <ul><li>pVIS6-1</li><li>pVIS7-2</li><li>pVIS8-4</li></ul>
      </article>
    </div>
  </details>

  <!-- September 8, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 8, 2026</p>
      <h3>Plating, and the First Testing Pre-Culture</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Stock Plating</h4>
        <ul><li>pVIS5-22</li><li>pVIS6-1</li><li>pVIS7-2</li></ul>
        <h4>Sequence Plating and Preparation</h4>
        <ul><li>pVIS5-22</li><li>pVIS6-1</li><li>pVIS7-2</li></ul>

        <h4>Inoculation for Testing &mdash; LB Medium</h4>
        <p>The references carried on every testing plate from here on:</p>
        <ul>
          <li><strong>pMH45</strong> &mdash; original plasmid with only GFP expression</li>
          <li><strong>pTK03</strong> &mdash; negative control, without GFP expression</li>
          <li><strong>pYC08</strong> &mdash; positive control, with GFP expression</li>
        </ul>

        <h5>Pre-culture plate map</h5>
        <p>The layout below is the pattern every pre-culture plate follows: strains in triplicate rows, with the whole perimeter filled with ddH<sub>2</sub>O as an evaporation barrier.</p>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead><tr><th></th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th><th>12</th></tr></thead>
            <tbody>
              <tr><td>A</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>B</td><td>ddH<sub>2</sub>O</td><td>pMH45</td><td>pVIS1</td><td>pVIS2</td><td>pVIS3</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pMH45</td><td>pVIS1-2</td><td>pVIS2-8</td><td>pVIS3-6</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>C</td><td>ddH<sub>2</sub>O</td><td>pMH45</td><td>pVIS1</td><td>pVIS2</td><td>pVIS3</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pMH45</td><td>pVIS1-2</td><td>pVIS2-8</td><td>pVIS3-6</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>D</td><td>ddH<sub>2</sub>O</td><td>pMH45</td><td>pVIS1</td><td>pVIS2</td><td>pVIS3</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pMH45</td><td>pVIS1-2</td><td>pVIS2-8</td><td>pVIS3-6</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>E</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pVIS4</td><td>pTK03</td><td>pYC08</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pVIS4-1</td><td>pTK03</td><td>pYC08</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>F</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pVIS4</td><td>pTK03</td><td>pYC08</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pVIS4-1</td><td>pTK03</td><td>pYC08</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>G</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pVIS4</td><td>pTK03</td><td>pYC08</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>pVIS4-1</td><td>pTK03</td><td>pYC08</td><td>ddH<sub>2</sub>O</td></tr>
              <tr><td>H</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td><td>ddH<sub>2</sub>O</td></tr>
            </tbody>
          </table>
        </div>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Perimeter ddH<sub>2</sub>O</span>
        <small>Row A, row H and columns 1, 6, 7 and 12 held water against evaporation</small>
      </div>
    </div>
  </details>

  <!-- September 9, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 9, 2026</p>
      <h3>Sequencing Sent, EDTA Step Scaled</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>15 samples</span>
        <small>3.2 µl EDTA into 3,196.8 µl medium</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Send Sequence</h4>
        <ul><li>pVIS5-22</li><li>pVIS6-1</li><li>pVIS7-2</li></ul>

        <h4>EDTA Addition for Testing &mdash; LB Medium</h4>
        <ul>
          <li>Simply add 200 µl of medium for positive and negative control.</li>
          <li>EDTA : medium = 2 µl : 1998 µl.</li>
          <li>15 samples: 200 µl &times; 16 (always make 1&ndash;2 additional) = 3,200 µl.</li>
          <li>3,200 / 2,000 = 1.6.</li>
          <li>EDTA: 2 &times; 1.6 = 3.2 µl; medium: 1998 &times; 1.6 = 3,196.8 µl.</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- September 10, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 10, 2026</p>
      <h3>First Plate Reader Run</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>Plate reader testing in LB medium, covering pMH45 and pVIS1&ndash;pVIS4 against the pTK03 and pYC08 references.</p>
        <p>Each strain occupied a block of six columns &mdash; condition 0 with no cadmium, then conditions A to E at 8, 40, 200, 300 and 400 nM Cd<sup>2+</sup> &mdash; across three replicate rows, with LB + Glu + Km in the no-cadmium column and LB + Glu + Km + Cd in the rest. The full parameter set is on the <a href="measurement">Measurements</a> page.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>pMH45 and pVIS1&ndash;4</span>
        <small>Six cadmium conditions, three replicate rows per strain</small>
      </div>
    </div>
  </details>

  <!-- September 11 ~ September 13, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 11 ~ September 13, 2026</p>
      <h3>Growth Rate Calculations</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Three days</span>
        <small>Working the 10 September kinetic data into growth rates</small>
      </div>
      <article class="experiment-section-copy">
        <p>Calculating the growth rate for the result from the plate reader testing.</p>
      </article>
    </div>
  </details>

  <!-- September 14, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 14, 2026</p>
      <h3>Three Sequences Confirmed</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Sequence Results Out</h4>
        <p>pVIS5-22, pVIS6-1 and pVIS7-2 correct.</p>
        <h4>Making Stock</h4>
        <ul><li>pVIS5-22</li><li>pVIS6-1</li><li>pVIS7-2</li></ul>
        <h4>Sequence Plating</h4>
        <ul><li>pVIS8-4</li></ul>
        <p>Finished calculating the growth rate for the plate reader testing result from 10 September.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Three of four</span>
        <small>pVIS5, pVIS6 and pVIS7 verified; pVIS8 still outstanding</small>
      </div>
    </div>
  </details>

  <!-- September 15, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 15, 2026</p>
      <h3>pVIS8-4 Sent, GFP Analysis Started</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>GFP pass</span>
        <small>Working the same kinetic data for fluorescence</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Send Sequence</h4>
        <ul><li>pVIS8-4</li></ul>
        <p>Calculating the GFP for the plate reader testing result from 10 September.</p>
      </article>
    </div>
  </details>

  <!-- September 16, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 16, 2026</p>
      <h3>GFP Calculations Finished</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>Finished calculating the GFP for the plate reader testing result from 10 September.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Run one complete</span>
        <small>Growth rate and GFP both worked up</small>
      </div>
    </div>
  </details>

  <!-- September 17, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 17, 2026</p>
      <h3>Wrong Colony Sequenced</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>pVIS8-4 failed</span>
        <small>The intended clone was pVIS8-12</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Sequence Results Out</h4>
        <p>pVIS8-4 failed.</p>
        <div class="experiment-note-card experiment-note-bug">
          <p class="mb-0"><strong>Troubleshooting:</strong> picked the incorrect colony for sending sequence. We were supposed to send pVIS8-12, however, we sent pVIS8-4.</p>
        </div>
        <h4>Sequence Plating</h4>
        <ul><li>pVIS8-12</li><li>pVIS8-13</li></ul>
        <h4>Stock Plating</h4>
        <ul><li>pVIS8-12</li><li>pVIS8-13</li></ul>
      </article>
    </div>
  </details>

  <!-- September 18, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 18, 2026</p>
      <h3>Two More pVIS8 Clones Sent</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Send Sequence</h4>
        <ul><li>pVIS8-12</li><li>pVIS8-13</li></ul>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Second attempt</span>
        <small>pVIS8-12 and pVIS8-13 submitted together</small>
      </div>
    </div>
  </details>

  <!-- September 21, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 21, 2026</p>
      <h3>Pre-Culture for the Scaffold-Free Set</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>pVIS5&ndash;8</span>
        <small>pVIS5, pVIS6, pVIS7, pVIS8-12 and pVIS8-13 against the three references</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Inoculation for Testing &mdash; LB Medium</h4>
        <p>Plated in the same pattern as 8 September, this time carrying pVIS5, pVIS6, pVIS7, pVIS8-12 and pVIS8-13 alongside:</p>
        <ul>
          <li><strong>pMH45</strong> &mdash; original plasmid with only GFP expression</li>
          <li><strong>pTK03</strong> &mdash; negative control, without GFP expression</li>
          <li><strong>pYC08</strong> &mdash; positive control, with GFP expression</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- September 22, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 22, 2026</p>
      <h3>A Deletion After the RBS</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>EDTA Addition &mdash; LB Medium</h4>
        <ul>
          <li>Simply add 200 µl of medium for positive and negative control.</li>
          <li>EDTA : medium = 2 µl : 1998 µl.</li>
          <li>12 samples: 200 µl &times; 14 (always make 1&ndash;2 additional) = 2,800 µl.</li>
          <li>2,800 / 2,000 = 1.4.</li>
          <li>EDTA: 2 &times; 1.4 = 2.8 µl; medium: 1998 &times; 1.4 = 2,797.2 µl.</li>
        </ul>

        <h4>Sequence Results Out</h4>
        <div class="experiment-note-card experiment-note-bug">
          <p class="mb-0">Both pVIS8-12 and pVIS8-13 have a deletion after the RBS, which makes both unusable. Therefore, we are going to send another sample to sequence again this week.</p>
        </div>

        <h4>Sequence Plating</h4>
        <ul><li>pVIS8-11</li><li>pVIS8-14</li></ul>
        <h4>Stock Plating</h4>
        <ul><li>pVIS8-11</li><li>pVIS8-14</li></ul>
        <p>Finished the sample assay design.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Third attempt</span>
        <small>pVIS8-11 and pVIS8-14 plated after the deletion was found</small>
      </div>
    </div>
  </details>

  <!-- September 23, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 23, 2026</p>
      <h3>Second Plate Reader Run</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>LB medium</span>
        <small>The scaffold-free constructs on the reader for the first time</small>
      </div>
      <article class="experiment-section-copy">
        <p>Plate reader testing in LB medium.</p>
        <p>The stock plate and sequence plate were put in the refrigerator; sequencing would be sent out the following day.</p>
      </article>
    </div>
  </details>

  <!-- September 24, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 24, 2026</p>
      <h3>The Run Timed Out, and LB Turned Out to Be Too Salty</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <div class="experiment-note-card experiment-note-bug">
          <p class="mb-0"><strong>Troubleshooting:</strong> yesterday&rsquo;s plate reader testing wasn&rsquo;t run successfully, because the duration of testing is constrained by 1.5 hours, which stops the measurement at cycle six.</p>
        </div>

        <h4>Send Sequence</h4>
        <ul><li>pVIS8-11</li><li>pVIS8-14</li></ul>

        <div class="experiment-note-card">
          <p class="mb-0"><strong>Additional point:</strong> Don Hua University&rsquo;s testing centre mentioned that the sodium concentration inside LB medium is too high, which requires dilution that may potentially dilute the cadmium concentration to an untestable stage. Therefore, we decided to use a medium without added sodium for sending assay, which will also require the growth rate and GFP intensity test for all the samples.</p>
        </div>

        <p>Making medium without NaCl.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>No-sodium medium</span>
        <small>Every construct now has to be re-characterised in the new medium</small>
      </div>
    </div>
  </details>

  <!-- September 25, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 25, 2026</p>
      <h3>Starting Again in No-Sodium Medium</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>pVIS1&ndash;4</span>
        <small>First pre-culture in the sodium-free formulation</small>
      </div>
      <article class="experiment-section-copy">
        <p>Prepared the medium for testing (without sodium), then inoculation for testing of pVIS1&ndash;4 in that medium, carrying pMH45, pTK03 and pYC08 as before.</p>
      </article>
    </div>
  </details>

  <!-- September 26, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 26, 2026</p>
      <h3>Two Pre-Cultures in Parallel</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>EDTA Addition (pVIS1&ndash;4 testing, without sodium medium)</h4>
        <ul>
          <li>EDTA : medium = 2 µl : 1998 µl.</li>
          <li>15 samples: 200 µl &times; 17 = 3,400 µl.</li>
          <li>3,400 / 2,000 = 1.7.</li>
          <li>EDTA: 2 &times; 1.7 = 3.4 µl; medium: 1998 &times; 1.7 = 3,396.6 µl.</li>
        </ul>
        <h4>Inoculation for Testing (pVIS5&ndash;7, without sodium medium)</h4>
        <p>With pMH45, pTK03 and pYC08 as the references.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Overlapping runs</span>
        <small>One set going onto the reader while the next is pre-cultured</small>
      </div>
    </div>
  </details>

  <!-- September 27, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 27, 2026</p>
      <h3>pVIS1&ndash;4 in No-Sodium Medium</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Run three</span>
        <small>The display constructs re-measured without sodium</small>
      </div>
      <article class="experiment-section-copy">
        <h4>Plate Reader Testing (pVIS1&ndash;4, without sodium medium)</h4>
        <h4>EDTA Addition (pVIS5&ndash;7 testing, without sodium medium)</h4>
        <ul>
          <li>12 samples: 200 µl &times; 14 = 2,800 µl.</li>
          <li>2,800 / 2,000 = 1.4.</li>
          <li>EDTA: 2 &times; 1.4 = 2.8 µl; medium: 1998 &times; 1.4 = 2,797.2 µl.</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- September 28, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 28, 2026</p>
      <h3>pVIS5&ndash;7 in No-Sodium Medium</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Plate Reader Testing (pVIS5&ndash;7, without sodium medium)</h4>
        <h4>Inoculation for Testing (pVIS5&ndash;8, normal LB medium)</h4>
        <p>With pMH45, pTK03 and pYC08 as the references.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Run four</span>
        <small>Scaffold-free set without sodium, then set up again in normal LB</small>
      </div>
    </div>
  </details>

  <!-- September 29, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 29, 2026</p>
      <h3>EDTA Step for the pVIS5&ndash;8 Plate</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>18 samples</span>
        <small>The largest EDTA batch of the season</small>
      </div>
      <article class="experiment-section-copy">
        <h4>EDTA Addition (pVIS5&ndash;8 testing, normal LB medium)</h4>
        <ul>
          <li>18 samples: 200 µl &times; 20 = 4,000 µl.</li>
          <li>4,000 / 2,000 = 2.</li>
          <li>EDTA: 2 &times; 2 = 4 µl; medium: 1998 &times; 2 = 3,996 µl.</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- September 30, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">September 30, 2026</p>
      <h3>pVIS8 Finally Verified</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Sequence Results Out</h4>
        <p>Both pVIS8-11 and pVIS8-14 show the correct sequence. We chose to use pVIS8-11 for later plate reader testing.</p>
        <h4>Plate Reader Testing (pVIS5&ndash;8, normal LB medium)</h4>
        <h4>Inoculation for Testing (pVIS8-11, without sodium medium)</h4>
        <p>With pMH45, pTK03 and pYC08 as the references.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Fourth attempt</span>
        <small>pVIS8-11 carried forward after three failed clones</small>
      </div>
    </div>
  </details>

  <!-- October 1, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">October 1, 2026</p>
      <h3>EDTA Step for pVIS8-11</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>6 samples</span>
        <small>The smallest batch, for the last construct</small>
      </div>
      <article class="experiment-section-copy">
        <h4>EDTA Addition (pVIS8-11 testing, without sodium medium)</h4>
        <ul>
          <li>6 samples: 200 µl &times; 8 = 1,600 µl.</li>
          <li>1,600 / 2,000 = 0.8.</li>
          <li>EDTA: 2 &times; 0.8 = 1.6 µl; medium: 1,598.4 µl.</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- October 2, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">October 2, 2026</p>
      <h3>Last Plate Reader Run</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <h4>Plate Reader Testing (pVIS8-11, without sodium medium)</h4>
        <p>Finished the Don Hua University testing centre appointment order sheet.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Characterisation complete</span>
        <small>All eight constructs measured in both media</small>
      </div>
    </div>
  </details>

  <!-- October 5 ~ October 8, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">October 5 ~ October 8, 2026</p>
      <h3>Working Up the Last Three Runs</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Four days</span>
        <small>Growth rate and GFP intensity for three plate reader runs</small>
      </div>
      <article class="experiment-section-copy">
        <p>Calculating growth rate and GFP intensity from the plate reader testing data for the previous 3 tests.</p>
        <p>Emailed the Don Hua University testing centre our appointment order sheet.</p>
      </article>
    </div>
  </details>

  <!-- October 12, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">October 12, 2026</p>
      <h3>Booking the Cadmium Assay</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>Reserved sample assay testing through the Reservation Service Management System of Core Facilities for Basic Research.</p>
        <p>Inoculation for the sample assay. The left portion of the black line on the plate map represents the inoculation on 12 October.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>Sample assay</span>
        <small>Samples prepared for external cadmium quantification</small>
      </div>
    </div>
  </details>

  <!-- October 13, 2026 -->
  <details class="experiment-section experiment-section-reverse notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">October 13, 2026</p>
      <h3>Medium and EDTA for the Sample Assay</h3>
    </summary>
    <div class="experiment-section-layout">
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>27 samples</span>
        <small>5.8 µl EDTA into 5,794.2 µl of sodium-free medium</small>
      </div>
      <article class="experiment-section-copy">
        <p>Making medium without sodium (350 ml).</p>
        <h4>EDTA Addition (sample assay)</h4>
        <ul>
          <li>The right portion of the black line on the plate map represents the inoculation on 13 October.</li>
          <li>EDTA : medium = 2 µl : 1998 µl.</li>
          <li>27 samples: 200 µl &times; 29 (always make 1&ndash;2 additional) = 5,800 µl.</li>
          <li>5,800 / 2,000 = 2.9.</li>
          <li>EDTA: 2 &times; 2.9 = 5.8 µl; medium: 1998 &times; 2.9 = 5,794.2 µl.</li>
        </ul>
      </article>
    </div>
  </details>

  <!-- October 14, 2026 -->
  <details class="experiment-section notebook-entry">
    <summary class="experiment-section-header">
      <p class="experiment-card-kicker">October 14, 2026</p>
      <h3>Last Entry</h3>
    </summary>
    <div class="experiment-section-layout">
      <article class="experiment-section-copy">
        <p>The working log carries a heading for this date with no entry recorded beneath it. It is reproduced here so the record runs to the end of the notebook rather than stopping without explanation.</p>
      </article>
      <div class="experiment-figure-slot experiment-figure-slot-wide">
        <span>End of the log</span>
        <small>23 June to 14 October 2026</small>
      </div>
    </div>
  </details>
</section>
