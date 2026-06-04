import type { Project } from "@/types/project";
import ProjectDetailPanel from "@/components/projects/detail/ProjectDetailPanel";

type ProjectSummarySectionProps = {
  project: Project;
};

export default function ProjectSummarySection({
  project,
}: ProjectSummarySectionProps) {
  return (
    <section className="relative px-2 py-2 text-white md:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-6 lg:grid-cols-[7fr_3fr]">
        {/* Tech Stack */}
        <ProjectDetailPanel eyebrow="04 / Tech Stack" title="">
          <div className="flex flex-wrap gap-3 pb-2">
            {project.techStack.map((tech) => (
              <article
                key={tech.name}
                className="group flex min-h-[82px] w-[78px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center transition duration-300 hover:border-[#b8c77a]/45 hover:bg-white/[0.07] sm:w-[85px] md:w-[92px] lg:w-[96px]"
              >
                {tech.icon ? (
                  <tech.icon
                    size={20}
                    className={`${tech.color} transition duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className={`font-rajdhani text-sm font-bold ${tech.color} transition duration-300 group-hover:scale-110`}
                  >
                    {tech.textIcon}
                  </span>
                )}

                <p className="mt-2 font-rajdhani text-[10px] font-semibold uppercase tracking-[0.1em] text-white/70 transition duration-300 group-hover:text-white">
                  {tech.name}
                </p>
              </article>
            ))}
          </div>
        </ProjectDetailPanel>

        {/* Results */}
        <ProjectDetailPanel eyebrow="05 / Results" title="">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {project.results.map((result) => (
              <article
                key={result.label}
                className="group flex min-h-[80px] w-full flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:border-[#b8c77a]/45 hover:bg-white/[0.07]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    {result.icon && (
                      <span className="text-2xl">{result.icon}</span>
                    )}

                    <p className="font-rajdhani text-xl font-bold uppercase tracking-[0.12em] text-[#d7e58d]">
                      {result.value}
                    </p>
                  </div>

                  <p className="mt-1 font-rajdhani text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    {result.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ProjectDetailPanel>
      </div>
    </section>
  );
}
