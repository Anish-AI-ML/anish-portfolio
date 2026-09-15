"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Database,
  Code2,
  Network,
  Brain,
  Cpu,
  LineChart,
  Gamepad2,
  Blocks,
  BarChart3,
  Cloud,
  Terminal,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All" },
  { id: "ai-ml", name: "AI & Machine Learning" },
  { id: "data-science", name: "Data Science" },
  { id: "cloud", name: "Cloud & Infra" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "software-dev", name: "Software Dev" },
] as const;

type CategoryType = (typeof categories)[number]["id"];

const certs = [
  // AI & Machine Learning
  {
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Developing Generative AI Solutions",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Cpu className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: "Introduction to Agentic AI on AWS",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Network className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Developing Machine Learning Solutions",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Brain className="h-6 w-6 text-pink-500" />,
  },
  {
    title: "Introduction to Generative AI – Art of the Possible",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Brain className="h-6 w-6 text-violet-500" />,
  },
  {
    title: "Introduction to Machine Learning – Art of the Possible",
    issuer: "AWS",
    category: "ai-ml",
    icon: <Cpu className="h-6 w-6 text-cyan-500" />,
  },
  {
    title: "AI for Business Professionals",
    issuer: "HP LIFE",
    category: "ai-ml"
  },
  {
    title: "Critical Thinking in the AI Era",
    issuer: "HP LIFE",
    category: "ai-ml"
  },
  {
    title: "Industrial Program on Artificial Intelligence – Project Completion",
    issuer: "1Stop.ai / Personifwy",
    category: "ai-ml",
    icon: <Award className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "1Stop",
    category: "ai-ml",
    icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Machine Learning with MATLAB",
    issuer: "MathWorks",
    category: "ai-ml",
    icon: <Cpu className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MathWorks",
    category: "ai-ml",
    icon: <Brain className="h-6 w-6 text-orange-400" />,
  },
  {
    title: "Deep Learning Onramp",
    issuer: "MathWorks",
    category: "ai-ml",
    icon: <Network className="h-6 w-6 text-red-500" />,
  },

  // Data Science & Analytics
  {
    title: "Data Analysis in MATLAB – Learning Path",
    issuer: "MathWorks",
    category: "data-science",
    icon: <BarChart3 className="h-6 w-6 text-cyan-500" />,
  },
  {
    title: "Common Data Analysis Techniques",
    issuer: "MathWorks",
    category: "data-science",
    icon: <LineChart className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Consultancy Services (Forage)",
    category: "data-science",
    icon: <Database className="h-6 w-6 text-indigo-500" />,
  },
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways (Forage)",
    category: "data-science",
    icon: <LineChart className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    category: "data-science",
    icon: <Code2 className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Python for Data Science",
    issuer: "Reliance Foundation Skilling Academy",
    category: "data-science",
    icon: <Code2 className="h-6 w-6 text-green-500" />,
  },

  // Cloud & Infrastructure
  {
    title: "AWS Technical Essentials",
    issuer: "AWS",
    category: "cloud",
    icon: <Cloud className="h-6 w-6 text-orange-400" />,
  },
  {
    title: "Introduction to Database Migration",
    issuer: "AWS",
    category: "cloud",
    icon: <Database className="h-6 w-6 text-sky-400" />,
  },

  // Cybersecurity & Networking
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    category: "cybersecurity",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Exploring Networking with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    category: "cybersecurity",
    icon: <Network className="h-6 w-6 text-cyan-400" />,
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    category: "cybersecurity",
    icon: <Network className="h-6 w-6 text-cyan-500" />,
  },
  {
    title: "Junior Cybersecurity Analyst",
    issuer: "Cisco Networking Academy",
    category: "cybersecurity",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
  },

  // Software Development
  {
    title: "App Building Onramp",
    issuer: "MathWorks",
    category: "software-dev",
    icon: <Blocks className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "C for Beginners",
    issuer: "Great Learning Academy",
    category: "software-dev",
    icon: <Terminal className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Future of Gaming in AI (Seminar Certificate)",
    issuer: "Sathyabama Institute of Science and Technology",
    category: "software-dev",
    icon: <Gamepad2 className="h-6 w-6 text-purple-400" />,
  },
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const filteredCerts =
    activeCategory === "all"
      ? certs
      : certs.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certifications" className="relative w-full max-w-7xl px-6 py-32 lg:px-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          LICENSES & <span className="text-emerald-500">CERTIFICATIONS</span>
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Continuous learning and verified achievements.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer overflow-hidden border border-white/10",
              activeCategory === cat.id
                ? "text-black border-transparent font-semibold"
                : "text-zinc-400 bg-white/5 hover:text-white hover:bg-white/10"
            )}
          >
            {activeCategory === cat.id && (
              <motion.span
                layoutId="activeCategoryBg"
                className="absolute inset-0 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ zIndex: 0 }}
              />
            )}
            <span className="relative z-10">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <motion.div
        layout="position"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={cert.title + cert.issuer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                opacity: { duration: 0.25 },
                layout: { type: "spring", stiffness: 300, damping: 32 },
                scale: { duration: 0.25 }
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col justify-between min-h-[160px]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 shadow-inner">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
