import Image from "next/image";
import Link from "next/link";
import type { ProjectListItem } from "@/types/project";

type ProjectCardProps = {
  project: ProjectListItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] text-white backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#b8c77a]/50 hover:bg-white/[0.07]"
    >
      <div className="relative min-h-[220px] overflow-hidden bg-black/20">
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-contain object-center p-5 transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-5">
        <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.22em] text-[#b8c77a]">
          {project.type}
        </p>

        <h3 className="mt-4 font-blackHan text-2xl uppercase tracking-wider text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 font-lato text-sm leading-6 text-white/60">
          {project.summary}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <span className="font-rajdhani text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            {project.year}
          </span>

          <span className="font-rajdhani text-xs font-semibold uppercase tracking-[0.2em] text-[#b8c77a] transition duration-300 group-hover:translate-x-1">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}