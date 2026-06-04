import type { ProjectData } from "@/lib/project-types";

const project: ProjectData = {
  slug: "nasa-space-apps",
  order: 5,

  logo: "/img/nasa.png",
  logoAlt: "NASA Space Apps",
  title: "NASA Space Apps Challenge",
  description:
    "A Python-based machine-learning algorithm to analyze DSCOVR satellite data for space-weather signals.",
  org: "NASA",
  location: "Remote",
  year: "2023",

  eyebrow: "Hackathon · Machine learning · 2023",
  summary:
    "A Python-based machine-learning algorithm to analyze data from NASA's DSCOVR satellite — turning a raw space-weather feed into usable signal during a global 48-hour hackathon.",
  specs: [
    { value: "NASA",       label: "Organization" },
    { value: "Remote",     label: "Location" },
    { value: "2023",       label: "Year" },
    { value: "ML · DSCOVR", label: "Focus" },
  ],

  overview: [
    "NASA's DSCOVR satellite sits at the L1 Lagrange point and streams measurements used to monitor space weather. The challenge: extract meaningful signal from that data stream using machine learning, under the time pressure of the NASA Space Apps hackathon.",
    "Working remotely with a small team, I developed a Python-based machine-learning algorithm to analyze the DSCOVR dataset, building the full pipeline from raw data to model output within the event window.",
  ],
  whatIDid: [
    "Explored and cleaned the DSCOVR and ACE satellite datasets (2016–2020).",
    "Engineered features relevant to the space-weather signal.",
    "Built and trained a Python machine-learning model to predict IMF components.",
    "Evaluated results and presented within the hackathon window.",
  ],
  methods: ["Python", "Machine learning", "Satellite data", "Signal analysis", "Data pipeline", "Teamwork"],

  heroImage: {
    src: "/img/space_app_challenge.jpg",
    alt: "DSCOVR satellite view of Earth with the Moon passing in front",
    caption: "FIG. 01 — DSCOVR/EPIC camera — Earth and Moon at L1",
  },
  gallery: [
    {
      src: "/projects/space-app-challenge/data_flow.png",
      alt: "ML pipeline architecture diagram",
      caption: "FIG. 02 — ML pipeline — ACE/DSCOVR data extraction to predictions",
    },
    {
      src: "/projects/space-app-challenge/output.png",
      alt: "IMF Z-component: predicted vs real values",
      caption: "FIG. 03 — IMF Z-component: predicted (blue) vs real values (orange)",
    },
  ],
};

export default project;
