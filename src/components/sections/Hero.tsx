import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import WorkSearch from "@/components/sections/WorkSearch"
import { stagger } from "@/lib/motion"

/**
 * A greeting and the instrument. As you begin to scroll, the hero recedes:
 * it drifts up a little slower than the page and fades, so the story below
 * seems to rise out from under it.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const transform = useTransform(
    scrollYProgress,
    (progress) => `translate3d(0, ${progress * 18}vh, 0) scale(${1 - progress * 0.06})`,
  )
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center">
      <motion.div style={reduce ? undefined : { transform, opacity }} className="wrap pb-24 pt-8 text-center">
        <h1 id="hero-title" className="t-hero t-voice enter" style={stagger(0)}>
          Hola, I’m César.
        </h1>
        <p className="t-lead enter mx-auto mt-6 max-w-[36ch] text-balance text-ink-65" style={stagger(1)}>
          A software engineer in Calgary, by way of El Salvador. Search what I’ve built.
        </p>
        <div className="mt-12">
          <WorkSearch />
        </div>
      </motion.div>

      <motion.p
        aria-hidden
        style={reduce ? undefined : { opacity: cueOpacity }}
        className="t-micro absolute inset-x-0 bottom-6 text-center font-normal text-ink-45"
      >
        Scroll for the story
      </motion.p>
    </section>
  )
}
