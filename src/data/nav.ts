export type NavChild = {
  label: string;
  href: string;
  desc?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

// The starter intentionally exposes only two links. The route files already build,
// so students can add one item at a time and immediately see the navigation grow.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Description", href: "/description" },
  // TODO(S07-1): add Project, Labs, Team, and Human Practices from the course map.
];
