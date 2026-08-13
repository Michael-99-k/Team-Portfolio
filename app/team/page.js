"use client";

import { useEffect, useRef } from "react";
import { Code2, Users, Rocket, Star, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

const team = [
  {
    name: "Aurelia.M",
    role: "Frontend Developer",
    initials: "A",
    bio: "Builds clean, responsive interfaces and brings designs to life with code.",
    skills: ["React", "Tailwind CSS", "Next.js"],
    portfolioUrl: "#",
  },
  {
    name: "Michael",
    role: "Backend Developer",
    initials: "M",
    bio: "Builds clean, responsive interfaces and brings designs to life with code.",
    skills: ["Node.js", "Git", "Docker"],
    portfolioUrl: "#",
  },
  {
    name: "Bessy",
    role: "UI/UX Designer",
    initials: "B",
    bio: "Builds clean, responsive interfaces and brings designs to life with code.",
    skills: ["Figma", "UI Design", "Prototyping"],
    portfolioUrl: "#",
  },
];

const stats = [
  { icon: Code2, value: "10+", label: "Projects Completed" },
  { icon: Users, value: "3", label: "Team Members" },
  { icon: Rocket, value: "1", label: "Shared Vision" },
  { icon: Star, value: "100%", label: "Commitment" },
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
    const NODE_COUNT = 55;
    const CONNECT_DIST = 160;
    const HUB_COUNT = 6;

    function makeNodes() {
      nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        isHub: i < HUB_COUNT,
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

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.025;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

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
            ctx.globalAlpha = (1 - dist / CONNECT_DIST) * 0.2;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const glow = 0.5 + Math.sin(n.pulse) * 0.3;

        if (n.isHub) {
          ctx.beginPath();
          ctx.strokeStyle = n.color;
          ctx.globalAlpha = 0.25 + Math.sin(n.pulse) * 0.1;
          ctx.lineWidth = 1;
          ctx.arc(n.x, n.y, 14 + Math.sin(n.pulse) * 3, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.globalAlpha = glow;
        ctx.fillStyle = n.color;
        ctx.arc(n.x, n.y, n.isHub ? n.r * 3 : n.r * 2, 0, Math.PI * 2);
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

function Navbar() {
  const links = ["Home", "About", "Team", "Blog", "Contact"];
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <Code2 className="w-5 h-5 text-[#27E6EC]" />
        DevCrew
      </div>
      <div className="hidden md:flex items-center gap-2 text-sm">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className={`px-4 py-2 rounded-full transition-colors ${
              link === "Team"
                ? "border border-[#27E6EC]/40 text-[#27E6EC] bg-[#27E6EC]/10"
                : "text-[#9BA8AB] hover:text-white"
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0d1b26]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0d1b26] via-[#1A334A] to-[#1E536E]">
        <GraphBackground />
        <Navbar />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-8 pb-32">
          <p className="text-[#27E6EC] text-xs font-semibold tracking-[0.2em] mb-4">
            WHO WE ARE
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white max-w-xl leading-tight">
            Meet the Team
          </h1>
          <p className="mt-6 text-[#9BA8AB] max-w-md leading-relaxed">
            The people behind this project — combining design, development, and
            leadership to bring it to life.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#27E6EC]/40 text-[#27E6EC] text-sm font-medium hover:bg-[#27E6EC]/10 transition-colors"
            >
              See Our Work
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#stats"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#18A3B7] to-[#1A334A] ring-2 ring-[#0d1b26] flex items-center justify-center text-white text-xs font-semibold"
                >
                  {member.initials}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="text-white font-medium">3 Creative Minds</p>
              <p className="text-[#9BA8AB]">1 Vision</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-10 h-10 rounded-full border border-[#27E6EC]/30 flex items-center justify-center animate-bounce">
            <ChevronDown className="w-4 h-4 text-[#27E6EC]" />
          </div>
        </div>
      </div>

      {/* Team cards */}
      <div id="team" className="max-w-6xl mx-auto py-24 px-6 sm:px-10 text-center">
        <p className="text-[#27E6EC] text-xs font-semibold tracking-[0.2em] mb-3">
          OUR EXPERTISE. OUR STRENGTH.
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Different skills. One goal.
        </h2>
        <div className="w-16 h-0.5 bg-[#27E6EC] mx-auto mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {team.map((member, i) => (
            <div key={member.name} className="relative">
              {i < team.length - 1 && (
                <div className="hidden sm:block absolute top-14 -right-4 w-8 h-px bg-[#1E536E] z-0" />
              )}
              <div className="relative z-10 bg-[#11212d] rounded-2xl border border-[#1E536E] p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#27E6EC]/50 hover:-translate-y-2">
                <div className="relative w-20 h-20 mb-5">
                  <div className="absolute inset-0 rounded-full bg-[#27E6EC] opacity-30 blur-md animate-pulse" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#18A3B7] to-[#1A334A] ring-2 ring-[#27E6EC]/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-2xl">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-[#27E6EC] text-xs font-semibold tracking-wider mt-1">
                  {member.role.toUpperCase()}
                </p>

                <p className="mt-4 text-sm text-[#9BA8AB] leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#27E6EC]/10 text-[#27E6EC]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#27E6EC] hover:text-white transition-colors"
                >
                  View Portfolio
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div id="stats" className="max-w-6xl mx-auto px-6 sm:px-10 pb-16">
        <div className="rounded-2xl border border-[#1E536E] bg-[#11212d] grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#1E536E] py-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-xl bg-[#18A3B7]/10 flex items-center justify-center mb-4">
                <stat.icon className="w-5 h-5 text-[#27E6EC]" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-[#9BA8AB] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="text-center pb-20 px-6">
        <p className="italic text-[#9BA8AB]">
          "FIND YOUR DREAM COME TRUE."
        </p>
        <p className="mt-2 text-sm text-[#5AA5CD]">— KANYE WEST</p>
      </div>
    </div>
  );
}
