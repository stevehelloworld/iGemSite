type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  tone?: "rose" | "mint" | "sky" | "cream" | "lavender";
  showMascot?: boolean;
  mascotMood?: "happy" | "think" | "hero";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
  tone = "rose",
}: PageHeroProps) {
  return (
    <header className={`starter-page-hero starter-page-hero--${tone}`}>
      <div className="page-shell">
        <p className="eyebrow">{[eyebrow, badge].filter(Boolean).join(" · ") || "Cadture"}</p>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {/* TODO(S10-1): add the provided mascot asset without changing content data. */}
      </div>
    </header>
  );
}
