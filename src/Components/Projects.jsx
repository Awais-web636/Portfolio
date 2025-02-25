import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    title: "Usability",
    description:
      "The Usability Enhancer project is a web application designed to improve user experience through intuitive design and interactive features. Built using HTML, CSS, and JavaScript.",
    skills: "HTML, CSS, JAVASCRIPT",
    demoLink: "https://github.com/Awais-web636/Usability.git",
  },
  {
    title: "Healthcare",
    description:
      "Healthcare is a web application designed to empower users in managing their health and wellness. Developed using HTML, CSS, and JavaScript, this project provides a user-friendly.",
    skills: "HTML, CSS, JAVASCRIPT",
    demoLink: "https://github.com/Awais-web636/Healthcare.git",
  },
  {
    title: "Traveling",
    description:
      "Traveling is an interactive web application designed in planning their next adventure. Built with HTML, CSS, and JavaScript, this project offers a visually stunning and user-friendly.",
    skills: "HTML, CSS, JAVASCRIPT",
    demoLink: "https://github.com/Awais-web636/Traveling.git",
  },
  {
    title: "Bilnow Clone",
    description:
      "Bilnow Clone is a modern web application developed using React.js and Tailwind CSS, designed to replicate the core functionalities of the popular Bilnow platform.",
    skills: "React Js, Tailwind CSS",
    demoLink: "https://github.com/Awais-web636/Bilnow-clone.git",
  },
  {
    title: "FlexHealth",
    description:
      "FlexHealth is an innovative web application built with React.js and Tailwind CSS, designed to provide users with a comprehensive platform for managing their health and wellness.",
    skills: "React Js, Tailwind CSS",
    demoLink: "https://github.com/Awais-web636/Flexhealth.git",
  },
  {
    title: "My Portfolio",
    description:
      "My Portfolio is a sleek and modern web application created using React.js and Tailwind CSS, designed to showcase my skills, projects, and professional journey.",
    skills: "React Js, Tailwind CSS",
    demoLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-6 mt-12">

      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              skills={project.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
