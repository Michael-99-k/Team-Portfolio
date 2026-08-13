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
    let nodes = [];

    const colors = ["#27E6EC", "#18A3B7", "#5AA5CD"];
    const NODE_COUNT = 45;
    const CONNECT_DIST = 140;

    function makeNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      makeNodes();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = "#27E6EC";
            ctx.globalAlpha = (1 - dist / CONNECT_DIST) * 0.25;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw glowing nodes
      nodes.forEach((n) => {
        const glow = 0.5 + Math.sin(n.pulse) * 0.3;
        ctx.beginPath();
        ctx.globalAlpha = glow;
        ctx.fillStyle = n.color;
        ctx.arc(n.x, n.y, n.r * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
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
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 rounded-full bg-[#27E6EC] opacity-40 blur-md animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#18A3B7] to-[#1A334A] ring-2 ring-[#27E6EC]/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">
                    {member.initials}
                  </span>
                </div>
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
