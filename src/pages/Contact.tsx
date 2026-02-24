import { cn } from "@/lib/utils"
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { GrMailOption } from "react-icons/gr"

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-12 sm:mt-16 w-full flex flex-col gap-12 safe-bottom">
      <div
        className={cn(
          "relative rounded-xl border border-border bg-card p-6 backdrop-blur-sm"
        )}
      >
        <h3 className="mb-2 text-xl font-semibold text-foreground">Contact me</h3>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I'd love to hear from you! Whether you have a specific inquiry or just want to say hello,
            feel free to reach out through any of these platforms.
          </p>
          <p className="text-sm text-muted-foreground">I typically respond in 2-3 days.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-300 group">
            <div className="p-3 bg-indigo-100 rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaDiscord className="text-indigo-500 w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground">crujer</span>
          </div>

          <a
            href="https://www.linkedin.com/in/cesargarciarivas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-300 group"
          >
            <div className="p-3 bg-blue-100 rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaLinkedin className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-foreground">cesargarciarivas</span>
          </a>

          <a
            href="https://www.instagram.com/cesargarciaar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-300 group"
          >
            <div className="p-3 bg-pink-100 rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaInstagram className="w-6 h-6 text-pink-600" />
            </div>
            <span className="text-sm font-medium text-foreground">cesargarciaar</span>
          </a>

          <a
            href="mailto:cesarolangogr@gmail.com"
            className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-300 group"
          >
            <div className="p-3 bg-green-100 rounded-full group-hover:scale-110 transition-transform duration-300">
              <GrMailOption className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-foreground">cesarolangogr@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
