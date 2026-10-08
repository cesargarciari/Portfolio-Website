import { useEffect, useId, useRef, useState } from "react"
import { LayoutGroup, motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react"
import { pill } from "@/components/ui/pill"
import { useScrollTo } from "@/hooks/useScrollTo"
import type { Project } from "@/data/projects"
import { LAYOUT_SPRING } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface WorkIndexProps {
  projects: Project[]
}

interface ProjectEntryProps {
  project: Project
  onActive: (id: string) => void
}

/**
 * Each entry pulls focus as it crosses the middle of the screen and softens as
 * it leaves, like a lens following the reader. It reports itself as active
 * while it holds the centre band, which drives the sticky index.
 */
function ProjectEntry({ project, onActive }: ProjectEntryProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const centred = useInView(ref, { margin: "-45% 0px -45% 0px" })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.2])

  useEffect(() => {
    if (centred) onActive(project.id)
  }, [centred, onActive, project.id])

  return (
    <motion.article
      ref={ref}
      id={project.id}
      aria-labelledby={`${project.id}-name`}
      style={reduce ? undefined : { opacity }}
      className="flex scroll-mt-24 flex-col justify-center border-t border-line py-14 first:border-t-0 first:pt-0 lg:min-h-[72svh] lg:border-t-0 lg:py-20 lg:first:pt-20"
    >
      <p className="t-micro flex items-center gap-4 font-normal text-ink-45">
        <span>{project.date}</span>
        {project.live && (
          <span className="inline-flex items-center gap-2 text-ink-65">
            <span aria-hidden className="size-1.5 rounded-full bg-signal" />
            Live
          </span>
        )}
      </p>
      <h3 id={`${project.id}-name`} className="t-title-2 mt-4">
        {project.name}
      </h3>
      <p className="t-lead mt-5 max-w-[38ch]">{project.tagline}</p>
      <p className="mt-5 max-w-[62ch] text-ink-65">{project.description}</p>
      <p className="t-small mt-6 max-w-[62ch] text-ink-45">{project.stack.join(", ")}</p>
      {(project.live || project.github) && (
        <div className="mt-8 flex flex-wrap gap-2">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={pill({ variant: "secondary" })}>
              Visit the site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={pill({ variant: project.live ? "tertiary" : "secondary" })}
            >
              Read the code
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}

/**
 * Projects as an editorial index. On wide screens the names stay pinned on the
 * left and a cobalt dot glides to whichever project you're reading on the right.
 */
export default function WorkIndex({ projects }: WorkIndexProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id)
  const groupId = useId()
  const scrollTo = useScrollTo()

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
      <nav aria-label="Project index" className="hidden lg:col-span-4 lg:block">
        <LayoutGroup id={groupId}>
          <ol className="sticky top-[24svh]">
            {projects.map((project) => {
              const active = project.id === activeId
              return (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(project.id, -window.innerHeight * 0.2)}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-full py-2 pr-3 text-left transition-colors duration-260",
                      active ? "text-ink" : "text-ink-45 hover:text-ink-65",
                    )}
                  >
                    <span aria-hidden className="flex w-2 shrink-0 justify-center">
                      {active && (
                        <motion.span
                          layoutId="work-index-dot"
                          className="block size-2 rounded-full bg-deep"
                          transition={LAYOUT_SPRING}
                        />
                      )}
                    </span>
                    <span className="text-[clamp(1.25rem,0.9rem+0.8vw,1.625rem)] leading-tight tracking-[-0.025em]">
                      {project.name}
                    </span>
                    <span className="t-micro ml-auto font-normal text-ink-45">{project.year}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </LayoutGroup>
      </nav>

      <div className="lg:col-span-7 lg:col-start-6">
        {projects.map((project) => (
          <ProjectEntry key={project.id} project={project} onActive={setActiveId} />
        ))}
      </div>
    </div>
  )
}
