import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
  tag?: string;
  children?: ReactNode;
};

export default function Card({
  title,
  description,
  href,
  icon,
  tag,
  children,
}: CardProps) {
  const content = (
    <>
      {tag && <span className="card-tag">{tag}</span>}
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>

      {/* TODO(S04-1): replace this visible fallback with a conditional description paragraph. */}
      {description ? (
        <p className="card-description-placeholder">
          Description received. Connect the prop in Lesson 4.
        </p>
      ) : null}
      {children}
    </>
  );

  // TODO(S04-3): add a visible hover/focus style when href turns the card into a link.
  if (href) {
    return (
      <Link className="starter-card starter-card--link" href={href}>
        {content}
      </Link>
    );
  }

  return <article className="starter-card">{content}</article>;
}
