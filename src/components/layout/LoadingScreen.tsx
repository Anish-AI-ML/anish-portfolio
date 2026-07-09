"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingSteps = [
  "SYSTEM BOOT SEQUENCE INITIATED...",
  "LOADING AI MODELS...",
  "INITIALIZING TENSORFLOW ENV...",
  "LOADING PYTORCH WEIGHTS...",
  "STARTING FASTAPI BACKEND...",
  "ASSEMBLING PORTFOLIO UI...",
  "WELCOME TO ANISH'S TERMINAL",
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Step through the boot sequence
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 1000);
        return prev;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#030303] text-white"
        >
          <div className="w-full max-w-2xl px-6">
            <div className="mb-8 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            
            <div className="font-mono text-sm md:text-base text-green-400">
              {loadingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0,
                    x: index <= currentStep ? 0 : -20,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mb-2"
                >
                  <span className="mr-2 text-zinc-500">[{index + 1}/{loadingSteps.length}]</span>
                  {step}
                  {index === currentStep && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="ml-1 inline-block h-4 w-2 bg-green-400 align-middle"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
