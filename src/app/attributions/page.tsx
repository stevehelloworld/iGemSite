import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Section from "@/components/Section";
import { attributions } from "@/data/team";

export const metadata: Metadata = {
  title: "Attributions",
};

export default function AttributionsPage() {
  return (
    <>
      <PageHero
        tone="sky"
        mascotMood="happy"
        eyebrow="Team"
        title="Attributions"
        subtitle="Who built what. iGEM is a team sport — this page keeps credit honest as the season grows."
      />
      <ContentLayout>
        <Section title="Work breakdown">
          <div className="space-y-4">
            {attributions.map((block) => (
              <div key={block.area} className="sticker p-5">
                <h3 className="text-lg font-bold text-primary-dark">{block.area}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {block.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Note">
          <p>
            Member-level attributions will be expanded with named contributors as roles stabilize
            through the 2026 season. External advisors, lab hosts, and sponsors will be listed here
            when onboarded.
          </p>
        </Section>
      </ContentLayout>
    </>
  );
}
