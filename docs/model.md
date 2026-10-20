<div class="results-report" markdown="1">

# Modelling cadmium sensing and capture

A useful cadmium biosensor must distinguish changes in cadmium response from changes in bacterial growth and reporter timing. For Cadture, we used mathematical modelling to connect those measurements to practical decisions: which response models to retain, when to read fluorescence, and what experiments are needed before predicting cadmium capture.

Our analysis covers five distinct plate-reader runs and 126 sample–condition groups. We fitted growth and reporter trajectories, compared dose-response models using omitted-dose predictions, and tested whether a response curve transferred between two runs. The expanded data show that reporter-model preference depends on the experiment and analysis assumptions. They also identify a promising response comparison for pMH45, and conditions in which a monotone sensing calibration is not supported.

Capture is a separate modelling question. We used a closed-batch mass balance to explore assumed binding capacity and affinity. This calculation defines measurements for the next stage; it is not a measured removal result or a prediction of one-pass filter performance.

## Questions that guided our modelling

<div class="results-table-wrap"><table><thead><tr><th>Question</th><th>Model or analysis</th><th>Decision it informs</th></tr></thead><tbody>
<tr><td>How does growth vary between conditions?</td><td>Lagged logistic fits to an OD-derived proxy</td><td>Identify growth differences and unresolved plateaus</td></tr>
<tr><td>How does growth relate to fluorescence?</td><td>Two production laws with reporter maturation and apparent loss</td><td>Compare time-course descriptions and their assumptions</td></tr>
<tr><td>Can a response model predict excluded data?</td><td>Fixed-time dose curves, omitted-dose checks and prediction across runs</td><td>Select candidate calibrations and readout times</td></tr>
<tr><td>What controls capture?</td><td>Mass-conserving batch adsorption scenario</td><td>Plan direct capacity, affinity and kinetic measurements</td></tr>
</tbody></table></div>

## Experimental context and dataset

The intended system combines a cadmium-responsive reporter with metallothionein (MT) constructs. Reference sequence files and the construction workflow support four intended display/anchor-deleted pairs:

<div class="results-table-wrap"><table><thead><tr><th>MT label in the supplied design files</th><th>Intended Lpp–OmpA display construct</th><th>Anchor-deleted derivative</th></tr></thead><tbody>
<tr><td>IaMT2, MT1</td><td>pVIS1</td><td>pVIS5</td></tr>
<tr><td>SmtA, MT2</td><td>pVIS2</td><td>pVIS6</td></tr>
<tr><td>EGR_09832, MT3</td><td>pVIS3</td><td>pVIS7</td></tr>
<tr><td>OsMTI-1b, MT4</td><td>pVIS4</td><td>pVIS8</td></tr>
</tbody></table></div>

Each derivative reference is 390 bases shorter than its paired parent. This supports the design comparison; it does not establish localisation or capture activity in the assayed cultures. The pMH45 map contains regulator, GFP and ZitB annotations, so it is not treated as an empty-vector negative control. Final clone-to-assay identities and complete sequence verification remain to be linked to the measurement records.

<div class="results-table-wrap"><table><thead><tr><th>Run</th><th>Main labels</th><th>Medium label</th><th>Groups</th><th>Duration (h)</th></tr></thead><tbody>
<tr><td>20260910</td><td>pMH45, pVIS1–4</td><td>Normal</td><td>30</td><td>10.56</td></tr>
<tr><td>20260927</td><td>pMH45, pVIS1–4</td><td>No Na</td><td>30</td><td>10.56</td></tr>
<tr><td>20260928</td><td>pMH45, pVIS5–7</td><td>No Na</td><td>24</td><td>10.09</td></tr>
<tr><td>20260930</td><td>pMH45, pVIS5–8</td><td>Normal</td><td>30</td><td>10.56</td></tr>
<tr><td>20261002</td><td>pMH45, pVIS8</td><td>No Na</td><td>12</td><td>9.13</td></tr>
</tbody></table></div>

Run identifiers follow workbook filenames. Every measured run contains 35 time points. Numeric doses are documented for the first four; the last has six condition codes without a verified concentration key. A further workbook, 20260921, contains layouts without a raw measurement export and is excluded.

The 388 measured wells comprise 378 wells in the main groups and two additional single labelled wells per run. Each main group has three mapped wells. Their preparation history has not established whether they are independent cultures or aliquots, so we report across-well variability without calling it biological replication.

For the four dose-mapped runs, nominal added cadmium is 0, 8, 40, 200, 300 or 400 nM. The reader measured OD<sub>600</sub> and fluorescence at excitation/emission 488/528 nm with manual gain 70. These are turbidity and instrument-scaled fluorescence measurements, not independently calibrated cadmium concentrations.

The media were reported as LB + kanamycin + glucose, and LB described as "without sodium" + kanamycin + glucose. Final supplement concentrations and actual base recipes need confirmation. The written without-NaCl recipe also changes yeast extract from 5 to 10 g/L. The between-run comparison therefore cannot currently isolate a sodium-specific effect.

We compared repeated files by their measured contents before combining results. The older 20260910 readings were unchanged, and duplicate copies in the larger experiment archive were counted once. A repeated file was not treated as an additional experiment.

## Preparing observations for the models

For each well, we subtracted its first fluorescence reading and then averaged the three mapped wells:

<p class="results-equation"><em>y<sub>c</sub></em>(<em>t</em>) = ⅓ &sum;<sub><em>w</em>=1</sub><sup>3</sup> [<em>R</em><sub><em>w</em>,<em>c</em></sub>(<em>t</em>) &minus; <em>R</em><sub><em>w</em>,<em>c</em></sub>(0)]</p>

Here <em>R</em> is exported fluorescence in RFU and <em>c</em> identifies the documented condition. Initial subtraction measures change from the first observation; it does not separate medium fluorescence, cellular autofluorescence and reporter signal. Error bars are sample standard deviations across the three initially subtracted trajectories, not parameter confidence intervals.

The OD export has three spatial readings per well. Position 0;1 is systematically higher than the other two, but its physical cause is unverified. Primary analysis uses the mean of positions 1;1 and 2;1 minus an assumed 0.09 OD offset. No measured medium-only blank was identified in the measurement maps. We propagated alternative OD representations through both growth and reporter fitting.

One individual OD value is missing in run 20260930, well A6, at the final cycle. We did not impute it: the affected primary three-well group mean was omitted at that time. Fluorescence remains usable. Full preprocessing and source-cell references are in the methods supplement.

## Growth describes the observations but does not establish a mechanism

We fitted a lagged logistic model separately to each main group:

<p class="results-equation"><em>N</em>(<em>t</em>) = <em>K<sub>N</sub></em> / {1 + (<em>K<sub>N</sub></em>/<em>N</em><sub>0</sub> &minus; 1) exp[&minus;<em>&mu;</em><sub>max</sub>(<em>t</em> &minus; <em>&lambda;</em>, 0)]}, &nbsp; <em>&lambda;</em> &ge; 0</p>

<em>N</em> is the OD-derived proxy, <em>N</em><sub>0</sub> = <em>N</em>(0) its fitted starting value, <em>&mu;</em> a logistic rate, <em>K<sub>N</sub></em> an upper OD level and <em>&lambda;</em> a lag. The proxy is constant during the imposed lag and follows logistic growth afterwards. These parameters are not direct measurements of cell division, viable cell number or a limiting nutrient.

Across 126 primary fits, RMSE ranges from 0.0027 to 0.0260 OD. RMSE describes typical residual size in observation units. Residual patterns also matter: several trajectories decline after their peak, which this monotonic model cannot represent.

For pVIS7 in run 20260930 at 300 and 400 nM, relaxing the upper capacity bound permits much larger fitted capacities with only small error improvements. The observed window does not determine a useful plateau. We retain the recorded trajectories and withhold a biological carrying-capacity interpretation.

<figure class="results-chart">
<a href="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig1-growth-fits-20260930.webp" target="_blank" rel="noopener" aria-label="Open figure at full size"><img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig1-growth-fits-20260930.webp" alt="Growth curves and residuals for pMH45 and pVIS7 in run 20260930, with observations, fitted logistic curves and residuals at six cadmium doses" loading="lazy"></a>
<figcaption><strong>Figure 1.</strong> Run 20260930: observations, primary logistic fits and residuals for pMH45 and pVIS7. Colours represent nominal added doses. The pVIS7 high-dose curves have not resolved a plateau; neither slower growth nor fitted capacity measures cadmium removal.</figcaption>
</figure>

<p class="results-decision"><strong>Decision:</strong> use growth fits to describe the measured window and supply conditional inputs to reporter models. Investigate post-peak behaviour and unresolved plateaus before extrapolating growth.</p>

## Reporter production is not described equally well by one law

We represented immature and mature reporter pools separately:

<p class="results-equation">d<em>I</em>/d<em>t</em> = <em>a&thinsp;s</em>(<em>t</em>) &minus; (<em>m</em> + <em>&delta;</em>)<em>I</em>, &nbsp;&nbsp; d<em>F</em>/d<em>t</em> = <em>mI</em> &minus; <em>&delta;F</em></p>

<em>I</em> and <em>F</em> are instrument-scaled states per well. The nonnegative coefficient <em>a</em> is an effective production amplitude, <em>m</em> maturation and <em>&delta;</em> apparent fluorescence loss. These fits do not establish whether loss is caused by degradation, photobleaching or changing fluorescence yield.

We compared two production laws:

<p class="results-equation"><em>s</em><sub>BP</sub>(<em>t</em>) = <em>N</em>(<em>t</em>), &nbsp;&nbsp; <em>s</em><sub>GM</sub>(<em>t</em>) = <em>N</em>(<em>t</em>)[1 &minus; <em>N</em>(<em>t</em>)/<em>K<sub>N</sub></em>]</p>

Biomass-proportional production (BP) follows the OD proxy. Growth-modulated production (GM) decreases as the proxy approaches its upper level. Both are candidate descriptions with equal numbers of fitted reporter parameters.

Primary comparisons assume maturation <em>m</em> = 1 h<sup>&minus;1</sup>, incremental initial states <em>I</em>(0) = <em>F</em>(0) = 0, nonnegative amplitude and apparent loss between 0 and 1 h<sup>&minus;1</sup>. The loss interval is a numerical convention, not an experimentally established physiological range. Both alternatives use identical settings.

<div class="results-table-wrap"><table><thead><tr><th>Run</th><th>GM lower RMSE</th><th>BP lower RMSE</th><th>Ties</th><th>Groups</th></tr></thead><tbody>
<tr><td>20260910</td><td>30</td><td>0</td><td>0</td><td>30</td></tr>
<tr><td>20260927</td><td>27</td><td>3</td><td>0</td><td>30</td></tr>
<tr><td>20260928</td><td>12</td><td>9</td><td>3</td><td>24</td></tr>
<tr><td>20260930</td><td>21</td><td>9</td><td>0</td><td>30</td></tr>
<tr><td>20261002</td><td>9</td><td>3</td><td>0</td><td>12</td></tr>
</tbody></table></div>

GM has lower residual error in 99 of 126 groups, BP in 24, with three numerical ties. The original run favours GM in all 30 groups, but this preference does not hold across every new condition. Most primary BP fits reach an imposed loss bound, and both models leave temporal patterns in their residuals.

<figure class="results-chart">
<a href="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig2-reporter-models-pmh45.webp" target="_blank" rel="noopener" aria-label="Open figure at full size"><img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig2-reporter-models-pmh45.webp" alt="pMH45 fluorescence trajectories at 400 nM from two runs, with the two reporter production models fitted and their residuals" loading="lazy"></a>
<figcaption><strong>Figure 2.</strong> Representative pMH45 trajectories at 400 nM from two runs. Points and error bars show means and across-well sample SD; lines show the two models under identical settings. Residuals reveal departures that fitted curves alone can conceal. Differences between runs are not attributed solely to medium composition.</figcaption>
</figure>

A nonnegative model starting from zero cannot reproduce observed negative early changes. GM production also remains positive during the imposed growth lag, even though d<em>N</em>/d<em>t</em> = 0 there; a production-off-during-lag alternative was fitted separately. Protein produced early can mature and persist later.

<p class="results-decision"><strong>Decision:</strong> retain GM as a candidate time-course description while testing production, baseline and initial-pool assumptions. The comparison does not establish a universal production mechanism.</p>

## Sensitivity tests change the interpretation

We reran growth and reporter fits using four OD representations:

<div class="results-table-wrap"><table><thead><tr><th>OD representation</th><th>GM lower RMSE</th><th>BP lower RMSE</th><th>Ties</th></tr></thead><tbody>
<tr><td>Two positions, offset 0.09 OD</td><td>99</td><td>24</td><td>3</td></tr>
<tr><td>Two positions, offset 0.08 OD</td><td>92</td><td>30</td><td>4</td></tr>
<tr><td>Two positions, no offset</td><td>71</td><td>48</td><td>7</td></tr>
<tr><td>Three-position mean, offset 0.09 OD</td><td>80</td><td>42</td><td>4</td></tr>
</tbody></table></div>

Counts use maturation of 1 per hour and the same apparent-loss interval of 0 to 1 per hour. No offset is a sensitivity scenario, not evidence that the medium contributes zero OD.

With primary OD preprocessing but apparent loss allowed over 0 to 10 per hour for both reporter laws, the comparison changes to 78 GM, 45 BP and three ties. This wider interval is a mathematical stress test. A boundary value is a constrained estimate whose interpretation depends on its bounds.

Maturation was also tested at 0.5 and 2 per hour. Changing it changes the trajectory shape and requires refitting. The maps contain inherited GFPmut2 notes, but final reporter identity and a relevant maturation value remain to be confirmed.

Agreement between wells, residual error and parameter uncertainty answer different questions. We report conditional estimates and sensitivity profiles without assigning unsupported parameter confidence intervals.

## Dose response should be tested on omitted measurements

At each fixed readout, we compared a line, a power law and a Hill curve, plus a zero-dose-baseline comparator:

<p class="results-equation"><em>y</em><sub>line</sub>(<em>c</em>) = <em>b</em> + <em>A</em>(<em>c</em>/<em>c</em><sup>&lowast;</sup>), &nbsp;&nbsp; <em>y</em><sub>power</sub>(<em>c</em>) = <em>b</em> + <em>A</em>(<em>c</em>/<em>c</em><sup>&lowast;</sup>)<sup><em>n</em></sup>, &nbsp;&nbsp; <em>c</em><sup>&lowast;</sup> = 400 nM</p>

<p class="results-equation"><em>y</em><sub>Hill</sub>(<em>c</em>) = <em>b</em> + <em>A&thinsp;c</em><sup><em>n</em></sup> / (<em>K</em><sub>H</sub><sup><em>n</em></sup> + <em>c</em><sup><em>n</em></sup>), &nbsp;&nbsp; <em>y</em><sub>baseline</sub>(<em>c</em>) = <em>b</em></p>

The baseline <em>b</em> is fixed to the corresponding zero-dose mean and amplitude <em>A</em> is nonnegative. Hill <em>K</em><sub>H</sub> is a nominal-dose response scale, not MT binding affinity or measured intracellular cadmium. The Hill curve is an effective approximation, not an asserted exact reduction of the entire circuit.

We omitted one positive dose, fitted the remaining four and predicted the omitted response, repeating this for all five positive doses. The zero-dose baseline remains available in every fold. Holding out 400 nM requires extrapolation beyond the retained positive doses.

We evaluated fluorescence at exactly 5 and 9 hours, using interpolation, and at each run's endpoint. The 20261002 run is excluded from numeric dose fitting until its concentration key is confirmed.

Model ranking changes with label and time. For pVIS8 in run 20260930, five-hour omitted-dose RMSE is 80.36 RFU for Hill versus 91.79 RFU for a line. At the endpoint they are almost tied: 84.52 versus 83.78 RFU, respectively. Neither model is universally preferable.

For pVIS7 in both dose-mapped runs containing that label, the zero-dose baseline predicts omitted responses better than the tested monotone activation curves at all three readouts. These observations do not support a monotone sensing calibration for pVIS7 under those conditions; they do not establish absence of a cadmium response.

<figure class="results-chart">
<a href="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig3-dose-response-pvis7-pvis8.webp" target="_blank" rel="noopener" aria-label="Open figure at full size"><img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig3-dose-response-pvis7-pvis8.webp" alt="Dose-response curves for pVIS7 and pVIS8 in run 20260930 at fixed five- and nine-hour readouts, with fitted line, power and Hill candidates" loading="lazy"></a>
<figcaption><strong>Figure 3.</strong> Run 20260930, pVIS7 and pVIS8 at fixed 5- and 9-hour readouts. Curves are fitted candidates; error bars are across-well sample SD. Vertical scales differ. Curve-fitting error is distinct from omitted-dose prediction error, and total RFU is not per-cell expression.</figcaption>
</figure>

<p class="results-decision"><strong>Decision:</strong> compare predefined readout times and calibrations on independently prepared samples. Omitted-dose checks test forward fluorescence prediction; estimating cadmium in an unknown sample requires separate concentration validation.</p>

## Testing a prediction across two runs

The shared pMH45 label provides a further check. A five-hour Hill response fitted to run 20260910 predicted all six dose means in run 20260930, without refitting parameters or adjusting the target baseline, with RMSE 274.71 RFU. Reversing the training and prediction runs gave 218.82 RFU.

<figure class="results-chart">
<a href="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig4-cross-run-prediction.webp" target="_blank" rel="noopener" aria-label="Open figure at full size"><img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig4-cross-run-prediction.webp" alt="Five-hour dose means with curves fitted separately to each run, beside the prediction errors when parameters from run 20260910 are applied to run 20260930" loading="lazy"></a>
<figcaption><strong>Figure 4.</strong> Left: observed five-hour dose means and curves fitted separately to each run. Right: errors when parameters fitted to 20260910 predict 20260930. The target run is excluded from that fit. Both runs are Normal-labelled; culture independence and protocol matching remain unconfirmed.</figcaption>
</figure>

This is encouraging agreement for one shared label, and it tests transfer beyond fitting one plate. However, no acceptance tolerance was specified prospectively, the Hill exponent reaches its search bound, and the predicted output is fluorescence rather than measured cadmium. This remains an exploratory prediction check.

<p class="results-decision"><strong>Decision:</strong> plan a prospective test with a fixed readout, verified culture provenance and a predefined concentration-prediction criterion.</p>

## Capture requires its own measurements and mass balance

For the intended surface-display design, we explored a closed batch with fixed effective binding capacity <em>B</em>:

<p class="results-equation"><em>q</em> = <em>BC</em><sub>e</sub> / (<em>K</em><sub>d</sub> + <em>C</em><sub>e</sub>), &nbsp;&nbsp; <em>C</em><sub>0</sub> = <em>C</em><sub>e</sub> + <em>q</em></p>

<em>C</em><sub>0</sub> is initial cadmium, <em>C</em><sub>e</sub> equilibrium free cadmium, <em>q</em> bound cadmium and <em>B</em> total capacity, expressed on the same batch-volume concentration basis. <em>K</em><sub>d</sub> is an adsorption dissociation constant. The balance accounts for depletion of the free pool and prevents adsorption of more cadmium than is present.

Assumed values <em>C</em><sub>0</sub> = 1 &micro;M, <em>B</em> = 15 &micro;M and <em>K</em><sub>d</sub> = 5 &micro;M give <em>C</em><sub>e</sub> = 0.25961 &micro;M and 74.04% bound at equilibrium. No adsorption parameter was fitted to the reader data. The scenario's initial concentration also exceeds the documented 400 nM reporter-dose maximum.

<figure class="results-chart">
<a href="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig5-capacity-sweep.webp" target="_blank" rel="noopener" aria-label="Open figure at full size"><img src="https://static.igem.wiki/teams/6423/wiki/static/assets/images/model/fig5-capacity-sweep.webp" alt="Bound cadmium fraction against assumed binding capacity at 1 micromolar initial cadmium and a 5 micromolar dissociation constant, marking 74.04 percent bound" loading="lazy"></a>
<figcaption><strong>Figure 5.</strong> Capacity sweep at initial cadmium of 1 &micro;M and adsorption dissociation constant of 5 &micro;M. The marked 74.04% is a prediction under assumed batch conditions, not measured removal or one-pass performance.</figcaption>
</figure>

The balance excludes other binding pools, intracellular uptake, precipitation and outflow. Anchor-deleted designs and shared transport-related annotations motivate considering additional pools, but their contributions remain unmeasured. Fluorescence and growth inhibition cannot supply a cadmium mass balance.

A filter model additionally needs flow, residence time, transport, geometry and breakthrough data. Recontacting an equilibrated closed batch with unchanged sorbent does not create more equilibrium capacity.

<p class="results-decision"><strong>Decision:</strong> measure cadmium directly across concentrations, biomass loadings and contact times before fitting capture parameters or predicting a device.</p>

## What the modelling changes in the next experiment

<div class="results-table-wrap"><table><thead><tr><th>Result or limitation</th><th>Next action</th><th>What it would test</th></tr></thead><tbody>
<tr><td>Reporter rankings depend on preprocessing and loss bounds</td><td>Measure matched blanks; verify reporter identity and baseline assumptions</td><td>Transfer under experimentally supported inputs</td></tr>
<tr><td>Dose comparisons depend on label and readout time</td><td>Predefine a readout and test independent cultures</td><td>Concentration prediction and repeatability</td></tr>
<tr><td>pVIS7 high-dose growth lacks a resolved plateau</td><td>Review growth history and observation window with matched controls</td><td>Reproducibility without an unstable capacity estimate</td></tr>
<tr><td>Medium and experimental-unit records are incomplete</td><td>Confirm recipes, supplement concentrations, EDTA and culture-to-well provenance</td><td>Which medium, construct and uncertainty claims are justified</td></tr>
<tr><td>Capture parameters are assumed</td><td>Direct cadmium measurements with relevant material and no-MT controls</td><td>Capacity, kinetics and cadmium distribution between fractions</td></tr>
</tbody></table></div>

These decisions distinguish completed computation from experiments still needed. A joint dose-and-time model is a possible extension, but it should be tested by holding out complete trajectories and independent runs; it has not been validated across all five runs here.

## Reproducibility and related work

The methods supplement specifies equations, units, preprocessing, bounds, initial conditions and numerical checks. Download the complete analysis bundle as three companion files: [data, code, extracted observations and results (ZIP, 6.2 MB)](https://gitlab.igem.org/2026/vis/-/raw/main/downloads/model/reproducible_analysis_data_code.zip), [HTML report (ZIP, 5.7 MB)](https://gitlab.igem.org/2026/vis/-/raw/main/downloads/model/reproducible_analysis_report.zip), and [figures (ZIP, 6.3 MB)](https://gitlab.igem.org/2026/vis/-/raw/main/downloads/model/reproducible_analysis_figures.zip). Download all three and extract them into the same destination folder to reconstruct the complete bundle; the archives share a top-level folder. Original readings were preserved. Reporter calculations were checked against adaptive quadrature; this checks computation, not biological validity.

HKUST 2025's model page provides related cadmium/MT modelling and discusses the limits imposed by uncharacterised parameters. Buenos Aires 2013 used model comparisons to examine reporter accumulation and timing in an arsenic circuit. These are methodological references; their parameters and project outcomes are not validation of our system.

Our contribution is a reproducible comparison of growth, reporter and dose-response models, an explicit prediction check across two recorded runs, and a mass-conserving framework for capture experiments. The next step is to test sensing predictions on independently prepared material and directly measure cadmium capture.

</div>
