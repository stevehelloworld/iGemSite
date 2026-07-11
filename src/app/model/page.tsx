import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Model",
};

const toc = [
  { id: "goal", label: "Modeling Goals" },
  { id: "approach", label: "Approach" },
  { id: "vars", label: "State Variables" },
  { id: "bootstrap", label: "Literature Bootstrap" },
  { id: "future", label: "Next Steps" },
];

export default function ModelPage() {
  return (
    <>
      <PageHero
        tone="sky"
        mascotMood="think"
        eyebrow="Dry Lab"
        title="Model"
        subtitle="ODE-based kinetic modeling that starts from published metallothionein affinities, then upgrades to VIS wet-lab parameters as assays land."
      />
      <ContentLayout toc={toc}>
        <Section id="goal" title="Modeling Goals">
          <ul>
            <li>Predict free Cd²⁺ decline under surface-MT capture vs intracellular capture.</li>
            <li>Quantify metabolic burden of always-on vs Detect-then-Capture expression.</li>
            <li>Explore MICP precipitation coupling (pH / carbonate / solid Cd species).</li>
            <li>Identify which parameters most need experimental measurement (sensitivity analysis).</li>
          </ul>
        </Section>

        <Section id="approach" title="Approach">
          <p>
            We use compartment-style ODEs: bulk liquid metal, surface-bound metal, optional
            intracellular metal, biomass, and (for MICP) urea / carbonate / precipitate pools.
            Detect-module expression is modeled as a Cd-dependent Hill or TF occupancy function
            driving capture-protein production.
          </p>
          <Callout title="Deadlock breaker">
            Dry Lab does not wait forever for perfect Wet Lab numbers. We bootstrap with literature
            dissociation constants (Kd) for MT variants, then replace them as VIS data arrives.
          </Callout>
        </Section>

        <Section id="vars" title="Core State Variables (conceptual)">
          <div className="overflow-x-auto sticker">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-blush text-xs font-black uppercase tracking-wider text-primary">
                <tr>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0d5db] bg-white">
                {[
                  ["Cd_free", "Free cadmium in bulk medium"],
                  ["MT_surf", "Surface-displayed MT sites (free / occupied)"],
                  ["Cd_bound", "Cadmium bound on surface armor"],
                  ["Sensor", "Active TF / promoter activity"],
                  ["X", "Biomass"],
                  ["Urea / CO3 / Cd_solid", "MICP-related pools (optional layer)"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-primary">{row[0]}</td>
                    <td className="px-4 py-3 text-muted">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="bootstrap" title="Literature Bootstrap Inputs">
          <ul>
            <li>Relative Cd affinities across MT orthologs (plant vs bacterial candidates).</li>
            <li>Order-of-magnitude removal rates from surface-display papers.</li>
            <li>Sensor dose–response shapes (nM–µM Cd regimes).</li>
            <li>Environmental modifiers: pH competition, temperature effects on EPS/enzymes.</li>
          </ul>
        </Section>

        <Section id="future" title="Next Modeling Steps">
          <ul>
            <li>Implement numerical solver notebook (Python) with parameter sweep UI.</li>
            <li>Fit growth + removal curves once Cycle 1 assays finish.</li>
            <li>Couple simple hardware constraints (mixing time, sensor delay) for ESP32 demos.</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
