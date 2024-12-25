import React from "react";
import { CONTACT } from "../constants";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="mt-20 mb-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-1">{CONTACT.address}</p>
        <p className="my-1">{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
        <div className="flex justify-center gap-4 mt-4 ">
          <FaGithub className="w-6  h-6 hover: cursor-pointer" />
          <FaLinkedin className="w-6  h-6 hover: cursor-pointer" />
          <FaInstagram className="w-6  h-6 hover: cursor-pointer" />
          <FaYoutube className="w-6  h-6 hover: cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
