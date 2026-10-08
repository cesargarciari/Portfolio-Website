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
      "I spent the summer of 2025 as a software engineering intern at Grupo Roble in La Libertad, El Salvador, where I owned an internal reporting system from design through delivery. The problem was a familiar one: regional teams were compiling the same operational numbers by hand, in different formats and on different schedules, and leadership had no reliable way to see the whole picture at once. I built the core as an ASP.NET MVC application in C#, backed by a centralized Microsoft SQL Server database I modeled and queried with T-SQL to power real-time reporting across the group's international operations. Early on it became clear that a web portal alone wouldn't solve it, since a lot of the data originated in the field rather than at a desk. So I built a companion mobile application in Power Apps against the same database, letting regional teams capture and review records on site and keeping one source of truth behind both surfaces. The most valuable part wasn't the code. I sat with the business users who would actually use the system, turned vague requests into concrete requirements, demoed builds, and fixed what came back. By the end, more than five regional teams were using it and reporting effort had fallen by about 40%.",
    skills: ["C#", "ASP.NET MVC", "SQL Server", "HTML", "Bootstrap", "Razor views", "PowerApps"],
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
