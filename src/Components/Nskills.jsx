
import { motion } from "framer-motion"

export default function Nskills() {
  const skills = ["HTML", "CSS", "JAVASCRIPT","TAILWIND CSS", "BOOTSTRAP", "REACT JS", "NODE JS", "EXPRESS JS" , "MONOGO DB"]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-8">
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-[#0A2647] mb-8"
      >
        SKILLS
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full cursor-pointer border-2 border-[#FF6B00] text-[#0A2647] hover:bg-[#FF6B00] hover:text-white transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
