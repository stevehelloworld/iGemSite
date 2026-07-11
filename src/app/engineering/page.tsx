import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Engineering",
};

const toc = [
  { id: "philosophy", label: "Philosophy" },
  { id: "dbtl", label: "DBTL Cycles" },
  { id: "choke", label: "Choke Points" },
  { id: "decisions", label: "Key Decisions" },
];

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        tone="cream"
        mascotMood="think"
        eyebrow="Project"
        title="Engineering"
        subtitle="Whiteboards lie. Real systems have friction. DBTL cycles and the choke points we actually hit."
      />
      <ContentLayout toc={toc}>
        <Section id="philosophy" title="Engineering Philosophy">
          <p>
            VIS treats synthetic biology like robotics: define the interface, find the bottleneck,
            ship a smaller loop. Our motto from the flight logs —{" "}
            <strong>excellence is the ability to endure boring work</strong> — applies to primers
            and to people systems.
          </p>
          <Callout title="First principles">
            If a design forces the chassis to store toxin in its core, rewrite the architecture
            before optimizing a promoter by 10%.
          </Callout>
        </Section>

        <Section id="dbtl" title="DBTL Cycles (Planned & In Progress)">
          <div className="space-y-4">
            {[
              {
                cycle: "Cycle 0 — Architecture lock",
                learn: "Literature map of biosorption, bioaccumulation, MICP, efflux, and sensors.",
                build: "System diagram: Detect-then-Capture (+ optional MICP).",
                test: "Team design reviews; compare intracellular vs surface MT papers.",
                next: "Commit to OmpA/Lpp-OmpA surface MT as primary capture.",
              },
              {
                cycle: "Cycle 1 — Capture scaffold",
                learn: "Direct MT–OmpA fusions risk steric folding failure.",
                build: "Insert flexible linker; codon-optimize OmpA–linker–MT for synthesis.",
                test: "In silico checks + synthesis-ready sequence review.",
                next: "Order DNA; plan Western / FT-IR / Cd removal assays.",
              },
              {
                cycle: "Cycle 2 — Detect integration",
                learn: "Sensitivity without specificity is a false-positive factory (Zn, Pb).",
                build: "CadR-class sensor driving reporter and/or capture actuators.",
                test: "Dose–response to Cd vs Zn panel (design stage).",
                next: "Tune promoters and RBS; optional Zn-export helper.",
              },
              {
                cycle: "Cycle 3 — MICP seal",
                learn: "Capture without separation is incomplete for industrial stories.",
                build: "Urease cluster expression with constitutive control.",
                test: "Precipitation assays, pH, settleability.",
                next: "Co-expression stress test with surface MT.",
              },
              {
                cycle: "Cycle 4 — Dry lab coupling",
                learn: "Wet Lab ↔ Dry Lab deadlock if models wait for perfect data.",
                build: "ODEs from published MT Kd; ESP32 block diagram for flow/GFP roles.",
                test: "Parameter sweeps; hardware scope decision.",
                next: "Replace literature constants with our assay data.",
              },
            ].map((c) => (
              <div key={c.cycle} className="sticker p-5">
                <h3 className="text-lg font-bold text-primary-dark">{c.cycle}</h3>
                <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <p><strong>Learn:</strong> {c.learn}</p>
                  <p><strong>Build:</strong> {c.build}</p>
                  <p><strong>Test:</strong> {c.test}</p>
                  <p><strong>Next:</strong> {c.next}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="choke" title="Choke Points We Already Hit">
          <ul>
            <li>
              <strong>Tool friction:</strong> DNA design software broke across Windows/Mac —
              process, not science, stalled cloning design.
            </li>
            <li>
              <strong>Hardware ambiguity:</strong> ESP32 role unclear (wastewater flow control vs
              GFP optical sensing) until the block diagram was rewritten.
            </li>
            <li>
              <strong>Cross-team deadlock:</strong> Dry Lab needed environmental parameters; Wet
              Lab needed time. Fix: bootstrap models with literature Kd values.
            </li>
            <li>
              <strong>Molecular sterics:</strong> missing linker between Lpp-OmpA and MT → folding
              risk; fixed with flexible linker + codon optimization.
            </li>
            <li>
              <strong>People systems:</strong> summer schedules and skill trees forced reallocation
              — junior members without calculus moved from ODEs to wiki/frontend so every seat
              still ships value.
            </li>
          </ul>
        </Section>

        <Section id="decisions" title="Key Engineering Decisions">
          <div className="overflow-x-auto sticker">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-blush text-xs font-black uppercase tracking-wider text-primary">
                <tr>
                  <th className="px-4 py-3">Decision</th>
                  <th className="px-4 py-3">Choice</th>
                  <th className="px-4 py-3">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0d5db] bg-white">
                {[
                  ["Capture location", "Outer membrane MT", "Lower toxicity; literature MIC/removal gains"],
                  ["Control logic", "Detect-then-Capture", "Reduce idle metabolic load"],
                  ["Recovery", "MICP optional layer", "Turn ions into separable solids"],
                  ["Promoters (plant mode)", "Constitutive strong", "No IPTG in real wastewater"],
                  ["Modeling start", "Literature Kd first", "Break Wet/Dry deadlock"],
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
      </ContentLayout>
    </>
  );
}
