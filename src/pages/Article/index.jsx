import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { NotFoundPage } from "../NotFound";
import { ReadingProgress } from "../../components/Articles/ReadingProgress";
import { TableOfContents } from "../../components/Articles/TableOfContents";
import { ArticleMeta, ArticleTags } from "../../components/Articles/ArticleCard";
import { markdownComponents } from "../../components/Articles/markdownComponents";
import { getAdjacentArticles, getArticle } from "../../data/articles";
import { getArticleProject } from "../../data/articleProjects";
import { rehypeHeadingIds } from "../../utils/headings";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { useActiveHeading } from "../../hooks/useScrollSpy";

const MIN_TOC_ITEMS = 2;
const REMARK_PLUGINS = [remarkGfm];
const REHYPE_PLUGINS = [rehypeHeadingIds];

const BackLink = () => (
  <Link
    to="/articles"
    className="group inline-flex items-center gap-[10px] font-mono text-[0.66rem] tracking-[0.12em] text-[#8a8a9c] no-underline transition-colors duration-200 hover:text-white"
  >
    <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-[3px]">
      ←
    </span>
    ALL ARTICLES
  </Link>
);

const AdjacentLink = ({ article, direction }) => {
  const isNext = direction === "next";
  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`group block border border-white/[0.06] bg-[#0f0f0f] p-[20px_22px] no-underline transition-all duration-200 hover:border-[#CC0000]/[0.45] ${isNext ? "sm:text-right" : ""}`}
    >
      <span className="font-mono text-[0.62rem] font-bold tracking-[0.16em] text-[#ff4d4d]">
        {isNext ? "NEXT →" : "← PREVIOUS"}
      </span>
      <span className="mt-[8px] block font-rebel text-[1.35rem] font-black italic uppercase leading-[1.1] text-white">
        {article.title}
      </span>
    </Link>
  );
};

const ArticleView = ({ article }) => {
  const articleRef = useRef(null);
  const project = getArticleProject(article.project);
  const { previous, next } = getAdjacentArticles(article);
  const tocItems = article.headings.filter((heading) => heading.depth === 2);
  const showToc = tocItems.length >= MIN_TOC_ITEMS;
  const activeId = useActiveHeading(tocItems.map((item) => item.id));

  useDocumentTitle(`${article.title} — Jorge Diaz`);
  useScrollToHash();

  return (
    <>
      <Navbar />
      <ReadingProgress targetRef={articleRef} />

      <main className="bg-[#080808]">
        <div className="mx-auto max-w-[1180px] px-[24px] pt-[40px] pb-[96px] sm:pt-[56px]">
          <BackLink />

          <article ref={articleRef} aria-labelledby="article-title">
            {/* Header */}
            <header className="mt-[36px] border-b border-[#CC0000]/20 pb-[36px]">
              <div className="mb-[24px] flex flex-wrap items-center gap-[12px]">
                <span className="inline-flex -skew-x-6 bg-[#CC0000] px-[12px] py-[4px]">
                  <span className="skew-x-6 font-mono text-[0.62rem] font-bold tracking-[0.18em] text-white">
                    {(project?.name ?? article.project).toUpperCase()}
                  </span>
                </span>
                <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[#6a6a7c]">
                  FIELD NOTES
                </span>
              </div>

              <h1
                id="article-title"
                className="m-0 max-w-[22ch] font-rebel text-[clamp(2.5rem,7vw,5rem)] font-black italic uppercase leading-[0.92] tracking-[-0.005em] text-white"
              >
                {article.title}
              </h1>

              <p className="mt-[22px] mb-[26px] max-w-[60ch] font-read text-[clamp(1.125rem,2vw,1.3rem)] leading-[1.55] text-[#b4b4c2]">
                {article.summary}
              </p>

              <div className="flex flex-col gap-[14px]">
                <ArticleMeta article={article} />
                <ArticleTags tags={article.tags} />
              </div>
            </header>

            {article.cover && (
              <figure className="mt-[40px] mb-0">
                <img
                  src={article.cover}
                  alt=""
                  className="block max-h-[520px] w-full border border-white/[0.06] object-cover"
                />
              </figure>
            )}

            {/* Body + TOC */}
            <div className="mt-[48px] lg:grid lg:grid-cols-[minmax(0,68ch)_240px] lg:justify-between lg:gap-[64px]">
              <div className="min-w-0">
                {showToc && (
                  <details className="group mb-[40px] border border-white/[0.08] bg-[#0d0d0d] lg:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-[18px] py-[14px] font-mono text-[0.66rem] font-bold tracking-[0.16em] text-white [&::-webkit-details-marker]:hidden">
                      ON THIS PAGE
                      <span aria-hidden="true" className="text-[#CC0000] transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="border-t border-white/[0.06] px-[8px] py-[10px]">
                      <TableOfContents items={tocItems} activeId={activeId} />
                    </div>
                  </details>
                )}

                <div className="font-read text-[1.0625rem] leading-[1.75] text-[#c8c8d4] lg:text-[1.125rem] [&>*:first-child]:mt-0">
                  <ReactMarkdown
                    remarkPlugins={REMARK_PLUGINS}
                    rehypePlugins={REHYPE_PLUGINS}
                    components={markdownComponents}
                  >
                    {article.body}
                  </ReactMarkdown>
                </div>
              </div>

              {showToc && (
                <aside className="hidden lg:block">
                  <div className="sticky top-[100px]">
                    <p className="mt-0 mb-[14px] font-mono text-[0.62rem] font-bold tracking-[0.18em] text-[#6a6a7c]">
                      ON THIS PAGE
                    </p>
                    <TableOfContents items={tocItems} activeId={activeId} />
                  </div>
                </aside>
              )}
            </div>
          </article>

          {/* Prev / next within the project */}
          <nav
            aria-label={`More from ${project?.name ?? article.project}`}
            className="mt-[80px] border-t border-[#CC0000]/20 pt-[36px]"
          >
            {previous || next ? (
              <div className="grid gap-[10px] sm:grid-cols-2">
                <div>{previous && <AdjacentLink article={previous} direction="previous" />}</div>
                <div>{next && <AdjacentLink article={next} direction="next" />}</div>
              </div>
            ) : (
              <BackLink />
            )}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const ArticlePage = () => {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <NotFoundPage />;
  return <ArticleView key={article.slug} article={article} />;
};
