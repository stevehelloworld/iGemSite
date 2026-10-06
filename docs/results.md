<div class="results-report" markdown="1">

# pVIS1–8 cadmium response: growth and GFP results

October 6, 2026 · Rain
{.results-date}

Every metallothionein-bearing construct suppresses the cadmium-induced GFP signal relative to the MT-free sensor pMH45, by 2.4-fold (pVIS4, 42% of sensor signal remaining at 400 nM) to more than 25-fold (pVIS8, pVIS6, pVIS2, pVIS5, 4–6% remaining). Suppression is dose-dependent and does not come at a growth cost, with one exception: pVIS7 collapses above 200 nM Cd²⁺.

## What was measured

Eight plasmids were run against a six-point cadmium series in two media, with growth and GFP read in the same wells on a Tecan Infinite 200Pro.

The backbone in every case is the pMH45/pMH54 cadmium-sensing circuit: a CadR.10 regulator driving GFP from Preg14, plus ZitB and the lpp-OmpA display scaffold, on a pSC101 origin with kanamycin selection. pMH45 carries the sensor with no metallothionein inserted. Each pVIS plasmid adds one metallothionein into OmpA loop 3, so the only intended difference between pMH45 and a pVIS construct is the presence of a surface-displayed metal-binding protein.

<div class="results-table-wrap"><table><thead><tr><th>Construct</th><th>MT insert</th><th>Source organism</th><th>Runs in this dataset</th></tr></thead><tbody>
<tr><td>pMH45</td><td>none (sensor only)</td><td>—</td><td>all five plates</td></tr>
<tr><td>pVIS1</td><td>IaMT2</td><td>water spinach (<em>Ipomoea aquatica</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS2</td><td>SmtA</td><td>cyanobacterial</td><td>normal, Na-free</td></tr>
<tr><td>pVIS3</td><td>EGR_09832</td><td>tapeworm (<em>Echinococcus granulosus</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS4</td><td>OsMTI-1b</td><td>rice (<em>Oryza sativa</em>)</td><td>normal, Na-free</td></tr>
<tr><td>pVIS5</td><td>not recorded in these files</td><td>—</td><td>normal, Na-free</td></tr>
<tr><td>pVIS6</td><td>not recorded in these files</td><td>—</td><td>normal, Na-free</td></tr>
<tr><td>pVIS7</td><td>not recorded in these files</td><td>—</td><td>normal, Na-free</td></tr>
<tr><td>pVIS8</td><td>not recorded in these files</td><td>—</td><td>normal, Na-free</td></tr>
</tbody></table></div>

The insert identities for pVIS1–pVIS4 come from the construct records, not from these plate files. The plate files carry no insert annotation for pVIS5–pVIS8, so those four are treated here as unlabelled variants; the conclusions below are about construct behaviour and do not depend on knowing which sequence is in which.

### Conditions

Cadmium was supplied at six levels from a 10 mM stock, labelled 0 and A–E on the plate maps: 0, 8, 40, 200, 300 and 400 nM. Base medium was LB with glucose and kanamycin. Two medium variants were run: the standard one, and a sodium-free variant recorded as "No Na" on the plate maps. Three biological replicate wells were read per construct per cadmium level, occupying one row block each.

Reads were taken every 1118 s (0.311 h) for 35 cycles, giving a 10.6 h window on the full plates and 9.1 h on the shorter pVIS8 run, at 37 °C with orbital shaking between reads. Absorbance was read at 600 nm, 9 nm bandwidth, 3×3 reads per well. Fluorescence was read top-down at 488 nm excitation and 528 nm emission, gain 70 manual, 2×2 reads per well.

### Controls

Two reference strains sat on every plate, and they do most of the interpretive work.

pTK03 is fluorescence-negative. Its GFP channel stays flat across the whole run — 463 to 558 RFU depending on plate — which fixes the instrument-plus-medium background. Every GFP number quoted below has that plate's pTK03 value subtracted.

pYC08 is fluorescence-positive and reaches 11,017–11,661 RFU on the standard-medium plates and 5,472–6,223 RFU on the sodium-free plates. It sets the ceiling of what this gain setting can report, which turns out to matter: the MT-free sensor runs into that ceiling.

Both strains also carry the cross-plate normalisation. Because the pVIS1–4 and pVIS5–8 sets were run on different days, their growth rates are comparable only after scaling by the reference strains — a point taken up under growth below.

## The sensor without metallothionein

pMH45 gives a clean, steep, saturating cadmium response: background-corrected GFP/OD600 rises from 402 at 0 nM to 19,135 at 400 nM, a 48-fold induction, with the curve flattening between 300 and 400 nM.

The shape of that curve is the reference everything else is read against. On the 2026-09-10 standard-medium plate the values run 402, 438, 799, 11,973, 18,859 and 19,135 for 0, 8, 40, 200, 300 and 400 nM. The 2026-09-30 standard-medium plate reproduces it closely: 412, 429, 758, 12,203, 19,454 and 18,968. Two independent plates three weeks apart agreeing within a few percent at every point is the strongest internal evidence that the assay is doing what it should.

Three features of that curve matter for reading the rest of the data.

The sensor is nearly blind below 40 nM. Between 0 and 8 nM the signal moves by 4–9%, which is inside replicate scatter. At 40 nM it has roughly doubled. The useful response is almost entirely between 40 and 300 nM, where it moves by a factor of about 24. A biosensor with that threshold is well matched to the 200–400 nM range used here but would report nothing useful at single-digit nanomolar.

The sensor saturates at 300 nM. The 400 nM point is not higher than the 300 nM point on either standard-medium plate; on the 2026-09-30 plate it is 2.5% lower. The circuit has run out of either regulator, promoter capacity or GFP maturation headroom.

That saturation is partly instrumental. pMH45 at 300 nM reaches 11,780 RFU absolute on the 2026-09-30 plate, and pYC08, the positive control, reaches 11,017 RFU on the same plate. The induced sensor is sitting at the positive control's level. At gain 70 the detector is at or near its working ceiling, so the flattening between 300 and 400 nM cannot be cleanly attributed to the biology. Any future experiment that needs to resolve the top of the curve should drop the gain or extend the cadmium series downward rather than upward.

There is also a kinetic feature worth recording. GFP does not plateau and hold; it peaks and then declines. On the 2026-09-30 plate, pMH45 at 300 nM reads 715 RFU at 2.5 h, 4,542 at 3.7 h, 12,732 at 5.0 h and 13,678 at 6.2 h, then falls steadily to 11,780 by 10.6 h. Optical density follows the same arc, peaking near 6.2 h and drifting down afterwards. The decline is what stationary phase does to a reporter: dilution stops, synthesis stops, and photobleaching plus proteolysis take over.

This means the endpoint value at 10.6 h understates the peak by 10–15%. Every ranking below was computed both ways — endpoint and peak — and the ordering of constructs is identical under both, so the choice of timepoint does not drive any conclusion. Endpoint values are quoted in the text because they are what the existing plots use; peak values appear in the methods section.

## Cadmium dose-response across all eight constructs

Every MT construct sits below pMH45 at every cadmium level above 40 nM, and they separate into two groups: those that shift the curve right, and those that nearly abolish it.

<figure class="results-chart">
<a href="static/assets/charts/pvis-gfp-dose-response.svg" target="_blank" rel="noopener" aria-label="Open chart at full size"><img src="static/assets/charts/pvis-gfp-dose-response.svg" alt="Every MT construct flattens the cadmium dose-response of the GFP sensor. Log-scale background-corrected GFP/OD600 across six cadmium concentrations for pMH45 and pVIS1–8." loading="lazy"></a>
<figcaption><strong>Every MT construct flattens the sensor’s cadmium response.</strong> Background-corrected GFP/OD600, standard medium, endpoint at 10.6 h. Log scale. Lower line = less free cadmium reaching the sensor. Cd²⁺ concentrations are evenly spaced, not to scale.</figcaption>
</figure>

pVIS1 and pVIS4 keep a steep, clearly cadmium-dependent response — they reach 6,862 and 8,083 GFP/OD600 at 400 nM, roughly a third of the MT-free sensor, and both are still climbing at the top of the series. Their curves look like the pMH45 curve translated to the right. pVIS3 is intermediate: it rises sharply to 2,066 at 200 nM, then nearly stops.

pVIS2, pVIS5, pVIS6 and pVIS8 form the second group. All four stay within a factor of two of each other across the whole series and end between 747 and 1,201 GFP/OD600, which is 4–6% of the MT-free sensor. Critically, all four still respond: pVIS5 moves from 28 at 40 nM to 470, 1,107 and 1,198 at 200, 300 and 400 nM. The circuit in these strains is intact and reporting — it is simply reporting a much smaller free-cadmium concentration.

pVIS7 is the exception and does not belong on a dose-response reading at all. It tracks the low group up to 200 nM and then drops, reading 67 at 300 nM and 122 at 400 nM. A reporter that goes down as the inducer goes up is not measuring the inducer, and the growth data in the next-but-one section explains why.

The shaded band marks where background subtraction stops being meaningful. Replicate standard deviations on the corrected GFP/OD600 values run 2–40 units for uninduced wells, so any value below roughly 60 should be read as "indistinguishable from zero", not as a measured quantity. Four constructs sit in that band at 0, 8 and 40 nM, which is itself informative: their uninduced leak is lower than the MT-free sensor’s.

## How much signal each construct removes

Expressed as a percentage of the MT-free sensor on the same plate at the same cadmium level, the constructs fall into a 10-fold range, and the ranking is stable across both media and both timepoint conventions.

This normalisation is the right one for the question being asked. It divides out plate-to-plate differences in gain, inoculum and medium, and it asks directly: of the signal the sensor would have produced with no metallothionein present, how much survives?

<div class="results-table-wrap" markdown="1">

| Construct | 200 nM | 300 nM | 400 nM | Medium | Plate |
|---|---|---|---|---|---|
| pVIS4 | 30.1% | 33.3% | 42.2% | standard | 2026-09-10 |
| pVIS1 | 21.7% | 26.6% | 35.9% | standard | 2026-09-10 |
| pVIS3 | 17.3% | 13.2% | 14.2% | standard | 2026-09-10 |
| pVIS2 | 5.4% | 4.9% | 6.3% | standard | 2026-09-10 |
| pVIS5 | 3.8% | 5.7% | 6.3% | standard | 2026-09-30 |
| pVIS6 | 3.0% | 3.9% | 5.6% | standard | 2026-09-30 |
| pVIS8 | 4.0% | 4.1% | 3.9% | standard | 2026-09-30 |
| pVIS7 | 2.8% | 0.3% | 0.6% | standard | 2026-09-30 |
| pVIS4 | 28.3% | 34.5% | 36.8% | Na-free | 2026-09-27 |
| pVIS1 | 18.0% | 22.8% | 27.0% | Na-free | 2026-09-27 |
| pVIS2 | 6.8% | 7.2% | 8.6% | Na-free | 2026-09-27 |
| pVIS3 | 6.4% | 4.9% | 4.2% | Na-free | 2026-09-27 |
| pVIS5 | 4.5% | 4.6% | 4.1% | Na-free | 2026-09-28 |
| pVIS6 | 3.5% | 4.4% | 2.9% | Na-free | 2026-09-28 |
| pVIS8 | 3.7% | 4.8% | 3.7% | Na-free | 2026-10-02 |
| pVIS7 | 0.1% | −0.2% | −0.1% | Na-free | 2026-09-28 |

</div>

Three things in this table are worth stating explicitly.

**The ordering is reproducible.** pVIS4 is the weakest suppressor and pVIS1 the second weakest in both media, on plates run 17 days apart. pVIS2, pVIS5, pVIS6 and pVIS8 cluster at the bottom in both. The only construct that moves materially between media is pVIS3, which suppresses to 13–17% in standard medium but 4–6% in the sodium-free variant — and pVIS3 is also the construct whose growth is most impaired, which is the likely explanation rather than better metal binding.

**pVIS1 and pVIS4 rise with dose; the others are flat.** The percentage remaining for pVIS1 climbs from 21.7% to 35.9% across the series, and pVIS4 from 30.1% to 42.2%. That is the signature of a finite buffer being titrated: as cadmium increases, a fixed amount of metallothionein captures a progressively smaller share of it. The low group shows no such trend — pVIS8 reads 4.0%, 4.1%, 3.9% — which means either that their buffer is nowhere near saturated at 400 nM, or that something other than titratable binding is setting their output.

**pVIS7’s numbers are not comparable.** Values of 0.3% and −0.1% do not mean near-perfect cadmium capture. They mean the fluorescence channel never rose above the plate background, in cells that were barely growing. A negative percentage is the arithmetic artefact of subtracting a background larger than the measured signal, and it is a useful flag that the measurement has broken down rather than a result.

Cross-set comparison carries one caveat. pVIS1–pVIS4 and pVIS5–pVIS8 were never on the same plate. The comparison between, say, pVIS2 at 6.3% and pVIS8 at 3.9% rests on both having been normalised to a pMH45 control on their own plate, and on those two pMH45 controls agreeing — which they do, to within 3% at every cadmium level. That is good enough to say pVIS8 and pVIS2 are in the same class, and not quite good enough to rank them against each other. A single plate carrying the best candidate from each set would settle it.

## Growth: a small cost at zero cadmium, a benefit at high cadmium

Carrying a metallothionein costs 5–11% of growth rate when there is no cadmium, and pays that back above 200 nM, where six of the eight constructs grow as fast as or faster than the MT-free sensor.

<figure class="results-chart">
<a href="static/assets/charts/pvis-relative-growth.svg" target="_blank" rel="noopener" aria-label="Open chart at full size"><img src="static/assets/charts/pvis-relative-growth.svg" alt="Metallothionein protects growth at high cadmium except pVIS3 and pVIS7. Growth rates of pVIS1–8 relative to pMH45 on the same plate across six cadmium concentrations." loading="lazy"></a>
<figcaption><strong>MT protects growth at high cadmium — except pVIS3 and pVIS7.</strong> Growth rate ÷ pMH45 on the same plate, standard medium. Above 1.00 = grows faster than the MT-free sensor. Cd²⁺ concentrations are evenly spaced, not to scale.</figcaption>
</figure>

At 0 nM every construct except pVIS5 and pVIS6 grows slightly slower than pMH45: 0.888 to 0.955 of the control rate in standard medium, and 0.843 to 0.921 in the sodium-free variant. That is the expected burden of expressing an extra protein from a surface-display scaffold, and it is small. In absolute terms the standard-medium growth rates at 0 nM run 1.55–1.74 h⁻¹, which is a doubling time of 24–27 minutes — healthy growth by any measure.

The interesting part is what happens as cadmium rises. The MT-free sensor is the construct that suffers most: pMH45 falls from 1.747 h⁻¹ at 0 nM to 1.386 h⁻¹ at 400 nM on the 2026-09-10 plate, and from 1.650 to 1.215 h⁻¹ on the 2026-09-30 plate — a 21–26% loss. Most MT constructs barely move: pVIS5 runs 1.704 h⁻¹ at 0 nM and 1.522 h⁻¹ at 400 nM, a 10% loss. Expressed against the control on the same plate, that shows up as relative growth rates climbing above 1.00 at the top of the series — 1.252 for pVIS5, 1.156 for pVIS2, 1.135 for pVIS1 and pVIS4.

This is a second, independent line of evidence for cadmium sequestration, and it is worth more than the GFP data in one specific way: it is a phenotype, not a reporter reading. Fluorescence can be suppressed by anything that interferes with the sensor circuit. Growth protection at 400 nM cadmium is harder to explain by anything other than less cadmium reaching the cytoplasm.

Two constructs break the pattern. pVIS3 is impaired from 40 nM upward, bottoming at 0.672 of control at 200 nM, and it never recovers. pVIS7 is normal to 200 nM and then collapses. Those two are taken up next.

One methodological note on the growth data. The existing normalised plot scales the 2026-09-30 plate by 0.90869, the mean of the pTK03 and pYC08 reference ratios between that plate and the 2026-09-10 plate. That factor is reproduced exactly from the source workbooks. It does not, however, reconcile the shared pMH45 control: raw pMH45 differs by 5.5% between the two plates, and applying the reference factor widens that to 14.1%. The reference strains and the sensor control disagree about how different the two plates were. For cross-plate growth comparisons, normalising to pMH45 — which is on every plate and is the correct isogenic control — is the safer choice, and it is what the chart above uses.

## pVIS7 fails, and the failure mode is a lag, not death

pVIS7 grows normally up to 200 nM cadmium and then does not start: at 300 nM its optical density sits at the inoculum level for seven hours before any growth begins, and it never catches up.

The raw trace makes this unambiguous. Mean OD600 for pVIS7 at 300 nM in standard medium reads 0.100, 0.104, 0.119, 0.131, 0.139, 0.149, 0.169, 0.206, 0.265 and 0.292 across the 10.6 h run. Compare the same construct at 0 nM: 0.096, 0.099, 0.146, 0.445, 0.619, 0.655, 0.653, 0.642, 0.630, 0.624. At zero cadmium it is in full exponential growth by 3.7 h and at maximum density by 6.2 h. At 300 nM it is still essentially at the starting density at 6.2 h, begins a slow rise around 7.5 h, and reaches 0.292 — under half the control — by the end of the run.

This matters for how the fitted growth rate should be read. The 0.359 h⁻¹ figure in the summary sheet is a fit over a window that, for this construct at this concentration, contains mostly lag and a late slow rise. It is not a growth rate in the sense that 1.58 h⁻¹ is a growth rate for the same strain at 0 nM. The honest statement is that pVIS7 at 300 nM has an extended lag of roughly 7 h followed by slow growth, and that the single fitted number compresses two distinct phenomena into one.

The transition is sharp. At 200 nM, pVIS7 behaves almost normally: 0.914 of the control growth rate, final OD 0.588, and a dose-appropriate GFP signal of 345 GFP/OD600. At 300 nM everything breaks. A threshold between 200 and 300 nM, with near-normal behaviour on one side and near-total failure on the other, does not look like graded toxicity; it looks like a threshold being crossed.

The sodium-free medium moves that threshold down. There, pVIS7 fails at 200 nM rather than 300 nM: relative growth 0.188, final OD 0.159 against 0.42 for the same construct at 40 nM. The construct is more fragile in the sodium-free variant, consistent with that medium being generally harder on every strain on the plate.

The fluorescence channel for pVIS7 at the failing concentrations is flat background — 67 and 122 GFP/OD600 at 300 and 400 nM, against 345 at 200 nM. Cells that are not growing are not making much of anything, so the near-zero reading reports arrested metabolism rather than the absence of free cadmium. Reporting pVIS7 as the best cadmium sequestrator because its GFP is lowest would invert the actual result, and the tables above flag it accordingly.

What would explain a threshold like this? Three possibilities, which the current data cannot separate: the insert is toxic in a way that only manifests when the cell is also handling cadmium stress; the insert disrupts outer-membrane integrity enough that cadmium influx rises sharply once a repair capacity is exceeded; or the construct is unstable and the population at high cadmium is being selected against so strongly that the apparent lag is the time for a small resistant subpopulation to take over. The third is testable by plating the late culture and re-checking the plasmid.

## The sodium-free medium slows everything and changes no conclusion

Removing sodium costs every strain 10–25% of growth rate and about a third of final density, but the ranking of constructs by cadmium suppression is unchanged.

The magnitude is consistent across plates. pMH45 at 0 nM grows at 1.747 and 1.650 h⁻¹ in standard medium on the two standard plates, and at 1.470, 1.532 and 1.233 h⁻¹ on the three sodium-free plates. Final blank-subtracted OD600 falls from 0.52–0.55 to 0.35–0.38. Both effects are what removing an osmotically and bioenergetically significant ion from a rich medium would be expected to do.

The cadmium sensitivity of growth is sharper in the sodium-free variant. pMH45 loses 37% of its growth rate between 0 and 400 nM there (1.470 to 0.932 h⁻¹ on the 2026-09-27 plate) against 21–26% in standard medium. Cells already under osmotic and energetic stress have less margin for a second stressor, so cadmium bites harder.

Against that, the sensor itself behaves similarly in both media. pMH45 induction runs 402 to 19,135 GFP/OD600 in standard medium and 330 to 17,998 in the sodium-free variant — a 48-fold versus 55-fold span. The apparent fold-increase is slightly larger in the sodium-free medium, but that is mostly an artefact of the lower uninduced baseline rather than a higher ceiling.

One number needs care here. Uninduced GFP/OD600 is consistently higher in the sodium-free medium — 1,777 versus 1,295 for raw pMH45, for example — and it would be easy to read that as increased leaky expression. It is not. OD600 is the denominator, and it is a third lower in that medium. The background-corrected numerators are 330 and 402 respectively, which is the opposite direction. Any per-OD normalisation across media compares cultures of different density, and in this dataset the density difference is large enough to dominate the ratio.

The suppression percentages hold up across the two media, which is the main thing worth taking from these plates. pVIS4 reads 42.2% in standard medium and 36.8% in the sodium-free variant at 400 nM; pVIS1, 35.9% and 27.0%; pVIS5, 6.3% and 4.1%; pVIS6, 5.6% and 2.9%; pVIS8, 3.9% and 3.7%. The one construct that moves meaningfully is pVIS3, from 14.2% to 4.2%, and its growth is 17–21% below control in both media at those concentrations, so the lower reading is at least partly a sick-cell effect rather than better binding.

If the purpose of the sodium-free condition was to test whether sodium competes with cadmium for the metallothionein or for the CadR sensor, the answer in this dataset is that no such competition is detectable above the general cost of the medium. Both media give the same construct ranking and similar fold-inductions. A competition effect, if present, is smaller than the plate-to-plate variation.

## Why the results look like this

The sensor reports free intracellular cadmium. Anything that lowers free intracellular cadmium lowers the reading. A metallothionein displayed on the outer membrane lowers it by binding cadmium before it gets in — which is the intended mechanism, and the one the growth data independently supports.

### The circuit being read

CadR is a MerR-family regulator. In the absence of cadmium it sits on the Preg14 operator in a conformation that keeps transcription low; cadmium binding reorganises the complex and activates transcription. Output is therefore a function of the concentration of cadmium-loaded CadR, which tracks free cytoplasmic Cd²⁺ over the regulator’s working range. The plasmid also carries ZitB, a cation efflux pump, which exports divalent metals and so sets a floor on how much free cadmium accumulates.

That architecture explains the shape of the pMH45 curve directly. Nothing happens below 40 nM because efflux plus native metal handling keeps free cytoplasmic cadmium under the regulator’s threshold. Between 40 and 300 nM the influx rate exceeds what efflux can clear, free cadmium rises steeply, and output follows. Above 300 nM the regulator is fully occupied and output cannot rise further.

### What an outer-membrane metallothionein does to that

A metallothionein in OmpA loop 3 presents metal-binding thiol clusters on the cell surface, outside the outer membrane. Cadmium bound there never reaches the periplasm, never reaches the inner membrane transporters that carry it into the cytoplasm, and is therefore invisible to CadR. The construct does not make the cell export cadmium faster; it reduces the amount offered to the import pathway in the first place.

This predicts exactly what the data show. GFP output falls at every cadmium concentration. The dose-response curve shifts right rather than flattening, as long as the available binding capacity is not overwhelmed. Growth improves at high cadmium, because less cadmium inside means less damage to the thiol-dependent enzymes and iron-sulfur clusters that cadmium poisons. And the effect scales with how much cadmium a given metallothionein can hold and how tightly it holds it — which is what separates the constructs.

### Why the constructs separate into two groups

pVIS1 and pVIS4 look like finite buffers being titrated. Their percentage of the control signal rises steadily with dose — pVIS1 from 21.7% to 35.9%, pVIS4 from 30.1% to 42.2% — which is the signature of a fixed number of binding sites capturing a shrinking fraction of an increasing load. The implied interpretation is that these two have real but limited capacity: either fewer sites per protein, weaker affinity, lower display density, or less efficient folding on the surface.

pVIS2, pVIS5, pVIS6 and pVIS8 show no such trend. Their percentage of control is flat at 3–6% across 200, 300 and 400 nM. If they were simple buffers of larger capacity, the percentage should still climb as the load tripled. Flatness across a 2-fold change in cadmium means either that their capacity is far from exhausted even at 400 nM, or that something other than titratable binding sets their floor.

The second possibility deserves weight. All four of these constructs also have unusually low uninduced signal: background-corrected GFP/OD600 of 40, 44 and 105 for pVIS5, pVIS6 and pVIS8 at 0 nM, against 402–412 for pMH45 on the same plates. The MT-free sensor has roughly four to ten times the basal leak of these constructs. That is not something cadmium sequestration explains, because at 0 nM there is no added cadmium to sequester.

Two readings of that observation are consistent with the data. The first is that the leak is real and metal-driven: trace cadmium and zinc in LB partially activate CadR, which is a MerR-family regulator with cross-reactivity to zinc, and a surface metallothionein strips those trace metals before they enter. On this reading the low basal signal is additional evidence that the display works, and works even at sub-nanomolar concentrations. The second is that inserting a metallothionein into the display scaffold reduces expression from the whole construct — through plasmid burden, altered copy number, read-through effects or impaired cell-envelope physiology — so that both basal and induced output are scaled down by a factor that has nothing to do with cadmium.

The data favour the first reading but do not establish it. The argument for the first: all four low-leak constructs still show clean, monotonic, dose-dependent induction, which an expression defect severe enough to cut output 20-fold would be unlikely to leave intact. The argument against dismissing the second: the constructs with the lowest basal leak are precisely the constructs with the lowest induced signal, and that correlation is what an output-scaling artefact would produce. Distinguishing them needs a reporter that does not depend on the cadmium circuit, and that experiment has not been run.

### Why pVIS3 is different again

pVIS3 suppresses moderately and grows badly, and the two are linked. It loses growth from 40 nM upward in both media, reaching 0.672 of control at 200 nM in standard medium, and its final density is 20–30% below the other constructs. Its GFP suppression improves in the sodium-free medium exactly where its growth is worst. A construct whose reporter output falls because its cells are sick is not demonstrating sequestration, and its position in the ranking should be treated as unresolved until its growth defect is separated from its binding behaviour.

## What this data cannot tell you

The central limitation is that the only readout of cadmium binding is a reporter that sits downstream of everything else the construct does to the cell. Five specific confounds follow from that.

**Reduced sensor output versus reduced free cadmium.** This is the important one, and it is set out in the section above. Every pVIS construct has lower uninduced GFP than pMH45, at a cadmium concentration where there is nothing to sequester. Until the display constructs are shown to produce a normal amount of a cadmium-independent reporter, part of the measured suppression could be a general scaling-down of output. The fix is a constitutive second reporter — a different fluorophore on the same plasmid, driven by a promoter with no metal dependence — read in the same wells. Suppression ratios would then be expressed per unit of constitutive reporter rather than per OD600.

**Binding versus exclusion.** Even granting that less cadmium reaches the cytoplasm, the data do not show that it was bound by the metallothionein. An OmpA loop-3 insertion alters a major outer-membrane porin. A construct that reduces porin function reduces solute flux generally, cadmium included, with no metal binding involved. The constructs with the strongest suppression would then be the ones that disrupt OmpA most — and pVIS7’s envelope-failure phenotype shows that disruption is possible in this system. Distinguishing these needs a direct measurement: cadmium remaining in the spent medium, or cadmium associated with washed cells, by ICP-MS or atomic absorption.

**Surface display is assumed, not shown.** Nothing here demonstrates that the metallothionein is on the outside of the outer membrane. The construct carries a strep tag; whole-cell immunolabelling of non-permeabilised cells, or protease-accessibility, would establish orientation and give a relative measure of display density per construct — which is needed before any difference between constructs can be attributed to the protein sequence rather than to how much of it got displayed.

**The detector ceiling at the top of the series.** pMH45 at 300 nM reads at the level of the pYC08 positive control. The flattening between 300 and 400 nM in the control cannot be separated from instrument saturation at gain 70, and every suppression percentage at 300 and 400 nM uses a possibly-compressed denominator. The practical consequence is that suppression at those two concentrations may be slightly understated for every construct. The 200 nM column, where pMH45 reads 12,000 against a 11,000–11,700 positive control and is clearly still on the linear part of its own curve, is the most trustworthy of the three.

**Replication.** Three wells per condition on one plate is three technical replicates from, as far as these files show, one culture each. The within-condition standard deviations are strikingly small — often under 1% of the mean growth rate — which indicates excellent pipetting and plate uniformity rather than biological reproducibility. The two independent standard-medium plates agreeing on pMH45 is real evidence; the tight error bars within a plate are not. Nothing here should be quoted with a statistical claim attached until independent transformants have been run on separate days.

A sixth point is smaller but worth recording: the fitted growth rates come from a window chosen on the summary sheets, and for constructs with disturbed kinetics (pVIS3, pVIS7 at high cadmium) a single exponential fit is not a good description of the curve. Lag time and maximum density should be reported alongside the rate for those conditions, since the rate alone hides the phenotype.

## What to do next

The single most valuable next experiment is a direct cadmium measurement, because it converts every claim here from inference to measurement.

**Measure the cadmium, not the reporter.** Grow each construct at 200 and 400 nM, pellet the cells, and measure cadmium in the spent supernatant and in washed cell pellets by ICP-MS or atomic absorption spectroscopy. If the display works as intended, the strong suppressors should show more cadmium associated with washed cells and less left in the medium. This also distinguishes binding from exclusion, which the current data cannot.

**Add a cadmium-independent reporter.** A constitutively expressed second fluorophore in the same cells would settle whether the low basal GFP in pVIS2, pVIS5, pVIS6 and pVIS8 reflects less free metal or less output overall. Without it, the top of the ranking stays ambiguous.

**Confirm display.** Immunolabel the strep tag on intact, non-permeabilised cells and compare signal per cell across constructs. This gives the display density needed to normalise binding performance per displayed protein, and it would show whether the weak suppressors are weak binders or simply poorly displayed.

**Put the finalists on one plate.** The best construct from each set has never competed directly. One plate carrying pMH45, pVIS2, pVIS5, pVIS6, pVIS8 and a repeat of pVIS1 as a known intermediate, in standard medium, would convert the cross-plate inference into a direct comparison.

**Re-run the top of the series at lower gain.** The 300 and 400 nM points are near the detector ceiling. Repeating the cadmium series at a reduced gain, or extending it to 600 and 800 nM at lower gain, would show whether the strong suppressors have a saturation point at all. If pVIS8 stays flat at 4% up to 800 nM, that is a very different result from a buffer that saturates at 500 nM.

**Characterise pVIS7 before discarding it.** Sequence the plasmid from a culture grown at 300 nM, plate for viable counts at the failing concentrations, and check whether the late growth is recovery or takeover by an escape mutant. A construct that binds cadmium well but destabilises the envelope is a different engineering problem from one that is simply toxic, and the two have different fixes.

**Separate rate from lag in the fits.** For pVIS3 and pVIS7 at high cadmium, report lag time, maximum growth rate over a fitted window and final density as three numbers. The current single-rate summary hides the phenotype that matters most.

One open item sits outside the experimental programme: the insert identities for pVIS5 through pVIS8 are not recorded in these workbooks. Since those four include the best-performing constructs in the dataset, linking plate labels to sequences in the same file as the data would be worth doing before the results are written up anywhere more permanent.

## How every number here was derived

All values were recomputed from the raw Tecan exports rather than taken from the existing summary sheets, except the growth rates, which were read from the summary sheets and checked against the plotted figure.

### Source files

<div class="results-table-wrap" markdown="1">

| File | Plate | Medium | Constructs | Reads |
|---|---|---|---|---|
| 20260910pMH45-pVIS1234(student).xlsx | 2026-09-10 | standard | pMH45, pVIS1–4 | 92 wells, 35 cycles, 10.6 h |
| 20260927pMH45-pVIS1234(No Na).xlsx | 2026-09-27 | Na-free | pMH45, pVIS1–4 | 92 wells, 35 cycles, 10.6 h |
| 20260928pMH45-pVIS567 (No Na).xlsx | 2026-09-28 | Na-free | pMH45, pVIS5–7 | 74 wells, 35 cycles, 10.1 h |
| 20260930pMH45-pVIS5678 (Normal).xlsx | 2026-09-30 | standard | pMH45, pVIS5–8 | 92 wells, 35 cycles, 10.6 h |
| 20261002pMH45-pVIS8 (No Na).xlsx | 2026-10-02 | Na-free | pMH45, pVIS8 | 38 wells, 35 cycles, 9.1 h |
| 20260921pMH45_pVIS567.xlsx | 2026-09-21 | — | plate map only, no kinetic data | — |

</div>

### Optical density

The instrument records a 3×3 multi-read per well. The workbooks take the mean of reads 2 and 3 only, discarding read 1 — for well A2 on the 2026-09-30 plate, reads of 0.1934, 0.1030 and 0.1009 give a working value of 0.10195. That convention was preserved. Blank-subtracted OD600 is the final reading minus the minimum reading of that well’s own time series, which removes the well’s optical offset without needing a separate blank well.

### Growth rate and doubling time

Growth rates are the per-well fitted values in the "GR Mean, SD, DT" sheets, in h⁻¹, with doubling time in minutes. The relationship was verified: pMH45 at 0 nM on the 2026-09-30 plate has a rate of 1.65048 h⁻¹ and a listed doubling time of 25.198 min, and ln2 ÷ 1.65048 × 60 = 25.198. Every quoted group value is the mean of three wells as given on those sheets.

The cross-plate normalisation in the existing figure was reproduced exactly. The factor is the mean of the two reference-strain ratios between the 2026-09-10 and 2026-09-30 plates: pTK03 1.70825 ÷ 1.84651 = 0.92512, pYC08 1.36767 ÷ 1.53284 = 0.89225, mean 0.90869. Applying it to the 2026-09-30 plate gives pMH45 1.4998, pVIS5 1.5479, pVIS6 1.5777 and pVIS7 1.4318 at 0 nM, which match the plotted values. pVIS8 computes to 1.3812 against a plotted value near 1.355, a 2% discrepancy that was not resolved — pVIS8 occupies two separate well groups on that plate and the plotted value may average a different set.

### Fluorescence

GFP is the instrument’s 2×2 mean, in relative fluorescence units at 488/528 nm, gain 70. Background is the pTK03 reading on the same plate at the same timepoint, since pTK03 carries no GFP: 463, 472, 507, 513 and 558 RFU on the five plates. "GFP/OD600" throughout means (GFP − pTK03 background) ÷ blank-subtracted OD600, per well, averaged over the three replicate wells.

Endpoint values are at the final cycle. Peak values, used as a cross-check, take each well’s own maximum. The two conventions give the same construct ranking: at 400 nM in standard medium the endpoint percentages of pMH45 are pVIS4 42.2%, pVIS1 35.9%, pVIS3 14.2%, pVIS2 6.3%, pVIS5 6.3%, pVIS6 5.6%, pVIS8 3.9%, and the peak percentages are 42.5%, 36.5%, 15.3%, 8.2%, 7.8%, 6.2% and 5.6% respectively. Peak fluorescence is reached at 4.3–6.0 h in all healthy cultures and at 7.9–8.1 h for pVIS7 at the concentrations where it fails.

### Plate maps

Construct and cadmium assignments were read from the second block of each workbook’s map sheet, where cells are labelled in the form `pVIS5-C`. The suffixes map to cadmium as 0 = 0 nM, A = 8 nM, B = 40 nM, C = 200 nM, D = 300 nM, E = 400 nM, from the condition key on the 2026-09-21 sheet. Two wells per plate are read but carry no construct-condition label: these are pTK03 and pYC08, identified from the first map block.

### Not used

The plotted PNG figures in the Growth Rate and GFP Intensity folders were not re-analysed; the one PDF figure was read and its values reproduced from source. All quantitative statements above come from the workbooks.

</div>
