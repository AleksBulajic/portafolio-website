import React from "react";
import Slider from "react-slick";
import memoryGame2 from "../assets/memory-game/memory-game2.png";
// import memoryGame from "../assets/memory-game/memory-game.png";
import noPayToPlay from "../assets/nopaytoplay/nopaytoplay.png";
// import noPayToPlay2 from "../assets/nopaytoplay/nopaytoplay2.png";
import SignInPage from "../assets/mangaverse/signinManga.png";
// import homePage from "../assets/mangaverse/homeManga.png";
import logInPage from "../assets/identityLock/loginIdentity.png";
// import inititalImg from "../assets/identityLock/homeIdentity.png";
// import gelato1 from "../assets/gelato/gelato1.png";
// import gelato2 from "../assets/gelato/gelato2.png";
import studyhub from "../assets/studyhub/studyhub.png";
// import { FaGithub} from "react-icons/fa";
import "./Work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css";

function Projects() {
  const settings = {
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    speed: 800,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  //? this is the code to activate buttons to open new page
  // const handleProjectButtonClick = (url) => {
  //   window.open(url, "_blank");
  // };

//TODO make pictures biger!!!!

  return (
    <>
      <div className="carousels-container">
        <Slider {...settings}>
          <div className="project-1-container">
            <a
              href="https://github.com/AleksBulajic/NFT_ID_front-end"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-project1" src={logInPage} alt="initial-img" />
            </a>
            <h1 className="project-title">IDENTITY LOCK </h1>
            <h3 className="project-tools">
              React ● React Router ● Web3 ● Axios ● Python ● SQL ● Django
            </h3>
            <h4>
              Requirements for app:<a href="https://metamask.io/download/" target="_blank" rel="noreferrer" className="metaMask"> 🦊 MetaMask </a>, crypto called: SepoliaETH{" "}
            </h4>
            <p className="project-description">
              {" "}
              As team lead, I led the creation of IdentityLock, an innovative
              app utilizing React.js for seamless front-end interactions and
              SQL, Python, and Django for robust back-end data management. NFTs,
              blockchain, and AI FinTech Guru provided unique user identities.
              Private keys ensured secure transactions, while Web3, Axios,
              Solidity, Ethers, and Cors facilitated decentralized NFT and asset
              storage. Experience the future of digital identity!
            </p>
          </div>
          <div className="project-2-container">
            <a
              href="https://github.com/AleksBulajic/FrontendCRUD"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-project2"
                src={noPayToPlay}
                alt="initial-img"
              />
            </a>
            <h1 className="project-title">NO PAY TO PLAY</h1>
            <h3 className="project-tools">
              {" "}
              HTML ● CSS ● JavaScript ● MnogoDB ● Express ● Node.js ● mongoose
            </h3>
            <p className="project-description">
              {" "}
              Application that uses a 3rd party API and can have a full CRUD in
              my front-end as well as back-end. Developed a full CRUD
              application that integrated a 3rd party API, allowing users to
              perform Create, Read, Update, and Delete operations on data
              through the application's front-end and back-end. Conducted
              comprehensive research and analysis to identify the most suitable
              3rd party API for integration into the application. Designed and
              implemented a user-friendly interface using front-end
              technologies, enabling seamless interaction with the API for CRUD
              operations. Developed secure and efficient back-end endpoints to
              handle data manipulation, integrating the chosen 3rd party API.
              Conducted extensive testing and debugging to ensure the
              application's functionality, stability, and seamless integration
              with the 3rd party API.
            </p>
          </div>
          <div className="project-3-container">
            <a
              href="https://github.com/AleksBulajic/mangaVerse"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-project3"
                src={SignInPage}
                alt="initial-img"
              />
            </a>
            <h1 className="project-title">MANGA VERSE</h1>
            <h3 className="project-tools">
              {" "}
              React ● React Router ● Axios ● Node.js ● Express ● MongoDB ●
              Heroku ● Netlify
            </h3>
            <p className="project-description">
              {" "}
              In this team project, I played a pivotal role in setting up the
              back-end structure using JavaScript and MongoDB. I took charge of
              implementing authentication and skillfully set up the necessary
              routes to facilitate seamless integration with the 3rd party API.
              As a result, we were able to achieve Full CRUD functionality on
              both the front-end and back-end, ensuring a robust and
              user-friendly application.
            </p>
          </div>
          <div className="project-4-container">
            <a
              href="https://github.com/AleksBulajic/study-flashcards"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-project4" src={studyhub} alt="initial-img" />
            </a>
            <h1 className="project-title">STUDY-HUB</h1>
            <h3 className="project-tools">
              {" "}
              React ● CSS ● JavaScript ● MnogoDB ● Express ● Node.js ● mongoose
            </h3>
            <p className="project-description">
              {" "}
              StudyHub is an interactive learning application built using a
              combination of HTML, CSS, and JavaScript done in React. It
              leverages the power of MongoDB, Express, Node.js, and Mongoose to
              provide a seamless experience for users. With its intuitive
              interface, users can study various topics by viewing questions on
              one side and their corresponding answers on the other. The
              application aims to facilitate efficient learning and retention
              through an engaging and user-friendly approach.
            </p>
          </div>
          <div className="project-5-container">
            <a
              href="https://github.com/AleksBulajic/Memory-card-game"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-project5"
                src={memoryGame2}
                alt="initial-img"
              />
            </a>
            <h1 className="project-title">MEMORY CARD GAME</h1>
            <h3 className="project-tools">
               HTML ● CSS ● JavaScript
            </h3>
            <p className="project-description">
              Memory Card Game is a web-based application that utilizes HTML,
              CSS, and JavaScript to deliver a classic and interactive gaming
              experience. With HTML providing the structural backbone, CSS for
              the visual presentation, and JavaScript for dynamic functionality.
              The game itself is a simple yet addictive memory testing
              challenge. Players are tasked with matching pairs of cards by
              flipping them over two at a time.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Projects;
