import Link from "next/link";

interface Props {
  year: string;
  title: string;
  tags: string[];
}

export default function ProjectHeader({ year, title, tags }: Props) {
  return (
    <>
      <nav className="detail-nav">
        <Link className="back-link" href="/#projects">
          <span className="arr">←</span> BACK TO MAIN PAGE
        </Link>
      </nav>
      <header className="detail-hero">
        <div className="wrap">
          <div className="proj-title-row">
            <span className="proj-year">{year}</span>
            <h1 className="proj-h1">{title}</h1>
          </div>
          <div className="proj-tags">
            {tags.map((t) => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
