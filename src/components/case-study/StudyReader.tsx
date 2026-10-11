import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "motion/react"
import MediaFrame from "@/components/case-study/MediaFrame"
import type { StudySection } from "@/data/case-studies/types"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { DURATION, EASE_OUT } from "@/lib/motion"

/** Tailwind's lg breakpoint, where the rail appears. */
const WIDE = "(min-width: 64rem)"

interface StudyReaderProps {
  sections: StudySection[]
}

interface StudyBlockProps {
  section: StudySection
  onActive: (id: string) => void
  /** The rail is showing the media, so the inline copy is for screen readers only. */
  wide: boolean
}

/** One section of prose. It reports itself as active while it holds the middle of the screen. */
function StudyBlock({ section, onActive, wide }: StudyBlockProps) {
  const ref = useRef<HTMLElement>(null)
  const centred = useInView(ref, { margin: "-45% 0px -45% 0px" })

  useEffect(() => {
    if (centred) onActive(section.id)
  }, [centred, onActive, section.id])

  return (
    <section
      ref={ref}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="flex scroll-mt-24 flex-col justify-center border-t border-line py-14 first:border-t-0 lg:min-h-[88svh] lg:border-t-0 lg:py-20"
    >
      {section.media && (
        // On wide screens this copy stays in the reading order for screen readers,
        // since the rail only ever holds the active section's media.
        <div className="mb-10 lg:sr-only">
          <MediaFrame media={section.media} variant="inline" focusable={!wide} />
        </div>
      )}
      <h2 id={`${section.id}-title`} className="t-title-2 max-w-[18ch]">
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="mt-6 max-w-[56ch] text-ink-65">
          {paragraph}
        </p>
      ))}
    </section>
  )
}

/**
 * The reading half of a case study. On wide screens the media for whichever
 * section you're reading is held in a sticky rail on the left and swaps as you
 * scroll, so the picture always matches the paragraph beside it. On small
 * screens each section shows its media inline, above the text.
 */
export default function StudyReader({ sections }: StudyReaderProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const active = sections.find((section) => section.id === activeId)
  const wide = useMediaQuery(WIDE)

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
      {/* A visual echo of the inline media, so assistive tech skips it and its boxes take no focus. */}
      <div aria-hidden className="hidden lg:col-span-6 lg:block">
        <div className="sticky top-[10svh] h-[80svh]">
          <AnimatePresence initial={false}>
            {active?.media && (
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, transition: { duration: DURATION.sm, ease: EASE_OUT } }}
                transition={{ duration: 0.42, ease: EASE_OUT }}
              >
                <MediaFrame media={active.media} variant="rail" focusable={false} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        {sections.map((section) => (
          <StudyBlock key={section.id} section={section} onActive={setActiveId} wide={wide} />
        ))}
      </div>
    </div>
  )
}
