import Link from "next/link";
import {
  ArrowRight,
  ShieldHalfIcon,
  Users,
  RssIcon,
  CardSimIcon,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
          <Sparkles className="h-4 w-4" />
          <span>Team Portfolio</span>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Built by a team that{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              ships together.
            </span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore our{" "}
            <Link
              href="/team"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              team
            </Link>
            ,{" "}
            <Link
              href="/dashboard"
              className="font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
            >
              projects
            </Link>
            , and{" "}
            <Link
              href="/blog"
              className="font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
            >
              blog
            </Link>{" "}
            to see what we're working on.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 px-5 text-white transition-opacity hover:opacity-90 md:w-[158px]"
            href="/dashboard"
          >
            View Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-indigo-200 px-5 text-indigo-700 transition-colors hover:border-indigo-400 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/40 md:w-[158px]"
            href="/team"
          >
            <Users className="h-4 w-4" />
            Meet the Team
          </Link>
        </div>

        {/* Quick nav pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 transition hover:border-amber-400 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:border-amber-600"
          >
            <RssIcon className="h-3.5 w-3.5" />
            Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 transition hover:border-emerald-400 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-600"
          >
            <CardSimIcon className="h-3.5 w-3.5" />
            Contact
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:border-indigo-600"
          >
            <ShieldHalfIcon className="h-3.5 w-3.5" />
            About
          </Link>
        </div>
      </main>
    </div>
  );
}