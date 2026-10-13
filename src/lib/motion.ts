import type { CSSProperties } from "react"

// Keep in sync with --ease-out and --d-* in index.css.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const

export const DURATION = {
  xs: 0.12,
  sm: 0.18,
  md: 0.26,
} as const

export const LAYOUT_SPRING = { type: "spring", duration: 0.4, bounce: 0 } as const

// Keep a page's entrance to five steps (indexes 0 to 4).
export const stagger = (index: number) => ({ "--i": index }) as CSSProperties
