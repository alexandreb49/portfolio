import { notFound } from "next/navigation";
import { allProjects, getProject } from "@/content/index";
import CeramicCasting from "../_pages/ceramic-casting";
import CryogenicMachining from "../_pages/cryogenic-machining";
import NasaSpaceApps from "../_pages/nasa-space-apps";
import InductiveSensor from "../_pages/inductive-sensor";
import Repas from "../_pages/repas";

const pageMap: Record<string, () => React.JSX.Element> = {
  "ceramic-casting":    CeramicCasting,
  "cryogenic-machining": CryogenicMachining,
  "nasa-space-apps":    NasaSpaceApps,
  "inductive-sensor":   InductiveSensor,
  "repas":              Repas,
};

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Alexandre Bernard`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Page = pageMap[slug];
  if (!Page) notFound();
  return <Page />;
}
