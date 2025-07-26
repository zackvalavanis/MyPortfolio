import React from "react";
import { useNavigate } from "react-router-dom";
import './Main.css'

export function Main() {
  const navigate = useNavigate()

  const navigatetoaboutme = () => {
    navigate('/about-me')
  }
  return (
    <div className='main-container'>
      <div className='section-1'>
        <section className='about-me-container' id='about-me'>
          <div className='image-section-1-container'>
            <img src="./back.jpg"></img>
          </div>
          <div className='about-me-text-section-1-container'>
            <div className='header-about-me-text-container'>
              <h1>
                About Me:
              </h1>
            </div>
            <div className='paragraph-about-me-text-container'>
              <p>
                Hello! My name is Zack Valavanis, and I’m passionate about continuing my journey into computer science and software engineering. I’m originally from the northside suburbs of Chicago, and in my free time, I enjoy playing guitar, going to concerts, traveling, and building side projects that challenge and inspire me.
              </p>
            </div>
            <div className='button-about-me-container'>
              <button onClick={navigatetoaboutme} className='button-more-info-about-me'>
                More Information
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}