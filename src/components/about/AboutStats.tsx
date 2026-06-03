import AboutPanel from "@/components/about/AboutPanel";
import type { StatItem } from "@/types/about";
import { Code2, Layers, Rocket, Timer } from "lucide-react";

const statItems: StatItem[] = [
  {
    label: "Projects",
    value: "5+",
    description: "Completed",
  },
  {
    label: "Technologies",
    value: "10+",
    description: "Used",
  },
  {
    label: "Experience",
    value: "1+",
    description: "Years coding",
  },
  {
    label: "Mindset",
    value: "88%",
    description: "Dedication",
  },
];

const statIcons = [Code2, Layers, Timer, Rocket];

export default function AboutStats() {
  return (
    <AboutPanel title="Quick Stats">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statItems.map((stat, index) => {
          const Icon = statIcons[index];

          return (
            <article
              key={stat.label}
              className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-[#b8c77a]/40 hover:bg-white/[0.07]"
            >
              <Icon
                size={30}
                strokeWidth={1.6}
                className="text-[#b8c77a]/70 transition duration-300 group-hover:text-[#d7e58d]"
                aria-hidden="true"
              />

              <div>
                <p className="font-rajdhani text-3xl font-semibold tracking-[0.12em] text-[#d7e58d] md:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                  {stat.label}
                </p>

                {stat.description && (
                  <p className="mt-1 font-lato text-xs text-white/40">
                    {stat.description}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </AboutPanel>
  );
}