import React from "react";
import { motion } from "framer-motion";
import { SCHOOL } from "../../constants";

export default function AboutSchool() {
  return (
    <div className="border-b border-neutral-700 py-12">
      <div className="flex justify-center flex-col items-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl border-neutral-700 pb-4"
        >
          School <span className="text-cyan-500">Education</span>
        </motion.h2>
      </div>

      <div className="flex flex-wrap flex-col mt-5 ">
        {SCHOOL.map((item, index) => (
          <div key={index} >
            <p>
              <strong>Year - </strong>
              {item.year}
            </p>
            <div className="flex flex-col justify-center items-center py-3 rounded-xl my-5 bg-gradient-to-bl from-slate-950 via-slate-900 via-50% to-slate-950" >
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center text-lg md:text-xl font-mono p-2 "
              >
                {item.school}
              </motion.h2>
              <img src={item.image} alt="" className="max-w-32 max-h-32" />
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-neutral-200 p-5 max-w-xl flex justify-start items-start flex-col"
              >
                <div>
                  <span className="font-mono text-lg">Location : </span>{" "}
                  <span className="ml-4 text-sm text-neutral-400">
                    {item.location}
                  </span>
                </div>
                {item.description.map((desc, descIndex) => (
                  <div key={descIndex} className="py-2">
                    <span className="font-mono">{desc.subTitle}</span>
                    {desc.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="ml-4 text-sm text-neutral-400"
                      >
                        - {point}
                      </p>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
