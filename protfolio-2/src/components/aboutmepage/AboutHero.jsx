import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about/aboutme.jpg";
import { ABOUT_TEXT } from "../../constants";
import CV from "../../assets/CV.pdf";

export default function AboutHero() {
  return (
    <div className="border-b border-neutral-700 pb-12">
      <div className="flex justify-center flex-col items-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className=" text-center text-4xl md:text-6xl border-b border-neutral-700 pb-4"
        >
          I'm <span className="text-cyan-500">H.M. Kavindu Janith</span>
        </motion.h2>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm md:text-lg mt-1"
        >
          <span className="text-cyan-500">Software Engineering</span>{" "}
          Undergraduate
        </motion.h2>
      </div>

      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center"
        >
          <div className="flex items-center justify-center font-afaced_400 ">
            <img className="rounded-2xl mb-4 shadow-lg shadow-yellow-950" src={aboutImage} alt="" />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col py-5"
          >
            {ABOUT_TEXT.map((item, index) => (
              <p
                className="max-w-xl lg:p-8 pb-3 text-white  "
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}

            {/* download the cv button */}
            <button
              type="button"
              className="border-2 shadow-lg shadow-cyan-950 text-white bg-gradient-to-bl hover:from-blue-500 hover:to-purple-500 p-2 lg:p-3 mt-4 rounded-lg hover:text-black font-bold"
            >
              <a href={CV} download={CV.pdf}>
                DOWNLOAD CV
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
