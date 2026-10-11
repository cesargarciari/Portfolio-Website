import { chipy } from "./chipy"
import type { CaseStudy } from "./types"

/** Keyed by slug, which matches the project's id in projects.ts. */
export const caseStudies: Record<string, CaseStudy> = {
  [chipy.slug]: chipy,
}
