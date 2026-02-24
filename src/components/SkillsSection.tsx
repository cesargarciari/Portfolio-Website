import { motion } from "motion/react"

interface Skill {
  key: string
  label: string
  url: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { key: "java",  label: "Java",       url: "https://www.java.com/en/" },
      { key: "cpp",   label: "C++",        url: "https://isocpp.org/" }, 
      { key: "cs",    label: "C#",         url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { key: "py",    label: "Python",     url: "https://python.org/" },
      { key: "js",    label: "JavaScript", url: "https://www.javascript.com/" },
      { key: "ts",    label: "TypeScript", url: "https://www.typescriptlang.org/" },
      { key: "html",  label: "HTML",       url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { key: "css",   label: "CSS",        url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { key: "react",   label: "React",       url: "https://react.dev/" },
      { key: "nextjs",  label: "Next.js",     url: "https://nextjs.org/" },
      { key: "vite",    label: "Vite",        url: "https://vitejs.dev/" },
      { key: "tailwind",label: "Tailwind CSS",url: "https://tailwindcss.com/" },
      { key: "nodejs",  label: "Node.js",     url: "https://www.nodejs.org/" },
      { key: "flask",   label: "Flask",       url: "https://flask.palletsprojects.com/" },
      { key: "fastapi", label: "FastAPI",     url: "https://fastapi.tiangolo.com/" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { key: "postgresql", label: "PostgreSQL", url: "https://www.postgresql.org/" },
      { key: "supabase",   label: "Supabase",   url: "https://supabase.com/" },
      { key: "mysql",      label: "MySQL",      url: "https://www.mysql.com/" },
      { key: "prisma",     label: "Prisma",     url: "https://www.prisma.io/" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { key: "git",    label: "Git",    url: "https://git-scm.com/" },
      { key: "github", label: "GitHub", url: "https://github.com/" },
      { key: "gitlab", label: "GitLab", url: "https://about.gitlab.com/" },
      { key: "vscode", label: "VS Code",url: "https://code.visualstudio.com/" },
      { key: "docker", label: "Docker", url: "https://www.docker.com/" },
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      { key: "githubactions", label: "GitHub Actions", url: "https://github.com/features/actions" },
      { key: "claude",        label: "Claude AI",      url: "https://claude.ai/" },
      { key: "greptile",      label: "Greptile",       url: "https://greptile.com/" },
      { key: "vercel",        label: "Vercel",         url: "https://vercel.com/" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-3">Skills &amp; Technologies</h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-muted-foreground mb-4">{category.name}</h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const iconUrl = 
                    skill.key === "claude" ? "https://claude.ai/favicon.ico" : 
                    skill.key === "greptile" ? "https://www.greptile.com/favicon.ico" : 
                    `https://skillicons.dev/icons?i=${skill.key}`;

                  return (
                    <motion.a
                      key={skill.key}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.04,
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4,
                        transition: { duration: 0.2, delay: 0.1 }
                      }}
                      className="block"
                      title={skill.label}
                      aria-label={skill.label}
                    >
                      <img
                        src={iconUrl}
                        alt={skill.label}
                        className="h-12 w-12 object-contain rounded-lg" 
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
