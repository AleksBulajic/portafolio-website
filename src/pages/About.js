import React from "react";
import "./About.css";
import html from "programming-languages-logos/src/html/html.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import css from "programming-languages-logos/src/css/css.svg";
import python from "programming-languages-logos/src/python/python.svg";
import reactLogo from "../assets/icons/reactLogo.png"
import django from "../assets/icons/layer1.svg"
import git from "../assets/icons/git.svg"
import MongoDB from "../assets/icons/MongoDB.png"
import node from "../assets/icons/Node.js_logo.svg"
import SQL from "../assets/icons/SQL.svg"
function About() {


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
        <img className="html-icon" src={html} alt="icon" />
        <img className="javascript-icon" src={javascript} alt="icon"  />
        <img className="css-icon" src={css} alt="icon"  />
        <img className="python-icon" src={python}  alt="icon" />
        <img className="react-icon" src={reactLogo} alt="icon" />
        <img className="django-icon" src={django} alt="icon" />
        <img className="git-icon" src={git} alt="icon" />
        <img className="mongo-icon" src={MongoDB} alt="icon" />
        <img className="node-icon" src={node} alt="icon" />
        <img className="sql-icon" src={SQL} alt="icon" />
      </div>
    </>
  );
}

export default About;
