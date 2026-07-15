import type { ReactNode } from "react";
import type { TocItem } from "@/lib/content";

type ContentLayoutProps = {
  children: ReactNode;
  toc?: TocItem[];
};

export default function ContentLayout({ children, toc }: ContentLayoutProps) {
  return (
    <div className="page-shell content-layout">
      <article className="article-card">{children}</article>

      {toc && toc.length > 0 ? (
        <aside className="toc-placeholder">
          <strong>On this page</strong>
          {/* TODO(S10-2): render each toc item as an anchor link. */}
          <p>{toc.length} links are ready to render.</p>
        </aside>
      ) : null}
    </div>
  );
}
