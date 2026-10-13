import type { ReactNode } from "react"
import type { Decision } from "@/data/case-studies/types"
import { numberWord } from "@/lib/search"

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

interface DecisionsProps {
  decisions: Decision[]
}

interface FieldProps {
  term: string
  children: ReactNode
}

function Field({ term, children }: FieldProps) {
  return (
    <div>
      <dt className="t-micro font-normal text-ink-45">{term}</dt>
      <dd className="mt-2 text-ink-65">{children}</dd>
    </div>
  )
}

export default function Decisions({ decisions }: DecisionsProps) {
  return (
    <section aria-labelledby="decisions-title" className="wrap pb-section-lg pt-section">
      <h2 id="decisions-title" className="t-title-1 max-w-[16ch]">
        {capitalize(numberWord(decisions.length))} choices, and what each one cost.
      </h2>
      <ol className="mt-14">
        {decisions.map((decision) => (
          <li key={decision.title} className="grid gap-x-4 gap-y-6 border-t border-line py-10 lg:grid-cols-12">
            <h3 className="t-title-3 font-normal lg:col-span-4 lg:pr-8">{decision.title}</h3>
            <dl className="grid gap-6 lg:col-span-7 lg:col-start-6">
              <Field term="Also considered">{decision.options}</Field>
              <Field term="Why">{decision.why}</Field>
              <Field term="What it cost">{decision.cost}</Field>
            </dl>
          </li>
        ))}
      </ol>
    </section>
  )
}
