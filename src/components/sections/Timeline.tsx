import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import type { Role } from "@/data/experience"

interface TimelineProps {
  roles: Role[]
}

interface TimelineEntryProps {
  role: Role
}

/** Where the drawing line's tip sits on screen; nodes fill as the tip reaches them. */
const TIP = "62%"

function TimelineEntry({ role }: TimelineEntryProps) {
  const ref = useRef<HTMLLIElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: [`start ${TIP}`, "start 52%"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const transform = useTransform(scrollYProgress, (progress) => `scale(${0.5 + progress * 0.5})`)

  return (
    <li ref={ref} id={role.id} className="relative scroll-mt-24 pb-section pl-10 last:pb-0 sm:pl-16">
      <span aria-hidden className="absolute left-0 top-1.5 size-[11px] rounded-full bg-ground ring-1 ring-line-mid">
        <motion.span
          className="absolute inset-0 rounded-full bg-deep"
          style={reduce ? undefined : { opacity, transform }}
        />
      </span>
      <p className="t-micro flex gap-4 font-normal text-ink-45">
        <span>{role.period}</span>
        <span>{role.kind}</span>
      </p>
      <h2 className="t-title-3 mt-3">{role.title}</h2>
      <p className="t-lead mt-2 text-ink-65">
        {role.company}, {role.location}
      </p>
      <p className="mt-6 max-w-[62ch] text-ink-65">{role.description}</p>
      <p className="t-small mt-6 max-w-[62ch] text-ink-45">{role.skills.join(", ")}</p>
    </li>
  )
}

/** A hairline that draws itself in cobalt as you read down the roles. */
export default function Timeline({ roles }: TimelineProps) {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: [`start ${TIP}`, `end ${TIP}`] })
  const transform = useTransform(scrollYProgress, (progress) => `scaleY(${progress})`)

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute bottom-0 left-[5px] top-2 w-px bg-line" />
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-[5px] top-2 w-px origin-top bg-deep"
        style={reduce ? undefined : { transform }}
      />
      {roles.map((role) => (
        <TimelineEntry key={role.id} role={role} />
      ))}
    </ol>
  )
}
