"use client";

import { motion } from "framer-motion";

const skills = [
  "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras",
  "CNN", "RNN", "LSTM", "Transformers", "TinyML",
  "Python", "Java", "JavaScript", "HTML", "CSS",
  "C", "C++", "SQL", "FastAPI", "Flask",
  "React", "Next.js", "Tailwind", "ThreeJS",
  "MongoDB", "MySQL", "SQLite", "Supabase", "Firebase",
  "AWS", "Google Cloud", "Git", "GitHub", "Linux",
  "Docker", "VS Code", "Postman", "Jupyter"
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          TECH <span className="text-blue-500">ARSENAL</span>
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Tools, languages, and frameworks I use to build scalable products.
        </p>
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
        {/* Background glow for the cloud */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
        
        {skills.map((skill, index) => {
          // Calculate random float properties for a natural look
          const floatDuration = 3 + Math.random() * 4;
          const floatDelay = Math.random() * 2;
          const yOffset = -10 - Math.random() * 15;
          
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, yOffset, 0] }}
                transition={{
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: floatDelay,
                }}
                className="group relative cursor-pointer overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-white/10 hover:text-white"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {skill}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
