import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export function Header() {
  return (
    <div className='header-container'>
      <div className='header-name-links-container'>
        <div className='header-container-name'>
          <h1>Zack Valavanis's Website</h1>
        </div>
        <div className='paragraph-header-container'>
          <p>
            Welcome to my website! Here, you can explore my journey in computer science, see my projects, and learn about my skills and passions.
          </p>
        </div>
        <div className='header-link'>
          <a
            href='#about-me'
            className='about-me-button'
          >About Me</a>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}