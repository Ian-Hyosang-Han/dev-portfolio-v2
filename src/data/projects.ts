import type { Project } from "@/types/project";
import {
  SiDotnet,
  SiBootstrap,
  SiJquery,
  SiStripe,
  SiTwilio,
  SiSendgrid,
  SiGit,
} from "react-icons/si";
import { Cloud, Database, LayoutDashboard } from "lucide-react";

export const projects: Project[] = [
  {
    slug: "booking365",
    title: "Booking365",
    category: "fullstack",
    summary:
      "A full-stack booking platform for indoor golf facilities, built to manage reservations, users, payments, and facility operations.",
    description:
      "Booking365 is a live SaaS-style booking platform for indoor golf facilities. The system supports booking management, customer workflows, admin controls, payment-related operations, and production maintenance.",
    role: "Full-Stack Developer",
    year: "2024 - Present",
    type: "Live SaaS Platform",
    heroImage: "/images/projects/booking365/booking365-image.webp",

    liveUrl: "https://demo.booking365.ca/",
    githubUrl: "https://github.com/Ian-Hyosang-Han",

    overviewItems: [
      {
        label: "Role",
        value: "Full-Stack Developer & Service Owner",
      },
      {
        label: "Duration",
        value: "2024 - Present",
      },
      {
        label: "Team Size",
        value: "2 Developers",
      },
      {
        label: "Platform",
        value: "Web Application",
      },
      {
        label: "Category",
        value: "SaaS / Booking Platform",
      },
    ],

    features: [
      {
        number: "01",
        title: "Flexible Bay Scheduling",
        description:
          "Allows admins to configure booking availability by bay, time, zone, date, and operating rules for different facility needs.",
      },
      {
        number: "02",
        title: "Membership System",
        description:
          "Supports membership-based customer management, allowing facilities to organize users and manage member-related booking workflows.",
      },
      {
        number: "03",
        title: "Gift Card System",
        description:
          "Includes gift card functionality to support prepaid value, customer promotions, and additional revenue options.",
      },
      {
        number: "04",
        title: "SMS & Email Notifications",
        description:
          "Provides configurable SMS and email notification settings for booking confirmations, updates, and customer communication.",
      },
      {
        number: "05",
        title: "Admin Management Tools",
        description:
          "Gives facility admins control over reservations, customer records, payments, settings, schedules, and day-to-day operations.",
      },
    ],

    techStack: [
      {
        name: "C#",
        textIcon: "C#",
        color: "text-[#b8a6d9]",
      },
      {
        name: "ASP.NET MVC",
        textIcon: "MVC",
        color: "text-[#c7b7d8]",
      },
      {
        name: ".NET Framework",
        icon: SiDotnet,
        color: "text-[#8A63D2]",
      },
      {
        name: "Entity Framework",
        textIcon: "EF",
        color: "text-[#9fb6c3]",
      },
      {
        name: "SQL Server",
        icon: Database,
        color: "text-[#d98b8b]",
      },
      {
        name: "Razor Views",
        textIcon: "RZ",
        color: "text-[#d7e58d]",
      },
      {
        name: "jQuery / Ajax",
        icon: SiJquery,
        color: "text-[#78b7d9]",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "text-[#9b7bd8]",
      },
      {
        name: "AdminLTE",
        icon: LayoutDashboard,
        color: "text-[#b8c77a]",
      },
      {
        name: "Azure",
        icon: Cloud,
        color: "text-[#8fb6d9]",
      },
      {
        name: "Stripe",
        icon: SiStripe,
        color: "text-[#b8a6ff]",
      },
      {
        name: "Twilio / SMS",
        icon: SiTwilio,
        color: "text-[#f0a6a6]",
      },
      {
        name: "SendGrid",
        icon: SiSendgrid,
        color: "text-[#9fc3d9]",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#f05032]",
      },
    ],

    process: [
      {
        number: "01",
        title: "Planning",
        description:
          "Started by reviewing the booking flow, facility needs, and core requirements.",
        period: "Before 2024",
      },
      {
        number: "02",
        title: "System Setup",
        description:
          "Structured the application around reservations, bays, users, payments, and admin settings.",
        period: "Jul 2024",
      },
      {
        number: "03",
        title: "Development",
        description:
          "Built and improved front-end screens, back-end logic, database workflows, and management features.",
        period: "Aug 2024 - Early 2025",
      },
      {
        number: "04",
        title: "Testing",
        description:
          "Tested booking rules, payment-related flows, admin tools, notifications, and production behavior.",
        period: "Early 2025",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Deployed updates, monitored the live service, and continued improving the platform.",
        period: "2025 - Present",
      },
    ],

    results: [
      {
        value: "Live",
        label: "Production Platform",
        icon: "🚀",
      },
      {
        value: "1+",
        label: "Active Business Client",
        icon: "🏢",
      },
      {
        value: "Full",
        label: "Booking Workflow",
        icon: "📅",
      },
      {
        value: "Ongoing",
        label: "Maintenance",
        icon: "🛠️",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
