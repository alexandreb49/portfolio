// ─────────────────────────────────────────────────────────────────────────────
// PROJECT REGISTRY
// ─────────────────────────────────────────────────────────────────────────────
// To add a new project:
//   1. Create src/content/projects/my-project.ts  (copy _template.ts)
//   2. Import it here and add it to the array below
//   3. Put images in public/projects/my-project/
//
// The list is sorted by each project's `order` field automatically.
// ─────────────────────────────────────────────────────────────────────────────

import type { ProjectData } from "@/lib/project-types";

import ceramicCasting      from "./projects/ceramic-casting";
import cryogenicMachining  from "./projects/cryogenic-machining";
import nasaSpaceApps       from "./projects/nasa-space-apps";
import inductiveSensor     from "./projects/inductive-sensor";
import repas               from "./projects/repas";

export const allProjects: ProjectData[] = [
  ceramicCasting,
  cryogenicMachining,
  nasaSpaceApps,
  inductiveSensor,
  repas,
].sort((a, b) => a.order - b.order);

export function getProject(slug: string): ProjectData | undefined {
  return allProjects.find((p) => p.slug === slug);
}

/** Sorted display number "01", "02", … derived from position in the list. */
export function projectNum(slug: string): string {
  const idx = allProjects.findIndex((p) => p.slug === slug);
  return String(idx + 1).padStart(2, "0");
}

/** Next project in list order, wrapping around to null at the end. */
export function nextProject(slug: string): ProjectData | null {
  const idx = allProjects.findIndex((p) => p.slug === slug);
  return allProjects[idx + 1] ?? null;
}
