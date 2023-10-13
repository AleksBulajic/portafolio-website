// import React, { useEffect }from "react";
// import "./Home.css";
// import ProfileImg from "../assets/profilePic/profileImg.jpg";
// import AleksResume from "../assets/resume/Aleks-Resume.pdf"
// import {
//   FaGithub,
//   FaEnvelope,
//   FaLinkedin,
//   FaFileDownload,
// } from "react-icons/fa";
// import VanillaTilt from "vanilla-tilt"; 

// function Home() {
 


//   useEffect(() => {
//     VanillaTilt.init(document.querySelector(".home-container"), {
//       max: 10, // Maximum tilt rotation (degrees)
//       speed: 400, // Speed of the tilt effect
//       glare: true, // Show glare effect
//       "max-glare": 0.4, // Maximum glare opacity
//     });
//   }, []);

  
//   return (
//     <div className="home-container">
//       <h1 className="h1-home">Aleksandar Bulajic</h1>
//       <p className="h3-home">
//       From a small village in the peninsula of Croatia, I moved to New York City at age 18 in search for a new adventure. Working as a dishwasher in a local bar, I worked my way up in becoming a Manager at various Culinary Institutes in the city. I’m driven by new challenges and thrived in the desire to build a life for myself in this country. Now, embarking on a new adventure of a software engineering career, I found joy in problem-solving through technology and creating applications that can help improve the day to day life.
//       </p>
//       <div className="profile-container">
//         <img className="profile-img" src={ProfileImg} alt="profile IMG" />
//         <div className="icons-container">
//           <a href="https://github.com/AleksBulajic" download target="_blank"  rel="noreferrer">
//           <FaGithub />
//           </a>
//           <a href="mailto:aleks.bulajic25@gmail.com">
//           <FaEnvelope />
//           </a>
//           <a href="https://www.linkedin.com/in/aleksandar-bulajic-dev/" target="_blank" rel="noreferrer">
//           <FaLinkedin />
//           </a>
//           <a href={AleksResume} download target="_blank" rel="noreferrer">
//             <FaFileDownload />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
