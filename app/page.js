import Link from "next/link";

const stats = [
  { value: "8+", label: "Years building" },
  { value: "42", label: "Projects shipped" },
  { value: "96%", label: "Client retention" },
];

const features = [
  { title: "Strategy-first delivery", text: "We turn ambitious ideas into practical product plans with measurable outcomes." },
  { title: "Product design", text: "Thoughtful UX systems that make complex workflows feel effortless and clear." },
  { title: "Technical execution", text: "Clean engineering, dependable deployment, and a smooth handoff for every launch." },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
              Build smarter together
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight sm:text-5xl">
              We design digital experiences that lift teams and products.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              We are a creative technology studio helping founders, teams, and organizations launch faster,
              communicate better, and grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                Learn more
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Current focus</p>
              <h2 className="mt-4 text-3xl font-bold">Team Velocity Sprint</h2>
              <p className="mt-3 text-blue-100">
                Reframing internal systems so product, design, and marketing can move in sync.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Discovery workshops",
                "Design system support",
                "Launch planning",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
                  <span className="font-medium">{item}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-300">Ready</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
            Why teams choose us
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 h-11 w-11 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
