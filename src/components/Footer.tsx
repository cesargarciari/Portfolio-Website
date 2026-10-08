import { Link } from "react-router-dom"
import Horizon from "@/components/Horizon"
import { profile } from "@/data/profile"

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

const ELSEWHERE: FooterLink[] = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "Instagram", href: profile.instagram, external: true },
]

const ON_THIS_SITE: FooterLink[] = [
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "Résumé", href: profile.resume, external: true },
]

const linkClass = "text-ink-65 no-underline transition-colors duration-[180ms] hover:text-ink"

interface FooterLinksProps {
  title: string
  links: FooterLink[]
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <nav aria-label={title}>
      <p className="t-small font-medium text-ink">{title}</p>
      <ul className="t-small mt-3 space-y-2">
        {links.map(({ label, href, external }) => (
          <li key={label}>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {label}
              </a>
            ) : (
              <Link to={href} className={linkClass}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="bg-footer pb-32 pt-section">
      <div className="wrap">
        <Horizon className="text-ink-15" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="t-small font-medium text-ink">{profile.name}</p>
            <p className="t-small mt-3 max-w-[30ch] text-ink-65">
              Software engineer in Calgary, from El Salvador.
            </p>
          </div>
          <FooterLinks title="Elsewhere" links={ELSEWHERE} />
          <FooterLinks title="On this site" links={ON_THIS_SITE} />
        </div>
        <p className="t-micro mt-16 font-normal text-ink-45">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  )
}
