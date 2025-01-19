import React from "react";
import { motion } from "framer-motion";

export default function LakeHouse() {
  return (
    <motion.div
      className="my:5 lg:mt-10 p-3 border border-neutral-800 shadow-md shadow-cyan-800 rounded-xl flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2 lg:gap-5 flex-col lg:flex-row lg:mt-5 mt-3">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/en/5/5f/Lake_house_logo.png"
          alt="lakehouse"
          className="text-white bg-white w-1/2 lg:w-1/4 rounded-lg p-2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="flex-col lg:flex-row justify-center items-center text-center lg:text-start"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-2xl lg:text-3xl">
            Associated Newspapper of Ceylon limited (ANCL)
          </p>
          <p className="text-neutral-400">
            D. R. Wijewardena Mawatha, Colombo 10, Sri Lanka.
          </p>
          <p className="bg-neutral-800 mt-1 px-2 py-1 rounded-md lg:w-max text-lg">
            Job title: Office Assistant ( IT department )
          </p>
          <p className="text-neutral-400 mt-1">2020 January - 2021 August</p>
        </motion.div>
      </div>

      <div className="mt-3 lg:mt-6 text-center w-full px-5 mb-2">
        <motion.p
          className="font-semibold lg:text-2xl text-xl my-3"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-500">Responsibilities</span>
        </motion.p>
      </div>

      <div className="mt-2 flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 w-full">
        <motion.div
          className="flex flex-1 flex-col border-l border-r border-neutral-700 rounded-xl lg:items-center lg:justify-center px-10 pb-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-afaced mb-2 text-center">Technical</p>
          <ul className="list-disc text-neutral-400">
            <li>
              TroubleShooting Windows operating system installation and boot up
              problems.
            </li>
            <li>
              Trouble shooting Desktop hardware problems such as computer
              component replacing and repairing.
            </li>
            <li>Laptop motherboard repairing.</li>
            <li>Troubleshooting VLAN problems in the network.</li>
            <li>RG45 network cable repairing.</li>
            <li>CCTV troubleshooting.</li>
            <li>Printer repairing and drivers update.</li>
            <li>
              Press motor drive motor software and hardware troubleshooting.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-1 flex-col border-l border-r border-neutral-700 rounded-xl lg:items-center lg:justify-center px-10 pb-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-afaced mb-2 text-center">Non Technical</p>
          <ul className="list-disc text-neutral-400">
            <li>Department Document management</li>
            <li>Visitors coordination</li>
            <li>Department coordination</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
