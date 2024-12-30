import React from "react";
import { motion } from "framer-motion";
export default function Certificates() {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" text-center text-3xl md:text-5xl border-b border-neutral-700 pb-4"
      >
      Certificates
      </motion.h2>
    </div>
  );
}
