import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SkillsSection from "@/components/SkillsSection"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"


const STACK = ["React", "Python", "Next.js", "PostgreSQL" , "AWS"]

export default function Home() {
  return (
    <main className="safe-bottom">

      <section className="flex min-h-screen items-center px-4 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex flex-wrap gap-2"
            >
              <Badge variant="secondary">Calgary, AB</Badge>
              <Badge variant="secondary">El Salvador</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            >
              César García
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-signal mb-4 text-lg font-semibold tracking-tight sm:text-xl"
            >
              Software Engineering Graduate | Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Passionate about building clean, performant web applications and exploring new
              technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-10 flex flex-wrap items-center gap-3"
            >
              <a href="https://github.com/cesargarciari" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="icon"
                  className="home-button h-11 w-11 rounded-xl"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-secondary-foreground text-lg" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/cesargarciarivas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="home-button h-11 w-11 rounded-xl"
                  aria-label="LinkedIn"
                >
                  <IoLogoLinkedin className="text-secondary-foreground text-lg" />
                </Button>
              </a>

              <a
                href="https://www.instagram.com/cesargarciaar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="home-button h-11 w-11 rounded-xl"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-secondary-foreground text-lg" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-border px-8 py-4 font-medium text-foreground transition-colors hover:bg-accent"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/10"
          >
            <div aria-hidden className="flex items-center gap-1.5 border-b border-border px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">cesar.ts</span>
            </div>

            <div className="px-6 py-6 font-mono text-sm leading-relaxed sm:text-base">
              <p>
                <span className="text-muted-foreground">const</span> cesar{" "}
                <span className="text-muted-foreground">=</span> {"{"}
              </p>
              <p className="pl-4">
                role: <span className="text-signal">'Software Engineer New Grad'</span>,
              </p>
              <p className="pl-4">
                base: <span className="text-signal">'Calgary, AB'</span>,
              </p>
              <p className="pl-4">stack: [</p>
              {STACK.map((tech) => (
                <p key={tech} className="pl-8">
                  <span className="text-signal">'{tech}'</span>,
                </p>
              ))}
              <p className="pl-4">],</p>
              <p className="pl-4">
                focus: <span className="text-signal">'clean, performant web apps'</span>,
              </p>
              <p>{"}"}</p>
            </div>
          </motion.div>
        </div>
      </section>


      <SkillsSection />
      <section className="px-4 pb-24">
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
        <div className="max-w-4xl mx-auto w-full"> {/* This keeps it aligned with the text above */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mt-4">
            <Button
              variant="secondary"
              className="w-full sm:w-auto bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:cursor-pointer text-black font-semibold"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
        </motion.div>
      </section>
    </main>
  )
}
