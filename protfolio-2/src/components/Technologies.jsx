import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiPython, DiScala } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFlutter, FaGolang } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GrDocker } from "react-icons/gr";
import { SiKubernetes, SiDart } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";

export default function Technologies() {
  // Array of technology data
  const techData = [
    { icon: RiReactjsLine, color: "text-cyan-400", duration: 1.5 },
    { icon: DiScala, color: "text-red-400", duration: 1 },
    { icon: SiMongodb, color: "text-green-400", duration: 2.5 },
    { icon: GrDocker, color: "text-blue-400", duration: 2 },
    { icon: FaGolang, color: "text-cyan-400", duration: 2.5 },
    { icon: BiLogoPostgresql, color: "text-blue-500", duration: 1.5 },
    { icon: DiPython, color: "text-yellow-500", duration: 1.5 },
    { icon: FaFlutter, color: "text-cyan-500", duration: 1.5 },
    { icon: SiKubernetes, color: "text-cyan-500", duration: 1.5 },
    { icon: FaJava, color: "text-red-500", duration: 1.5 },
    { icon: SiDart, color: "text-blue-500", duration: 1.5 },
    { icon: IoLogoFirebase, color: "text-yellow-500", duration: 1.5 },
    { icon: SiGooglecloud, color: "text-blue-500", duration: 1.5 },
  ];

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
        {techData.map((tech, index) => (
          <IconDiv
            key={index}
            icon={tech.icon}
            color={tech.color}
            duration={tech.duration}
          />
        ))}
      </motion.div>
    </div>
  );
}

function IconDiv({ icon, color, duration }) {
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
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className={`border-4 border-neutral-500 rounded-2xl p-4`}
    >
      {React.createElement(icon, { className: `text-7xl ${color}` })}
    </motion.div>
  );
}
