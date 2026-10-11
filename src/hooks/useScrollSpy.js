import { useEffect, useState } from "react";

const NAVBAR_OFFSET = 120;

/* Calls `onFrame` at most once per animation frame while scrolling/resizing. */
const useFrameScroll = (onFrame, deps) => {
  useEffect(() => {
    let frame = 0;
    const run = () => {
      frame = 0;
      onFrame();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

/* 0 → 1 as the reader moves through the referenced element. */
export const useReadingProgress = (ref) => {
  const [progress, setProgress] = useState(0);

  useFrameScroll(() => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const distance = rect.height - window.innerHeight;
    const value = distance <= 0 ? 1 : -rect.top / distance;
    setProgress(Math.min(1, Math.max(0, value)));
  }, [ref]);

  return progress;
};

/* Id of the last heading that has scrolled past the navbar. */
export const useActiveHeading = (ids) => {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  const key = ids.join("|");

  useFrameScroll(() => {
    let current = ids[0] ?? null;
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element && element.getBoundingClientRect().top <= NAVBAR_OFFSET) current = id;
    });
    setActiveId(current);
  }, [key]);

  return activeId;
};
