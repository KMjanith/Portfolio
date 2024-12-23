import React from 'react'
import  {BrowserRouter ,Routes, Route} from 'react-router-dom' 
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'


export default function () {
  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/blog/:id' element={<BlogPage />} />
    </Routes> 
  </BrowserRouter>


  )
}
