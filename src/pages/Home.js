import React, { useEffect }from "react";
import "./Home.css";
import ProfileImg from "../assets/profilePic/profileImg.jpg";
import AleksResume from "../assets/resume/Aleks-Resume.pdf"
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import VanillaTilt from "vanilla-tilt"; 

function Home() {
 


  useEffect(() => {
    VanillaTilt.init(document.querySelector(".home-container"), {
      max: 10, // Maximum tilt rotation (degrees)
      speed: 400, // Speed of the tilt effect
      glare: true, // Show glare effect
      "max-glare": 0.4, // Maximum glare opacity
    });
  }, []);

  
  return (
    <div className="home-container">
      <h1 className="h1-home">Aleksandar Bulajic</h1>
      <p className="h3-home">
        As a passionate and skilled full stack developer, I embark on exciting
        journeys to craft seamless digital experiences. Driven by an incredible
        curiosity and armed with expertise in JavaScript, HTML, CSS, MongoDB,
        Node.js, Express, Mongoose, React.js, Python and Django I blend
        creativity with technical proficiency to transcend borders and push
        boundaries. My commitment to delivering exceptional results knows no
        bounds, and I bridge cultures and unite technology with human
        connection, leaving an indelible mark on the world of software
        engineering and beyond.
      </p>
      <div className="profile-container">
        <img className="profile-img" src={ProfileImg} alt="profile IMG" />
        <div className="icons-container">
          <a href="https://github.com/AleksBulajic" download target="_blank"  rel="noreferrer">
          <FaGithub />
          </a>
          <a href="mailto:aleks.bulajic25@gmail.com">
          <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/aleksandar-bulajic-dev/" target="_blank" rel="noreferrer">
          <FaLinkedin />
          </a>
          <a href={AleksResume} download target="_blank" rel="noreferrer">
            <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
