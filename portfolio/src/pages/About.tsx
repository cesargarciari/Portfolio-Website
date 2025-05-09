import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const About = () => {
    return (
      <div className="justify-center items-center flex flex-col">
        <Card className="w-128 shadow-amber-100 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-white">
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  export default About
  