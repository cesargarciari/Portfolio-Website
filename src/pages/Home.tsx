import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SkillsSection from "@/components/SkillsSection"
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"

export default function Home() {
  return (
    <main className="safe-bottom">
      {/* Hero */}
      <section className="flex min-h-screen items-center px-4 py-24">
        <div className="max-w-4xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-muted-foreground mb-4 text-lg"
          >
            Hey there, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            César García
            <p className="text-muted-foreground text-sm sm:text-base font-light">
              Calgary, Alberta/El Salvador
            </p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            A software engineering student passionate about building clean,
            performant web applications and exploring new technologies.
            <div className="flex flex-row gap-2 mt-4">
              <a href="https://github.com/cesargarciari" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="home-button">
                  <FaGithub className="text-secondary-foreground" />
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/cesargarciarivas/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="home-button">
                  <IoLogoLinkedin className="text-secondary-foreground" />
                </Button>
              </a>

              <a href="https://www.instagram.com/cesargarciaar/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="home-button">
                  <FaInstagram className="text-secondary-foreground" />
                </Button>
              </a>
            </div>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-medium transition hover:bg-primary/90"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-border px-6 py-3 text-foreground font-medium transition hover:bg-accent"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
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
              className="w-full sm:w-auto bg-gradient-to-r from-[#00C9FF] to-[#00ffc3] hover:cursor-pointer text-black font-semibold"
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
