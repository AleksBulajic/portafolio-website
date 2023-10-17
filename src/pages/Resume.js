import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="first-last-name">
        <h1>Aleksandar</h1>
        <h1>Bulajic</h1>
      </div>
      <div className="contact-info">
        <p className="phone-number">(929)2549356</p>
        <p className="email">aleks.bulajic25@gmail.com</p>
        <p className="p-g-l">Portfolio | Github | Linkedin</p>
      </div>
      <div className="skills-board">
        <h1 className="skills-title">Skills</h1>
        <h2 className="skills-front">Front-end</h2>
        <p>HTML | CSS | JavaScript | React |</p>
        <h2 className="skills-back">Back-End</h2>
        <p>Node.js/Express | Python/Django | MongoDB | SQL (Postgresql)</p>
        <h2 className="skills-other">Other</h2>
        <p>Git | GitHub | Docker | Solidity (Web3)</p>
      </div>
      <div className="education">
        <h1 className="education-title">Education</h1>
        <p className="education-description-g"> <strong className="education-name">General Assembly</strong> | April - June 2023<br></br>Software Development Immersive</p>
        <p className="education-description-b"> <strong className="education-name">BMCC</strong> | April - June 2023<br></br>Business Administration</p>
      </div>
    </div>
  );
}

export default Resume;
