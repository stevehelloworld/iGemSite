import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Safety",
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "biosafety", label: "Biosafety" },
  { id: "chemical", label: "Cd Chemical Safety" },
  { id: "design", label: "Safe-by-Design" },
  { id: "waste", label: "Waste" },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        tone="rose"
        mascotMood="think"
        eyebrow="Human Practices"
        title="Safety"
        subtitle="Cadmium work and engineered microbes demand layered safety — people, protocols, and genetic design."
      />
      <ContentLayout toc={toc}>
        <Section id="overview" title="Overview">
          <p>
            CadArmor uses non-pathogenic laboratory <em>E. coli</em> strains and cadmium salts for
            assays. We treat both biological and chemical hazards seriously, with adult supervision
            and institutional rules for a junior-high-led team.
          </p>
          <Callout title="Non-negotiable" tone="warn">
            No unsupervised heavy-metal experiments. No environmental release of engineered
            strains. All Cd waste is collected as hazardous chemical waste.
          </Callout>
        </Section>

        <Section id="biosafety" title="Biosafety">
          <ul>
            <li>BSL-1 laboratory practices for standard K-12 / teaching lab E. coli work</li>
            <li>PPE: lab coat, gloves, eye protection; no food/drink in lab</li>
            <li>Aseptic technique, proper disinfection, sharps disposal</li>
            <li>Strains and plasmids inventoried; access controlled</li>
          </ul>
        </Section>

        <Section id="chemical" title="Cadmium Chemical Safety">
          <ul>
            <li>Cd salts handled in designated zones with spill kits</li>
            <li>Stock solutions prepared by trained members only</li>
            <li>Minimize volumes; prefer closed containers and secondary containment</li>
            <li>Exposure response SOP posted; emergency contacts available</li>
          </ul>
        </Section>

        <Section id="design" title="Safe-by-Design Choices">
          <ul>
            <li>Laboratory chassis, not environmental specialists intended for release</li>
            <li>Surface capture reduces need for extreme intracellular metal loads</li>
            <li>Hardware demos avoid unsupervised pumping of Cd liquids in MVP</li>
            <li>Future: kill switches / auxotrophy for any scale-up narrative</li>
          </ul>
        </Section>

        <Section id="waste" title="Waste & Decontamination">
          <ul>
            <li>Biological waste autoclaved or chemically inactivated per local rules</li>
            <li>Cd-contaminated liquids / plastics segregated as chemical hazardous waste</li>
            <li>Never sink-dispose cadmium solutions</li>
            <li>Document disposal batch IDs in the notebook</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
