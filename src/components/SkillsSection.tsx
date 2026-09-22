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
      { key: "dynamodb",     label: "DynamoDB",     url: "https://aws.amazon.com/dynamodb/" },
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
    name: "AI, Automation and Cloud",
    skills: [
      { key: "githubactions", label: "GitHub Actions", url: "https://github.com/features/actions" },
      { key: "greptile",      label: "Greptile",       url: "https://greptile.com/" },
      { key: "vercel",        label: "Vercel",         url: "https://vercel.com/" },
      { key: "aws",           label: "AWS",            url: "https://aws.amazon.com/" },
      { key: "terraform",     label: "Terraform",      url: "https://www.terraform.io/" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className="bg-surface-2 border-t border-border/60 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Toolbox</p>
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
              <h3 className="eyebrow mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
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
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      whileHover={{ y: -3, transition: { type: "spring", duration: 0.3, bounce: 0 } }}
                      whileTap={{ scale: 0.94 }}
                      className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card outline-none transition-[border-color,box-shadow] duration-150 hover:border-foreground/20 hover:shadow-[0_8px_20px_-12px_rgba(15,23,42,0.3)] focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2 dark:hover:shadow-[0_8px_20px_-12px_rgba(0,0,0,0.6)]"
                      title={skill.label}
                      aria-label={skill.label}
                    >
                      <img
                        src={iconUrl}
                        alt=""
                        className="h-7 w-7 object-contain"
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
