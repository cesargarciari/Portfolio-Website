export interface Role {
  id: string
  title: string
  company: string
  location: string
  period: string
  /** Short label for the journey rail on the home page. */
  year: string
  kind: "Internship" | "Capstone" | "Full time"
  /** One line for the home page journey. */
  summary: string
  description: string
  skills: string[]
}

/** Most recent first. */
export const roles: Role[] = [
  {
    id: "csi-capstone",
    title: "Biomechanics data pipeline capstone",
    company: "Canadian Sport Institute Alberta",
    location: "Calgary, AB",
    period: "Sep 2025 – Apr 2026",
    year: "2025–26",
    kind: "Capstone",
    summary: "Turned drone video into joint-angle metrics, validated against clinical motion capture.",
    description:
      "Built end-to-end Python pipelines turning drone-captured video into biomechanical joint-angle metrics, validated against clinical-grade motion capture hardware (85% correlation). Designed automated evaluation tooling: per-joint RMSE, MAE, Pearson r, cross-correlation-based temporal alignment, fuzzy column matching to align messy real-world data against ground truth. Applied custom signal processing (zero-phase Butterworth filtering, median filtering) to extract clean sagittal-plane kinematics from raw pose-estimation output.",
    skills: ["Python", "Signal Processing", "Pose Estimation", "Data Pipelines"],
  },
  {
    id: "grupo-roble",
    title: "Backend software engineer intern",
    company: "Grupo Roble",
    location: "El Salvador",
    period: "May – Aug 2025",
    year: "2025",
    kind: "Internship",
    summary: "Built an ASP.NET MVC admin module for submitting and reviewing payment confirmations.",
    description:
      "I spent the summer of 2025 as a software engineering intern at Grupo Roble in La Libertad, El Salvador, where I was given ownership of an internal reporting portal from design through delivery. The problem was familiar: regional teams were compiling the same operational numbers by hand, in different formats, on different schedules, and leadership had no reliable way to see the whole picture at once. I built the solution as an ASP.NET MVC application in C#, with a .NET Blazor front end composed of reusable interactive components backed by server-side logic. Behind it, I modeled a centralized Microsoft SQL Server database and wrote the T-SQL queries that powered real-time reporting across the group's international operations. The part I found most valuable was not the code. I sat with the business users who would actually use the portal, translated vague requests into concrete requirements, demoed builds, and fixed what they reported back. By the end, more than five regional teams were using it, and reporting effort had dropped by about 40%. It was the first time I saw software I wrote change how people did their jobs day to day.",
    skills: ["C#", "ASP.NET MVC", "SQL Server", "HTML", "Bootstrap", "Razor views"],
  },
  {
    id: "tbox",
    title: "Frontend developer and tester intern",
    company: "TBox Inc.",
    location: "El Salvador",
    period: "May – Aug 2024",
    year: "2024",
    kind: "Internship",
    summary: "Tested and documented classroom software, and built interactive lessons in HTML, CSS, and JavaScript.",
    description:
      "Conducted thorough testing and documentation of educational software, refining program performance and ensuring quality control across multiple projects. Additionally, contributed to the development of interactive HTML pages using JavaScript and CSS for dynamic educational activities used in classrooms.",
    skills: ["Unit Testing", "Regression Testing", "HTML", "CSS", "JavaScript"],
  },
]
