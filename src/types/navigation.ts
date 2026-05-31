import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterNavigationItem = NavigationItem & {
  icon: LucideIcon;
  color: string;
};