import type { ProjectListItem } from "@/types/project";
import ProjectCard from "@/components/projects/ProjectCard";

type ProjectGridProps = {
  projects: ProjectListItem[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="relative px-5 py-8 text-white md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="mb-3 flex items-center gap-3 font-rajdhani text-sm font-semibold uppercase tracking-[0.28em] text-[#b8c77a]">
          <span>03</span>
          <span>/</span>
          <span>All Projects</span>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 text-center backdrop-blur-sm">
            <p className="font-rajdhani text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              No projects found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}