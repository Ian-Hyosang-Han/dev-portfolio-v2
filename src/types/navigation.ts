import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterNavigationItem = NavigationItem & {
  icon?: LucideIcon;
  emoji?: string;
  color?: string;
};

export type SiteNavigationPosition = "left" | "right";