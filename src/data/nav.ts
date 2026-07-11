export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const navItems: NavItem[] = [
  {
    label: "Project",
    children: [
      { label: "Description", href: "/description", desc: "The cadmium crisis & our solution" },
      { label: "Design", href: "/design", desc: "Detect → Capture → Mineralize" },
      { label: "Engineering", href: "/engineering", desc: "DBTL cycles & choke points" },
      { label: "Results", href: "/results", desc: "Literature POC & targets" },
    ],
  },
  {
    label: "Wet Lab",
    children: [
      { label: "Experiments", href: "/experiments", desc: "Roadmap & protocols" },
      { label: "Parts", href: "/parts", desc: "OmpA-MT, sensors & MICP" },
      { label: "Notebook", href: "/notebook", desc: "Meetings & progress" },
    ],
  },
  {
    label: "Dry Lab",
    children: [
      { label: "Model", href: "/model", desc: "ODEs & MT affinity" },
      { label: "Hardware", href: "/hardware", desc: "ESP32 bioreactor control" },
    ],
  },
  {
    label: "Human Practices",
    children: [
      { label: "Integrated HP", href: "/human-practices", desc: "Stakeholders & impact" },
      { label: "Education", href: "/education", desc: "Outreach & teaching" },
      { label: "Safety", href: "/safety", desc: "Biosafety & containment" },
    ],
  },
  {
    label: "Team",
    children: [
      { label: "Members", href: "/team", desc: "Meet VIS iGEM 2026" },
      { label: "Attributions", href: "/attributions", desc: "Who did what" },
    ],
  },
  {
    label: "Journal",
    href: "/journal",
  },
];
