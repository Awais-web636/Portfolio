
import { motion } from "framer-motion"

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-8">
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-[#0A2647] mb-8"
      >
        EXPERIENCE
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h3 variants={item} className="text-2xl font-semibold text-[#FF6B00] mb-6 text-center">
            Experience
          </motion.h3>
          <div className="space-y-6">
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">
              Frontend Web Developer - Internship</h4>
              <p className="text-gray-600">HiSkyTech,Sargodha</p>
              <p className="text-gray-500">May 2024- Aug 2024</p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">
              Frontend Web Developer - Internship</h4>
              <p className="text-gray-600">CodeCrafters Hub,Lahore</p>
              <p className="text-gray-500">Aug 2024- Oct 2024</p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">Frontend Web Developer - Internship</h4>
              <p className="text-gray-600">Digital Empowerment Network,Islāmābād</p>
              <p className="text-gray-500">Sep 2024- Oct 2024</p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">Frontend Web Developer - Internship</h4>
              <p className="text-gray-600">Tech Vexa,Hungary, Europe</p>
              <p className="text-gray-500">Nov 2024- Dec 2024</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}
