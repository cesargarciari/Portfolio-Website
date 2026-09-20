import { NavLink, Link } from "react-router-dom";
import { Home, Github, FileText, Mail, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { ModeToggle } from "./mode-toggle";

const iconBase =
  "relative h-6 w-6 text-foreground transition-opacity opacity-80 group-hover:opacity-100 group-focus:opacity-100";

const itemBase =
  "group relative inline-flex items-center justify-center h-12 w-12 rounded-xl transition-colors duration-150 hover:bg-accent/40 focus:bg-accent/40 outline-none";

// Apple-style spring: lively without overshooting into a bounce that fights the click.
const PILL_SPRING = { type: "spring", duration: 0.5, bounce: 0.2 } as const;

const handleHomeClick = (e: { preventDefault: () => void }) => {
  if (location.pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handleProjectsClick = (e: { preventDefault: () => void }) => {
  if (location.pathname === "/projects") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handleExperienceClick = (e: { preventDefault: () => void }) => {
  if (location.pathname === "/experience") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

function NavItem({
  to,
  icon: Icon,
  label,
  onClick,
}: {
  to: string;
  icon: LucideIcon;
  label: string;
  onClick: (e: { preventDefault: () => void }) => void;
}) {
  return (
    <NavLink onClick={onClick} to={to} className={itemBase} aria-label={label} title={label} end>
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="nav-active-pill"
              className="absolute inset-0 rounded-xl bg-accent/50"
              transition={PILL_SPRING}
            />
          )}
          <Icon className={iconBase} />
        </>
      )}
    </NavLink>
  );
}

export default function NavBar() {
  return (
    <div
      aria-label="Primary"
      className="
        pointer-events-none
        fixed inset-x-0 bottom-4 z-50
        flex justify-center
        px-4
        xs:bottom-20
        sm:bottom-20
        md:bottom-20
        lg:bottom-20
      "
    >
      <nav
        className="
          pointer-events-auto
          flex items-center gap-4
          rounded-3xl border border-border
          bg-[color:var(--glass)]
          px-4 py-2
          shadow-lg shadow-black/10
          backdrop-blur
          md:gap-6 md:px-6
        "
      >
        <div className="flex items-center gap-2 md:gap-3">
          <NavItem to="/" icon={Home} label="Home" onClick={handleHomeClick} />
          <NavItem to="/projects" icon={Github} label="Projects" onClick={handleProjectsClick} />
          <NavItem
            to="/experience"
            icon={FileText}
            label="Experience"
            onClick={handleExperienceClick}
          />

          <span className="mx-1 hidden h-6 w-px bg-border md:block" />
        </div>

        <Link
          to="/contact"
          className="
            inline-flex items-center gap-2
            rounded-2xl bg-secondary px-5 py-2
            text-secondary-foreground hover:bg-accent
            transition-colors duration-150 border border-border
          "
          aria-label="Contact"
        >
          <Mail className="h-5 w-5" />
          <span className="text-base font-medium tracking-wide">Contact Me</span>
        </Link>

        <ModeToggle />
      </nav>
    </div>
  );
}
