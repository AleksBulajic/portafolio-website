import React from "react";
import "./Home.css";
import ProfileImg from "../assets/profilePic/profileImg.jpg";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <h1 className="h1-home">Aleksandar Bulajic</h1>
      <h3 className="h3-home">
        As a passionate and skilled full stack developer, I embark on exciting
        journeys to craft seamless digital experiences. Driven by an insatiable
        curiosity and armed with expertise in JavaScript, HTML, CSS, MongoDB,
        Node.js, Express, Mongoose, React.js, Python and Django I blend
        creativity with technical proficiency to transcend borders and push
        boundaries. My commitment to delivering exceptional results knows no
        bounds, and I bridge cultures and unite technology with human
        connection, leaving an indelible mark on the world of software
        engineering and beyond.
      </h3>
      <div className="profile-container">
        <img className="profile-img" src={ProfileImg} alt="profile IMG" />
        <div className="icons-container">
          <a href="https://github.com/AleksBulajic" target="_blank" >
          <FaGithub />
          </a>
          <a href="mailto:aleks.bulajic25@gmail.com">
          <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/aleksandar-bulajic-dev/" target="_blank">
          <FaLinkedin />
          </a>
          <a href="https://docs.google.com/document/d/1vNdSQwZ3pPl924c5X63cXTiD3ofkJk5_OoGWm7_hVa0/edit" target="_blank">
          <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
