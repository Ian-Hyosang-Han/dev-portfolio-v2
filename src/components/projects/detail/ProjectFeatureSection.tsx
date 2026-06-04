import type { Project } from "@/types/project";
import ProjectDetailPanel from "@/components/projects/detail/ProjectDetailPanel";

type ProjectFeatureSectionProps = {
  project: Project;
};

export default function ProjectFeatureSection({
  project,
}: ProjectFeatureSectionProps) {
  return (
    <section className="relative pt-7 pl-4 pr-4 text-white md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">
        <ProjectDetailPanel
          eyebrow="02 / Key Features"
          title=""
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {project.features.map((feature) => (
              <article
                key={feature.number}
                className="group relative min-h-[120px] w-full rounded-xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-[#b8c77a]/45 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  <p className="font-rajdhani text-sm font-bold tracking-[0.28em] text-[#b8c77a]">
                    {feature.number}
                  </p>

                  <h3 className="font-rajdhani text-xl font-semibold uppercase tracking-[0.12em] text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="mt-4 font-lato text-sm leading-7 text-white/60">
                  {feature.description}
                </p>

                <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#b8c77a]/30 transition duration-300 group-hover:border-[#b8c77a]/70" />
              </article>
            ))}
          </div>
        </ProjectDetailPanel>
      </div>
    </section>
  );
}
