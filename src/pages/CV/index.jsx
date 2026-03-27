import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CV_MARKDOWN } from "../../data/cvContent";

/* ── Custom markdown renderers (rock theme) ──────────────────────────────── */
const components = {
  h1: ({ children }) => (
    <h1 className="font-rebel font-black italic text-[clamp(2.2rem,5vw,3.5rem)] text-white tracking-[-0.01em] leading-[1] mb-[8px]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-rebel font-black italic text-[1.5rem] text-white tracking-[0.04em] mt-[48px] mb-[20px] pb-[10px] border-b border-[#CC0000]/30 flex items-center gap-[12px]">
      <span className="inline-block w-[18px] h-[2px] bg-[#CC0000] flex-shrink-0" />
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-rebel font-black italic text-[1.15rem] text-white tracking-[0.04em] mt-[32px] mb-[10px]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-mono text-[0.65rem] font-bold text-[#CC0000] tracking-[0.18em] uppercase mt-[20px] mb-[8px]">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="font-mono text-[0.75rem] text-[#9999bb] leading-[1.9] mb-[12px]">
      {children}
    </p>
  ),
  em: ({ children }) => (
    <em className="font-mono text-[0.68rem] not-italic text-[#555577] tracking-[0.06em]">
      {children}
    </em>
  ),
  strong: ({ children }) => (
    <strong className="font-mono font-bold text-[#ccccdd] not-italic">
      {children}
    </strong>
  ),
  ul: ({ children }) => (
    <ul className="list-none pl-0 mb-[16px] flex flex-col gap-[6px]">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-[10px] font-mono text-[0.73rem] text-[#9999bb] leading-[1.75]">
      <span className="text-[#CC0000] flex-shrink-0 mt-[3px]">▸</span>
      <span>{children}</span>
    </li>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="font-mono text-[0.65rem] text-[#00F5FF]/80 bg-[#00F5FF]/[0.06] px-[8px] py-[3px] rounded-[2px] border border-[#00F5FF]/10">
        {children}
      </code>
    ) : (
      <pre className="bg-[#0a0a0a] border border-[#CC0000]/15 p-[16px] overflow-x-auto mb-[16px]">
        <code className="font-mono text-[0.68rem] text-[#9999bb]">{children}</code>
      </pre>
    ),
  hr: () => (
    <div className="my-[36px] flex items-center gap-[12px]">
      <div className="flex-1 h-[1px] bg-white/[0.05]" />
      <div className="w-[6px] h-[6px] bg-[#CC0000] rotate-45 flex-shrink-0" />
      <div className="flex-1 h-[1px] bg-white/[0.05]" />
    </div>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-[24px]">
      <table className="w-full border-collapse font-mono text-[0.68rem]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[#CC0000]/30">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="text-left text-[#CC0000] tracking-[0.14em] font-bold py-[10px] pr-[24px]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="text-[#9999bb] py-[9px] pr-[24px] leading-[1.7] border-b border-white/[0.04]">
      {children}
    </td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#00F5FF] no-underline hover:underline transition-colors duration-200"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#CC0000]/40 pl-[16px] my-[16px] italic text-[#666677]">
      {children}
    </blockquote>
  ),
};

/* ── CV Page ─────────────────────────────────────────────────────────────── */
export const CVPage = () => {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-[50] bg-[#080808]/95 backdrop-blur-[12px] border-b border-[#CC0000]/20">
        <div className="max-w-[900px] mx-auto px-[24px] h-[56px] flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-[10px] font-mono text-[0.65rem] text-[#555566] no-underline tracking-[0.12em] transition-colors duration-200 hover:text-white group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-[3px]">←</span>
            BACK
          </Link>

          <span className="font-rebel font-black italic text-[0.95rem] text-white tracking-[0.06em]">
            JORGE<span className="text-[#CC0000]">_</span>DIAZ
            <span className="font-mono font-normal text-[0.55rem] text-[#444455] tracking-[0.2em] ml-[10px] not-italic">
              CV
            </span>
          </span>

          <button
            onClick={() => window.print()}
            className="font-mono text-[0.6rem] text-[#555566] tracking-[0.12em] bg-transparent border border-[#2a2a2a] px-[14px] py-[6px] cursor-pointer transition-all duration-200 hover:border-[#CC0000]/40 hover:text-white"
          >
            PRINT
          </button>
        </div>
      </div>

      {/* ── Red top accent line ── */}
      <div className="h-[2px] bg-[linear-gradient(to_right,#CC0000,#CC0000_30%,transparent)]" />

      {/* ── Markdown content ── */}
      <main className="max-w-[900px] mx-auto px-[24px] py-[60px]">
        <div className="bg-[#0d0d0d] border border-[#CC0000]/10 p-[40px_48px] shadow-[0_24px_80px_rgba(0,0,0,0.6)] print:bg-white print:text-black print:border-0 print:shadow-none print:p-0">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {CV_MARKDOWN}
          </ReactMarkdown>
        </div>
      </main>

      {/* ── Footer watermark ── */}
      <div className="text-center pb-[40px]">
        <span className="font-mono text-[0.48rem] text-[#1e1e2a] tracking-[0.2em]">
          JORGE DIAZ · FULLSTACK DEVELOPER · {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};
