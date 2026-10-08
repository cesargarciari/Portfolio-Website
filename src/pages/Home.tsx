import { Link } from "react-router-dom"
import Hero from "@/components/sections/Hero"
import Intro from "@/components/sections/Intro"
import WorkIndex from "@/components/sections/WorkIndex"
import Journey from "@/components/sections/Journey"
import Closing from "@/components/sections/Closing"
import { pill } from "@/components/ui/pill"
import { featuredProjects, projects } from "@/data/projects"
import { numberWord } from "@/lib/search"

/**
 * The home page reads as one story, top to bottom: a greeting you can ask
 * questions of, who I am, what I've built, how I got here, and an invitation.
 */
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Intro />

      <section aria-labelledby="work-title" className="wrap pb-section-lg pt-section">
        <h2 id="work-title" className="t-title-1 max-w-[14ch]">
          A few things I’ve built.
        </h2>
        <div className="mt-14 lg:mt-6">
          <WorkIndex projects={featuredProjects} />
        </div>
        <div className="mt-10 lg:mt-0 lg:grid lg:grid-cols-12 lg:gap-x-4">
          <div className="lg:col-span-7 lg:col-start-6">
            <Link to="/projects" className={pill({ variant: "secondary" })}>
              See all {numberWord(projects.length)} projects
            </Link>
          </div>
        </div>
      </section>

      <Journey />
      <Closing />
    </main>
  )
}
