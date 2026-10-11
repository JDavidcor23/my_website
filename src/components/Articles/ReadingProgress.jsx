import { useReadingProgress } from "../../hooks/useScrollSpy";

/* Thin red bar pinned under the fixed navbar (64px). Decorative only. */
export const ReadingProgress = ({ targetRef }) => {
  const progress = useReadingProgress(targetRef);

  return (
    <div aria-hidden="true" className="fixed left-0 right-0 top-[64px] z-[49] h-[2px] bg-white/[0.04]">
      <div
        className="h-full origin-left bg-[#CC0000] shadow-[0_0_10px_rgba(204,0,0,0.6)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
