
import { motion } from "framer-motion"

export default function Qualification() {
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
        QUALIFICATION
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h3 variants={item} className="text-2xl font-semibold text-[#FF6B00] mb-6 text-center">
            Education
          </motion.h3>
          <div className="space-y-6">
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">Matric</h4>
              <p className="text-gray-600">Jinnah College,Mianwali</p>
              <p className="text-gray-500">2020</p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">Intermediate Computer Science</h4>
              <p className="text-gray-600">Punjab College,Rawalpindi</p>
              <p className="text-gray-500">2022</p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">BS Computer Science</h4>
              <p className="text-gray-600">Arid University,Rawalpindi</p>
              <p className="text-gray-500">Present</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h3 variants={item} className="text-2xl font-semibold text-[#FF6B00] mb-6 text-center">
            Courses
          </motion.h3>
          <div className="space-y-6">
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">Front-End Development</h4>
              <p className="text-gray-600">coursera</p>
              <p className="text-gray-500">Aug 2024</p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <h4 className="font-semibold text-[#0A2647]">Back-End Development</h4>
              <p className="text-gray-600">coursera</p>
              <p className="text-gray-500">Present</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
