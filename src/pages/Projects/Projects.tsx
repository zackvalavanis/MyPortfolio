import React, { useRef } from "react";
import './Projects.css'
import algoLedgerImg from "../../assets/Algo_ledger.png";
import statDiamondImg from "../../assets/StatDiamondLogo.png"

type Project = {
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Algo Ledger",
    description:
      "Freemium Algorand portfolio analytics dashboard featuring wallet-based auth via signature verification, historical USD portfolio tracking with daily ALGO price feeds, deposit/withdrawal flow detection, ASA token holdings alongside ALGO balance, on-chain Pro subscription payments, and configurable time-range presets.",
    stack: ["Python", "FastAPI", "Algorand SDK", "Supabase", "React", "TypeScript", "Recharts", "Tailwind CSS"],
    demo: "https://algo-ledger.vercel.app/",
    github: "https://github.com/yourusername/stat-diamond",
    image: algoLedgerImg,
  },
  {
    title: "Stat Diamond",
    description:
      "Full-stack MLB analytics platform with live game scores and play-by-play updates, real-time league leaders via the MLB Stats API, dynamic player pages with career stats for hitters and pitchers, team rosters with batting and pitching statistics, smart caching with adaptive expiration, and an MLB news feed via ESPN API.",
    stack: ["Python", "FastAPI", "Supabase", "PostgreSQL", "React", "TypeScript", "MLB Stats API"],
    demo: "https://stat-diamond.vercel.app/", // Update with your actual URL
    github: "https://github.com/yourusername/stat-diamond", // Add if you want
    image: statDiamondImg,
  }
];

export function Projects() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <div className="contact-me-container">

      {projects.map((project, index) => (
        <div className="left-side-contact-container" key={index}>

          <h2 className="header-in-container-project">
            {project.title}
          </h2>

          <div className="infomation-container">
            <div className="pro-summary-container">

              <p>{project.description}</p>

            </div>
          </div>

          <div className="right-side-contact-container">

            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </div>

            {project.stack.length > 0 && (
              <div className="tech-tags-projects">
                {project.stack.map((s, idx) => (
                  <span key={idx} className="tech-tag-projects">
                    {s}
                  </span>
                ))}
              </div>
            )}

          </div>

        </div>
      ))}

    </div>
  );
}