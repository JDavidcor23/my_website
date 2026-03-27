import { useState } from "react";

/* ─── IXCOMERCIO achievement tabs ─── */
const ACHIEVEMENTS = [
  {
    icon: "fa-layer-group",
    tag: "UI LIBRARY",
    title: "Component Library",
    desc: "Built a shared component library from scratch based on a custom template I designed. Centralized every portal component with full documentation and React Compound Pattern. A persistent date-selector pain point became the library flagship. Combined with internal AI tooling, this cut complex view scaffolding from ~1 week down to 2–3 days.",
  },
  {
    icon: "fa-robot",
    tag: "AI MENTORSHIP",
    title: "Led AI Adoption",
    desc: "Ran a Cursor workshop for the dev team, then built a ChatGPT vs. Microsoft 365 Copilot comparison deck presented directly to the CEO (Mike) — arguing why ChatGPT was the better choice for dev workflows. The presentation led to team-wide adoption of AI tooling.",
  },
  {
    icon: "fa-calendar-days",
    tag: "OWNERSHIP",
    title: "Commercial Calendar",
    desc: "Sole owner of the new commercial calendar view. Driving complex state management with Zustand and React Compound Pattern — currently the most architecturally demanding feature on the platform.",
  },
  {
    icon: "fa-sitemap",
    tag: "ARCHITECTURE",
    title: "Colocation Method",
    desc: "Defined and documented a frontend architecture methodology: components live at the level where they're consumed. Feature-level components stay inside their feature folder; only truly shared components get promoted to a higher level. Reduced accidental coupling and made the codebase significantly easier to navigate.",
  },
];

/* ─── Past experience data ─── */
const PAST = [
  {
    company: "SERVIAP",
    role: "Full Stack Developer",
    focus: "BACKEND-FOCUSED",
    icon: "fa-server",
    highlight:
      "Built an image storage endpoint using AWS S3, integrated into a NestJS middleware pipeline.",
    responsibilities: [
      "Worked extensively with Apollo GraphQL, TypeScript, and NestJS",
      "Created endpoints with layered middleware architecture",
      "Built API documentation directly in Apollo",
    ],
    stack: ["TypeScript", "NestJS", "GraphQL", "Apollo", "AWS S3"],
  },
  {
    company: "BITRUS EXCHANGE",
    role: "Frontend Developer",
    focus: "FRONTEND",
    icon: "fa-bolt",
    highlight:
      "Co-built a UI component library from scratch, centralizing components that had been copy-pasted across every project.",
    responsibilities: [
      "Code refactoring and new feature development",
      "Responsive redesign with pixel-perfect execution",
      "Built a live price-change indicator via WebSocket — a 5s countdown animation that ran before each new price rendered, using CSS animations and styled-components",
    ],
    stack: ["React", "styled-components", "WebSocket", "CSS Animations"],
  },
];

/* ─── Featured card: IXCOMERCIO ─── */
const FeaturedExperience = () => {
  const [active, setActive] = useState(0);
  const item = ACHIEVEMENTS[active];

  return (
    <div className="bg-[#0f0f0f] border border-[#CC0000]/20 overflow-hidden transition-all duration-200 hover:border-[#CC0000]/40">

      {/* Top bar */}
      <div className="flex items-center justify-between px-[22px] py-[12px] border-b border-[#CC0000]/10 bg-[#0a0a0a] flex-wrap gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <span className="inline-block w-[7px] h-[7px] bg-[#CC0000] animate-pulse" />
          <span className="font-mono text-[0.55rem] text-[#CC0000] tracking-[0.2em]">
            CURRENT GIG
          </span>
        </div>
        <div className="flex flex-wrap gap-[5px]">
          {["JavaScript", "TypeScript", "React", "NestJS", "PostgreSQL", "Azure"].map((t) => (
            <span
              key={t}
              className="font-mono text-[0.48rem] text-[#555566] border border-[#2a2a2a] px-[7px] py-[1px] tracking-[0.06em]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1px_1fr]">

        {/* Left — company + tab selector */}
        <div className="p-[26px_22px] flex flex-col justify-between">
          <div>
            <div className="font-mono text-[0.5rem] text-[#666677] tracking-[0.16em] mb-[10px]">
              FULL STACK DEVELOPER
            </div>
            <h3 className="font-rebel font-black italic text-[1.9rem] text-white leading-[1] tracking-[0.02em]">
              IXCOMERCIO
            </h3>
            <div className="font-rebel font-black italic text-[1rem] text-[#CC0000]/50 tracking-[0.06em] mb-[22px]">
              / INTCOMEX
            </div>

            {/* Tabs */}
            <div className="flex flex-col gap-[4px]">
              {ACHIEVEMENTS.map((a, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left font-mono text-[0.56rem] tracking-[0.1em] px-[10px] py-[8px] border transition-all duration-150 cursor-pointer ${
                    active === i
                      ? "border-[#CC0000]/35 text-white bg-[#CC0000]/[0.06]"
                      : "border-transparent text-[#555566] hover:text-[#aaaacc] hover:border-[#2a2a2a]"
                  }`}
                >
                  <span
                    className={`mr-[8px] font-bold ${
                      active === i ? "text-[#CC0000]" : "text-[#444455]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {a.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Index watermark */}
          <div className="font-mono text-[0.48rem] text-[#141414] tracking-[0.1em] mt-[20px]">
            IXCOMERCIO / INTCOMEX
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block bg-[#CC0000]/8" />

        {/* Right — achievement detail */}
        <div className="p-[26px_28px] flex flex-col justify-center min-h-[260px]">
          <div key={active}>
            <i
              className={`fas ${item.icon} text-[#CC0000] text-[1.1rem] mb-[14px] block`}
            />
            <div className="font-mono text-[0.5rem] text-[#CC0000]/80 tracking-[0.18em] mb-[8px]">
              {item.tag}
            </div>
            <h4 className="font-rebel font-black italic text-[1.5rem] text-white tracking-[0.02em] leading-[1.1] mb-[14px]">
              {item.title.toUpperCase()}
            </h4>
            <p className="font-mono text-[0.65rem] text-[#888899] leading-[1.8] max-w-[520px]">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Small card: past experiences ─── */
const PastExperience = ({ data }) => (
  <div className="group bg-[#0f0f0f] border border-white/5 overflow-hidden flex flex-col transition-all duration-200 hover:border-[#CC0000]/35 hover:-translate-y-[2px]">
    {/* Red top accent */}
    <div className="h-[2px] bg-[linear-gradient(to_right,#CC0000,transparent)]" />

    <div className="p-[22px_20px] flex-1 flex flex-col">
      {/* Header row */}
      <div className="flex items-start justify-between mb-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[34px] h-[34px] border border-[#CC0000]/25 flex items-center justify-center flex-shrink-0">
            <i className={`fas ${data.icon} text-[#CC0000] text-[0.8rem]`} />
          </div>
          <div>
            <div className="font-mono text-[0.48rem] text-[#666677] tracking-[0.14em] mb-[4px]">
              {data.role.toUpperCase()}
            </div>
            <h3 className="font-rebel font-black italic text-[1.3rem] text-white tracking-[0.02em] leading-[1]">
              {data.company}
            </h3>
          </div>
        </div>
        <div className="bg-[#CC0000]/8 border border-[#CC0000]/15 px-[8px] py-[3px] [clip-path:polygon(0_0,calc(100%-4px)_0,100%_100%,4px_100%)] flex-shrink-0">
          <span className="font-mono text-[0.46rem] text-[#CC0000]/70 tracking-[0.1em]">
            {data.focus}
          </span>
        </div>
      </div>

      {/* Key highlight */}
      <div className="border-l-2 border-[#CC0000]/25 pl-[12px] mb-[16px]">
        <p className="font-mono text-[0.61rem] text-[#999aaa] leading-[1.7] italic">
          {data.highlight}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="flex-1 mb-[16px] flex flex-col gap-[7px]">
        {data.responsibilities.map((r, i) => (
          <div key={i} className="flex items-start gap-[8px]">
            <span className="font-mono text-[0.5rem] text-[#CC0000]/70 mt-[3px] flex-shrink-0">
              ▸
            </span>
            <span className="font-mono text-[0.59rem] text-[#888899] leading-[1.65]">
              {r}
            </span>
          </div>
        ))}
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-[5px]">
        {data.stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.5rem] text-[#666677] border border-[#2a2a2a] px-[8px] py-[2px] tracking-[0.07em]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Section export ─── */
export const Experience = () => (
  <section id="experience" className="bg-[#0a0a0a] p-[80px_24px_100px] relative">
    <div className="max-w-[1280px] mx-auto">

      {/* Section header */}
      <div className="flex items-end justify-between mb-[40px] pb-[24px] border-b border-[#CC0000]/15 flex-wrap gap-[16px]">
        <h2 className="font-rebel font-black italic text-[clamp(2.5rem,5vw,4rem)] text-white tracking-[0.02em] leading-none m-0">
          STAGE{" "}
          <span className="text-transparent [-webkit-text-stroke:2px_#CC0000]">
            HISTORY
          </span>
        </h2>
        <span className="font-mono text-[0.62rem] text-[#2a2a2a] tracking-[0.14em]">
          — 3 GIGS PLAYED
        </span>
      </div>

      {/* Featured: IXCOMERCIO */}
      <div className="mb-[10px]">
        <FeaturedExperience />
      </div>

      {/* Past: Serviap + Vitrous */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[10px]">
        {PAST.map((exp) => (
          <PastExperience key={exp.company} data={exp} />
        ))}
      </div>

    </div>
  </section>
);
