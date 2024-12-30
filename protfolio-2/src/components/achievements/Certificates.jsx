import React from "react";
import { motion } from "framer-motion";
import { PiLinkThin } from "react-icons/pi";
import { CERTIFICATES } from "../../constants";

export default function Certificates() {
  return (
    <div className="mt-12 border-b border-neutral-700 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-5xl "
      >
        Certific<span className="text-cyan-600">ate</span>s
      </motion.h2>

      {CERTIFICATES.map((certificate, index) => (
        <CertificatesCompoent
          key={index}
          image={certificate.image}
          url={certificate.url}
          heading={certificate.heading}
          date={certificate.date}
          description={certificate.description}
        />
      ))}
    </div>
  );
}

function CertificatesCompoent({ image, url, heading, date, description }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 items-center border-l border-r border-neutral-700 shadow-lg shadow-purple-950 rounded-2xl p-5 mt-5">
      {/* Fixed Minimum and Maximum Width */}
      <div className="mb-5 flex-shrink-0 min-w-[12rem] max-w-[12rem]">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg w-full h-auto"
          src={image}
          alt="Certificate"
        />
      </div>
      <div className="ml-5 flex-grow">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-xl lg:text-3xl text-white flex lg:flex-row flex-col justify-between"
        >
          {heading}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <PiLinkThin className="text-white mr-2" />
          </a>
        </motion.p>
       
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-sm mt-2 flex justify-between"
        >
          <p>
            <strong>Date -</strong> {date}
          </p>
        </motion.p>
        <div className="flex">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-400"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
