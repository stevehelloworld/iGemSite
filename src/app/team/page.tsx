import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CadMascot from "@/components/CadMascot";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="VIS iGEM 2026"
        subtitle="A junior-high-led synthetic biology team building CadArmor — makers, modelers, and storytellers sharing one architecture."
        badge="CadArmor"
        tone="rose"
        mascotMood="happy"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex max-w-3xl items-start gap-4 page-enter sticker p-6">
          <CadMascot size={72} mood="happy" className="shrink-0" />
          <p className="text-base font-bold leading-relaxed text-rose-text">
            Some of us build FRC robots, some tear down papers, some make the wiki feel like home.
            Shared rule: break hard problems into modules, then clear one level at a time.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <div
              key={m.name}
              className={`card-hover p-6 ${
                m.lead
                  ? "sticker"
                  : i % 3 === 1
                    ? "sticker-mint"
                    : i % 3 === 2
                      ? "sticker-sky"
                      : "sticker-cream"
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl border-2 border-[#f0c4ce] bg-blush font-display text-lg font-bold text-primary shadow-[3px_3px_0_rgba(201,76,103,0.1)]">
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="font-display text-xl font-bold text-primary-dark">{m.name}</div>
              <div className="mt-1 text-sm font-extrabold text-primary">{m.role}</div>
              <div className="mt-2 text-xs font-black uppercase tracking-wider text-muted">
                {m.focus}
              </div>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-rose-text">{m.bio}</p>
              {m.lead && (
                <div className="mt-4 inline-flex rounded-full border-2 border-[#f0e0a8] bg-cream px-3 py-1 text-xs font-black text-amber-800">
                  Team Lead
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border-[3px] border-[#f0c4ce] bg-gradient-to-br from-[#fff5f8] to-[#eef8fb] p-8 shadow-[5px_5px_0_rgba(201,76,103,0.1)]">
          <h2 className="font-display text-2xl font-bold text-primary-dark">
            Want to join the mission?
          </h2>
          <p className="mt-2 max-w-2xl text-sm font-bold text-rose-text">
            Wet lab, coding, design, or stakeholder interviews — if you are curious, VIS iGEM has a
            seat for you.
          </p>
        </div>
      </div>
    </>
  );
}
