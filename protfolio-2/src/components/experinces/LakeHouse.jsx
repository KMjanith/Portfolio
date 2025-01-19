import React from "react";

export default function LakeHouse() {
  return (
    <div className="my:5 md:my-10 p-3 border-neutral-700 border rounded-xl flex flex-col md:flex-row justify-center items-center">
      <div className="flex items-center justify-center gap-2 md:gap-5 flex-col md:flex-row">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/5f/Lake_house_logo.png"
          alt="lakehouse"
          className="text-white bg-white w-1/2 md:w-1/4 rounded-lg"
        />

        <div className=" flex-col md:flex-row justify-center items-center text-center md:text-start">
          <p className="text-center text-lg md:text-2xl">
            Associated Newspapper of Ceylon limited (ANCL)
          </p>
          <p className="text-neutral-400">
            D. R. Wijewardena Mawatha, Colombo 10, Sri Lanka
          </p>
          <p className="bg-neutral-800 mt-1  px-2 py-1 rounded-md md:w-max">
            Job title: Office Assistant
          </p>
        </div>
      </div>
    </div>
  );
}
