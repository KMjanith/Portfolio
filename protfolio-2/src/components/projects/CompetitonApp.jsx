import React from "react";
import { FaFlutter, FaJenkins, FaDartLang, FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

export default function CompetitonApp() {
  return (
    <div className="md:mt-5 my-3 md:max-w-2xl md:ml-6">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-neutral-400"
      >
        This Project is a individual project and work as a management system of
        varius sports related things for a sport coach.
      </motion.p>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Topic content="Idea" />
        <ol className="list-disc ml-5">
          <li className="text-neutral-400">
            To minimize the effort to manage the sportsmen in a{" "}
            <strong className="text-neutral-200">
              competiton, grading or classes centrally
            </strong>{" "}
            with simple interfaces and provide some{" "}
            <strong className="text-neutral-200">scoring monitors</strong> for
            various sports to use in competitons.
          </li>
          <li className="text-neutral-400">
            Store and track and store the data of all events and payments.
          </li>
        </ol>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Topic content="Features" />
        <ol className="list-decimal ml-5">
          <li className="text-neutral-400">
            Store student details with profile pictures with delete and update
            facilities
          </li>
          <li className="text-neutral-400">
            Making Karate grading and store the tudent details
          </li>
          <li className="text-neutral-400">
            Store the student details and track data for upcoming popular
            championships
          </li>
          <li className="text-neutral-400">Make custom karate championships</li>
          <li className="text-neutral-400">
            Karate <strong className="text-neutral-200">SCORE BOARD.</strong>
          </li>
          <li className="text-neutral-400">draws making functionality</li>
        </ol>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.35 }}
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
            <IoLogoAndroid className="w-8 h-8 text-green-600" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <IoLogoFirebase className="w-8 h-8 text-yellow-600" />
          </div>
          <div className="border-2 border-neutral-700 p-2 rounded-lg ">
            <VscVscode className="w-8 h-8 text-blue-800" />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Topic content="Future developments" />
        <ol className="list-decimal ml-5">
          <li className="text-neutral-400">
            currently app is supporting only for Karate, That need to be
            extended to other sports as well.
          </li>
          <li className="text-neutral-400">
            Creting a Sports socila media to update there achievements and meet
            other sportsman like{" "}
            <strong className="text-neutral-200">linkedin</strong> for jobs.
          </li>
        </ol>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Topic content="Learnings" />
        <ol className="list-decimal ml-5">
          <li className="text-neutral-400">
            Hot use <strong className="text-neutral-200">CUBIT</strong> which is
            grate library for state management in flutter
          </li>
          <li className="text-neutral-400">
            firebase storage rather than the firestore and authentication
          </li>
          <li className="text-neutral-400">
            data loading strategies to minimize the processign power, cache
            memory and api callings.
          </li>
        </ol>
        {/*cv and git hub repo*/}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="border-2 border-neutral-700 shadow-md shadow-cyan-950 text-white bg-gradient-to-bl hover:from-blue-500 hover:to-purple-500
         p-2 mt-4 rounded-3xl hover:text-black font-bold"
          >
            <a
              href="https://github.com/KMjanith/competition-app-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-300"
            >
              Repo <FaGithub className="w-6  h-6 hover: cursor-pointer" />
            </a>
          </button>
        </div>
      </motion.div>

      {/*interfaces*/}
      <div></div>
    </div>
  );
}

function Topic({ content }) {
  return <p className="text-xl text-bold mt-4 font-bold mb-2">{content}: </p>;
}
