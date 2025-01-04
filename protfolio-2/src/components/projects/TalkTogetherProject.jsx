import React from "react";
import {
  FaFlutter,
  FaNodeJs,
  FaGoogle,
  FaDartLang,
  FaGithub,
} from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

export default function TalkTogether() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0, y:-100 },
    visible: { opacity: 1, y:0,transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div className="md:mt-5 my-3 md:max-w-2xl md:ml-6">
      {/* Intro Section */}
      <motion.div
        className="mb-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-neutral-400">
          This project was done for{" "}
          <strong className="text-white">
            Mspace National Hackathon 2023, organized by SLT Mobitel Sri Lanka
          </strong>
        </p>
      </motion.div>

      {/* Challenge Section */}
      <motion.div
        className="mb-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Topic content="Challenge" />
        <p className="text-neutral-400">
          Innovate any kind of marketing solution using the Mspace API set to
          generate revenue. These APIs focus on USSDs and online subscriptions
          for various services.
        </p>
      </motion.div>

      {/* Solution Section */}
      <motion.div
        className="mb-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Topic content="Our Solution" />
        <p className="text-neutral-400">
          We developed a mobile app called{" "}
          <strong className="text-white">Talk Together</strong>, which bridges
          different languages by enabling real-time translation of conversations
          during phone calls.
        </p>
      </motion.div>

      {/* Contribution Section */}
      <motion.div
        className="mb-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Topic content="My Contribution" />
        <motion.ol
          className="list-decimal ml-5 text-neutral-400"
          variants={container}
        >
          <motion.li variants={fadeIn}>
            Created the mobile application
          </motion.li>
          <motion.li variants={fadeIn}>
            Implemented backend functions, including Firebase authentication
          </motion.li>
          <motion.li variants={fadeIn}>
            Integrated Google Translate API into the application
          </motion.li>
        </motion.ol>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="mb-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Topic content="Technologies Used" />
        <motion.div className="flex flex-wrap gap-2" variants={container}>
          {[
            {
              icon: <FaFlutter className="w-8 h-8 text-blue-400" />,
              label: "Flutter",
            },
            {
              icon: <FaDartLang className="w-8 h-8 text-cyan-500" />,
              label: "Dart",
            },
            {
              icon: <FaNodeJs className="w-8 h-8 text-green-600" />,
              label: "Node.js",
            },
            {
              icon: <FaGoogle className="w-8 h-8 text-purple-600" />,
              label: "Google APIs",
            },
            {
              icon: <DiMongodb className="w-8 h-8 text-green-800" />,
              label: "MongoDB",
            },
            {
              icon: <IoLogoFirebase className="w-8 h-8 text-yellow-300" />,
              label: "Firebase",
            },
            {
              icon: <VscVscode className="w-8 h-8 text-blue-800" />,
              label: "VS Code",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="border-2 border-neutral-700 p-2 rounded-lg"
              whileHover={{ scale: 1.1 }}
              variants={fadeIn}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Repository Section */}
      <motion.div
        className="mt-4"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          type="button"
          className="border-2 border-neutral-700 shadow-md shadow-cyan-950 text-white bg-gradient-to-bl hover:from-blue-500 hover:to-purple-500
           p-2 rounded-3xl hover:text-black font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="https://github.com/KMjanith/RealTime-Talker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-300"
          >
            Repo
            <FaGithub className="w-6 h-6" />
          </a>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function Topic({ content }) {
  return (
    <motion.h2
      className="text-xl font-bold mt-4 mb-2 text-white"
      initial={{ opacity: 0, y:-100 }}
      whileInView={{ opacity: 1 , y:0}}
  
      transition={{ duration: 0.4 }}
    >
      {content}:
    </motion.h2>
  );
}
