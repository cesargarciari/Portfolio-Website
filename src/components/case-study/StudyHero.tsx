import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import ProjectMark from "@/components/ProjectMark"
import { pill } from "@/components/ui/pill"
import type { CaseStudy } from "@/data/case-studies/types"
import type { Project } from "@/data/projects"
import { stagger } from "@/lib/motion"
import { MORPH_NAME } from "@/lib/viewTransition"
import { cn } from "@/lib/utils"

interface StudyHeroProps {
  project: Project
  study: CaseStudy
  /** The mark flew in from the index, so it is already in place and skips the entrance. */
  arrivedByMorph: boolean
}

interface MetaItemProps {
  term: string
  children: ReactNode
}

function MetaItem({ term, children }: MetaItemProps) {
  return (
    <div className="border-t border-line pt-4">
      <dt className="t-micro font-normal text-ink-45">{term}</dt>
      <dd className="t-small mt-1 text-ink">{children}</dd>
    </div>
  )
}

/**
 * The project's mark lands first (from the index when you arrive by clicking),
 * then the name, the one-sentence summary, and the facts build in around it.
 */
export default function StudyHero({ project, study, arrivedByMorph }: StudyHeroProps) {
  const mark = project.icon
  return (
    <section className="wrap pb-section pt-[6svh]">
      <Link to="/projects" className={cn(pill({ variant: "tertiary", size: "sm" }), "enter -ml-3")} style={stagger(0)}>
        All projects
      </Link>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
        {mark && (
          <span
            // MORPH_TARGET_ATTR: tells the view transition the new page is ready to snapshot.
            data-morph-target=""
            // Named only for the morph, so theme switches don't animate the mark as its own layer.
            style={arrivedByMorph ? { viewTransitionName: MORPH_NAME } : undefined}
            className={cn("block size-[clamp(6rem,4.5rem+5vw,9.5rem)] shrink-0", !arrivedByMorph && "enter")}
          >
            <ProjectMark icon={mark} className="size-full" />
          </span>
        )}
        <div className="min-w-0">
          <h1 className="t-hero enter" style={stagger(1)}>
            {project.name}
          </h1>
          <p
            className="enter mt-4 max-w-[28ch] text-[clamp(1.375rem,1.05rem+1.1vw,2rem)] leading-[1.2] tracking-[-0.03em] text-ink-65"
            style={stagger(2)}
          >
            {study.summary}
          </p>
        </div>
      </div>

      <dl className="enter mt-14 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-12" style={stagger(3)}>
        <div className="lg:col-span-3">
          <MetaItem term="Role">{study.role}</MetaItem>
        </div>
        <div className="lg:col-span-3">
          <MetaItem term="Timeline">{study.timeline}</MetaItem>
        </div>
        <div className="sm:col-span-2 lg:col-span-6">
          <MetaItem term="Stack">{study.stack.join(", ")}</MetaItem>
        </div>
      </dl>

      {(study.live || study.github) && (
        <div className="enter mt-10 flex flex-wrap gap-2" style={stagger(4)}>
          {study.live && (
            <a href={study.live} target="_blank" rel="noopener noreferrer" className={pill({ variant: "primary" })}>
              {study.liveLabel ?? "Visit the site"}
            </a>
          )}
          {study.github && (
            <a href={study.github} target="_blank" rel="noopener noreferrer" className={pill({ variant: "secondary" })}>
              Read the code
            </a>
          )}
        </div>
      )}
    </section>
  )
}
