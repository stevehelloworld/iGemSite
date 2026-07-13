import Link from "next/link";
import CadMascot from "@/components/CadMascot";
import { getHomeContent } from "@/lib/content";

/** Homepage sections follow https://2026.igem.wiki/vis/ content and order. */
export default function Home() {
  const { frontmatter: h } = getHomeContent();

  return (
    <div>
      {/* Title bar — project name only (matches official “Cadture”) */}
      <section className="hero-gems relative overflow-hidden border-b-[3px] border-[#f0c4ce]">
        <div className="blob -left-10 top-10 h-48 w-48 bg-[#f8ccd9] animate-pulse-soft" />
        <div className="blob right-0 top-20 h-56 w-56 bg-[#d9eaf0] animate-pulse-soft" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="page-enter flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {h.badge && (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#f0c4ce] bg-white/90 px-3.5 py-1.5 text-xs font-extrabold text-primary shadow-[2px_2px_0_rgba(201,76,103,0.1)]">
                  <span className="doodle-dot" />
                  {h.badge}
                </div>
              )}
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-primary-dark sm:text-5xl lg:text-6xl">
                {h.title}
              </h1>
            </div>
            <div className="animate-float-slow hidden sm:block">
              <CadMascot size={120} mood="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-primary-dark sm:text-4xl">
            The Problem
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {h.problems.map((p) => (
            <div key={p.title} className="sticker p-6">
              <div className="badge mb-3 bg-blush text-primary">{p.tag}</div>
              <h3 className="font-display text-xl font-bold text-primary-dark">{p.title}</h3>
              <p className="mt-2 text-sm font-semibold text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {h.locations.map((loc) => (
            <div key={loc.name} className="sticker-sky p-4">
              <div className="font-extrabold text-primary-dark">{loc.name}</div>
              <p className="mt-1 text-sm font-semibold text-muted">{loc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="border-y-2 border-[#f0c4ce] bg-white/70 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-primary-dark sm:text-4xl">
              Our Solution
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {h.solution.map((s, i) => (
              <div key={s.title} className="sticker p-5 text-center">
                <div className="font-display text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-primary-dark">{s.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="border-b-2 border-[#f0c4ce] bg-[#fff7fb]/80">
        <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-display text-2xl font-bold uppercase tracking-wide text-primary-dark sm:text-3xl">
            Project Highlights
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {h.highlights.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-8 text-center ${i < 3 ? "lg:border-r-2 lg:border-[#f0d5db]" : ""}`}
            >
              <div className="stat-number text-3xl font-bold text-primary-dark sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-black uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Towards a Sustainable Future */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-primary-dark sm:text-3xl">
          Towards a Sustainable Future
        </h2>
        <p className="mt-4 max-w-3xl text-base font-bold leading-relaxed text-rose-text">
          {h.sustainable}
        </p>
      </section>

      {/* HUMAN PRACTICES + Engineering Cycle */}
      <section className="border-y-2 border-[#f0c4ce] bg-white/60 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="sticker rounded-[1.75rem] border-[2.5px] p-7">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-primary-dark">
              Human Practices
            </h2>
            <div className="mt-5 space-y-4">
              {h.humanPractices.map((item) => (
                <div key={item.title}>
                  <div className="font-display text-lg font-bold text-primary">{item.title}</div>
                  <p className="mt-1 text-sm font-semibold text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <Link
              href="/human-practices"
              className="mt-6 inline-flex text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
            >
              View more …
            </Link>
          </div>

          <div className="sticker-sky rounded-[1.75rem] border-[2.5px] p-7">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-primary-dark">
              Engineering Cycle
            </h2>
            <div className="mt-5 space-y-4">
              {h.engineering.map((item) => (
                <div key={item.title}>
                  <div className="font-display text-lg font-bold text-primary">{item.title}</div>
                  <p className="mt-1 text-sm font-semibold text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <Link
              href="/engineering"
              className="mt-6 inline-flex text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
            >
              See our iterations
            </Link>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="sticker flex flex-col gap-4 p-8 sm:flex-row sm:items-center">
          <CadMascot size={88} mood="happy" className="shrink-0" />
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-primary-dark">
              Meet Our Team
            </h2>
            <p className="mt-2 text-sm font-bold text-muted">{h.teamNote}</p>
            <Link
              href="/team"
              className="mt-3 inline-flex text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
            >
              View all members →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
