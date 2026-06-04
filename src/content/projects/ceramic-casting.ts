import type { ProjectData } from "@/lib/project-types";

const project: ProjectData = {
  slug: "ceramic-casting",
  order: 1,

  logo: "/img/apma.png",
  logoAlt: "APMA",
  title: "Ceramic casting simulation using neural networks",
  description:
    "CFD computations for ceramic casting simulations, optimized with neural-network surrogate models to cut iteration time.",
  org: "APMA",
  location: "Angers, FR",
  year: "2026",

  eyebrow: "CFD · Machine learning · 2025—2026",
  summary:
    "Coupling computational fluid dynamics with neural-network surrogate models to predict and optimize the ceramic casting process — trading hours of solver time for near-instant predictions.",
  specs: [
    { value: "APMA",       label: "Organization" },
    { value: "Angers, FR", label: "Location" },
    { value: "2025—2026",  label: "Timeframe" },
    { value: "CFD + ML",   label: "Discipline" },
  ],

  overview: [
    "The ceramic casting process is highly sensitive to thermal and flow conditions, and high-fidelity CFD captures that behaviour at the cost of long, expensive solver runs. This project set out to keep that physical accuracy while making the design loop fast enough to actually iterate on.",
    "I ran a campaign of CFD computations across the casting parameter space, then trained neural-network surrogate models on the resulting dataset. The trained models reproduce the solver's key outputs in a fraction of the time, which makes parameter optimization and what-if exploration practical.",
  ],
  whatIDid: [
    "Set up and ran CFD computations for the ceramic casting simulation.",
    "Built a structured dataset from the simulation campaign.",
    "Trained neural-network models on the CFD outputs.",
    "Optimized process parameters and cut iteration time.",
  ],
  methods: ["CFD", "Python", "Neural networks"],
};

export default project;
