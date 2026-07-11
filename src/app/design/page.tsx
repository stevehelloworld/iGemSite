import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Callout from "@/components/Callout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Design",
};

const toc = [
  { id: "overview", label: "Architecture" },
  { id: "detect", label: "Detect Module" },
  { id: "capture", label: "Capture Module" },
  { id: "micp", label: "MICP Module" },
  { id: "chassis", label: "Chassis & Control" },
  { id: "why", label: "Why Surface Display" },
];

export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="Design"
        subtitle="Detect → Capture → Mineralize. Like genetic LEGO: every layer has a job, a failure mode, and literature proof."
      />
      <ContentLayout toc={toc}>
        <Section id="overview" title="System Architecture">
          <p>
            CadArmor is organized like a process plant, not a single plasmid trick. Three modules
            sit on one chassis with clear interfaces:
          </p>
          <div className="my-6 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Detect", d: "Sense Cd²⁺; gate expression; optional optical report" },
              { t: "Capture", d: "OmpA–MT outer-membrane armor binds free ions" },
              { t: "Mineralize", d: "Urease MICP precipitates Cd for recovery" },
            ].map((m) => (
              <div
                key={m.t}
                className="sticker-mint px-4 py-4 text-center"
              >
                <div className="text-sm font-bold text-primary">{m.t}</div>
                <div className="mt-1 text-xs text-muted">{m.d}</div>
              </div>
            ))}
          </div>
          <p>
            Control philosophy: <strong>Detect-then-Capture</strong>. Capture proteins are costly.
            We only fully engage them when Cd is present, then let falling free-Cd create a
            negative-feedback throttle.
          </p>
        </Section>

        <Section id="detect" title="Module 1 — Detect">
          <p>
            Inspired by the NTU whole-cell cadmium biosensor work, our sensing stack targets the
            classic sensitivity–specificity tradeoff:
          </p>
          <ul>
            <li>Cadmium-responsive transcription factors (CadR-class) drive reporter / actuator genes.</li>
            <li>Metal homeostasis edits can trap Cd to raise sensitivity — carefully balanced against stress.</li>
            <li>Zinc interference is a known bug; Zn-export helpers (e.g. ZitB logic) are part of our design vocabulary.</li>
            <li>Literature benchmarks: nanomolar LOD, hundreds-fold signal change, smartphone-readable fluorescence demos.</li>
          </ul>
          <Callout title="Design intent">
            Detection is not only a reporter for judges — it is the on/off switch that keeps the
            factory economical inside a living cell.
          </Callout>
        </Section>

        <Section id="capture" title="Module 2 — Capture (Cadmium Armor)">
          <p>
            The heart of CadArmor is surface-displayed metallothionein:
          </p>
          <ul>
            <li>
              <strong>Anchor:</strong> OmpA or Lpp-OmpA outer-membrane display scaffold.
            </li>
            <li>
              <strong>Binder:</strong> MT domain candidates from bacterial (e.g. SmtA-class) and
              plant sources (IaMT2/IaMT3, OsMTI-1b) ranked by Cd affinity and folding success in{" "}
              <em>E. coli</em>.
            </li>
            <li>
              <strong>Linker:</strong> flexible peptide between scaffold and MT — without it,
              steric clash freezes folding (a choke point we already hit in design review).
            </li>
            <li>
              <strong>Codon optimization:</strong> required before commercial DNA synthesis.
            </li>
          </ul>
          <p>
            Published surface-MT strains improved Cd MIC (60 → 160 mg/L) and roughly doubled
            removal efficiency in model wastewater — our primary POC for this module.
          </p>
        </Section>

        <Section id="micp" title="Module 3 — Mineralize (MICP)">
          <p>
            Binding alone leaves ions associated with biomass. Industrial plants need separation.
            MICP adds a physical seal:
          </p>
          <ul>
            <li>Urease gene cluster (ureA–G, ureD) from <em>Sporosarcina pasteurii</em> (~5.3 kb).</li>
            <li>Urea → ammonia + carbonate; local pH rises; CdCO₃-type solids form near cells.</li>
            <li>Solids + biomass can be settled or filtered more easily than free ions.</li>
          </ul>
          <p>
            Paired with surface MT, this is a chemical capture + physical packaging stack —
            complementary, not redundant.
          </p>
        </Section>

        <Section id="chassis" title="Chassis, Vectors & Promoters">
          <ul>
            <li>
              <strong>Cloning:</strong> <em>E. coli</em> DH5α for plasmid stability.
            </li>
            <li>
              <strong>Expression:</strong> BL21(DE3) (Lon / OmpT reduced) for protein yield.
            </li>
            <li>
              <strong>Vector logic:</strong> high-copy backbones (e.g. pET-28a family) with
              kanamycin preference for stability in long cultures.
            </li>
            <li>
              <strong>Promoters:</strong> for plant-like continuous operation we favor strong
              constitutive parts (e.g. BBa_J23100) over IPTG-dependent T7 — inducers do not scale
              in wastewater.
            </li>
          </ul>
        </Section>

        <Section id="why" title="Why Surface Display Wins">
          <p>
            A 2002 intracellular hMT-II–β-galactosidase fusion showed that cytoplasmic MT can
            raise Cd load — but authors themselves noted periplasmic/outer-membrane expression
            usually wins unless transporters are co-expressed. EDX even found ~40% of Cd already
            associated with the outer membrane.
          </p>
          <Callout title="Architecture decision" tone="success">
            We put the filter at the inlet (membrane), not at the end of the pipe (cytoplasm).
            That single choice shapes parts, assays, safety, and hardware.
          </Callout>
        </Section>
      </ContentLayout>
    </>
  );
}
