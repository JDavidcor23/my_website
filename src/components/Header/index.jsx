import React from "react";
import { Link } from "react-router-dom";

// ── Equalizer / amp bars ──────────────────────────────────────────────────
const AmpEqualizer = () => (
  <div className="flex items-end gap-[3px] h-[30px]">
    {[1,2,3,4,5].map(n => (
      <div
        key={n}
        className={`amp-bar-${n} w-[4px] rounded-[1px] flex-shrink-0 ${n % 2 === 0 ? "bg-[#CC0000]" : "bg-[#00F5FF]"}`}
      />
    ))}
  </div>
);

// ── Setlist card (replaces hacker terminal) ───────────────────────────────
const SetlistCard = () => {
  const tracks = [
    { num: "01", title: "REACT.JS",      role: "Lead Frontend"     },
    { num: "02", title: "NODE.JS",        role: "Backend Engine"    },
    { num: "03", title: "TYPESCRIPT",     role: "Type Safety"       },
    { num: "04", title: "TAILWIND CSS",   role: "Visual Overdrive"  },
    { num: "05", title: "AI AUTOMATION",  role: "Claude · OpenAI"   },
    { num: "06", title: "POSTGRESQL",     role: "Data Persistence"  },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#CC0000]/25 relative overflow-hidden shadow-[0_0_60px_rgba(204,0,0,0.07),0_24px_80px_rgba(0,0,0,0.7)]">
      {/* Torn top edge effect */}
      <div className="h-[6px] bg-[repeating-linear-gradient(90deg,#CC0000_0px,#CC0000_18px,transparent_18px,transparent_26px)] opacity-80" />

      {/* Header */}
      <div className="px-[22px] pt-[16px] pb-[12px] border-b border-white/5 flex items-center justify-between">
        <div>
          <div className="font-rebel font-black italic text-base text-white tracking-[0.1em]">
            JORGE DIAZ — WORLD TOUR 2024
          </div>
          <div className="font-mono text-[0.55rem] text-[#555577] tracking-[0.12em] mt-[2px]">
            SETLIST // TECH ARSENAL
          </div>
        </div>
        <AmpEqualizer />
      </div>

      {/* Track list */}
      <div className="py-[6px]">
        {tracks.map((track, i) => (
          <div
            key={track.num}
            className={`flex items-center px-[22px] py-[10px] transition-colors duration-200 cursor-default hover:bg-[#CC0000]/[0.06] ${i < tracks.length - 1 ? "border-b border-white/[0.04]" : ""}`}
          >
            <span className="font-mono text-[0.58rem] text-[#333344] min-w-[28px] font-bold">
              {track.num}
            </span>
            {/* Vinyl groove line */}
            <div className="flex-1 h-[1px] bg-white/5 mx-[12px]" />
            <span className="font-rebel font-extrabold italic text-base text-white tracking-[0.08em] min-w-[160px]">
              {track.title}
            </span>
            <span className="font-mono text-[0.55rem] text-[#444455] tracking-[0.08em] ml-[12px]">
              {track.role}
            </span>
          </div>
        ))}
      </div>

      {/* Torn bottom edge */}
      <div className="h-[6px] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_10px,#CC0000_10px,#CC0000_14px)] opacity-40" />

      {/* Corner stamp */}
      <div className="absolute top-[16px] right-[16px] w-[56px] h-[56px] border-2 border-[#CC0000] rotate-[12deg] flex items-center justify-center opacity-70">
        <div className="-rotate-[12deg] text-center">
          <div className="font-rebel font-black italic text-[0.65rem] text-white tracking-[0.1em] leading-[1.1]">
            LIVE<br/>CODE
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main hero ─────────────────────────────────────────────────────────────
export const Header = () => {
  return (
    <header
      id="about"
      className="rock-grain stage-light bg-[#080808] min-h-[92vh] relative overflow-hidden flex items-center"
    >
      {/* Diagonal slash accent — top right */}
      <div className="absolute top-0 right-0 w-[280px] h-full bg-[linear-gradient(165deg,rgba(204,0,0,0.06)_0%,transparent_50%)] pointer-events-none" />

      {/* Vertical scratch lines */}
      <div className="absolute left-[48%] top-0 w-[1px] h-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute left-[49.5%] top-0 w-[1px] h-full bg-white/[0.015] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-[24px] pt-[60px] pb-[80px] relative z-[3] w-full">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[60px_80px] items-center">

          {/* ── Left ── */}
          <div>
            {/* Available badge — more sticker-like */}
            <div
              className="fade-up fade-up-1 inline-flex items-center gap-[8px] bg-[#CC0000] px-[14px] py-[5px] mb-[28px] -skew-x-4"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-white block animate-pulse" />
              <span className="font-mono text-[0.62rem] font-bold text-white tracking-[0.18em] skew-x-4 block">
                AVAILABLE_FOR_CODE
              </span>
            </div>

            {/* Headline */}
            <h1
              className="fade-up fade-up-2 font-rebel font-black italic leading-[0.88] mb-[28px] tracking-[-0.01em]"
            >
              <div className="text-[clamp(3.5rem,7vw,6rem)] text-white">
                JORGE DIAZ
              </div>
              <div className="text-[clamp(3.5rem,7vw,6rem)] text-transparent [webkit-text-stroke:2px_#CC0000] drop-shadow-[4px_4px_0px_rgba(204,0,0,0.2)]">
                FULLSTACK DEV.
              </div>
            </h1>

            {/* Slash divider */}
            <div
              className="fade-up fade-up-3 flex items-center gap-[12px] mb-[24px]"
            >
              <div className="w-[40px] h-[2px] bg-[#CC0000]" />
              <span className="font-rebel font-bold italic text-[0.75rem] text-[#555566] tracking-[0.2em]">
                REACT · NODE.JS · TYPESCRIPT · AI
              </span>
              <div className="flex-1 h-[1px] bg-white/5" />
            </div>

            {/* Bio */}
            <div className="fade-up fade-up-3 flex gap-[20px] mb-[40px]">
              <div className="w-[3px] bg-[#CC0000] flex-shrink-0" />
              <p className="font-mono text-[0.82rem] text-[#7777aa] leading-[1.75] m-0 max-w-[460px]">
                Building web experiences with React, Node.js &amp; TypeScript.
                Passionate about clean architecture, AI automation with Claude
                &amp; OpenAI, and shipping products that actually work.
              </p>
            </div>

            {/* CTAs */}
            <div className="fade-up fade-up-4 flex gap-[14px] flex-wrap">
              <a
                href="#projects"
                className="bg-[#CC0000] text-white font-rebel italic text-base font-black tracking-[0.12em] px-[32px] py-[12px] no-underline inline-block transition-all duration-200 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_100%,10px_100%)] hover:bg-[#ff1a1a] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)]"
              >
                VIEW PROJECTS
              </a>

              <Link
                to="/cv"
                className="border-2 border-white/30 text-white font-rebel italic text-base font-black tracking-[0.12em] px-[32px] py-[12px] no-underline inline-block transition-all duration-200 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] hover:border-white hover:bg-white/5"
              >
                VIEW RESUME
              </Link>
            </div>

            {/* Social */}
            <div className="fade-up fade-up-5 flex gap-[20px] mt-[48px] items-center">
              <a href="https://github.com/JDavidcor23" target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.65rem] font-semibold tracking-[0.1em] text-[#444455] no-underline flex items-center gap-[8px] transition-colors duration-200 hover:text-white"
              >
                <i className="fab fa-github text-base" /> GITHUB
              </a>
              <span className="text-[#1e1e2a]">|</span>
              <a href="https://www.linkedin.com/in/jorge-david-diaz-cordero-web-developer/" target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.65rem] font-semibold tracking-[0.1em] text-[#444455] no-underline flex items-center gap-[8px] transition-colors duration-200 hover:text-white"
              >
                <i className="fab fa-linkedin-in text-base" /> LINKEDIN
              </a>
            </div>
          </div>

          {/* ── Right: setlist card ── */}
          <div className="relative">
            {/* Accent slash behind card */}
            <div className="absolute -top-[30px] -right-[20px] w-[110%] h-[110%] border border-[#CC0000]/10 rotate-[1.5deg] pointer-events-none z-0" />

            <div className="relative z-[1]">
              <SetlistCard />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
