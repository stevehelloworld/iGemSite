import Link from "next/link";
import { IconShield } from "./Icons";

const columns = [
  {
    title: "Project",
    links: [
      { label: "Description", href: "/description" },
      { label: "Design", href: "/design" },
      { label: "Engineering", href: "/engineering" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    title: "Labs",
    links: [
      { label: "Experiments", href: "/experiments" },
      { label: "Parts", href: "/parts" },
      { label: "Model", href: "/model" },
      { label: "Hardware", href: "/hardware" },
    ],
  },
  {
    title: "Team",
    links: [
      { label: "Members", href: "/team" },
      { label: "Attributions", href: "/attributions" },
      { label: "Journal", href: "/journal" },
      { label: "Safety", href: "/safety" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-[#f0c4ce] bg-gradient-to-b from-[#fff7fb] to-[#fde8ef]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#f0c4ce] bg-white text-primary shadow-[3px_3px_0_rgba(201,76,103,0.12)]">
                <IconShield className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-lg font-bold text-primary-dark">CadArmor</div>
                <div className="text-sm font-extrabold text-muted">VIS iGEM 2026</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-rose-text">
              We are junior-high makers engineering bacteria with cadmium armor: detect first,
              capture on the surface, then mineralize for recovery.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Detect", "Capture", "Mineralize"].map((t) => (
                <span key={t} className="pill-tag text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-primary">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-rose-text transition duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-rule my-10" />

        <div className="flex flex-col gap-2 text-xs font-bold text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VIS iGEM · CadArmor · Built by junior high makers</p>
          <p>Design skills: Impeccable · UI/UX Pro Max</p>
        </div>
      </div>
    </footer>
  );
}
