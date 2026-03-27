import React from "react";

const FOOTER_LINKS = [
  { label: "ABOUT",      href: "#about" },
  { label: "TECH_STACK", href: "#skills" },
  { label: "PROJECTS",   href: "#projects" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#CC0000]/15 p-[32px_24px]">
      {/* Top torn accent */}
      <div className="h-[3px] bg-[repeating-linear-gradient(90deg,#CC0000_0px,#CC0000_20px,transparent_20px,transparent_30px)] opacity-60 mb-[24px]" />

      <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-[20px]">
        {/* Brand */}
        <div>
          <div className="font-rebel font-black italic text-[1.1rem] text-white tracking-[0.04em] mb-[4px]">
            JORGE<span className="text-[#CC0000]">_</span>DIAZ
          </div>
          <div className="font-mono text-[0.55rem] text-[#2a2a2a] tracking-[0.1em]">
            © 2024 — FULLSTACK DEVELOPER
          </div>
        </div>

        {/* Nav links */}
        <div className="flex gap-[28px] flex-wrap">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[0.58rem] text-[#2a2a2a] tracking-[0.11em] no-underline transition-colors duration-200 hover:text-[#CC0000]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex gap-[18px] items-center">
          <a href="https://github.com/JDavidcor23" target="_blank" rel="noopener noreferrer"
            className="text-[#2a2a2a] text-[1.1rem] transition-colors duration-200 hover:text-white"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/jorge-david-diaz-cordero-web-developer/" target="_blank" rel="noopener noreferrer"
            className="text-[#2a2a2a] text-[1.1rem] transition-colors duration-200 hover:text-white"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#"
            className="text-[#2a2a2a] text-[1.1rem] transition-colors duration-200 hover:text-[#CC0000]"
            aria-label="Power"
          >
            <i className="fas fa-bolt" />
          </a>
        </div>
      </div>
    </footer>
  );
};
