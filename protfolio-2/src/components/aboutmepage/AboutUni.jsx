import React from "react";
import { motion } from "framer-motion";
import { UNIVERSITY } from "../../constants";
import Slider from "../Slider";

export default function AboutUni() {
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
          className="px-5 mt-3 border-b border-r border-neutral-500  rounded-lg flex flex-col justify-center items-center flex-nowrap"
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
      <div className="flex ">
        {/*Slider*/}
        <Slider />
      </div>
    </div>
  );
}
