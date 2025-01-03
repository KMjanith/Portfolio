import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experiance from "../components/Experiance";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import testvdo from "../assets/v2.mp4";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          src={testvdo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-9"></div>

      {/* Main Content */}
      <div className="container mx-auto px-8 mt-24 relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiance />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
