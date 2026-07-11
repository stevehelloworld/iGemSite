import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Experiments",
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "roadmap", label: "Roadmap" },
  { id: "protocols", label: "Core Protocols" },
  { id: "controls", label: "Controls" },
];

export default function ExperimentsPage() {
  return (
    <>
      <PageHero
        tone="mint"
        mascotMood="happy"
        eyebrow="Wet Lab"
        title="Experiments"
        subtitle="A practical roadmap from plasmid assembly to cadmium assays — designed so every experiment answers one architectural question."
      />
      <ContentLayout toc={toc}>
        <Section id="overview" title="Experimental Overview">
          <p>
            Wet Lab workstreams follow the three modules: prove surface capture, characterize
            sensing, then stress-test MICP co-expression. Safety and waste handling for heavy-metal
            experiments are documented on the Safety page.
          </p>
        </Section>

        <Section id="roadmap" title="Roadmap">
          <ol className="space-y-3 text-sm text-muted">
            {[
              "Part synthesis & Golden Gate / HiFi assembly of capture construct",
              "Transformation, colony PCR, miniprep, sequencing",
              "Expression: SDS-PAGE, Western blot for fusion size",
              "Localization: membrane fractionation / surface accessibility checks",
              "Functional: Cd removal %, adsorption isotherms, growth under Cd",
              "Sensor: fluorescence dose–response and metal panel specificity",
              "MICP: urease activity, pH, precipitate observation under Cd + urea",
              "Integration: co-expression burden and dual-module performance",
            ].map((step, i) => (
              <li
                key={step}
                className="flex gap-3 sticker px-4 py-3"
              >
                <span className="font-mono text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="protocols" title="Core Protocol Families">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Molecular cloning", "Restriction, PCR, gel extract, HiFi/Gibson, colony PCR"],
              ["Protein work", "Culture, induction/constitutive growth, SDS-PAGE, Western"],
              ["Metal assays", "Serial Cd exposure, removal quantification, MIC"],
              ["Sensor assays", "Plate reader fluorescence, metal cross-talk panel"],
              ["MICP assays", "Urea feeding, pH logging, precipitate imaging"],
              ["Analytics", "Bradford, OD600 curves, optional FT-IR"],
            ].map(([t, d]) => (
              <div key={t} className="sticker-cream p-4">
                <div className="font-bold text-primary-dark">{t}</div>
                <div className="mt-1 text-sm text-muted">{d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="controls" title="Controls We Will Always Run">
          <ul>
            <li>Empty vector / scaffold-only (OmpA without MT)</li>
            <li>Intracellular MT expression (architecture control)</li>
            <li>No-Cd baseline for sensor autofluorescence</li>
            <li>Metal panel for specificity (at least Zn, Pb)</li>
            <li>Urease-off genetic or condition control for MICP</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
