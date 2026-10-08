import type { CSSProperties } from "react"

/** Mirrors --ease-out in index.css: the house curve for anything entering or exiting. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const

/** Seconds; mirrors --d-* in index.css. */
export const DURATION = {
  xs: 0.12,
  sm: 0.18,
  md: 0.26,
} as const

/** Click-triggered layout shift, not a gesture with momentum: critically damped, no overshoot. */
export const LAYOUT_SPRING = { type: "spring", duration: 0.4, bounce: 0 } as const

/** Position in the page's one orchestrated entrance (`.enter`). Keep it to five or fewer. */
export const stagger = (index: number) => ({ "--i": index }) as CSSProperties
