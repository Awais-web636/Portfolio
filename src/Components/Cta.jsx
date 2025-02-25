import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F1F5F9] py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2851] mb-4">Want to??</h2>
          <p className="text-[#FF6B00] text-xl mb-8">Expand Your Business with a Strong Digital Presence</p>
          <button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6 py-3 rounded-full font-semibold cursor-pointer" onClick={() => navigate("/contact")}>
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}