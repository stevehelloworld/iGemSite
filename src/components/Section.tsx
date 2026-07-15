import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`content-section ${className}`.trim()}>
      {(eyebrow || title) && (
        <header className="section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
