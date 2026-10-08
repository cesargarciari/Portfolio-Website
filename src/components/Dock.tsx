import { useRef, useState, type MouseEvent } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useScrollTo } from "@/hooks/useScrollTo"
import { pill } from "@/components/ui/pill"
import { LAYOUT_SPRING } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface DockItem {
  to: string
  label: string
}

const ITEMS: DockItem[] = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Work" },
  { to: "/experience", label: "Experience" },
]

/** Distance scrolled in one direction before the dock steps aside or comes back. */
const HIDE_AFTER = 64
const SHOW_AFTER = 24

/**
 * Primary navigation, docked at the bottom. It slides away while you scroll
 * down to read and returns as soon as you scroll back up, reach the end of the
 * page, or move keyboard focus into it.
 */
export default function Dock() {
  const { pathname } = useLocation()
  const scrollTo = useScrollTo()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const anchor = useRef(0)
  const direction = useRef<"up" | "down">("up")

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? y
    const nearTop = y < 120
    const nearEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 160

    if (nearTop || nearEnd) {
      setHidden(false)
      anchor.current = y
      return
    }

    const heading = y > previous ? "down" : y < previous ? "up" : direction.current
    if (heading !== direction.current) {
      direction.current = heading
      anchor.current = previous
    }

    const travelled = Math.abs(y - anchor.current)
    if (heading === "down" && travelled > HIDE_AFTER) setHidden(true)
    if (heading === "up" && travelled > SHOW_AFTER) setHidden(false)
  })

  // Re-selecting the page you're on glides back to its top instead of doing nothing.
  const onSamePage = (to: string) => (event: MouseEvent) => {
    if (pathname !== to) return
    event.preventDefault()
    scrollTo("top")
  }

  return (
    <nav aria-label="Primary" className="dock" data-hidden={hidden}>
      {ITEMS.map(({ to, label }) => (
        <NavLink key={to} to={to} end onClick={onSamePage(to)} className="dock-link">
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="dock-active"
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-line"
                  transition={LAYOUT_SPRING}
                />
              )}
              <span className="relative">{label}</span>
            </>
          )}
        </NavLink>
      ))}
      <NavLink
        to="/contact"
        onClick={onSamePage("/contact")}
        className={cn(pill({ variant: "primary", size: "sm" }), "ml-1")}
      >
        Contact
      </NavLink>
    </nav>
  )
}
