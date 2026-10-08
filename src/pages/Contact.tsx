import { useEffect, useRef, useState } from "react"
import { Copy } from "lucide-react"
import Toast from "@/components/Toast"
import { pill } from "@/components/ui/pill"
import { profile } from "@/data/profile"
import { stagger } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface Channel {
  label: string
  handle: string
  href?: string
}

const CHANNELS: Channel[] = [
  { label: "LinkedIn", handle: profile.linkedinHandle, href: profile.linkedin },
  { label: "GitHub", handle: profile.githubHandle, href: profile.github },
  { label: "Instagram", handle: profile.instagramHandle, href: profile.instagram },
  { label: "Discord", handle: profile.discordHandle },
]

const TOAST_MS = 1800

const rowClass =
  "group flex w-full items-baseline justify-between gap-6 border-t border-line py-5 text-left no-underline"

export default function Contact() {
  const [toast, setToast] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const show = (message: string) => {
    window.clearTimeout(timer.current)
    setToast(message)
    timer.current = window.setTimeout(() => setToast(null), TOAST_MS)
  }

  const copy = async (value: string, message: string) => {
    try {
      await navigator.clipboard.writeText(value)
      show(message)
    } catch {
      show("Couldn’t copy. Select the text instead.")
    }
  }

  return (
    <main id="main">
      <section className="wrap flex min-h-[72svh] flex-col items-center justify-center pb-section pt-[8svh] text-center">
        <h1 className="t-hero t-voice enter" style={stagger(0)}>
          Say hola.
        </h1>
        <p className="t-lead enter mt-6 max-w-[36ch] text-balance text-ink-65" style={stagger(1)}>
          Email reaches me fastest, and I usually reply within two or three days.
        </p>

        <div
          className="enter mt-12 flex w-full max-w-[34rem] flex-col gap-2 rounded-[40px] bg-float p-2 shadow-(--shadow-1) outline outline-line-faint sm:flex-row sm:items-center sm:rounded-full"
          style={stagger(2)}
        >
          <a
            href={`mailto:${profile.email}`}
            className="min-w-0 flex-1 truncate px-4 pt-3 text-ink no-underline sm:pt-0 sm:text-left"
          >
            {profile.email}
          </a>
          <div className="flex justify-center gap-1">
            <button
              type="button"
              onClick={() => copy(profile.email, "Email copied")}
              aria-label="Copy my email address"
              className={pill({ variant: "tertiary", icon: true })}
            >
              <Copy aria-hidden strokeWidth={1.5} className="size-4.5" />
            </button>
            <a href={`mailto:${profile.email}`} className={pill({ variant: "primary" })}>
              Write to me
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="channels-title" className="wrap pb-section-lg">
        <div className="mx-auto max-w-(--col-read)">
          <h2 id="channels-title" className="t-title-3 mb-6 font-normal">
            Or find me here.
          </h2>
          <ul className="border-b border-line">
            {CHANNELS.map(({ label, handle, href }) => {
              const content = (
                <>
                  <span className="t-small text-ink-45">{label}</span>
                  <span className="t-lead text-ink decoration-line-mid underline-offset-4 group-hover:underline">
                    {handle}
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                      {content}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => copy(handle, `${label} handle copied`)}
                      aria-label={`Copy my ${label} handle, ${handle}`}
                      className={cn(rowClass, "cursor-pointer")}
                    >
                      {content}
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <Toast message={toast} />
    </main>
  )
}
