import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Experiance() {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiance
      </motion.h2>
      <div>
        {EXPERIENCES.map((experiance, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-4 text-sm text-neutral-400">{experiance.year}</p>
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="mb-2 font-semibold"
              >
                {experiance.role}-{" "}
                <span className="text-sm text-purple-100">
                  {experiance.company}
                </span>
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-neutral-400"
              >
                {experiance.description}
              </motion.p>

              <div className="flex flex-wrap gap-2">
                {experiance.technologies.map((tech, index) => (
                  <motion.span
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 2.5,
                      delay: 0.2,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                    className="mx-2 mt-2 rounded-md bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300"
                    key={index}
                  >
                    {tech}
                  </motion.span>
                ))}
                <div className="text-xl text-blue-300  mt-4  w-full flex justify-end items-end">
                  <Link
                    to="/experiance"
                    className="p-2 rounded-xl hover:bg-neutral-600 cursor-pointer"
                  >
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
