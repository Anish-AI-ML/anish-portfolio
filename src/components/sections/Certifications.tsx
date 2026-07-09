"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, Code2, Network, Brain, Cpu, LineChart, Gamepad2, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

const certs = [
  {
    title: "Artificial Intelligence Internship",
    issuer: "1Stop",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "AI Project Completion",
    issuer: "1Stop",
    icon: <Award className="h-6 w-6 text-blue-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Machine Learning with MATLAB",
    issuer: "MathWorks",
    icon: <Cpu className="h-6 w-6 text-orange-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MathWorks",
    icon: <Brain className="h-6 w-6 text-orange-400" />,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Deep Learning Onramp",
    issuer: "MathWorks",
    icon: <Network className="h-6 w-6 text-red-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Common Data Analysis Techniques",
    issuer: "MathWorks",
    icon: <LineChart className="h-6 w-6 text-yellow-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    icon: <Code2 className="h-6 w-6 text-blue-400" />,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Python for Data Science",
    issuer: "Reliance Foundation",
    icon: <Code2 className="h-6 w-6 text-green-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "GenAI Data Analytics Job Simulation",
    issuer: "TCS iQ / Forage",
    icon: <Database className="h-6 w-6 text-indigo-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways / Forage",
    icon: <LineChart className="h-6 w-6 text-red-600" />,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "App Building Onramp",
    issuer: "MathWorks",
    icon: <Blocks className="h-6 w-6 text-orange-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Junior Cybersecurity Analyst",
    issuer: "Cisco Networking Academy",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Getting Started with Packet Tracer",
    issuer: "Cisco Networking Academy",
    icon: <Network className="h-6 w-6 text-cyan-500" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Exploring Networking with Packet Tracer",
    issuer: "Cisco Networking Academy",
    icon: <Network className="h-6 w-6 text-cyan-400" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "C for Beginners",
    issuer: "Great Learning",
    icon: <Code2 className="h-6 w-6 text-blue-600" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Future of Gaming in AI",
    issuer: "Participation Certificate",
    icon: <Gamepad2 className="h-6 w-6 text-purple-400" />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
];

export default function Certifications() {
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

      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
              cert.colSpan
            )}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />
            
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 shadow-inner">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  {cert.issuer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
