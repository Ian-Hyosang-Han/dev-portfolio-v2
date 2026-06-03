import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type TechStackItem = {
  name: string;
  icon?: IconType | LucideIcon;
  textIcon?: string;
  color: string;
};

export type SkillCategory = "frontend" | "backend" | "tools";

export type SkillItem = {
  name: string;
  level: number;
};

export type SkillGroup = {
  label: string;
  value: SkillCategory;
  skills: SkillItem[];
};

export type StatItem = {
  label: string;
  value: string;
  description?: string;
};
