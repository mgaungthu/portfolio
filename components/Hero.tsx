"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Floating particles in the background
  const Particle = ({ style }: { style?: React.CSSProperties }) => (
    <motion.div
      className="absolute rounded-full"
      style={style}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  // Generate random particles
  const particles = [];
  for (let i = 0; i < 180; i++) {
    particles.push(
      <Particle
        key={i}
        style={{
          width: Math.random() * 10 + 2,
          height: Math.random() * 10 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: i % 3 === 0 
            ? "#22d3ee" 
            : i % 3 === 1 
            ? "#a78bfa" 
            : "#f472b6",
        }}
      />
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
      
      {/* Animated gradient circles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      {particles}
      
      <div className="relative z-10 max-w-2xl">
        {/* Floating avatar */}
        <motion.div
          className="relative mx-auto mb-8 w-40 h-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/avatar.jpg"
            alt="Aung Thu"
            className="w-full h-full rounded-full border-4 border-cyan-400 shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          {/* Pulsing ring effect around avatar */}
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-cyan-400"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Text content with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            Hi, I'm Aung Thu
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-gray-300 text-lg"
            variants={itemVariants}
          >
            Fullstack Developer building scalable apps with{" "}
            <span className="text-cyan-400 font-medium">React</span>,{" "}
            <span className="text-violet-400 font-medium">Laravel</span>, and{" "}
            <span className="text-pink-400 font-medium">Node.js</span>.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/40 transition cursor-pointer"
            >
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-violet-500/20 border border-violet-400 text-violet-300 hover:bg-violet-500/40 transition cursor-pointer"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}