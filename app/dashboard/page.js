"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Award,
  Briefcase,
  Clock,
  FolderGit2,
  Layers,
  Server,
  FileText,
  Sparkles,
  Users,
  Zap,
  TrendingUp,
  ChevronRight,
  Cpu,
  Gauge,
} from "lucide-react";

const teamStats = {
  tagline:
    "We are a cross-functional team designing and building modern, performant web applications.",
  stats: [
    { label: "Team Members", value: 3, icon: Users, gradient: "from-indigo-500 to-blue-500", glow: "group-hover:shadow-indigo-500/30" },
    { label: "Projects Shipped", value: 5, icon: FolderGit2, gradient: "from-teal-500 to-emerald-500", glow: "group-hover:shadow-teal-500/30" },
    { label: "Years Experience", value: 4, icon: Briefcase, gradient: "from-amber-500 to-orange-500", glow: "group-hover:shadow-amber-500/30" },
    { label: "Uptime", value: "99.9%", icon: Clock, gradient: "from-blue-500 to-indigo-500", glow: "group-hover:shadow-blue-500/30" },
  ],
};

const activities = [
  {
    id: 1,
    title: "Launched new design system",
    description: "Documented component library with 40+ accessible components.",
    tag: "Design",
    tagColor: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    dot: "bg-indigo-500",
    time: "2h ago",
    icon: Layers,
    iconGradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 2,
    title: "Deployed services to k8s",
    description: "Zero downtime rolling update across cluster.",
    tag: "DevOps",
    tagColor: "bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    dot: "bg-teal-500",
    time: "1d ago",
    icon: Server,
    iconGradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Published Q3 blog post",
    description: "Performance engineering in Next.js.",
    tag: "Blog",
    tagColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    dot: "bg-amber-500",
    time: "3d ago",
    icon: FileText,
    iconGradient: "from-amber-500 to-orange-500",
  },
];

const projects = [
  { name: "Cloudbank", status: "Live", statusColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", tech: "Next.js", bg: "from-blue-500 to-indigo-500", icon: Zap },
  { name: "Shopply", status: "Beta", statusColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800", tech: "Node.js", bg: "from-emerald-500 to-teal-500", icon: Cpu },
  { name: "Pulse", status: "Live", statusColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", tech: "React", bg: "from-indigo-500 to-blue-500", icon: Gauge },
  { name: "Insightly", status: "In dev", statusColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800", tech: "TypeScript", bg: "from-amber-500 to-orange-500", icon: TrendingUp },
];

export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 dark:bg-[#0a0a0a]">
      {/* ---------- Techy Background Layers ---------- */}
      <div className="pointer-events-none absolute inset-0 tech-grid" aria-hidden="true" />
      {/* Floating gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-teal-500/15 blur-3xl animate-float-slower"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-glow"
      />

      <main className="relative mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {/* ---------- HERO ---------- */}
        <section className="glass-card glow-border relative overflow-hidden rounded-3xl p-8 sm:p-12">
          {/* Animated gradient wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/5 to-teal-500/10 animate-gradient-shift"
          />
          {/* Rotating conic ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full border-2 border-dashed border-indigo-400/30 animate-spin-slow"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-teal-500/20 blur-2xl"
          />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-sm backdrop-blur-sm dark:border-indigo-800 dark:bg-zinc-900/70">
              <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium text-indigo-700 dark:text-indigo-300">
                Team Portfolio Dashboard
              </span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Our work speaks
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                louder than words.
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {teamStats.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/blog"
                className="group inline-flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 px-5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 hover:shadow-xl"
              >
                Read our blog
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/team"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-indigo-200 bg-white/60 px-5 text-sm font-medium text-indigo-700 backdrop-blur-sm transition hover:border-indigo-400 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-zinc-900/60 dark:text-indigo-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/40"
              >
                Meet the team
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Inline mini-stats strip */}
          <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
            {teamStats.stats.map(({ label, value, icon: Icon, gradient, glow }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-xl border border-white/50 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-xl transition group-hover:opacity-20`}
                />
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white shadow-md`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {label}
                  </span>
                </div>
                <p className="mt-4 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold text-transparent dark:from-white dark:to-zinc-400">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- STATS GRID ---------- */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamStats.stats.map(({ label, value, icon: Icon, gradient, glow }) => (
            <div
              key={label}
              className={`group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 ${glow}`}
            >
              {/* Top accent line */}
              <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${gradient} opacity-60 transition-opacity group-hover:opacity-100`} />
              {/* Corner glow */}
              <div aria-hidden="true" className={`pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-2xl transition group-hover:opacity-20`} />

              <div className="relative flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">{label}</span>
              </div>
              <p className="relative mt-4 text-2xl font-bold text-zinc-900 dark:text-white">{value}</p>
            </div>
          ))}
        </section>

        {/* ---------- ACTIVITY ---------- */}
        <section className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-teal-500/[0.03]" />
          <div className="relative flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Recent activity
                </h2>
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Latest updates from across the team.
              </p>
            </div>
            <Link
              href="/blog"
              className="group hidden items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-500 sm:flex dark:text-teal-400"
            >
              View all
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="relative mt-6 space-y-4">
            {/* Vertical timeline line */}
            <div aria-hidden="true" className="absolute left-[1.4rem] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-400 via-teal-400 to-amber-400 opacity-30" />

            {activities.map(({ id, title, description, tag, tagColor, dot, time, icon: Icon, iconGradient }) => (
              <Link
                key={id}
                href="/blog"
                className="group relative flex items-start gap-4 rounded-xl border border-white/50 bg-white/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-indigo-200 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/60 dark:hover:border-indigo-800"
              >
                {/* Timeline dot */}
                <span aria-hidden="true" className={`absolute -left-[0.15rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${dot} ring-4 ring-white/60 dark:ring-zinc-900/60`} />

                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${iconGradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-zinc-900 dark:text-zinc-100">{title}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagColor}`}>
                    {tag}
                  </span>
                  <span className="text-xs text-zinc-400">{time}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FolderGit2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Projects</h2>
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Selected work and experiments.
              </p>
            </div>
            <Link
              href="/team"
              className="group hidden items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-500 sm:flex dark:text-teal-400"
            >
              View team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ name, status, statusColor, tech, bg, icon: Icon }) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Gradient header bar */}
                <div className={`relative h-20 bg-gradient-to-br ${bg}`}>
                  <div aria-hidden="true" className="absolute inset-0 opacity-20 tech-grid" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md ring-1 ring-white/40 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`absolute top-3 right-3 rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${statusColor}`}>
                    {status}
                  </span>
                </div>

                <div className="p-5">
                  <p className="font-bold text-zinc-900 dark:text-zinc-100">{name}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-zinc-400">{tech}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-indigo-400">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Bottom gradient edge */}
                <div aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}