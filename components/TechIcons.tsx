"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from 'react'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, 
  SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, 
  SiDocker, SiRedux, SiPrisma, SiSupabase, SiGithub, SiTypescript 
} from 'react-icons/si'

function TechItem({ icon, label, index }: { icon: ReactNode; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col items-center gap-3 group cursor-default"
    >
      <motion.div 
        className="card p-4 bg-gradient-to-br from-[#0f0c29]/50 to-[#24243e]/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl group-hover:border-cyan-400/40 transition-colors"
        whileHover={{
          rotate: [0, -5, 0],
          transition: { duration: 0.4 }
        }}
      >
        {icon}
      </motion.div>
      <span className="text-sm text-gray-300 group-hover:text-cyan-300 transition-colors font-medium">{label}</span>
    </motion.div>
  )
}

export default function TechIcons() {
  const size = 32;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const techItems = [
    { icon: <SiReact size={size} className="text-cyan-400" />, label: "React / RN" },
    { icon: <SiNextdotjs size={size} className="text-white" />, label: "Next.js" },
    { icon: <SiTypescript size={size} className="text-blue-400" />, label: "TypeScript" },
    { icon: <SiNodedotjs size={size} className="text-green-500" />, label: "Node.js" },
    { icon: <SiLaravel size={size} className="text-red-500" />, label: "Laravel" },
    { icon: <SiMysql size={size} className="text-blue-600" />, label: "MySQL" },
    { icon: <SiMongodb size={size} className="text-green-500" />, label: "MongoDB" },
    { icon: <SiPostgresql size={size} className="text-blue-400" />, label: "PostgreSQL" },
    { icon: <SiRedux size={size} className="text-purple-500" />, label: "Redux Toolkit" },
    { icon: <SiTailwindcss size={size} className="text-cyan-400" />, label: "TailwindCSS" },
    { icon: <SiDocker size={size} className="text-blue-500" />, label: "Docker" },
    { icon: <SiPrisma size={size} className="text-white" />, label: "Prisma" },
    { icon: <SiSupabase size={size} className="text-green-400" />, label: "Supabase" },
    { icon: <SiGithub size={size} className="text-white" />, label: "GitHub" },
  ];

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full"
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
      >
        Tech Stack
      </motion.h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
        {techItems.map((item, index) => (
          <TechItem 
            key={index} 
            icon={item.icon} 
            label={item.label} 
            index={index} 
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-12 text-center text-gray-400 text-sm"
      >
      </motion.div>
    </motion.div>
  )
}