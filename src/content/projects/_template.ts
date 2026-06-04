// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW PROJECT
// ─────────────────────────────────────────────────────────────────────────────
// 1. Copy this file to src/content/projects/my-project.ts
//    The filename (without .ts) becomes the URL: /projects/my-project
//
// 2. Put your images in:
//    public/projects/my-project/hero.jpg
//    public/projects/my-project/gallery-1.jpg
//    public/projects/my-project/gallery-2.jpg
//
// 3. Open src/content/index.ts and add:
//    import myProject from "./projects/my-project";
//    Then add  myProject  to the allProjects array.
//
// That's it — the page and the list entry appear automatically.
// ─────────────────────────────────────────────────────────────────────────────

import type { ProjectData } from "@/lib/project-types";

const project: ProjectData = {
  // ── identity ──────────────────────────────────────────────────────
  slug: "my-project",       // must match the filename
  order: 99,                // position in the list (lower = earlier)

  // ── list card ─────────────────────────────────────────────────────
  logo: "/img/logo-ensam.png",
  logoAlt: "Institution name",
  title: "Project title",
  description: "One-line description shown in the project list.",
  org: "Organization",
  location: "City, FR",
  year: "2025",

  // ── detail hero ───────────────────────────────────────────────────
  eyebrow: "Discipline · Sub-discipline · Year",
  summary:
    "Two-sentence summary that appears under the H1 on the project detail page.",
  specs: [
    { value: "Organization", label: "Organization" },
    { value: "City, FR",     label: "Location" },
    { value: "2025",         label: "Timeframe" },
    { value: "Keyword",      label: "Discipline" },
  ],

  // ── body ──────────────────────────────────────────────────────────
  overview: [
    "First paragraph of the Overview section.",
    "Second paragraph (optional — delete if not needed).",
  ],
  whatIDid: [
    "First action item.",
    "Second action item.",
    "Third action item.",
    "Fourth action item.",
  ],
  methods: ["Tool A", "Tool B", "Method C"],

  // ── images (delete the fields you don't have yet) ─────────────────
  heroImage: {
    src: "/projects/my-project/hero.jpg",
    alt: "Alt text for the hero image",
    caption: "FIG. 01 — Description of what the image shows",
  },
  gallery: [
    {
      src: "/projects/my-project/gallery-1.jpg",
      alt: "Alt text",
      caption: "FIG. 02 — Description",
    },
    {
      src: "/projects/my-project/gallery-2.jpg",
      alt: "Alt text",
      caption: "FIG. 03 — Description",
    },
  ],
};

export default project;
