import React, { useEffect, useState } from "react";
import { NavBar } from "./Navbar";
import "./Header.css";

export function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <NavBar />

      <header className="hero">
        <div className={`hero__inner ${visible ? "is-visible" : ""}`}>
          {/* Photo column */}
          <div className="hero__photo-col">
            <div className="hero__photo-wrapper">
              <img
                className="hero__photo"
                src="./Valavanis_Zack_NBPW_Gradient_1x1.25.jpg"
                alt="Zack Valavanis"
                loading="eager"
              />
              {/* Decorative accent border */}
              <div className="hero__photo-accent" aria-hidden="true" />
            </div>
          </div>

          {/* Text column */}
          <div className="hero__text-col">
            <span className="hero__label anim-item anim-delay-1">
              Software Engineer · Chicago
            </span>

            <h1 className="hero__heading anim-item anim-delay-2">
              I'm Zack Valavanis —
              <br />
              I build things that
              <em className="hero__heading-em"> matter</em>.
            </h1>

            <p className="hero__subtext anim-item anim-delay-3">
              Full-stack developer with a foundation in finance, currently
              deepening my CS fundamentals at CU Boulder. I build clean,
              data-driven applications and care deeply about craft.
            </p>

            <div className="hero__actions anim-item anim-delay-4">
              <a href="#about-me" className="hero__btn hero__btn--primary">
                Explore My Work
              </a>
              <a href="./ZackValavanisResume.pdf" className="hero__btn hero__btn--ghost">
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
