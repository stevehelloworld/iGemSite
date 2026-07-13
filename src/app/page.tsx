import Link from "next/link";
import CadMascot from "@/components/CadMascot";
import { IconArrow } from "@/components/Icons";
import { getHomeContent } from "@/lib/content";

export default function Home() {
  const { frontmatter: h } = getHomeContent();

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
              {h.badge}
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] text-primary-dark sm:text-5xl lg:text-6xl">
              {h.title}
              <span className="mt-2 block text-[0.72em] text-secondary">{h.tagline}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-rose-text sm:text-lg">
              VIS iGEM 2026 · synthetic biology for{" "}
              <span className="text-primary">Pb</span> and{" "}
              <span className="text-primary">Cd</span> wastewater:{" "}
              <span className="text-secondary">Detect → Capture → Sequestration → Removal</span>.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/description"
                className="fun-btn inline-flex items-center gap-2 border-2 border-[#b43852] bg-primary px-6 py-3 text-sm text-white shadow-[4px_4px_0_rgba(180,56,82,0.22)]"
              >
                Description <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/human-practices"
                className="fun-btn border-2 border-[#f0c4ce] bg-white px-6 py-3 text-sm text-primary-dark shadow-[3px_3px_0_rgba(201,76,103,0.1)]"
              >
                Human Practices
              </Link>
              <Link
                href="/engineering"
                className="fun-btn inline-flex items-center gap-1 px-4 py-3 text-sm font-extrabold text-primary underline decoration-wavy decoration-2 underline-offset-4"
              >
                Engineering <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="page-enter flex flex-col items-center gap-4">
            <div className="animate-float-slow">
              <CadMascot size={160} mood="hero" />
            </div>
            <div className="sticker w-full max-w-md p-5 sm:p-6">
              <div className="mb-1 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Our solution
              </div>
              <div className="mt-3 space-y-2">
                {h.solution.map((s, i) => (
                  <div
                    key={s.title}
                    className="flex gap-3 rounded-2xl border-2 border-[#f0d5db] bg-white/80 px-3.5 py-2.5"
                  >
                    <div className="font-display text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-primary-dark">{s.title}</div>
                      <div className="text-xs font-semibold text-muted">{s.body}</div>
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
          {h.highlights.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 ${i < 3 ? "lg:border-r-2 lg:border-[#f0d5db]" : ""}`}
            >
              <div className="stat-number text-3xl font-bold text-primary-dark">{s.value}</div>
              <div className="mt-1 text-xs font-black uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
            The problem
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-dark">
            Heavy metals in wastewater
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

      <section className="border-y-2 border-[#f0c4ce] bg-[#fff7fb]/80 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Towards a sustainable future
          </div>
          <p className="max-w-3xl text-base font-bold leading-relaxed text-rose-text">
            {h.sustainable}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="sticker rounded-[1.75rem] border-[2.5px] p-7">
            <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Human Practices
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-primary-dark">
              Listen · Integrate · Impact
            </h2>
            <div className="mt-4 space-y-3">
              {h.humanPractices.map((item) => (
                <div key={item.title}>
                  <div className="font-extrabold text-primary">{item.title}</div>
                  <p className="text-sm font-semibold text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <Link
              href="/human-practices"
              className="mt-5 inline-flex text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
            >
              View more →
            </Link>
          </div>
          <div className="sticker-sky rounded-[1.75rem] border-[2.5px] p-7">
            <div className="font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Engineering cycle
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-primary-dark">
              Design → Build → Test → Learn
            </h2>
            <div className="mt-4 space-y-3">
              {h.engineering.map((item) => (
                <div key={item.title}>
                  <div className="font-extrabold text-primary">{item.title}</div>
                  <p className="text-sm font-semibold text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <Link
              href="/engineering"
              className="mt-5 inline-flex text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
            >
              See our iterations →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="sticker flex flex-col gap-4 p-8 sm:flex-row sm:items-center">
          <CadMascot size={88} mood="happy" className="shrink-0" />
          <div>
            <h2 className="font-display text-2xl font-bold text-primary-dark">Meet our team</h2>
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
