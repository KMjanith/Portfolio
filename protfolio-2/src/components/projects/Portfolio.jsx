import React from "react";
import { FaReact, FaGithub } from "react-icons/fa6";

import { VscVscode } from "react-icons/vsc";
import USER_MANUAL from "../../assets/USER_MANUAL.pdf";
import { Link, useNavigate } from "react-router-dom";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";

export default function Portfolio() {
  const navigate = useNavigate();
  return (
    <div className="md:mt-5 my-3 md:max-w-2xl md:ml-6">
      <p className="text-neutral-400">
        This is the Project now you are in.This project showcase all my works
        like <strong>projects, achivements, experinces, learnings and my Blogs posts</strong>.
      </p>

      <Topic content="Sections" />
      <p className="text-yellow-400">
        {" "}
        You can go these section by clicking upon them
      </p>
      <ol className="list-decimal ml-5">
         <li className="text-neutral-200">
          <Link to="/">Home Page</Link>
        </li>
         <li className="text-neutral-200">
          <Link to="/about">About</Link> {/* Ensure this is an absolute path */}
        </li>
         <li className="text-neutral-200">
          <Link to="/achievements">Achievements</Link>
        </li>
         <li className="text-neutral-200">
          <Link to="/blog/1">Blogs</Link>
        </li>
      </ol>

      {/* Technologies used */}
      <Topic content="Technologies used" />
      <div className="flex flex-wrap gap-2">
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <FaReact className="w-8 h-8 text-blue-400" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <RiTailwindCssFill className="w-8 h-8 text-blue-400" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <SiFramer className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <VscVscode className="w-8 h-8 text-blue-800" />
        </div>
      </div>
      {/*cv and git hub repo*/}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="border-2 border-neutral-700 shadow-md shadow-cyan-950 text-white bg-gradient-to-bl hover:from-blue-500 hover:to-purple-500
         p-2 mt-4 rounded-3xl hover:text-black font-bold"
        >
          <a
            href="https://github.com/KMjanith/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-300"
          >
            Repo
            <FaGithub className="w-6  h-6 hover: cursor-pointer" />
          </a>
        </button>
      </div>
      {/*interfaces*/}
      <div></div>
    </div>
  );
}

function Topic({ content }) {
  return <p className="text-xl text-bold mt-4 font-bold mb-2">{content}: </p>;
}
