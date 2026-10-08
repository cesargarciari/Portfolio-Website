import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { Search, X } from "lucide-react"
import { pill } from "@/components/ui/pill"
import { searchWork } from "@/lib/search"
import { DURATION, EASE_OUT, stagger } from "@/lib/motion"
import { cn } from "@/lib/utils"

const SUGGESTIONS = ["AWS", "TypeScript", "Python", "Next.js", "PostgreSQL", "C#"]

const sameTerm = (a: string, b: string) => a.trim().toLowerCase() === b.toLowerCase()

/**
 * The instrument: a recruiter's first question is "has he worked with X?",
 * so the hero answers it against the real projects and roles.
 */
export default function WorkSearch() {
  const [query, setQuery] = useState("")
  const [dismissed, setDismissed] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const inputId = useId()
  const resultsId = useId()

  const result = useMemo(() => searchWork(query), [query])
  const open = query.trim().length > 0 && !dismissed

  // Clicking anywhere else tucks the results away; focusing the field brings them back.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setDismissed(true)
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [open])

  const update = (value: string) => {
    setQuery(value)
    setDismissed(false)
  }

  const choose = (term: string) => {
    update(term)
    inputRef.current?.focus()
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const first = result.hits[0]
    if (first) navigate(first.href)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") update("")
  }

  return (
    <div
      ref={rootRef}
      data-search-open={open}
      className="relative mx-auto w-full max-w-(--col-instrument)"
      onKeyDown={onKeyDown}
    >
      <form role="search" onSubmit={onSubmit} className="composer enter" style={stagger(2)}>
        <label htmlFor={inputId} className="sr-only">
          Search my work
        </label>
        <Search aria-hidden strokeWidth={1.5} className="size-5 shrink-0 text-ink-45" />
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => update(event.target.value)}
          onFocus={() => setDismissed(false)}
          placeholder="Search my work, like Python"
          autoComplete="off"
          spellCheck={false}
          aria-describedby={open ? resultsId : undefined}
        />
        {query && (
          <button
            type="button"
            onClick={() => choose("")}
            aria-label="Clear the search"
            className={pill({ variant: "tertiary", size: "sm", icon: true })}
          >
            <X aria-hidden strokeWidth={1.5} className="size-4.5" />
          </button>
        )}
      </form>

      <div className="enter mt-4 sm:-mx-16" style={stagger(3)}>
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 transition-opacity duration-180",
            open && "pointer-events-none opacity-0",
          )}
        >
          {SUGGESTIONS.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => choose(term)}
              aria-pressed={sameTerm(query, term)}
              tabIndex={open ? -1 : undefined}
              className={cn(pill({ variant: "secondary", size: "sm" }), "font-normal text-ink-65")}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={resultsId}
            initial={{ opacity: 0, transform: "translateY(8px) scale(0.98)", filter: "blur(6px)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)", filter: "blur(0px)" }}
            exit={{ opacity: 0, transform: "translateY(4px) scale(0.99)", filter: "blur(0px)", transition: { duration: DURATION.sm } }}
            transition={{ duration: DURATION.md, ease: EASE_OUT }}
            className="absolute inset-x-0 top-17 z-20 origin-top rounded-4xl bg-float p-2 text-left shadow-(--shadow-2) outline outline-line-faint"
          >
            <p aria-live="polite" className="t-small px-4 pb-2 pt-3 text-ink-65">
              {result.summary}
            </p>
            {result.hits.length > 0 && (
              <ul>
                {result.hits.slice(0, 5).map((hit) => (
                  <li key={`${hit.kind}-${hit.id}`}>
                    <Link
                      to={hit.href}
                      className="flex items-baseline justify-between gap-4 rounded-3xl px-4 py-3 no-underline transition-colors duration-180 hover:bg-raised focus-visible:bg-raised"
                    >
                      <span className="t-small font-medium text-ink">{hit.title}</span>
                      <span className="t-micro shrink-0 font-normal text-ink-45">{hit.meta}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
