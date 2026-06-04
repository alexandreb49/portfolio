export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectSpec {
  value: string;
  label: string;
}

export interface ProjectData {
  // ── identity ──────────────────────────────────────────────────────
  slug: string;   // URL slug — must match the filename: my-project.ts → /projects/my-project
  order: number;  // sort order in the project list (lower = first)

  // ── list card ─────────────────────────────────────────────────────
  logo: string;         // /img/logo-xxx.png
  logoAlt: string;
  title: string;        // full title (also used as H1 on detail page)
  description: string;  // one-liner shown in the list
  org: string;
  location: string;
  year: string;         // "2025" or "2024—2025"

  // ── detail hero ───────────────────────────────────────────────────
  eyebrow: string;      // "CFD · Machine learning · 2025"
  summary: string;      // 1–2 sentence paragraph under H1
  specs: ProjectSpec[]; // 4-cell spec grid (Organization / Location / Timeframe / Discipline)

  // ── body ──────────────────────────────────────────────────────────
  overview: string[];   // 1–3 paragraphs (Overview section)
  whatIDid: string[];   // 3–5 bullet points
  methods: string[];    // tags (Methods & tools)

  // ── images (all optional — placeholder shown when absent) ─────────
  heroImage?: ProjectImage;                  // 16:7 wide image below the hero
  gallery?: [ProjectImage, ProjectImage];    // two 4:3 images
}
