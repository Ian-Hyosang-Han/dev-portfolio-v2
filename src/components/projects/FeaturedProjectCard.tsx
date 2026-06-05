import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <section className="relative px-5 py-10 text-white md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">
        <Link
          href={`/projects/${project.slug}`}
          className="group grid overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm transition duration-500 hover:border-[#b8c77a]/50 hover:bg-white/[0.07] lg:grid-cols-[4fr_6fr]"
        >
          {/* Left image */}
          <div className="relative min-h-[200px] overflow-hidden bg-black/20 md:min-h-[280px]">
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-center p-6 transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col p-5 md:p-6">
            <div>
              <p className="font-rajdhani text-sm font-semibold uppercase tracking-[0.28em] text-[#b8c77a]">
                01 / Featured Project
              </p>

              <h2 className="mt-6 font-blackHan text-3xl uppercase tracking-wider text-white md:text-5xl">
                {project.title}
              </h2>

              <p className="mt-5 max-w-3xl font-lato text-sm leading-7 text-white/70 md:text-base">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["C#", "ASP.NET MVC", "SQL Server", "Azure"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-[#b8c77a]/30 bg-[#b8c77a]/5 px-3 py-1 font-rajdhani text-xs font-semibold uppercase tracking-[0.18em] text-[#d7e58d]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between gap-6">
              <div className="font-rajdhani text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                <span>{project.year}</span>
                <span className="mx-3 text-[#b8c77a]">/</span>
                <span>{project.type}</span>
              </div>

              <span className="font-rajdhani text-sm font-semibold uppercase tracking-[0.22em] text-[#b8c77a] transition duration-300 group-hover:translate-x-1">
                View Detail →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
