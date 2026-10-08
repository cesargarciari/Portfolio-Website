import { Link } from "react-router-dom"
import { pill } from "@/components/ui/pill"
import { stagger } from "@/lib/motion"

const NotFound = () => {
  return (
    <main id="main" className="wrap flex min-h-[80svh] flex-col items-center justify-center pb-section text-center">
      <h1 className="t-title-1 enter max-w-[14ch]" style={stagger(0)}>
        This page wandered off.
      </h1>
      <p className="t-lead enter mt-6 max-w-[34ch] text-balance text-ink-65" style={stagger(1)}>
        The link may be old, or the address has a typo.
      </p>
      <div className="enter mt-10 size-56 overflow-hidden rounded-4xl bg-raised" style={stagger(2)}>
        <img src="/404.gif" alt="" className="size-full object-cover" />
      </div>
      <div className="enter mt-10 flex flex-wrap justify-center gap-2" style={stagger(3)}>
        <Link to="/" className={pill({ variant: "primary" })}>
          Go to the home page
        </Link>
        <button type="button" onClick={() => window.history.back()} className={pill({ variant: "secondary" })}>
          Go back
        </button>
      </div>
    </main>
  )
}

export default NotFound
