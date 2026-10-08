export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "HTML", "CSS"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Node.js", "FastAPI", "Flask"],
  },
  {
    name: "Data",
    skills: ["PostgreSQL", "Supabase", "Prisma", "MySQL", "DynamoDB"],
  },
  {
    name: "Cloud and delivery",
    skills: ["AWS", "Terraform", "GitHub Actions", "Vercel", "Docker"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Greptile"],
  },
]
