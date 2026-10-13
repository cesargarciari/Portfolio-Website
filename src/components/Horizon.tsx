import { HORIZON_BAND, HORIZON_WIDTH, HOMEWARD_PATH } from "@/lib/horizon"
import { cn } from "@/lib/utils"

interface HorizonProps {
  className?: string
}

export default function Horizon({ className }: HorizonProps) {
  return (
    <svg
      aria-hidden
      viewBox={`0 ${HORIZON_BAND.top} ${HORIZON_WIDTH} ${HORIZON_BAND.height}`}
      className={cn("block h-auto w-full", className)}
    >
      <path
        d={HOMEWARD_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
