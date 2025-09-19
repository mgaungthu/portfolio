"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    {
      icon: <FiFileText className="text-cyan-400" size={18} />,
      label: "Resume",
      href: "/aungthu-latest.pdf",
      color: "hover:text-cyan-400"
    },
    {
      icon: <FiGithub className="text-violet-400" size={18} />,
      label: "GitHub",
      href: "https://github.com/mgaungthu",
      color: "hover:text-violet-400"
    },
    {
      icon: <FiLinkedin className="text-blue-400" size={18} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aung-thu/",
      color: "hover:text-blue-400"
    },
    {
      icon: <FiMail className="text-pink-400" size={18} />,
      label: "Email",
      href: "mailto:mr.mgaungthu@gmail.com",
      color: "hover:text-pink-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative py-16 border-t border-white/10 bg-gradient-to-b from-[#0f0c29] to-[#24243e]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 to-transparent opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Social links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Resume" ? "_blank" : "_self"}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all ${link.color} hover:bg-white/10 hover:scale-110`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
                <span className="text-xs text-gray-400">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright text */}
          <motion.div
            variants={itemVariants}
            className="text-gray-400 text-sm mb-6"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <FiHeart className="text-pink-400 animate-pulse" /> by Aung Thu
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 text-xs"
          >
            © {new Date().getFullYear()} Aung Thu. All rights reserved.
          </motion.p>

          {/* Back to top button */}
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors text-xs"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.footer>
  );
}