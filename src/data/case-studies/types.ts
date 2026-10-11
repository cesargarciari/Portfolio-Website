import type { DiagramSpec } from "@/components/diagram/types"

export interface Stat {
  value: string
  label: string
}

export interface ScreenMedia {
  kind: "screen"
  /** Path under public/, e.g. /case-studies/chipy/legacy.webp. */
  src: string
  alt: string
  width: number
  height: number
  caption: string
  /** The image hasn't been added yet; a slot showing `src` stands in for it. */
  pending?: boolean
}

export interface DiagramMedia {
  kind: "diagram"
  spec: DiagramSpec
  caption: string
}

export type Media = ScreenMedia | DiagramMedia

/** One stop in the reader: text on one side, its media held in the rail on the other. */
export interface StudySection {
  id: string
  title: string
  paragraphs: string[]
  media?: Media
}

export interface Decision {
  title: string
  options: string
  why: string
  cost: string
}

export interface CaseStudy {
  slug: string
  /** One sentence under the name in the hero. */
  summary: string
  role: string
  timeline: string
  stack: string[]
  live?: string
  /** Label for the live link; says what happens there ("Play Chipy"). */
  liveLabel?: string
  github?: string
  glance: Stat[]
  sections: StudySection[]
  decisions: Decision[]
  changes: string[]
  /** The last line on the page, beside the links. */
  closing: string
}
