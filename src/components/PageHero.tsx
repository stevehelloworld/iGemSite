import PageCover from "./PageCover";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  tone?: "rose" | "mint" | "sky" | "cream" | "lavender";
  showMascot?: boolean;
  mascotMood?: "happy" | "think" | "hero";
};

/** Thin wrapper so existing pages can keep PageHero API while using PageCover */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
  tone = "rose",
  showMascot = true,
  mascotMood = "happy",
}: PageHeroProps) {
  const chapter = [eyebrow, badge].filter(Boolean).join(" · ") || "CadArmor";
  return (
    <PageCover
      chapter={chapter}
      title={title}
      subtitle={subtitle}
      tone={tone}
      showMascot={showMascot}
      mascotMood={mascotMood}
    />
  );
}
