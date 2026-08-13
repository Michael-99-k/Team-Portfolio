const values = [
  {
    title: "Clarity in action",
    text: "We simplify decisions for teams by translating strategy into clear, measurable next steps.",
  },
  {
    title: "Human-centered design",
    text: "Every touchpoint is crafted to feel intuitive, useful, and aligned with real-world user needs.",
  },
  {
    title: "Reliable execution",
    text: "Our process keeps momentum high while maintaining quality, accountability, and momentum across launches.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          About us
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          We build thoughtful systems for ambitious teams.
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our mission</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We help organizations turn ideas into products and experiences that work in the real world. By combining
            strategy, design, and engineering, we create the momentum needed to move from vision to measurable impact.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white shadow-lg shadow-blue-500/20">
          <h2 className="text-2xl font-bold">What we value</h2>
          <ul className="mt-6 space-y-4 text-blue-50">
            <li>• Strong collaboration across teams and disciplines</li>
            <li>• Clear communication with no hidden surprises</li>
            <li>• Outcomes that matter to users and business goals</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{value.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
