import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiPython, DiScala } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFlutter, FaGolang } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GrDocker } from "react-icons/gr";


export default function Technologies() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-700 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 2, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <DiScala className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <GrDocker className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <FaGolang className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <BiLogoPostgresql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <DiPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-500 rounded-2xl p-4"
        >
          <FaFlutter className="text-7xl text-cyan-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
