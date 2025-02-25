"use client"

import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-8">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-[#0F2C59] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACT ME
      </motion.h1>

      <motion.div
        className="bg-[#F1F5F9] shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[#0F2C59] text-center mb-4">Let&apos;s Connect!</h2>

        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Looking for help to expand your business with a strong digital presence? Feel free to reach out!
        </p>

        <motion.div
          className="space-y-6 max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#FF8B13]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#FF8B13]" />
            </div>
            <div>
              <p className="text-[#FF8B13] font-medium">Email</p>
              <p className="text-gray-700">muhammadawais1820@gmail.com</p>
            </div>
          </motion.div>

          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#FF8B13]/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#FF8B13]" />
            </div>
            <div>
              <p className="text-[#FF8B13] font-medium">Phone</p>
              <p className="text-gray-700">03010008957</p>
            </div>
          </motion.div>

          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#FF8B13]/10 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-[#FF8B13]" />
            </div>
            <div>
              <p className="text-[#FF8B13] font-medium">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/muhammad-awais-577958316/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#FF8B13] transition-colors"
              >
                Muhammad Awais
              </a>
            </div>
          </motion.div>

          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#FF8B13]/10 flex items-center justify-center">
              <Github className="w-5 h-5 text-[#FF8B13]" />
            </div>
            <div>
              <p className="text-[#FF8B13] font-medium">GitHub</p>
              <a
                href="https://github.com/Awais-web636"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#FF8B13] transition-colors"
              >
                Awais
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
