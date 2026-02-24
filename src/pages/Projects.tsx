import Card from "@/components/Card"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLink } from "react-icons/fa"

const Projects = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-12 sm:mt-16 w-full flex flex-col gap-4 safe-bottom">
      <h1>Projects</h1>
      <h4 className="text-muted-foreground">These are my projects on which I try to work actively.</h4>

      <div className="flex flex-col gap-10 mt-4">

        <Card
          title={
            <div>
              <h2 className="mb-2">Job Tracker</h2>
              <div className="flex flex-row justify-between">
                <p className="text-muted-foreground text-sm sm:text-base font-light">
                  Next.js (App Router) | TypeScript | Prisma | Supabase (Postgres) | shadcn/ui
                </p>
                <p className="text-muted-foreground text-sm sm:text-base font-light mr-15">
                  January 2026
                </p>
              </div>
            </div>
          }
          description={
            <>
              <p className="text-foreground mr-10">
                A full-stack job application tracker that lets users create, manage, and update their job applications
                with secure authentication and per-user data isolation. Built with a modern Next.js App Router
                architecture, using API routes as the server boundary and a clean shadcn/ui interface.
                <br />
                <br />
                <span className="font-bold">Features</span>
                <br />
                • Authenticated CRUD: create, view, update status, and delete applications
                <br />
                • Authorization enforced at the API layer (users can only access their own records)
                <br />
                • Prisma + Supabase Postgres integration with production deployment on Vercel
                <br />
                • Clean UI: list view + per-application detail view with editable status
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/cesargarciari/job-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" className="home-button">
                    <FaGithub className="text-secondary-foreground" />
                  </Button>
                </a>

                <a href="https://job-tracker-rose.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="home-button">
                    <FaLink className="text-secondary-foreground" />
                  </Button>
                </a>
              </div>
            </>
          }
        />

        <Card
          title={
            <div>
              <h2 className="mb-2">Unify – Campus Event Platform</h2>
              <div className="flex flex-row justify-between">
                <p className="text-muted-foreground text-sm sm:text-base font-light">
                  Next.js | FastAPI | PostgreSQL
                </p>
                <p className="text-muted-foreground text-sm sm:text-base font-light mr-15">
                  Sept–Dec 2025
                </p>
              </div>
            </div>
          }
          description={
            <>
              <p className="text-foreground mr-10">
                A full-stack campus event management platform built as a SENG 513 group project. Unify
                centralizes event communication by allowing organizers to create events and students
                to discover activities, RSVP, and receive reminders in one system.
                <br /><br />
                <span className="font-bold">Features</span>
                <br />
                • Event discovery with search, filters, and category tags
                <br />
                • Real-time RSVP system with capacity tracking
                <br />
                • Role-based access for students, organizers, admins, and guests
                <br />
                • REST API built with FastAPI connected to a PostgreSQL database
              </p>

              <div className="mt-4 flex gap-2">
                <a href="https://github.com/cesargarciari/Unify" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="home-button">
                    <FaGithub className="text-secondary-foreground" />
                  </Button>
                </a>
              </div>
            </>
          }
        />

        <Card
          title={
            <div>
              <h2>Website</h2>
              <div className="flex flex-row justify-between">
                <p className="text-muted-foreground text-sm sm:text-base font-light">
                  Vite | React | Tailwind CSS | TypeScript
                </p>
                <p className="text-muted-foreground text-sm sm:text-base font-light mr-15">
                  April-May 2025
                </p>
              </div>
            </div>
          }
          description={
            <>
              <p className="text-foreground mr-10">
                A responsive, minimalistic web portfolio designed to showcase my software development projects,
                skills, and experience. The site focuses on performance, accessibility, and clean design. It includes
                minimalist animations, organized project cards, and a dynamic layout optimized for all devices.
                <br />
                <br />
                <span className="font-bold">Features</span>
                <br />
                • Developed from scratch using modern frontend tools
                <br />
                • Fully responsive and optimized for performance
                <br />
                • Built with reusable, scalable components in TypeScript
                <br />
                • Emphasizes clean UI/UX and minimalistic design principles
              </p>
              <div className="mt-4">
                <a href="https://github.com/cesargarciari/PortfolioWebsite" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="home-button">
                    <FaGithub className="text-secondary-foreground" />
                  </Button>
                </a>
              </div>
            </>
          }
        />

        <Card
          title={
            <div>
              <h2>NBA MVP Ranking Model</h2>
              <div className="flex flex-row justify-between">
                <p className="text-muted-foreground text-sm sm:text-base font-light">
                  Python (Modules: Pandas, Scikit-Learn)
                </p>
                <p className="text-muted-foreground text-sm sm:text-base font-light mr-15">
                  March-April 2025
                </p>
              </div>
            </div>
          }
          description={
            <>
              <p className="text-foreground mr-10">
                This project is a machine learning-based predictor that determines the Most Valuable Player (MVP)
                for the NBA based on historical player statistics and performance metrics.
                <br />
                <br />
                <span className="font-bold">Features</span>
                <br />
                • Predicts MVP candidates using various machine learning models (Regression and Random Forest currently)
                <br />
                • Supports classification and ranking of players
                <br />
                • Includes data preprocessing, feature engineering, and model evaluation
              </p>
              <div className="mt-4">
                <a href="https://github.com/cesargarciari/NBA-MVP-Predictor" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="home-button">
                    <FaGithub className="text-secondary-foreground" />
                  </Button>
                </a>
              </div>
            </>
          }
        />

        <Card
          title={
            <div>
              <h2 className="mb-2">RateMyDino - Professor Summary Web App</h2>
              <div className="flex flex-row justify-between">
                <p className="text-muted-foreground text-sm sm:text-base font-light">
                  Python | Next.js | OpenAI API
                </p>
                <p className="text-muted-foreground text-sm sm:text-base font-light mr-15">
                  January-March 2025
                </p>
              </div>
            </div>
          }
          description={
            <>
              <p className="text-foreground mr-10">
                A full-stack web application built to help University of Calgary students quickly understand professor reviews
                using AI-generated summaries from RateMyProfessor data.
                <br />
                <br />
                <span className="font-bold">Features</span>
                <br />
                • Backend in Python with prompt engineering for OpenAI API integration
                <br />
                • SQL database with a layered MVC architecture
                <br />
                • Frontend in React (Next.js) with dynamic professor pages
              </p>
              <div className="mt-4">
                <a href="https://ratemydino.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="home-button">
                    <FaLink className="text-secondary-foreground" />
                  </Button>
                </a>
              </div>
            </>
          }
        />

        <Card
          title={
            <div>
              <h2 className="mb-2">Movie Theatre Reservation Application</h2>
              <div className="flex flex-row justify-between">
                <p className="text-muted-foreground text-sm sm:text-base font-light">
                  Java (Libraries: mysql-connector) | MySQL
                </p>
                <p className="text-muted-foreground text-sm sm:text-base font-light mr-15">
                  October-November 2024
                </p>
              </div>
            </div>
          }
          description={
            <>
              <p className="text-foreground mr-10">
                A Java-based desktop application with a graphical user interface for managing a personal movie database.
                Designed to reinforce Object-Oriented Programming (OOP) principles.
                <br />
                <br />
                <span className="font-bold">Features</span>
                <br />
                • GUI developed in Java
                <br />
                • Add, update, search, and delete reservations
                <br />
                • Follows OOP principles: encapsulation, inheritance, polymorphism
                <br />
                • Connects to a SQL database for persistent storage
              </p>
              <div className="mt-4">
                <a href="https://github.com/cesargarciari/Movie-Management-System" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="home-button">
                    <FaGithub className="text-secondary-foreground" />
                  </Button>
                </a>
              </div>
            </>
          }
        />

      </div>
    </div>
  )
}

export default Projects
