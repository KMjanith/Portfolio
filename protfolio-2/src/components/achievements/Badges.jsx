import { motion } from "framer-motion";
import React from "react";
import microsoftLearn from "../../assets/microsoftsLearn.png";
import googleDeveloper from "../../assets/badges/Google.png";
import { PiLinkThin } from "react-icons/pi";
import B1 from "../../assets/badges/B1.png";
import B2 from "../../assets/badges/B2.png";
import B3 from "../../assets/badges/B3.png";
import B4 from "../../assets/badges/B4.png";
import B5 from "../../assets/badges/B5.png";
import Slider from "../Slider";

export default function Badges() {
  const images = [B1, B2, B3, B4, B5];
  const MICROSOFT =
    "https://learn.microsoft.com/en-us/users/me/achievements?tab=tab-modules#badges-section";
  const GOOGLE = "https://developers.google.com/profile/u/kavindujanithProfile";

  return (
    <div className="mt-12 border-b border-neutral-700 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl lg:text-5xl "
      >
        B<span className="text-cyan-600">a</span>d
        <span className="text-cyan-600">ge</span>s
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-10 text-2xl lg:text-3xl border-l px-3 border-neutral-600 flex justify-start items-start gap-4 font-semibold "
      >
        Microsoft Learning{" "}
        <a href={MICROSOFT} target="_blank" rel="noreferrer">
          <PiLinkThin />
        </a>
      </motion.div>
      <a
        className="flex justify-center items-center mt-2 lg:mt-5 flex-col hover:scale-105 transition-transform duration-300"
        href={MICROSOFT}
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          src={microsoftLearn}
          alt="microsoftLearn"
          className="rounded-2xl lg:mb-5"
        />
      </a>
      {/* Outer Container with Moving Glow Effect */}
      <motion.div
        className="flex border border-neutral-600 rounded-3xl relative mt-3 bg-gradient-to-tr from-purple-950 to-pink-950 justify-center "
        initial={{ boxShadow: "0 0 10px rgba(180, 105, 108, 0.2)" }}
        animate={{
          boxShadow: [
            "0 0 10px rgba(255, 105, 150, 0.5)",
            "0 0 25px rgba(255, 105, 150, 0.7)",
            "0 0 40px rgba(255, 105, 150, 0.8)",
            "0 0 10px rgba(255, 105, 150, 0.5)",
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
        <div className="max-w-3xl">
          <div className="relative z-10 ">
            <Slider images={images} />
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-10 lg:mt-16 text-2xl lg:text-3xl border-l px-3 border-neutral-600 flex justify-start items-start gap-4 font-semibold "
      >
        Google Developer{" "}
        <a href={GOOGLE} target="_blank" rel="noreferrer">
          <PiLinkThin />
        </a>
      </motion.div>
      <a
        className="flex justify-center items-center mt-3 lg:mt-5 flex-col hover:scale-105 transition-transform duration-300"
        href={GOOGLE}
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          src={googleDeveloper}
          alt="GoogleDeveloper"
          className="rounded-2xl lg:mb-5 w-3/4"
        />
      </a>
    </div>
  );
}
