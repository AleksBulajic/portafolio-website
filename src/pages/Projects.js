import React from 'react'
import memoryGame2 from '../assets/memory-game/memory-game2.png'
import memoryGame from '../assets/memory-game/memory-game.png'
import noPayToPlay from '../assets/nopaytoplay/nopaytoplay.png'
import SignInPage from '../assets/mangaverse/signinManga.png'
import homePage from '../assets/mangaverse/homeManga.png'
import logInPage from '../assets/identityLock/loginIdentity.png'
import inititalImg from '../assets/identityLock/homeIdentity.png'
import './Projects.css'

function Projects() {
  return (
    <div className='project-container'>
      <div className='project1'>
        <h1 className='title-project1'>Memory-Card-Game</h1>
        <img  className='img-project1' src={memoryGame2} alt='initial-img'/>
        <img  className='img-project1' src={memoryGame} alt='initial-img'/>
        <p>Description: Simple Memory card Game that mathces two card:</p>
        <p>Toold used: HTML, CSS, JavaScript</p>
      </div>
      <div className='project2'>
        <h1 className='title-project2'>NoPayToPlay</h1>
        <img  className='img-project2' src={noPayToPlay} alt='initial-img'/>
        <p>Description: Application that uses a 3rd party API and i can have a full crud in my front-end as well as back-endDeveloped a full CRUD application that integrated a 3rd party API, allowing users to perform Create, Read, Update, and Delete operations on data through the application's front-end and back-end, Conducted comprehensive research and analysis to identify the most suitable 3rd party API for integration into the application.Designed and implemented a user-friendly interface using front-end technologies, enabling seamless interaction with the API for CRUD operations.Developed secure and efficient back-end endpoints to handle data manipulation, integrating the chosen 3rd party API.Conducted extensive testing and debugging to ensure the application's functionality, stability, and seamless integration with the 3rd party API.</p>
        <p>Tools used: HTML, CSS, JavaScript,JavaScript, MnogoDB, Express, Node.js, mongoose</p>
      </div>
      <div className='project3'>
      <h1 className='title-project3'>Manga Verse</h1>
      <img  className='img-project3' src={SignInPage} alt='initial-img'/>
        <img  className='img-project3' src={homePage} alt='initial-img'/>
        <p>Description: In this team project, I played a pivotal role in setting up the back-end structure using JavaScript and MongoDB. I took charge of implementing authentication and skillfully set up the necessary routes to facilitate seamless integration with the 3rd party API. As a result, we were able to achieve Full CRUD functionality on both the front-end and back-end, ensuring a robust and user-friendly application</p>
        <p>Tools used: React, React Router, Axios, Node.js, Express, MongoDB, Heroku, Netlify </p>
      </div>
      <div className='project4'>
      <h1 className='title-project4'>Identity Lock</h1>
      <img  className='img-project4' src={logInPage} alt='initial-img'/>
        <img  className='img-project4' src={inititalImg} alt='initial-img'/>
        <p>Description: As team lead, I led the creation of IdentityLock, an innovative app utilizing React.js for seamless front-end interactions and SQL, Python, and Django for robust back-end data management. NFTs, blockchain, and AI FinTech Guru provided unique user identities. Private keys ensured secure transactions, while Web3, Axios, Solidity, Ethers, and Cors facilitated decentralized NFT and asset storage. Experience the future of digital identity! </p>
        <p>Tools used:React, React Router, Web3, Axios, Python, SQL, Django, </p>
      </div>
    </div>
  )
}

export default Projects;