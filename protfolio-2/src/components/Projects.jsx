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
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap border p-5 rounded-2xl border-neutral-500  lg:justify-center"
          >
            <div className="w-full lg:w-1/4 flex justify-center items-center">
              <motion.img
                whileInView={{ rotate: 360 }}
                initial={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                width={180}
                height={180}
                alt={project.title}
                className="mb-4 rounded"
              ></motion.img>
            </div>

            <div className="w-full max-auto lg:w-1/2 flex justify-center items-center flex-col">
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="mb-4 font-semibold"
              >
                {project.title}
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-neutral-400 "
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{
                      duration: 0.5,
                      delay: index / 10,
                    }}
                    key={index}
                    className="mr-2 rounded 
                   bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: 100 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-blue-300  mt-4  w-full flex "
              >
                <motion.div
                  whileInView={{ rotate: 360, x: 0 }}
                  initial={{ opacity: 1, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-700 p-2 rounded-xl hover:bg-neutral-600 cursor-pointer"
                  href="#"
                >
                  <Link to={project.link}>
                    <FaExternalLinkAlt />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
