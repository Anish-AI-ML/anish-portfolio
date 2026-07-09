"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    role: "Artificial Intelligence and Machine Learning Scientist",
    company: "Sathyabama Institute of Science and Technology",
    date: "2024 - 2028",
    description: "Started learning AI/ML, Python, C++, Java and basic web development.",
  },
  {
    role: "Projects & Open Source",
    company: "GitHub",
    date: "2024 - Present",
    description: "Built several machine learning models, contributed to open-source, and explored computer vision.",
  },
  {
    role: "AI Internship",
    company: "Tech Company",
    date: "July 2025 - Sep 2025",
    description: "Worked on real-world AI applications, deployed ML models to the cloud, and gained industry experience.",
  },
  {
    role: "Founder",
    company: "Anve Tech",
    date: "4th May 2026 - Present",
    description: "Leading a startup focusing on modern websites, AI solutions, billing software, and automation.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative w-full max-w-5xl px-6 py-32 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
      >
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          MY <span className="text-purple-500">JOURNEY</span>
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative mx-auto flex flex-col items-center">
        {/* The central line */}
        <div className="absolute bottom-0 top-0 w-0.5 bg-white/10">
          <motion.div
            className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="flex w-full flex-col gap-16">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex w-full items-center justify-between ${isEven ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                {/* Empty space for the other side */}
                <div className="hidden w-[45%] md:block" />

                {/* The central dot */}
                <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#030303] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] md:block hidden" />

                {/* The content card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-full md:w-[45%]"
                >
                  {/* Mobile dot */}
                  <div className="absolute -left-8 top-6 h-4 w-4 rounded-full border-2 border-[#030303] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] md:hidden" />

                  <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10 ml-6 md:ml-0">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all group-hover:bg-purple-500/20" />

                    <span className="text-sm font-semibold tracking-wider text-purple-400">
                      {item.date}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
                    <h4 className="text-lg font-medium text-blue-400">{item.company}</h4>
                    <p className="mt-4 text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
