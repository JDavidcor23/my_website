/* Projects that have an articles section. `id` must match the folder name
   in src/content/articles/<id>/ and the `project` field in each article. */
export const ARTICLE_PROJECTS = [
  {
    id: "pixelforge",
    name: "PixelForge",
    tagline:
      "PixelForge is a specialized game development engine designed to harmonize the charm of classic 16x16 pixel art with the efficiency of artificial intelligence.",
    repo: "https://github.com/JDavidcor23/pixelforge",
    live: "https://pixelforge-teal.vercel.app/",
  },
];

export const getArticleProject = (id) =>
  ARTICLE_PROJECTS.find((project) => project.id === id);
