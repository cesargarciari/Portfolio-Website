export type DiagramNodeKind = "client" | "service" | "store" | "external"

export interface DiagramNode {
  id: string
  label: string
  sub?: string
  /** Shown under the figure when the node is hovered or focused. */
  note?: string
  /** Top-left corner and size, in the spec's own coordinate space. */
  x: number
  y: number
  w: number
  h: number
  kind: DiagramNodeKind
  /** Part of the path the caption walks through; drawn in the accent. */
  highlight?: boolean
}

export interface DiagramEdge {
  from: string
  to: string
  label?: string
  /** Where the label sits along the edge, 0 to 1. Defaults to the middle; move it apart where edges cross. */
  labelAt?: number
  dashed?: boolean
  highlight?: boolean
}

export interface DiagramSpec {
  id: string
  title: string
  /** The same walk-through the caption gives, one step per item, for screen readers. */
  steps: string[]
  width: number
  height: number
  nodes: DiagramNode[]
  edges: DiagramEdge[]
}
