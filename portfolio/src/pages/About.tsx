import Card from "@/components/Card"

  
  const About = () => {
    return (
      <div className="justify-center items-center flex flex-col">
        <Card title="About Me" 
        description={
            <>
              <p>Hi! I’m César García, a curious and motivated learner in the world of software development. 
                While I enjoy the challenge and creativity that comes with full-stack development, I also love diving into smaller, 
                personal projects that let me explore new technologies and ideas. I’m always open to learning something new—whether it’s a new 
                framework or a completely different field.</p>
              <p className="mt-2">Outside of tech, I’m a passionate sports fan. <span className="font-bold text-gradient-bkb">Basketball</span> is my favorite—I love playing it whenever I can—but I also
                 enjoy following Formula 1, football, and American football. I’m equally drawn to creative outlets like photography, and I have 
                 a growing interest in chemistry. When I’m not coding or watching a game, you’ll probably find me out on a hike, exploring somewhere new, 
                 or just chasing fresh experiences wherever they come
</p>
            </>
          } className="max-w-2xl">
        </Card>
          <div>
          <h2 className="justify-items-start"></h2>

          </div>


    </div>
    )
  }
  
  export default About
  