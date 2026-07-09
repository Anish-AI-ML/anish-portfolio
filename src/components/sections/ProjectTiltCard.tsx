"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Star, GitFork, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  fork: boolean;
}

export default function ProjectTiltCard({ project, index }: { project: Repo; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ transform: "translateZ(-50px)" }}
        />

        <div style={{ transform: "translateZ(30px)" }}>
          <div className="mb-4 flex items-center justify-between text-zinc-400">
            <FolderGit2 size={32} className="text-blue-500" />
            <div className="flex gap-3">
              {project.html_url && (
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
              )}
              {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          <h3 className="mb-2 text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {project.name.replace(/-/g, " ")}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-3">
            {project.description || "No description provided."}
          </p>

          {project.topics && project.topics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.topics.slice(0, 3).map((topic) => (
                <span key={topic} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-xs text-blue-300">
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          className="mt-6 flex items-center justify-between text-xs text-zinc-500"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            {project.language || "N/A"}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover:text-white transition-colors">
              <Star size={14} /> {project.stargazers_count}
            </div>
            <div className="flex items-center gap-1 hover:text-white transition-colors">
              <GitFork size={14} /> {project.forks_count}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
