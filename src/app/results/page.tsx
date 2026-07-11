import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Results",
};

const toc = [
  { id: "status", label: "Status" },
  { id: "poc", label: "Literature POC" },
  { id: "targets", label: "Success Metrics" },
  { id: "next", label: "Next Experiments" },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        tone="sky"
        mascotMood="think"
        eyebrow="Project"
        title="Results"
        subtitle="We are early in the 2026 season. This page separates literature proof-of-concept benchmarks from our own experimental targets."
        badge="In progress"
      />
      <ContentLayout toc={toc}>
        <Section id="status" title="Current Status">
          <p>
            CadArmor is in architecture + sequence design phase. DNA synthesis for the OmpA–linker–MT
            capture module is being prepared. Sensor and MICP layers are specified; wet-lab
            execution will populate this page with primary data.
          </p>
          <Callout title="Transparency" tone="warn">
            Numbers below marked “literature” are not VIS experimental results. They justify
            design choices and set quantitative bars for our assays.
          </Callout>
        </Section>

        <Section id="poc" title="Literature Proof-of-Concept">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Surface MT armor",
                points: [
                  "MIC: 60 → 160 mg/L Cd for armored vs wild-type E. coli",
                  "Removal at 40 mg/L: 31.9% → 61.2%",
                  "FT-IR: surface amide bands dominate binding",
                ],
              },
              {
                title: "Intracellular MT control",
                points: [
                  "hMT-II fusion: 10.5 vs 3.11 μg Cd/mg dry weight",
                  "Affinity order Cd > Zn > Cu",
                  "Authors note membrane display usually outperforms pure cytoplasm",
                ],
              },
              {
                title: "Plant MT portability",
                points: [
                  "IaMT2 / IaMT3 from water spinach function in E. coli",
                  "IaMT1 ineffective — not all MTs are equal parts",
                  "Supports cross-kingdom MT screening",
                ],
              },
              {
                title: "CadR-class sensing",
                points: [
                  "LOD down to ~3 nM Cd",
                  "Linear 0–200 nM; up to 777× signal",
                  "Zn export restores specificity",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="sticker p-5">
                <h3 className="font-bold text-primary-dark">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {card.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="targets" title="VIS Success Metrics">
          <div className="overflow-x-auto sticker">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-blush text-xs font-black uppercase tracking-wider text-primary">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3">Target</th>
                  <th className="px-4 py-3">Assay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0d5db] bg-white">
                {[
                  ["Surface localization of MT fusion", "Western + fraction assay positive", "Membrane vs soluble fractions"],
                  ["Cd removal vs parental strain", "≥1.5× improvement", "Batch adsorption, AAS/ICP"],
                  ["Cell viability under Cd stress", "Higher MIC / growth curve shift", "MIC + OD600 curves"],
                  ["Sensor dynamic range", "Clear Cd dose–response; low Zn cross-talk", "Fluorescence plate reader"],
                  ["MICP contribution", "Visible/measurable precipitation + pH rise", "Urea + Cd conditions"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-3 font-semibold text-primary-dark">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3 text-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="next" title="Next Experiments">
          <ul>
            <li>Synthesize and clone OmpA–linker–MT; verify assembly by colony PCR / sequencing.</li>
            <li>Expression test in BL21(DE3) or constitutive chassis; SDS-PAGE / Western.</li>
            <li>Cd binding and growth under stress versus empty scaffold control.</li>
            <li>Sensor characterization panel (Cd, Zn, Pb, Hg).</li>
            <li>Feed measured rates into Dry Lab ODE models; retire pure literature constants.</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
