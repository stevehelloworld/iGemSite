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
    bio: "Builds capture and assay work for Pb/Cd binding, cloning, and sequestration experiments for Cadture.",
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
    bio: "Turns lab logs into a clear, judge-friendly wiki — the public face of Cadture.",
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
    items: ["Overall Cadture architecture, literature synthesis, integration strategy"],
  },
  {
    area: "Wet lab design",
    items: [
      "Capture module: surface-accessible binder candidates (scaffold–linker–binder)",
      "Detection module: metal-responsive sensing plan for Cd/Pb context",
      "Sequestration / removal assay roadmap and controls",
    ],
  },
  {
    area: "Dry lab",
    items: [
      "ODE modeling bootstrap from literature parameters for free metal + capture sites",
      "Hardware MVP: sensing/logging first; safe limits for metal fluids",
    ],
  },
  {
    area: "Wiki",
    items: ["Team wiki deliverable structure, content, and visual design for VIS iGEM 2026"],
  },
  {
    area: "Human Practices & safety",
    items: [
      "Stakeholder map and Listen → Integrate → Impact framework",
      "Pb/Cd chemical safety and biosafety SOPs for a junior team",
    ],
  },
  {
    area: "Inspiration & references",
    items: [
      "Metal-responsive whole-cell sensor literature (CadR-class)",
      "Surface-displayed metal-binding protein studies",
      "Industrial wastewater and dual heavy-metal problem framing",
      "Award-winning wiki UX patterns (e.g. GEMS-Taiwan)",
    ],
  },
];
