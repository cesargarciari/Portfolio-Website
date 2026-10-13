import { motion, useScroll, useTransform } from "motion/react"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const transform = useTransform(scrollYProgress, (progress) => `scaleX(${progress})`)

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-deep"
      style={{ transform }}
    />
  )
}
