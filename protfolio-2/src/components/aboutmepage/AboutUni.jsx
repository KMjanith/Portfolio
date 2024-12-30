import React from "react";
import { motion } from "framer-motion";
import Slider from "../Slider";
import hG1 from "../../assets/about/hitGround1.jpeg";
import hG2 from "../../assets/about/hitGround2.jpeg";
import hG3 from "../../assets/about/hitGround3.jpeg";
import { UNIVERSITY } from "../../constants";

export default function AboutUni() {
  const images = [hG1, hG2, hG3];

  return (
    <div className="border-b border-neutral-700 py-12">
      <div className="flex justify-center flex-col items-center">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl border-neutral-700 pb-4"
        >
          University <span className="text-cyan-500">Life</span>{" "}
          {/* Uni Title */}
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opassity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-5 mt-3 border-b border-r border-neutral-500 rounded-lg flex flex-col justify-center items-center flex-nowrap"
        >
          <img src={UNIVERSITY.image} alt="case_badge" className="w-32 h-32" />{" "}
          {/* Uni Image */}
        </motion.div>
        <motion.p
          className="mt-2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: 100, opassity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>
            <strong>Year - </strong> {/* Uni Year */}
          </span>
          {UNIVERSITY.year}
        </motion.p>
      </div>

      {/* Outer Container with Moving Glow Effect */}
      <motion.div
        className="flex border border-fuchsia-900 rounded-3xl relative mt-3 bg-gradient-to-tr from-purple-950 to-pink-950 justify-center"
        initial={{ boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)" }}
        animate={{
          boxShadow: [
            "0 0 10px rgba(255, 105, 180, 0.5)",
            "0 0 25px rgba(255, 105, 180, 0.7)",
            "0 0 40px rgba(255, 105, 180, 0.8)",
            "0 0 10px rgba(255, 105, 180, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* Overlay to control opacity of the outer container */}
        <div className="absolute inset-1 bg-black rounded-3xl z-0"></div>

        {/* Slider */}
        <div className="relative z-10">
          <Slider images={images} />
        </div>
      </motion.div>
    </div>
  );
}
