import React from "react";
import { motion } from "framer-motion";
import { SCHOOL } from "../../constants";

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
          University <span className="text-cyan-500">Life</span>
        </motion.h2>
      </div>
        
    </div>
  );
}
