import { ExternalLink, Star, GitFork } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectTiltCard from "./ProjectTiltCard";

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

async function getProjects() {
  try {
    const res = await fetch("https://api.github.com/users/Anish-AI-ML/repos?sort=updated&per_page=6", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data: Repo[] = await res.json();
    return data.filter(repo => !repo.fork);
  } catch (error) {
    console.error("Error fetching github projects:", error);
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="relative w-full max-w-7xl px-6 py-32 lg:px-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          FEATURED <span className="text-blue-500">PROJECTS</span>
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Real-world applications built with modern AI and Web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectTiltCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://github.com/Anish-AI-ML"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
        >
          View More on GitHub <FaGithub size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
