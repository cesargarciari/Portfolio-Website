import { NavLink, Link} from "react-router-dom";
import { Home, Github, FileText, Mail } from "lucide-react";

const iconBase =
  "h-6 w-6 text-white transition group-hover:opacity-100 group-focus:opacity-100";
const itemBase =
  "group inline-flex items-center justify-center h-12 w-12 rounded-xl hover:bg-white/5 focus:bg-white/5 outline-none";

  
  const handleHomeClick = (e: { preventDefault: () => void; }) => {
  if (location.pathname === "/") {
    e.preventDefault(); // stop NavLink’s default navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  } 
  };


  const handleProjectsClick = (e: { preventDefault: () => void; }) => {
  if (location.pathname === "/projects") {
    e.preventDefault(); // stop NavLink’s default navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  } 
  };

  const handleExperienceClick = (e: { preventDefault: () => void; }) => {
    if (location.pathname === "/experience") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
          rounded-3xl border border-white/10 bg-neutral-900/70
          px-4 py-2
          shadow-lg shadow-black/30
          backdrop-blur
          md:gap-6 md:px-6
        "
      >
        {/* Left cluster (icons) */}
        <div className="flex items-center gap-2 md:gap-3">
          <NavLink
            onClick={handleHomeClick}
            to="/"
            className={({ isActive }) =>
              `${itemBase} ${isActive ? "bg-white/5" : ""}`
            }
            aria-label="Home"
            title="Home"
          >
            <Home className={iconBase} />
          </NavLink>

          <NavLink
            onClick={handleProjectsClick}
            to="/projects"
            className={({ isActive }) =>
              `${itemBase} ${isActive ? "bg-white/5" : ""}`
            }
            aria-label="Projects"
            title="Projects"
          >
            <Github className={iconBase} />
          </NavLink>

          <NavLink
            onClick={handleExperienceClick}
            to="/experience"
            className={({ isActive }) =>
              `${itemBase} ${isActive ? "bg-white/5" : ""}`
            }
            aria-label="Experience"
            title="Experience"
          >
            <FileText className={iconBase} />
          </NavLink>

          {/* Divider */}
          <span className="mx-1 hidden h-6 w-px bg-white/10 md:block" />
        </div>

        {/* CTA on the right */}
        <Link
          to="/contact"
          className="
            inline-flex items-center gap-2
            rounded-2xl bg-neutral-800 px-5 py-2
            text-white/90 hover:text-white
            transition border border-white/10
          "
          aria-label="Contacto"
        >
          <Mail className="h-5 w-5" />
          <span className="text-base font-medium tracking-wide">Contact Me</span>
        </Link>
      </nav>
    </div>
  );
}
