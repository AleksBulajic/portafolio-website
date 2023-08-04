import React from "react";
import "./About.css";
import html from "programming-languages-logos/src/html/html.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import css from "programming-languages-logos/src/css/css.svg";
import python from "programming-languages-logos/src/python/python.svg";
import reactLogo from "../assets/icons/reactLogo.png";
import django from "../assets/icons/layer1.svg";
import git from "../assets/icons/git.svg";
import MongoDB from "../assets/icons/MongoDB.png";
import node from "../assets/icons/Node.js_logo.svg";
import SQL from "../assets/icons/SQL.svg";
import { motion } from "framer-motion";

function About() {
  const images = [
    { src: html, alt: "HTML icon", className: "html-icon" },
    { src: javascript, alt: "JavaScript icon", className: "javascript-icon" },
    { src: css, alt: "CSS icon", className: "css-icon" },
    { src: python, alt: "Python icon", className: "python-icon" },
    { src: reactLogo, alt: "React icon", className: "react-icon" },
    { src: django, alt: "Django icon", className: "django-icon" },
    { src: git, alt: "Git icon", className: "git-icon" },
    { src: MongoDB, alt: "MongoDB icon", className: "mongo-icon" },
    { src: node, alt: "Node.js icon", className: "node-icon" },
    { src: SQL, alt: "SQL icon", className: "sql-icon" },
  ];

  return (
    <>
      <div className="about-container">
        <h1 className="h1-about">Hello Everyone</h1>
        <p className="p-about">
          I am a Croatian-born software engineer who embarked on a journey to
          NYC over a decade ago, driven by my thirst for adventure and a desire
          to experience life to the fullest. With a strong foundation of values
          in loyalty and hard work, I channel my passion for software
          engineering and travel to create innovative solutions that transcend
          borders. I blend creativity with technical proficiency to craft
          seamless digital experiences. My unwavering dedication and insatiable
          curiosity fuel my commitment to delivering exceptional results,
          consistently pushing boundaries and surpassing expectations. Through
          my work, I bridge cultures and unite technology with human connection,
          leaving an indelible mark on the world of software engineering and
          beyond.
        </p>
      </div>
      <div className="icons-container">
        <motion.div initial="hidden" animate="visible">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
              imgStyle={{
                width: "50px",
                height: "50px",
                margin: "10px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default About;
