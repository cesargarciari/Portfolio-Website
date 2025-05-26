import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CiCalendar, CiMapPin } from "react-icons/ci"
import { GiBookmarklet } from "react-icons/gi";
import { VscBug } from "react-icons/vsc";
import { TbBriefcase2Filled } from "react-icons/tb";



interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  type: "Work" | "Education" | "Internship"
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Software Engineer Backend Intern",
    company: "Grupo Roble",
    location: "El Salvador",
    period: "May 2025 - Present",
    description:
      "Developed a payment confirmation interface integrated into internal systems. Created and managing SQL Server tables using Microsoft SQL Server Management Studio (SSMS).Collaborated with senior engineers during onboarding and early phases of feature planning.",
    skills: ["C#", "SQL", "HTML"],
    type: "Internship",
  },
  {
    id: "2",
    title: "Frontend Developer and Tester intern",
    company: "TBox Inc.",
    location: "El Salvador",
    period: "May 2024-August 2024",
    description:
      "Conducted thorough testing and documentation of educational software, refining program performance and ensuring quality control across multiple projects. Additionally, contributed to the development of interactive HTML pages using JavaScript and CSS for dynamic educational activities used in classrooms.",
    skills: ["Unit Testing", "Regression Testing", "HTML", "JavaScript"],
    type: "Internship",
  },
]

export function ScrollTimeline() {
  const getTypeColor = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Work":
        return "bg-blue-700"
      case "Education":
        return "bg-blue-800"
      case "Internship":
        return "bg-blue-900"
      default:
        return "bg-blue-300"
    }
  }

  const getTypeIcon = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Work":
        return <TbBriefcase2Filled />
      case "Education":
        return <GiBookmarklet/>
      case "Internship":
        return <VscBug/>
      default:
        return "📍"
    }
  }

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">My Experience</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A summary of my professional experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-12">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative flex items-start">
              
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full ${getTypeColor(
                    experience.type
                  )} flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/30 border-4 border-gray-800 ring-2 ring-gray-600`}
                >
                  {getTypeIcon(experience.type)}
                </div>
              </div>

              
              <div className="ml-8 flex-1">
                <Card className="shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700 bg-black-800/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl font-bold text-white">{experience.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="w-fit border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        {experience.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-semibold text-cyan-400">
                      {experience.company}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <CiCalendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <CiMapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-gray-700 text-gray-200 hover:bg-gray-600"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
