import React from "react";
import projectsData from "../../data/projectsData.json";

const LABELS = ["FULL_STACK", "REAL_TIME", "FULL_STACK", "FRONTEND", "GRAPHQL", "E-COMMERCE", "FRONTEND"];

const FeaturedCard = ({ project, label }) => (
  <div
    className="group bg-[#0f0f0f] border border-[#CC0000]/20 overflow-hidden row-span-2 flex flex-col transition-all duration-200 hover:border-[#CC0000]/50 hover:-translate-y-[2px]"
  >
    {/* Image */}
    <div className="relative h-[280px] overflow-hidden flex-shrink-0">
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover grayscale-[30%] brightness-[0.5] transition-transform duration-400 ease-in-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0f0f0f_0%,transparent_55%)]" />
      {/* Label */}
      <div className="absolute bottom-[14px] left-[14px] bg-[#CC0000] px-[10px] py-[3px] [clip-path:polygon(0_0,calc(100%-6px)_0,100%_100%,6px_100%)]">
        <span className="font-mono text-[0.58rem] font-bold text-white tracking-[0.14em]">
          {label}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-[20px_22px] flex-1 flex flex-col">
      <h3 className="font-rebel font-black italic text-[1.75rem] text-white tracking-[0.02em] mb-[10px] leading-[1.1]">
        {project.name.toUpperCase()}
      </h3>
      <p className="font-mono text-[0.68rem] text-[#555566] leading-[1.7] mb-[20px] flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-[6px] mb-[18px]">
        {project.technologies.slice(0, 4).map(t => (
          <span key={t.alt} className="font-mono text-[0.55rem] text-[#333344] border border-[#1a1a1a] px-[9px] py-[2px] tracking-[0.08em]">
            {t.alt}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-[10px] flex-wrap items-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="bg-[#CC0000] text-white font-rebel italic text-[0.85rem] font-black tracking-[0.12em] px-[18px] py-[6px] no-underline transition-all duration-200 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_100%,6px_100%)] hover:bg-[#ff1a1a] hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]"
        >
          LAUNCH
        </a>
        <a href={project.frontend} target="_blank" rel="noopener noreferrer"
          className="border border-white/12 text-[#555566] font-mono text-[0.6rem] font-bold tracking-[0.1em] px-[14px] py-[6px] no-underline transition-all duration-200 hover:border-white/35 hover:text-white"
        >
          {"</>"} FRONTEND
        </a>
        {project.backend && (
          <a href={project.backend} target="_blank" rel="noopener noreferrer"
            className="border border-[#CC0000]/25 text-[#883333] font-mono text-[0.6rem] font-bold tracking-[0.1em] px-[14px] py-[6px] no-underline transition-all duration-200 hover:border-[#CC0000]/50 hover:text-[#CC0000]"
          >
            {"</>"} BACKEND
          </a>
        )}
        {project.currentlyInDevelopment && (
          <span className="font-mono text-[0.55rem] text-[#CC0000] tracking-[0.1em]">
            ● IN DEV
          </span>
        )}
      </div>
    </div>
  </div>
);

const SmallCard = ({ project, label }) => (
  <div
    className="group bg-[#0f0f0f] border border-white/5 p-[22px] relative flex flex-col transition-all duration-200 hover:border-[#CC0000]/40 hover:-translate-y-[2px]"
  >
    {/* Icon */}
    <div className="w-[38px] h-[38px] border border-[#CC0000]/30 flex items-center justify-center mb-[16px] flex-shrink-0">
      <i className="fas fa-bolt text-[#CC0000] text-[0.85rem]" />
    </div>

    <h3 className="font-rebel font-black italic text-[1.3rem] text-white tracking-[0.02em] mb-[8px] leading-[1.1]">
      {project.name.toUpperCase()}
    </h3>
    <p className="font-mono text-[0.66rem] text-[#555566] leading-[1.65] mb-[16px] flex-1">
      {project.description}
    </p>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-[5px] mb-[16px]">
      {project.technologies.slice(0, 3).map(t => (
        <span key={t.alt} className="font-mono text-[0.52rem] text-[#2a2a2a] border border-[#161616] px-[8px] py-[2px] tracking-[0.08em]">
          {t.alt}
        </span>
      ))}
    </div>

    <div className="flex gap-[8px] flex-wrap items-center">
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        className="bg-[#CC0000] text-white font-rebel italic text-[0.8rem] font-black tracking-[0.1em] px-[14px] py-[5px] no-underline transition-all duration-200 [clip-path:polygon(0_0,calc(100%-5px)_0,100%_100%,5px_100%)] hover:bg-[#ff1a1a]"
      >
        LAUNCH
      </a>
      <a href={project.frontend} target="_blank" rel="noopener noreferrer"
        className="border border-white/10 text-[#444455] font-mono text-[0.57rem] font-bold tracking-[0.1em] px-[12px] py-[5px] no-underline transition-all duration-200 hover:text-white hover:border-white/30"
      >
        CODE
      </a>
      {project.currentlyInDevelopment && (
        <span className="font-mono text-[0.52rem] text-[#CC0000] tracking-[0.1em]">● DEV</span>
      )}
    </div>

    {/* Label watermark */}
    <div className="absolute top-[14px] right-[14px] font-mono text-[0.5rem] text-[#1a1a1a] tracking-[0.1em]">
      {label}
    </div>
  </div>
);

export const Projects = () => {
  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="bg-[#080808] p-[80px_24px_100px] relative">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-[40px] pb-[24px] border-b border-[#CC0000]/15 flex-wrap gap-[16px]">
          <h2 className="font-rebel font-black italic text-[clamp(2.5rem,5vw,4rem)] text-white tracking-[0.02em] leading-none m-0">
            LATEST{" "}
            <span className="text-transparent [webkit-text-stroke:2px_#CC0000]">GIGS</span>
          </h2>
          <span className="font-mono text-[0.62rem] text-[#2a2a2a] tracking-[0.14em]">
            — {projectsData.length} PROJECTS ON STAGE
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[10px]">
          <FeaturedCard project={featured} label={LABELS[0]} />
          {rest.map((project, i) => (
            <SmallCard key={project.name} project={project} label={LABELS[i + 1] || "PROJECT"} />
          ))}
        </div>
      </div>
    </section>
  );
};
