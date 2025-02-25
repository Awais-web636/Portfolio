
import { motion } from "framer-motion";
import { FaCode, FaTabletAlt, FaPaintBrush } from "react-icons/fa";

const skills = [
  {
    title: "Front-End Development",
    description: "HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS",
    icon: FaCode,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first design, media queries, Flexbox, and Grid layouts",
    icon: FaTabletAlt,
  },
  {
    title: "Custom Web Design",
    description: "Creating unique, tailored web designs based on client requirements",
    icon: FaPaintBrush,
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-8 bg-[#F1F5F9] my-8 z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0F2851] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          SKILLS & SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center h-full p-6 bg-white rounded-lg shadow-md cursor-pointer border-2 border-[#FF6B00]">
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FF6B00]/10 flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <skill.icon className="w-6 h-6 text-[#FF6B00]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#0F2851]">{skill.title}</h3>
                <p className="text-gray-600 mt-2">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
