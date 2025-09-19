"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setOpen(false)
  }

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const navItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <motion.header 
      className="sticky top-0 z-50 border-b bg-bg/80 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        borderColor: isScrolled ? 'rgba(255,255,255,0.1)' : 'transparent',
        background: isScrolled ? 'rgba(15, 12, 41, 0.85)' : 'rgba(15, 12, 41, 0.5)'
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="font-bold text-white text-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 animate-pulse"></div>
          Aung Thu
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l, index) => (
            <motion.a 
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white relative py-1 transition-colors"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {l.label}
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          
          <motion.a 
            href="/aungthu-latest.pdf"
            className="btn h-9 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(34, 211, 238, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setOpen(s => !s)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="md:hidden border-t border-white/10 bg-[#0f0c29]"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container py-4 flex flex-col gap-4">
              {links.map((l, index) => (
                <motion.a 
                  key={l.href}
                  href={l.href}
                  className="text-gray-300 hover:text-white py-2 transition-colors border-b border-white/5 last:border-0"
                  onClick={handleLinkClick}
                  variants={navItemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {l.label}
                </motion.a>
              ))}
              
              <motion.a 
                href="/aungthu-latest.pdf"
                className="btn mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                onClick={handleLinkClick}
                variants={navItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: links.length * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}