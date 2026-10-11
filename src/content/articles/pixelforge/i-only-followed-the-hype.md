---
title: "I Only Followed the Hype — Then I Measured It"
summary: "I learned that the language is not always the problem. Often, the problem is what you need to build and where it runs."
date: 2026-10-11
project: pixelforge
tags: [nextjs, vite, rust, webassembly, monorepo]
draft: false
---

## What made me want to change it?

I saw posts on LinkedIn about big projects moving to Rust and WebAssembly, like ArtCraft, a Photoshop-like app written in Rust, and many JavaScript tools like Turbopack and Rolldown. I wondered why my project was so slow when I put many things on the canvas. So I tried to move part of my project to Rust with WebAssembly.

## How did my project work before?

Before, my project was one single Next.js app that did everything. It had two parts: the landing page and the editor.

## What was the real problem?

The editor is a full app with many parts: the canvas, drawing tools, music, and in the future the compiler and the assets. Next.js is great for my landing page because it handles SEO, fast first loading and indexing. But the editor runs only in the browser, so those strengths don't help it. My idea was to build a bridge between JavaScript and WebAssembly: WebAssembly does the heavy work, and JavaScript only manages the view.

## Did I think about other options?

At the time, I didn't think about other options. I only followed the hype. Looking back, the editor needs different things: it manages all the work to draw the canvas and put all the pieces on it, and the server can't do that work. My plan was that WebAssembly does the heavy work, and JavaScript only paints the result. The landing page is different: it needs Google and a fast first load, and Next.js does that very well, so I kept it there.

## What did I do?

So I split my project into a monorepo, one repository with separate apps:

- **apps/landing** is the Next.js app. It manages the SEO of the landing page.
- **apps/editor** is the editor with all its tools. It's built with Vite, React and TypeScript.
- **packages/core** is the Rust code, compiled to WebAssembly.

```text
BEFORE                          AFTER (one repo, separate apps)
┌──────────────────────┐        ┌─────────────────┐   ┌──────────────────────┐
│   One Next.js app    │        │ apps/landing    │   │ apps/editor          │
│  - landing page      │  ───▶  │ Next.js (SEO)   │   │ Vite + React + TS    │
│  - editor            │        └─────────────────┘   └──────────┬───────────┘
└──────────────────────┘                                         │ heavy work
                                                     ┌───────────▼───────────┐
                                                     │ packages/core         │
                                                     │ Rust → WebAssembly    │
                                                     └───────────────────────┘
```

## What did it cost?

Rust is a new language to learn and maintain. It's harder because there is a bridge between Rust and JavaScript, the language I've used my whole career, and I also have to follow Rust's rules and good practices.

## What surprised me?

The number that surprised me most was the memory to undo a 1-pixel stroke: from 576 KB to just 8 bytes. It was amazing to see. Before, every undo step saved a copy of the whole drawing. Now it saves only the part that changed, and this happened in TypeScript, without Rust. Rust was 3.6× faster at reducing colors, but slower for drawing with the pencil, so TypeScript is still the default.

## What did I learn?

I learned that the language is not always the problem. Often, the problem is what you need to build and where it runs, and how you store your data.

My advice: measure first, then decide where Rust really helps.

---

Want to see where each piece lives in the code? Read the [code map in the PixelForge repository](https://github.com/JDavidcor23/pixelforge/blob/master/docs/architecture/code-map.md).
