import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import img from "../assets/img.png";

export default function Hero() {
  const navigate = useNavigate();
  const handleDownload = () => {
    const cvUrl = "/cv.pdf"; // Make sure your CV is inside the public folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "My_CV.pdf"; // The file will be downloaded with this name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-lg sm:text-xl text-[#FF6B00] mb-2">HELLO, I&apos;M</h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#0F2851] mb-4">
            Muhammad Awais
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            Passionate web developer with expertise in crafting dynamic and responsive websites. Skilled in modern
            technologies like React and Tailwind CSS to deliver user-centric solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="border-2 border-[#FF6B00] text-[#FF6B00] px-4 py-2 rounded-full bg-transparent hover:bg-[#FF6B00] hover:text-white transition duration-300 ease-in-out cursor-pointer w-full sm:w-auto" onClick={() => navigate("/contact")}>
              Contact Me
            </button>
            <button className="border-2 border-[#0F2851] text-[#0F2851] px-4 py-2 rounded-full bg-transparent hover:bg-[#0F2851] hover:text-white transition duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"  onClick={handleDownload}>
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 mx-auto">
            <img
              src={img}
              alt="Profile"
              className="rounded-full object-cover w-full h-full z-10 shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
