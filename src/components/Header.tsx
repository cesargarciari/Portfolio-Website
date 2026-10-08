import { Link } from "react-router-dom"
import ThemeToggle from "@/components/ThemeToggle"
import { pill } from "@/components/ui/pill"
import { profile } from "@/data/profile"

export default function Header() {
  return (
    <header className="wrap flex h-20 items-center justify-between">
      <Link to="/" className="t-small rounded-full font-medium text-ink no-underline">
        {profile.name}
      </Link>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={pill({ variant: "secondary", size: "sm" })}
        >
          View résumé
        </a>
      </div>
    </header>
  )
}
