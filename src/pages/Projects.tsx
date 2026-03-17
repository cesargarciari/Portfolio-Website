import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, ExternalLink, Calendar } from "lucide-react"

interface Project {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  date: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    id: "braindump",
    name: "BrainDump",
    tagline: "A cognitive relief tool designed to reduce overwhelm by narrowing focus to 3–4 tasks using AI-driven triage.",
    description:
      "An AI-powered cognitive relief tool that helps users cut through mental noise. Paste your overwhelming task list and let GPT-4o triage it down to 3–4 actionable priorities. Features drag-and-drop reordering, AI voice readback via OpenAI TTS, and persistent task state backed by Supabase.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS", "shadcn/ui", "@dnd-kit"],
    date: "March 2026",
    github: "https://github.com/ZeengFong/CursorHackathon/",
    live: "https://braindump.lucasuanez.codes",
  },
  {
    id: "job-tracker",
    name: "Job Tracker",
    tagline: "A full-stack job application tracker with secure authentication and per-user data isolation.",
    description:
      "A full-stack job application tracker that lets users create, manage, and update their job applications with secure authentication and per-user data isolation. Built with a modern Next.js App Router architecture, using API routes as the server boundary and a clean shadcn/ui interface. Features authenticated CRUD, authorization enforced at the API layer, Prisma + Supabase Postgres integration, and a clean list view with per-application detail and editable status.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "shadcn/ui"],
    date: "January 2026",
    github: "https://github.com/cesargarciari/job-tracker",
    live: "https://job-tracker-rose.vercel.app/",
  },
  {
    id: "unify",
    name: "Unify – Campus Event Platform",
    tagline: "A campus event management platform centralizing event discovery, RSVPs, and reminders for students.",
    description:
      "A full-stack campus event management platform built as a SENG 513 group project. Unify centralizes event communication by allowing organizers to create events and students to discover activities, RSVP, and receive reminders in one system. Features event discovery with search, filters, and category tags, a real-time RSVP system with capacity tracking, role-based access for students, organizers, admins, and guests, and a REST API built with FastAPI connected to a PostgreSQL database.",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    date: "Sept–Dec 2025",
    github: "https://github.com/cesargarciari/Unify",
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    tagline: "A responsive, minimalistic portfolio built from scratch to showcase projects, skills, and experience.",
    description:
      "A responsive, minimalistic web portfolio designed to showcase my software development projects, skills, and experience. The site focuses on performance, accessibility, and clean design. It includes minimalist animations, organized project cards, and a dynamic layout optimized for all devices. Developed from scratch using modern frontend tools with fully responsive, reusable, scalable components in TypeScript.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    date: "April–May 2025",
    github: "https://github.com/cesargarciari/PortfolioWebsite",
  },
  {
    id: "nba-mvp",
    name: "NBA MVP Ranking Model",
    tagline: "A machine learning predictor that ranks NBA MVP candidates based on historical player statistics.",
    description:
      "A machine learning-based predictor that determines the Most Valuable Player (MVP) for the NBA based on historical player statistics and performance metrics. Predicts MVP candidates using multiple ML models (Regression and Random Forest), supports classification and ranking of players, and includes data preprocessing, feature engineering, and model evaluation.",
    stack: ["Python", "Pandas", "Scikit-Learn"],
    date: "March–April 2025",
    github: "https://github.com/cesargarciari/NBA-MVP-Predictor",
  },
  {
    id: "ratemydino",
    name: "RateMyDino",
    tagline: "A web app helping University of Calgary students quickly understand professor reviews via AI summaries.",
    description:
      "A full-stack web application built to help University of Calgary students quickly understand professor reviews using AI-generated summaries from RateMyProfessor data. Features a Python backend with prompt engineering for OpenAI API integration, a SQL database with a layered MVC architecture, and a React (Next.js) frontend with dynamic professor pages.",
    stack: ["Python", "Next.js", "OpenAI API"],
    date: "January–March 2025",
    live: "https://ratemydino.vercel.app/",
  },
  {
    id: "movie-theatre",
    name: "Movie Theatre Reservation App",
    tagline: "A Java desktop application with a GUI for managing movie theatre reservations backed by a SQL database.",
    description:
      "A Java-based desktop application with a graphical user interface for managing a movie theatre reservation system. Designed to reinforce Object-Oriented Programming principles. Features a Java-built GUI, add/update/search/delete reservation operations, OOP principles including encapsulation, inheritance, and polymorphism, and a SQL database connection for persistent storage.",
    stack: ["Java", "mysql-connector", "MySQL"],
    date: "October–November 2024",
    github: "https://github.com/cesargarciari/Movie-Management-System",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-background py-20 safe-bottom">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of things I've built
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-border bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} GitHub repository`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} live demo`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-sm font-medium text-cyan-400">
                    {project.tagline}
                  </CardDescription>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.date}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary text-secondary-foreground hover:bg-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
