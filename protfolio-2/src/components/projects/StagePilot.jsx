import React from "react";
import {
  FaFlutter,
  FaNodeJs,
  FaReact,
  FaJenkins,
  FaDartLang,
  FaGithub,
} from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import USER_MANUAL from "../../assets/USER_MANUAL.pdf";
import { motion } from "framer-motion";

export default function StagePilot() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="md:mt-5 my-3 md:max-w-2xl md:ml-6"
    >
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        This Project is a group project and was done for the semester 5 Software
        Engineering module project. The task was to make a{" "}
        <strong className="text-white">train ticket booking application.</strong>
      </motion.p>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Topic content="My Contribution" />
        <ol className="list-decimal ml-5">
          <li>create the mobile application</li>
          <li>create necessary backend functions for the application</li>
          <li>create database document structure for some models</li>
          <li>create the ticket price calculation algorithm</li>
        </ol>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* Technologies used */}
        <Topic content="Technologies used" />
        <div className="flex flex-wrap gap-2">
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <FaFlutter className="w-8 h-8 text-blue-400" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <FaDartLang className="w-8 h-8 text-cyan-500" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <FaNodeJs className="w-8 h-8 text-green-600" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <FaReact className="w-8 h-8 text-blue-400" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <DiMongodb className="w-8 h-8 text-green-800" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <FaJenkins className="w-8 h-8 text-red-500" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <VscVscode className="w-8 h-8 text-blue-800" />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {/* Download and GitHub Repo */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="border-2 border-neutral-700 shadow-md shadow-cyan-950 text-white bg-gradient-to-bl hover:from-blue-500 hover:to-purple-500
           p-2 mt-4 rounded-3xl hover:text-black font-bold"
          >
            <a
              href={USER_MANUAL}
              download="USER_MANUAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Manual
            </a>
          </button>
          <button
            type="button"
            className="border-2 border-neutral-700 shadow-md shadow-cyan-950 text-white bg-gradient-to-bl hover:from-blue-500 hover:to-purple-500
           p-2 mt-4 rounded-3xl hover:text-black font-bold"
          >
            <a
              href="https://github.com/KMjanith/Train-Booking-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover: cursor-pointer" />
            </a>
          </button>
        </div>
      </motion.div>

      {/* Add additional sections or interfaces here if needed */}
    </motion.div>
  );
}

function Topic({ content }) {
  return (
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="text-xl text-bold mt-4 font-bold mb-2"
    >
      {content}:
    </motion.p>
  );
}
