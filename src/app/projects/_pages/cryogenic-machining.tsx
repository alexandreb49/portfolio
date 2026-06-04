import ProjectLayout from "../_components/ProjectLayout";
import { Construction } from "lucide-react";

export default function CryogenicMachiningPage() {
  return (
    <ProjectLayout
      slug="cryogenic-machining"
      year="2025"
      title="Material & machining research project"
      tags={["Experimental design", "Cryogenic machining", "Tool-wear analysis", "SEM microscopy", "Materials science", "Metrology"]}
    >

      <section className="detail-body">
        <div className="wrap detail-cols">

          <div>
            <p className="block-head">// Overview</p>
            <p>
              Bulk Metallic Glass (BMG) offers exceptional mechanical properties but is challenging
              to machine — its behaviour under cutting can accelerate tool wear and limit surface
              quality. Cryogenic assistance, where the cutting zone is cooled to very low
              temperatures, is a promising route to mitigate this.
            </p>
            <p>
              Over a focused 10-week study I investigated how cryogenic assistance influences tool
              wear during BMG machining, comparing cooled and conventional conditions and
              characterizing the resulting wear behaviour.
            </p>
          </div>

          <div>
            <p className="block-head">// What I did</p>
            <ul className="did-list">
              <li data-n="01">Designed a 10-week experimental protocol around cryogenic assistance.</li>
              <li data-n="02">Ran machining trials on Bulk Metallic Glass samples.</li>
              <li data-n="03">Measured and characterized tool wear across conditions using SEM analysis.</li>
              <li data-n="04">Analyzed the effect of cryogenic cooling on wear behaviour and chip morphology.</li>
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
