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
    slug: "findinn",
    title: "FindInn",
    category: "fullstack",
    isFeatured: false,
    filters: ["Full-Stack", "React", "JavaScript", "MongoDB"],
    summary:
      "A full-stack hotel booking web application built with React, Vite, Tailwind CSS, Express, MongoDB, Clerk, Cloudinary, and Stripe.",
    description:
      "FindInn is a full-stack hotel booking demo application that allows users to browse available rooms, view hotel details, check availability, create bookings, and manage reservations. Hotel owners can register their hotel, add rooms with Cloudinary image uploads, manage room availability, and review booking dashboard data. The project uses React, Vite, Tailwind CSS, Express, MongoDB, Mongoose, Clerk, Cloudinary, Stripe, Axios, and Vercel to demonstrate full-stack architecture, authentication, file uploads, payment flow, REST API design, and responsive UI development.",
    role: "Full-Stack Developer / UI-UX Designer",
    year: "2025",
    type: "Full-Stack / Hotel Booking Demo",
    heroImage: "/images/projects/findinn/findinn-hero.webp",
    thumbnail: "/images/projects/findinn/findinn-thumbnail.webp",
    liveUrl: "https://findinn.vercel.app",
    githubUrl: "https://github.com/Ian-Hyosang-Han/booking-app",

    overviewItems: [
      {
        label: "Role",
        value: "Full-Stack Developer / UI-UX Designer",
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
        value: "Hotel Booking / Full-Stack Demo",
      },
    ],

    overviewHighlights: [
      {
        title: "Booking Flow",
        description:
          "Allows users to browse rooms, check availability, and create hotel bookings.",
        icon: CalendarCheck,
      },
      {
        title: "Owner Dashboard",
        description:
          "Provides hotel owners with tools to add rooms, manage availability, and review booking data.",
        icon: LayoutDashboard,
      },
      {
        title: "Cloud Uploads & Payments",
        description:
          "Integrates Cloudinary for room image uploads and Stripe test checkout for demo payments.",
        icon: Cloud,
      },
    ],

    features: [
      {
        number: "01",
        title: "Hotel Room Browsing",
        description:
          "Users can explore available rooms, view hotel details, review amenities, browse room images, and check location information.",
      },
      {
        number: "02",
        title: "Room Filtering & Sorting",
        description:
          "Supports destination search, room type filtering, price range filtering, and sorting options for a better browsing experience.",
      },
      {
        number: "03",
        title: "Booking & Availability Flow",
        description:
          "Allows users to select check-in and check-out dates, check room availability, and create bookings through the application.",
      },
      {
        number: "04",
        title: "Clerk Authentication",
        description:
          "Uses Clerk for user authentication, protected routes, session handling, and user-based booking workflows.",
      },
      {
        number: "05",
        title: "Hotel Owner Dashboard",
        description:
          "Provides an owner-facing dashboard where hotel owners can register their hotel, add rooms, manage room availability, and review booking data.",
      },
      {
        number: "06",
        title: "Cloudinary Image Uploads",
        description:
          "Uses Multer and Cloudinary to upload and store room images for hotel owner room management.",
      },
      {
        number: "07",
        title: "Stripe Test Payment",
        description:
          "Integrates Stripe checkout in test mode to simulate online payment for hotel bookings.",
      },
    ],

    techStack: [
      {
        name: "React",
        textIcon: "React",
        color: "text-[#61DAFB]",
      },
      {
        name: "JavaScript",
        textIcon: "JS",
        color: "text-[#F7DF1E]",
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
        name: "React Router",
        textIcon: "RR",
        color: "text-[#f0a6a6]",
      },
      {
        name: "Axios",
        textIcon: "AX",
        color: "text-[#9fb6c3]",
      },
      {
        name: "Node.js",
        textIcon: "Node",
        color: "text-[#8CC84B]",
      },
      {
        name: "Express",
        textIcon: "EX",
        color: "text-white",
      },
      {
        name: "MongoDB",
        icon: Database,
        color: "text-[#47A248]",
      },
      {
        name: "Mongoose",
        textIcon: "MG",
        color: "text-[#b8c77a]",
      },
      {
        name: "Clerk",
        textIcon: "Clerk",
        color: "text-[#b8a6ff]",
      },
      {
        name: "Cloudinary",
        icon: Cloud,
        color: "text-[#8fb6d9]",
      },
      {
        name: "Stripe",
        icon: SiStripe,
        color: "text-[#b8a6ff]",
      },
      {
        name: "Vercel",
        textIcon: "VC",
        color: "text-white",
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
          "Defined the hotel booking flow, user booking journey, owner dashboard requirements, room data model, and full-stack project structure.",
        period: "June 2025",
      },
      {
        number: "02",
        title: "Frontend Development",
        description:
          "Built the React and Tailwind CSS interface, including home page sections, room listings, room details, booking views, and responsive navigation.",
        period: "June - July 2025",
      },
      {
        number: "03",
        title: "Backend Architecture",
        description:
          "Created the Express and MongoDB backend with routes, controllers, models, authentication middleware, and REST API endpoints.",
        period: "July 2025",
      },
      {
        number: "04",
        title: "Service Integration",
        description:
          "Integrated Clerk for authentication, Cloudinary for image uploads, Stripe for test checkout, and Nodemailer for booking email flow.",
        period: "July 2025",
      },
      {
        number: "05",
        title: "Deployment & Demo Setup",
        description:
          "Deployed the client and server with Vercel, configured environment variables, prepared demo data, and refined the project for portfolio presentation.",
        period: "July 2025",
      },
    ],

    results: [
      {
        value: "Full",
        label: "Booking Flow",
        icon: "📅",
      },
      {
        value: "Owner",
        label: "Dashboard",
        icon: "📊",
      },
      {
        value: "Stripe",
        label: "Test Checkout",
        icon: "💳",
      },
      {
        value: "Live",
        label: "Vercel Deploy",
        icon: "🚀",
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
      "A front-end expense management demo app built with React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Query, Axios, and a GitHub-hosted mock REST API.",
    description:
      "Pennywise is a front-end expense management demo application that lets users explore expense tracking, record management, and spending visualization through a mock API. The project uses React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Query, Axios, React Router, and a GitHub-hosted JSON Server mock API to simulate REST-style data flows. It focuses on practical front-end architecture, state management, data fetching, CRUD UI workflows, session persistence with localStorage, and responsive dashboard design.",
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
        title: "Demo API Integration",
        description:
          "Connects the deployed app to a GitHub-hosted mock API for portfolio testing and sample data display.",
        icon: Database,
      },
    ],

    features: [
      {
        number: "01",
        title: "Expense CRUD Operations",
        description:
          "Users can explore create, read, update, and delete expense workflows through a responsive dashboard interface using mock API responses.",
      },
      {
        number: "02",
        title: "Mock REST API",
        description:
          "Uses a db.json-based mock API for development and a GitHub-hosted My JSON Server endpoint for the deployed demo.",
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
