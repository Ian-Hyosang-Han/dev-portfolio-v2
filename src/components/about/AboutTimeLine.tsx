import AboutPanel from "@/components/about/AboutPanel";
import type { TimelineItem } from "@/types/about";

const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    title: "Frontend foundation",
    description:
      "Built a strong foundation in modern frontend development, responsive design, accessibility, and React-based applications.",
  },
  {
    year: "2025",
    title: "Full-stack growth",
    description:
      "Expanded into backend development through real-world web applications using C#, ASP.NET MVC, .NET, SQL Server, REST APIs, and deployment pipelines from code updates to production releases.",
  },
  {
    year: "Now",
    title: "Building practical products",
    description:
      "Focused on creating maintainable, user-centered, and production-minded web experiences.",
  },
];

export default function AboutTimeline() {
  return (
    <AboutPanel title="Journey">
      <div className="space-y-6">
        {timelineItems.map((item) => (
          <article key={item.year} className="relative border-l border-white/15 pl-5">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#b8c77a]" />

            <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.25em] text-[#b8c77a]">
              {item.year}
            </p>

            <h3 className="mt-1 font-rajdhani text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-1 font-lato text-sm leading-6 text-white/60">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </AboutPanel>
  );
}