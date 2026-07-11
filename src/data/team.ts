export type Member = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  lead?: boolean;
};

export const teamMembers: Member[] = [
  {
    name: "Ray",
    role: "Team Lead · Systems Architect",
    focus: "Project architecture, literature, wiki, integration",
    bio: "Junior-high maker leading VIS iGEM 2026. Bridges wet lab biology, dry lab modeling, and product thinking from FRC & Conrad Challenge.",
    lead: true,
  },
  {
    name: "Wet Lab Core",
    role: "Molecular Biology",
    focus: "Cloning, surface display, assays",
    bio: "Designs OmpA-MT fusions, linker optimization, cadmium binding assays, and MICP validation experiments.",
  },
  {
    name: "Dry Lab Core",
    role: "Modeling & Hardware",
    focus: "ODE models, ESP32 control",
    bio: "Builds kinetic models from literature Kd values and prototypes ESP32-based bioreactor sensing/control.",
  },
  {
    name: "Wiki & Design",
    role: "Documentation",
    focus: "Wiki, graphics, UX",
    bio: "Turns lab logs into a clear, judge-friendly wiki — the public face of CadArmor.",
  },
  {
    name: "Human Practices",
    role: "Outreach & Stakeholders",
    focus: "Interviews, education, safety",
    bio: "Maps wastewater stakeholders, school outreach, and biosafety requirements for real-world deployment.",
  },
];

export const attributions = [
  {
    area: "Project leadership",
    items: ["Ray — overall architecture, literature synthesis, integration strategy"],
  },
  {
    area: "Wet lab design",
    items: [
      "OmpA / Lpp-OmpA–MT surface display architecture",
      "Flexible linker + codon optimization for synthesis",
      "MICP urease cluster integration plan",
    ],
  },
  {
    area: "Dry lab",
    items: [
      "Preliminary ODE modeling from published MT Kd values",
      "ESP32 hardware block-diagram definition (flow vs fluorescence sensing)",
    ],
  },
  {
    area: "Wiki",
    items: ["Site structure, content, and visual design for VIS iGEM 2026"],
  },
  {
    area: "Inspiration & references",
    items: [
      "NTU cadmium whole-cell biosensor (CadR.10Z)",
      "Surface-expressed metallothionein bioremediation studies (2024)",
      "Plant metallothioneins from Ipomoea aquatica",
      "MICP dual-function industrial wastewater iGEM designs",
      "Award-winning wiki UX patterns (e.g. GEMS-Taiwan 2024)",
    ],
  },
];
