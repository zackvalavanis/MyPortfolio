import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './Main.css'

export function Main() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigatetoaboutme = () => {
    navigate('/about-me')
  }

  const navigatetoExperience = () => {
    navigate('/experience')
  }

  return (
    <div className='main-container'>
      <div className='section-1'>
        <section className='about-me-container' id='about-me'>
          <div className='image-section-1-container'>
            <img
              className='image-header'
              src="./IMG_2830.JPG">
            </img>
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


      <div className='section-2-container'>
        <section className='section-2'>
          <div className='left-side-section-2-container'>
            <div id='experience' className='header-section-2'>
              <h1>
                Experience:
              </h1>
            </div>

            {/* First Expereince - NB */}
            <div className='experience-1-container'>
              <div className='experience-1-header-container'>
                <div className='image-container'>
                  <h1>Image here</h1>
                </div>
                <div className='header-info-container'>
                  <h1>
                    Neuberger Berman
                  </h1>
                  <p><i>Analytics Analyst</i></p>
                </div>
              </div>
              <div className='experience-1-information-container'>
                <p>
                  This is a place i worked.
                </p>
              </div>
            </div>
            {/* Second Experience */}


            <button
              onClick={navigatetoExperience}
              className='more-info-Button'
            >More Information
            </button>
          </div>








          <div className='right-side-section-2-container'>
            <img src='./coding_image.jpg'></img>
          </div>
        </section>
      </div>

      <div className='section-3-container'>
        <section className='section-3'>
          <div>
            <h1>
              Skills
            </h1>
          </div>
        </section>
      </div>



    </div>
  )
}