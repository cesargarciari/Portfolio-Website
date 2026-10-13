import { useId, useLayoutEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import type { DiagramEdge, DiagramNode, DiagramSpec } from "@/components/diagram/types"
import { EASE_OUT } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface ArchDiagramProps {
  spec: DiagramSpec
  className?: string
  focusable?: boolean
}

interface Point {
  x: number
  y: number
}

const EDGE_GAP = 6
const ARROW_LENGTH = 8
const ARROW_HALF_WIDTH = 4.5
const LABEL_PAD_X = 6
const LABEL_PAD_Y = 3

const centre = (node: DiagramNode): Point => ({ x: node.x + node.w / 2, y: node.y + node.h / 2 })

function exitPoint(node: DiagramNode, toward: Point, gap: number): Point {
  const c = centre(node)
  const dx = toward.x - c.x
  const dy = toward.y - c.y
  const length = Math.hypot(dx, dy) || 1
  const t = Math.min(dx ? node.w / 2 / Math.abs(dx) : Infinity, dy ? node.h / 2 / Math.abs(dy) : Infinity)
  return { x: c.x + dx * t + (dx / length) * gap, y: c.y + dy * t + (dy / length) * gap }
}

interface EdgeGeometry {
  start: Point
  end: Point
  arrow: string
  label: Point
}

type LabelBox = DOMRect | null

const sameBoxes = (a: LabelBox[], b: LabelBox[]) =>
  a.length === b.length &&
  a.every((box, i) => {
    const other = b[i]
    if (!box || !other) return box === other
    return box.x === other.x && box.y === other.y && box.width === other.width && box.height === other.height
  })

function edgeGeometry(edge: DiagramEdge, nodes: Map<string, DiagramNode>): EdgeGeometry | null {
  const from = nodes.get(edge.from)
  const to = nodes.get(edge.to)
  if (!from || !to) return null

  const start = exitPoint(from, centre(to), EDGE_GAP)
  const end = exitPoint(to, centre(from), EDGE_GAP)
  const length = Math.hypot(end.x - start.x, end.y - start.y) || 1
  const ux = (end.x - start.x) / length
  const uy = (end.y - start.y) / length
  const baseX = end.x - ux * ARROW_LENGTH
  const baseY = end.y - uy * ARROW_LENGTH
  const arrow = [
    `${end.x},${end.y}`,
    `${baseX - uy * ARROW_HALF_WIDTH},${baseY + ux * ARROW_HALF_WIDTH}`,
    `${baseX + uy * ARROW_HALF_WIDTH},${baseY - ux * ARROW_HALF_WIDTH}`,
  ].join(" ")
  const at = edge.labelAt ?? 0.5
  return {
    start,
    end: { x: baseX, y: baseY },
    arrow,
    label: { x: start.x + (end.x - start.x) * at, y: start.y + (end.y - start.y) * at },
  }
}

export default function ArchDiagram({ spec, className, focusable = true }: ArchDiagramProps) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const [activeId, setActiveId] = useState<string | null>(null)
  const titleId = useId()
  const labelRefs = useRef<(SVGTextElement | null)[]>([])
  const [labelBoxes, setLabelBoxes] = useState<LabelBox[]>([])

  useLayoutEffect(() => {
    const svg = ref.current
    if (!svg) return
    const measure = () => {
      // Unrendered text can't be measured (Firefox throws); the observer retries once it's shown.
      if (svg.getClientRects().length === 0) return
      const next = labelRefs.current.map((text) => text?.getBBox() ?? null)
      setLabelBoxes((prev) => (sameBoxes(prev, next) ? prev : next))
    }
    let live = true
    measure()
    document.fonts.ready.then(() => live && measure())
    const observer = new ResizeObserver(measure)
    observer.observe(svg)
    return () => {
      live = false
      observer.disconnect()
    }
  }, [spec])

  const nodes = new Map(spec.nodes.map((node) => [node.id, node]))
  const active = activeId ? nodes.get(activeId) : undefined
  const touches = (edge: DiagramEdge) => edge.from === activeId || edge.to === activeId
  const linked = new Set(
    activeId ? spec.edges.filter(touches).flatMap((edge) => [edge.from, edge.to]) : [],
  )
  const drawn = reduce || inView
  const edges = spec.edges.map((edge, index) => ({
    edge,
    index,
    geometry: edgeGeometry(edge, nodes),
    lit: activeId ? touches(edge) : edge.highlight,
    dimmed: activeId !== null && !touches(edge),
    delay: reduce ? 0 : 0.15 + index * 0.08,
  }))

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <svg
        ref={ref}
        viewBox={`0 0 ${spec.width} ${spec.height}`}
        role="group"
        aria-labelledby={titleId}
        className="h-auto w-full overflow-visible font-text"
      >
        <title id={titleId}>{spec.title}</title>

        {edges.map(({ edge, geometry, lit, dimmed, delay }) => {
          if (!geometry) return null
          const stroke = lit ? "var(--deep)" : "var(--line-mid)"

          return (
            <g
              key={`${edge.from}-${edge.to}`}
              aria-hidden
              className="transition-opacity duration-260"
              style={{ opacity: dimmed ? 0.3 : 1 }}
            >
              <motion.line
                x1={geometry.start.x}
                y1={geometry.start.y}
                x2={geometry.end.x}
                y2={geometry.end.y}
                stroke={stroke}
                strokeWidth={lit ? 1.75 : 1.25}
                strokeLinecap="round"
                strokeDasharray={edge.dashed ? "4 5" : undefined}
                // Dashes and pathLength both use the dash array, so dashed edges fade instead of drawing.
                initial={edge.dashed ? { opacity: 0 } : { pathLength: 0 }}
                animate={drawn ? (edge.dashed ? { opacity: 1 } : { pathLength: 1 }) : undefined}
                transition={{ duration: reduce ? 0 : 0.6, delay, ease: EASE_OUT }}
              />
              <motion.polygon
                points={geometry.arrow}
                fill={stroke}
                initial={{ opacity: 0 }}
                animate={drawn ? { opacity: 1 } : undefined}
                transition={{ duration: reduce ? 0 : 0.2, delay: reduce ? 0 : delay + 0.45 }}
              />
            </g>
          )
        })}

        {edges.map(({ edge, index, geometry, lit, dimmed, delay }) => {
          if (!geometry || !edge.label) return null
          const box = labelBoxes[index]

          return (
            <g
              key={`${edge.from}-${edge.to}-label`}
              aria-hidden
              className="transition-opacity duration-260"
              style={{ opacity: dimmed ? 0.3 : 1 }}
            >
              <motion.g
                initial={{ opacity: 0 }}
                animate={drawn ? { opacity: 1 } : undefined}
                transition={{ duration: reduce ? 0 : 0.3, delay: reduce ? 0 : delay + 0.3 }}
              >
                {box && box.width > 0 && (
                  <rect
                    x={box.x - LABEL_PAD_X}
                    y={box.y - LABEL_PAD_Y}
                    width={box.width + LABEL_PAD_X * 2}
                    height={box.height + LABEL_PAD_Y * 2}
                    rx={6}
                    fill="var(--ground-raised)"
                  />
                )}
                <text
                  ref={(text) => {
                    labelRefs.current[index] = text
                  }}
                  x={geometry.label.x}
                  y={geometry.label.y}
                  dy="0.35em"
                  textAnchor="middle"
                  fontSize={12.5}
                  letterSpacing="-0.01em"
                  fill={lit ? "var(--ink)" : "var(--ink-65)"}
                >
                  {edge.label}
                </text>
              </motion.g>
            </g>
          )
        })}

        {spec.nodes.map((node) => {
          const lit = activeId ? node.id === activeId || linked.has(node.id) : node.highlight
          const dimmed = activeId !== null && !lit
          const c = centre(node)
          return (
            <g
              key={node.id}
              tabIndex={focusable ? 0 : undefined}
              role="img"
              aria-label={node.note ? `${node.label}. ${node.note}` : node.label}
              onPointerEnter={() => setActiveId(node.id)}
              onPointerLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId(null)}
              className="cursor-default outline-none transition-opacity duration-260 [&:focus-visible>rect]:stroke-link [&:focus-visible>rect]:[stroke-width:2]"
              style={{ opacity: dimmed ? 0.4 : 1 }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx={node.kind === "store" ? node.h / 2 : 14}
                fill="var(--ground)"
                stroke={lit ? "var(--deep)" : "var(--line-mid)"}
                strokeWidth={lit ? 1.5 : 1}
                strokeDasharray={node.kind === "external" ? "4 4" : undefined}
              />
              <text
                x={c.x}
                y={node.sub ? c.y - 9 : c.y}
                dy="0.35em"
                textAnchor="middle"
                fontSize={15}
                fontWeight={500}
                letterSpacing="-0.02em"
                fill="var(--ink)"
              >
                {node.label}
              </text>
              {node.sub && (
                <text
                  x={c.x}
                  y={c.y + 11}
                  dy="0.35em"
                  textAnchor="middle"
                  fontSize={12.5}
                  letterSpacing="-0.01em"
                  fill="var(--ink-65)"
                >
                  {node.sub}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      <p aria-hidden className="t-small mt-4 min-h-[3em] max-w-[52ch] text-ink-65">
        {active?.note ? (
          <>
            <span className="text-ink">{active.label}.</span> {active.note}
          </>
        ) : (
          "Point at or tab to a box to see what it does."
        )}
      </p>

      <ol className="sr-only">
        {spec.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  )
}
