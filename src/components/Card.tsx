import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
  tag?: string;
  children?: ReactNode;
  tone?: "rose" | "mint" | "sky" | "cream";
};

const tones = {
  rose: "sticker",
  mint: "sticker sticker-mint",
  sky: "sticker sticker-sky",
  cream: "sticker sticker-cream",
};

export default function Card({
  title,
  description,
  href,
  icon,
  tag,
  children,
  tone = "rose",
}: CardProps) {
  const inner = (
    <>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#f0c4ce] bg-blush text-2xl">
              {icon}
            </div>
          )}
          <div>
            {tag && (
              <div className="mb-1 text-[11px] font-black uppercase tracking-wider text-primary">
                {tag}
              </div>
            )}
            <h3 className="font-display text-lg font-bold text-primary-dark">{title}</h3>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm font-semibold leading-relaxed text-rose-text">{description}</p>
      )}
      {children}
    </>
  );

  const className = `card-hover block h-full p-5 ${tones[tone]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}
