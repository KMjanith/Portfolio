import React, { useState, useEffect } from "react";
import profile from "../../assets/pagero/profile.jpg";
import headset from "../../assets/pagero/headset.jpg";
import Slider from "../Slider";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FaGithub } from "react-icons/fa";

export default function PageroWin() {
  const images = [profile, headset];
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti for a short duration
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex lg:flex-row justify-center items-center flex-col h-full border-b  border-neutral-600 my-10 py-10">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti width={window.outerWidth} height={window.outerHeight} />
      )}
      {/* Outer Container with Moving Glow Effect */}

      <div className="w-72 flex ">
        <motion.div
          className="flex border border-fuchsia-900 rounded-3xl relative bg-gradient-to-tr from-purple-950 to-pink-950 justify-center"
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

      <div className="lg:ml-10 flex justify-center items-center flex-col">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, type: "tween", stiffness: 80 }}
          className="flex justify-center items-center flex-nowrap text-center flex-col mt-5"
        >
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-3xl lg:text-4xl font-sans my-2 "
          >
            Pagero <span className="text-green-500">Code Serge </span>November
            challenge
          </motion.p>
          <motion.h2
            whileInView={{ opacity: 1, scale: [1, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="text-center text-4xl lg:text-5xl text-cyan-500 font-serif font-semibold"
          >
            WINNER
          </motion.h2>
          <div className="mt-5 lg:mt-12 lg:max-w-xl text-start flex flex-col justify-center items-center">
            <p className="my-2">
              The competition was held by{" "}
              <strong>Pagero Lanka (PVT) LTD</strong> in November 2024, and it
              was an exciting challenge that tested the coding skills of all
              participants about <strong>Web Scraping</strong>
            </p>
            <p className="my-2">
              They needed to srape the content from React official documentation
              and specific contents from nthe aws documentatation with{" "}
              <strong>code snippets</strong>. Also they expected the output in{" "}
              <strong>JSON Format</strong>
              in a creative order. Other{" "}
              <strong>
                best practices in web scraping,code modularity, error hndeling
              </strong>{" "}
              also evaluated.
            </p>
            <div className="mt-2 p-2 lg:mt-4 lg:p-4 border border-cyan-500 rounded-lg flex justify-center items-center hover:bg-cyan-900">
              <a href="https://github.com/KMjanith/code_serge_web_scraper"></a>
              <FaGithub className="w-6  h-6 hover: cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}