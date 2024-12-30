import React, { useState, useEffect } from "react";
import profile from "../../assets/pagero/profile.jpg";
import headset from "../../assets/pagero/headset.jpg";
import Slider from "../Slider";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

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
    <div className="flex lg:flex-row justify-center items-center flex-col h-full my-10 py-5 border-l border-r px-6 rounded-2xl border-neutral-600 shadow-lg shadow-yellow-950">
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
            Pagero <strong className="text-green-500">Code Serge </strong>
            November challenge
          </motion.p>
          <motion.h2
            whileInView={{ opacity: 1, scale: [1, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="text-center text-4xl lg:text-5xl text-cyan-500 font-serif font-semibold"
          >
            WINNER
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="mt-5 lg:mt-12 lg:max-w-xl text-start flex flex-col justify-center items-center"
          >
            <p className="my-2 text-neutral-400">
              The competition was held by{" "}
              <strong>Pagero Lanka (PVT) LTD</strong> in November 2024, and it
              was an exciting challenge that tested the coding skills of all
              participants about <strong>Web Scraping</strong>
            </p>
            <p className="my-2 text-neutral-400">
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
            {/*technologies */}

            <div className="flex jstify-center items-center flex-wrap gap-3">
              <img
                src="https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png"
                className="w-10 h-10 rounded-lg"
              />
              <img
                src="https://yt3.googleusercontent.com/9y13pxP3xxovml6W83D4Kbq4joCA-WaKy01i1BAihK6315sPq7z_oTIa3YdGa7ws4k4aaRbf=s900-c-k-c0x00ffffff-no-rj"
                className="w-10 h-10 rounded-lg"
              />
              <div className=" rounded-lg flex bg-white p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  className="w-6 h-6 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-2 p-2 lg:mt-4 lg:p-4  rounded-lg flex justify-center items-center hover:bg-cyan-900">
              <a href="https://github.com/KMjanith/code_serge_web_scraper">
                <FaGithub className="w-6  h-6 hover: cursor-pointer" />
              </a>
              <p className="px-2"> to repo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
