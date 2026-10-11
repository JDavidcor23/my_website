/* ── Heading ids shared by the TOC (built from markdown source) and the
      rendered article (built from the HTML tree). Both sides MUST use the
      same slugger so the TOC links land on the right heading. ─────────── */

const FALLBACK_SLUG = "section";
const FENCE = /^\s*(```|~~~)/;
const HEADING = /^(#{2,3})\s+(.+?)\s*#*\s*$/;
const MARKDOWN_LINK = /!?\[([^\]]*)\]\([^)]*\)/g;
const INLINE_MARKERS = /(\*\*|__|~~|`|\*)/g;

export const slugify = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || FALLBACK_SLUG;

export const createSlugger = () => {
  const seen = new Map();
  return (text) => {
    const base = slugify(text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  };
};

/* h2 + h3 from the raw markdown, skipping fenced code blocks. */
export const extractHeadings = (markdown) => {
  const slug = createSlugger();
  const headings = [];
  let inFence = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (FENCE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = line.match(HEADING);
    if (!match) continue;

    const text = match[2].replace(MARKDOWN_LINK, "$1");
    headings.push({
      depth: match[1].length,
      text: text.replace(INLINE_MARKERS, ""),
      id: slug(text),
    });
  }

  return headings;
};

/* Tiny rehype plugin: gives every h2/h3 a stable id (no extra deps). */
const textOf = (node) =>
  node.type === "text" ? node.value : (node.children || []).map(textOf).join("");

export const rehypeHeadingIds = () => (tree) => {
  const slug = createSlugger();
  const visit = (node) => {
    if (node.type === "element" && (node.tagName === "h2" || node.tagName === "h3")) {
      node.properties = { ...node.properties, id: slug(textOf(node)) };
    }
    (node.children || []).forEach(visit);
  };
  visit(tree);
};
