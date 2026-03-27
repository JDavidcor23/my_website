export const LogoMark = ({ size = 120 }) => (
  <div
    style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0 }}
    className="relative overflow-hidden bg-[#0a0a0f]"
  >
    {/* Red ring border */}
    <div
      className="absolute inset-0 rounded-full border border-[#CC0000]/55"
    />

    {/* JD text — offset left to compensate italic visual shift */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ marginLeft: `-${size * 0.07}px` }}>
      <span
        className="font-rebel font-black italic text-white leading-none"
        style={{ fontSize: size * 0.54, letterSpacing: "-0.04em" }}
      >
        J
      </span>
      <span
        className="font-rebel font-black italic leading-none"
        style={{
          fontSize: size * 0.54,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: `${Math.max(1.5, size * 0.022)}px #CC0000`,
        }}
      >
        D
      </span>
    </div>
  </div>
);
