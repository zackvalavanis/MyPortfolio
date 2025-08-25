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
    <div className='about-me-backround-container'>
      <NavBar />
      <div className='about-me-container-more-information'>
        <div id='aboutme' className='about-me-writing-container'>
          <h1 className='about-me-header-more-info'>
            About Me:
          </h1>
        </div>
        <div className='about-me-paragraphs'>
          <p>
            Hi, my name is Zack Valavanis, and I’m an aspiring software engineer passionate about building thoughtful, user-centered digital experiences. I’m currently strengthening my computer science fundamentals while applying them through personal projects, from web apps to optimization challenges, where I love diving into problems and finding elegant solutions.
          </p>
          <p>
            I grew up in the northern suburbs of Chicago, where a love of problem-solving and creative exploration naturally evolved into a fascination with technology and its impact on how we live, learn, and connect. That curiosity continues to drive me as I pursue both formal education and hands-on software development experience. I look forward to starting my path to a masters degree in computer science in the spring of 2026.
          </p>

          <p>
            Outside of tech, I’m an avid guitarist and music enthusiast who enjoys concerts, writing songs, and exploring new genres. Traveling is also a big part of my life, giving me fresh perspectives that influence both my creativity and my approach to teamwork.
          </p>

          <p>
            Technically, I’m especially interested in full-stack web development, software architecture, and the intersection of design and functionality. Recently, I’ve been working with React, Node.js, and Tailwind CSS to build responsive, dynamic applications, while continually exploring new frameworks and best practices to sharpen my skills.
          </p>

          <p>
            Looking ahead, I’m excited about opportunities that allow me to collaborate with talented teams, contribute to meaningful projects, and keep growing as a developer. My goal is to build a career rooted in learning, creativity, and creating technology that makes a real impact.
          </p>

        </div>
        <button
          className='button-navigation-container'
          onClick={navigateBack}
        >
          Navigate Back
        </button>
      </div>
    </div>
  )
}