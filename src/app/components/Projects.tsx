import Link from "next/link";
import { Rocket, Cpu, Layers, Cog, Waves, type LucideIcon } from "lucide-react";
import { allProjects } from "@/content/index";

const projectIcons: Record<string, LucideIcon> = {
  "nasa-space-apps":    Rocket,
  "inductive-sensor":   Cpu,
  "cryogenic-machining": Layers,
  "repas":              Cog,
  "ceramic-casting":    Waves,
};

export default function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Recent projects</h2>
          <span className="section-index">[ 04 / SELECTED WORK ]</span>
        </div>

        <div className="projects-list">
          {allProjects.map((p) => {
            const Icon = projectIcons[p.slug];
            return (
              <Link key={p.slug} className="project-row reveal" href={`/projects/${p.slug}`}>
                <span className="p-left">
                  {Icon && <Icon className="p-icon" size={22} strokeWidth={1.5} />}
                  <span className="p-year">{p.year}</span>
                  <span className="p-title">{p.title}</span>
                </span>
                <span className="p-go">More details</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
