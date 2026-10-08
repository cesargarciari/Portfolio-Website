import Timeline from "@/components/sections/Timeline"
import Toolbox from "@/components/sections/Toolbox"
import { pill } from "@/components/ui/pill"
import { roles } from "@/data/experience"
import { profile } from "@/data/profile"
import { useHashScroll } from "@/hooks/useScrollTo"
import { stagger } from "@/lib/motion"
import { cn } from "@/lib/utils"

export default function Experience() {
  useHashScroll()

  return (
    <main id="main" className="wrap">
      <section className="pb-section pt-[10svh]">
        <h1 className="t-title-1 enter max-w-[15ch]" style={stagger(0)}>
          Where I’ve worked and studied.
        </h1>
        <p className="t-lead enter mt-6 max-w-[40ch] text-ink-65" style={stagger(1)}>
          Three stops so far: two internships in El Salvador and a capstone in Calgary.
        </p>
      </section>

      <section aria-label="Roles" className="pb-section-lg lg:grid lg:grid-cols-12 lg:gap-x-4">
        <div className="lg:col-span-9">
          <Timeline roles={roles} />
        </div>
      </section>

      <Toolbox />

      <section className="flex flex-col gap-6 border-t border-line py-section sm:flex-row sm:items-center sm:justify-between">
        <p className="t-title-2">The same story fits on one page.</p>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(pill({ variant: "primary" }), "self-start sm:self-auto")}
        >
          View résumé
        </a>
      </section>
    </main>
  )
}
