import Link from "next/link";
import Card from "@/components/Card";
import CadMascot from "@/components/CadMascot";
import { IconArrow, IconBook, IconCpu, IconFlask, IconShield, IconUsers } from "@/components/Icons";
import { journalPosts } from "@/data/journal";

const pillars = [
  {
    icon: <IconFlask className="h-6 w-6 text-sky-deep" />,
    title: "Detect",
    tag: "Module 01",
    tone: "sky" as const,
    description:
      "Bacteria become cadmium alarms. Capture only turns on when Cd²⁺ is present — no wasted energy.",
  },
  {
    icon: <IconShield className="h-6 w-6 text-primary" />,
    title: "Capture",
    tag: "Module 02",
    tone: "rose" as const,
    description:
      "Metallothionein hangs on the outer membrane via OmpA — armor outside the cell, not poison inside.",
  },
  {
    icon: <IconCpu className="h-6 w-6 text-secondary" />,
    title: "Mineralize",
    tag: "Module 03",
    tone: "mint" as const,
    description:
      "MICP turns free ions into solid precipitates so metals can be skimmed from water.",
  },
];

const stats = [
  { label: "Removal boost*", value: "≈2×", hint: "surface MT vs wild-type" },
  { label: "Armored MIC*", value: "160", unit: "mg/L", hint: "wild-type ~60 mg/L" },
  { label: "Sensor LOD*", value: "3", unit: "nM", hint: "CadR-class literature" },
  { label: "Signal fold*", value: "777×", hint: "max fluorescent response" },
];

const pages = [
  { href: "/description", title: "Description", desc: "Why cadmium, why now", icon: <IconBook className="h-5 w-5" />, tone: "rose" as const },
  { href: "/design", title: "Design", desc: "How the three modules connect", icon: <IconShield className="h-5 w-5" />, tone: "mint" as const },
  { href: "/engineering", title: "Engineering", desc: "DBTL and choke points", icon: <IconCpu className="h-5 w-5" />, tone: "sky" as const },
  { href: "/parts", title: "Parts", desc: "Genetic building blocks", icon: <IconFlask className="h-5 w-5" />, tone: "cream" as const },
  { href: "/model", title: "Model", desc: "ODEs from literature first", icon: <IconCpu className="h-5 w-5" />, tone: "sky" as const },
  { href: "/team", title: "Team", desc: "Meet Ray & VIS iGEM", icon: <IconUsers className="h-5 w-5" />, tone: "rose" as const },
];

export default function Home() {
  const recent = journalPosts.slice(0, 3);

  return (
    <div>
      <section className="hero-gems relative overflow-hidden border-b-[3px] border-[#f0c4ce]">
        <div className="blob -left-10 top-10 h-48 w-48 bg-[#f8ccd9] animate-pulse-soft" />
        <div className="blob right-0 top-20 h-56 w-56 bg-[#d9eaf0] animate-pulse-soft" />
        <div className="blob bottom-0 left-1/3 h-40 w-40 bg-[#d8f5ef] animate-pulse-soft" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="page-enter">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#f0c4ce] bg-white/90 px-3.5 py-1.5 text-xs font-extrabold text-primary shadow-[2px_2px_0_rgba(201,76,103,0.1)]">
              <span className="doodle-dot" />
              Junior high · VIS iGEM 2026 · Synthetic biology
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] text-primary-dark sm:text-5xl lg:text-6xl">
              CadArmor
              <span className="mt-2 block text-[0.72em] text-secondary">
                Cadmium armor for bacteria
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-rose-text sm:text-lg">
              Hi — we are the <span className="text-primary">VIS iGEM</span> team. We reprogram{" "}
              <em className="not-italic font-extrabold text-secondary">E. coli</em> into a living
              purification plant:{" "}
              <span className="text-primary">Detect → Capture → Mineralize</span>. No more forcing
              cells to swallow poison.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/description"
                className="fun-btn inline-flex items-center gap-2 border-2 border-[#b43852] bg-primary px-6 py-3 text-sm text-white shadow-[4px_4px_0_rgba(180,56,82,0.22)]"
              >
                Start exploring <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/design"
                className="fun-btn border-2 border-[#f0c4ce] bg-white px-6 py-3 text-sm text-primary-dark shadow-[3px_3px_0_rgba(201,76,103,0.1)]"
              >
                See the design
              </Link>
              <Link
                href="/journal"
                className="fun-btn inline-flex items-center gap-1 px-4 py-3 text-sm font-extrabold text-primary underline decoration-wavy decoration-2 underline-offset-4"
              >
                Flight logs <IconArrow className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["#iGEM2026", "#SynBio", "#FirstPrinciples", "#Makers"].map((tag) => (
                <span key={tag} className="pill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="page-enter flex flex-col items-center gap-4">
            <div className="animate-float-slow">
              <CadMascot size={160} mood="hero" />
            </div>
            <div className="sticker relative w-full max-w-md p-5 sm:p-6">
              <div className="absolute -right-3 -top-3 rotate-12 rounded-full border-2 border-[#f0e0a8] bg-cream px-3 py-1 text-xs font-black text-amber-800 shadow-sm">
                LIVE
              </div>
              <div className="mb-1 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                System snapshot
              </div>
              <h2 className="font-display text-xl font-bold text-primary-dark">
                How the factory works
              </h2>
              <div className="mt-4 space-y-2.5">
                {[
                  { step: "01", title: "Cd²⁺ detected", detail: "CadR sensing + optical report", color: "bg-sky" },
                  { step: "02", title: "Armor engages", detail: "OmpA–MT surface display", color: "bg-blush" },
                  { step: "03", title: "Ions sealed", detail: "Urease MICP precipitation", color: "bg-secondary-soft" },
                  { step: "04", title: "Auto throttle", detail: "Less work as Cd drops", color: "bg-cream" },
                ].map((row) => (
                  <div
                    key={row.step}
                    className={`flex items-center gap-3 rounded-2xl border-2 border-[#f0d5db] ${row.color} px-3.5 py-2.5`}
                  >
                    <div className="font-display text-sm font-bold text-primary">{row.step}</div>
                    <div>
                      <div className="text-sm font-extrabold text-primary-dark">{row.title}</div>
                      <div className="text-xs font-semibold text-muted">{row.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#f0c4ce] bg-white/70">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 ${i < 3 ? "lg:border-r-2 lg:border-[#f0d5db]" : ""}`}
            >
              <div className="text-xs font-black uppercase tracking-wider text-muted">{s.label}</div>
              <div className="stat-number mt-2 text-3xl font-bold text-primary-dark">
                {s.value}
                {s.unit && (
                  <span className="ml-1 text-base font-bold text-secondary">{s.unit}</span>
                )}
              </div>
              <div className="mt-1 text-xs font-bold text-muted">{s.hint}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-4 text-[11px] font-bold text-muted">
          * Literature benchmarks that guide our design targets. VIS wet-lab data is still in
          progress — stay tuned.
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Why this project?
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-dark">
            Hard problem. Cooler solution.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="sticker-cream rounded-[1.75rem] border-[2.5px] p-7">
            <div className="badge mb-3 border-2 border-red-200 bg-red-50 text-red-700">
              The problem
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark">
              Cadmium does not forgive
            </h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-rose-text">
              Industrial Cd²⁺ harms kidneys, bones, and ecosystems. Chemical precipitation is
              expensive and creates toxic sludge. Ion exchange burns consumables. Native microbes
              are green — but often too weak for factory-scale loads.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-bold text-rose-text">
              <li>Toxic even at very low concentrations</li>
              <li>Traditional cleanup is costly and dirty</li>
              <li>Intracellular capture can kill the chassis</li>
            </ul>
          </div>
          <div className="sticker-mint rounded-[1.75rem] border-[2.5px] p-7">
            <div className="badge mb-3 border-2 border-teal-200 bg-teal-50 text-teal-800">
              Our solution
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark">
              Armor outside — never swallow
            </h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-rose-text">
              CadArmor parks metallothionein on the outer membrane, turns on only when Cd is
              sensed, and can mineralize ions with MICP — a mini plant that works hard only when
              needed.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-bold text-rose-text">
              <li>Surface display lowers self-toxicity</li>
              <li>Detect-then-Capture saves metabolic energy</li>
              <li>MICP enables solid recovery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#f0c4ce] bg-[#fff7fb]/80 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Three power-ups
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary-dark">
              One integrated genetic factory
            </h2>
            <p className="mt-3 font-semibold text-muted">
              Each module has literature proof, then we grind our own DBTL cycles.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <Card
                key={p.title}
                title={p.title}
                description={p.description}
                icon={p.icon}
                tag={p.tag}
                tone={p.tone}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Wiki map
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary-dark">
              Where do you want to go?
            </h2>
          </div>
          <Link
            href="/journal"
            className="hidden text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4 sm:block"
          >
            Flight logs →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <Card
              key={p.href}
              href={p.href}
              title={p.title}
              description={p.desc}
              icon={p.icon}
              tone={p.tone}
            />
          ))}
        </div>
      </section>

      <section className="border-t-2 border-[#f0c4ce] bg-white/60 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Research logs
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary-dark">
                Latest flight logs
              </h2>
            </div>
            <Link
              href="/journal"
              className="text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {recent.map((post, i) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className={`card-hover p-5 ${
                  i === 0 ? "sticker" : i === 1 ? "sticker-mint" : "sticker-sky"
                }`}
              >
                <div className="text-xs font-black text-primary">{post.date}</div>
                <h3 className="mt-2 font-display text-base font-bold leading-snug text-primary-dark">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm font-semibold text-muted">{post.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#f0c4ce] bg-gradient-to-br from-[#fff5f8] via-white to-[#eef8fb] px-8 py-12 shadow-[6px_6px_0_rgba(201,76,103,0.12)] sm:px-12">
          <div className="pointer-events-none absolute right-6 top-4 hidden sm:block">
            <CadMascot size={96} mood="happy" />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Led by Ray · Built by VIS
            </h2>
            <p className="mt-3 text-sm font-bold leading-relaxed text-rose-text">
              We treat synthetic biology like robotics: hunt choke points, redesign architecture,
              write honest flight logs. Whiteboards lie — real systems have friction. Debug, then
              ship the next DBTL cycle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/team"
                className="fun-btn border-2 border-[#b43852] bg-primary px-5 py-2.5 text-sm text-white shadow-[3px_3px_0_rgba(180,56,82,0.2)]"
              >
                Meet the team
              </Link>
              <Link
                href="/engineering"
                className="fun-btn border-2 border-[#f0c4ce] bg-white px-5 py-2.5 text-sm font-extrabold text-primary-dark"
              >
                Engineering notes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
