import React from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Footer() {
  return (
    <div style={{ backgroundColor: 'black', height: '15rem' }} className="footer-container">
      <div className="container-links">
        <div>
          <a className="linkedin-logo" href="https://www.linkedin.com/in/zack-valavanis/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div>
          <a className="github-logo" href="https://github.com/zackvalavanis" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div>
          {/* Add other icons or info here */}
        </div>
      </div>
    </div>
  );
}
