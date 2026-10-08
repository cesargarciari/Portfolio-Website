export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  date: string
  year: number
  /** Shown in the short list on the home page. */
  featured?: boolean
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: "chipy",
    name: "Chipy",
    tagline: "Full-stack NBA career simulator with deterministic, seeded-RNG engine running client and server side.",
    description:
      "Build a player from high school through college, draft, and 15+ pro seasons of contracts, trades, playoffs, and legacy stats. Pure TypeScript engine (seeded RNG) runs client-side for instant offline play and server-side as source of truth on career save/share. Ships as serverless AWS stack (S3/CloudFront, Lambda, DynamoDB), Terraform-provisioned, GitHub Actions deploy. Monorepo, one shared zod-validated API contract between client and server.",
    stack: ["TypeScript", "AWS", "Terraform", "Lambda", "DynamoDB", "CloudFront", "Zod", "GitHub Actions"],
    date: "Aug 2026 – now",
    year: 2026,
    featured: true,
    live: "https://chipy.cesargarciar.dev",
  },
  {
    id: "braindump",
    name: "BrainDump",
    tagline: "A cognitive relief tool designed to reduce overwhelm by narrowing focus to 3–4 tasks using AI-driven triage.",
    description:
      "An AI-powered cognitive relief tool that helps users cut through mental noise. Paste your overwhelming task list and let GPT-4o triage it down to 3–4 actionable priorities. Features drag-and-drop reordering, AI voice readback via OpenAI TTS, and persistent task state backed by Supabase.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS", "shadcn/ui", "@dnd-kit"],
    date: "Mar 2026",
    year: 2026,
    featured: true,
    github: "https://github.com/ZeengFong/CursorHackathon/",
    live: "https://braindump.lucasuanez.codes",
  },
  {
    id: "job-tracker",
    name: "Job tracker",
    tagline: "A full-stack job application tracker with secure authentication and per-user data isolation.",
    description:
      "A full-stack job application tracker that lets users create, manage, and update their job applications with secure authentication and per-user data isolation. Built with a modern Next.js App Router architecture, using API routes as the server boundary and a clean shadcn/ui interface. Features authenticated CRUD, authorization enforced at the API layer, Prisma + Supabase Postgres integration, and a clean list view with per-application detail and editable status.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "shadcn/ui"],
    date: "Jan 2026",
    year: 2026,
    github: "https://github.com/cesargarciari/job-tracker",
  },
  {
    id: "unify",
    name: "Unify",
    tagline: "A campus event management platform centralizing event discovery, RSVPs, and reminders for students.",
    description:
      "A full-stack campus event management platform built as a SENG 513 group project. Unify centralizes event communication by allowing organizers to create events and students to discover activities, RSVP, and receive reminders in one system. Features event discovery with search, filters, and category tags, a real-time RSVP system with capacity tracking, role-based access for students, organizers, admins, and guests, and a REST API built with FastAPI connected to a PostgreSQL database.",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    date: "Sep – Dec 2025",
    year: 2025,
    featured: true,
    github: "https://github.com/cesargarciari/Unify",
  },
  {
    id: "portfolio",
    name: "This portfolio",
    tagline: "A scroll-driven portfolio, built from scratch, that tells the story from El Salvador to Calgary.",
    description:
      "Designed and built from scratch with React and TypeScript. Smooth scrolling with Lenis, scroll-linked motion with Motion, and a light and dark palette drawn from the cobalt and white of El Salvador. Every section is a reusable, typed component, and every animation honors reduced-motion settings.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Motion", "Lenis"],
    date: "Apr 2025 – now",
    year: 2025,
    github: "https://github.com/cesargarciari/PortfolioWebsite",
  },
  {
    id: "nba-mvp",
    name: "NBA MVP ranking model",
    tagline: "A machine learning predictor that ranks NBA MVP candidates based on historical player statistics.",
    description:
      "A machine learning-based predictor that determines the Most Valuable Player (MVP) for the NBA based on historical player statistics and performance metrics. Predicts MVP candidates using multiple ML models (Regression and Random Forest), supports classification and ranking of players, and includes data preprocessing, feature engineering, and model evaluation.",
    stack: ["Python", "Pandas", "Scikit-Learn"],
    date: "Mar – Apr 2025",
    year: 2025,
    featured: true,
    github: "https://github.com/cesargarciari/NBA-MVP-Predictor",
  },
  {
    id: "ratemydino",
    name: "RateMyDino",
    tagline: "A web app helping University of Calgary students quickly understand professor reviews via AI summaries.",
    description:
      "A full-stack web application built to help University of Calgary students quickly understand professor reviews using AI-generated summaries from RateMyProfessor data. Features a Python backend with prompt engineering for OpenAI API integration, a SQL database with a layered MVC architecture, and a React (Next.js) frontend with dynamic professor pages.",
    stack: ["Python", "Next.js", "OpenAI API"],
    date: "Jan – Mar 2025",
    year: 2025,
    live: "https://ratemydino.vercel.app/",
  },
  {
    id: "movie-theatre",
    name: "Movie theatre reservations",
    tagline: "A Java desktop application with a GUI for managing movie theatre reservations backed by a SQL database.",
    description:
      "A Java-based desktop application with a graphical user interface for managing a movie theatre reservation system. Designed to reinforce Object-Oriented Programming principles. Features a Java-built GUI, add/update/search/delete reservation operations, OOP principles including encapsulation, inheritance, and polymorphism, and a SQL database connection for persistent storage.",
    stack: ["Java", "mysql-connector", "MySQL"],
    date: "Oct – Nov 2024",
    year: 2024,
    github: "https://github.com/cesargarciari/Movie-Management-System",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
