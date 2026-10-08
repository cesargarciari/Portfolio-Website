import WorkIndex from "@/components/sections/WorkIndex"
import { projects } from "@/data/projects"
import { useHashScroll } from "@/hooks/useScrollTo"
import { stagger } from "@/lib/motion"
import { numberWord } from "@/lib/search"

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export default function Projects() {
  useHashScroll()

  const oldest = projects[projects.length - 1]

  return (
    <main id="main">
      <section className="wrap pb-section pt-[10svh]">
        <h1 className="t-title-1 enter max-w-[15ch]" style={stagger(0)}>
          Everything I’ve built so far.
        </h1>
        <p className="t-lead enter mt-6 max-w-[44ch] text-ink-65" style={stagger(1)}>
          {capitalize(numberWord(projects.length))} projects, from a Java desktop app in {oldest.year} to a serverless
          NBA career simulator I’m building now.
        </p>
      </section>

      <section aria-label="Projects" className="wrap pb-section-lg">
        <WorkIndex projects={projects} />
      </section>
    </main>
  )
}
