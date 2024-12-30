import React from "react";
import { motion } from "framer-motion";
import talk_together from "../../assets/projects/TalkTogether_combined.jpg";
import { FaGithub } from "react-icons/fa";

export default function TalkToether() {
  return (
    <div className="flex lg:flex-row justify-center items-center flex-col h-full my-10 py-5 border border-neutral-600 rounded-2xl">
      <div className="lg:ml-10 flex justify-center items-center flex-col">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, type: "tween", stiffness: 80 }}
          className="flex justify-center items-center flex-nowrap text-center flex-col"
        >
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-3xl lg:text-4xl font-sans mt"
          >
            Mspace <strong className="text-green-500">CODE BLAST </strong>
            National Hackathon 2023
          </motion.p>
          <motion.h2
            whileInView={{ opacity: 1, scale: [1, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="text-center mt-3 text-3xl lg:text-4xl text-cyan-500 font-serif font-semibold"
          >
            Participation
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="mt-4 lg:mt-18 lg:max-w-xl text-start flex flex-col justify-center items-center"
          >
            <p className="my-2">
             It was a team work with 5 team members including me. We had to implement a nnovative idea
             by using the <strong>Mspace</strong> subscrption services. We develpped a mobile
             application to translate the voice during a call to the language that the user prefer.
             This is a ongoing project still.
            </p>
            <div className="mt-2 mb-4 p-2 lg:mt-4 lg:p-4 border border-cyan-500 rounded-lg flex justify-center items-center hover:bg-cyan-900">
              <a href="https://github.com/adeeshajayasinghe/talk-together">
                <FaGithub className="w-6  h-6 hover:cursor-pointer" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flexx-nowrap items-center justify-center w-full">
        <img
          src={talk_together}
          alt=""
          className="max-w-xl lg:w-80 rounded-xl hover:scale-125 hover:rotate-6 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
