import type { ReactNode } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";

interface Props {
  slug: string;
  year: string;
  title: string;
  tags: string[];
  children: ReactNode;
}

export default function ProjectLayout({ slug, year, title, tags, children }: Props) {
  return (
    <>
      <ProjectHeader year={year} title={title} tags={tags} />
      {children}
      <ProjectFooter slug={slug} />
    </>
  );
}
