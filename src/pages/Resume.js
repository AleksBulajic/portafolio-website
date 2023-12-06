import React from "react";
import resume from "../assets/resume/ABresume.pdf";
import resumeImg from "../assets/resume/AB_R.png";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="img-resume">
   <img src={resumeImg} alt="resume" className="resume-img" childre />
   </div>
      <div className="download-cv">
        <a href={resume} download target="_blank" rel="noreferrer"  className="download-link">
        <p className="download-text">
          DOWNLOAD CV {"  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            className="download-icon"
          >
            <path
              d="M20 13C19.7348 13 19.4804 13.1054 19.2929 13.2929C19.1053 13.4804 19 13.7348 19 14V17C19 17.79 18.79 18 18 18H3.79997C3.35997 18 2.99997 17.92 2.99997 17V14C2.99997 13.7348 2.89461 13.4804 2.70708 13.2929C2.51954 13.1054 2.26519 13 1.99997 13C1.73475 13 1.4804 13.1054 1.29286 13.2929C1.10533 13.4804 0.999969 13.7348 0.999969 14V17C0.954523 17.3878 0.994063 17.7809 1.11584 18.1519C1.23762 18.523 1.43871 18.863 1.70515 19.1485C1.97159 19.434 2.29699 19.658 2.65874 19.8051C3.02049 19.9521 3.40992 20.0186 3.79997 20H18C18.4044 20.0424 18.8131 19.994 19.1964 19.8582C19.5797 19.7225 19.9278 19.5028 20.2153 19.2153C20.5028 18.9278 20.7225 18.5797 20.8582 18.1964C20.994 17.8131 21.0424 17.4044 21 17V14C21 13.7348 20.8946 13.4804 20.7071 13.2929C20.5195 13.1054 20.2652 13 20 13Z"
              fill="white"
            />
            <path
              d="M10.9999 15.91L16.7099 10.21C16.8032 10.1168 16.8771 10.0061 16.9276 9.88425C16.9781 9.76243 17.004 9.63186 17.004 9.5C17.004 9.36814 16.9781 9.23757 16.9276 9.11575C16.8771 8.99393 16.8032 8.88324 16.7099 8.79C16.6167 8.69676 16.506 8.6228 16.3842 8.57234C16.2624 8.52188 16.1318 8.49591 15.9999 8.49591C15.8681 8.49591 15.7375 8.52188 15.6157 8.57234C15.4939 8.6228 15.3832 8.69676 15.2899 8.79L11.9999 12.09V1C11.9999 0.734784 11.8946 0.48043 11.707 0.292893C11.5195 0.105357 11.2652 0 10.9999 0C10.7347 0 10.4804 0.105357 10.2928 0.292893C10.1053 0.48043 9.99994 0.734784 9.99994 1V12.09L6.70994 8.79C6.52164 8.6017 6.26624 8.49591 5.99994 8.49591C5.73364 8.49591 5.47825 8.6017 5.28994 8.79C5.10164 8.9783 4.99585 9.2337 4.99585 9.5C4.99585 9.7663 5.10164 10.0217 5.28994 10.21L10.9999 15.91Z"
              fill="white"
            />
          </svg>
        </p>
        </a>
      </div>
    </div>
  );
}

export default Resume;
