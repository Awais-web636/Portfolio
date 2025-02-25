
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="bg-[#F1F5F9] py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2851] mb-6">ABOUT ME</h2>
          <p className="text-gray-600 mb-8">
            I am Muhammad Awais, a dedicated front-end developer passionate about building responsive, user-centered
            designs. With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I focus on creating interactive web
            applications. Currently exploring React.js and dynamic styling, I continuously aim to expand my skills in
            modern web technologies and create impactful digital experiences.
          </p>
          <button className="px-6 py-2 border-2 border-[#FF6B00] text-[#FF6B00] font-medium rounded-full transition-all duration-300 cursor-pointer hover:bg-[#FF6B00] hover:text-white">
            View More
          </button>

        </motion.div>
      </div>
    </section>
  )
}
