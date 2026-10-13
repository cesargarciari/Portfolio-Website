import type { ReactNode } from "react"
import { ReactLenis } from "lenis/react"

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        anchors: { offset: -24 },
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
