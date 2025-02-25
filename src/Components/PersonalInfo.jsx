
import { motion } from "framer-motion"

export default function PersonalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=" p-8 rounded-lg"
    >
      <motion.p
        className="text-center text-gray-700 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I&apos;m Muhammad Awais, a Full Stack developer focused on creating responsive, engaging web experiences.
        I specialize in HTML, CSS, JavaScript, with a commitment to helping businesses grow digitally. My
        journey is driven by continuous learning and a passion for bringing creative visions to life online.
      </motion.p>
    </motion.div>
  )
}
