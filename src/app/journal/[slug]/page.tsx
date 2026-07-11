import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getPost, journalPosts } from "@/data/journal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Journal" };
  return { title: post.title };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = journalPosts.findIndex((p) => p.slug === slug);
  const prev = journalPosts[index + 1];
  const next = journalPosts[index - 1];

  return (
    <>
      <PageHero
        eyebrow={post.date}
        title={post.title}
        subtitle={post.summary}
        badge="Flight log"
        tone="sky"
        mascotMood="think"
        showMascot={false}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="badge bg-teal-50 text-teal-800">
              {t}
            </span>
          ))}
        </div>

        <article className="prose-igem sticker p-6 sm:p-8">
          {post.content.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </article>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#f0c4ce] pt-6 text-sm">
          <Link href="/journal" className="font-semibold text-primary hover:underline">
            ← All journals
          </Link>
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-muted hover:text-primary"
          >
            View original log ↗
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={`/journal/${prev.slug}`} className="sticker p-4 hover:border-primary">
              <div className="text-xs font-bold uppercase tracking-wider text-muted">Older</div>
              <div className="mt-1 text-sm font-semibold text-primary-dark">{prev.title}</div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/journal/${next.slug}`}
              className="sticker p-4 text-right hover:border-primary"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-muted">Newer</div>
              <div className="mt-1 text-sm font-semibold text-primary-dark">{next.title}</div>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
