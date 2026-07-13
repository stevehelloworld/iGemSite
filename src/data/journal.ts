export type JournalPost = {
  slug: string;
  date: string;
  title: string;
  category: "igem" | "conrad" | "other";
  tags: string[];
  summary: string;
  sourceUrl: string;
  content: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "cytoplasmic-vs-membrane-display",
    date: "2026-07-11",
    title: "Cytoplasm vs. Outer Membrane: Spatial Strategy for Metallothionein",
    category: "igem",
    tags: ["Metallothionein", "Surface Display", "Architecture"],
    summary:
      "Comparing intracellular hMT-II fusion expression against our Lpp-OmpA surface-display strategy — and why putting the filter at the water inlet beats stuffing it inside the cell.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/916531888921918390",
    content: [
      "After locking in our OmpA-MT outer-membrane architecture, we revisited a classic 2002 BioTechniques paper that puts metallothionein inside the cytoplasm as a control group.",
      "The authors fused human metallothionein II (hMT-II) to β-galactosidase and induced massive cytoplasmic expression — the 122-kDa fusion protein exceeded 24% of total protein extract (≈2 g/L).",
      "Performance: Cd removal reached 10.5 μg/mg dry cell weight versus 3.11 μg/mg without MT. Affinity ranked Cd > Zn > Cu. EDX showed ~60% of Cd in the cytoplasm and ~40% on the outer membrane.",
      "The choke point: cytoplasmic MT alone usually underperforms periplasmic or outer-membrane display unless a heavy-metal transporter is co-expressed. The membrane becomes the physical bottleneck.",
      "Our takeaway: Lpp-OmpA surface display places the filter at the inlet. We skip unknown transporters and avoid pumping toxin into a living chassis — a cleaner systems architecture for Cadture.",
    ],
  },
  {
    slug: "dual-loop-mt-micp",
    date: "2026-07-11",
    title: "Building the Ultimate Wastewater Plant: Surface MT + MICP Dual Loop",
    category: "igem",
    tags: ["MICP", "OmpA", "Wastewater"],
    summary:
      "Dissecting a dual-function E. coli system that combines OsMTI-1b surface capture with urease-driven MICP mineralization for easy recovery.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/916502005940368046",
    content: [
      "Traditional chemical precipitation is costly and creates toxic sludge. Ion exchange burns through consumables. Native bioremediation is greener — but often too slow for industry.",
      "Capture module: rice metallothionein OsMTI-1b is fused to OmpA and displayed on the cell surface (≈20.67 kDa fusion), binding metals outside the cell while raising tolerance.",
      "Seal module: a 5300 bp urease cluster (ureA–ureG, ureD) from Sporosarcina pasteurii drives MICP — urea hydrolysis raises pH and produces carbonate, precipitating cadmium carbonate around the cell.",
      "Chassis pragmatism: DH5α for cloning stability, BL21(DE3) for expression. High-copy pET-28a with kanamycin. T7 was replaced by constitutive BBa_J23100 so no expensive inducer is needed in a real plant.",
      "This MT + MICP stack mirrors VIS iGEM 2026’s dual strategy: precise chemical capture, then physical encapsulation for scalable separation.",
    ],
  },
  {
    slug: "surface-display-armor",
    date: "2026-07-09",
    title: "Stop Swallowing Poison: Surface-Display Cadmium Armor for Bacteria",
    category: "igem",
    tags: ["Cell Surface Display", "Lpp-OmpA", "POC"],
    summary:
      "A 2024 Desalination and Water Treatment paper shows Lpp-OmpA-displayed MT nearly doubles Cd removal and boosts MIC from 60 to 160 mg/L.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/915803214761310376",
    content: [
      "Traditional microbial cadmium cleanup often forces cells to internalize toxin — like storing mines inside the submarine. Toxicity spikes and metabolic load explodes.",
      "The elegant fix: Lpp-OmpA surface display anchors Echinococcus granulosus metallothionein on the outer membrane — mechanical arms outside the hull.",
      "Data: wild-type E. coli dies at 60 mg/L Cd (MIC). Armored strain survives 160 mg/L. At 40 mg/L wastewater, removal jumps from 31.9% to 61.2%.",
      "FT-IR confirms surface proteins (amide II band ~1533 cm⁻¹) dominate Cd binding. This is our strongest POC for the OmpA-MT module headed to synthesis.",
    ],
  },
  {
    slug: "four-lead-mechanisms",
    date: "2026-07-08",
    title: "Four Core Mechanisms of Microbial Heavy-Metal Cleanup",
    category: "igem",
    tags: ["Biosorption", "Bioaccumulation", "Biomineralization"],
    summary:
      "A Frontiers in Microbiology review on Pb cleanup maps biosorption, bioaccumulation, bioprecipitation, and efflux — a blueprint for our dual Cd system.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/915572678784595039",
    content: [
      "Biosorption: rapid, metabolism-independent binding via cell-wall functional groups and EPS — works for live and dead biomass.",
      "Bioaccumulation: active uptake plus intracellular metallothioneins rich in sulfhydryl groups. Engineered MTs in E. coli already boost Pb uptake.",
      "Bioprecipitation & biomineralization: phosphate-solubilizing bacteria and urease pathways turn soluble metals into insoluble solids (lead phosphate, carbonate).",
      "Efflux: P-type ATPases such as zntA pump excess metals out to maintain homeostasis.",
      "Environment matters: low pH kills adsorption efficiency (H⁺ competes for sites); EPS peaks around 25–30°C. These variables feed our Dry Lab ODE models.",
    ],
  },
  {
    slug: "water-spinach-mt",
    date: "2026-07-08",
    title: "Borrowing Nature’s Code: Cadmium Logic from Water Spinach",
    category: "igem",
    tags: ["IaMT2", "Plant MT", "Cross-kingdom"],
    summary:
      "Ipomoea aquatica metallothioneins IaMT2 and IaMT3 work in E. coli — proof that plant MT code can power a bacterial chassis.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/915426999881839620",
    content: [
      "Two water-spinach cultivars use different defenses: QLQ fires IaMT2 in roots as a firewall; T308 leans on IaMT3 in shoots as high-load ROS cooling.",
      "When IaMT1/2/3 were ported into E. coli: IaMT1 was a dead module; IaMT2 gave strong tolerance + accumulation; IaMT3 also raised Cd load capacity.",
      "Strategic value: plant-origin MTs fold and function in a bacterial chassis. We compare plant vs bacterial MT Kd values to pick the strongest capture domain for Cadture.",
    ],
  },
  {
    slug: "ntu-cd-biosensor",
    date: "2026-07-07",
    title: "Sensitivity vs Specificity: Dissecting NTU’s Cd Biosensor",
    category: "igem",
    tags: ["Biosensor", "CadR", "Detect"],
    summary:
      "NTU’s CadR.10Z redesign hits 3 nM detection, 777-fold signal change, and smartphone readout — a masterclass for our Detect module.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/915268027224833442",
    content: [
      "Whole-cell Cd sensors usually trade sensitivity for specificity — similar metals (Zn, Pb, Hg) trigger false positives.",
      "NTU’s stack: delete metal homeostasis genes to trap Cd (↑ sensitivity), screen 16 uncharacterized TFs, pick CadR.10, then express ZitB to export interfering Zn.",
      "CadR.10Z: 3 nM LOD, linear 0–200 nM, 777-fold max signal change, inert to 13 other metals including zinc.",
      "Real-world packaging: cell pellet + blue LED + smartphone camera measured irrigation water and urine below WHO safety limits. Systems thinking > single-part hacking.",
    ],
  },
  {
    slug: "project-choke-points",
    date: "2026-07-06",
    title: "From Perfect Blueprint to Real Friction: Project Choke Points",
    category: "igem",
    tags: ["Project Management", "DBTL", "Team"],
    summary:
      "Detect-then-Capture looked perfect on the whiteboard. Reality hit with software incompatibility, Wet/Dry Lab deadlock, linker steric issues, and people constraints.",
    sourceUrl: "https://ray-site-drab.vercel.app/blog/914842617668319732",
    content: [
      "Core architecture: Cd²⁺-triggered capture with negative feedback as free Cd drops — lower metabolic burden when the job is done.",
      "Tool friction: DNA design software broke across Windows/Mac. ESP32 role was ambiguous (flow control vs GFP optical sensing) until the block diagram was rewritten.",
      "Wet Lab ↔ Dry Lab deadlock: modelers need real parameters; wet lab needs time. Fix: bootstrap ODEs with literature MT Kd values first.",
      "Molecular steric clash: MT fused directly to Lpp-OmpA folds poorly. Solution: flexible linker + codon optimization before synthesis.",
      "People systems are hardest: summer attrition, full schedules, junior members without calculus moved from modeling to wiki/frontend so everyone contributes on the right skill tree.",
    ],
  },
];

export function getPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
