"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Bot,
  Brain,
  GraduationCap,
  Award,
  FileCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InternshipItem {
  title: string;
  company: string;
  programType: string;
  certificateTitle: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  accent: {
    border: string;
    glow: string;
    text: string;
    badgeBg: string;
    iconBg: string;
  };
  highlight?: string;
}

const internships: InternshipItem[] = [
  {
    title: "Agentic AI Internship",
    company: "NeubAltics Research Hub",
    programType: "AI Research & Development Internship",
    certificateTitle: "Agentic AI Internship Certificate",
    description:
      "Explored cutting-edge Agentic AI architectures, autonomous decision loops, multi-agent coordination, and tool-augmented LLM pipelines. Built workflows enabling agents to reason, plan, and autonomously execute complex operations.",
    skills: ["Agentic AI", "Autonomous Agents", "LLM Workflows", "Prompt Engineering", "Multi-Agent Systems", "Python"],
    icon: <Bot className="h-7 w-7 text-emerald-400" />,
    accent: {
      border: "border-emerald-500/30 group-hover:border-emerald-500/60",
      glow: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
      text: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
    },
    highlight: "Autonomous Agent Architectures",
  },
  {
    title: "Artificial Intelligence Internship Training & Completion",
    company: "Internship Studio",
    programType: "AI Internship Training Program",
    certificateTitle: "Artificial Intelligence Training & Completion Certificate",
    description:
      "Completed rigorous artificial intelligence and machine learning training followed by hands-on project development. Gained expertise in neural networks, supervised learning pipelines, data preprocessing, and model evaluation standards.",
    skills: ["Artificial Intelligence", "Deep Learning", "Machine Learning", "Model Training", "Data Pipelines", "Evaluation Metrics"],
    icon: <Brain className="h-7 w-7 text-purple-400" />,
    accent: {
      border: "border-purple-500/30 group-hover:border-purple-500/60",
      glow: "bg-purple-500/15 group-hover:bg-purple-500/25",
      text: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      iconBg: "bg-purple-500/10 border-purple-500/20",
    },
    highlight: "Comprehensive AI Training & Project",
  },
  {
    title: "Artificial Intelligence Internship",
    company: "1Stop",
    programType: "Industry Internship Program",
    certificateTitle: "Artificial Intelligence Internship Certificate",
    description:
      "Hands-on AI internship working with supervised/unsupervised machine learning models, computer vision applications, and model optimization techniques using standard industry development practices.",
    skills: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Python", "Data Modeling"],
    icon: <GraduationCap className="h-7 w-7 text-blue-400" />,
    accent: {
      border: "border-blue-500/30 group-hover:border-blue-500/60",
      glow: "bg-blue-500/15 group-hover:bg-blue-500/25",
      text: "text-blue-400",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      iconBg: "bg-blue-500/10 border-blue-500/20",
    },
    highlight: "Applied Machine Learning",
  },
  {
    title: "Industrial Program on Artificial Intelligence",
    company: "1Stop.ai / Personifwy",
    programType: "Industrial Capstone & Project Program",
    certificateTitle: "Industrial Project Completion Certificate",
    description:
      "Engaged in an intensive industrial AI program tackling real-world problem statements, covering end-to-end machine learning system deployment, production performance optimization, and project defense.",
    skills: ["Applied AI", "Industrial Machine Learning", "End-to-End ML", "Production AI", "Software Best Practices"],
    icon: <Award className="h-7 w-7 text-indigo-400" />,
    accent: {
      border: "border-indigo-500/30 group-hover:border-indigo-500/60",
      glow: "bg-indigo-500/15 group-hover:bg-indigo-500/25",
      text: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
    highlight: "Industry Capstone Delivery",
  },
];

export default function Internships() {
  return (
    <section id="internships" className="relative w-full max-w-7xl px-6 py-32 lg:px-12">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-4">
          <Briefcase className="h-3.5 w-3.5" />
          Industry Experience & Credentials
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          INTERNSHIPS & <span className="text-purple-500">TRAINING</span>
        </h2>
        <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">
          Hands-on industry internships, verified training certificates, and real-world applied AI engineering.
        </p>
      </motion.div>

      {/* Grid of Internships */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {internships.map((internship, index) => (
          <motion.div
            key={internship.title + internship.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border bg-white/5 p-8 transition-all duration-300 hover:bg-white/[0.08] flex flex-col justify-between",
              internship.accent.border
            )}
          >
            {/* Glowing blur orb */}
            <div
              className={cn(
                "absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none",
                internship.accent.glow
              )}
            />

            <div>
              {/* Card Top Row: Icon + Badges */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl border shadow-inner transition-transform duration-300 group-hover:scale-105",
                    internship.accent.iconBg
                  )}
                >
                  {internship.icon}
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Certificate
                  </span>
                  {internship.highlight && (
                    <span className="text-[11px] font-medium text-zinc-400 hidden sm:inline-block">
                      {internship.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Role Title and Company */}
              <div>
                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-white">
                  {internship.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className={cn("font-semibold flex items-center gap-1.5", internship.accent.text)}>
                    <Building2 className="h-4 w-4" />
                    {internship.company}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 text-xs sm:text-sm">{internship.programType}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-zinc-300/90 leading-relaxed">
                {internship.description}
              </p>

              {/* Skills / Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Footer Banner */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <FileCheck className={cn("h-4 w-4 flex-shrink-0", internship.accent.text)} />
                <span className="font-medium text-zinc-200 truncate">
                  {internship.certificateTitle}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 font-semibold text-zinc-400 text-[11px] flex-shrink-0">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Verified
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
