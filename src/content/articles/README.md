# Articles — authoring guide

This README is **not** published. The site only loads files that live inside a
project folder (`<project>/<slug>.md`), and it skips any file named `README.md`
or starting with `_` (useful for templates).

## 1. Where the file goes

```
src/content/articles/
└── pixelforge/            ← project id (must exist in src/data/articleProjects.js)
    └── your-slug-here.md  ← the file name is the URL: /articles/your-slug-here
```

- The slug comes from the file name. Use lowercase and dashes.
- Slugs must be **unique across all projects** (the URL has no project segment).
  A duplicate is skipped and a warning shows in the dev console.
- New project? Add an entry to `src/data/articleProjects.js` (`id`, `name`,
  `tagline`, `repo`, `live`) and create a folder with the same `id`.

## 2. Frontmatter

Every article starts with a frontmatter block. Format example only:

```md
---
title: "Your title here"
summary: "One or two sentences shown on the card and under the title."
date: 2026-01-31
project: pixelforge
tags: [tag-one, tag-two]
cover: /images/articles/pixelforge/your-cover.png
draft: true
---
```

| Field     | Required | Notes |
| --------- | -------- | ----- |
| `title`   | yes      | Shown uppercase in the rebel font. Do not repeat it as `# h1` in the body. |
| `summary` | yes      | Card text + subtitle on the article page. |
| `date`    | yes      | `YYYY-MM-DD`. Articles are sorted newest first. |
| `project` | no       | Defaults to the folder name. |
| `tags`    | no       | `[a, b]` or a YAML list (`- a` on the next lines). |
| `cover`   | no       | Image URL. Decorative (no alt), shown under the header. |
| `draft`   | no       | `true` = visible in `npm run dev`, hidden in production builds. |

Values can be bare or quoted. Quote anything that contains a colon (`:`).
Nested objects and multi-line strings are **not** supported by the parser.

Reading time is calculated automatically (~220 words per minute, code blocks
excluded).

## 3. Body structure

- Use `##` for sections — every `##` becomes an entry in the table of contents
  (the TOC appears when there are 2 or more). Use `###` for sub-sections.
- Every `##`/`###` gets an anchor id from its text, so you can link to it:
  `[see the section](#your-section-heading)`.
- Links starting with `/` stay inside the site; `http…` links open in a new tab.
- Tables, strikethrough, task lists and footnotes work (GitHub-flavored markdown).

## 4. Images

1. Put the file in `public/images/articles/<project>/` (or use a Cloudinary URL).
2. Reference it with an absolute path. **Alt text is required** — it is read by
   screen readers and is also shown as the figure caption:

```md
![Short description of what the image shows](/images/articles/pixelforge/your-image.png)
```

Put the image on its own line (blank line before and after) so it renders as a
full-width figure.

## 5. Diagrams

Simple diagrams are written as plain text inside a fenced block with the
`text` language. They render in monospace on a grid, never wrap, and scroll
horizontally on small screens:

````md
```text
[ box a ] ──► [ box b ] ──► [ box c ]
```
````

- Keep lines under ~80 characters so they fit on desktop without scrolling.
- Screen readers read the characters literally, so explain the diagram in the
  paragraph before or after it.
- Any other language (`ts`, `rust`, `bash`…) renders as a code block labelled
  with that language (no syntax highlighting).
- For a complex diagram, export an image (SVG/PNG) and use section 4 instead.

## 6. Callouts

A blockquote renders as a red callout box. Start it with a bold label:

```md
> **TL;DR:** your one-line takeaway here.

> **Note:** a side remark here.
```

## 7. Checklist before publishing

- [ ] File is in `src/content/articles/<project>/` and the slug is unique.
- [ ] `title`, `summary` and `date` are filled in.
- [ ] Every image has meaningful alt text.
- [ ] Every text diagram is explained in prose.
- [ ] `draft: true` removed (or set to `false`).
