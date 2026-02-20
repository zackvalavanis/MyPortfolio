import React, { useEffect } from "react";
import { NavBar } from "../Header/Navbar";
import { Footer } from "../Footer/Footer";
import "./Experience.css";

// ─── Types ───────────────────────────────────────────────────────────────────

interface JobCardProps {
  company: string;
  role: string;
  bullets: string[];
  techs: string[];
}

// ─── Job Card (always expanded — no toggle needed) ───────────────────────────

function JobCard({ company, role, bullets, techs }: JobCardProps) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{company}</h3>
        <span>{role}</span>
      </div>

      <div className="job-card-body">
        <ul>
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>

        {techs.length > 0 && (
          <div className="tech-tags">
            {techs.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <NavBar />

      <main className="experience-container">
        <div className="header-container-experience">
          <span className="section-label">Career</span>
          <h1 className="header-experience">Professional Experience</h1>
        </div>

        <JobCard
          company="Salus Wellness"
          role="Co-Founder & Full Stack Software Engineer"
          bullets={[
            "Developing core mobile application features in React Native, designing and implementing intuitive frontend screens",
            "Building API integrations to connect React Native frontend with a Django backend, ensuring smooth data flow and scalability",
            "Serving as founding engineer, guiding technical direction and mentoring a small development team",
          ]}
          techs={["React Native", "Django", "Python", "REST APIs", "PostgreSQL", "Docker"]}
        />

        <JobCard
          company="Capture"
          role="Software Engineering Intern"
          bullets={[
            "Developing mobile app frontend screens using React Native and TypeScript",
            "Collaborating with backend engineers to ensure smooth API integration",
            "Contributing to UI/UX improvements and bug fixes to enhance user experience",
          ]}
          techs={["React Native", "TypeScript"]}
        />

        <JobCard
          company="Neuberger Berman"
          role="Client Associate / Data Analyst"
          bullets={[
            "Automated financial reporting with VBA macros, reducing processing time by 40% and saving 56+ hours annually",
            "Developed customized client presentations and dashboards for a $2.7B portfolio, highlighting KPIs such as sector allocation, volatility, and risk-adjusted returns",
            "Delivered accurate, data-driven insights that strengthened client relationships and earned recognition as 'most reliable' by a leading client",
          ]}
          techs={["VBA", "Excel", "PowerPoint", "Data Analysis", "Reporting Automation"]}
        />

        <div className="download-resume-button-container">
          <a href="./ZackValavanisResume.pdf" className="download-resume-button">
            Download Resume
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
