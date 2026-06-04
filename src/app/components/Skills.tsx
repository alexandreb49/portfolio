const columns = [
  {
    code: "SYS·01",
    title: "Mechanical design",
    items: [
      { name: "CAD modeling",         sw: ["CATIA", "SolidWorks"] },
      { name: "Assemblies & DFM",     sw: ["SolidWorks"] },
      { name: "Technical drawing",    sw: [] },
      { name: "Fluid mechanics",      sw: [] },
      { name: "Thermal calculations", sw: [] },
    ],
  },
  {
    code: "SYS·02",
    title: "Simulation & analysis",
    items: [
      { name: "CFD",               sw: [ "OpenFOAM", "StarCCM+"] },
      { name: "FEA / structural",  sw: ["ABAQUS", "CAEPipe"] },
      { name: "Fatigue analysis",  sw: [] },
      { name: "Vibration analysis", sw: [] },
    ],
  },
  {
    code: "SYS·03",
    title: "Programming & software",
    items: [
      { name: "Machine learning",    sw: ["Python", "TensorFlow", "NumPy"] },
      { name: "Data analysis",       sw: ["Python", "Pandas"] },
      { name: "Programming", sw: ["Rust", "Tauri"] },
      { name: "Web development",     sw: ["JavaScript", "Next.js"] },
      { name: "Systems and environment",              sw: ["Docker", "Linux", "Git"] },
      { name: "Databases",           sw: ["SQL"] },
    ],
  },
];

const uniq = (a: string[]) => [...new Set(a)];
const stackOf = (col: (typeof columns)[number]) =>
  uniq(col.items.flatMap((it) => it.sw));

export default function Skills() {
  return (
    <section className="section-pad" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Skills &amp; tools</h2>
          <span className="section-index">[ 04 / CAPABILITY ]</span>
        </div>

        <div className="clusters reveal">
          {columns.map((col) => (
            <div key={col.title} className="cluster">

              <div className="cl-label">
                <span className="cl-bar" />
                <span>
                  <div className="cl-code">{col.code}</div>
                  <div className="cl-title">{col.title}</div>
                </span>
              </div>

              <div className="cl-right">
                <div className="chips">
                  {col.items.map((it) => (
                    <span key={it.name} className="chip">{it.name}</span>
                  ))}
                </div>

                {stackOf(col).length > 0 && (
                  <div className="inv">
                    <span className="inv-key">Software</span>
                    <div className="inv-chips">
                      {stackOf(col).map((t) => (
                        <span key={t} className="inv-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
