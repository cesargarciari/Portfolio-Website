import { Fragment, useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import Glyph, { type GlyphName } from "@/components/sections/Glyph"

/** `{glyph:word}` places a drawing before its word. */
const SENTENCE =
  "I grew up among the {volcano:volcanoes} of El Salvador and studied software engineering under the {mountain:Rockies} in Calgary. I like to build full-stack web apps and cloud services, from the {database:database} to the last {cursor:pixel} ."

interface Token {
  word: string
  glyph?: GlyphName
}

const TOKENS: Token[] = SENTENCE.split(" ").map((part) => {
  const match = part.match(/^\{(\w+):(.+)\}$/)
  return match ? { glyph: match[1] as GlyphName, word: match[2] } : { word: part }
})

/** Unread words wait at low ink; each one comes up to full ink as the reader scrolls to it. */
const RESTING_OPACITY = 0.16

interface WordProps {
  token: Token
  progress: MotionValue<number>
  range: [number, number]
}

function Word({ token, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [RESTING_OPACITY, 1])
  return (
    <motion.span style={{ opacity }}>
      {token.glyph && <Glyph name={token.glyph} />}
      {token.word}
    </motion.span>
  )
}

/**
 * A rebus sentence that reads itself in as you scroll: the scroll position is
 * the reading position, so the motion is the reading.
 */
export default function Intro() {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] })

  return (
    <section aria-label="About me" className="wrap py-section-lg">
      <p ref={ref} className="max-w-[28ch] text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] leading-[1.12] tracking-[-0.04em]">
        {TOKENS.map((token, index) => (
          <Fragment key={`${token.word}-${index}`}>
            {reduce ? (
              <span>
                {token.glyph && <Glyph name={token.glyph} />}
                {token.word}
              </span>
            ) : (
              <Word
                token={token}
                progress={scrollYProgress}
                range={[index / TOKENS.length, (index + 1) / TOKENS.length]}
              />
            )}{" "}
          </Fragment>
        ))}
      </p>
    </section>
  )
}
