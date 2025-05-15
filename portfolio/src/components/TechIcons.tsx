
const techLinks: Record<string,string> = {
  css:       "https://cs.wikipedia.org/wiki/Kask%C3%A1dov%C3%A9_styly",
  docker:    "https://www.docker.com/",
  flask:     "https://flask.palletsprojects.com/en/2.3.x/",
  git:       "https://git-scm.com/",
  github:    "https://github.com/",
  html:      "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
  java:      "https://www.java.com/en/",
  js:        "https://www.javascript.com/",
  md:        "https://en.wikipedia.org/wiki/Markdown",        
  mysql:     "https://www.mysql.com/",        
  nextjs:    "https://nextjs.org/",
  nodejs:    "https://www.nodejs.org/",
  py:        "https://python.org/",
  react:     "https://react.dev/",
  tailwind:  "https://tailwindcss.com/",
  ts:        "https://www.typescriptlang.org/",
  vite:      "https://vitejs.dev/",
  vscode:    "https://code.visualstudio.com/",
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
