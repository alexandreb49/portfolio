import ProjectLayout from "../_components/ProjectLayout";
import { Construction } from "lucide-react";

export default function RepasPage() {
  return (
    <ProjectLayout
      slug="repas"
      year="2025"
      title="REPAS — 3D structural analysis software"
      tags={["Finite element analysis", "Structural mechanics", "3D visualization", "Software architecture", "GUI design"]}
    >

      <section className="detail-body">
        <div className="wrap detail-cols">

          <div>
            <p className="block-head">// Overview</p>
            <p>
              REPAS is a desktop structural analysis application built around a 3D finite element
              solver. The interface guides the user through each step of a structural study: defining
              geometry and element types, assigning boundary conditions, applying forces, running the
              simulation and reviewing results.
            </p>
            <p>
              The software was designed with a "Mode Rapide" (quick mode) to streamline the common
              workflow, while retaining full parameter control. Results and geometry can be exported
              for further post-processing.
            </p>
          </div>

          <div>
            <p className="block-head">// What I did</p>
            <ul className="did-list">
              <li data-n="01">Designed and implemented the full GUI in a rapid-mode / expert-mode layout.</li>
              <li data-n="02">Built the 3D FEM solver for structural analysis under applied loads and boundary conditions.</li>
              <li data-n="03">Implemented result visualization with force and displacement display in 3D.</li>
              <li data-n="04">Added simulation, results review and export pipeline.</li>
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
