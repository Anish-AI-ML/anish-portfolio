"use client";

import { motion } from "framer-motion";
import { Rocket, MonitorPlay, BrainCircuit, Receipt, Bot, Cloud, Layout } from "lucide-react";

const services = [
  { name: "Modern Websites", icon: <MonitorPlay className="h-6 w-6 text-orange-400" /> },
  { name: "AI Solutions", icon: <BrainCircuit className="h-6 w-6 text-orange-400" /> },
  { name: "Billing Software", icon: <Receipt className="h-6 w-6 text-orange-400" /> },
  { name: "Automation", icon: <Bot className="h-6 w-6 text-orange-400" /> },
  { name: "Cloud Deployment", icon: <Cloud className="h-6 w-6 text-orange-400" /> },
  { name: "Portfolio Dev", icon: <Layout className="h-6 w-6 text-orange-400" /> },
];

export default function AnveTech() {
  return (
    <section id="anvetech" className="relative w-full max-w-7xl px-6 py-32 lg:px-12">
      <div className="relative overflow-hidden rounded-[3rem] border border-orange-500/20 bg-gradient-to-b from-orange-500/5 to-transparent p-8 md:p-16 lg:p-24">
        {/* Startup Glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-1/2 w-full -translate-x-1/2 rounded-[100%] bg-orange-500/20 blur-[120px]" />

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/50">
                <Rocket size={32} />
              </div>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                ANVE <span className="text-orange-500">TECH</span>
              </h2>
              <p className="mt-6 text-lg text-zinc-400">
                Transforming visionary ideas into robust digital realities. At Anve Tech, we don&apos;t just write code; we build the future of software with AI-first architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 grid gap-8 sm:grid-cols-2"
            >
              <div>
                <h3 className="text-xl font-bold text-white">Mission</h3>
                <p className="mt-2 text-zinc-500">
                  To democratize access to cutting-edge AI and web technologies for businesses of all sizes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vision</h3>
                <p className="mt-2 text-zinc-500">
                  A world where intelligent software seamlessly augments human creativity and productivity.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-2xl font-bold text-white"
            >
              Our Services
            </motion.h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-all hover:bg-orange-500/10 hover:border-orange-500/30"
                >
                  <div className="transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                    {service.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <a
                href="https://anvetech.site"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-transform hover:scale-105"
              >
                Visit Anve Tech
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
