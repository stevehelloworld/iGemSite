import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Description",
};

const toc = [
  { id: "inspiration", label: "Inspiration" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "Our Solution" },
  { id: "goals", label: "Project Goals" },
  { id: "impact", label: "Impact" },
];

export default function DescriptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="Description"
        subtitle="Cadmium is a silent industrial poison. CadArmor turns E. coli into a living purification plant: detect, capture on the surface, then mineralize for recovery."
        badge="VIS iGEM 2026"
      />
      <ContentLayout toc={toc}>
        <Section id="inspiration" title="Inspiration">
          <p>
            Our journey started with a systems question, not a single gene:{" "}
            <strong>how do you remove cadmium without killing the machine that removes it?</strong>
          </p>
          <p>
            Across Ray&apos;s research flight logs, one pattern kept appearing. Classic microbial
            cleanup routes force heavy metals <em>into</em> the cell — bioaccumulation via
            intracellular metallothioneins. It works on paper. In a real chassis, it is like
            storing naval mines inside the submarine.
          </p>
          <p>
            Literature on surface-displayed MT, plant metallothioneins from water spinach
            (<em>Ipomoea aquatica</em>), MICP dual-function wastewater designs, and NTU&apos;s
            ultra-specific CadR biosensor all pointed the same way:{" "}
            <strong>detect outside risk, capture at the boundary, seal as solids</strong>.
          </p>
        </Section>

        <Section id="problem" title="The Problem">
          <p>
            Cadmium (Cd²⁺) contaminates industrial wastewater and agricultural irrigation chains.
            It is nephrotoxic, persistent, and regulated at very low concentrations. Existing
            treatments each fail a different test:
          </p>
          <ul>
            <li>
              <strong>Chemical precipitation</strong> — effective, but expensive and generates
              toxic sludge (sometimes introducing new pollutants like aluminum).
            </li>
            <li>
              <strong>Ion exchange / adsorbents</strong> — high consumable cost and regeneration
              burden.
            </li>
            <li>
              <strong>Native bioremediation</strong> — greener, yet often too slow or too fragile
              under industrial loads.
            </li>
            <li>
              <strong>Intracellular engineered capture</strong> — raises metal load inside the
              cell, crushing viability and throughput.
            </li>
          </ul>
          <Callout title="Systems bug" tone="warn">
            Putting the toxin at the core of the living system violates first-principles
            engineering. CadArmor relocates the risk to the membrane boundary.
          </Callout>
        </Section>

        <Section id="solution" title="Our Solution — CadArmor">
          <p>
            <strong>CadArmor</strong> is a dual-mode synthetic biology platform in{" "}
            <em>E. coli</em>:
          </p>
          <ul>
            <li>
              <strong>Detect</strong> — a cadmium-responsive genetic circuit (CadR-class logic)
              reports Cd²⁺ and gates expensive capture modules.
            </li>
            <li>
              <strong>Capture</strong> — metallothionein fused to OmpA / Lpp-OmpA anchors on the
              outer membrane so binding happens <em>outside</em> the cytoplasm.
            </li>
            <li>
              <strong>Mineralize</strong> — optional MICP (microbially induced calcite
              precipitation) via a urease cluster converts free ions into solid carbonates for
              physical recovery.
            </li>
          </ul>
          <p>
            The full loop is self-throttling: as free Cd drops, the detect-then-capture negative
            feedback reduces metabolic burden — a living plant that works hard only when needed.
          </p>
          <p>
            Dive deeper in <Link href="/design" className="font-semibold text-primary hover:underline">Design</Link>{" "}
            and <Link href="/engineering" className="font-semibold text-primary hover:underline">Engineering</Link>.
          </p>
        </Section>

        <Section id="goals" title="Project Goals">
          <ul>
            <li>Demonstrate surface-displayed MT increases Cd binding and cell survival vs intracellular-only strategies.</li>
            <li>Integrate a Cd sensor that prioritizes specificity (minimize Zn/Pb false triggers).</li>
            <li>Prototype MICP co-expression for precipitation-based recovery.</li>
            <li>Model kinetics with ODEs bootstrapped from published MT Kd values.</li>
            <li>Package sensing/control with ESP32 hardware for a future bioreactor demo.</li>
            <li>Document honestly — choke points, people systems, and failed assumptions included.</li>
          </ul>
        </Section>

        <Section id="impact" title="Impact">
          <p>
            If CadArmor works at lab scale, it points toward cheaper, greener polishing steps for
            cadmium-laden wastewater — especially where chemical plants leave residual ions below
            easy chemical reach but still above safety limits.
          </p>
          <p>
            Beyond medals, we want a wiki and a team culture that treat synthetic biology as
            systems engineering: measure friction, redesign the architecture, ship the next DBTL
            cycle. That is how a junior-high-led team aims for the Grand Jamboree.
          </p>
        </Section>
      </ContentLayout>
    </>
  );
}
