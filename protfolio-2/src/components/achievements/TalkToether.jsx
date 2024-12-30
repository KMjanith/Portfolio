import React from "react";
import { motion } from "framer-motion";
import talk_together from "../../assets/projects/TalkTogether_combined.jpg";
import { FaGithub } from "react-icons/fa";

export default function TalkToether() {
  return (
    <div className="flex lg:flex-row justify-center items-center flex-col h-full my-10 py-5 border-l border-r border-neutral-600 rounded-2xl shadow-lg shadow-yellow-950">
      <div className="lg:ml-10 flex justify-center items-center flex-col px-2">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, type: "tween", stiffness: 80 }}
          className="flex justify-center items-center flex-nowrap text-center flex-col"
        >
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-3xl lg:text-4xl font-sans mt"
          >
            Mspace <strong className="text-green-500">CODE BLAST </strong>
            National Hackathon 2023
          </motion.p>
          <motion.h2
            whileInView={{ opacity: 1, scale: [1, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="text-center mt-3 text-3xl lg:text-4xl text-cyan-500 font-serif font-semibold"
          >
            Participation
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
            className="px-3 mt-4 lg:mt-18 lg:max-w-xl text-start flex flex-col justify-center items-center"
          >
            <p className="my-2 text-neutral-400">
              It was a team work with 5 team members including me. We had to
              implement a nnovative idea by using the <strong>Mspace</strong>{" "}
              subscrption services. We develpped a mobile application to
              translate the voice during a call to the language that the user
              prefer. This is a ongoing project still.
            </p>

            {/*technologies */}
            <div className="flex jstify-center items-center flex-wrap gap-3">
              <img
                src="https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png"
                className="w-10 h-10 rounded-lg"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4v8N7exWTN91JwyPZm1jGZ9zyFPtU8POaA&s"
                className="w-10 h-10 rounded-lg"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqi0rBTTQz6Qg8ObzuWmYhWt2NvD7QFEg73g&s"
                className="w-10 h-10 rounded-lg"
              />
              <img
                className="w-10 h-10 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMoD0krhoeqgNfJPWBUAWpv-_ODWZzvspAQ&s"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVyyChhzZ1BrGc1NzwdqgD9QLRmThesIcyA&s"
                className="w-10 h-10 rounded-lg"
              />
            </div>
            <div className="mt-2 mb-4 p-2 lg:mt-4 lg:p-4 rounded-lg flex justify-center items-center hover:bg-cyan-900">
              <a href="https://github.com/adeeshajayasinghe/talk-together">
                <FaGithub className="w-6  h-6 hover:cursor-pointer" />
              </a>
              <p className="px-2"> to repo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center w-full hover:scale-125 rounded-2xl transition-transform duration-300">
        <motion.img
          whileInView={{ rotate: 360 }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={talk_together}
          alt=""
          className="px-4 lg:w-80 rounded-5xl hover:scale-125 "
        />
      </div>
    </div>
  );
}
