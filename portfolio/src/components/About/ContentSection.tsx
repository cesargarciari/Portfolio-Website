import type React from "react"
interface ContentSectionProps {
  title: string
  children: React.ReactNode
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
        <div className="prose max-w-none">{children}</div>
      </div>
    </section>
  )
}
