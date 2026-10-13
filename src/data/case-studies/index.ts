import { braindump } from "./braindump"
import { chipy } from "./chipy"
import type { CaseStudy } from "./types"

export const caseStudies: Record<string, CaseStudy> = {
  [chipy.slug]: chipy,
  [braindump.slug]: braindump,
}
