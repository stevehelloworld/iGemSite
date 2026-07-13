import PageHero from "@/components/PageHero";
import ContentLayout from "@/components/ContentLayout";
import MarkdownBody from "@/components/MarkdownBody";
import { getPageBySlug } from "@/lib/content";

export default function WikiPage({ slug }: { slug: string }) {
  const { frontmatter, body } = getPageBySlug(slug);

  return (
    <>
      <PageHero
        eyebrow={frontmatter.eyebrow}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        badge={frontmatter.badge}
        tone={frontmatter.tone}
        mascotMood={frontmatter.mascotMood}
      />
      <ContentLayout toc={frontmatter.toc}>
        <MarkdownBody source={body} />
      </ContentLayout>
    </>
  );
}
