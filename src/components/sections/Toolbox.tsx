import { skillCategories } from "@/data/skills"

/** A ledger: plain text in columns, no boxes, no logos. */
export default function Toolbox() {
  return (
    <section aria-labelledby="toolbox-title" className="py-section-lg">
      <h2 id="toolbox-title" className="t-title-2 max-w-[20ch]">
        The tools I reach for.
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="t-small font-medium">{category.name}</h3>
            <ul className="t-small mt-3 space-y-1.5 text-ink-65">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
