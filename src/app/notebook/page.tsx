import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import Section from "@/components/Section";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Notebook",
};

export default function NotebookPage() {
  const igem = journalPosts.filter((p) => p.category === "igem");

  return (
    <>
      <PageHero
        tone="lavender"
        mascotMood="think"
        eyebrow="Wet Lab"
        title="Notebook"
        subtitle="Meeting friction, literature deep-dives, and architecture decisions — condensed from Ray's iGEM flight logs."
      />
      <ContentLayout>
        <Section title="Season log (2026)">
          <div className="space-y-4">
            {igem.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="card-hover block sticker p-5"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
                  <span>{post.date}</span>
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="badge bg-blush text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-2 text-lg font-bold text-primary-dark">{post.title}</h3>
                <p className="mt-1 text-sm text-muted">{post.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      </ContentLayout>
    </>
  );
}
