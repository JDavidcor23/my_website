import { Link } from "react-router-dom";

/* ── Long-form markdown renderers ─────────────────────────────────────────
   Headings keep the rebel style; body copy uses Barlow (font-read) at a
   readable size. Red text at small sizes uses #ff4d4d for AA contrast. */

const BODY_LINK =
  "text-white underline decoration-[#CC0000] decoration-2 underline-offset-[4px] transition-colors duration-200 hover:text-[#ff4d4d] hover:decoration-[#ff1a1a]";

const DIAGRAM_LANGUAGES = ["text", "txt", "ascii", "diagram"];

const isImageOnly = (node) =>
  Boolean(node?.children?.length) &&
  node.children.some((child) => child.tagName === "img") &&
  node.children.every(
    (child) => child.tagName === "img" || (child.type === "text" && !child.value.trim())
  );

const HeadingAnchor = ({ id }) =>
  id ? (
    <a
      href={`#${id}`}
      aria-label="Link to this section"
      className="ml-[10px] text-[#ff4d4d] no-underline opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
    >
      #
    </a>
  ) : null;

const Heading2 = ({ id, children }) => (
  <h2
    id={id}
    className="group scroll-mt-[96px] font-rebel font-black italic uppercase text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.02] tracking-[0.01em] text-white mt-[72px] mb-[22px] [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:font-[inherit] [&_code]:text-[length:inherit] [&_code]:text-[#ff4d4d]"
  >
    <span aria-hidden="true" className="block w-[28px] h-[3px] bg-[#CC0000] mb-[14px]" />
    {children}
    <HeadingAnchor id={id} />
  </h2>
);

const Heading3 = ({ id, children }) => (
  <h3
    id={id}
    className="group scroll-mt-[96px] font-rebel font-extrabold italic uppercase text-[1.4rem] leading-[1.1] tracking-[0.02em] text-white mt-[44px] mb-[14px] [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:font-[inherit] [&_code]:text-[length:inherit] [&_code]:text-[#ff4d4d]"
  >
    {children}
    <HeadingAnchor id={id} />
  </h3>
);

const CodeBlock = ({ language, content }) => {
  const isDiagram = DIAGRAM_LANGUAGES.includes(language);
  const label = isDiagram ? "DIAGRAM" : language.toUpperCase();

  return (
    <div className="my-[36px] border border-white/[0.08]">
      <div className="flex items-center gap-[10px] border-b border-white/[0.08] bg-[#0f0f0f] px-[16px] py-[9px]">
        <span aria-hidden="true" className="w-[6px] h-[6px] bg-[#CC0000] rotate-45 flex-shrink-0" />
        <span className="font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#9a9aac]">
          {label}
        </span>
      </div>
      <pre
        tabIndex={0}
        aria-label={isDiagram ? "Diagram" : `${language} code`}
        className={`m-0 overflow-x-auto whitespace-pre p-[20px_22px] font-mono text-[0.8rem] leading-[1.6] text-[#d4d4de] ${isDiagram ? "diagram-grid" : "bg-[#0b0b0b]"}`}
      >
        <code>{content}</code>
      </pre>
    </div>
  );
};

export const markdownComponents = {
  /* Title comes from frontmatter — a stray "# h1" renders as a section heading. */
  h1: Heading2,
  h2: Heading2,
  h3: Heading3,
  h4: ({ children }) => (
    <h4 className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#ff4d4d] mt-[32px] mb-[10px]">
      {children}
    </h4>
  ),

  p: ({ node, children }) =>
    isImageOnly(node) ? <>{children}</> : <p className="mb-[1.4em]">{children}</p>,

  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,

  a: ({ href = "", children }) => {
    if (href.startsWith("/")) {
      return <Link to={href} className={BODY_LINK}>{children}</Link>;
    }
    if (href.startsWith("#")) {
      return <a href={href} className={BODY_LINK}>{children}</a>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={BODY_LINK}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  },

  ul: ({ children }) => (
    <ul className="mb-[1.4em] list-disc pl-[1.35em] marker:text-[#CC0000] [&_ul]:mt-[8px] [&_ul]:mb-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-[1.4em] list-decimal pl-[1.6em] marker:font-mono marker:text-[0.85em] marker:text-[#ff4d4d] [&_ol]:mt-[8px] [&_ol]:mb-0">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-[0.5em] pl-[0.35em] [&>p]:mb-[0.6em]">{children}</li>,

  blockquote: ({ children }) => (
    <blockquote className="relative my-[36px] border border-[#CC0000]/25 bg-[#CC0000]/[0.05] p-[20px_24px_20px_28px] text-[#dedee8] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#CC0000] before:content-[''] [&>p:last-child]:mb-0">
      {children}
    </blockquote>
  ),

  pre: ({ children }) => <>{children}</>,
  code: ({ inline, className = "", children }) => {
    if (inline) {
      return (
        <code className="font-mono text-[0.84em] text-[#f0f0f5] bg-white/[0.07] border border-white/[0.08] px-[0.35em] py-[0.08em]">
          {children}
        </code>
      );
    }
    const language = /language-(\S+)/.exec(className)?.[1] ?? "text";
    return <CodeBlock language={language} content={String(children).replace(/\n$/, "")} />;
  },

  img: ({ src, alt = "", title }) => (
    <figure className="my-[40px]">
      <img
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto border border-white/[0.08] bg-[#0c0c0c]"
      />
      {alt && (
        <figcaption
          aria-hidden="true"
          className="mt-[12px] flex gap-[10px] font-mono text-[0.7rem] leading-[1.6] tracking-[0.03em] text-[#9a9aac]"
        >
          <span className="text-[#ff4d4d] flex-shrink-0">FIG.</span>
          <span>{alt}</span>
        </figcaption>
      )}
    </figure>
  ),

  table: ({ children }) => (
    <div
      tabIndex={0}
      role="region"
      aria-label="Table"
      className="my-[36px] overflow-x-auto border border-white/[0.08]"
    >
      <table className="w-full min-w-[520px] border-collapse text-[0.95rem] leading-[1.55]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#0f0f0f]">{children}</thead>,
  th: ({ children, style }) => (
    <th
      style={style}
      className="border-b border-[#CC0000]/40 p-[12px_16px] text-left font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#ff4d4d]"
    >
      {children}
    </th>
  ),
  td: ({ children, style }) => (
    <td style={style} className="border-t border-white/[0.06] p-[12px_16px] align-top text-[#c8c8d4]">
      {children}
    </td>
  ),

  hr: () => (
    <div aria-hidden="true" className="my-[56px] flex items-center gap-[12px]">
      <div className="flex-1 h-[1px] bg-white/[0.07]" />
      <div className="w-[7px] h-[7px] bg-[#CC0000] rotate-45 flex-shrink-0" />
      <div className="flex-1 h-[1px] bg-white/[0.07]" />
    </div>
  ),
};
