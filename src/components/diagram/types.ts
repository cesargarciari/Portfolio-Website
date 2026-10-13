export type DiagramNodeKind = "client" | "service" | "store" | "external"

export interface DiagramNode {
  id: string
  label: string
  sub?: string
  note?: string
  x: number
  y: number
  w: number
  h: number
  kind: DiagramNodeKind
  highlight?: boolean
}

export interface DiagramEdge {
  from: string
  to: string
  label?: string
  /** 0 to 1 along the edge; defaults to 0.5. */
  labelAt?: number
  dashed?: boolean
  highlight?: boolean
}

export interface DiagramSpec {
  id: string
  title: string
  steps: string[]
  width: number
  height: number
  nodes: DiagramNode[]
  edges: DiagramEdge[]
}
