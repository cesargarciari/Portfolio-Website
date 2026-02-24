import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { motion } from "motion/react"
import { CalendarIcon, ArrowLeftIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PostData {
  title: string
  date: string
  description: string
  content: string
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<PostData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
  if (!slug) return;
  const currentSlug = slug; 

  async function loadPost() {
    try {
      const sanitizedSlug = currentSlug.replace(/[^a-zA-Z0-9-_]/g, '')
      const res = await fetch(`/posts/${sanitizedSlug}.md`)
      
      if (!res.ok) throw new Error("Post not found.")
      
      const raw = await res.text()
      const { data, content } = matter(raw)
      
      setPost({
        title: data.title ?? currentSlug, 
        date: data.date ?? "",
        description: data.description ?? "",
        content,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  loadPost()
}, [slug])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 safe-bottom">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline group"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </motion.div>

        {loading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="h-5 bg-muted rounded w-1/4" />
            <div className="mt-8 space-y-3">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/6" />
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-border bg-card p-6 text-muted-foreground">
            {error}
          </div>
        )}

        {!loading && !error && post && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="mb-10">
              <h1 className="mb-3">{post.title}</h1>
              {post.date && (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              )}
              {post.description && (
                <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              )}
              <div className="mt-8 border-b border-border" />
            </header>

            <div className={cn("prose-blog")}>
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-foreground text-3xl sm:text-4xl font-bold mt-10 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-foreground text-2xl sm:text-3xl font-bold mt-8 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-foreground text-xl sm:text-2xl font-semibold mt-6 mb-2">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-foreground text-lg sm:text-xl font-semibold mt-5 mb-2">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="text-foreground leading-7 mb-5">{children}</p>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                    >
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside pl-6 mb-5 space-y-1 text-foreground">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside pl-6 mb-5 space-y-1 text-foreground">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-7">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-border pl-4 my-5 text-muted-foreground italic">
                      {children}
                    </blockquote>
                  ),
                  code: ({ className: cls, children, ...rest }) => {
                    const isInline = !cls
                    if (isInline) {
                      return (
                        <code
                          className="bg-muted text-foreground rounded px-1.5 py-0.5 text-sm font-mono"
                          {...rest}
                        >
                          {children}
                        </code>
                      )
                    }
                    return (
                      <code
                        className={cn(
                          "block bg-muted text-foreground rounded-xl px-5 py-4 text-sm font-mono overflow-x-auto",
                          cls
                        )}
                        {...rest}
                      >
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="bg-muted rounded-xl my-5 overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  hr: () => <hr className="border-border my-8" />,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-foreground">{children}</em>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="rounded-xl w-full object-cover my-6 border border-border"
                    />
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="w-full border-collapse text-sm">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-border px-4 py-2 bg-muted text-left font-semibold text-foreground">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-border px-4 py-2 text-foreground">
                      {children}
                    </td>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.article>
        )}
      </div>
    </main>
  )
}
