import React from "react";
import { PROJECTS } from "../constants/index.js";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-cyan-600">P</span>rojec<span className="text-cyan-600">ts</span>
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <Link
            to={project.link}
            key={index}
            className="mb-8 flex flex-col md:flex-row flex-wrap md:gap-12 border-l border-r p-5 rounded-2xl border-neutral-600 lg:justify-center shadow-md shadow-cyan-900 hover:scale-110 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/4 flex justify-between items-center">
              <motion.img
                whileInView={{ rotate: 360 }}
                initial={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-xl w-full h-auto object-cover md:ml-10"
              />
            </div>

            {/* Content Section */}
            <div className="w-full mx-auto lg:w-1/2 flex justify-center items-center flex-col">
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="mb-4 font-semibold text-lg md:text-2xl"
              >
                {project.title}
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-neutral-400 md:text-lg"
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{
                      duration: 0.5,
                      delay: techIndex / 10,
                    }}
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Link to Project */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: 100 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-blue-300 mt-4 w-full flex justify-center items-center"
              >
                <motion.div
                  whileInView={{ rotate: 360, x: 0 }}
                  initial={{ opacity: 1, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 rounded-xl hover:bg-neutral-600 cursor-pointer"
                >
                  <Link to={project.link}>
                    <FaExternalLinkAlt />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
