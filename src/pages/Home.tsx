import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowRight, Download } from "lucide-react"
import SkillsSection from "@/components/SkillsSection"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"


const STACK = ["React", "Python", "Next.js", "PostgreSQL" , "AWS"]

export default function Home() {
  return (
    <main className="safe-bottom">

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-24">
        <div aria-hidden className="ambient-glow pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
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
              className="mb-4 text-[clamp(2.75rem,2.2rem+3.6vw,6.5rem)] leading-[0.95] tracking-[-0.03em]"
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
                
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-medium text-primary-foreground shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] transition-[background-color,transform,box-shadow] duration-150 hover:bg-primary/90 hover:shadow-[0_10px_28px_-12px_rgba(0,0,0,0.5)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-border px-8 py-4 font-medium text-foreground transition-[background-color,transform] duration-150 hover:bg-accent active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-signal/40 bg-signal/10 px-8 py-4 font-medium text-signal transition-[background-color,transform] duration-150 hover:bg-signal/15 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_60px_-24px_rgba(15,23,42,0.35)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_60px_-24px_rgba(0,0,0,0.65)]"
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
    </main>
  )
}
