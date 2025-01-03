import React from "react";
import {
  FaFlutter,
  FaNodeJs,
  FaGoogle,
  FaDartLang,
  FaGithub,
} from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

export default function TalkTogether() {
  const styles = {
    paragraph: {
      color: "#1E90FF", // Replace with your desired color
    },
  };
  return (
    <div className="md:mt-5 my-3 md:max-w-2xl md:ml-6">
      <p className="text-neutral-400">
        This projects docne for{" "}
        <strong className="">
          Mspace National Hackethon 2023, organized by the SLT Mobitel Sri Lanka
        </strong>
      </p>
      <Topic content="Challange" />
      <p className="text-neutral-400">
        Innovate any kind of marketing solution by using the Mspace api set to
        make a revenue with it.There apis mostly based on USSDs and other online
        subscription when using some services like online subscription
      </p>

      <Topic content="Our Solution" />
      <p className="text-neutral-400">
        We created a Mobile app called <strong className="text-white">Talk together</strong> to make a
        bridge between defferent languages to streamline the translated
        conversation in a phone call to a desired language by on the way
        translating.
      </p>
      <Topic content="My Contribution" />
      <ol className="list-decimal ml-5">
        <li className="text-neutral-400">created the mobile application</li>
        <li className="text-neutral-400">created necessary backend functions like firebase auth</li>
        <li className="text-neutral-400">Integrated the google translator api with the application</li>
      </ol>
      {/* Technologies used */}
      <Topic content="Technologies used" />
      <div className="flex flex-wrap gap-2">
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <FaFlutter className="w-8 h-8 text-blue-400" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <FaDartLang className="w-8 h-8 text-cyan-500" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <FaNodeJs className="w-8 h-8 text-green-600" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <FaGoogle className="w-8 h-8 text-purple-600" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <DiMongodb className="w-8 h-8 text-green-800" />
        </div>
        <div className="border-2 border-neutral-700 p-2 rounded-lg ">
          <IoLogoFirebase className="w-8 h-8 text-yellow-300" />
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
            href="https://github.com/KMjanith/RealTime-Talker"
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
