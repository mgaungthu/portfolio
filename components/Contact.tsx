"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1500);
  };

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-cyan-400" size={20} />,
      label: "Email",
      value: "mr.mgaungthu@gmail.com",
      link: "mailto:mr.mgaungthu@gmail.com"
    },
    {
      icon: <FiPhone className="text-violet-400" size={20} />,
      label: "Phone",
      value: "+66 90 980 9147",
      link: "tel:+66909809147"
    },
    {
      icon: <FiGithub className="text-pink-400" size={20} />,
      label: "GitHub",
      value: "github.com/mgaungthu",
      link: "https://github.com/mgaungthu"
    },
    {
      icon: <FiLinkedin className="text-cyan-400" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/aung-thu",
      link: "https://www.linkedin.com/in/aung-thu/"
    }
  ];

  return (
    <section id="contact" ref={ref} className="section py-20 relative">
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
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Have a project in mind, or just want to say hi? I'd love to hear from you.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            className="card p-6 md:p-8 bg-gradient-to-br from-[#0f0c29]/70 to-[#24243e]/70 backdrop-blur-sm border border-cyan-400/20 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-semibold text-cyan-100 mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started or think you need my help with something, then get in touch.
            </p>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.label === 'Email' || method.label === 'Phone' ? '_self' : '_blank'}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-gradient-to-r from-cyan-400/20 to-violet-400/20">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{method.label}</div>
                    <div className="text-cyan-100 group-hover:text-cyan-300 transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 pt-6 border-t border-cyan-400/20 flex items-center gap-3 text-gray-400"
            >
              <FiMapPin className="text-violet-400" />
              <span>Based in Thailand</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            variants={itemVariants}
            className="card p-6 md:p-8 space-y-6 bg-gradient-to-br from-[#0f0c29]/70 to-[#24243e]/70 backdrop-blur-sm border border-violet-400/20 rounded-2xl shadow-xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold text-violet-100 mb-2">Send a Message</h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <motion.input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400 transition-colors"
                  required 
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <motion.input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-violet-400 transition-colors"
                  required 
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-400">Message</label>
                <motion.textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-pink-400 transition-colors min-h-[120px]"
                  required 
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
            </motion.div>

            <motion.button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  <FiSend size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-green-500/10 border border-green-400/20 text-green-300 text-center"
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}