import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import AchievementsPage from "./pages/AchievementsPage";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
