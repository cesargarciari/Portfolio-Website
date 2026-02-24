
const techLinks: Record<string,string> = {
  java:         "https://www.java.com/en/",
  py:           "https://python.org/",
  js:           "https://www.javascript.com/",
  ts:           "https://www.typescriptlang.org/",
  html:         "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
  css:          "https://cs.wikipedia.org/wiki/Kask%C3%A1dov%C3%A9_styly",
  md:           "https://en.wikipedia.org/wiki/Markdown",
  react:        "https://react.dev/",
  nextjs:       "https://nextjs.org/",
  vite:         "https://vitejs.dev/",
  tailwind:     "https://tailwindcss.com/",
  nodejs:       "https://www.nodejs.org/",
  flask:        "https://flask.palletsprojects.com/en/2.3.x/",
  fastapi:      "https://fastapi.tiangolo.com/",
  postgresql:   "https://www.postgresql.org/",  
  supabase:     "https://supabase.com/",
  mysql:        "https://www.mysql.com/",
  prisma:       "https://www.prisma.io/",
  git:          "https://git-scm.com/",
  github:       "https://github.com/",
  gitlab:       "https://about.gitlab.com/",
  vscode:       "https://code.visualstudio.com/",
  docker:       "https://www.docker.com/",

};

export const TechIcons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(techLinks).map(([key]) => (
        <a
          key={key}

          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={`https://skillicons.dev/icons?i=${key}`}
            alt={key}
            className="h-12 w-auto"
          />
        </a>
      ))}
    </div>
  );
};
