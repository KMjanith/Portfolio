import React from "react";
import { motion } from "framer-motion";

export default function Others() {
  const profiles = [
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/200236G_CSE_20",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/S3zLaW9GvP/",
      image: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
    },
  ];

  return (
    <div className="mt-8 lg:mt-12 border-b border-neutral-700 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl lg:text-5xl font-bold"
      >
        <span className="text-cyan-600">O</span>thers
      </motion.h2>

      <div className="flex justify-center items-center mt-8 lg:gap-8">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-40 h-40 object-contain rounded-xl shadow-md hover:shadow-lg hover:shadow-cyan-600"
            />
            <p className="text-center mt-2 text-neutral-400 font-medium text-xl">
              {profile.name}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
