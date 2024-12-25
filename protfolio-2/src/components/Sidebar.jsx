// Sidebar Component
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

export default function Sidebar({ data }) {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-10 md:w-14"
      } sm:mr-1 md:p-1 text-white flex flex-col justify-center items-center transition-all duration-300`}
    >
      <button className="p-2 m-2 rounded-md" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoMdArrowRoundBack className="w-10 h-10 " />
        ) : (
          <BsFillMenuButtonWideFill className="w-4 h-10" />
        )}
      </button>
      <div
        className={
          isOpen
            ? `flex flex-col items-center justify-center gap-4 pb-4`
            : ` hidden md:flex flex-col items-center justify-center gap-4 mt-8`
        }
      >
        {data.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link
              onClick={() => setIsOpen(false)}
              to={item.link}
              className={`text-sm w-full rounded-md border-r border-b border-purple-200 p-1 text-start font-normal my-2 ${
                isActive ? "bg-sky-700" : "hover:bg-sky-700"
              }`}
              key={index}
            >
              {isOpen ? (
                <p>
                  {index + 1}. {item.title}
                </p>
              ) : (
                <p className="text-center px-3">{index + 1}</p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
