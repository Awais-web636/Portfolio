import React from "react";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

const ProjectCard = ({ title, description, demoLink, skills }) => {
  return (
    <motion.div
      className="border-2 border-[#FF6B00]  cursor-pointer rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2 font-medium">{skills}</p>
      <a
        href={demoLink}
        className="mt-4 inline-flex items-center bg-[#FF6B00] text-white py-2 px-4 rounded transition hover:bg-opacity-80"
      >
        <IoArrowForward className="mr-1" /> Demo
      </a>
    </motion.div>
  );
};

export default ProjectCard;
