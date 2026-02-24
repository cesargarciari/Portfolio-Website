import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import matter from "gray-matter"
import { motion } from "motion/react"
import { CalendarIcon, ArrowRightIcon } from "lucide-react"

interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

export default function Blog() {
  const [posts, setPosts] = useState<PostMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPosts() {
      try {
        const indexRes = await fetch("/posts/index.json")
        if (!indexRes.ok) throw new Error("Could not load post index.")
        const filenames: string[] = await indexRes.json()

        const metas = await Promise.all(
          filenames.map(async (filename) => {
            const res = await fetch(`/posts/${filename}`)
            if (!res.ok) throw new Error(`Could not load ${filename}`)
            const raw = await res.text()
            const { data } = matter(raw)
            const slug = filename.replace(/\.md$/, "")
            return {
              slug,
              title: data.title ?? slug,
              date: data.date ?? "",
              description: data.description ?? "",
            } as PostMeta
          })
        )

        metas.sort((a, b) => (a.date < b.date ? 1 : -1))
        setPosts(metas)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 safe-bottom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-3">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on software, projects, and things I'm learning.
          </p>
        </motion.div>

        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 animate-pulse"
              >
                <div className="h-5 bg-muted rounded w-2/3 mb-3" />
                <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                <div className="h-4 bg-muted rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-border bg-card p-6 text-muted-foreground">
            Failed to load posts: {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="rounded-xl border border-border bg-card p-6 text-muted-foreground">
            No posts yet — check back soon!
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-ring hover:shadow-lg hover:-translate-y-1 no-underline"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      {post.date && (
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
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
                        <p className="text-muted-foreground leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      )}
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
