import Image from "next/image";
import Link from "next/link";
import { Calendar, Layers } from "lucide-react";
import SiteNavigation from "@/components/layout/SiteNavigation";
import type { Project } from "@/types/project";

type ProjectDetailHeroProps = {
  project: Project;
};

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const projectType =
    project.category === "fullstack"
      ? "Full-Stack"
      : project.category === "frontend"
      ? "Front-End"
      : "Back-End";

  return (
    <section className="relative overflow-hidden px-5 pb-4 pt-[50px] text-white md:px-8 lg:px-10">
      <SiteNavigation position="right" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Left content */}
        <div className="max-w-2xl">
          <p className="font-rajdhani text-sm font-semibold uppercase tracking-[0.35em] text-[#b8c77a] md:text-base">
            // Featured Project
          </p>

          <h1 className="mt-6 font-blackHan text-3xl uppercase tracking-wider text-white md:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-xl font-lato text-base leading-8 text-white md:text-lg">
            {project.summary}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-10 ml-5">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[150px] border border-[#b8c77a]/70 rounded-sm px-6 py-3 text-center font-rajdhani text-sm font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_18px_rgba(184,199,122,0.25)] transition duration-300 hover:bg-[#b8c77a] hover:text-black"
              >
                Live Site ↗
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[150px] border border-white/30 rounded-sm px-6 py-3 text-center font-rajdhani text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-white hover:text-black"
              >
                GitHub ↗
              </Link>
            )}
          </div>

          {/* Project meta */}
          <div className="mt-9 flex flex-wrap gap-10 font-rajdhani text-sm font-bold uppercase tracking-[0.18em] text-white">
            <div className="flex items-center gap-3">
              <Calendar
                size={18}
                strokeWidth={1.7}
                className="text-[#b8c77a]"
                aria-hidden="true"
              />
              <span>{project.year}</span>
            </div>

            <div className="flex items-center gap-3">
              <Layers
                size={18}
                strokeWidth={1.7}
                className="text-[#b8c77a]"
                aria-hidden="true"
              />
              <span>{projectType}</span>
            </div>
          </div>
        </div>

        {/* Right project image */}

        <div className="relative hidden w-full max-w-[850px] justify-self-end min-[1101px]:block lg:-mt-8">
          <div className="relative aspect-[20/10] w-full">
            <Image
              src={project.heroImage}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="(max-width: 1100px) 0px, 50vw"
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
