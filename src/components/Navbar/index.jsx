import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { href: "#about",      label: "ABOUT" },
  { href: "#skills",     label: "TECH_STACK" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects",   label: "PROJECTS" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[50] bg-[#080808]/94 backdrop-blur-[12px] border-b border-[#CC0000]/20"
      >
        <div className="max-w-[1280px] mx-auto px-[24px] h-[64px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-rebel font-black italic text-[1.5rem] text-white tracking-[0.04em] no-underline"
          >
            JORGE<span className="text-[#CC0000]">_</span>DIAZ
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[36px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-mono text-[0.7rem] font-semibold tracking-[0.12em] text-[#555566] transition-colors duration-200 no-underline hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CV link + CTA */}
          <div className="hidden md:flex items-center gap-[20px]">
            <Link
              to="/cv"
              className="nav-link font-mono text-[0.7rem] font-semibold tracking-[0.12em] text-[#555566] transition-colors duration-200 no-underline hover:text-white"
            >
              RESUME
            </Link>
            <a
              href="https://www.linkedin.com/in/jorge-david-diaz-cordero-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-rebel italic text-[0.95rem] font-black tracking-[0.12em] text-white bg-[#CC0000] border-none px-[22px] py-[8px] no-underline transition-all duration-200 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_100%,8px_100%)] inline-block hover:bg-[#ff1a1a] hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden bg-transparent border-none cursor-pointer p-[4px]"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-[24px] h-[2px] bg-[#CC0000] transition-all duration-200 ${open ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`} />
              <span className={`block w-[24px] h-[2px] bg-white transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-[24px] h-[2px] bg-[#CC0000] transition-all duration-200 ${open ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0a0a0a] ${open ? "max-h-[400px] border-t border-[#CC0000]/15" : "max-h-0"}`}
        >
          <div className="p-[16px_24px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-[0.75rem] font-semibold tracking-[0.12em] text-[#555566] py-[14px] border-b border-white/[0.04] no-underline"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/cv"
              onClick={() => setOpen(false)}
              className="block font-mono text-[0.75rem] font-semibold tracking-[0.12em] text-[#555566] py-[14px] border-b border-white/[0.04] no-underline"
            >
              CV
            </Link>
            <a
              href="https://www.linkedin.com/in/jorge-david-diaz-cordero-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block mt-[20px] bg-[#CC0000] text-white font-rebel italic text-base font-black tracking-[0.12em] p-[12px] text-center no-underline"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </nav>
      <div className="h-[64px]" />
    </>
  );
};
