import { useState } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  title?: React.ReactNode
  description?: React.ReactNode 
  children?: React.ReactNode
}

export default function Card({
  className,
  title,
  description,
  children,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/20 bg-primary p-6 backdrop-blur-sm transition-all duration-300 ease-in-out",
        isHovered ? "translate-y-[-8px] scale-[1.02] shadow-xl" : "shadow-md",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title && <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>}
      {description && <div className="mb-4 text-white/80">{description}</div>}
      {children}
    </div>
  )
}
