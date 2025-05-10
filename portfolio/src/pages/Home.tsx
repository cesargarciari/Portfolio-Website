import Card from "@/components/Card"
import { TechIcons } from "@/components/TechIcons"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

const Home = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-16">

    <Card 
    title={  <div> <h2 className="text-4xl">César García </h2>
        <h4><span className='text-gradient-se'>Software Engineering</span></h4>
        <p className="text-gray-400 font-light">Calgary, Alberta/El Salvador</p>
        </div>}     
    description= {<><p className="text-white">I am a 20 year-old software engineering student with a strong desire to 
                learn and grow in the field. I have experience in various programming languages and frameworks, and I am always eager to take on new challenges.</p>
                
                <div className="flex flex-row gap-2 mt-4">

                    <a href="https://github.com/cesargarciari" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="hover:cursor-pointer"><Github color="#000000" /></Button>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/c%C3%A9sar-garc%C3%ADa-4b90b32aa/" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="hover:cursor-pointer"><Linkedin color="#000000" /></Button>
                    </a>   
                </div>
                </>}>
    </Card>   

    <div className="mt-16">
        <h2 className="font-bold mb-2">What I work with</h2>
        <TechIcons />
    </div>

    <a>
    <Button variant="secondary" className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white">Download CV</Button>
    </a>     

    </div>
  )
}

export default Home