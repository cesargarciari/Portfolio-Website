import type { ReactNode } from "react"
import { motion } from "motion/react"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

/**
 * Wraps a route's page so it crossfades in/out on navigation instead of
 * swapping instantly. Exit is quicker than enter since AnimatePresence
 * (mode="wait") plays it before the next page mounts.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
      exit={{ opacity: 0, transition: { duration: 0.15, ease: EASE_OUT } }}
    >
      {children}
    </motion.div>
  )
}
