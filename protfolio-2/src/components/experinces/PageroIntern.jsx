import React from "react";
import pagero from "../../assets/internPagero/pagero.jpg";
import i1 from "../../assets/internPagero/i1.jpg";
import i2 from "../../assets/internPagero/i2.jpg";
import i3 from "../../assets/internPagero/i3.jpg";
import i5 from "../../assets/internPagero/non-tech.jpg";
import res1 from "../../assets/internPagero/res1.png";
import res2 from "../../assets/internPagero/res2.png";
import res3 from "../../assets/internPagero/res3.png";
import res4 from "../../assets/internPagero/res4.png";
import res5 from "../../assets/internPagero/res5.png";
import res6 from "../../assets/internPagero/res6.png";
import res7 from "../../assets/internPagero/res7.png";
import res8 from "../../assets/internPagero/res8.png";
import res9 from "../../assets/internPagero/res9.png";
import { motion } from "framer-motion";

export default function PageroIntern() {
  const memoriesImages = [i2, i1, i3];
  const reses = [res1, res2, res3, res4, res5, res6, res7, res8, res9];

  return (
    <div
      className="my:5 lg:mt-10 p-3 border border-neutral-800 shadow-md
         shadow-green-800  rounded-xl flex flex-col justify-center items-center"
    >
      <div className="flex items-center justify-center gap-2 lg:gap-5 flex-col lg:flex-row lg:mt-5 mt-3">
        <motion.img
          src={pagero}
          alt="lakehouse"
          className="text-white w-full lg:w-1/4 rounded-lg"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=" flex-col lg:flex-row justify-center items-center text-center lg:text-start"
        >
          <p className="text-center lg:text-start text-2xl lg:text-3xl">
            Pagero Lanka (PVT) LTD
          </p>
          <p className="text-neutral-400 text-sm">
            No. 413 R. A. De Mel Mawatha, Colombo 3, Sri Lanka | Head office -
            Sweden
          </p>
          <p className="bg-neutral-800 mt-1  px-2 py-1 rounded-md lg:w-max text-lg">
            Job title: Software Engineering Intern
          </p>
          <p className="text-neutral-400 mt-1 text-sm">
            2023 December - 2024 June
          </p>
        </motion.div>
      </div>
      <div className="mt-2 flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 w-full ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col border-l border-r border-neutral-700 rounded-xl lg:items-center lg:justify-center px-10 pb-5"
        >
          {/*about company */}
          <p className="mt-2 text-2xl font-afaced text-center">About Company</p>
          <div className="flex flex-col  justify-between  items-center">
            <div className="p-1 text-center">
              <p className="text-xl font-afaced mb-2">Their Mission</p>
              <p className=" text-green-400">
                Building the largest and smart business network in the world
              </p>
            </div>
            <div className="p-1">
              <p className="text-xl font-afaced mb-2">Their Products</p>
              <ul className="list-disc text-neutral-400 ">
                <li>E-invoicing</li>
                <li>AR automation</li>
                <li>P2P automation</li>
                <li>O2C automation</li>
                <li>more...</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/*role*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col border-l border-r border-neutral-700 rounded-xl lg:items-center lg:justify-center px-10 pb-5 "
        >
          <p className="mt-2 text-2xl font-afaced text-center mb-2">My Roll</p>
          <ul className="list-disc text-neutral-400 ">
            <li>All worked in Agile deveolpment environment.</li>
            <li>
              Everyone get tasks in every scrum and and complete them with
              proper documentations.
            </li>
            <li>
              I worked around 10 tasks of major development Epics through out
              the internship.
            </li>
          </ul>
        </motion.div>
      </div>
      {/*responsibilities*/}
      <div>
        {/* responsibilities */}
        <div className="mt-3 lg:mt-6 text-center w-full px-5 mb-2">
          <p className="font-semibold lg:text-2xl text-xl my-3">
            My <span className="text-blue-500">Responsibilities</span>
          </p>
        </div>

        <p className="text-2xl font-afaced mb-2 text-center">Technical</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {reses.map((item, index) => (
            <motion.img
              key={index}
              src={item}
              alt={`res ${index + 1}`}
              className="rounded-lg shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.01 }}
            />
          ))}
        </motion.div>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-5 flex flex-col justify-center items-center lg:mb-5"
      >
        <p className="text-2xl font-afaced mb-2 text-center"> Non Technical</p>
        <img src={i5} alt="" className="h-auto w-auto lg:w-3/4 rounded-2xl" />
      </motion.div>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-afaced my-2 text-center"
      >
        {" "}
        Memories
      </motion.p>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row justify-center items-center gap-2 my-5"
      >
        {memoriesImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Memory ${index + 1}`}
            className={` ${
              index === 1 ? "h-auto w-72" : "h-auto w-52"
            } rounded-2xl`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.01 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
