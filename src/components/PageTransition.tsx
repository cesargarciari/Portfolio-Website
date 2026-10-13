import type { ReactNode } from "react"
import { motion } from "motion/react"
import { DURATION, EASE_OUT } from "@/lib/motion"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: DURATION.md, ease: EASE_OUT } }}
      exit={{ opacity: 0, transition: { duration: DURATION.xs, ease: EASE_OUT } }}
    >
      {children}
    </motion.div>
  )
}
