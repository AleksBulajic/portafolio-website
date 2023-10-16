import React, { useState } from "react";
import Slider from "react-slick";
// import memoryGame2 from "../assets/memory-game/memory-game2.png";
// import memoryGame from "../assets/memory-game/memory-game.png";
import noPayToPlay from "../assets/nopaytoplay/nopaytoplay.png";
// import noPayToPlay2 from "../assets/nopaytoplay/nopaytoplay2.png";
import SignInPage from "../assets/mangaverse/signinManga.png";
// import homePage from "../assets/mangaverse/homeManga.png";
import logInPage from "../assets/identityLock/loginIdentity.png";
// import inititalImg from "../assets/identityLock/homeIdentity.png";
// import gelato1 from "../assets/gelato/gelato1.png";
// import gelato2 from "../assets/gelato/gelato2.png";
import "./Work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  //? this is the code to activate buttons to open new page
  // const handleProjectButtonClick = (url) => {
  //   window.open(url, "_blank");
  // };

  return (
    <>
      <div className="carousels-container">
        <Slider {...settings}>
          <div className="project-1-container">
            <img className="img-project1" src={logInPage} alt="initial-img" />
            <h1>IDENTITY LOCK</h1>
            <h3>
              React ● React ● Router ● Web3 ● Axios ● Python ● SQL ● Django
            </h3>
            <p>
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
            <img className="img-project2" src={noPayToPlay} alt="initial-img" />
            <h1>NoPayToPlay</h1>
            <h3>
              {" "}
              HTML ● CSS ● JavaScript ● JavaScript ● MnogoDB ● Express ● Node.js
              ● mongoose
            </h3>
            <p>
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
            <img className="img-project3" src={SignInPage} alt="initial-img" />
            <h1>Manga Verse</h1>
            <h3>
              {" "}
              React ● React ● Router ● Axios ● Node.js ● Express ● MongoDB ●
              Heroku ● Netlify
            </h3>
            <p>
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
        </Slider>
      </div>
      {/* {" "}
      <div className="work-container">
        <h1 className="work-text">UNDER CONSTRUCTION 👷🏼‍♂️🚧</h1>
        <iframe
          src="https://giphy.com/embed/sOaKnjmTTPsBqM1DSA"
          width="480"
          height="160"
          class="giphy-embed"
          title="Under Construction Gif"
        ></iframe>
      </div> */}
    </>
    //? Project informations !!!!!!!!!!!!!
    //   <div className="project-container">
    //     <div className="project4">
    //? project title 1
    //       <h1 className="title-project4">Identity Lock</h1>
    //       <div className="img-container">
    //? images for the project
    //         <img className="img-project4" src={logInPage} alt="initial-img" />
    //         <img className="img-project4" src={inititalImg} alt="initial-img" />
    //       </div>
    //? project description
    //       <p className="project-description">
    //         Description: As team lead, I led the creation of IdentityLock, an
    //         innovative app utilizing React.js for seamless front-end interactions
    //         and SQL, Python, and Django for robust back-end data management. NFTs,
    //         blockchain, and AI FinTech Guru provided unique user identities.
    //         Private keys ensured secure transactions, while Web3, Axios, Solidity,
    //         Ethers, and Cors facilitated decentralized NFT and asset storage.
    //         Experience the future of digital identity!
    //       </p>
    //? tools used
    //       <p className="project-tools">
    //       Tools used: React, React Router, Web3, Axios, Python, SQL, Django
    //       </p>
    //? required tools to run the app
    //       <p className="project-tools"> Requirements for app: 🦊 MetaMask, crypto called: SepoliaETH  </p>
    //       <div className="button-container">
    //         <button
    //? buttond for deployed version and github reposatory
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://calm-churros-9f4679.netlify.app/"
    //             )
    //           }
    //         >
    //           View Deployed Project
    //         </button>
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://github.com/AleksBulajic/NFT_ID_front-end"
    //             )
    //           }
    //         >
    //           View Github Reposatory
    //         </button>
    //       </div>
    //     </div>

    //     <div className="project2">
    //? project title 2
    //       <h1 className="title-project2">NoPayToPlay</h1>
    //       <div className="img-container">
    //? project images
    //         <img className="img-project2" src={noPayToPlay} alt="initial-img" />
    //         <img className="img-project2" src={noPayToPlay2} alt="initial-img" />
    //       </div>
    //? project description
    //       <p className="project-description">
    //         Description: Application that uses a 3rd party API and can have a full
    //         CRUD in my front-end as well as back-end. Developed a full CRUD
    //         application that integrated a 3rd party API, allowing users to perform
    //         Create, Read, Update, and Delete operations on data through the
    //         application's front-end and back-end. Conducted comprehensive research
    //         and analysis to identify the most suitable 3rd party API for
    //         integration into the application. Designed and implemented a
    //         user-friendly interface using front-end technologies, enabling
    //         seamless interaction with the API for CRUD operations. Developed
    //         secure and efficient back-end endpoints to handle data manipulation,
    //         integrating the chosen 3rd party API. Conducted extensive testing and
    //         debugging to ensure the application's functionality, stability, and
    //         seamless integration with the 3rd party API.
    //       </p>
    //       <p className="project-tools">
    //? tools for app
    //       <strong> Tools used:</strong>  HTML, CSS, JavaScript, JavaScript, MnogoDB, Express,
    //         Node.js, mongoose
    //       </p>
    //       <div className="button-container">
    //? buttond for deployed version and github reposatory
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://illustrious-taffy-70368f.netlify.app/"
    //             )
    //           }
    //         >
    //           View Deployed Project
    //         </button>
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://github.com/AleksBulajic/FrontendCRUD"
    //             )
    //           }
    //         >
    //           View Github Reposatory
    //         </button>
    //       </div>
    //     </div>
    //     <div className="project3">
    //? project title 3
    //       <h1 className="title-project3">Manga Verse</h1>
    //       <div className="img-container">
    //? project img
    //         <img className="img-project3" src={SignInPage} alt="initial-img" />
    //         <img className="img-project3" src={homePage} alt="initial-img" />
    //       </div>
    //       <p className="project-description">
    //? project description
    //         Description: In this team project, I played a pivotal role in setting
    //         up the back-end structure using JavaScript and MongoDB. I took charge
    //         of implementing authentication and skillfully set up the necessary
    //         routes to facilitate seamless integration with the 3rd party API. As a
    //         result, we were able to achieve Full CRUD functionality on both the
    //         front-end and back-end, ensuring a robust and user-friendly
    //         application.
    //       </p>
    //       <p className="project-tools">
    //? project tools
    //       <strong> Tools used:</strong>  React, React Router, Axios, Node.js, Express, MongoDB,
    //         Heroku, Netlify
    //       </p>
    //       <div className="button-container">
    //? button projects
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://dev--dreamy-donut-2e382b.netlify.app/"
    //             )
    //           }
    //         >
    //           View Deployed Project
    //         </button>
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://github.com/AleksBulajic/mangaVerse"
    //             )
    //           }
    //         >
    //           View Github Reposatory
    //         </button>
    //       </div>
    //     </div>
    //     <div className="project5">
    //? project title 4
    //       <h1 className="title-project5">Gelato Parlor Store</h1>
    //       <div className="img-container">
    //? project image
    //         <img className="img-project5" src={gelato1} alt="initial-img" />
    //         <img className="img-project5" src={gelato2} alt="initial-img" />
    //       </div>
    //       <p className="project-description">
    //? project description
    //         Description: Createted For Mobiel View /Created a Mock up of a gelato Store
    //       </p>
    //       <p className="project-tools"><strong> Tools used:</strong>React, CSS, JavaScript</p>
    //       <div className="button-container">
    //? project buttons
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://gelato-parlor-uxui-02b510a006b3.herokuapp.com/"
    //             )
    //           }
    //         >
    //           View Deployed Project
    //         </button>
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://github.com/AleksBulajic/Gelato-Parlor"
    //             )
    //           }
    //         >
    //           View Github Reposatory
    //         </button>
    //       </div>
    //     </div>
    //     <div className="project1">
    //? project title 5
    //       <h1 className="title-project1">Memory-Card-Game</h1>
    //       <div className="img-container">
    //? project images
    //         <img className="img-project1" src={memoryGame2} alt="initial-img" />
    //         <img className="img-project1" src={memoryGame} alt="initial-img" />
    //       </div>
    //       <p className="project-description">
    //? project description
    //         Description: Simple Memory card Game that matches two cards.
    //       </p>
    //       <p className="project-tools"><strong> Tools used:</strong>  HTML, CSS, JavaScript</p>
    //       <div className="button-container">
    //? project buttons
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://eclectic-shortbread-27bbb8.netlify.app/"
    //             )
    //           }
    //         >
    //           View Deployed Project
    //         </button>
    //         <button
    //           className="project-button"
    //           onClick={() =>
    //             handleProjectButtonClick(
    //               "https://github.com/AleksBulajic/Memory-card-game"
    //             )
    //           }
    //         >
    //           View Github Reposatory
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //? project informations!!!!!!!!!!!!!!!
  );
}

export default Projects;
