import React from "react";
import resume from "../assets/resume/aleksBulajicResume.pdf";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <iframe
        src={resume}
        width="480"
        height="600"
        title="AleksResume"
      ></iframe>
    </div>
  );
}

export default Resume;
