import AboutPanel from "@/components/about/AboutPanel";
import type { TechStackItem } from "@/types/about";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";
import { Cloud, Database } from "lucide-react";

const techStackItems: TechStackItem[] = [
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#38BDF8]",
  },
  {
    name: "C#",
    textIcon: "C#",
    color: "text-[#b8a6d9]",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    color: "text-[#8A63D2]",
  },
  {
    name: "SQL Server",
    icon: Database,
    color: "text-[#d98b8b]",
  },
  {
    name: "Azure",
    icon: Cloud,
    color: "text-[#8fb6d9]",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-[#F05032]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#68A063]",
  },
];

export default function AboutTechStack() {
  return (
    <AboutPanel title="Tech Stack">
      <div className="grid grid-cols-2 gap-3">
        {techStackItems.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:bg-white/15">
                {Icon ? (
                  <Icon
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
              </span>

              <span className="font-rajdhani text-sm font-semibold uppercase tracking-[0.16em] text-white/75 transition duration-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </AboutPanel>
  );
}
