import ContentSection from "@/components/About/ContentSection"
import { useEffect, useState } from "react"

  const About = () => {
    const [scrollY, setScrollY] = useState(0)
        
          useEffect(() => {
            const handleScroll = () => {
              setScrollY(window.scrollY)
            }
        
            window.addEventListener("scroll", handleScroll, { passive: true })
            return () => window.removeEventListener("scroll", handleScroll)
          }, [])
        
          const getTranslateY = (multiplier: number, offset = 0) => {
            const height = typeof window !== "undefined" ? window.innerHeight : 0
            return `translateY(${(scrollY - height * offset) * multiplier}px)`
          }
    return (
    <main className=" bg-primary min-h-screen">

    <section className="relative h-screen overflow-hidden">
    <div
    className="absolute w-full h-full"
    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
    <div className="flex flex-col items-center justify-center h-full relative z-10">
      <img src="/Me.jpg" alt="..." className="rounded-full w-2xs mb-6 shadow-lg" />
      <h1 className="text-5xl font-bold text-white text-center px-4">Hello, I'm César</h1>
    </div>
    </div>
    <div className="absolute inset-0"></div>
    </section>


    <ContentSection title="About Me">
    <p className="about-text mb-6">
        I’m a software engineering student with a passion for building clean, functional, 
        and meaningful digital experiences. I enjoy creating full-stack applications, 
        from intuitive frontends to designing solid backend systems. I have a strong 
        interest in web development, particularly using Next.js, Vite, and React.
        
        <br></br>        
        <br></br>
        Lately, I’ve been exploring the world of machine learning, curious about how data-driven 
        systems can enhance the way we interact with technology. I’m drawn to minimalist design, 
        both in code and aesthetics.
        </p>

        <p className="about-text">
        I am currently pursuing my studies at the University of Calgary where I just finished my third year.
        </p>
    </ContentSection>

      <section className="parallax-section">
  <img src="/UofC.jpg" alt="University" className="parallax-image object-cover w-full h-full" />
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Education</h2>
  </div>
</section>

        
    <ContentSection title="🎓 University of Calgary">
    <p className="about-text"> Bachelor of Science in Software Engineering </p>
    <p className="about-text mb-6"> Calgary, Alberta — Expected Graduation: 2027 (with Co-op)</p>
    <p className="about-text">Actively seeking a Software Engineering Co-op for Fall 2025</p>
    </ContentSection>

        
      <section className="parallax-section">
  <img src="/Beach.jpg" alt="Abstract art" className="parallax-image object-cover w-full h-full" />
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Story</h2>
  </div>
</section>

        

        <ContentSection title="More about César">
        <p className="about-text mb-6">I’m originally from 
        <span className="text-gradient-es"> El Salvador </span>
        and currently based in Calgary, Alberta.</p>
                  
        <p className="about-text mb-6">I initially considered a path in Chemical Engineering, but during my first year of 
          university, I discovered a true passion for software development. The creativity, logic, and problem-solving involved really resonated 
          with me and I haven’t looked back since.</p>
        
        <p className="about-text">Outside of the tech field, I enjoy being outdoors whether it’s hiking or travelling to new 
          places, or more recently, getting into running. I’m also a big sports fan; <span className="text-gradient-bkb">basketball</span> is my 
          favorite, but I follow and enjoy football just as much.</p>
          
        </ContentSection>            
        </main>
          )
  }
  
  export default About
  