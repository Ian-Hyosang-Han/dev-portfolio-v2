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
import {
  CalendarCheck,
  CreditCard,
  LayoutDashboard,
  WalletCards,
  BarChart3,
  ShieldCheck,
  Database,
  Cloud,
} from "lucide-react";

export const projects: Project[] = [
  {
    slug: "booking365",
    title: "Booking365",
    category: "fullstack",
    isFeatured: true,
    filters: ["Full-Stack", "C# / .NET"],
    summary:
      "A full-stack booking platform for indoor golf facilities, built to manage reservations, users, payments, and facility operations.",
    description:
      "Booking365 is a live SaaS-style booking platform for indoor golf facilities. The system supports booking management, customer workflows, admin controls, payment-related operations, and production maintenance.",
    role: "Full-Stack Developer",
    year: "2024 - Present",
    type: "Live SaaS Platform",
    heroImage: "/images/projects/booking365/booking365-image.webp",
    thumbnail: "/images/projects/booking365/booking365-thumbnail.webp",

    liveUrl: "https://demo.booking365.ca/",
    githubUrl: "https://github.com/Ian-Hyosang-Han",

    overviewHighlights: [
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
    ],

    overviewItems: [
      {
        label: "Role",
        value: "Full-Stack Developer & Service Owner",
      },
      {
        label: "Duration",
        value: "Apr 2025 - May 2026",
      },
      {
        label: "Team",
        value: "Collaborative Development / Independent Ownership",
      },
      {
        label: "Platform",
        value: "Live Booking Platform",
      },
      {
        label: "Category",
        value: "SaaS / Booking Management",
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
        title: "Platform Review & Planning",
        description:
          "Reviewed the existing platform structure, booking workflows, admin needs, and update requirements while continuing development with the original senior developer.",
        period: "Apr 2025",
      },
      {
        number: "02",
        title: "Frontend & Admin UI Updates",
        description:
          "Updated front-end screens, improved admin-facing layouts, and applied the AdminLTE theme to create a more consistent management interface.",
        period: "May - Aug 2025",
      },
      {
        number: "03",
        title: "Backend Settings & Configuration",
        description:
          "Updated backend settings, facility-specific rules, bay, time, and zone configurations, notification options, and admin control features.",
        period: "Sep - Dec 2025",
      },
      {
        number: "04",
        title: "Feature Updates",
        description:
          "Added and improved seasonal and non-seasonal time management, bay management, override controls, and bay control features for more flexible facility operations.",
        period: "Jan - Apr 2026",
      },
      {
        number: "05",
        title: "Final Updates & Production Release",
        description:
          "Completed final refinements, tested updated workflows, deployed changes, and prepared the platform for ongoing production use under my ownership.",
        period: "May 2026",
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
  {
    slug: "pennywise",
    title: "Pennywise",
    category: "frontend",
    isFeatured: false,
    filters: ["Front-End", "React", "TypeScript", "JavaScript"],
    summary:
      "A front-end expense management web app built with React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Query, Axios, and a json-server mock REST API.",
    description:
      "Pennywise is a front-end expense management web application that helps users log daily expenses, manage records, and visualize spending patterns. The project uses React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Query, Axios, React Router, and json-server to simulate REST API data during development. It focuses on practical front-end architecture, state management, data fetching, CRUD workflows, and responsive dashboard UI.",
    role: "Front-End Developer / UI-UX Designer",
    year: "2025",
    type: "Front-End / Mock API",
    heroImage: "/images/projects/pennywise/pw-hero.webp",
    thumbnail: "/images/projects/pennywise/pw-thumbnail.webp",
    liveUrl: "https://pennywise-eight.vercel.app",
    githubUrl: "https://github.com/Ian-Hyosang-Han/pennywise",

    overviewItems: [
      {
        label: "Role",
        value: "Front-End Developer / UI-UX Designer",
      },
      {
        label: "Duration",
        value: "2025",
      },
      {
        label: "Team Size",
        value: "Personal Project",
      },
      {
        label: "Platform",
        value: "Web Application",
      },
      {
        label: "Category",
        value: "Expense Management / Mock API",
      },
    ],

    overviewHighlights: [
      {
        title: "Expense Tracking",
        description:
          "Allows users to create, manage, and review daily expense records.",
        icon: WalletCards,
      },
      {
        title: "Spending Visualization",
        description:
          "Displays category-based charts to help users understand spending patterns.",
        icon: BarChart3,
      },
      {
        title: "Session Persistence",
        description:
          "Uses localStorage to maintain demo login sessions during testing.",
        icon: ShieldCheck,
      },
    ],

    features: [
      {
        number: "01",
        title: "Expense CRUD Operations",
        description:
          "Users can create, read, update, and delete expense records through a responsive dashboard interface.",
      },
      {
        number: "02",
        title: "Mock REST API",
        description:
          "Uses json-server and db.json to simulate REST API endpoints for development and testing.",
      },
      {
        number: "03",
        title: "React Query Data Flow",
        description:
          "Handles expense data fetching, caching, and synchronization using React Query.",
      },
      {
        number: "04",
        title: "Redux Toolkit State Management",
        description:
          "Manages global application state using Redux Toolkit and React Redux.",
      },
      {
        number: "05",
        title: "Axios API Layer",
        description:
          "Uses Axios to organize API requests and communicate with the mock backend.",
      },
      {
        number: "06",
        title: "Responsive Routing & Dashboard",
        description:
          "Uses React Router for page navigation and provides a responsive dashboard experience across screen sizes.",
      },
    ],

    techStack: [
      {
        name: "React",
        textIcon: "React",
        color: "text-[#61DAFB]",
      },
      {
        name: "TypeScript",
        textIcon: "TS",
        color: "text-[#3178C6]",
      },
      {
        name: "Vite",
        textIcon: "Vite",
        color: "text-[#b8a6ff]",
      },
      {
        name: "Tailwind CSS",
        textIcon: "TW",
        color: "text-[#38BDF8]",
      },
      {
        name: "Redux Toolkit",
        textIcon: "RTK",
        color: "text-[#b8a6d9]",
      },
      {
        name: "React Query",
        textIcon: "RQ",
        color: "text-[#d7e58d]",
      },
      {
        name: "Axios",
        textIcon: "AX",
        color: "text-[#9fb6c3]",
      },
      {
        name: "React Router",
        textIcon: "RR",
        color: "text-[#f0a6a6]",
      },
      {
        name: "json-server",
        textIcon: "API",
        color: "text-[#b8c77a]",
      },
      {
        name: "React Icons",
        textIcon: "RI",
        color: "text-[#c7b7d8]",
      },
      {
        name: "Vercel",
        textIcon: "VC",
        color: "text-white",
      },
      {
        name: "Git",
        textIcon: "Git",
        color: "text-[#f05032]",
      },
    ],

    process: [
      {
        number: "01",
        title: "Planning",
        description:
          "Defined the app structure, dashboard flow, expense data model, and required CRUD features.",
        period: "May 2025",
      },
      {
        number: "02",
        title: "Architecture",
        description:
          "Set up React, TypeScript, Redux Toolkit, React Query, Tailwind CSS, and routing structure.",
        period: "May - June 2025",
      },
      {
        number: "03",
        title: "Development",
        description:
          "Built expense forms, history views, category selection, dashboard summaries, and chart components.",
        period: "June - July 2025",
      },
      {
        number: "04",
        title: "Data Integration",
        description:
          "Connected the app to a mock REST API using React Query and handled expense data operations.",
        period: "July - August 2025",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Deployed the application to Vercel and prepared the project for live testing.",
        period: "August 2025",
      },
    ],

    results: [
      {
        value: "CRUD",
        label: "Expense Management",
        icon: "📝",
      },
      {
        value: "Charts",
        label: "Spending Insights",
        icon: "📊",
      },
      {
        value: "RTK",
        label: "State Management",
        icon: "⚙️",
      },
      {
        value: "Live",
        label: "Vercel Deploy",
        icon: "🚀",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
