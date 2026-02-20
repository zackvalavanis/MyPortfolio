import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../Header/Navbar";
import "./AboutMe.css";

export function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-me-backround-container">
      <NavBar />

      <main className="about-me-container-more-information">
        <div id="aboutme" className="about-me-writing-container">
          <span className="section-label">About Me</span>
          <h1 className="about-me-header-more-info">
            Engineer, Analyst,&nbsp;Builder
          </h1>
        </div>

        <div className="about-me-paragraphs">
          <p>
            My name is Zack Valavanis, and I'm a software engineer with a background
            in finance and a deep commitment to building well-crafted, data-driven
            applications. I'm currently sharpening my computer science foundations
            through formal coursework and hands-on projects — approaching every problem
            with the same analytical rigor I developed working in institutional
            investment management.
          </p>

          <p>
            I grew up in the northern suburbs of Chicago, where an early love of
            problem-solving eventually led me to a career in finance — and later, to a
            deliberate pivot into software engineering. After years of working with
            complex data and high-stakes systems at a professional level, I recognized
            that the tools being built to analyze and communicate that data were where I
            wanted to be. I'm currently completing a post-baccalaureate CS degree at
            the University of Colorado Boulder, with plans to begin a Master's in
            Computer Science thereafter.
          </p>

          <p>
            Outside of tech, I'm a guitarist and lifelong music enthusiast — I play
            regularly, write songs, and rarely miss a good concert. Traveling is equally
            important to me; exploring new places has a way of reshaping how I think
            about design, people, and collaboration in ways that quietly influence my
            work.
          </p>

          <p>
            My technical focus is full-stack web development, with particular interest
            in software architecture and building systems that are both performant and
            maintainable. I've been building with React, TypeScript, FastAPI, Python,
            JavaScript, Ruby, and PostgreSQL — most recently developing an MLB
            statistics dashboard featuring custom authentication and real-time data
            visualization. I'm also currently studying C++ and algorithms as part of my
            formal CS curriculum, reinforcing the fundamentals that make better
            engineers.
          </p>

          <p>
            I'm looking for opportunities to contribute to meaningful projects alongside
            talented teams — ideally at the intersection of software and data, where my
            finance background adds a dimension most engineers don't bring. My goal is
            to build a career defined by continuous learning, technical depth, and work
            that has real-world consequence.
          </p>
        </div>

        <div className="button-container-nav">
          <button
            className="button-navigation-container"
            onClick={() => navigate("/")}
          >
            Back Home
          </button>
        </div>
      </main>
    </div>
  );
}
