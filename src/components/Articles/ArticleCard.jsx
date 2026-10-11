import { Link } from "react-router-dom";
import { formatArticleDate } from "../../data/articles";

export const ArticleMeta = ({ article, className = "" }) => (
  <div className={`flex flex-wrap items-center gap-x-[10px] gap-y-[4px] font-mono text-[0.66rem] tracking-[0.12em] text-[#8a8a9c] ${className}`}>
    <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
    <span aria-hidden="true" className="text-[#CC0000]">/</span>
    <span>{article.readingTime} MIN READ</span>
    {article.draft && (
      <span className="bg-[#CC0000] px-[6px] text-white tracking-[0.14em]">DRAFT</span>
    )}
  </div>
);

export const ArticleTags = ({ tags }) =>
  tags.length ? (
    <ul className="m-0 flex list-none flex-wrap gap-[6px] p-0" aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-white/[0.08] px-[9px] py-[2px] font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[#8a8a9c]"
        >
          {tag}
        </li>
      ))}
    </ul>
  ) : null;

export const ArticleCard = ({ article }) => (
  <li>
    <Link
      to={`/articles/${article.slug}`}
      className="group relative block border border-white/[0.05] bg-[#0f0f0f] p-[24px_24px_22px] no-underline transition-all duration-200 hover:border-[#CC0000]/[0.45] hover:bg-[#111111] before:absolute before:left-[-1px] before:top-[-1px] before:bottom-[-1px] before:w-[3px] before:origin-top before:scale-y-0 before:bg-[#CC0000] before:transition-transform before:duration-200 before:content-[''] hover:before:scale-y-100 motion-reduce:before:transition-none"
    >
      <div className="flex items-start justify-between gap-[16px]">
        <ArticleMeta article={article} />
        <span
          aria-hidden="true"
          className="font-mono text-[0.8rem] text-[#CC0000] transition-transform duration-200 group-hover:translate-x-[4px] motion-reduce:transition-none"
        >
          →
        </span>
      </div>
      <h3 className="mt-[12px] mb-[10px] font-rebel text-[clamp(1.45rem,3vw,1.9rem)] font-black italic uppercase leading-[1.05] tracking-[0.01em] text-white">
        {article.title}
      </h3>
      <p className="mb-[16px] max-w-[62ch] font-read text-[1rem] leading-[1.6] text-[#b4b4c2]">
        {article.summary}
      </p>
      <ArticleTags tags={article.tags} />
    </Link>
  </li>
);
