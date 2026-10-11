/** App icons shown by ProjectMark; only projects with a case study have one so far. */
export type ProjectIcon = "chipy"

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
  /** Has a full case study at /projects/:id (see src/data/case-studies). */
  caseStudy?: boolean
  icon?: ProjectIcon
}

export const projects: Project[] = [
  {
    id: "chipy",
    name: "Chipy",
    tagline: "Full-stack NBA career simulator with deterministic, seeded-RNG engine running client and server side.",
    description:
      "Pure TypeScript engine (seeded RNG) runs client-side for instant offline play and server-side as source of truth on career save/share. Ships as serverless AWS stack (S3/CloudFront, Lambda, DynamoDB), Terraform-provisioned, GitHub Actions deploy. Monorepo, one shared zod-validated API contract between client and server.",
    stack: ["TypeScript", "AWS", "Terraform", "Lambda", "DynamoDB", "CloudFront", "Zod", "GitHub Actions"],
    date: "Aug 2026 – now",
    year: 2026,
    featured: true,
    live: "https://chipy.cesargarciar.dev",
    caseStudy: true,
    icon: "chipy",
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
]

export const featuredProjects = projects.filter((project) => project.featured)
