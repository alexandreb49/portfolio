import ProjectLayout from "../_components/ProjectLayout";
import { Construction } from "lucide-react";

export default function InductiveSensorPage() {
  return (
    <ProjectLayout
      slug="inductive-sensor"
      year="2024"
      title="Inductive sensor for vehicle detection"
      tags={["Circuit design", "Inductive sensing", "MATLAB", "Signal analysis", "Prototyping", "Bode analysis"]}
    >

      <section className="detail-body">
        <div className="wrap detail-cols">

          <div>
            <p className="block-head">// Overview</p>
            <p>
              Inductive sensors detect metallic objects by measuring perturbations in an oscillating
              magnetic field. Embedding them in road surfaces to detect vehicles is a well-established
              technique — but understanding the physics and building a working prototype from scratch
              is a different challenge.
            </p>
            <p>
              The project covered the full chain: designing the resonant circuit, building a bench
              prototype with inductive coils, and using MATLAB to analyze the magnetic field response.
              The system successfully identified vehicle arrival and departure events from the measured
              B-field versus time curve.
            </p>
          </div>

          <div>
            <p className="block-head">// What I did</p>
            <ul className="did-list">
              <li data-n="01">Designed a resonant RLC detection circuit and selected components.</li>
              <li data-n="02">Built and assembled the inductive coil prototype on a lab bench.</li>
              <li data-n="03">Measured the magnetic field response during vehicle presence and modeled the transfer function.</li>
              <li data-n="04">Analyzed frequency response using a Bode diagram in MATLAB — before and after perturbation.</li>
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
