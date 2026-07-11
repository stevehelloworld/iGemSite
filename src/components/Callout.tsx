import { ReactNode } from "react";

type CalloutProps = {
  title?: string;
  children: ReactNode;
  tone?: "info" | "warn" | "success" | "accent";
};

const tones = {
  info: "border-[#b5d6e0] bg-[#eef8fb] text-rose-text",
  warn: "border-[#f0e0a8] bg-[#fff8e8] text-rose-text",
  success: "border-[#9dd9cf] bg-[#eefaf7] text-rose-text",
  accent: "border-[#f0c4ce] bg-[#fff5f8] text-rose-text",
};

const icons = {
  info: "💡",
  warn: "⚠️",
  success: "✅",
  accent: "✨",
};

export default function Callout({ title, children, tone = "info" }: CalloutProps) {
  return (
    <div
      className={`my-6 rounded-3xl border-2 px-5 py-4 shadow-[3px_3px_0_rgba(201,76,103,0.08)] ${tones[tone]}`}
    >
      {title && (
        <div className="mb-1.5 flex items-center gap-2 font-display text-sm font-bold text-primary-dark">
          <span>{icons[tone]}</span>
          {title}
        </div>
      )}
      <div className="text-sm font-semibold leading-relaxed opacity-95">{children}</div>
    </div>
  );
}
