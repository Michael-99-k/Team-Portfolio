"use client";

import Link from "next/link"; 
import {
  Activity,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Clock,
  FolderGit2,
  Layers,
  Server,
  FileText,
  Sparkles,
  Users,
} from "lucide-react";

const teamStats = {
  tagline:
    "We are a cross-functional team designing and building modern, performant web applications.",
  stats: [
    { label: "Team Members", value: 42, icon: Users },
    { label: "Projects Shipped", value: 128, icon: FolderGit2 },
    { label: "Years Experience", value: 8, icon: Briefcase },
    { label: "Uptime", value: "99.9%", icon: Clock },
  ],
};

const activities = [
  {
    id: 1,
    title: "Launched new design system",
    description: "Documented component library with 40+ accessible components.",
    tag: "Design",
    time: "2h ago",
    icon: Layers,
  },
  {
    id: 2,
    title: "Deployed services to k8s",
    description: "Zero downtime rolling update across cluster.",
    tag: "DevOps",
    time: "1d ago",
    icon: Server,
  },
  {
    id: 3,
    title: "Published Q3 blog post",
    description: "Performance engineering in Next.js.",
    tag: "Blog",
    time: "3d ago",
    icon: FileText,
  },
];

const projects = [
  { name: "Cloudbank", status: "Live", tech: "Next.js", bg: "from-blue-500 to-indigo-500" },
  { name: "Shopply", status: "Beta", tech: "Node.js", bg: "from-emerald-500 to-teal-500" },
  { name: "Pulse", status: "Live", tech: "React", bg: "from-rose-500 to-pink-500" },
  { name: "Insightly", status: "In dev", tech: "TypeScript", bg: "from-amber-500 to-orange-500" },
];

export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a]">
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Team Portfolio Dashboard</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Our work speaks
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                louder than words.
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {teamStats.tagline}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/blog"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
              >
                Read our blog
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/team"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-300 px-5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                Meet the team
              </Link>
            </div>
          </div>
          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {teamStats.stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-800/50"
              >
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{label}</span>
                </div>
                <p className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamStats.stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-blue-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition group-hover:bg-blue-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">{label}</span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-white">{value}</p>
            </div>
          ))}
        </section>

        {/* ACTIVITY */}
        <section>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Recent activity
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Latest updates from across the team.
              </p>
            </div>
            <Link href="/blog" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block dark:text-indigo-400">
              View all
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {activities.map(({ id, title, description, tag, time, icon: Icon }) => (
              <Link key={id} href="/blog" className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {tag}
                  </span>
                  <span className="text-xs text-zinc-400">{time}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Projects</h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Selected work and experiments.
              </p>
            </div>
            <Link href="/team" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block dark:text-indigo-400">
              View team
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ name, status, tech, bg }) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${bg} opacity-0 transition group-hover:opacity-5`}
                />
                <div className="relative flex items-center justify-between">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">{name}</p>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {status}
                  </span>
                </div>
                <p className="mt-8 text-sm text-zinc-400">{tech}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}