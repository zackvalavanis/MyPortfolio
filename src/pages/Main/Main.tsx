import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import codingAnimation from "../../animations/coding-animation.json";
import { ContactMe } from "../ContactMe/ContactMe";
import "./Main.css";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Tech {
  name: string;
  img: string;
}

interface SkillCategory {
  title: string;
  techs: Tech[];
}

interface AccordionProps {
  title: string;
  subtitle: string;
  items: string[];
  techs?: string[];
  defaultOpen?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    techs: [
      { name: "Python",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Ruby",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    ],
  },
  {
    title: "Frontend",
    techs: [
      { name: "React",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Material UI",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Rails",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "DevOps & Cloud",
    techs: [
      { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

// ─── Custom Accordion ────────────────────────────────────────────────────────

function CustomAccordion({ title, subtitle, items, techs, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={`custom-accordion ${isOpen ? "is-open" : ""}`}>
      <button
        className="custom-accordion-trigger"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <div className="custom-accordion-trigger-text">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
        <span className="custom-accordion-chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      <div className="custom-accordion-body">
        <div className="custom-accordion-body-inner">
          <div className="custom-accordion-content">
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {techs && techs.length > 0 && (
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
      </div>
    </div>
  );
}

// ─── Hook: Responsive check ─────────────────────────────────────────────────

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function Main() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-container">

      {/* ── Hero / About Me ── */}
      <div className="section-1">
        <section className="about-me-container">
          <div className="image-section-1-container">
            <img
              id="about-me"
              className="image-header"
              src="./IMG_2830.JPG"
              alt="Zack Valavanis"
              loading="eager"
            />
          </div>

          <div className="about-me-text-section-1-container">
            <span className="section-label">About Me</span>

            <div className="header-about-me-text-container">
              <h1>Software Engineer &amp; Problem Solver</h1>
            </div>

            <div className="paragraph-about-me-text-container">
              <p>
                I'm Zack Valavanis, a software engineer based in Chicago with a passion for
                full-stack development and computer science fundamentals. I bring a unique
                perspective shaped by years of professional experience in finance — an analytical
                foundation I now channel into building clean, data-driven applications. I'm
                currently completing a post-baccalaureate CS degree at the University of Colorado
                Boulder, with plans to pursue a master's in AI/ML. When I'm not coding, you'll
                find me playing guitar or planning the next trip.
              </p>
            </div>

            <div className="button-about-me-container">
              <button
                onClick={() => navigate("/about-me")}
                className="button-more-info-about-me"
              >
                More Information
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ── Technologies ── */}
      <div id="skills" className="section-3-container">
        <div className="header-container-3">
          <span className="section-label" style={{ color: "#c45d3e" }}>
            Skill Set
          </span>
          <h1 className="header-section-3">Technologies I Work With</h1>
        </div>

        <section className="skills-container">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="container-headers-technologies">
              <h2>{category.title}</h2>
              <div className="technology-grid">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="container-image-description">
                    <img
                      className="images-logos"
                      src={tech.img}
                      alt={tech.name}
                      loading="lazy"
                    />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* ── Work Experience ── */}
      <div className="section-2-container">
        <section className="section-2">
          <div className="left-side-section-2-container">
            <span className="section-label">Career</span>
            <div id="experience" className="header-section-2">
              <h1>Professional Experience</h1>
            </div>

            <div className="accordion-container">
              <CustomAccordion
                title="Salus Wellness"
                subtitle="Co-Founder & Full Stack Software Engineer"
                defaultOpen={!isMobile}
                items={[
                  "Developing core mobile application features in React Native, designing and implementing intuitive frontend screens",
                  "Building API integrations to connect React Native frontend with a Django backend, ensuring smooth data flow and scalability",
                  "Serving as founding engineer, guiding technical direction and mentoring a small development team",
                ]}
                techs={["React Native", "Django", "Python", "REST APIs", "PostgreSQL", "Supabase", "TypeScript"]}
              />

              <CustomAccordion
                title="Capture"
                subtitle="Software Engineering Intern"
                defaultOpen={!isMobile}
                items={[
                  "Developing mobile app frontend screens using React Native and TypeScript",
                  "Collaborating with backend engineers to ensure smooth API integration",
                  "Contributing to UI/UX improvements and bug fixes to enhance user experience",
                ]}
                techs={["React Native", "TypeScript"]}
              />
            </div>

            <div className="more-info-button-container">
              <button
                onClick={() => navigate("/experience")}
                className="more-info-Button"
              >
                More Information
              </button>
            </div>
          </div>

          {!isMobile && (
            <div className="right-side-section-2-container">
              <Lottie
                animationData={codingAnimation}
                loop
                autoplay
                style={{ width: "100%", maxWidth: 500 }}
              />
            </div>
          )}
        </section>
      </div>

      {/* ── Education ── */}
      <div className="education-container">
        <section id="education" className="education-section-container">
          {!isMobile && (
            <div className="leftSide-container">
              <div className="left-side-education-container">
                <img src="/Colorado.avif" alt="University of Colorado Boulder" loading="lazy" />
              </div>
              <div className="left-side-education-container">
                <img src="/University_of_Westminster.jpg" alt="University of Westminster" loading="lazy" />
              </div>
            </div>
          )}

          <div className="accordion-container-right-side">
            <span className="section-label">Background</span>
            <h1 className="header-right-section-2">Education &amp; Certifications</h1>

            <CustomAccordion
              title="University of Colorado – Boulder"
              subtitle="Post-Baccalaureate in Computer Science (Starting January 2026)"
              defaultOpen={!isMobile}
              items={[
                "Completing core computer science coursework including data structures, algorithms, and software development",
                "Building a foundation for advanced study in computer science and transition from a finance background",
                "Preparing for a master's degree in computer science and a career in software engineering",
              ]}
            />

            <CustomAccordion
              title="University of Colorado – Boulder"
              subtitle="Bachelor of Science in Business Administration, Emphasis in Finance"
              items={[
                "B.S. in Finance with coursework in financial analysis, markets, and technology applications",
                "Awarded the Chancellor's Achievement Scholarship in recognition of strong academic performance and leadership potential",
                "Completed projects and case studies applying quantitative and analytical methods to real-world finance problems",
              ]}
            />

            <CustomAccordion
              title="University of Westminster – London, UK"
              subtitle="Study Abroad"
              items={[
                "Explored global finance and business practices through an international academic curriculum",
                "Collaborated with peers on cross-cultural projects analyzing global markets",
                "Developed adaptability and a global perspective through immersion in international business environments",
              ]}
            />

            <div className="more-info-button-container">
              <button
                onClick={() => navigate("/education")}
                className="more-info-Button"
              >
                More Information
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ── Contact ── */}
      <div className="section-4-container">
        <section id="contact-me" className="section-4">
          <ContactMe />
        </section>
      </div>

    </div>
  );
}
