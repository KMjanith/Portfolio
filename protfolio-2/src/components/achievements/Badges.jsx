import { motion } from "framer-motion";
import React from "react";
import microsoftLearn from "../../assets/microsoftsLearn.png";

export default function Badges() {
  return (
    <div className="mt-12 border-b border-neutral-700 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-5xl "
      >
        B<span className="text-cyan-600">a</span>d
        <span className="text-cyan-600">ge</span>s
      </motion.h2>
      <img src={microsoftLearn} alt="" />
    </div>
  );
}
