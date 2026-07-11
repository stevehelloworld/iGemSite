import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Human Practices",
};

const toc = [
  { id: "why", label: "Why HP" },
  { id: "stakeholders", label: "Stakeholders" },
  { id: "questions", label: "Questions We Ask" },
  { id: "integration", label: "Integration Plan" },
];

export default function HumanPracticesPage() {
  return (
    <>
      <PageHero
        tone="lavender"
        mascotMood="happy"
        eyebrow="Human Practices"
        title="Integrated Human Practices"
        subtitle="Cadmium cleanup is not only a cloning problem. It is a people, policy, and trust problem — and our design must listen."
      />
      <ContentLayout toc={toc}>
        <Section id="why" title="Why Human Practices Matter for CadArmor">
          <p>
            A perfect plasmid that nobody can deploy, regulate, or trust is a failed product.
            Lessons from Conrad Challenge training reinforce this: innovation is a solution
            matched to real human needs, not a cool technique.
          </p>
        </Section>

        <Section id="stakeholders" title="Stakeholder Map">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Industrial wastewater operators", "Cost, sludge disposal, uptime, regulations"],
              ["Environmental regulators", "Effluent limits, GMO containment, monitoring"],
              ["Local communities", "Drinking / irrigation water safety, transparency"],
              ["Clinics & public health", "Cd exposure pathways (e.g. water, food chain)"],
              ["Teachers & students", "Education on synthetic biology & pollution"],
              ["iGEM community", "Reusable parts, open protocols, safety norms"],
            ].map(([t, d]) => (
              <div key={t} className="sticker p-4">
                <div className="font-bold text-primary-dark">{t}</div>
                <div className="mt-1 text-sm text-muted">{d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="questions" title="Questions We Ask">
          <ul>
            <li>Where does cadmium enter local water systems, and who measures it today?</li>
            <li>Would operators prefer detection kits, continuous bioreactors, or polishing filters?</li>
            <li>What containment level is acceptable for engineered E. coli near wastewater?</li>
            <li>How do we avoid greenwashing — what metrics prove real risk reduction?</li>
            <li>How should junior students safely learn heavy-metal synthetic biology?</li>
          </ul>
        </Section>

        <Section id="integration" title="Integration Plan">
          <ul>
            <li>Interview plan: treatment engineers, teachers, and environmental educators.</li>
            <li>Feed constraints into Design (constitutive vs inducible; kill switches; closed hardware).</li>
            <li>Education workshops that reuse our journal explainers (surface display, MICP).</li>
            <li>Document how stakeholder input changed a part, assay, or safety rule.</li>
          </ul>
        </Section>
      </ContentLayout>
    </>
  );
}
