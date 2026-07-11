import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
};

const tones = ["sticker", "sticker-mint", "sticker-sky", "sticker-cream"] as const;

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Research logs"
        title="Flight logs"
        subtitle="Paper teardowns, architecture notes, and real project friction — the living notebook behind CadArmor."
        tone="lavender"
        mascotMood="think"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {journalPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className={`card-hover group grid gap-4 p-6 md:grid-cols-[140px_1fr] ${tones[i % tones.length]}`}
            >
              <div>
                <div className="text-sm font-black text-primary">{post.date}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="badge bg-blush text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-primary-dark transition group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-muted">
                  {post.summary}
                </p>
                <div className="mt-3 text-sm font-extrabold text-primary">Read log →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
