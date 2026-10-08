import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import Horizon from "@/components/Horizon"
import { pill } from "@/components/ui/pill"
import { roles, type Role } from "@/data/experience"
import { HORIZON_HEIGHT, HORIZON_WIDTH, ROCKIES_PATH, VOLCANO_PATH, closePath } from "@/lib/horizon"
import { DURATION, EASE_OUT } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** The home page tells it in order: El Salvador first. */
const STOPS = [...roles].reverse()

/** The stretch of the scene where the volcano line sharpens into the Rockies. */
const MORPH_RANGE = [0.42, 0.72]

const journeyTitle = "From El Salvador to Calgary."

function JourneyLink() {
  return (
    <Link to="/experience" className={pill({ variant: "secondary" })}>
      Read the whole story
    </Link>
  )
}

interface StopProps {
  stop: Role
}

function StopDetail({ stop }: StopProps) {
  return (
    <>
      <p className="t-micro flex gap-4 font-normal text-ink-45">
        <span>{stop.year}</span>
        <span>{stop.location}</span>
      </p>
      <p className="t-title-3 mt-2">{stop.title}</p>
      <p className="t-small mt-2 max-w-[52ch] text-ink-65">
        {stop.company.replace(/\.$/, "")}. {stop.summary}
      </p>
    </>
  )
}

/**
 * A pinned scene, about three screens of scroll long. Scrolling is travel:
 * the sun rises from behind the volcanoes, the horizon sharpens into the
 * Rockies, and the stops advance along a cobalt rail.
 */
function JourneyScene() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(STOPS.length - 1, Math.floor(progress * STOPS.length))
    setActive((current) => (current === next ? current : next))
  })

  const line = useTransform(scrollYProgress, MORPH_RANGE, [VOLCANO_PATH, ROCKIES_PATH])
  const land = useTransform(scrollYProgress, MORPH_RANGE, [closePath(VOLCANO_PATH), closePath(ROCKIES_PATH)])
  // Kept inside the middle of the canvas so the sun stays in frame when phones crop the sides.
  const sunX = useTransform(scrollYProgress, [0, 1], [340, 860])
  const sunY = useTransform(scrollYProgress, [0, 0.25, 1], [236, 58, 42])
  const sun = useMotionTemplate`translate(${sunX}px, ${sunY}px)`
  const rail = useTransform(scrollYProgress, (progress) => `scaleX(${progress})`)

  return (
    <section ref={ref} aria-labelledby="journey-title" className="relative h-[300svh]">
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="wrap pt-[10svh] sm:pt-[14svh]">
          <h2 id="journey-title" className="t-title-1 max-w-[13ch]">
            {journeyTitle}
          </h2>
        </div>

        <svg
          aria-hidden
          viewBox={`0 0 ${HORIZON_WIDTH} ${HORIZON_HEIGHT}`}
          preserveAspectRatio="xMidYMax slice"
          className="mt-auto block h-[clamp(150px,20vw,300px)] w-full"
        >
          <defs>
            {/* A faint silhouette, so the line reads as land rather than a chart, fading into the page. */}
            <linearGradient id="journey-land" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" style={{ stopColor: "var(--ground-raised)" }} />
              <stop offset="1" style={{ stopColor: "var(--ground)" }} />
            </linearGradient>
          </defs>
          <motion.circle r={12} fill="var(--signal)" style={{ transform: sun }} />
          <motion.path d={land} fill="url(#journey-land)" />
          <motion.path
            d={line}
            fill="none"
            stroke="var(--ink-45)"
            strokeWidth={1.25}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="wrap pb-28 pt-8 sm:pb-32">
          <ol className="sr-only">
            {STOPS.map((stop) => (
              <li key={stop.id}>
                {stop.year}, {stop.location}: {stop.title} at {stop.company}. {stop.summary}
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div aria-hidden className="min-h-[8.5rem] sm:min-h-[7rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={STOPS[active].id}
                  initial={{ opacity: 0, filter: "blur(6px)", transform: "translateY(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
                  exit={{ opacity: 0, filter: "blur(0px)", transform: "translateY(-6px)", transition: { duration: DURATION.xs } }}
                  transition={{ duration: DURATION.md, ease: EASE_OUT }}
                >
                  <StopDetail stop={STOPS[active]} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="shrink-0">
              <JourneyLink />
            </div>
          </div>

          <div aria-hidden className="mt-8">
            <div className="relative h-px bg-line">
              <motion.div className="absolute inset-0 origin-left bg-deep" style={{ transform: rail }} />
            </div>
            <ol className="t-micro mt-3 grid grid-cols-3 font-normal">
              {STOPS.map((stop, index) => (
                <li
                  key={stop.id}
                  className={cn("transition-colors duration-260", index === active ? "text-ink" : "text-ink-45")}
                >
                  {stop.year}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Reduced motion: the same story laid out flat, with nothing pinned or scrubbed. */
function JourneyStatic() {
  return (
    <section aria-labelledby="journey-title" className="py-section-lg">
      <div className="wrap">
        <h2 id="journey-title" className="t-title-1 max-w-[13ch]">
          {journeyTitle}
        </h2>
      </div>
      <Horizon className="mt-12 text-ink-45" />
      <div className="wrap">
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {STOPS.map((stop) => (
            <li key={stop.id}>
              <StopDetail stop={stop} />
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <JourneyLink />
        </div>
      </div>
    </section>
  )
}

export default function Journey() {
  const reduce = useReducedMotion()
  return reduce ? <JourneyStatic /> : <JourneyScene />
}
