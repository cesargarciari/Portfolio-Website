import { cn } from "@/lib/utils"
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { GrMailOption } from "react-icons/gr"


const Contact = () => {

    
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-12 sm:mt-16 w-full flex flex-col gap-12">

    
    <div
          className={cn(
            "relative rounded-xl border border-white/20 bg-primary p-6 backdrop-blur-sm"
          )}
        >
            <h3 className="mb-2 text-xl font-semibold text-white">Contact me</h3>
            <div className="text-center space-y-4">
            <p className="text-slate-200 leading-relaxed">
              I'd love to hear from you! Whether you have a specific inquiry or just want to say hello,
              feel free to reach out through any of these platforms.
            </p>
            <p className="text-sm text-slate-300">I typically respond in 2-3 days.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-slate-100 hover:bg-slate-300 transition-all duration-300 group"
            >
              <div className="p-3 bg-indigo-100 rounded-full group-hover:scale-110 transition-transform duration-300 ">
                <FaDiscord className="text-indigo-500 w-6 h-6"/>
              </div>
              <span className="text-sm font-medium text-slate-700">crujer</span>
            </div>

            <div              
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-slate-100 hover:bg-slate-300 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">cesargarciarivas</span>
            </div>

            <div
             className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-slate-100 hover:bg-slate-300 transition-all duration-300 group"
            >
              <div className="p-3 bg-pink-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaInstagram className="w-6 h-6 text-pink-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">cesargarciaar</span>
            </div>

            <a
              href="mailto:cesarolangogr@gmail.com"
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-slate-100 hover:bg-slate-300 transition-all duration-300 group"
            >
              <div className="p-3 bg-green-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <GrMailOption className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">cesarolangogr@gmail.com</span>
            </a>
          </div>
        </div>

        </div>
  )
}

export default Contact