import React from "react";
import './AboutMe.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "../Header/Navbar";

export function AboutMe() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const navigateBack = () => {
    navigate('/')
  }

  return (
    <div className='about-me-container-more-information'>
      <NavBar />
      <div className='about-me-writing-container'>
        <h1 className='about-me-header-more-info'>
          About Me:
        </h1>
      </div>
      <div className='about-me-paragraphs'>
        <p>
          Hi, my name is Zack Valavanis, and I’m an aspiring software engineer with a growing passion for building thoughtful, user-centered digital experiences. I’m currently expanding my knowledge of computer science fundamentals while working on personal projects that help me apply what I’ve learned. Whether it's a new web app idea or an optimization challenge, I love diving into technical problems and finding elegant solutions.
        </p>
        <p>
          I’m originally from the northside suburbs of Chicago, where I developed a love for problem-solving and creative exploration from a young age. My interest in technology grew naturally as I became fascinated by how software impacts our lives — from the way we communicate to the way we learn and create. This curiosity eventually led me to pursue formal education and hands-on experience in software development.
        </p>

        <p>
          Outside of tech, I’m an avid guitarist and a huge music enthusiast. I enjoy attending live concerts, exploring new genres, and even writing music of my own. Traveling is another big part of my life — I love experiencing new cultures, meeting people with different perspectives, and finding inspiration in unexpected places. These experiences often influence how I approach creative work and team collaboration.
        </p>

        <p>
          I'm particularly interested in full-stack web development, software architecture, and the intersection of design and functionality. Lately, I’ve been working with technologies like React, Node.js, and Tailwind CSS to build responsive, dynamic web applications. I enjoy staying current with new frameworks, tools, and best practices, and I’m always eager to improve both my frontend and backend skills.
        </p>

        <p>
          As I continue to grow as a developer, I’m excited about opportunities that allow me to work on meaningful projects, collaborate with talented teams, and make a real impact. Whether it’s through internships, freelance work, or open-source contributions, I’m always looking for new challenges that push me forward. My goal is to build a career rooted in learning, creativity, and contributing to technology that improves lives.
        </p>

      </div>
      <button
        className='button-navigation-container'
        onClick={navigateBack}
      >
        Navigate Back
      </button>
    </div>
  )
}