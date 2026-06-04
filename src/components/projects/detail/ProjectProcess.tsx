import type { Project } from "@/types/project";
import ProjectDetailPanel from "@/components/projects/detail/ProjectDetailPanel";

type ProjectProcessProps = {
  project: Project;
};

export default function ProjectProcess({ project }: ProjectProcessProps) {
  return (
    <section className="relative px-5 py-8 text-white md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">
        <ProjectDetailPanel eyebrow="03 / Process" title="">
          <div className="relative">
            {/* Desktop line */}
            <div className="absolute left-0 right-0 top-[5.5px] hidden h-px bg-[#b8c77a]/35 md:block" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {project.process.map((step) => (
                <article key={step.number} className="relative">
                  {/* Dot */}
                  <div className="relative z-10 mb-6 hidden h-3 w-3 rounded-full bg-[#d7e58d] shadow-[0_0_18px_rgba(215,229,141,0.75)] md:block" />

                  {/* Mobile line */}
                  <div className="absolute left-[6px] top-2 h-full w-px bg-[#b8c77a]/25 md:hidden" />

                  <div className="relative pl-8 md:pl-0">
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-[#d7e58d] shadow-[0_0_16px_rgba(215,229,141,0.75)] md:hidden" />

                    <p className="font-rajdhani text-sm font-bold tracking-[0.25em] text-[#b8c77a]">
                      {step.number}
                    </p>

                    <p className="mt-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                      {step.period}
                    </p>

                    <h3 className="mt-3 font-rajdhani text-lg font-semibold uppercase tracking-[0.12em] text-[#d7e58d]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[220px] font-lato text-sm leading-6 text-white/60">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ProjectDetailPanel>
      </div>
    </section>
  );
}