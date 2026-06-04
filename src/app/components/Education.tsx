import RocketScene from "./RocketScene";

const items = [
  {
    years: "2023 — 2026",
    school: "Arts et Métiers",
    where: "Bordeaux, FR",
    degree: "Master of Science in Aerospace Engineering",
    tags: [
      "Aerospace systems & propulsion",
      "Composite material design",
      "Fluid dynamics",
      "Fatigue in aeronautical components",
      "Mechanical vibration analysis",
    ],
  },
  {
    years: "2021 — 2023",
    school: "ESEO",
    where: "Angers, FR",
    degree: "Intensive Undergraduate in Mathematics and Physics",
    tags: ["Advanced calculus", "Thermodynamics", "Computer science"],
  },
  {
    years: "2020 — 2021",
    school: "University of Angers",
    where: "Angers, FR",
    degree: "Technical Degree in Machining and Mechanical Design",
    tags: ["Solid Mechanics", "Machining", "Technical drawing", "CAD"],
  }
];

export default function Education() {
  return (
    <section className="section-pad" id="education">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Education</h2>
          <span className="section-index">[ 03 / ACADEMIC TRACK ]</span>
        </div>
        <div className="edu-split">
          {/* ── Left — education list ── */}
          <div className="edu-list">
            {items.map((item) => (
              <div key={item.degree} className="edu-item reveal">
                <div className="edu-left">
                  <div className="edu-when">{item.years}</div>
                  <div className="edu-school">{item.school}</div>
                  <div className="edu-where">{item.where}</div>
                </div>
                <div className="edu-right">
                  <div className="edu-deg">{item.degree}</div>
                  <div className="edu-course">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right — rocket stage ── */}
          <aside className="edu-rocket reveal">
            <div className="edu-rocket-stage">
              <RocketScene />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
