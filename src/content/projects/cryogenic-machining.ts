import type { ProjectData } from "@/lib/project-types";

const project: ProjectData = {
  slug: "cryogenic-machining",
  order: 3,

  logo: "/img/ensam.png",
  logoAlt: "Arts et Métiers",
  title: "Material & machining research project",
  description:
    "A 10-week study on cryogenic-assistance effects on tool wear when machining Bulk Metallic Glass.",
  org: "Arts & Métiers",
  location: "Angers, FR",
  year: "2025",

  eyebrow: "Materials · Machining · 2025",
  summary:
    "A 10-week experimental study on how cryogenic assistance affects tool wear when machining Bulk Metallic Glass — a notoriously difficult-to-cut advanced material.",
  specs: [
    { value: "Arts & Métiers", label: "Organization" },
    { value: "Angers, FR",     label: "Location" },
    { value: "10 weeks",       label: "Duration" },
    { value: "Cryo · BMG",     label: "Focus" },
  ],

  overview: [
    "Bulk Metallic Glass (BMG) offers exceptional mechanical properties but is challenging to machine — its behaviour under cutting can accelerate tool wear and limit surface quality. Cryogenic assistance, where the cutting zone is cooled to very low temperatures, is a promising route to mitigate this.",
    "Over a focused 10-week study I investigated how cryogenic assistance influences tool wear during BMG machining, comparing cooled and conventional conditions and characterizing the resulting wear behaviour.",
  ],
  whatIDid: [
    "Designed a 10-week experimental protocol around cryogenic assistance.",
    "Ran machining trials on Bulk Metallic Glass samples.",
    "Measured and characterized tool wear across conditions using SEM analysis.",
    "Analyzed the effect of cryogenic cooling on wear behaviour and chip morphology.",
  ],
  methods: ["Experimental design", "Cryogenic machining", "Tool-wear analysis", "SEM microscopy", "Materials science", "Metrology"],

  heroImage: {
    src: "/projects/bmg/c02-supercritique-usinage.png",
    alt: "Cryogenically-assisted CNC milling setup with coolant nozzle",
    caption: "FIG. 01 — Cryogenically-assisted milling setup (CO₂ / cryo coolant nozzle)",
  },
  gallery: [
    {
      src: "/projects/bmg/cryo-30.png",
      alt: "SEM image of tool chip — cryogenic condition",
      caption: "FIG. 02 — SEM cross-section of tool chip — cryogenic condition (30°)",
    },
    {
      src: "/projects/bmg/sec-30.png",
      alt: "SEM image of tool chip — dry condition",
      caption: "FIG. 03 — SEM cross-section of tool chip — dry condition (30°)",
    },
  ],
};

export default project;
