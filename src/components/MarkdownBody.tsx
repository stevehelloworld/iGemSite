import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => {
    const text = String(children);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return (
      <h2 id={id} className="scroll-mt-28">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const text = String(children);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return (
      <h3 id={id} className="scroll-mt-28">
        {children}
      </h3>
    );
  },
  a: ({ href, children }) => (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto sticker my-6">
      <table className="min-w-full text-left text-sm">{children}</table>
    </div>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-3xl border-2 border-[#f0c4ce] bg-[#fff5f8] px-5 py-4 text-sm font-semibold text-rose-text">
      {children}
    </blockquote>
  ),
};

export default function MarkdownBody({ source }: { source: string }) {
  return (
    <div className="prose-igem">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
