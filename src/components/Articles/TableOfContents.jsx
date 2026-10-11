const pad = (index) => String(index + 1).padStart(2, "0");

export const TableOfContents = ({ items, activeId }) => (
  <nav aria-label="Table of contents">
    <ol className="list-none m-0 p-0 flex flex-col">
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`group flex gap-[12px] border-l-2 py-[9px] pl-[14px] pr-[4px] no-underline transition-colors duration-200 ${
                isActive
                  ? "border-[#CC0000] text-white"
                  : "border-white/[0.07] text-[#8a8a9c] hover:border-white/30 hover:text-white"
              }`}
            >
              <span
                className={`font-mono text-[0.62rem] pt-[3px] tracking-[0.08em] ${
                  isActive ? "text-[#ff4d4d]" : "text-[#55556a]"
                }`}
              >
                {pad(index)}
              </span>
              <span className="font-read text-[0.92rem] leading-[1.4]">{item.text}</span>
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);
