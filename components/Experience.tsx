"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

type Item = { company: string; role: string; period: string; points: string[] }

const items: Item[] = [
  {
    company: 'Globiance',
    role: 'Application Developer',
    period: '2024 — 2025',
    points: [
      'Maintained cross‑platform banking & exchange app (iOS/Android, React Native).',
      'Led v2 → v3 platform migration ensuring seamless architecture integration.',
      'Integrated QRPay, trade market, and card management modules.',
      'Boosted stability & performance through reviews and optimizations.'
    ]
  },
  {
    company: 'Ananda (Digital Myanmar)',
    role: 'Fullstack Developer',
    period: '2022 — 2024',
    points: [
      'Built Attendance Mobile Application for 1,500+ users across 3 regions.',
      'Implemented geofencing, custom navigation, Mapbox SDK.',
      'Auth & authorization with Redux Toolkit; ongoing maintenance and support.'
    ]
  },
  {
    company: 'CREATiVE Web Studio',
    role: 'Senior Web Developer / Team Lead',
    period: '2019 — 2022',
    points: [
      'Maintained Telenor Selfcare (Drupal migration) & promotions (Flexiplan, The Mask Singer).',
      'E‑registration for Ministry of Health (Vue.js).',
      'Analytics & issues reporting for Myanmar National Portal.',
      'Mentored and trained junior developers.'
    ]
  },
  {
    company: 'Nexthop IT Service Provider',
    role: 'PHP Developer',
    period: '2016 — 2018',
    points: [
      'Developed government EDMS with CodeIgniter.',
      'Wrote docs, CMS guides; client requirement gathering.'
    ]
  },
]

function ExperienceItem({ item, index, isExpanded, onToggle }: { item: Item, index: number, isExpanded: boolean, onToggle: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Color variants based on index
  const colorVariants = [
    { primary: 'cyan', gradient: 'from-cyan-400 to-cyan-600' },
    { primary: 'violet', gradient: 'from-violet-400 to-violet-600' },
    { primary: 'pink', gradient: 'from-pink-400 to-pink-600' },
    { primary: 'blue', gradient: 'from-blue-400 to-blue-600' },
  ];
  
  const colors = colorVariants[index % colorVariants.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index !== items.length - 1 && (
        <div className={`absolute left-6 top-16 w-0.5 h-full bg-${colors.primary}-400/30`} />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-5 top-6 w-3 h-3 rounded-full bg-white ring-4 ring-cyan-400 z-10" />
      
      <motion.div 
        whileHover={{ y: -5 }}
        className={`card p-6 ml-10 bg-gradient-to-br from-[#0f0c29]/50 to-[#24243e]/50 backdrop-blur-sm border border-${colors.primary}-400/20 rounded-2xl shadow-xl hover:border-${colors.primary}-400/40 transition-all duration-300 cursor-pointer`}
        onClick={onToggle}
      >
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">
              <span className={`text-${colors.primary}-400`}>{item.role}</span> · {item.company}
            </h3>
          </div>
          <span className={`text-${colors.primary}-300 text-sm font-medium`}>{item.period}</span>
        </div>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="list-none mt-4 space-y-2 text-gray-300">
            {item.points.map((p, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start"
              >
                <span className={`w-2 h-2 rounded-full bg-${colors.primary}-400 mt-2 mr-3 flex-shrink-0`} />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-${colors.primary}-300 text-sm`}>
            {item.points.length} key achievements
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <FiChevronUp className={`text-${colors.primary}-400`} /> : <FiChevronDown className={`text-${colors.primary}-400`} />}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section id="experience" ref={ref} className="section py-20 relative">
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
          Work Experience
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          A journey through my professional career, highlighting key roles and accomplishments
        </motion.p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400 opacity-30" />
          
          <div className="space-y-12">
            {items.map((item, index) => (
              <ExperienceItem 
                key={item.company} 
                item={item} 
                index={index}
                isExpanded={expandedItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all"
          >
            View Full Resume <FiExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}