import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "motion/react"
import MediaFrame from "@/components/case-study/MediaFrame"
import type { StudySection } from "@/data/case-studies/types"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { DURATION, EASE_OUT } from "@/lib/motion"

const WIDE = "(min-width: 64rem)"

interface StudyReaderProps {
  sections: StudySection[]
}

function railSection(sections: StudySection[], index: number) {
  for (let i = index; i >= 0; i--) {
    if (sections[i].media) return sections[i]
  }
  return undefined
}

interface StudyBlockProps {
  section: StudySection
  onActive: (id: string) => void
  wide: boolean
}

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

export default function StudyReader({ sections }: StudyReaderProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const shown = railSection(
    sections,
    sections.findIndex((section) => section.id === activeId),
  )
  const wide = useMediaQuery(WIDE)

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
      <div aria-hidden className="hidden lg:col-span-6 lg:block">
        <div className="sticky top-[10svh] h-[80svh]">
          <AnimatePresence initial={false}>
            {shown?.media && (
              <motion.div
                key={shown.id}
                className="absolute inset-0"
                initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, transition: { duration: DURATION.sm, ease: EASE_OUT } }}
                transition={{ duration: 0.42, ease: EASE_OUT }}
              >
                <MediaFrame media={shown.media} variant="rail" focusable={false} />
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
