import ProjectLayout from "../_components/ProjectLayout";
import { Construction } from "lucide-react";

export default function NasaSpaceAppsPage() {
  return (
    <ProjectLayout
      slug="nasa-space-apps"
      year="2023"
      title="NASA Space Apps Challenge"
      tags={["Python", "Machine learning", "Satellite data", "Signal analysis", "Data pipeline", "Teamwork"]}
    >

      <section className="detail-body">
        <div className="wrap detail-cols">

          <div>
            <p className="block-head">// Overview</p>
            <p>
              NASA's DSCOVR satellite sits at the L1 Lagrange point and streams measurements used
              to monitor space weather. The challenge: extract meaningful signal from that data stream
              using machine learning, under the time pressure of the NASA Space Apps hackathon.
            </p>
            <p>
              Working remotely with a small team, I developed a Python-based machine-learning
              algorithm to analyze the DSCOVR dataset, building the full pipeline from raw data to
              model output within the event window.
            </p>
          </div>

          <div>
            <p className="block-head">// What I did</p>
            <ul className="did-list">
              <li data-n="01">Explored and cleaned the DSCOVR and ACE satellite datasets (2016–2020).</li>
              <li data-n="02">Engineered features relevant to the space-weather signal.</li>
              <li data-n="03">Built and trained a Python machine-learning model to predict IMF components.</li>
              <li data-n="04">Evaluated results and presented within the hackathon window.</li>
            </ul>
          </div>

        </div>
      </section>

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
