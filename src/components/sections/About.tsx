"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Sparkles, BrainCircuit, Rocket, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const bentoCards = [
  {
    title: "Who Am I",
    description: "I am an aspiring Artificial Intelligence & Machine Learning Engineer, Full-Stack Developer, and Android Developer passionate about building intelligent, scalable, and user-centric software solutions. Currently pursuing Computer Science and Engineering with a specialization in AI & ML, I enjoy turning innovative ideas into real-world applications through Artificial Intelligence, modern web technologies, mobile development, and cloud-based solutions.\n\nMy experience includes developing AI-powered applications, Android apps, responsive web platforms, and IoT-based projects using technologies such as Python, TensorFlow, React, FastAPI, Android Studio, and modern development tools. Every project strengthens my problem-solving abilities and deepens my understanding of software engineering and emerging technologies.\n\nI believe great software is where intelligence meets simplicity. My goal is to create products that are efficient, scalable, and intuitive while continuously learning, exploring new technologies, and contributing to impactful solutions that make a difference.",
    className: "md:col-span-2 md:row-span-2",
    icon: <Terminal className="mb-4 h-8 w-8 text-blue-500" />,
  },
  {
    title: "Current Focus",
    description: "Developing scalable AI agents and integrating machine learning models into full-stack web applications.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Target className="mb-4 h-8 w-8 text-purple-500" />,
  },
  {
    title: "Founder",
    description: "Leading Anve Tech, transforming ideas into scalable products.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Rocket className="mb-4 h-8 w-8 text-orange-500" />,
  },
  {
    title: "Philosophy",
    description: "AI-assisted development combined with strong engineering fundamentals.",
    className: "md:col-span-1 md:row-span-1",
    icon: <BrainCircuit className="mb-4 h-8 w-8 text-green-500" />,
  },
  {
    title: "Fun Facts",
    description: "I love exploring 3D animations and creating interactive web experiences.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Sparkles className="mb-4 h-8 w-8 text-yellow-500" />,
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl px-6 py-32 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          ABOUT <span className="text-blue-500">ME</span>
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Transforming complex problems into elegant, scalable solutions.
        </p>
      </motion.div>

      <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-3">
        {bentoCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10",
              card.className
            )}
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-all group-hover:bg-blue-500/40" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                {card.icon}
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-zinc-400">{card.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
