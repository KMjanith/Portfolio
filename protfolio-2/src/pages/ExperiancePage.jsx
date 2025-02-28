import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import LakeHouse from "../components/experinces/LakeHouse";
import PageroIntern from "../components/experinces/PageroIntern";

export default function ExperiancePage() {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8 mt-24 md:mt-44">
          <Navbar />
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className=" text-center text-4xl md:text-6xl border-b border-neutral-700 pb-4"
          >
            My <span className="text-cyan-500">Experiances</span>
          </motion.h2>
          <div className="flex flex-col lg:gap-0 gap-4 lg:mt-3 mt-5 border-b pb-10 border-neutral-600">
            <PageroIntern />
            <LakeHouse />
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
