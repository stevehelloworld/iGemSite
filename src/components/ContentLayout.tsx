import { ReactNode } from "react";

type TocItem = { id: string; label: string };

type ContentLayoutProps = {
  children: ReactNode;
  toc?: TocItem[];
};

export default function ContentLayout({ children, toc }: ContentLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className={`grid gap-10 ${toc?.length ? "lg:grid-cols-[1fr_230px]" : ""}`}>
        <article className="prose-igem page-enter min-w-0 sticker p-6 sm:p-8">
          {children}
        </article>
        {toc && toc.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticker sticky top-24 p-4">
              <div className="mb-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-primary">
                On this page
              </div>
              <nav className="space-y-0.5" aria-label="Page sections">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="toc-link">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
