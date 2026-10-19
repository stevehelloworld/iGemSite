<div class="results-report" markdown="1">

# pVIS cadmium response: growth and GFP results

October 6, 2026 · Rain
{.results-date}

Every pVIS1–7 construct had lower GFP/OD<sub>600</sub> than the MT-free sensor pMH45 at higher cadmium concentrations. In the pVIS1–7 comparison, reporter output at 400 nM ranged from 42% of pMH45 for pVIS4 to approximately 5.6–6.3% for pVIS2, pVIS5, and pVIS6. Growth also varied by construct: pVIS3 and pVIS7 showed substantial impairment under parts of the tested range. Because the experiment did not directly quantify cadmium or include a cadmium-independent reporter, lower GFP cannot be treated as proof of cadmium capture.

## What was measured

Eight plasmids were run against a six-point cadmium series in two media, with growth and GFP read in the same wells on a Tecan Infinite 200Pro.

The parental pMH45 plasmid carries the cadmium-responsive circuit: a CadR.10 regulator driving GFP from Preg14, plus ZitB and an Lpp-OmpA display scaffold, on a pSC101 origin with kanamycin selection. pMH54 is the linearised display vector used during cloning. pMH45 has no MT insert. pVIS1–4 retain the Lpp-OmpA anchor with one MT coding sequence; pVIS5–8 were derived by removing the anchor while retaining the corresponding MT coding sequence. The latter set was intended as an anchor-deleted comparison, not as an MT-free scaffold control.

<div class="results-table-wrap"><table><thead><tr><th>Construct</th><th>MT insert</th><th>Source organism</th><th>Runs in this dataset</th></tr></thead><tbody>
<tr><td>pMH45</td><td>none (sensor only)</td><td>—</td><td>all five plates</td></tr>
<tr><td>pVIS1</td><td>IaMT2</td><td>water spinach (<em>Ipomoea aquatica</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS2</td><td>SmtA</td><td>cyanobacterial</td><td>normal, Na-free</td></tr>
<tr><td>pVIS3</td><td>EGR_09832</td><td>tapeworm (<em>Echinococcus granulosus</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS4</td><td>OsMTI-1b</td><td>rice (<em>Oryza sativa</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS5</td><td>IaMT2</td><td>water spinach (<em>Ipomoea aquatica</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS6</td><td>SmtA</td><td><em>Synechococcus elongatus</em></td><td>normal, Na-free</td></tr>
<tr><td>pVIS7</td><td>EGR_09832</td><td><em>Echinococcus granulosus</em></td><td>normal, Na-free</td></tr>
<tr><td>pVIS8</td><td>OsMTI-1b</td><td>rice (<em>Oryza sativa</em>)</td><td>normal, Na-free</td></tr>
</tbody></table></div>

The plate files do not annotate the MT insert for pVIS5–pVIS8. Their identities are mapped from the build record: pVIS5 follows pVIS1, pVIS6 follows pVIS2, pVIS7 follows pVIS3, and pVIS8 follows pVIS4. The notebook records sequence-confirmed clones for pVIS5–pVIS7; after earlier pVIS8 clones contained a deletion after the RBS, pVIS8-11 was later recorded as sequence-correct and used for plate-reader testing. The pairings are therefore based on the construct and notebook records, not on annotations embedded in the assay workbooks.

### Conditions

Cadmium was supplied at six levels from a 10 mM stock, labelled 0 and A–E on the plate maps: 0, 8, 40, 200, 300 and 400 nM. Base medium was LB with glucose and kanamycin. Two medium variants were run: the standard one, and a sodium-free variant recorded as "No Na" on the plate maps. Three technical replicate wells were read per construct per cadmium level, occupying one row block each. pVIS8 is retained in the source records but excluded from construct rankings because the standard-medium map assigns two clone IDs to its wells.

Reads were taken every 1118 s (0.311 h) for 35 cycles, giving a 10.6 h window on the full plates and 9.1 h on the shorter pVIS8 run, at 37 °C with orbital shaking between reads. Absorbance was read at 600 nm, 9 nm bandwidth, 3×3 reads per well. Fluorescence was read top-down at 488 nm excitation and 528 nm emission, gain 70 manual, 2×2 reads per well.

### Controls

Two reference strains sat on every plate, and they do most of the interpretive work.

pTK03 is fluorescence-negative. Its GFP channel stays flat across the whole run — 463 to 558 RFU depending on plate — which fixes the instrument-plus-medium background. Every GFP number quoted below has that plate's pTK03 value subtracted.

pYC08 is fluorescence-positive and reaches 11,017–11,661 RFU on the standard-medium plates and 5,472–6,223 RFU on the sodium-free plates. It sets the ceiling of what this gain setting can report, which turns out to matter: the MT-free sensor runs into that ceiling.

Both strains also carry the cross-plate normalisation. Because the pVIS1–4 and pVIS5–8 sets were run on different days, their growth rates are comparable only after scaling by the reference strains — a point taken up under growth below.

## The sensor without metallothionein

pMH45 gives a clean, steep, saturating cadmium response: background-corrected GFP/OD600 rises from 402 at 0 nM to 19,135 at 400 nM, a 48-fold induction, with the curve flattening between 300 and 400 nM.

The shape of that curve is the reference everything else is read against. On standard-medium run A, the values run 402, 438, 799, 11,973, 18,859 and 19,135 for 0, 8, 40, 200, 300 and 400 nM. Standard-medium run B reproduces it closely: 412, 429, 758, 12,203, 19,454 and 18,968. The values from the two standard-medium runs are similar across all six points, providing an internal consistency check.

Three features of that curve matter for reading the rest of the data.

The sensor is nearly blind below 40 nM. Between 0 and 8 nM the signal moves by 4–9%, which is inside replicate scatter. At 40 nM it has roughly doubled. The useful response is almost entirely between 40 and 300 nM, where it moves by a factor of about 24. A biosensor with that threshold is well matched to the 200–400 nM range used here but would report nothing useful at single-digit nanomolar.

The sensor saturates at 300 nM. The 400 nM point is not higher than the 300 nM point on either standard-medium plate; on standard-medium run B it is 2.5% lower. The circuit has run out of either regulator, promoter capacity or GFP maturation headroom.

That saturation is partly instrumental. pMH45 at 300 nM reaches 11,780 RFU absolute on standard-medium run B, and pYC08, the positive control, reaches 11,017 RFU on the same plate. The induced sensor is sitting at the positive control's level. At gain 70 the detector is at or near its working ceiling, so the flattening between 300 and 400 nM cannot be cleanly attributed to the biology. Any future experiment that needs to resolve the top of the curve should drop the gain or extend the cadmium series downward rather than upward.

There is also a kinetic feature worth recording. GFP does not plateau and hold; it peaks and then declines. On the standard-medium run B plate, pMH45 at 300 nM reads 715 RFU at 2.5 h, 4,542 at 3.7 h, 12,732 at 5.0 h and 13,678 at 6.2 h, then falls steadily to 11,780 by 10.6 h. Optical density follows the same arc, peaking near 6.2 h and drifting down afterwards. The decline is what stationary phase does to a reporter: dilution stops, synthesis stops, and photobleaching plus proteolysis take over.

This means the endpoint value at 10.6 h understates the peak by 10–15%. Every ranking below was computed both ways — endpoint and peak — and the ordering of constructs is identical under both, so the choice of timepoint does not drive any conclusion. Endpoint values are quoted in the text because they are what the existing plots use; peak values appear in the methods section.

## Cadmium dose-response across pVIS1–7

Each pVIS1–7 construct sits below pMH45 at cadmium levels above 40 nM. The size and shape of the response differ by construct.

<figure class="results-chart">
<a href="static/assets/charts/pvis-gfp-dose-response.svg" target="_blank" rel="noopener" aria-label="Open chart at full size"><img src="static/assets/charts/pvis-gfp-dose-response.svg" alt="Cadmium dose-response for pMH45 and pVIS1–7. Log-scale background-corrected GFP/OD600 across six cadmium concentrations." loading="lazy"></a>
<figcaption><strong>Reporter output across pVIS1–7 and pMH45.</strong> Background-corrected GFP/OD600, standard medium, endpoint at 10.6 h. Log scale. A lower line means lower measured GFP/OD600; this assay cannot distinguish altered cadmium availability from changes in expression or cell physiology. Cd²⁺ concentrations are evenly spaced, not to scale.</figcaption>
</figure>

pVIS1 and pVIS4 keep a steep, clearly cadmium-dependent response — they reach 6,862 and 8,083 GFP/OD600 at 400 nM, roughly a third of the MT-free sensor, and both are still climbing at the top of the series. Their curves look like the pMH45 curve translated to the right. pVIS3 is intermediate: it rises sharply to 2,066 at 200 nM, then nearly stops.

pVIS2, pVIS5 and pVIS6 form a low-output group. They end between 1,071 and 1,201 GFP/OD600, or 5.6–6.3% of the MT-free sensor. pVIS5 still rises from 28 at 40 nM to 470, 1,107 and 1,198 at 200, 300 and 400 nM. These values show a cadmium-associated reporter response, but they do not establish the intracellular cadmium concentration or explain why overall output is lower.

pVIS7 is the exception and does not belong on a dose-response reading at all. It tracks the low group up to 200 nM and then drops, reading 67 at 300 nM and 122 at 400 nM. A reporter that goes down as the inducer goes up is not measuring the inducer, and the growth data in the next-but-one section explains why.

The shaded band marks where background subtraction stops being meaningful. Replicate standard deviations on the corrected GFP/OD600 values run 2–40 units for uninduced wells, so any value below roughly 60 should be read as "indistinguishable from zero", not as a measured quantity. Four constructs sit in that band at 0, 8 and 40 nM, which is itself informative: their uninduced leak is lower than the MT-free sensor’s.

## How much reporter signal remains

Expressed as a percentage of the MT-free sensor on the same plate at the same cadmium level, reporter output varies across constructs and medium conditions.

This normalisation compares reporter output with the pMH45 sensor control on the same plate. It helps account for plate-to-plate differences, but it does not identify the mechanism behind lower output or quantify cadmium bound by the cells.

<div class="results-table-wrap" markdown="1">

| Construct | 200 nM | 300 nM | 400 nM | Medium | Run |
|---|---|---|---|---|---|
| pVIS4 | 30.1% | 33.3% | 42.2% | standard | A |
| pVIS1 | 21.7% | 26.6% | 35.9% | standard | A |
| pVIS3 | 17.3% | 13.2% | 14.2% | standard | A |
| pVIS2 | 5.4% | 4.9% | 6.3% | standard | A |
| pVIS5 | 3.8% | 5.7% | 6.3% | standard | B |
| pVIS6 | 3.0% | 3.9% | 5.6% | standard | B |
| pVIS7 | 2.8% | 0.3% | 0.6% | standard | B |
| pVIS4 | 28.3% | 34.5% | 36.8% | Na-free | A |
| pVIS1 | 18.0% | 22.8% | 27.0% | Na-free | A |
| pVIS2 | 6.8% | 7.2% | 8.6% | Na-free | A |
| pVIS3 | 6.4% | 4.9% | 4.2% | Na-free | A |
| pVIS5 | 4.5% | 4.6% | 4.1% | Na-free | B |
| pVIS6 | 3.5% | 4.4% | 2.9% | Na-free | B |
| pVIS7 | 0.1% | −0.2% | −0.1% | Na-free | B |

</div>

Three things in this table are worth stating explicitly.

**The reporter-output pattern is similar across media.** pVIS4 and pVIS1 retain the most GFP signal in both media, while pVIS2, pVIS5 and pVIS6 cluster at lower output. pVIS3 changes more between media, but its growth is also impaired in both conditions, so the data do not isolate a binding-related cause.

**pVIS1 and pVIS4 retain a larger share of reporter output at higher doses.** Their percentage of the pMH45 signal rises from 21.7% to 35.9% and from 30.1% to 42.2%, respectively. These are patterns in GFP/OD<sub>600</sub>; without direct cadmium or expression measurements, they cannot be translated into binding capacity or saturation.

**Treat pVIS7 values near zero cautiously.** Values of 0.3% and −0.1% are derived GFP/OD<sub>600</sub> comparisons, not measurements of cadmium capture. At the corresponding high-cadmium conditions, pVIS7 also had severely impaired growth, so these near-zero values cannot be interpreted as a binding result.

pVIS1–pVIS4 and pVIS5–pVIS7 were measured on separate plates. Their comparison uses the pMH45 control measured on each plate; one plate carrying the leading candidates from both sets would provide a direct comparison.

## Growth varies by construct and cadmium concentration

At 0 nM, most pVIS constructs had somewhat lower growth rates than pMH45. At higher concentrations, several grew at or above the same-plate pMH45 rate, while pVIS3 and pVIS7 showed clear growth impairment. These measurements describe growth phenotypes; they do not by themselves identify a metal-binding mechanism.

<figure class="results-chart">
<a href="static/assets/charts/pvis-relative-growth.svg" target="_blank" rel="noopener" aria-label="Open chart at full size"><img src="static/assets/charts/pvis-relative-growth.svg" alt="Relative growth rates of pVIS1–7 compared with pMH45 across six cadmium concentrations; pVIS3 and pVIS7 show growth impairment." loading="lazy"></a>
<figcaption><strong>Relative growth differs by construct.</strong> Growth rate divided by pMH45 on the same plate, standard medium. Above 1.00 means the measured growth rate was higher than pMH45 in that condition. Cd²⁺ concentrations are evenly spaced, not to scale.</figcaption>
</figure>

At 0 nM every construct except pVIS5 and pVIS6 grows slightly slower than pMH45: 0.888 to 0.955 of the control rate in standard medium, and 0.843 to 0.921 in the sodium-free variant. This difference is consistent with a construct-related cost, but the assay does not identify its cause. In absolute terms the standard-medium growth rates at 0 nM run 1.55–1.74 h⁻¹, corresponding to estimated doubling times of 24–27 minutes.

The interesting part is what happens as cadmium rises. The MT-free sensor is the construct that suffers most: pMH45 falls from 1.747 h⁻¹ at 0 nM to 1.386 h⁻¹ at 400 nM on standard-medium run A, and from 1.650 to 1.215 h⁻¹ on standard-medium run B — a 21–26% loss. Most MT constructs barely move: pVIS5 runs 1.704 h⁻¹ at 0 nM and 1.522 h⁻¹ at 400 nM, a 10% loss. Expressed against the control on the same plate, that shows up as relative growth rates climbing above 1.00 at the top of the series — 1.252 for pVIS5, 1.156 for pVIS2, 1.135 for pVIS1 and pVIS4.

The growth readout is independent of the GFP channel, but it still does not measure cadmium. Higher relative growth at some concentrations is consistent with reduced stress or other construct effects; it is not direct evidence of cadmium sequestration.

Two constructs break the pattern. pVIS3 is impaired from 40 nM upward, bottoming at 0.672 of control at 200 nM, and it never recovers. pVIS7 is normal to 200 nM and then collapses. Those two are taken up next.

One methodological note on the growth data. The existing normalised plot scales the standard-medium run B plate by 0.90869, the mean of the pTK03 and pYC08 reference ratios between standard-medium runs B and A. That factor is reproduced exactly from the source workbooks. It does not, however, reconcile the shared pMH45 control: raw pMH45 differs by 5.5% between the two plates, and applying the reference factor widens that to 14.1%. The reference strains and the sensor control disagree about how different the two plates were. For cross-plate growth comparisons, normalising to pMH45 — which is on every plate and is the correct isogenic control — is the safer choice, and it is what the chart above uses.

## pVIS7 shows a prolonged lag at high cadmium

pVIS7 showed near-control growth through 200 nM cadmium in the standard-medium run, followed by a prolonged lag at 300 nM. Its optical density stayed near the inoculum level for about seven hours, then increased slowly; by the end it remained below the pMH45 control.

The raw trace makes this unambiguous. Mean OD600 for pVIS7 at 300 nM in standard medium reads 0.100, 0.104, 0.119, 0.131, 0.139, 0.149, 0.169, 0.206, 0.265 and 0.292 across the 10.6 h run. Compare the same construct at 0 nM: 0.096, 0.099, 0.146, 0.445, 0.619, 0.655, 0.653, 0.642, 0.630, 0.624. At zero cadmium it is in full exponential growth by 3.7 h and at maximum density by 6.2 h. At 300 nM it is still essentially at the starting density at 6.2 h, begins a slow rise around 7.5 h, and reaches 0.292 — under half the control — by the end of the run.

This matters for how the fitted growth rate should be read. The 0.359 h⁻¹ figure in the summary sheet is a fit over a window that, for this construct at this concentration, contains mostly lag and a late slow rise. It is not a growth rate in the sense that 1.58 h⁻¹ is a growth rate for the same strain at 0 nM. The honest statement is that pVIS7 at 300 nM has an extended lag of roughly 7 h followed by slow growth, and that the single fitted number compresses two distinct phenomena into one.

In this run, pVIS7 had a relative growth rate of 0.914 and final OD of 0.588 at 200 nM; at 300 nM, the fitted growth rate was much lower and final OD reached only 0.292. This suggests a marked change between the tested concentrations, but the data do not establish a precise threshold or its cause.

In the notebook-labelled No-Na medium, pVIS7 showed a strong growth reduction at 200 nM: relative growth 0.188 and final OD 0.159, compared with 0.42 for the same construct at 40 nM. This is an observed difference between the tested medium variants; it does not establish a shifted threshold or explain the cause.

The fluorescence channel for pVIS7 at the failing concentrations is near background — 67 and 122 GFP/OD600 at 300 and 400 nM, against 345 at 200 nM. Because growth is also strongly impaired, these low values cannot be interpreted as a strong cadmium response or as evidence of cadmium capture.

What would explain a threshold like this? Three possibilities, which the current data cannot separate: the insert is toxic in a way that only manifests when the cell is also handling cadmium stress; the insert disrupts outer-membrane integrity enough that cadmium influx rises sharply once a repair capacity is exceeded; or the construct is unstable and the population at high cadmium is being selected against so strongly that the apparent lag is the time for a small resistant subpopulation to take over. The third is testable by plating the late culture and re-checking the plasmid.

## The No-Na medium variant had lower growth in these runs

In the medium variant labelled "No Na" in the plate maps, measured growth rates and final densities were generally lower than in standard medium. Reporter-output patterns were broadly similar, but these conditions do not isolate sodium competition from other effects of the medium formulation.

For pMH45 at 0 nM, measured growth rates were 1.747 and 1.650 h⁻¹ on the two standard-medium plates, and 1.470, 1.532 and 1.233 h⁻¹ on the three sodium-free plates. Final blank-subtracted OD600 was also lower in the sodium-free condition. These are observed differences between the two media; the assay does not isolate which medium component caused them.

The relative change in pMH45 growth across the cadmium series was larger on one sodium-free plate: a 37% decrease from 1.470 to 0.932 h⁻¹, compared with 21–26% on the standard-medium plates. Because there are few plate-level repeats, this difference should be treated as descriptive.

Against that, the sensor itself behaves similarly in both media. pMH45 induction runs 402 to 19,135 GFP/OD600 in standard medium and 330 to 17,998 in the sodium-free variant — a 48-fold versus 55-fold span. The apparent fold-increase is slightly larger in the sodium-free medium, but that is mostly an artefact of the lower uninduced baseline rather than a higher ceiling.

One number needs care here. Uninduced GFP/OD600 is consistently higher in the sodium-free medium — 1,777 versus 1,295 for raw pMH45, for example — and it would be easy to read that as increased leaky expression. It is not. OD600 is the denominator, and it is a third lower in that medium. The background-corrected numerators are 330 and 402 respectively, which is the opposite direction. Any per-OD normalisation across media compares cultures of different density, and in this dataset the density difference is large enough to dominate the ratio.

At 400 nM, the fraction of pMH45 GFP/OD<sub>600</sub> output was 42.2% in standard medium and 36.8% in the No-Na variant for pVIS4; 35.9% and 27.0% for pVIS1; 6.3% and 4.1% for pVIS5; 5.6% and 2.9% for pVIS6;  pVIS3 was 14.2% and 4.2%, alongside growth 17&ndash;21% below control. These are descriptive reporter-output comparisons across different medium conditions; they do not demonstrate cadmium binding or a consistent medium-independent effect.

These experiments do not establish whether sodium competes with cadmium for an MT or the sensor. That question would require conditions that isolate sodium while controlling for the accompanying changes in growth and medium composition.

## Possible interpretations, not established mechanisms

The pMH45 circuit is designed to couple cadmium-responsive regulation to GFP output. In these experiments, pMH45 fluorescence increased across the tested cadmium series and approached a plateau at the upper end. This establishes the reporter response observed under our assay conditions; it does not provide a direct measurement of free intracellular cadmium.

The pVIS constructs had lower GFP/OD<sub>600</sub> than pMH45 at higher cadmium concentrations. Metallothionein binding is one possible explanation, but the same observation could also result from altered sensor expression, plasmid burden, changes in cell physiology, or altered transport through the envelope. The assay did not distinguish among these mechanisms.

The low uninduced GFP/OD<sub>600</sub> in several constructs is particularly important: pVIS5 and pVIS6 had background-corrected values of 40 and 44 at 0 nM, compared with 402–412 for pMH45 on the corresponding standard-medium plates. Because no cadmium was added to those wells, the lower baseline warns that the pVIS constructs may affect overall reporter output independently of the added cadmium. A cadmium-independent reporter would help test this possibility.

### Construct-specific patterns

pVIS1 and pVIS4 show increasing percentages of the pMH45 signal across the cadmium series, while pVIS2, pVIS5, and pVIS6 remain in a low-output range. These patterns are compatible with several explanations, including differences in MT behavior, protein expression, construct burden, or the sensor circuit. They do not establish a binding capacity or affinity ranking.

pVIS3 has a growth defect from 40 nM upward in both media, reaching 0.672 of control at 200 nM in standard medium. Its lower GFP signal therefore cannot be interpreted independently of its growth phenotype. pVIS7 also shows a severe growth and reporter phenotype at higher concentrations. Neither construct&rsquo;s low signal should be treated as evidence of strong cadmium capture.

### What these data cannot show

The measured endpoints were OD<sub>600</sub> and GFP fluorescence. The experiments did not directly measure cadmium binding, cadmium associated with washed cells, cadmium remaining in the medium, or MT localization. Several limitations follow from that:

**Reporter output versus cadmium availability.** Lower GFP/OD<sub>600</sub> does not by itself reveal whether less cadmium reached the sensor or overall reporter expression changed. A constitutive second reporter, read in the same wells, would help separate these possibilities.

**Binding versus altered transport.** Even if less cadmium reached the sensor, these data do not show that the MT bound it. Changes to the display scaffold or cell envelope could also alter transport. Measure cadmium in spent medium and washed cell pellets by ICP-MS or atomic absorption to distinguish these possibilities.

**Localization is not demonstrated.** The constructs were designed with an Lpp-OmpA anchor, but this assay did not verify that the MT was displayed on the cell surface. Whole-cell immunolabelling of non-permeabilised cells or a protease-accessibility assay would test localization and relative display level.

**The detector ceiling at the top of the series.** pMH45 at 300 nM reads at the level of the pYC08 positive control. The flattening between 300 and 400 nM in the control cannot be separated from instrument saturation at gain 70, and every suppression percentage at 300 and 400 nM uses a possibly-compressed denominator. The practical consequence is that suppression at those two concentrations may be slightly understated for every construct. The 200 nM column, where pMH45 reads 12,000 against a 11,000–11,700 positive control and is clearly still on the linear part of its own curve, is the most trustworthy of the three.

**Replication.** Three wells per condition on one plate are technical replicates; they do not measure independent biological replicates. The within-condition standard deviations are small and describe variation within each plate, not biological reproducibility. The close agreement between the two standard-medium runs provides an additional consistency check.

A sixth point is smaller but worth recording: the fitted growth rates come from a window chosen on the summary sheets, and for constructs with disturbed kinetics (pVIS3, pVIS7 at high cadmium) a single exponential fit is not a good description of the curve. Lag time and maximum density should be reported alongside the rate for those conditions, since the rate alone hides the phenotype.

## What to do next

The single most valuable next experiment is a direct cadmium measurement, because it converts every claim here from inference to measurement.

**Measure cadmium directly.** Grow each construct at 200 and 400 nM, pellet the cells, and measure cadmium in the spent supernatant and washed cell pellets by ICP-MS or atomic absorption spectroscopy. This would test whether cadmium associates with cells or remains in solution.

**Add a cadmium-independent reporter.** A constitutively expressed second fluorophore in the same cells would help determine whether the low basal GFP in pVIS2, pVIS5 and pVIS6 reflects specific sensor behavior or lower overall expression.

**Confirm localization.** Immunolabel the strep tag on intact, non-permeabilised cells and compare signal per cell across constructs to test surface display and relative display level.

**Put the finalists on one plate.** The best construct from each set has never competed directly. One plate carrying pMH45, pVIS2, pVIS5, pVIS6 and a repeat of pVIS1 as a known intermediate, in standard medium, would convert the cross-plate inference into a direct comparison.

**Re-run the top of the series at lower gain.** The 300 and 400 nM points are near the apparent detector ceiling. Repeating the series at reduced gain would help determine whether the plateau is biological or instrumental.

**Characterise pVIS7 further.** Sequence the plasmid from a culture grown at 300 nM and check viable counts at failing concentrations. This would help distinguish a prolonged lag from population selection or construct instability.

**Separate rate from lag in the fits.** For pVIS3 and pVIS7 at high cadmium, report lag time, maximum growth rate over a fitted window and final density as three numbers. The current single-rate summary hides the phenotype that matters most.

The assay workbooks still do not carry MT identities for pVIS5–pVIS8. The build and notebook records map these constructs to their intended inserts, but future plate maps should include both construct and clone identifiers directly in the data file.

## How every number here was derived

All values were recomputed from the raw Tecan exports rather than taken from the existing summary sheets, except the growth rates, which were read from the summary sheets and checked against the plotted figure.

### Source files

<div class="results-table-wrap" markdown="1">

| Source workbook | Run | Medium | Constructs | Reads |
|---|---|---|---|---|
| 20260910pMH45-pVIS1234(student).xlsx | standard A | standard | pMH45, pVIS1–4 | 92 wells, 35 cycles, 10.6 h |
| 20260927pMH45-pVIS1234(No Na).xlsx | Na-free A | Na-free | pMH45, pVIS1–4 | 92 wells, 35 cycles, 10.6 h |
| 20260928pMH45-pVIS567 (No Na).xlsx | Na-free B | Na-free | pMH45, pVIS5–7 | 74 wells, 35 cycles, 10.1 h |
| 20260930pMH45-pVIS5678 (Normal).xlsx | standard B | standard | pMH45, pVIS5–8 | 92 wells, 35 cycles, 10.6 h |
| 20261002pMH45-pVIS8 (No Na).xlsx | Na-free C | Na-free | pMH45, pVIS8 | 38 wells, 35 cycles, 9.1 h |
| 20260921pMH45_pVIS567.xlsx | map only | — | plate map only, no kinetic data | — |

</div>

### Optical density

The instrument records a 3×3 multi-read per well. The workbooks take the mean of reads 2 and 3 only, discarding read 1 — for well A2 on standard-medium run B, reads of 0.1934, 0.1030 and 0.1009 give a working value of 0.10195. That convention was preserved. Blank-subtracted OD600 is the final reading minus the minimum reading of that well’s own time series, which removes the well’s optical offset without needing a separate blank well.

### Growth rate and doubling time

Growth rates are the per-well fitted values in the "GR Mean, SD, DT" sheets, in h⁻¹, with doubling time in minutes. The relationship was verified: pMH45 at 0 nM on standard-medium run B has a rate of 1.65048 h⁻¹ and a listed doubling time of 25.198 min, and ln2 ÷ 1.65048 × 60 = 25.198. Every quoted group value is the mean of three wells as given on those sheets.

The cross-plate normalisation in the existing figure was reproduced exactly. The factor is the mean of the two reference-strain ratios between standard-medium runs A and B: pTK03 1.70825 ÷ 1.84651 = 0.92512, pYC08 1.36767 ÷ 1.53284 = 0.89225, mean 0.90869. Applying it to standard-medium run B gives pMH45 1.4998, pVIS5 1.5479, pVIS6 1.5777 and pVIS7 1.4318 at 0 nM, which match the plotted values.

### Fluorescence

GFP is the instrument’s 2×2 mean, in relative fluorescence units at 488/528 nm, gain 70. Background is the pTK03 reading on the same plate at the same timepoint, since pTK03 carries no GFP: 463, 472, 507, 513 and 558 RFU on the five plates. "GFP/OD600" throughout means (GFP − pTK03 background) ÷ blank-subtracted OD600, per well, averaged over the three replicate wells.

Endpoint values are at the final cycle. Peak values, used as a cross-check, take each well’s own maximum. At 400 nM in standard medium, the pVIS1–7 endpoint percentages of pMH45 are pVIS4 42.2%, pVIS1 35.9%, pVIS3 14.2%, pVIS2 6.3%, pVIS5 6.3%, pVIS6 5.6%, and pVIS7 0.6%. Peak fluorescence is reached at 4.3–6.0 h in cultures with sustained growth and later for pVIS7 at concentrations where growth is impaired.

### Plate maps

Construct and cadmium assignments were read from the second block of each workbook’s map sheet, where cells are labelled in the form `pVIS5-C`. The suffixes map to cadmium as 0 = 0 nM, A = 8 nM, B = 40 nM, C = 200 nM, D = 300 nM, E = 400 nM, from the condition key on the map-only workbook. Two wells per plate are read but carry no construct-condition label: these are pTK03 and pYC08, identified from the first map block.

### Not used

The plotted PNG figures in the Growth Rate and GFP Intensity folders were not re-analysed; the one PDF figure was read and its values reproduced from source. All quantitative statements above come from the workbooks.

</div>
