import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { pill } from "@/components/ui/pill"
import { profile } from "@/data/profile"

/**
 * The page's one mood shift. It wears the opposite palette (night cobalt on a
 * light page, flag white on a dark one) and opens from an inset card to the
 * full screen as it scrolls into place, so the change of ground feels like
 * stepping outside rather than a cut.
 */
export default function Closing() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] })
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(6% 5% 6% 5% round 48px)", "inset(0% 0% 0% 0% round 0px)"],
  )

  return (
    <section ref={ref} aria-labelledby="closing-title">
      <motion.div
        data-ground="mood"
        style={reduce ? undefined : { clipPath }}
        className="flex min-h-svh flex-col items-center justify-center px-(--page-inset) py-section-lg text-center"
      >
        <h2 id="closing-title" className="t-title-1 max-w-[14ch]">
          Good software feels calm.
        </h2>
        <p className="t-lead mt-6 max-w-[38ch] text-balance text-ink-65">
          That’s the bar I hold my work to. If you’re building something and need another engineer, I’d like to hear
          about it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <a href={`mailto:${profile.email}`} className={pill({ variant: "primary" })}>
            Write to me
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={pill({ variant: "secondary" })}>
            View résumé
          </a>
        </div>
      </motion.div>
    </section>
  )
}
