"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
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
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Skill badges with colors matching the hero section
  const skills = [
    { name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "React Native", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "Next.js", color: "text-violet-400", bg: "bg-violet-400/10" },
    { name: "Laravel", color: "text-pink-400", bg: "bg-pink-400/10" },
    { name: "Node.js", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "MySQL", color: "text-violet-400", bg: "bg-violet-400/10" },
    { name: "MongoDB", color: "text-pink-400", bg: "bg-pink-400/10" },
    { name: "PostgreSQL", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#0f0c29] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-[#24243e] to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="card p-8 md:p-10 bg-gradient-to-br from-[#0f0c29]/70 to-[#24243e]/70 backdrop-blur-sm border border-cyan-400/20 rounded-2xl shadow-xl"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              With over a decade of hands-on experience, I specialize in building
              high-performance mobile and web applications. From pixel-perfect
              interfaces to bulletproof backend systems, I bring deep expertise
              across the full stack — React, React Native, Next.js, Laravel,
              Node.js, and modern databases like MySQL, MongoDB, and PostgreSQL.
              I'm a proactive problem-solver who thrives in cross-functional
              teams, taking products from vision to launch.
            </motion.p>
            

            
            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-cyan-400/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">My Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Design & UX",
                    desc: "Creating intuitive, accessible interfaces that users love",
                    icon: "🎨"
                  },
                  {
                    title: "Development",
                    desc: "Building scalable, maintainable solutions with clean code",
                    icon: "💻"
                  },
                  {
                    title: "Deployment",
                    desc: "Ensuring reliable, secure, and efficient production releases",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 bg-[#302b63]/30 rounded-xl border border-violet-400/20"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-violet-300 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}