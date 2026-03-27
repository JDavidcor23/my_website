import React, { useState } from "react";
import skills from "../../data/skills.json";

// Rock color cycle — red, white, muted, white, red, dim
const ACCENT_A = ["#CC0000", "#ffffff", "#CC0000", "#ffffff", "#444455", "#CC0000"];
const ACCENT_B = ["#ffffff", "#CC0000", "#444455", "#CC0000", "#ffffff", "#444455"];

const MarqueeRow = ({ items, accentList, reverse = false, speed = "40s" }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container border-b border-white/[0.03]">
      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ animationDuration: speed }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="font-rebel font-black italic text-[clamp(1.6rem,3vw,2.5rem)] mr-[3rem] tracking-[0.05em] whitespace-nowrap inline-flex items-center gap-[3rem]"
            style={{ 
              color: accentList[i % accentList.length],
              opacity: i % 4 === 3 ? 0.2 : 1 
            }}
          >
            {skill.name.toUpperCase()}
            <span className="text-[#CC0000]/30 text-[0.55em] font-normal not-italic">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className="group relative bg-[#0f0f0f] border border-white/[0.05] p-[22px_16px] flex flex-col items-center gap-[12px] cursor-default transition-all duration-250 ease-in-out hover:border-[#CC0000]/50 hover:-translate-y-[3px] hover:shadow-[0_8px_40px_rgba(204,0,0,0.1),0_0_0_1px_rgba(204,0,0,0.15)] overflow-hidden"
    >
      {/* Subtle red gradient on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(204,0,0,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none" />

      {/* Index */}
      <span className="absolute top-[10px] left-[12px] font-mono text-[0.5rem] text-[#1e1e1e] group-hover:text-[#CC0000] tracking-[0.1em] transition-colors duration-250 font-bold truncate">
        {num}
      </span>

      {/* LED dot */}
      <span className="absolute top-[12px] right-[12px] w-[5px] h-[5px] rounded-full bg-[#1e1e1e] group-hover:bg-[#CC0000] transition-colors duration-250 group-hover:shadow-[0_0_8px_#CC0000]" />

      {/* Logo */}
      <div className="w-[56px] h-[56px] flex items-center justify-center relative z-[1]">
        <img
          src={skill.img}
          alt={skill.name}
          className="w-[48px] h-[48px] object-contain grayscale-[90%] brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-[1.1] transition-all duration-300 ease-in-out group-hover:scale-[1.08]"
        />
      </div>

      {/* Name */}
      <p className="font-mono text-[0.6rem] font-bold text-[#444455] group-hover:text-white tracking-[0.1em] text-center m-0 transition-colors duration-250 relative z-[1]">
        {skill.name.toUpperCase()}
      </p>

      {/* Bottom red line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[linear-gradient(90deg,#CC0000,#ff4444)] transition-[width] duration-300 ease-in-out" />
    </div>
  );
};

export const Technologies = () => {
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  return (
    <section id="skills" className="bg-[#080808]">
      {/* Marquee banner */}
      <div className="bg-[#0a0a0a] border-t border-[#CC0000]/15 border-b border-[#CC0000]/08 pt-[22px] overflow-hidden">
        <MarqueeRow items={row1} accentList={ACCENT_A} speed="38s" />
        <div className="pt-[22px]" />
        <MarqueeRow items={row2} accentList={ACCENT_B} reverse speed="48s" />
        <div className="h-[22px]" />
      </div>

      {/* Card grid */}
      <div className="max-w-[1280px] mx-auto p-[72px_24px_88px]">
        {/* Heading */}
        <div className="flex items-end justify-between mb-[40px] pb-[20px] border-b border-[#CC0000]/15 flex-wrap gap-[12px]">
          <h2 className="font-rebel font-black italic text-[clamp(2.2rem,4.5vw,3.5rem)] text-white m-0 tracking-[0.02em] leading-none">
            TECH{" "}
            <span className="text-transparent [webkit-text-stroke:2px_#CC0000]">ARSENAL</span>
          </h2>
          <span className="font-mono text-[0.6rem] text-[#2a2a2a] tracking-[0.14em]">
            {skills.length}_WEAPONS_LOADED
          </span>
        </div>

        {/* Console bar */}
        <div className="bg-[#0a0a0a] border border-[#CC0000]/15 border-b-0 p-[8px_16px] flex items-center gap-[12px]">
          <div className="flex gap-[6px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#FF5F57] block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E] block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#28C840] block" />
          </div>
          <span className="font-mono text-[0.58rem] text-[#2a2a2a] tracking-[0.1em]">
            $ ls tech_stack/ --all --verbose
          </span>
          <span className="cursor-blink text-[#CC0000] text-[0.7rem]">▋</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-px bg-[#CC0000]/08 border border-[#CC0000]/15 p-px">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Footer bar */}
        <div className="bg-[#0a0a0a] border border-[#CC0000]/15 border-t-[#CC0000]/08 p-[8px_16px] flex justify-between items-center">
          <span className="font-mono text-[0.55rem] text-[#2a2a2a] tracking-[0.1em]">
            [OK] {skills.length} items — hover to activate
          </span>
          <span className="font-mono text-[0.55rem] text-[#CC0000] tracking-[0.1em]">
            STATUS: ONLINE
          </span>
        </div>
      </div>
    </section>
  );
};
