"use client";

const team = [
  {
    name: "Aurelia.M",
    initials: "A",
    bio: "Builds clean, responsive interfaces and brings designs to life with code.",
    skills: ["React", "Tailwind CSS", "Next.js"],
    portfolioUrl: "#",
  },
  {
    name: "Michael",
    initials: "M",
    bio: "Builds clean, responsive interfaces and brings designs to life with code.",
    skills: ["Node.js", "Git", "Docker"],
    portfolioUrl: "#",
  },
  {
    name: "Bessy",
    initials: "B",
    bio: "Builds clean, responsive interfaces and brings designs to life with code.",
    skills: ["Figma", "UI Design", "Prototyping"],
    portfolioUrl: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Meet the Team
        </h1>
        <p className="mt-4 text-lg text-blue-100 dark:text-gray-300 max-w-2xl mx-auto">
          The people behind this project — combining design, development, and
          leadership to bring it to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={member.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-5 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                View Portfolio
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
