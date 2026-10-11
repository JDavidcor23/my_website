import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* On every route/hash change: jump to the #hash target if there is one,
   otherwise start the new page at the top (BrowserRouter keeps scroll). */
export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
};
