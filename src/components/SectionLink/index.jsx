import { Link, useLocation } from "react-router-dom";

/* Link to a home-page section (#about, #projects…).
   On "/" it stays a native anchor (smooth in-page scroll);
   on any other route it navigates to "/#section". Empty hash = home top. */
export const SectionLink = ({ hash = "", className, onClick, children }) => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return (
      <a href={hash || "#"} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={hash ? `/${hash}` : "/"} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};
