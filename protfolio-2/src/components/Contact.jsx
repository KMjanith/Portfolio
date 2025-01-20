import React from "react";
import { CONTACT } from "../constants";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="mt-20 mb-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-1">{CONTACT.address}</p>
        <p className="my-1">{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
        <div className="flex justify-center gap-4 mt-4 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KMjanith"
          >
            <FaGithub className="w-6  h-6 hover: cursor-pointer" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="linkedin.com/in/kavindu-janith-a76bb1291"
          >
            <FaLinkedin className="w-6  h-6 hover: cursor-pointer" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/@fixmath.a4349?si=BV1IlDzB56tLurud"
          >
            <FaYoutube className="w-6  h-6 hover: cursor-pointer" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@kavinduj.20"
          >
            <FaMedium className="w-6 h-6 hover:cursor-pointer" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/@fixmath.a4349?si=BV1IlDzB56tLurud"
          >
            <SiLeetcode className="w-6  h-6 hover: cursor-pointer" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hackerrank.com/profile/200236G_CSE_20"
          >
            <SiHackerrank className="w-6  h-6 hover: cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
