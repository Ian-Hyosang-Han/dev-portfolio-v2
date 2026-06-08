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
  Film,
  Clapperboard,
  Heart,
  ShieldCheck,
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
    slug: "make-my-flavour",
    title: "Make My Flavour",
    category: "fullstack",
    isFeatured: false,
    filters: ["Full-Stack", "React", "JavaScript", "MongoDB"],
    summary:
      "A full-stack food delivery demo application built with React, Vite, Express, MongoDB, JWT authentication, Stripe, and a dedicated admin panel.",
    description:
      "Make My Flavour is a full-stack food delivery demo application that allows users to browse food items, manage a cart, place orders, complete Stripe test checkout, and view order history. The project also includes an admin panel for adding food items, managing the food list, and updating order statuses. It uses React, Vite, CSS, Express, MongoDB, Mongoose, JWT authentication, bcrypt, Stripe, Multer, Axios, and Render to demonstrate full-stack architecture, authentication, cart workflows, order management, payment flow, image uploads, and admin-side operations.",
    role: "Full-Stack Developer / UI-UX Designer",
    year: "2025",
    type: "Full-Stack / Food Delivery Demo",
    heroImage: "/images/projects/mmf/mmf-hero.webp",
    thumbnail: "/images/projects/mmf/mmf-thumbnail.webp",
    liveUrl: "https://food-del-frontend-ojip.onrender.com",
    githubUrl: "https://github.com/Ian-Hyosang-Han/food-del-app",

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
        value: "Food Delivery / Full-Stack Demo",
      },
    ],

    overviewHighlights: [
      {
        title: "Food Ordering Flow",
        description:
          "Allows users to browse food items, manage a cart, place orders, and complete checkout.",
        icon: WalletCards,
      },
      {
        title: "Admin Management",
        description:
          "Provides an admin panel for adding food items, managing menus, and updating order statuses.",
        icon: LayoutDashboard,
      },
      {
        title: "Payment Integration",
        description:
          "Uses Stripe test checkout to simulate online payment and verify order completion.",
        icon: CreditCard,
      },
    ],

    features: [
      {
        number: "01",
        title: "Food Browsing & Categories",
        description:
          "Users can browse available food items and explore menu categories through a responsive food delivery interface.",
      },
      {
        number: "02",
        title: "Cart Management",
        description:
          "Supports adding items to the cart, removing items, updating quantities, and calculating subtotal, delivery fee, and total price.",
      },
      {
        number: "03",
        title: "JWT Authentication",
        description:
          "Implements user registration, login, password hashing with bcrypt, and token-based authentication with JWT.",
      },
      {
        number: "04",
        title: "Order Placement Flow",
        description:
          "Allows authenticated users to enter delivery information, submit orders, and store order records in MongoDB.",
      },
      {
        number: "05",
        title: "Stripe Test Checkout",
        description:
          "Integrates Stripe checkout in test mode to simulate online payment and verify order payment status.",
      },
      {
        number: "06",
        title: "Admin Menu Management",
        description:
          "Provides an admin interface to add new food items, upload food images, view the menu list, and remove items.",
      },
      {
        number: "07",
        title: "Admin Order Management",
        description:
          "Allows admins to view customer orders and update delivery statuses such as processing, out for delivery, and delivered.",
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
        name: "CSS",
        textIcon: "CSS",
        color: "text-[#1572B6]",
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
        name: "JWT Auth",
        textIcon: "JWT",
        color: "text-[#d7e58d]",
      },
      {
        name: "bcrypt",
        textIcon: "BC",
        color: "text-[#c7b7d8]",
      },
      {
        name: "Stripe",
        icon: SiStripe,
        color: "text-[#b8a6ff]",
      },
      {
        name: "Multer",
        textIcon: "MU",
        color: "text-[#f0c36a]",
      },
      {
        name: "Render",
        textIcon: "RD",
        color: "text-[#46E3B7]",
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
          "Defined the food delivery flow, user authentication needs, cart behavior, order model, admin panel features, and full-stack project structure.",
        period: "May 2025",
      },
      {
        number: "02",
        title: "Frontend Development",
        description:
          "Built the customer-facing React interface, including home sections, category browsing, cart page, checkout form, login popup, and order history.",
        period: "May - June 2025",
      },
      {
        number: "03",
        title: "Backend Development",
        description:
          "Created the Express and MongoDB backend with user, food, cart, and order routes, controllers, models, and JWT authentication middleware.",
        period: "June - July 2025",
      },
      {
        number: "04",
        title: "Admin Panel",
        description:
          "Built a separate admin interface for adding food items, uploading images, viewing menu records, and updating order statuses.",
        period: "July 2025",
      },
      {
        number: "05",
        title: "Deployment & Demo Setup",
        description:
          "Configured environment variables, connected the app to a MongoDB-backed demo database, deployed the project on Render, and prepared it for portfolio presentation.",
        period: "July 2025",
      },
    ],

    results: [
      {
        value: "Cart",
        label: "Ordering Flow",
        icon: "🛒",
      },
      {
        value: "Admin",
        label: "Management Panel",
        icon: "📊",
      },
      {
        value: "Stripe",
        label: "Test Checkout",
        icon: "💳",
      },
      {
        value: "Live",
        label: "Render Deploy",
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
  {
    slug: "movella",
    title: "Movella",
    category: "frontend",
    isFeatured: false,
    filters: ["Front-End", "React", "JavaScript", "API"],
    summary:
      "A cinematic movie discovery web app built with React, Vite, Sass, React Router, Swiper, React Slick, and the TMDB API.",
    description:
      "Movella is a responsive movie discovery application that lets users explore curated movie sections, view cinematic hero backdrops, search films, watch trailers, browse cast details, and save favourites locally. The project uses React, Vite, Sass, React Router, Swiper, React Slick, Context API, localStorage, and the TMDB API to create a polished front-end movie browsing experience with dynamic data and modern visual interaction.",
    role: "Front-End Developer / UI-UX Designer",
    year: "2025",
    type: "Front-End / API Integration",
    heroImage: "/images/projects/movella/movella-hero.webp",
    thumbnail: "/images/projects/movella/movella-thumbnail.webp",
    liveUrl: "https://movella.vercel.app/",
    githubUrl: "https://github.com/Ian-Hyosang-Han/movella",

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
        value: "Movie Discovery / API Integration",
      },
    ],

    overviewHighlights: [
      {
        title: "Movie Discovery",
        description:
          "Allows users to explore upcoming, now playing, popular, and top-rated movies through dynamic TMDB data.",
        icon: Film,
      },
      {
        title: "Cinematic UI",
        description:
          "Uses full-screen backdrops, animated hero sections, hover cards, and responsive layouts to create an immersive movie browsing experience.",
        icon: Clapperboard,
      },
      {
        title: "Favourites System",
        description:
          "Stores saved movies in localStorage using Context API for persistent client-side favourites.",
        icon: Heart,
      },
    ],

    features: [
      {
        number: "01",
        title: "Cinematic Landing Page",
        description:
          "Displays a random full-screen movie backdrop and introduces users to the app through a simple entry flow.",
      },
      {
        number: "02",
        title: "Dynamic Movie Sections",
        description:
          "Fetches upcoming, now playing, popular, and top-rated movie lists from the TMDB API and presents them in carousel-based sections.",
      },
      {
        number: "03",
        title: "Full-Screen Hero Experience",
        description:
          "Highlights featured movies with backdrop imagery, metadata, overview text, trailer access, and favourite actions.",
      },
      {
        number: "04",
        title: "Movie Detail Pages",
        description:
          "Shows detailed movie information including poster, backdrop, release date, runtime, genres, rating, overview, trailer, and cast members.",
      },
      {
        number: "05",
        title: "Search & Trailer Flow",
        description:
          "Provides movie search through the navigation and opens available YouTube trailers in a custom modal.",
      },
      {
        number: "06",
        title: "Local Favourites",
        description:
          "Uses Context API and localStorage to let users save, view, and remove favourite movies across sessions.",
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
        name: "Sass",
        textIcon: "Sass",
        color: "text-[#CC6699]",
      },
      {
        name: "React Router",
        textIcon: "RR",
        color: "text-[#f0a6a6]",
      },
      {
        name: "TMDB API",
        textIcon: "API",
        color: "text-[#01D277]",
      },
      {
        name: "Context API",
        textIcon: "CTX",
        color: "text-[#9fb6c3]",
      },
      {
        name: "LocalStorage",
        textIcon: "LS",
        color: "text-[#d7e58d]",
      },
      {
        name: "Swiper",
        textIcon: "SW",
        color: "text-[#8fb6ff]",
      },
      {
        name: "React Slick",
        textIcon: "RS",
        color: "text-[#c7b7d8]",
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
          "Defined the movie discovery flow, landing experience, home sections, detail pages, and favourite movie interactions.",
        period: "January 2025",
      },
      {
        number: "02",
        title: "API Integration",
        description:
          "Connected the application to the TMDB API for movie lists, details, trailers, cast information, and dynamic backdrops.",
        period: "January 2025",
      },
      {
        number: "03",
        title: "Interface Design",
        description:
          "Created a cinematic visual direction with full-screen imagery, overlay gradients, modern navigation, hover cards, and responsive layouts.",
        period: "February 2025",
      },
      {
        number: "04",
        title: "State Management",
        description:
          "Implemented client-side favourite movie persistence using Context API and localStorage.",
        period: "February 2025",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Configured the project for Vercel deployment with environment variables and production build verification.",
        period: "March 2025",
      },
    ],

    results: [
      {
        value: "TMDB",
        label: "Live Movie API",
        icon: "🎬",
      },
      {
        value: "Trailer",
        label: "YouTube Modal",
        icon: "▶️",
      },
      {
        value: "Local",
        label: "Favourites Storage",
        icon: "❤️",
      },
      {
        value: "Live",
        label: "Vercel Deploy",
        icon: "🚀",
      },
    ],
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio V1",
    category: "frontend",
    isFeatured: false,
    filters: ["Front-End", "React", "JavaScript", "Portfolio"],
    summary:
      "The first version of my personal developer portfolio, built with React, Vite, JavaScript, CSS, Tailwind CSS, React Router, and React Icons.",
    description:
      "Portfolio V1 is the first version of my personal developer portfolio. It was built to introduce my background, present selected projects, and practice responsive portfolio design with React, Vite, JavaScript, CSS, Tailwind CSS, React Router, and React Icons. This version represents an earlier stage of my front-end development journey and helped me explore component-based structure, project detail pages, responsive layouts, animated interactions, custom navigation, and visual storytelling before moving on to newer portfolio iterations.",
    role: "Front-End Developer / UI-UX Designer",
    year: "2024 - 2025",
    type: "Personal Portfolio / Previous Version",
    heroImage: "/images/projects/portfolio-v1/pfv1-hero.webp",
    thumbnail: "/images/projects/portfolio-v1/pfv1-thumbnail.webp",
    liveUrl: "https://dev-portfolio-pi-gray.vercel.app/",
    githubUrl: "https://github.com/Ian-Hyosang-Han/dev-portfolio",

    overviewItems: [
      {
        label: "Role",
        value: "Front-End Developer / UI-UX Designer",
      },
      {
        label: "Duration",
        value: "Dec 2024 - Mar 2025",
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
        value: "Developer Portfolio / Version 1",
      },
    ],

    overviewHighlights: [
      {
        title: "Portfolio Structure",
        description:
          "Presents personal information, project categories, selected work, skills, and project detail pages through a responsive portfolio layout.",
        icon: LayoutDashboard,
      },
      {
        title: "Static Project Data",
        description:
          "Uses a structured local project data file to render project listings, detail pages, roles, features, reflections, and related projects.",
        icon: Database,
      },
      {
        title: "Interactive Experience",
        description:
          "Includes custom navigation, animated typing text, cursor interaction, and responsive visual sections.",
        icon: ShieldCheck,
      },
    ],

    features: [
      {
        number: "01",
        title: "Responsive Portfolio Layout",
        description:
          "Built a personal portfolio interface that adapts across desktop, tablet, and mobile screens.",
      },
      {
        number: "02",
        title: "Project Listing & Detail Pages",
        description:
          "Created project category pages and individual project detail pages using React Router and structured local project data.",
      },
      {
        number: "03",
        title: "Custom Navigation",
        description:
          "Implemented a responsive navigation experience with mobile menu interaction and custom visual assets.",
      },
      {
        number: "04",
        title: "Animated Typing Section",
        description:
          "Added animated text content to communicate design and development values in a more expressive way.",
      },
      {
        number: "05",
        title: "Interactive Cursor",
        description:
          "Built a custom cursor effect to add personality and interaction to the desktop experience.",
      },
      {
        number: "06",
        title: "Tailwind CSS Practice",
        description:
          "Used Tailwind CSS in selected sections to improve styling speed, responsiveness, and utility-based layout control.",
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
        name: "HTML5",
        textIcon: "HTML",
        color: "text-[#E34F26]",
      },
      {
        name: "CSS3",
        textIcon: "CSS",
        color: "text-[#1572B6]",
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
        name: "React Icons",
        textIcon: "RI",
        color: "text-[#c7b7d8]",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#f05032]",
      },
      {
        name: "Vercel",
        textIcon: "VC",
        color: "text-white",
      },
    ],

    process: [
      {
        number: "01",
        title: "Planning",
        description:
          "Defined the first portfolio structure, including home, about, project listing, and project detail pages.",
        period: "December 2024",
      },
      {
        number: "02",
        title: "Component Structure",
        description:
          "Built reusable React components for navigation, sections, buttons, project cards, project details, and interactive UI elements.",
        period: "January 2025",
      },
      {
        number: "03",
        title: "Project Data Setup",
        description:
          "Organized portfolio projects in a structured local data file to support reusable project listing and detail pages.",
        period: "February 2025",
      },
      {
        number: "04",
        title: "Responsive Styling",
        description:
          "Combined custom CSS and Tailwind CSS to create responsive layouts, visual sections, and mobile-friendly interfaces.",
        period: "February 2025",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Deployed the portfolio to Vercel as the first live version of my personal developer portfolio.",
        period: "March 2025",
      },
    ],

    results: [
      {
        value: "V1",
        label: "Portfolio Version",
        icon: "🧩",
      },
      {
        value: "React",
        label: "Component UI",
        icon: "⚛️",
      },
      {
        value: "Pages",
        label: "Project Details",
        icon: "📄",
      },
      {
        value: "Live",
        label: "Vercel Deploy",
        icon: "🚀",
      },
    ],
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio V2",
    category: "frontend",
    isFeatured: false,
    filters: ["Front-End", "Next.js", "TypeScript", "Portfolio"],
    summary:
      "A modern developer portfolio rebuilt with Next.js, TypeScript, Tailwind CSS, and a structured project data system to better support scalable case-study presentation.",
    description:
      "Portfolio V2 is the current version of my personal developer portfolio. After building my first portfolio with React and Vite, I rebuilt this version with Next.js, TypeScript, and Tailwind CSS to move closer to a more scalable, production-oriented front-end architecture. The decision to use Next.js came from wanting to grow beyond a purely client-side React app and better understand patterns that are useful in larger real-world projects, including file-based routing, static generation, structured content, metadata handling, optimized project pages, and a clearer foundation for future full-stack development. The portfolio is designed as a reusable project presentation system with structured data, dynamic project detail pages, responsive layouts, and a more refined visual direction.",
    role: "Front-End Developer / UI-UX Designer",
    year: "2026",
    type: "Personal Portfolio / Current Version",
    heroImage: "/images/projects/portfolio-v2/pfv2-hero.webp",
    thumbnail: "/images/projects/portfolio-v2/pfv2-thumbnail.webp",
    liveUrl: "https://hyosanghan.com",
    githubUrl: "https://github.com/Ian-Hyosang-Han/dev-portfolio-v2",

    overviewItems: [
      {
        label: "Role",
        value: "Front-End Developer / UI-UX Designer",
      },
      {
        label: "Duration",
        value: "2026",
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
        value: "Developer Portfolio / Version 2",
      },
    ],

    overviewHighlights: [
      {
        title: "Next.js Architecture",
        description:
          "Uses Next.js App Router, file-based routing, static project pages, and a scalable structure suited for larger front-end applications.",
        icon: LayoutDashboard,
      },
      {
        title: "Structured Project System",
        description:
          "Organizes project content through typed data objects to generate reusable listing pages, detail pages, feature sections, process sections, and tech stacks.",
        icon: Database,
      },
      {
        title: "Production-Oriented Growth",
        description:
          "Rebuilt from a React-only portfolio to better practice patterns that support real-world projects, maintainability, and future full-stack development.",
        icon: ShieldCheck,
      },
    ],

    features: [
      {
        number: "01",
        title: "Next.js App Router Structure",
        description:
          "Uses Next.js file-based routing to organize home, about, project listing, and dynamic project detail pages in a clearer application structure.",
      },
      {
        number: "02",
        title: "Typed Project Data",
        description:
          "Defines project content with TypeScript types, making project pages easier to scale, maintain, and reuse across the portfolio.",
      },
      {
        number: "03",
        title: "Dynamic Project Detail Pages",
        description:
          "Generates individual project case-study pages using project slugs, structured content, overview highlights, features, process steps, and results.",
      },
      {
        number: "04",
        title: "Modern Portfolio Presentation",
        description:
          "Creates a refined visual system for presenting selected work with responsive layouts, project cards, hero sections, and consistent detail sections.",
      },
      {
        number: "05",
        title: "Scalable Front-End Foundation",
        description:
          "Moves beyond a simple client-side React portfolio by practicing architecture patterns that are more suitable for larger production applications.",
      },
      {
        number: "06",
        title: "Full-Stack Learning Direction",
        description:
          "Uses Next.js as a step toward deeper full-stack development knowledge, including routing, rendering strategies, metadata, and future server-side capabilities.",
      },
    ],

    techStack: [
      {
        name: "Next.js",
        textIcon: "Next",
        color: "text-white",
      },
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
        name: "Tailwind CSS",
        textIcon: "TW",
        color: "text-[#38BDF8]",
      },
      {
        name: "App Router",
        textIcon: "AR",
        color: "text-[#d7e58d]",
      },
      {
        name: "Static Generation",
        textIcon: "SSG",
        color: "text-[#b8c77a]",
      },
      {
        name: "Typed Data",
        textIcon: "Type",
        color: "text-[#9fb6c3]",
      },
      {
        name: "Lucide Icons",
        textIcon: "LI",
        color: "text-[#c7b7d8]",
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
        icon: SiGit,
        color: "text-[#f05032]",
      },
    ],

    process: [
      {
        number: "01",
        title: "Review & Direction",
        description:
          "Reviewed the limitations of the first portfolio version and decided to rebuild with a more scalable structure for project presentation and future growth.",
        period: "April 2026",
      },
      {
        number: "02",
        title: "Framework Decision",
        description:
          "Chose Next.js to move beyond a React-only portfolio and practice routing, rendering, metadata, and architecture patterns used in larger production projects.",
        period: "April 2026",
      },
      {
        number: "03",
        title: "Data Architecture",
        description:
          "Created typed project data structures to manage project summaries, overview items, features, tech stacks, process steps, and results consistently.",
        period: "May 2026",
      },
      {
        number: "04",
        title: "Interface Design",
        description:
          "Designed responsive home, about, project listing, and project detail pages with a more polished visual system and reusable layout sections.",
        period: "May 2026",
      },
      {
        number: "05",
        title: "Deployment",
        description:
          "Prepared the portfolio for Vercel deployment, verified lint and production build, and organized project assets for live presentation.",
        period: "June 2026",
      },
    ],

    results: [
      {
        value: "V2",
        label: "Current Portfolio",
        icon: "🧭",
      },
      {
        value: "Next",
        label: "App Router",
        icon: "▲",
      },
      {
        value: "Typed",
        label: "Project Data",
        icon: "🧩",
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
