"use client";

import { useState } from "react";
import AboutPanel from "@/components/about/AboutPanel";
import type { SkillCategory, SkillGroup } from "@/types/about";

const skillGroups: SkillGroup[] = [
  {
    label: "Front-End",
    value: "frontend",
    skills: [
      {
        name: "JavaScript / TypeScript",
        level: 70,
      },
      {
        name: "React / Next.js",
        level: 70,
      },
      {
        name: "HTML / CSS / SASS",
        level: 90,
      },
      {
        name: "Tailwind CSS",
        level: 80,
      },
    ],
  },
  {
    label: "Back-End",
    value: "backend",
    skills: [
      {
        name: "C# / .NET",
        level: 60,
      },
      {
        name: "SQL Server / SSMS",
        level: 50,
      },
      {
        name: "REST APIs",
        level: 60,
      },
      {
        name: "Node.js / Express",
        level: 70,
      },
    ],
  },
  {
    label: "Tools & Others",
    value: "tools",
    skills: [
      {
        name: "Git / GitHub",
        level: 80,
      },
      {
        name: "Azure App Services",
        level: 65,
      },
      {
        name: "Figma",
        level: 90,
      },
      {
        name: "WordPress",
        level: 80,
      },
    ],
  },
];

export default function AboutSkills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("frontend");

  const activeGroup =
    skillGroups.find((group) => group.value === activeCategory) ??
    skillGroups[0];

  return (
    <AboutPanel
      title="Skills"
      headerAction={
        <div className="flex flex-wrap gap-3 font-rajdhani text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
          {skillGroups.map((group) => {
            const isActive = group.value === activeCategory;

            return (
              <button
                key={group.value}
                type="button"
                onClick={() => setActiveCategory(group.value)}
                className={`rounded-md border px-3 py-1.5 transition duration-300 ${
                  isActive
                    ? "border-[#b8c77a]/70 bg-[#b8c77a]/10 text-[#d7e58d] shadow-[0_0_18px_rgba(184,199,122,0.25)]"
                    : "border-transparent text-white/45 hover:border-white/20 hover:text-white"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="space-y-6">
        {activeGroup.skills.map((skill) => (
          <div
            key={skill.name}
            className="grid gap-3 md:grid-cols-[180px_1fr_48px] md:items-center"
          >
            <p className="font-rajdhani text-sm font-semibold text-white/70 md:text-base">
              {skill.name}
            </p>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#c6d66d] shadow-[0_0_14px_rgba(198,214,109,0.55)] transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <p className="font-rajdhani text-sm font-semibold text-white/60 md:text-right">
              {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </AboutPanel>
  );
}
