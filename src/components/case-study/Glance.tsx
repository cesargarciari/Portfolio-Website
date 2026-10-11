import type { Stat } from "@/data/case-studies/types"

interface GlanceProps {
  stats: Stat[]
}

/** A ledger of numbers that are true and checkable in the repository: the number large, its meaning beside it. */
export default function Glance({ stats }: GlanceProps) {
  return (
    <section aria-label="At a glance" className="wrap pb-section">
      <dl className="grid gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          // The term comes first in the markup, as <dl> requires; the grid shows the number above it.
          <div key={stat.label} className="grid content-start gap-3 border-t border-line py-8 lg:pr-6">
            <dt className="t-small row-start-2 max-w-[24ch] text-ink-65">{stat.label}</dt>
            <dd className="t-title-1 row-start-1 tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
