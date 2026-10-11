import { extractHeadings } from "../utils/headings";

/* ── Articles loader ──────────────────────────────────────────────────────
   Markdown lives in src/content/articles/<project>/<slug>.md
   See src/content/articles/README.md for the authoring guide.
   ───────────────────────────────────────────────────────────────────── */

const WORDS_PER_MINUTE = 220;
/* Only <project>/<slug>.md — the root README never reaches the bundle. */
const RAW_FILES = import.meta.glob("../content/articles/*/*.md", { as: "raw", eager: true });

const ARTICLE_PATH = /\/content\/articles\/([^/]+)\/([^/]+)\.md$/;
const IGNORED_FILE = /^(_|readme$)/i;
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/;
const FENCED_BLOCK = /(```|~~~)[\s\S]*?\1/g;
const REQUIRED_FIELDS = ["title", "summary", "date"];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const warn = (message) => {
  if (import.meta.env.DEV) console.warn(`[articles] ${message}`);
};

/* ── Tiny frontmatter parser ─────────────────────────────────────────── */
const unquote = (value) => {
  const quoted = value.match(/^(["'])([\s\S]*)\1$/);
  return quoted ? quoted[2] : value;
};

const parseScalar = (raw) => {
  const value = raw.trim();
  if (value === "true") return true;
  if (value === "false") return false;
  return unquote(value);
};

const parseValue = (raw) => {
  const value = raw.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map(parseScalar)
      .filter((item) => item !== "");
  }
  return parseScalar(value);
};

export const parseFrontmatter = (source) => {
  const match = source.match(FRONTMATTER);
  if (!match) return { data: {}, body: source };

  const data = {};
  let listKey = null;

  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && listKey) {
      data[listKey].push(parseScalar(listItem[1]));
      continue;
    }

    const pair = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!pair) continue;

    const [, key, rawValue] = pair;
    if (rawValue.trim() === "") {
      data[key] = [];
      listKey = key;
    } else {
      data[key] = parseValue(rawValue);
      listKey = null;
    }
  }

  return { data, body: match[2] };
};

/* ── Helpers ─────────────────────────────────────────────────────────── */
const toList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

const readingTimeOf = (body) => {
  const words = body.replace(FENCED_BLOCK, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

const toArticle = (path, source) => {
  const location = path.match(ARTICLE_PATH);
  if (!location || IGNORED_FILE.test(location[2])) return null;

  const [, folder, slug] = location;
  const { data, body } = parseFrontmatter(source);

  const missing = REQUIRED_FIELDS.filter((field) => !data[field]);
  if (missing.length) {
    warn(`${path} skipped — missing frontmatter: ${missing.join(", ")}`);
    return null;
  }
  if (!ISO_DATE.test(data.date)) {
    warn(`${path} skipped — date must be YYYY-MM-DD, got "${data.date}"`);
    return null;
  }

  return {
    slug,
    project: data.project || folder,
    title: data.title,
    summary: data.summary,
    date: data.date,
    tags: toList(data.tags),
    cover: data.cover || null,
    draft: data.draft === true,
    body,
    readingTime: readingTimeOf(body),
    headings: extractHeadings(body),
  };
};

const loadArticles = () => {
  const bySlug = new Map();

  Object.entries(RAW_FILES).forEach(([path, source]) => {
    const article = toArticle(path, source);
    if (!article) return;
    if (article.draft && import.meta.env.PROD) return;
    if (bySlug.has(article.slug)) {
      warn(`duplicate slug "${article.slug}" in ${path} — slugs must be unique across projects`);
      return;
    }
    bySlug.set(article.slug, article);
  });

  return [...bySlug.values()].sort((a, b) => b.date.localeCompare(a.date));
};

/* Newest first. */
export const ARTICLES = loadArticles();

export const getArticle = (slug) => ARTICLES.find((article) => article.slug === slug);

export const getArticlesByProject = (projectId) =>
  ARTICLES.filter((article) => article.project === projectId);

/* previous = older, next = newer — within the same project. */
export const getAdjacentArticles = (article) => {
  const siblings = getArticlesByProject(article.project);
  const index = siblings.findIndex((item) => item.slug === article.slug);
  return {
    previous: siblings[index + 1] ?? null,
    next: siblings[index - 1] ?? null,
  };
};

export const formatArticleDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00Z`)
    .toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "short", day: "2-digit" })
    .toUpperCase();
