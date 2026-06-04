import { CalendarCheck, CreditCard, LayoutDashboard } from "lucide-react";
import type { Project } from "@/types/project";

type ProjectOverviewSectionProps = {
  project: Project;
};

const overviewHighlights = [
  {
    title: "Real-time Booking",
    description: "Manage reservation flow with live availability.",
    icon: CalendarCheck,
  },
  {
    title: "Secure Payments",
    description: "Support payment-related booking workflows.",
    icon: CreditCard,
  },
  {
    title: "Admin Dashboard",
    description: "Tools for managing users, bookings, and operations.",
    icon: LayoutDashboard,
  },
];

export default function ProjectOverviewSection({
  project,
}: ProjectOverviewSectionProps) {
  return (
    <section className="relative pl-4 pr-4 text-white md:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left overview */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-[#b8c77a]/70" />

          <p className="font-rajdhani text-sm font-semibold uppercase tracking-[0.28em] text-[#b8c77a]">
            01 / Overview
          </p>

          <p className="mt-8 max-w-3xl font-lato text-base leading-8 text-white/70 md:text-lg">
            {project.description}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {overviewHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b8c77a]/60 text-[#b8c77a] shadow-[0_0_18px_rgba(184,199,122,0.2)]">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-rajdhani text-base font-semibold tracking-[0.12em] text-[#d7e58d]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-lato text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right info card */}
        <aside className="relative rounded-2xl border border-[#b8c77a]/35 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
          <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-[#b8c77a]/70" />

          <dl className="space-y-0">
            {project.overviewItems.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[140px_1fr] gap-6 border-b border-white/10 py-5 last:border-b-0"
              >
                <dt className="font-rajdhani text-sm font-bold uppercase tracking-[0.18em] text-[#b8c77a]">
                  {item.label}
                </dt>

                <dd className="font-lato text-sm leading-6 text-white/70">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
