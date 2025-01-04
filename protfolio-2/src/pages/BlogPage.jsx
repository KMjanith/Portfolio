import React from "react";
import { BLOGS } from "../constants";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { id } = useParams();
  const blog = BLOGS.find((blog) => blog.link === `/blog/${id}`);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 border-b pb-20 border-neutral-600 mt-24">
        <Navbar />

        <div className="flex h-full justify-between items-center">
          <div className="md:relative top-20 left-19 md:flex-shrink-0 md:mr-2 md:mb-10 absolute  rounded-xl bg-gradient-to-br from-slate-950 to-slate-800 px-2">
            <Sidebar data={BLOGS} />
          </div>
          <div className="flex-grow ml-2 relative z-[-2] top-6">
            <h1 className="text-3xl md:text-5xl text-center my-4 py-6">
              {blog.title}
              <h2 className="text-lg mb-4">{blog.date}</h2>
            </h1>

            <div className="flex flex-col justify-center items-center flex-nowrap">
              <motion.img
                whileInView={{  opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                src={blog.image}
                className=" rounded-lg mb-5 md:w-3/5 md:h-3/5"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-nowrap md:ml-24">
          {React.createElement(blog.description)}
        </div>
      </div>
      <Contact />
    </div>
  );
}
