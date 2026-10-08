/**
 * Two horizons drawn on the same 1200 x 240 canvas with the same number of
 * quadratic segments, so one can morph into the other: the volcano line of
 * El Salvador and the front range of the Rockies seen from Calgary.
 */

type Point = readonly [number, number]

interface Segment {
  c: Point
  p: Point
}

export const HORIZON_WIDTH = 1200
export const HORIZON_HEIGHT = 240

/** The band that holds every peak and the baseline, for drawing the line without the sky. */
export const HORIZON_BAND = { top: 72, height: 136 } as const

const VOLCANO_START: Point = [0, 200]

// Cones with concave flanks and summits that dip slightly, the way a crater
// rim reads from far away. Left to right, loosely: Santa Ana, Izalco,
// San Salvador, the twin peaks of San Vicente, and San Miguel.
const VOLCANOES: Segment[] = [
  { c: [60, 199], p: [130, 194] },
  { c: [226, 190], p: [248, 116] },
  { c: [264, 120], p: [280, 114] },
  { c: [300, 180], p: [395, 190] },
  { c: [444, 190], p: [460, 138] },
  { c: [468, 141], p: [476, 138] },
  { c: [486, 186], p: [540, 190] },
  { c: [580, 193], p: [615, 191] },
  { c: [690, 190], p: [716, 98] },
  { c: [736, 103], p: [756, 96] },
  { c: [776, 170], p: [860, 184] },
  { c: [904, 186], p: [930, 134] },
  { c: [942, 124], p: [950, 122] },
  { c: [960, 136], p: [970, 134] },
  { c: [980, 126], p: [988, 120] },
  { c: [1006, 180], p: [1050, 188] },
  { c: [1092, 190], p: [1112, 142] },
  { c: [1122, 146], p: [1132, 140] },
  { c: [1146, 182], p: [1175, 192] },
  { c: [1190, 196], p: [1200, 197] },
]

const ROCKIES_START: Point = [0, 196]

// Sharp peaks and notches at the same x positions, so the morph reads as the
// cones sharpening into a mountain wall rather than sliding sideways.
const ROCKIES_PEAKS: Point[] = [
  [130, 178],
  [245, 110],
  [282, 140],
  [395, 96],
  [458, 150],
  [478, 118],
  [540, 158],
  [615, 126],
  [718, 80],
  [756, 128],
  [860, 100],
  [930, 146],
  [952, 112],
  [970, 132],
  [992, 104],
  [1050, 150],
  [1112, 118],
  [1134, 140],
  [1175, 128],
  [1200, 170],
]

/** Straight lines expressed as quadratics (control at the midpoint) so they morph cleanly. */
function straight(start: Point, points: Point[]): Segment[] {
  let previous = start
  return points.map((point) => {
    const c: Point = [(previous[0] + point[0]) / 2, (previous[1] + point[1]) / 2]
    previous = point
    return { c, p: point }
  })
}

function toPath(start: Point, segments: Segment[]) {
  const body = segments.map(({ c, p }) => `Q ${c[0]} ${c[1]} ${p[0]} ${p[1]}`).join(" ")
  return `M ${start[0]} ${start[1]} ${body}`
}

/** Closes a horizon line down to the bottom edge, for the land fill. */
export function closePath(line: string) {
  return `${line} L ${HORIZON_WIDTH} ${HORIZON_HEIGHT} L 0 ${HORIZON_HEIGHT} Z`
}

export const VOLCANO_PATH = toPath(VOLCANO_START, VOLCANOES)
export const ROCKIES_PATH = toPath(ROCKIES_START, straight(ROCKIES_START, ROCKIES_PEAKS))

/** Volcanoes on the left, Rockies on the right: the whole story in one line. */
export const HOMEWARD_PATH = toPath(VOLCANO_START, [
  ...VOLCANOES.slice(0, 8),
  ...straight(VOLCANOES[7].p, ROCKIES_PEAKS.slice(8)),
])
