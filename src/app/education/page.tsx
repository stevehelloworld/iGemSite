import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        tone="mint"
        mascotMood="happy"
        eyebrow="Human Practices"
        title="Education"
        subtitle="Teaching synthetic biology the way makers learn — systems diagrams, flight logs, and first principles — not only flashcards."
      />
      <ContentLayout>
        <Section title="Approach">
          <p>
            CadArmor&apos;s education track translates our research logs into classroom-ready
            stories: why surface display beats swallowing toxin, how sensors trade sensitivity for
            specificity, and how models bootstrap from literature.
          </p>
        </Section>
        <Section title="Formats">
          <ul>
            <li>Short English explainers for middle- and high-school clubs</li>
            <li>Whiteboard DBTL workshops: pick a choke point, redesign the module</li>
            <li>Wiki open house: walk stakeholders through Detect / Capture / Mineralize</li>
            <li>Safety-first demo discussions (no unsupervised heavy-metal student labs)</li>
          </ul>
        </Section>
        <Section title="Learning Outcomes">
          <ul>
            <li>Students can explain bioaccumulation vs biosorption vs biomineralization</li>
            <li>Students can critique a genetic circuit for real-world friction</li>
            <li>Students can connect SDGs (clean water, industry, health) to wet-lab choices</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
