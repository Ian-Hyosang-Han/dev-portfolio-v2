import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type ProjectCategory = "frontend" | "backend" | "fullstack";

export type ProjectOverviewItem = {
  label: string;
  value: string;
};

export type ProjectFeature = {
  number: string;
  title: string;
  description: string;
};

export type ProjectTechItem = {
  name: string;
  icon?: IconType | LucideIcon;
  textIcon?: string;
  color: string;
};

export type ProjectProcessStep = {
  number: string;
  title: string;
  description: string;
  period: string;
};

export type ProjectResult = {
  value: string;
  label: string;
  icon?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  role: string;
  year: string;
  type: string;
  heroImage: string;
  features: ProjectFeature[];
  techStack: ProjectTechItem[];
  process: ProjectProcessStep[];
  results: ProjectResult[];
  overviewItems: ProjectOverviewItem[];
  liveUrl?: string;
  githubUrl?: string;
};
