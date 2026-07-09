import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#030303] pt-16 pb-8">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              ANISH<span className="text-blue-500">.</span>
            </h3>
            <p className="mt-4 text-sm text-zinc-400 max-w-xs">
              AI/ML Engineer & Full Stack Developer. Founder of Anve Tech. Coding ideas into real products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <h4 className="font-semibold text-white">Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#experience" className="hover:text-white transition-colors">Experience</Link></li>
                <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="#anvetech" className="hover:text-white transition-colors">Anve Tech</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Socials</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="https://github.com/Anish-AI-ML" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FaGithub size={16} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/anish-s-77310434a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FaLinkedin size={16} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:anishsundar28@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} /> Email
                  </a>
                </li>
                <li>
                  <a href="https://anvetech.site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Globe size={16} /> Anve Tech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Anish. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-zinc-500 sm:mt-0 flex items-center gap-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
