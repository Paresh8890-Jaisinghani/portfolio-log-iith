import React from 'react'
import './Latest.css'
import Drum from "../images/Drum.png";
import dog from "../images/dog.png";
import Personal from "../images/Personal.png";
import {FaExternalLinkAlt} from 'react-icons/fa';

const latest = () => {
  return (
  <section className='portfolio' id='portfolio'>
   <h2 className='heading'>Latest <span>Project</span></h2>
   <div className='portfolio-container'>
    {/* <div className='portfolio-box'>
    <img src={Drum} alt="None"/>
        <div className='portfolio-layer'>
            <h4>Web Design</h4>
            <p>Let see some of my new projects with latest techno.</p>
            <a href="#">
                <FaExternalLinkAlt/> </a>
        </div>
    </div> */}
    
    <div className='portfolio-box'>
    <img src={dog} alt="None"/>
        <div className='portfolio-layer'>
            <h4>Tin-Dog</h4>
            <p>Fronted Project using HTML and Bootstrap framework.</p>
            <a href="https://tin-6375.netlify.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt/> </a>
        </div>
    </div>
    <div className='portfolio-box'>
    <img src={Drum} alt="None"/>
        <div className='portfolio-layer'>
            <h4>Dum-Kit</h4>
            <p>Drum-kit Project using JavaScript, HTML & CSS.</p>
            <a href="https://drum-6375.netlify.app/" target="_blank" rel="noopener noreferrer" >
                <FaExternalLinkAlt/> </a>
        </div>
    </div>
    <div className='portfolio-box'>
    <img src={Personal} alt="None"/>
        <div className='portfolio-layer'>
            <h4>Personal-Website</h4>
            <p>Fronted Project using HTML & CSS.</p>
            <a href="https://personal-6375.netlify.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt/> </a>
        </div>
    </div>
   
   </div>
  </section>
  )
}

export default latest