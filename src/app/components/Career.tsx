const items = [
  {
    year: "2026",
    current: true,
    where: "Safran Aerosystems · Compiègne, FR",
    title: "Mechanical & R&D Engineering Intern",
    bullets: [
      "Developed a test bench for a hydrogen aircraft engine — designed the fluid routing architecture (H₂, He, N₂), ran mechanical stress and vibratory analyses in CAEPipe, and created 3D models using CATIAV5.",
      "Studied hydrogen embrittlement in steel alloys through microstructural analysis of tubes, sheets, and bellows to quantify hydrgogen's impact on component lifespan .",
    ],
  },
  {
    year: "2025",
    where: "Arts & Métiers · Angers, FR",
    title: "Engineering Consultant",
    bullets: [
      "Scaffold companies needed faster sizing tools. I built REPAS, a desktop POC that performs nodal structural computation to size scaffolds, computes static and vibratory loads, and renders results in an interactive 3D scene (Tauri, React, Three.js, Rust, Python FEA).",
    ],
  },
  {
    year: "2024",
    where: "APMA · Angers, FR",
    title: "Production Intern",
    bullets: [
      "I spent a month on the production floor doing machining on aerospace metallic components, then trained in part metrology to inspect and validate dimensional conformity on aeronautical parts.",
    ],
  },
];

export default function Career() {
  return (
    <section className="section-pad" id="career" style={{ paddingBlockStart: "clamp(20px, 3vh, 40px)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Experience</h2>
          <span className="section-index">[ 02 / PROFESSIONAL TRACK ]</span>
        </div>

        <div className="timeline reveal">
          {items.map((item) => (
            <div
              key={item.title}
              className={`timeline-item${item.current ? " is-current" : ""}`}
            >
              <div className="timeline-year">
                {item.year}
                {item.current && <span className="now">NOW</span>}
              </div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-where">{item.where}</div>
              <ul className="xp-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
