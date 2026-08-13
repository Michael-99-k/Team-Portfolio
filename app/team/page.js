const members = [
  {
    name: "Alicia Morgan",
    role: "Creative Director",
    bio: "Shapes product stories and visual frameworks that keep brand experiences clear and memorable.",
  },
  {
    name: "Daniel Brooks",
    role: "Product Lead",
    bio: "Connects customer insight, roadmap planning, and technology decisions into one clear delivery path.",
  },
  {
    name: "Sana Patel",
    role: "Frontend Engineer",
    bio: "Builds polished, responsive interfaces that feel effortless and are ready for real users.",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          Our team
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Experienced specialists with one shared focus.
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {members.map((member) => (
          <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white">
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
              {member.role}
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
