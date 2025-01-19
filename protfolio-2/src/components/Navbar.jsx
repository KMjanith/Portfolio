import React, { useState } from "react";
import logo from "../assets/kavindujanithLogoCroped.png";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

function Navlinks() {
  return (
    <>
      <NavLink
        to="/about"
        className="text-lg lg:text-xl font-extralight hover:scale-110 hover:bg-cyan-950 rounded-lg px-2  "
      >
        About
      </NavLink>
      <NavLink
        to="/projects/1"
        className="text-lg lg:text-lg font-extralight hover:scale-110 hover:bg-cyan-950 rounded-lg px-2 "
      >
        Projects
      </NavLink>
      <NavLink
        to="/blog/1"
        className="text-lg lg:text-xl font-extralight hover:scale-110 hover:bg-cyan-950 rounded-lg px-2 "
      >
        Blog
      </NavLink>
      <NavLink
        to="/achievements"
        className="text-lg lg:text-xl font-extralight hover:scale-110 hover:bg-cyan-950 rounded-lg px-2"
      >
        Achievements
      </NavLink>
      <NavLink
        to="/experiance"
        className="text-lg lg:text-xl font-extralight hover:scale-110 hover:bg-cyan-950 rounded-lg px-2"
      >
        Experiance
      </NavLink>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-950 text-white 
    shadow-md flex items-center justify-between pt-3 pb-3 md:py-0 flex-wrap px-5 md:px-10 rounded-b-xl "
    >
      <Link to="/" className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="w-12" />
      </Link>

      <div className="hidden m-8 md:flex items-center justify-between gap-4 text-2xl">
        <Navlinks />
      </div>

      <div className="hidden md:flex justify-center gap-4 mt-4 mb-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/KMjanith"
        >
          <FaGithub className="w-6 h-6 hover:cursor-pointer" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/kavindu-janith-a76bb1291"
        >
          <FaLinkedin className="w-6 h-6 hover:cursor-pointer" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/@fixmath.a4349?si=BV1IlDzB56tLurud"
        >
          <FaYoutube className="w-6 h-6 hover:cursor-pointer" />
        </a>
      </div>

      <button
        className="flex flex-col items-center justify-center space-y-1 md:hidden"
        onClick={handleNavBar}
      >
        <div className="w-8 h-1 bg-white rounded"></div>
        <div className="w-8 h-1 bg-white rounded"></div>
        <div className="w-8 h-1 bg-white rounded"></div>
      </button>

      {isOpen && (
        <div className="flex flex-col items-center justify-between gap-2 w-full pb-2">
          <Navlinks />
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/KMjanith">
              <FaGithub className="w-6 h-6 hover:cursor-pointer" />
            </a>
            <a href="https://linkedin.com/in/kavindu-janith-a76bb1291">
              <FaLinkedin className="w-6 h-6 hover:cursor-pointer" />
            </a>
            <a href="https://youtube.com/@fixmath.a4349?si=BV1IlDzB56tLurud">
              <FaYoutube className="w-6 h-6 hover:cursor-pointer" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
