import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="h1-contact">Contact me  👇🏼</h1>
        <div className="icons-container">
          <div className="icon-item">
            <a href="https://github.com/AleksBulajic" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="icon-item">
            <a href="mailto:aleks.bulajic25@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <div className="icon-item">
            <a href="https://www.linkedin.com/in/aleksandar-bulajic-dev/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="icon-item">
            <a href="https://docs.google.com/document/d/1vNdSQwZ3pPl924c5X63cXTiD3ofkJk5_OoGWm7_hVa0/edit" target="_blank" rel="noreferrer">
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
