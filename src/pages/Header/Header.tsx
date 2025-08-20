import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { NavBar } from "./Navbar";

export function Header() {

  return (
    <div>

      <NavBar />
      <div className='header-container'>
        <div className='header-name-links-container'>
          <div className='left-side-image-header-container'>
            <img className='image-header-photo' src='./Valavanis_Zack_NBPW_Gradient_1x1.25.jpg' />
          </div>
          <div className='right-side-header'>
            <div className='header-container-name'>
              <h1><b>I'm Zack Valavanis, a web designer and software engineer.</b></h1>
            </div>
            <div className='paragraph-header-container'>
              <p>
                Welcome to my website! Here, you can explore my journey in computer science, see my projects, and learn about my skills and passions.
              </p>
            </div>
            <a
              href='#about-me'
              className='header-link'
            >About Me</a>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}