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
