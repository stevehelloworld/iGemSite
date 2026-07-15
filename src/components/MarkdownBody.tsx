type MarkdownBodyProps = {
  source: string;
};

export default function MarkdownBody({ source }: MarkdownBodyProps) {
  // This plain renderer keeps every route visible before the Markdown lesson.
  // TODO(S09-1): replace it with ReactMarkdown and remark-gfm.
  return (
    <div className="starter-prose">
      {source.split("\n\n").map((block, index) => (
        <p key={`${block.slice(0, 20)}-${index}`}>{block}</p>
      ))}
    </div>
  );
}
