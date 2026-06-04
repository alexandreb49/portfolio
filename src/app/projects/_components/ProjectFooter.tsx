import Link from "next/link";
import { nextProject } from "@/content/index";

export default function ProjectFooter({ slug }: { slug: string }) {
  const next = nextProject(slug);
  return (
    <>
      <section className="wrap">
        {next ? (
          <Link className="next-proj" href={`/projects/${next.slug}`}>
            <div>
              <div className="np-label">Next project</div>
              <div className="np-title">{next.title}</div>
            </div>
            <span className="np-go">↗</span>
          </Link>
        ) : (
          <Link className="next-proj" href="/#projects">
            <div>
              <div className="np-label">Back to —</div>
              <div className="np-title">Project index</div>
            </div>
            <span className="np-go">↗</span>
          </Link>
        )}
      </section>
      <div className="foot">
        <span>© 2026 Alexandre Bernard</span>
        <span>
          <Link className="back-link" href="/#projects">Back to index ←</Link>
        </span>
      </div>
    </>
  );
}
