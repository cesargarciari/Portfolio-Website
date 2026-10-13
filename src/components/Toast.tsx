import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"
import { DURATION, EASE_OUT } from "@/lib/motion"

interface ToastProps {
  message: string | null
}

export default function Toast({ message }: ToastProps) {
  // Portaled so no ancestor's transform or filter can trap the fixed position.
  return createPortal(
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0, transform: "translateY(-8px) scale(0.96)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            exit={{ opacity: 0, transform: "translateY(-8px) scale(0.96)", transition: { duration: DURATION.sm } }}
            transition={{ duration: DURATION.md, ease: EASE_OUT }}
            className="t-micro rounded-full bg-ink px-5 pb-2.5 pt-2 text-ground shadow-[var(--shadow-2)]"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>,
    document.body,
  )
}
