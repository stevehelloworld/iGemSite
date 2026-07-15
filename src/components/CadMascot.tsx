type CadMascotProps = {
  className?: string;
  size?: number;
  mood?: "happy" | "think" | "hero";
};

/** Friendly bacterium mascot for Cadture — pure SVG, no emoji dependency */
export default function CadMascot({
  className = "",
  size = 120,
  mood = "happy",
}: CadMascotProps) {
  const brow =
    mood === "think" ? (
      <path d="M48 58 Q58 52 68 58" stroke="#4A2F34" strokeWidth="3" fill="none" strokeLinecap="round" />
    ) : mood === "hero" ? (
      <path d="M46 56 L70 56" stroke="#4A2F34" strokeWidth="3" strokeLinecap="round" />
    ) : (
      <path d="M48 56 Q58 50 68 56" stroke="#4A2F34" strokeWidth="3" fill="none" strokeLinecap="round" />
    );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Cadture mascot: friendly bacterium"
    >
      {/* soft ground shadow */}
      <ellipse cx="80" cy="142" rx="42" ry="8" fill="#C94C67" opacity="0.12" />
      {/* body */}
      <ellipse cx="80" cy="88" rx="48" ry="42" fill="#7DD3C0" />
      <ellipse cx="80" cy="88" rx="48" ry="42" fill="url(#bodyShine)" />
      {/* armor plates */}
      <path
        d="M40 78 C42 58 60 48 80 48 C100 48 118 58 120 78 L112 86 C108 70 96 62 80 62 C64 62 52 70 48 86 Z"
        fill="#C94C67"
      />
      <path
        d="M44 82 C48 68 62 60 80 60 C98 60 112 68 116 82"
        stroke="#FEF6E8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* helmet crest */}
      <path d="" fill="#EA580C" />
      <circle cx="80" cy="36" r="5" fill="#FEF6E8" />
      {/* eyes */}
      <circle cx="64" cy="90" r="8" fill="white" />
      <circle cx="96" cy="90" r="8" fill="white" />
      <circle cx="66" cy="91" r="4" fill="#4A2F34" />
      <circle cx="98" cy="91" r="4" fill="#4A2F34" />
      <circle cx="67.5" cy="89.5" r="1.4" fill="white" />
      <circle cx="99.5" cy="89.5" r="1.4" fill="white" />
      {/* brows */}
      <g transform="translate(10,0)">{brow}</g>
      <g transform="translate(42,0)">{brow}</g>
      {/* smile */}
      {mood === "think" ? (
        <circle cx="80" cy="108" r="3" fill="#4A2F34" />
      ) : (
        <path
          d="M66 108 Q80 120 94 108"
          stroke="#4A2F34"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      )}
      {/* arms / side flags */}
      <ellipse cx="34" cy="96" rx="10" ry="14" fill="#5BB8A8" transform="rotate(-20 34 96)" />
      <ellipse cx="126" cy="96" rx="10" ry="14" fill="#5BB8A8" transform="rotate(20 126 96)" />
      {/* metal bolt accents */}
      <circle cx="56" cy="70" r="3.5" fill="#FEF6E8" />
      <circle cx="104" cy="70" r="3.5" fill="#FEF6E8" />
      <defs>
        <linearGradient id="bodyShine" x1="50" y1="50" x2="120" y2="130">
          <stop stopColor="#A7F3E0" />
          <stop offset="1" stopColor="#5BB8A8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
