import ProjectLayout from "../_components/ProjectLayout";
import { Construction } from "lucide-react";

export default function CeramicCastingPage() {
  return (
    <ProjectLayout
      slug="ceramic-casting"
      year="2026"
      title="Ceramic casting simulation using neural networks"
      tags={["CFD", "Machine learning", "Neural networks", "Surrogate modeling", "Optimization", "Python"]}
    >

      {/* Body */}
      <section className="detail-body">
        <div className="wrap detail-cols">

          <div>
            <p className="block-head">// Overview</p>
            <p>
              The ceramic casting process is highly sensitive to thermal and flow conditions, and
              high-fidelity CFD captures that behaviour at the cost of long, expensive solver runs.
              This project set out to keep that physical accuracy while making the design loop fast
              enough to actually iterate on.
            </p>
            <p>
              I ran a campaign of CFD computations across the casting parameter space, then trained
              neural-network surrogate models on the resulting dataset. The trained models reproduce
              the solver's key outputs in a fraction of the time, making parameter optimization and
              what-if exploration practical.
            </p>
          </div>

          <div>
            <p className="block-head">// What I did</p>
            <ul className="did-list">
              <li data-n="01">Set up and ran CFD computations for the ceramic casting simulation.</li>
              <li data-n="02">Built a structured dataset from the simulation campaign.</li>
              <li data-n="03">Trained neural-network surrogate models on the CFD outputs.</li>
              <li data-n="04">Used the surrogates to optimize process parameters and cut iteration time.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Work in progress */}
      <section className="wrap wip-section">
        <hr className="wip-line" />
        <p className="wip-banner">
          <Construction className="wip-icon" strokeWidth={1.5} />
          Work in progress
        </p>
      </section>

    </ProjectLayout>
  );
}
