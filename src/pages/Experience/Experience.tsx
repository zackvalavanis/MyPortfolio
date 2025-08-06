import React from "react";
import './Experience.css'
import { NavBar } from "../Header/Navbar";
import { useEffect } from "react";
import { Footer } from "../Footer/Footer";


export function Experience() {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className='experience-container'>
      <NavBar />
      <h1>
        Experience
      </h1>
      <div className='download-resume-button-container'>
        <a
          href='./ZackValavanisResume.pdf'
          className='download-resume-button'
        >Download Resume</a>
      </div>
      <Footer />
    </div>
  )
}