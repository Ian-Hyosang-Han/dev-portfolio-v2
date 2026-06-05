import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type ProjectCategory = "frontend" | "backend" | "fullstack";

export type ProjectOverviewItem = {
  label: string;
  value: string;
};

export type ProjectOverviewHighlight = {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
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

  isFeatured?: boolean;
  thumbnail: string;
  filters: string[];

  overviewItems: ProjectOverviewItem[];
  overviewHighlights: ProjectOverviewHighlight[];

  features: ProjectFeature[];
  techStack: ProjectTechItem[];
  process: ProjectProcessStep[];
  results: ProjectResult[];

  liveUrl?: string;
  githubUrl?: string;
};

export type ProjectListItem = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  type: string;
  thumbnail: string;
  filters: string[];
};