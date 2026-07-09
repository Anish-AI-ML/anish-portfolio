"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

const roles = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "AI Agents",
  "TinyML",
  "Edge AI",
  "Cloud AI",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden px-6 pt-32 lg:px-12">
      {/* Background Aurora / Glow */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="flex w-full flex-col lg:flex-row lg:items-center">
        {/* Left Side Content */}
        <div className="z-10 flex w-full flex-col items-start lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }} // After loading screen
            className="text-lg font-medium text-blue-500 md:text-xl"
          >
            Hi, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.7 }}
            className="mt-2 text-6xl font-black tracking-tighter sm:text-8xl md:text-9xl"
          >
            ANISH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.9 }}
            className="mt-6 flex flex-col space-y-2 text-xl font-medium text-zinc-300 sm:text-2xl"
          >
            <p>AI/ML ENGINEER</p>
            <p>FULL STACK DEVELOPER</p>
            <p>FOUNDER OF ANVE TECH</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
            className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md"
          >
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {roles.map((role, idx) => (
                <span key={idx} className="whitespace-nowrap text-sm text-zinc-400">
                  {role} {idx !== roles.length - 1 && <span className="mx-2 text-blue-500">•</span>}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a href="#projects" className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Projects</span>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-blue-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
            </a>
            <a href="/resume.pdf" download="Anish_Resume.pdf" className="rounded-full border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10">
              Download Resume
            </a>
            <a href="#contact" className="rounded-full border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10">
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Right Side 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
          className="relative mt-12 hidden h-[600px] w-full lg:mt-0 lg:block lg:w-1/2"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            <Environment preset="city" />
            <AnimatedSphere />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
