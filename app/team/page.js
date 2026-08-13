"use client";

import { useEffect, useRef } from "react";

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

function GraphBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height;

    const colors = ["#27E6EC", "#18A3B7", "#5AA5CD"];

    // A handful of independent "graph lines" scrolling left
    const lines = colors.map((color, i) => ({
      color,
      offset: i * 40,
      amplitude: 20 + i * 10,
      speed: 0.5 + i * 0.3,
      frequency: 0.02 - i * 0.004,
      phase: Math.random() * 100,
    }));

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      lines.forEach((line) => {
        line.phase += line.speed;
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = 0.25;
        ctx.lineWidth = 1.5;

        for (let x = 0; x <= width; x += 4) {
          const y =
            height / 2 +
            line.offset +
            Math.sin((x + line.phase) * line.frequency) * line.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#eef4f6] dark:bg-[#0d1b26]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A334A] to-[#1E536E] py-24 px-4 sm:px-6 lg:px-8 text-center">
        <GraphBackground />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Meet the Team
          </h1>
          <p className="mt-4 text-lg text-[#5AA5CD] max-w-2xl mx-auto">
            The people behind this project — combining design, development, and
            leadership to bring it to life.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-[#f4f9fa] dark:bg-[#11212d] rounded-2xl shadow-sm border border-[#c9dfe6] dark:border-[#1E536E] p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-[#18A3B7] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <p className="mt-4 text-sm text-gray-600 dark:text-[#9BA8AB] leading-relaxed">
                {member.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#27E6EC]/10 text-[#18A3B7] dark:text-[#27E6EC]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={member.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-5 py-2 text-sm font-medium rounded-full bg-[#18A3B7] text-white hover:bg-[#1E536E] transition-colors"
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
