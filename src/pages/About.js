import React from "react";
import "./About.css";
import profilePic from "../assets/profilePic/pfp.png";
import html from "programming-languages-logos/src/html/html.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import python from "programming-languages-logos/src/python/python.svg";
import reactLogo from "../assets/icons/reactLogo.png";
import django from "../assets/icons/layer1.svg";
import git from "../assets/icons/git.svg";
import MongoDB from "../assets/icons/MongoDB.png";
import node from "../assets/icons/Node.js_logo.svg";
import SQL from "../assets/icons/SQL.svg";
import css from "../assets/icons/css.png";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";

function About() {
  gsap.registerPlugin(Flip, Observer);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    { src: html, alt: "HTML icon", className: "html-icon" },
    { src: css, alt: "CSS icon", className: "css-icon" },
    { src: javascript, alt: "JavaScript icon", className: "javascript-icon" },
    { src: python, alt: "Python icon", className: "python-icon" },
    { src: reactLogo, alt: "React icon", className: "react-icon" },
    { src: django, alt: "Django icon", className: "django-icon" },
    { src: git, alt: "Git icon", className: "git-icon" },
    { src: MongoDB, alt: "MongoDB icon", className: "mongo-icon" },
    { src: node, alt: "Node.js icon", className: "node-icon" },
    { src: SQL, alt: "SQL icon", className: "sql-icon" },
  ];
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".profile-img"), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
    });
  }, []);

  useEffect(() => {
    gsap.from(".p-name", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    });
  }, []);

  const h1EnterFromLeftVariants = {
    initial: {
      x: "-100vw",
      y: "50%",
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const threshold = 500; 
      if (position > threshold) {
        setIsVisible(true);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="about-container">
        <div className="about-text">
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              paddingTop: "40px",
              paddingBottom: "1.5rem",
            }}
          >
            <motion.h1
              className="landing-hi"
              variants={h1EnterFromLeftVariants}
              initial="initial"
              animate="animate"
              style={{ margin: 0 }}
            >
              <h1 className="h1-ciao">Ciao!</h1>
            </motion.h1>
          </div>
          <motion.p
            className="p-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              type: "spring",
              stiffness: 120,
            }}
          >
            My name is <strong>Aleks</strong> and
            <br /> I'm a <strong>Software Engineer</strong>
            <br />
            from Croatia
          </motion.p>

          <div className="icon-container">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href="https://github.com/AleksBulajic"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 1,
                delay: 2,
                type: "spring",
                stiffness: 120,
              }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href="mailto:aleks.bulajic25@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 1,
                delay: 2,
                type: "spring",
                stiffness: 120,
              }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href="https://www.linkedin.com/in/aleksandar-bulajic-dev/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 1,
                delay: 2,
                type: "spring",
                stiffness: 120,
              }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
        <div className="profile-pic">
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img className="profile-img" src={profilePic} alt="profile IMG" />
          </motion.div>
        </div>
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
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="141"
        height="83"
        viewBox="0 0 141 83"
        fill="none"
        className="about-svg-white"
      >
        <path
          d="M70.5548 58.9348C50.1451 67.8508 37.7432 90.4491 17.4191 79.6518C-5.16346 67.6546 -6.47661 35.8281 24.2432 14.5282C54.9631 -6.77171 114.381 -4.94243 136 26.2387C157.62 57.4199 96.7358 47.4976 70.5548 58.9348Z"
          fill="#EDEDD4"
        />
      </svg>
      <div>
        <p className="about-me-text">
          <motion.p
            className="about-me-text"
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            From a small village in the peninsula of Croatia, I moved to New
            York City in search of adventure. I’m driven by new challenges and
            thrived in the desire to build a life for myself in this country.
            Starting as a dishwasher in a local bar, I worked my way up to
            becoming a Manager at various Culinary Institutes. Now, embarking on
            a new adventure in the tech industry, I found joy in problem-solving
            through technology and creating applications that can help improve
            the day-to-day life. I’m excited for this new journey and can’t wait
            to see where it takes me.
          </motion.p>
        </p>
      </div>

      <div className="bfp">
        <NavLink to="/work" className="work-link">
          <p className="view-project">
            VIEW PROJECTS {"  "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              viewBox="0 0 50 40"
              fill="none"
              className="arrow-svg"
            >
              <path
                d="M30.9011 0.726406C30.6728 0.494951 30.4021 0.311674 30.1044 0.187039C29.8067 0.0624052 29.4879 -0.00114511 29.1662 1.56178e-05C28.8444 0.00117635 28.5261 0.0670256 28.2293 0.193805C27.9325 0.320584 27.663 0.505809 27.4363 0.738906C27.2096 0.972002 27.0301 1.2484 26.9081 1.55233C26.786 1.85626 26.7237 2.18176 26.7249 2.51024C26.726 2.83873 26.7905 3.16377 26.9147 3.46681C27.0389 3.76985 27.2203 4.04495 27.4486 4.27641L40.573 17.5014H2.44858C1.79918 17.5014 1.17637 17.7648 0.717172 18.2336C0.257975 18.7025 0 19.3384 0 20.0014C0 20.6644 0.257975 21.3003 0.717172 21.7692C1.17637 22.238 1.79918 22.5014 2.44858 22.5014H40.573L27.4486 35.7264C26.9925 36.1948 26.7366 36.8284 26.7366 37.4889C26.7366 38.1494 26.9925 38.783 27.4486 39.2514C27.6754 39.4876 27.9458 39.6755 28.2442 39.8043C28.5426 39.933 28.8631 40 29.1871 40.0014C29.8294 39.9986 30.445 39.7383 30.9011 39.2764L50 20.0014L30.9011 0.726406Z"
                fill="#0F1111"
              />
            </svg>
          </p>
        </NavLink>
      </div>
    </>
  );
}

export default About;
