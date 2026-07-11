import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-5">
          {eyebrow && (
            <div className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-primary">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary-dark sm:text-3xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
