# Ian Han Portfolio V2

This is the current version of my personal developer portfolio, rebuilt with Next.js, TypeScript, Tailwind CSS, and a structured project data system.

After building my first portfolio with React and Vite, I rebuilt this version to move toward a more scalable and production-oriented front-end architecture. I chose Next.js because I wanted to go beyond a client-side React portfolio and better understand patterns used in larger real-world projects, such as file-based routing, static generation, metadata handling, reusable page structures, typed data, and deployment workflows.

## 🔗 Live Site

- https://hyosanghan.com/

## 🚀 Overview

- Portfolio Version: Version 2
- Purpose: Current personal developer portfolio
- Focus: Project presentation, scalable front-end architecture, case-study pages, and responsive UI
- Status: Current Portfolio Version

## ✨ Features

- Next.js App Router: Uses file-based routing for home, about, project listing, and dynamic project detail pages.
- Typed Project Data: Uses TypeScript project data objects to manage project content consistently.
- Dynamic Project Pages: Generates project detail pages from project slugs and structured data.
- Project Filtering: Allows visitors to filter projects by category and technology.
- Featured Project Section: Highlights selected work separately from the main project grid.
- Responsive Layouts: Designed for desktop, tablet, and mobile screens.
- Reusable Components: Uses reusable project cards, detail sections, overview panels, process sections, and layout components.
- Modern Visual Direction: Presents projects with polished imagery, structured case-study content, and consistent UI sections.
- Deployment Ready: Built and prepared for Vercel deployment.

## 🛠️ Tech Stack

Frontend <br/>
<img alt="Next.js" src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
<img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" /><br/>

UI & Icons <br/>
<img alt="Lucide React" src="https://img.shields.io/badge/-Lucide_React-111111?style=flat-square&logo=lucide&logoColor=white" />
<img alt="React Icons" src="https://img.shields.io/badge/-React_Icons-45b8d8?style=flat-square&logo=react&logoColor=white" /><br/>

Tools & Deployment <br/>
<img alt="Git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
<img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" />
<img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />

## 🗂️ Project Structure

portfolio/
  public/
    images/
      about/
      home/
      navigation/
      projects/

  src/
    app/
      about/
      projects/
      projects/[slug]/
      layout.tsx
      page.tsx
      globals.css
    components/
      about/
      home/
      layout/
      projects/
    data/
      projects.ts
    lib/
      utils.ts
    styles/
      variables.css
    types/
      about.ts
      navigation.ts
      project.ts

## 📖 Usage

- Home: View the main portfolio introduction and overview sections.
- About: Learn more about my background, skills, timeline, and development direction.
- Projects: Browse featured and selected projects.
- Project Filters: Filter projects by technology or category.
- Project Details: View each project's overview, highlights, features, tech stack, process, and results.

## 🧠 What I Learned

- Rebuilt a portfolio from React/Vite to Next.js for a more scalable structure.
- Practiced Next.js App Router, static generation, dynamic route generation, and reusable page composition.
- Used TypeScript to make project data safer and easier to maintain.
- Designed a structured project presentation system instead of hardcoding each project page.
- Improved project storytelling by organizing content into overview, features, process, tech stack, and results.
- Prepared the project for a more realistic production deployment workflow with Vercel.

## 📝 Note

This portfolio is version 2 of my personal developer portfolio. It was built not only to display my projects, but also to practice architectural decisions that are more useful in larger real-world front-end and full-stack projects.