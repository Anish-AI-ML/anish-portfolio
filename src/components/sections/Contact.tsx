"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    
    // Construct mailto link
    const mailtoLink = `mailto:anishsundar28@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 5000);
  };
  return (
    <section id="contact" className="relative w-full max-w-7xl px-6 py-32 lg:px-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          LET&apos;S <span className="text-blue-500">TALK</span>
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Ready to turn your ideas into reality?
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-2"
        >
          <div>
            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
            <p className="mt-2 text-zinc-400">
              Feel free to reach out for collaborations, opportunities, or just to say hi.
            </p>
            
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <Mail size={20} />
                </div>
                <a href="mailto:anishsundar28@gmail.com">anishsundar28@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
                  <Mail size={20} />
                </div>
                <a href="mailto:anvetechnologies@gmail.com">anvetechnologies@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                  <MapPin size={20} />
                </div>
                <span>Chennai, India</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="https://github.com/Anish-AI-ML" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-500">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anish-s-77310434a/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="https://anvetech.site" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500">
              <Globe size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-3"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Collaboration"
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`group flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-white transition-all ${
                isSubmitted 
                  ? "bg-emerald-500 cursor-not-allowed" 
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSubmitted ? (
                "Message Sent! I will contact you soon."
              ) : (
                <>
                  Send Message
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
