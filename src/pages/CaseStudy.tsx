import { Link, useLocation, useParams } from "react-router-dom"
import Decisions from "@/components/case-study/Decisions"
import Glance from "@/components/case-study/Glance"
import StudyHero from "@/components/case-study/StudyHero"
import StudyReader from "@/components/case-study/StudyReader"
import StudyVideo from "@/components/case-study/StudyVideo"
import { pill } from "@/components/ui/pill"
import { caseStudies } from "@/data/case-studies"
import { projects } from "@/data/projects"
import { isMorphState } from "@/lib/viewTransition"
import NotFound from "@/pages/404"

export default function CaseStudy() {
  const { slug = "" } = useParams()
  const location = useLocation()
  const arrivedByMorph = isMorphState(location.state)
  const project = projects.find((item) => item.id === slug && item.caseStudy)
  const study = caseStudies[slug]

  if (!project || !study) return <NotFound />

  return (
    <main id="main">
      <StudyHero project={project} study={study} arrivedByMorph={arrivedByMorph} />
      {study.video && <StudyVideo video={study.video} />}
      <Glance stats={study.glance} />

      <div className="wrap">
        <StudyReader sections={study.sections} />
      </div>

      <Decisions decisions={study.decisions} />

      <section aria-labelledby="changes-title" className="wrap pb-section-lg">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
          <h2 id="changes-title" className="t-title-1 max-w-[14ch] lg:col-span-5">
            What I would do differently.
          </h2>
          <ol className="mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
            {study.changes.map((change) => (
              <li key={change.slice(0, 32)} className="border-t border-line py-8 text-ink-65 first:border-t-0 first:pt-0 lg:first:pt-2">
                {change}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap flex flex-col gap-6 border-t border-line py-section sm:flex-row sm:items-center sm:justify-between">
        <p className="t-title-2 max-w-[20ch]">{study.closing}</p>
        <div className="flex flex-wrap gap-2">
          {study.live && (
            <a href={study.live} target="_blank" rel="noopener noreferrer" className={pill({ variant: "primary" })}>
              {study.liveLabel ?? "Visit the site"}
            </a>
          )}
          <Link to="/projects" className={pill({ variant: "secondary" })}>
            See all projects
          </Link>
        </div>
      </section>
    </main>
  )
}
