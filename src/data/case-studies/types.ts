import type { DiagramSpec } from "@/components/diagram/types"

export interface Stat {
  value: string
  label: string
}

export interface ScreenMedia {
  kind: "screen"
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

export interface DiagramMedia {
  kind: "diagram"
  spec: DiagramSpec
  caption: string
}

export type Media = ScreenMedia | DiagramMedia

export interface StudyVideo {
  youtubeId: string
  title: string
  duration: string
  poster: string
  caption: string
}

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
  summary: string
  role: string
  timeline: string
  stack: string[]
  live?: string
  liveLabel?: string
  github?: string
  video?: StudyVideo
  glance: Stat[]
  sections: StudySection[]
  decisions: Decision[]
  changes: string[]
  closing: string
}
