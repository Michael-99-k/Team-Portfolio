
const posts = [
  {
    title: "Product strategy for small teams",
    category: "Strategy",
    excerpt: "A simple approach to building clarity, alignment, and real momentum before scaling a roadmap.",
  },
  {
    title: "Design systems that save time",
    category: "Design",
    excerpt: "Why thoughtful reusable patterns help teams launch faster without sacrificing quality.",
  },
  {
    title: "From idea to launch checklist",
    category: "Operations",
    excerpt: "The key milestones that prevent costly rework and keep cross-functional teams synchronized.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          Insights & notes
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Fresh thinking for modern teams.
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {post.category}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{post.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <button className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-300">Read article →</button>
          </article>
        ))}
      </div>

    </div>
  );
}
