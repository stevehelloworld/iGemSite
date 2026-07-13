export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};

/** Navigation aligned with current official wiki: https://2026.igem.wiki/vis/ */
export const navItems: NavItem[] = [
  {
    label: "Team",
    children: [
      { label: "Members", href: "/team", desc: "Meet the team" },
      { label: "Attributions", href: "/attributions", desc: "Official form + notes" },
    ],
  },
  {
    label: "Project",
    children: [
      { label: "Description", href: "/description", desc: "Background & problem" },
      { label: "Engineering", href: "/engineering", desc: "Design → Build → Test → Learn" },
      { label: "Results", href: "/results", desc: "Experimental results" },
      { label: "Contribution", href: "/contribution", desc: "Gift to future teams" },
    ],
  },
  {
    label: "Wet Lab",
    children: [
      { label: "Experiments", href: "/experiments", desc: "Workflow & protocols" },
      { label: "Notebook", href: "/notebook", desc: "Daily research records" },
      { label: "Measurement", href: "/measurement", desc: "Quantification" },
      { label: "Alternative Platform", href: "/alternative-platform", desc: "Other strategy" },
      { label: "Safety & Security", href: "/safety-and-security", desc: "Risk & biosafety" },
    ],
  },
  {
    label: "Dry Lab",
    children: [
      { label: "Model", href: "/model", desc: "Simulation" },
      { label: "Software", href: "/software", desc: "Tools & visualization" },
    ],
  },
  {
    label: "Human Practices",
    href: "/human-practices",
  },
];
