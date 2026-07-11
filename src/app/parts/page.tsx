import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Parts",
};

const toc = [
  { id: "collection", label: "Part Collection" },
  { id: "capture", label: "Capture Parts" },
  { id: "detect", label: "Detect Parts" },
  { id: "micp", label: "MICP Parts" },
  { id: "utility", label: "Utility" },
];

const parts = [
  {
    id: "capture",
    title: "Capture Parts",
    rows: [
      ["OmpA display scaffold", "Outer-membrane anchor domain", "Basic"],
      ["Lpp-OmpA hybrid anchor", "Classic surface-display system", "Basic"],
      ["Flexible linker", "Gly/Ser-rich spacer to avoid steric clash", "Basic"],
      ["MT domain candidates", "Bacterial / plant MTs (IaMT2, OsMTI-1b class)", "Basic"],
      ["OmpA–linker–MT device", "Full cadmium armor fusion", "Composite"],
    ],
  },
  {
    id: "detect",
    title: "Detect Parts",
    rows: [
      ["CadR-class TF", "Cd-responsive transcription factor", "Basic"],
      ["Cd-inducible promoter", "Operator architecture for Cd gating", "Basic"],
      ["Reporter (GFP/sfGFP)", "Optical readout for sensing", "Basic"],
      ["Zn export helper (optional)", "Reduce Zn cross-talk (ZitB logic)", "Basic"],
      ["Detect → Capture device", "Sensor-gated armor expression", "Composite"],
    ],
  },
  {
    id: "micp",
    title: "MICP Parts",
    rows: [
      ["ureA–ureG, ureD cluster", "~5.3 kb urease operon logic from S. pasteurii lineage designs", "Composite"],
      ["Constitutive driver", "e.g. BBa_J23100-class continuous expression", "Regulatory"],
    ],
  },
  {
    id: "utility",
    title: "Utility Parts",
    rows: [
      ["RBS library", "Tune expression burden", "Regulatory"],
      ["KanR marker", "Stable selection preference", "Basic"],
      ["Terminator set", "Insulate modules", "Basic"],
    ],
  },
];

export default function PartsPage() {
  return (
    <>
      <PageHero
        tone="cream"
        mascotMood="happy"
        eyebrow="Wet Lab"
        title="Parts"
        subtitle="A modular collection for surface cadmium capture, sensing, and MICP mineralization. Registry submission IDs will be filled after sequence finalization."
      />
      <ContentLayout toc={toc}>
        <Section id="collection" title="Collection Philosophy">
          <p>
            Parts are split so teams can remix: swap MT orthologs without rebuilding the entire
            factory, or run Capture-only demos before integrating Detect and MICP.
          </p>
        </Section>

        {parts.map((group) => (
          <Section key={group.id} id={group.id} title={group.title}>
            <div className="overflow-x-auto sticker">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-blush text-xs font-black uppercase tracking-wider text-primary">
                  <tr>
                    <th className="px-4 py-3">Part</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0d5db] bg-white">
                  {group.rows.map((row) => (
                    <tr key={row[0]}>
                      <td className="px-4 py-3 font-semibold text-primary-dark">{row[0]}</td>
                      <td className="px-4 py-3 text-muted">{row[1]}</td>
                      <td className="px-4 py-3">
                        <span className="badge bg-blush text-primary">{row[2]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        ))}
      </ContentLayout>
    </>
  );
}
