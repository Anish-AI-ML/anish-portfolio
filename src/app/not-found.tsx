"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#030303] px-6 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <Terminal size={64} className="mb-6 text-red-500" />
        <h1 className="text-6xl font-black tracking-tight sm:text-8xl">
          404 <span className="text-red-500">ERROR</span>
        </h1>
        <p className="mt-4 text-xl text-zinc-400 font-mono">
          {">"} Neural network unable to locate requested node.
        </p>
        <p className="mt-2 text-sm text-zinc-500 font-mono">
          {">"} System path not found or model weights corrupted.
        </p>

        <Link
          href="/"
          className="mt-12 group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-red-500/30 bg-red-500/10 px-8 py-3 font-semibold text-red-500 transition-all hover:bg-red-500/20"
        >
          <span className="relative z-10 font-mono">{"// REBOOT TO HOMEPAGE"}</span>
        </Link>
      </motion.div>
    </main>
  );
}
