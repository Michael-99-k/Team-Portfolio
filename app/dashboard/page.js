const metrics = [
  { label: "Active projects", value: "12" },
  { label: "Team capacity", value: "87%" },
  { label: "Feedback loop", value: "4.9/5" },
];

const tasks = [
  "Finalize the onboarding flow",
  "Review marketing landing page",
  "Prepare sprint review notes",
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          Dashboard
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Team overview
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{metric.label}</div>
            <div className="mt-3 text-3xl font-black text-slate-900 dark:text-white">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Progress snapshot</h2>
          <div className="mt-6 space-y-5">
            {[
              { label: "Design system", value: 82 },
              { label: "Website refresh", value: 68 },
              { label: "Launch checklist", value: 91 },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Today&apos;s priorities</h2>
          <ul className="mt-6 space-y-4">
            {tasks.map((task) => (
              <li key={task} className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span className="text-slate-700 dark:text-slate-200">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
