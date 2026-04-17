import React, { useRef } from "react";
import './Projects.css'
import algoLedgerImg from "../../assets/Algo_ledger.png";
import statDiamondImg from "../../assets/StatDiamondLogo.png"

type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  demo?: string;
  github?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Algo Ledger",
    description:
      "Freemium Algorand portfolio analytics dashboard with historical performance tracking, on-chain Pro upgrades, and multi-wallet support.",
    features: [
      "Wallet-based auth via Algorand signature verification",
      "Historical USD portfolio value using daily ALGO price feeds",
      "Deposit/withdrawal flow detection with adjusted chart view",
      "ASA (token) holdings tracked alongside ALGO balance",
      "On-chain Pro subscription payments via Algorand",
      "Time-range presets (1D, 1W, MTD, 3M, 6M, YTD, 1Y, All)",
    ],
    stack: ["Python", "FastAPI", "Algorand SDK", "Supabase", "React", "TypeScript", "Recharts", "Tailwind CSS"],
    demo: "https://algo-ledger.vercel.app/",
    github: "https://github.com/yourusername/stat-diamond",
    image: algoLedgerImg,
  },
  {
    title: "Stat Diamond",
    description:
      "Full-stack MLB analytics platform with real-time game tracking, live statistics, player profiles, and team rosters.",
    features: [
      "Live game scores with play-by-play updates and lineup tracking",
      "Real-time league leaders using MLB Stats API",
      "Dynamic player pages with career stats for both hitters and pitchers",
      "Team rosters with batting and pitching statistics",
      "Smart caching system with adaptive expiration (15 min live, 30 days historical)",
      "MLB news feed integration via ESPN API",
    ],
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

              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

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