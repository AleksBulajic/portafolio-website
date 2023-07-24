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
        <p>Description: Simple Memory card Game that mathces two card:</p>
        <p>Toold used: HTML, CSS, JavaScript</p>
      </div>
      <div className='project3'>
      <h1 className='title-project3'>Manga Verse</h1>
      <img  className='img-project3' src={SignInPage} alt='initial-img'/>
        <img  className='img-project3' src={homePage} alt='initial-img'/>
        <p>Description: Simple Memory card Game that mathces two card:</p>
        <p>Toold used: HTML, CSS, JavaScript</p>
      </div>
      <div className='project4'>
      <h1 className='title-project4'>Identity Lock</h1>
      <img  className='img-project4' src={logInPage} alt='initial-img'/>
        <img  className='img-project4' src={inititalImg} alt='initial-img'/>
        <p>Description: Simple Memory card Game that mathces two card:</p>
        <p>Toold used: HTML, CSS, JavaScript</p>
      </div>
    </div>
  )
}

export default Projects;