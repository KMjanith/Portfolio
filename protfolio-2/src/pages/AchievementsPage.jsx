import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import PageroWin from "../components/achievements/PageroWin";
import Contact from "../components/Contact";

export default function AchievementsPage() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className=" text-center text-4xl md:text-6xl border-b border-neutral-700 pb-4"
        >
          My <span className="text-cyan-500">Achievements</span>
        </motion.h2>
        <PageroWin />
        <Contact />
      </div>
    </div>
  );
}
