import { motion } from "motion/react"
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
    id: "3",
    title: "Biomechanics Data Pipeline Capstone",
    company: "Canadian Sport Institute Alberta",
    location: "Calgary, AB",
    period: "September 2025 - April 2026",
    description:
      "Built end-to-end Python pipelines turning drone-captured video into biomechanical joint-angle metrics, validated against clinical-grade motion capture hardware (85% correlation). Designed automated evaluation tooling: per-joint RMSE, MAE, Pearson r, cross-correlation-based temporal alignment, fuzzy column matching to align messy real-world data against ground truth. Applied custom signal processing (zero-phase Butterworth filtering, median filtering) to extract clean sagittal-plane kinematics from raw pose-estimation output.",
    skills: ["Python", "Signal Processing", "Pose Estimation", "Data Pipelines"],
    type: "Education",
  },
  {
    id: "1",
    title: "Software Engineer Backend Intern",
    company: "Grupo Roble",
    location: "El Salvador",
    period: "May 2025 - August 2025",
    description:
      "I spent the summer of 2025 as a software engineering intern at Grupo Roble in La Libertad, El Salvador, where I was given ownership of an internal reporting portal from design through delivery. The problem was familiar: regional teams were compiling the same operational numbers by hand, in different formats, on different schedules, and leadership had no reliable way to see the whole picture at once. I built the solution as an ASP.NET MVC application in C#, with a .NET Blazor front end composed of reusable interactive components backed by server-side logic. Behind it, I modeled a centralized Microsoft SQL Server database and wrote the T-SQL queries that powered real-time reporting across the group's international operations. The part I found most valuable was not the code. I sat with the business users who would actually use the portal, translated vague requests into concrete requirements, demoed builds, and fixed what they reported back. By the end, more than five regional teams were using it, and reporting effort had dropped by about 40%. It was the first time I saw software I wrote change how people did their jobs day to day.",
    skills: ["C#", "SQL", "HTML", "Bootstrap", "Razor views"],
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
  const getTypeIcon = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Work":
        return <TbBriefcase2Filled />
      case "Education":
        return <GiBookmarklet />
      case "Internship":
        return <VscBug />
      default:
        return "📍"
    }
  }

  return (
    <div className="min-h-screen bg-background py-20 safe-bottom">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-3">Timeline</p>
          <h1 className="mb-4">My Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A summary of my professional experience
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto space-y-12">
          <div
            aria-hidden
            className="absolute left-8 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-linear-to-b from-border via-border to-transparent sm:block"
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start"
            >
              <div className="relative z-10 hidden shrink-0 sm:block">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-signal/30 bg-card text-xl text-signal ring-4 ring-background">
                  {getTypeIcon(experience.type)}
                </div>
              </div>

              <div className="flex-1 sm:ml-8">
                <Card className="hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.4)] dark:hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.7)]">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl font-bold tracking-tight text-card-foreground">
                        {experience.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="w-fit border-border text-muted-foreground hover:bg-accent"
                      >
                        {experience.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {experience.company}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
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
                    <p className="text-muted-foreground mb-4 max-w-prose leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-secondary text-secondary-foreground hover:bg-accent"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
