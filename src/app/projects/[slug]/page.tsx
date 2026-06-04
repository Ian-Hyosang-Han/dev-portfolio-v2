import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectDetailHero from "@/components/projects/detail/ProjectDetailHero";
import ProjectOverviewSection from "@/components/projects/detail/ProjectOverviewSection";
import ProjectFeatureSection from "@/components/projects/detail/ProjectFeatureSection";
import ProjectProcess from "@/components/projects/detail/ProjectProcess";
import ProjectSummarySection from "@/components/projects/detail/ProjectSummarySection";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Fixed page background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/projects/project-detail-bg-v2.webp"
          alt="Project detail background"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-top"
        />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <ProjectDetailHero project={project} />
        <ProjectOverviewSection project={project} />
        <ProjectFeatureSection project={project} />
        <ProjectProcess project={project} />
        <ProjectSummarySection project={project} />

        <div className="relative z-10 mx-auto w-full max-w-[1800px] pt-7 px-5 pb-8 md:px-8 lg:px-10">
          <p className="border-t border-white/15 pt-6 text-center font-lato text-xs text-white/45">
            © 2026 Hyosang Han&apos;s Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
