import { projects } from "@/data/projects"
import { roles } from "@/data/experience"

export interface SearchHit {
  kind: "project" | "role"
  id: string
  title: string
  meta: string
  href: string
}

export interface SearchResult {
  hits: SearchHit[]
  summary: string
}

interface Term {
  raw: string
  key: string
}

interface Entry {
  hit: SearchHit
  /** Stack, skills, names: matched exactly or by prefix-like substring. */
  strong: Term[]
  /** Words from the one-line description: matched exactly only. */
  weak: Set<string>
}

const NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

export const numberWord = (n: number) => NUMBER_WORDS[n] ?? String(n)

const count = (n: number, noun: string) => `${numberWord(n)} ${noun}${n === 1 ? "" : "s"}`

/** Lowercase, strip accents and punctuation, keep # and + so C# and C++ survive. */
const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9#+]/g, "")

const STOP_WORDS = new Set([
  "a", "an", "and", "any", "anything", "are", "built", "build", "can", "did", "do", "does", "done",
  "experience", "for", "have", "how", "i", "in", "is", "know", "me", "of", "on", "or", "project",
  "projects", "show", "something", "the", "to", "use", "used", "using", "what", "with", "work",
  "worked", "you", "your",
])

const ALIASES: Record<string, string[]> = {
  js: ["javascript"],
  ts: ["typescript"],
  py: ["python"],
  csharp: ["c#"],
  dotnet: ["c#", "aspnetmvc"],
  react: ["nextjs"],
  next: ["nextjs"],
  postgres: ["postgresql", "supabase"],
  postgresql: ["supabase"],
  ml: ["scikitlearn", "pandas"],
  ai: ["openai", "openaiapi"],
  cloud: ["aws", "lambda", "dynamodb", "cloudfront", "terraform"],
  serverless: ["lambda"],
  ci: ["githubactions"],
}

const terms = (values: string[]): Term[] => values.map((raw) => ({ raw, key: normalize(raw) }))

const words = (value: string) =>
  new Set(value.split(/\s+/).map(normalize).filter((word) => word.length >= 3 && !STOP_WORDS.has(word)))

const ENTRIES: Entry[] = [
  ...projects.map<Entry>((project) => ({
    hit: {
      kind: "project",
      id: project.id,
      title: project.name,
      meta: project.date,
      href: `/projects#${project.id}`,
    },
    strong: terms([...project.stack, project.name]),
    weak: words(project.tagline),
  })),
  ...roles.map<Entry>((role) => ({
    hit: {
      kind: "role",
      id: role.id,
      title: role.title,
      meta: `${role.kind}, ${role.year}`,
      href: `/experience#${role.id}`,
    },
    strong: terms([...role.skills, role.company, role.location]),
    weak: words(`${role.title} ${role.summary}`),
  })),
]

function matchesExactly(token: string, entry: Entry) {
  const aliases = ALIASES[token] ?? []
  return (
    entry.weak.has(token) ||
    entry.strong.some((term) => term.key === token || aliases.includes(term.key))
  )
}

function matchesLoosely(token: string, entry: Entry) {
  return token.length >= 3 && entry.strong.some((term) => term.key.includes(token))
}

/** Exact hits win ("java" is not "javascript"); partial words only count when nothing is exact. */
function entriesFor(token: string) {
  const exact = ENTRIES.filter((entry) => matchesExactly(token, entry))
  return exact.length > 0 ? exact : ENTRIES.filter((entry) => matchesLoosely(token, entry))
}

/** The display name for a token: the spelling used in the data when there is one. */
function labelFor(raw: string, token: string) {
  const target = ALIASES[token]?.[0] ?? token
  for (const entry of ENTRIES) {
    const term = entry.strong.find((candidate) => candidate.key === token || candidate.key === target)
    if (term) return term.raw
  }
  return `“${raw}”`
}

const EASTER_EGG = new Set(["pupusa", "pupusas"])

/**
 * Searches projects and roles by language, tool, company, or keyword.
 * Plain questions work too ("have you used AWS?"): filler words are ignored.
 */
export function searchWork(query: string): SearchResult {
  const pairs = query
    .split(/[\s,?!/]+/)
    .map((raw) => ({ raw, token: normalize(raw) }))
    .filter(({ token }) => token.length > 0 && !STOP_WORDS.has(token))

  if (pairs.some(({ token }) => EASTER_EGG.has(token))) {
    return {
      hits: [],
      summary: "Off the menu, but noted. Pupusas are El Salvador’s national dish, best with curtido.",
    }
  }

  if (pairs.length === 0) {
    return { hits: [], summary: "Try a language or a tool, like Python or AWS." }
  }

  const found = new Set(pairs.flatMap(({ token }) => entriesFor(token)))
  const hits = ENTRIES.filter((entry) => found.has(entry)).map((entry) => entry.hit)
  const label = pairs.map(({ raw, token }) => labelFor(raw, token)).join(" or ")

  if (hits.length === 0) {
    return { hits, summary: `Nothing I’ve built uses ${label} yet.` }
  }

  const projectCount = hits.filter((hit) => hit.kind === "project").length
  const roleCount = hits.length - projectCount
  const places = [
    projectCount > 0 ? count(projectCount, "project") : null,
    roleCount > 0 ? count(roleCount, "role") : null,
  ]
    .filter(Boolean)
    .join(" and ")

  return { hits, summary: `${label} shows up in ${places}.` }
}
