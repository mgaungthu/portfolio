"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from '@/lib/projects'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

function ProjectCard({ title, description, image, links, technologies, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card overflow-hidden bg-gradient-to-br from-[#0f0c29]/50 to-[#24243e]/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl shadow-xl hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col"
    >
      {/* Image container with overlay effect */}
      <div className="relative overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover transition-transform duration-500" 
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.7 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 to-transparent"
            />
          </>
        ) : (
          <div className="w-full h-48 bg-gradient-to-r from-cyan-400/10 via-violet-400/10 to-pink-400/10 flex items-center justify-center">
            <div className="text-4xl">🚀</div>
          </div>
        )}
        
        {/* Hover overlay with buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10 
          }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
        >
          {links?.map((l: any) => (
            <motion.a 
              key={l.href}
              href={l.href} 
              target="_blank" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-white shadow-lg"
              aria-label={l.label}
            >
              {l.label.includes('GitHub') ? <FiGithub size={18} /> : <FiExternalLink size={18} />}
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-cyan-100 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        
        {/* Technologies used */}
        {technologies && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech: string, i: number) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="px-2 py-1 text-xs rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Links */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {links?.map((l: any) => (
            <motion.a 
              key={l.href}
              href={l.href} 
              target="_blank" 
              whileHover={{ x: 5 }}
              className="flex items-center gap-1 px-4 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all"
            >
              {l.label} <FiArrowRight size={14} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Add some sample technologies to projects if not already there
  const enhancedProjects = projects.map(project => ({
    ...project,
    technologies: project.technologies || [
      "React", "Next.js", "TypeScript", "Node.js", 
      "TailwindCSS", "MongoDB"
    ].sort(() => 0.5 - Math.random()).slice(0, 4 + Math.floor(Math.random() * 3))
  }));

  return (
    <section id="projects" ref={ref} className="section py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#0f0c29] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-[#24243e] to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
        >
          Recent Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Here are some of the projects I've worked on. Each one represents a unique challenge and creative solution.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {enhancedProjects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all"
          >
            View more on GitHub <FiGithub size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}