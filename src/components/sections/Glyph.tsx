import type { ReactNode } from "react"

export type GlyphName = "volcano" | "mountain" | "database" | "cursor"

interface GlyphProps {
  name: GlyphName
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const

const accent = { ...stroke, stroke: "var(--deep)" }

/** Two-tone inline drawings for the rebus sentence: ink plus one touch of cobalt or sunrise. */
const DRAWINGS: Record<GlyphName, ReactNode> = {
  volcano: (
    <>
      <path {...stroke} d="M3 19.5 9 9.6c.9-1.4 5.1-1.4 6 0l6 9.9" />
      <path {...stroke} stroke="var(--signal)" d="M10.6 6.4c.2-1.5 1.4-2.4 2.9-2.2" />
    </>
  ),
  mountain: (
    <>
      <path {...stroke} d="m2.5 19.5 6-11 3.5 5.5 3.5-7.5 6 13" />
      <path {...accent} d="m13.7 10.3 1.8-3.8 1.8 3.8" />
    </>
  ),
  database: (
    <>
      <ellipse {...stroke} cx="12" cy="6" rx="7" ry="2.6" />
      <path {...stroke} d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
      <path {...accent} d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </>
  ),
  cursor: (
    <path {...stroke} fill="var(--deep)" fillOpacity={0.9} d="M6 3.8 18.6 12l-5.9 1.3-3 5.6Z" />
  ),
}

export default function Glyph({ name }: GlyphProps) {
  return (
    <span aria-hidden className="glyph">
      <svg viewBox="0 0 24 24">{DRAWINGS[name]}</svg>
    </span>
  )
}
