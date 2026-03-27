import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div className="rock-grain min-h-screen bg-[#080808] flex flex-col items-center justify-center px-[24px] relative overflow-hidden">

    {/* Background slash accents */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-0 right-0 w-[300px] h-full bg-[linear-gradient(165deg,rgba(204,0,0,0.04)_0%,transparent_50%)]" />
      <div className="absolute left-[47%] top-0 w-[1px] h-full bg-white/[0.02]" />
      <div className="absolute left-[48.5%] top-0 w-[1px] h-full bg-white/[0.015]" />
    </div>

    {/* Giant 404 watermark */}
    <div
      className="absolute font-rebel font-black italic text-[clamp(14rem,30vw,22rem)] text-white/[0.02] leading-none select-none pointer-events-none"
      aria-hidden="true"
    >
      404
    </div>

    <div className="relative z-[3] text-center max-w-[520px]">

      {/* Error badge */}
      <div className="inline-flex items-center gap-[8px] bg-[#CC0000] px-[14px] py-[5px] mb-[32px] -skew-x-4">
        <span className="w-[6px] h-[6px] rounded-full bg-white block" />
        <span className="font-mono text-[0.62rem] font-bold text-white tracking-[0.18em] skew-x-4">
          ERROR_404
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-rebel font-black italic leading-[0.9] mb-[28px] tracking-[-0.01em]">
        <div className="text-[clamp(3rem,8vw,5.5rem)] text-white">PAGE NOT</div>
        <div className="text-[clamp(3rem,8vw,5.5rem)] text-transparent [webkit-text-stroke:2px_#CC0000] drop-shadow-[4px_4px_0px_rgba(204,0,0,0.2)]">
          FOUND.
        </div>
      </h1>

      {/* Divider */}
      <div className="flex items-center justify-center gap-[12px] mb-[24px]">
        <div className="w-[40px] h-[2px] bg-[#CC0000]" />
        <span className="font-rebel font-bold italic text-[0.72rem] text-[#555566] tracking-[0.2em]">
          THIS GIG DOESN'T EXIST
        </span>
        <div className="w-[40px] h-[2px] bg-[#CC0000]" />
      </div>

      {/* Message */}
      <div className="flex gap-[16px] justify-center mb-[44px]">
        <div className="w-[3px] bg-[#CC0000] flex-shrink-0" />
        <p className="font-mono text-[0.78rem] text-[#7777aa] leading-[1.8] text-left">
          Looks like this URL wandered offstage. The page you're
          looking for might have been removed, renamed, or never
          made it to the setlist.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex gap-[14px] flex-wrap justify-center">
        <Link
          to="/"
          className="bg-[#CC0000] text-white font-rebel italic text-base font-black tracking-[0.12em] px-[32px] py-[12px] no-underline inline-block transition-all duration-200 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_100%,10px_100%)] hover:bg-[#ff1a1a] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)]"
        >
          BACK TO HOME
        </Link>
        <Link
          to="/cv"
          className="border-2 border-white/20 text-white font-rebel italic text-base font-black tracking-[0.12em] px-[32px] py-[12px] no-underline inline-block transition-all duration-200 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] hover:border-white/50 hover:bg-white/5"
        >
          VIEW RESUME
        </Link>
      </div>
    </div>

    {/* Bottom watermark */}
    <div className="absolute bottom-[28px]">
      <span className="font-mono text-[0.48rem] text-[#1e1e2a] tracking-[0.2em]">
        JORGE DIAZ · FULLSTACK DEVELOPER
      </span>
    </div>
  </div>
);
