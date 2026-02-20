import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "About", id: "about-me" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact-me" },
];

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Scroll detection for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (id: string) => {
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
      setMenuOpen(false);
    },
    [location.pathname, navigate]
  );

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          {/* Logo */}
          <button className="nav__logo" onClick={() => navigate("/")}>
            Zack<span className="nav__logo-dot">.</span>
          </button>

          {/* Desktop links */}
          <ul className="nav__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="nav__link"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop resume link */}
          <a href="./ZackValavanisResume.pdf" className="nav__resume">
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="nav__toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`hamburger ${menuOpen ? "is-open" : ""}`}>
              <span className="hamburger__line" />
              <span className="hamburger__line" />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Fullscreen mobile overlay ── */}
      <div className={`mobile-overlay ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-overlay__content">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className="mobile-overlay__link"
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${0.08 + i * 0.05}s` }}
            >
              <span className="mobile-overlay__link-number">
                0{i + 1}
              </span>
              {item.label}
            </button>
          ))}

          <a href="./ZackValavanisResume.pdf" className="mobile-overlay__resume">
            Download Resume ↓
          </a>
        </div>
      </div>
    </>
  );
}
