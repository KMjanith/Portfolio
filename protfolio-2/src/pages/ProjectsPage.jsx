import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";
import { PROJECTSPAGE } from "../constants";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const { id } = useParams();
  const project = PROJECTSPAGE.find(
    (project) => project.link === `/projects/${id}`
  );

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 border-b pb-20 border-neutral-600 mt-24 ">
        <Navbar />

        <div className="flex h-full justify-between items-center ">
          {/* download the cv button */}

          <div className="absolute top-20 left-19 md:flex-shrink md:relative bg-gradient-to-br from-slate-950 to-slate-800 px-2 rounded-lg mb-10 mr-2">
            <Sidebar data={PROJECTSPAGE} />
          </div>

          {/* project content */}

          <div className="flex-grow relative z-[-2] top-6">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl text-center mt-4 py-6"
            >
              {project.title}
            </motion.h1>

            <div className="flex flex-col items-center flex-nowrap">
              <motion.img
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                src={project.image}
                className=" rounded-lg mb-5 md:w-1/2 md:h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-nowrap md:ml-24">
          {React.createElement(project.description)}
        </div>
      </div>
      <Contact />
    </div>
  );
}
