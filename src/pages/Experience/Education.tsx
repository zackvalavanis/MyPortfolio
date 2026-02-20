import React, { useEffect, useState, useCallback } from "react";
import { NavBar } from "../Header/Navbar";
import { Footer } from "../Footer/Footer";
import "./Education.css";

// ─── Custom Accordion (same pattern as Main) ─────────────────────────────────

interface AccordionProps {
  title: string;
  subtitle: string;
  items: string[];
  defaultOpen?: boolean;
}

function CustomAccordion({ title, subtitle, items, defaultOpen = false }: AccordionProps) {
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
          {subtitle && <span>{subtitle}</span>}
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

// ─── Page Component ──────────────────────────────────────────────────────────

export function Education() {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <NavBar />

      <main className="education-container-education">
        <section className="education-section-container-education">
          <div className="accordion-container-education">
            <div className="header-container-education">
              <span className="section-label">Background</span>
              <h1 className="header-education">
                Education &amp; Certifications
              </h1>
            </div>

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
              defaultOpen={!isMobile}
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
                "Developed global perspective and adaptability through immersion in international business environments",
              ]}
            />

            <CustomAccordion
              title="Certifications"
              subtitle=""
              items={[
                "Certification in Blockchain and Digital Assets (CBDA) – DACFP",
                "Google Project Management Certificate – Google/Udemy",
                "Tableau 2022 A-Z: Hands-on Tableau Training for Data Science – Udemy",
                "SIE (Securities Industry Essentials Exam) – FINRA",
                "Series 3 (National Commodities Futures Exam) – FINRA/NFA",
                "Series 7 (General Securities Representative Exam) – FINRA",
                "Series 63 (Uniform Securities Agent State Law Exam) – NASAA/FINRA",
                "Series 65 (Uniform Investment Adviser Law Exam) – NASAA",
              ]}
            />
          </div>

          <div className="download-resume-button-container">
            <a href="./ZackValavanisResume.pdf" className="download-resume-button">
              Download Resume
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
