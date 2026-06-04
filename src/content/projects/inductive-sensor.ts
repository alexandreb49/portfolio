import type { ProjectData } from "@/lib/project-types";

const project: ProjectData = {
  slug: "inductive-sensor",
  order: 4,

  logo: "/img/eseo.png",
  logoAlt: "ESEO",
  title: "Inductive sensor for vehicle detection",
  description:
    "Design and testing of an inductive coil sensor system to detect vehicles, with circuit prototyping and MATLAB signal analysis.",
  org: "ESEO",
  location: "Angers, FR",
  year: "2024",

  eyebrow: "Electronics · Signal processing · 2024",
  summary:
    "Design and experimental validation of an inductive sensor system capable of detecting the presence and passage of vehicles — from circuit design and physical prototyping to MATLAB signal analysis.",
  specs: [
    { value: "ESEO",           label: "Organization" },
    { value: "Angers, FR",     label: "Location" },
    { value: "2024",           label: "Year" },
    { value: "Electronics · Signal", label: "Discipline" },
  ],

  overview: [
    "Inductive sensors detect metallic objects by measuring perturbations in an oscillating magnetic field. Embedding them in road surfaces to detect vehicles is a well-established technique — but understanding the physics and building a working prototype from scratch is a different challenge.",
    "The project covered the full chain: designing the resonant circuit, building a bench prototype with inductive coils, and using MATLAB to analyze the magnetic field response. The system successfully identified vehicle arrival and departure events from the measured B-field versus time curve.",
  ],
  whatIDid: [
    "Designed a resonant RLC detection circuit and selected components.",
    "Built and assembled the inductive coil prototype on a lab bench.",
    "Measured the magnetic field response during vehicle presence and modeled the transfer function.",
    "Analyzed frequency response using a Bode diagram in MATLAB — before and after perturbation.",
  ],
  methods: ["Circuit design", "Inductive sensing", "MATLAB", "Signal analysis", "Prototyping", "Bode analysis"],

  heroImage: {
    src: "/projects/inductive-sensor/DETECTION_VEHICULE.png",
    alt: "Magnetic field vs time showing vehicle arrival and departure",
    caption: "FIG. 01 — Magnetic field (B in µT) vs time — vehicle detection signal",
  },
  gallery: [
    {
      src: "/projects/inductive-sensor/CIRCUIT_PROTOTYPE.png",
      alt: "Inductive coil prototype assembled on lab bench",
      caption: "FIG. 02 — Bench prototype — inductive coil circuit",
    },
    {
      src: "/projects/inductive-sensor/matlab_simulation.png",
      alt: "Bode diagram showing transfer function before and after perturbation",
      caption: "FIG. 03 — Bode diagram — transfer function before and after perturbation",
    },
  ],
};

export default project;
