import type { ProjectData } from "@/lib/project-types";

const project: ProjectData = {
  slug: "repas",
  order: 2,

  logo: "/img/ensam.png",
  logoAlt: "Arts et Métiers",
  title: "3D structural analysis software",
  description:
    "Desktop application for interactive 3D finite element structural analysis, built from scratch with simulation, result visualization and export.",
  org: "Arts & Métiers",
  location: "Angers, FR",
  year: "2025",

  eyebrow: "Software · FEM · Structures · 2025",
  summary:
    "A full desktop application for 3D structural analysis using finite element methods — covering node/element definition, boundary conditions, force application, simulation and exportable results.",
  specs: [
    { value: "Arts & Métiers", label: "Organization" },
    { value: "Angers, FR",     label: "Location" },
    { value: "2025",           label: "Year" },
    { value: "FEM · Structures", label: "Discipline" },
  ],

  overview: [
    "REPAS is a desktop structural analysis application built around a 3D finite element solver. The interface guides the user through each step of a structural study: defining geometry and element types, assigning boundary conditions, applying forces, running the simulation and reviewing results.",
    "The software was designed with a \"Mode Rapide\" (quick mode) to streamline the common workflow, while retaining full parameter control. Results and geometry can be exported for further post-processing.",
  ],
  whatIDid: [
    "Designed and implemented the full GUI in a rapid-mode / expert-mode layout.",
    "Built the 3D FEM solver for structural analysis under applied loads and boundary conditions.",
    "Implemented result visualization with force and displacement display in 3D.",
    "Added simulation, results review and export pipeline.",
  ],
  methods: ["Finite element analysis", "Structural mechanics", "3D visualization", "Software architecture", "GUI design"],

  heroImage: {
    src: "/projects/repas/software_repas.png",
    alt: "REPAS application showing a 3D structural model with forces",
    caption: "FIG. 01 — REPAS — 3D structural analysis interface (Mode Rapide)",
  },
};

export default project;
