import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { GrMailOption } from "react-icons/gr"

const tileBase =
  "flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary border border-transparent hover:bg-accent hover:border-border transition-[background-color,border-color,transform] duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"

const iconWrapBase =
  "p-3 rounded-full bg-background border border-border group-hover:scale-110 transition-transform duration-200"

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-12 sm:mt-16 w-full flex flex-col gap-12 safe-bottom">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={cn("surface-card relative p-6 sm:p-8")}
      >
        <p className="eyebrow mb-3">Get in touch</p>
        <h3 className="mb-2 text-xl font-semibold text-foreground">Contact me</h3>

        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed max-w-prose">
            I'd love to hear from you! Whether you have a specific inquiry or just want to say hello,
            feel free to reach out through any of these platforms.
          </p>
          <p className="text-sm text-muted-foreground">I typically respond in 2-3 days.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
          <div className={cn(tileBase, "group cursor-default")}>
            <div className={iconWrapBase}>
              <FaDiscord className="text-indigo-500 w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground">crujer</span>
          </div>

          <a
            href="https://www.linkedin.com/in/cesargarciarivas/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(tileBase, "group active:scale-[0.97]")}
          >
            <div className={iconWrapBase}>
              <FaLinkedin className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm font-medium text-foreground">cesargarciarivas</span>
          </a>

          <a
            href="https://www.instagram.com/cesargarciaar/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(tileBase, "group active:scale-[0.97]")}
          >
            <div className={iconWrapBase}>
              <FaInstagram className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-sm font-medium text-foreground">cesargarciaar</span>
          </a>

          <a
            href="mailto:cesarolangogr@gmail.com"
            className={cn(tileBase, "group active:scale-[0.97]")}
          >
            <div className={iconWrapBase}>
              <GrMailOption className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-sm font-medium text-foreground break-all text-center">
              cesarolangogr@gmail.com
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
