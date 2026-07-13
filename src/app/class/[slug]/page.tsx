import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import {
  getClassSession,
  getClassSessionSlugs,
  listClassSessions,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getClassSessionSlugs().map((slug) => ({ slug }));
}

function isNumberedSession(slug: string) {
  return slug.startsWith("session-");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getClassSession(slug);
    return {
      title: `第 ${frontmatter.session} 次 · ${frontmatter.title}`,
    };
  } catch {
    return { title: "Course session" };
  }
}

export default async function ClassSessionPage({ params }: Props) {
  const { slug } = await params;
  let session;
  try {
    session = getClassSession(slug);
  } catch {
    notFound();
  }

  const numbered = isNumberedSession(slug);
  const all = listClassSessions();
  const idx = numbered ? all.findIndex((s) => s.slug === slug) : -1;
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const { frontmatter, body } = session;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="page-enter">
        <Link
          href="/class"
          className="text-sm font-extrabold text-primary underline decoration-wavy underline-offset-4"
        >
          ← 課表
        </Link>
        <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {numbered
            ? `第 ${frontmatter.session} 次 · ${frontmatter.duration ?? "3 小時"}`
            : (frontmatter.duration ?? "Course")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-primary-dark sm:text-4xl">
          {frontmatter.title}
        </h1>
        {frontmatter.subtitle && (
          <p className="mt-3 text-base font-bold text-muted">{frontmatter.subtitle}</p>
        )}

        {frontmatter.goals && frontmatter.goals.length > 0 && (
          <div className="sticker mt-8 p-5">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-primary">
              本堂目標
            </h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm font-semibold text-rose-text">
              {frontmatter.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        )}

        <article className="prose-igem sticker mt-8 p-6 sm:p-8">
          <MarkdownBody source={body} />
        </article>

        <nav className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-[#f0c4ce] pt-6 text-sm font-extrabold">
          {prev ? (
            <Link href={`/class/${prev.slug}`} className="text-primary hover:underline">
              ← 第 {prev.session} 次
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/class/${next.slug}`} className="text-primary hover:underline">
              第 {next.session} 次 →
            </Link>
          ) : (
            <Link href="/class" className="text-primary hover:underline">
              回課表
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
