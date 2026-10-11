import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ArticleCard } from "../../components/Articles/ArticleCard";
import { ARTICLE_PROJECTS } from "../../data/articleProjects";
import { ARTICLES, getArticlesByProject } from "../../data/articles";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useScrollToHash } from "../../hooks/useScrollToHash";

const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "S"}`;

const EmptyState = ({ project }) => (
  <div className="relative border border-dashed border-[#CC0000]/30 bg-[#0c0c0c] p-[36px_28px] sm:p-[44px_40px]">
    <span className="font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#ff4d4d]">
      STATUS — WRITING
    </span>
    <p className="mt-[14px] mb-[14px] font-rebel text-[clamp(1.9rem,4.5vw,2.75rem)] font-black italic uppercase leading-[1] text-white">
      First article in progress
      <span aria-hidden="true" className="cursor-blink text-[#CC0000]">_</span>
    </p>
    <p className="m-0 max-w-[52ch] font-read text-[1rem] leading-[1.65] text-[#b4b4c2]">
      Articles about {project.name} will be listed here. Until then, the source code is
      open on{" "}
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline decoration-[#CC0000] decoration-2 underline-offset-[4px] hover:text-[#ff4d4d]"
      >
        GitHub<span className="sr-only"> (opens in a new tab)</span>
      </a>
      .
    </p>
  </div>
);

const ProjectBlock = ({ project }) => {
  const articles = getArticlesByProject(project.id);
  const headingId = `project-${project.id}`;

  return (
    <section
      id={project.id}
      aria-labelledby={headingId}
      className="scroll-mt-[96px] grid gap-[32px] border-b border-white/[0.05] py-[56px] last:border-b-0 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-[64px]"
    >
      {/* Project info */}
      <div className="lg:sticky lg:top-[100px] lg:self-start">
        <span className="font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#ff4d4d]">
          PROJECT
        </span>
        <h2
          id={headingId}
          className="mt-[8px] mb-[14px] font-rebel text-[clamp(2.4rem,5vw,3.25rem)] font-black italic uppercase leading-[0.95] tracking-[0.01em] text-white"
        >
          {project.name}
        </h2>
        <p className="mb-[22px] max-w-[42ch] font-read text-[1rem] leading-[1.6] text-[#b4b4c2]">
          {project.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-[10px]">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#CC0000] px-[18px] py-[6px] font-rebel text-[0.85rem] font-black italic tracking-[0.12em] text-white no-underline transition-all duration-200 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_100%,6px_100%)] hover:bg-[#ff1a1a] hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]"
          >
            LIVE APP<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/[0.12] px-[14px] py-[6px] font-mono text-[0.6rem] font-bold tracking-[0.1em] text-[#9a9aac] no-underline transition-all duration-200 hover:border-white/[0.35] hover:text-white"
          >
            {"</>"} REPO<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-[22px] mb-0 font-mono text-[0.62rem] tracking-[0.14em] text-[#6a6a7c]">
          — {plural(articles.length, "ARTICLE")}
        </p>
      </div>

      {/* Article list */}
      <div>
        {articles.length ? (
          <ol className="m-0 flex list-none flex-col gap-[10px] p-0">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </ol>
        ) : (
          <EmptyState project={project} />
        )}
      </div>
    </section>
  );
};

export const ArticlesPage = () => {
  useDocumentTitle("Articles — Jorge Diaz");
  useScrollToHash();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080808]">
        {/* Header */}
        <header className="rock-grain stage-light relative overflow-hidden border-b border-[#CC0000]/[0.15] px-[24px] pt-[64px] pb-[48px] sm:pt-[88px] sm:pb-[64px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-2%] bottom-[-18%] select-none font-rebel text-[clamp(8rem,22vw,18rem)] font-black italic leading-none text-white/[0.025]"
          >
            NOTES
          </div>
          <div className="relative z-[3] mx-auto max-w-[1280px]">
            <div className="mb-[28px] inline-flex -skew-x-6 items-center gap-[8px] bg-[#CC0000] px-[14px] py-[5px]">
              <span className="block h-[6px] w-[6px] rounded-full bg-white" />
              <span className="skew-x-6 font-mono text-[0.62rem] font-bold tracking-[0.18em] text-white">
                ARTICLES
              </span>
            </div>
            <h1 className="m-0 font-rebel text-[clamp(3.5rem,11vw,7.5rem)] font-black italic leading-[0.86] tracking-[-0.01em] text-white">
              FIELD{" "}
              <span className="text-transparent [-webkit-text-stroke:2px_#CC0000] drop-shadow-[4px_4px_0px_rgba(204,0,0,0.2)]">
                NOTES
              </span>
            </h1>
            <div className="mt-[28px] flex flex-wrap items-end justify-between gap-[16px]">
              <span className="font-mono text-[0.62rem] tracking-[0.14em] text-[#6a6a7c]">
                — {plural(ARTICLES.length, "ARTICLE")} · {plural(ARTICLE_PROJECTS.length, "PROJECT")}
              </span>
            </div>
          </div>
        </header>

        {/* Projects */}
        <div className="mx-auto max-w-[1280px] px-[24px] pb-[64px]">
          {ARTICLE_PROJECTS.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
