"use client";

import { useState } from "react";
import type { ProjectListItem } from "@/types/project";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectGrid from "@/components/projects/ProjectGrid";

type ProjectsContentProps = {
  projects: ProjectListItem[];
};

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <>
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <ProjectGrid projects={filteredProjects} />
    </>
  );
}