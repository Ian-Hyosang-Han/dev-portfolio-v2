import Image from "next/image";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import ProjectsContent from "@/components/projects/ProjectsContent";
import SiteNavigation from "@/components/layout/SiteNavigation";
import { projects } from "@/data/projects";
import type { ProjectListItem } from "@/types/project";

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.isFeatured);

  const regularProjects: ProjectListItem[] = projects
    .filter((project) => !project.isFeatured)
    .map((project) => ({
      slug: project.slug,
      title: project.title,
      summary: project.summary,
      year: project.year,
      type: project.type,
      thumbnail: project.thumbnail,
      filters: project.filters,
    }));

  return (
    <main className="relative min-h-screen bg-[#030711] text-white">
      <SiteNavigation position="right" />
      {/* Page background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/projects/projects-bg.webp"
          alt="Projects page background"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-top"
        />
      </div>

      {/* Page content */}

      <div className="relative z-10">
        <ProjectsHero totalProjects={projects.length} />

        {featuredProject && <FeaturedProjectCard project={featuredProject} />}

        <ProjectsContent projects={regularProjects} />

        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-5 pb-8 md:px-8 lg:px-10">
          <p className="border-t border-white/15 pt-6 text-center font-lato text-xs text-white/45">
            © 2026 Ian&apos;s Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
