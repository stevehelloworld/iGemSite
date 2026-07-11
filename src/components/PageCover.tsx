import CadMascot from "./CadMascot";

type Tone = "rose" | "mint" | "sky" | "cream" | "lavender";

const tones: Record<
  Tone,
  { band: string; blob1: string; blob2: string; label: string }
> = {
  rose: {
    band: "from-[#fff0f4] via-[#ffe4ec] to-[#fff8f6]",
    blob1: "bg-[#f8ccd9]",
    blob2: "bg-[#ffd0a9]",
    label: "text-primary",
  },
  mint: {
    band: "from-[#e8faf6] via-[#d8f5ef] to-[#fff8f6]",
    blob1: "bg-[#9dd9cf]",
    blob2: "bg-[#d9eaf0]",
    label: "text-[#0f766e]",
  },
  sky: {
    band: "from-[#e8f4f8] via-[#d9eaf0] to-[#fff8f6]",
    blob1: "bg-[#b5d6e0]",
    blob2: "bg-[#f8ccd9]",
    label: "text-[#0e7490]",
  },
  cream: {
    band: "from-[#fff8e8] via-[#fef3d0] to-[#fff8f6]",
    blob1: "bg-[#f0e0a8]",
    blob2: "bg-[#ffd0a9]",
    label: "text-amber-800",
  },
  lavender: {
    band: "from-[#f5f0ff] via-[#ebe4ff] to-[#fff8f6]",
    blob1: "bg-[#d4c8f5]",
    blob2: "bg-[#f8ccd9]",
    label: "text-[#6d28d9]",
  },
};

type PageCoverProps = {
  chapter: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
  showMascot?: boolean;
  mascotMood?: "happy" | "think" | "hero";
};

export default function PageCover({
  chapter,
  title,
  subtitle,
  tone = "rose",
  showMascot = true,
  mascotMood = "happy",
}: PageCoverProps) {
  const t = tones[tone];
  return (
    <section
      className={`relative overflow-hidden border-b-[3px] border-[#f0c4ce] bg-gradient-to-br ${t.band}`}
    >
      <div className={`blob -left-8 top-0 h-40 w-40 ${t.blob1}`} />
      <div className={`blob right-0 top-10 h-36 w-36 ${t.blob2}`} />
      {/* hand-drawn style squiggle */}
      <svg
        className="pointer-events-none absolute bottom-4 left-1/2 hidden w-[min(90%,640px)] -translate-x-1/2 opacity-40 sm:block"
        height="24"
        viewBox="0 0 640 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 14 C40 4, 80 24, 120 12 S200 4, 240 14 S320 24, 360 10 S440 4, 480 16 S560 24, 632 10"
          stroke="#C94C67"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-14 lg:px-8">
        <div className="page-enter max-w-2xl">
          <div
            className={`mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#f0c4ce] bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-[2px_2px_0_rgba(201,76,103,0.1)] ${t.label}`}
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            {chapter}
          </div>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-pretty text-base font-semibold leading-relaxed text-[var(--ink)] sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {showMascot && (
          <div className="animate-float-slow shrink-0 self-center sm:self-end">
            <CadMascot size={140} mood={mascotMood} className="drop-shadow-md" />
          </div>
        )}
      </div>
    </section>
  );
}
