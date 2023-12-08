import React from 'react'
import "./Aboutcontent.css";
import wallpaper3 from "../images/wallpaper3.png";


const Aboutcontent = () => {
  return (
     <section className='about' id='about'>
    {/* <div className='about-img'>
        <img src={wallpaper3} alt="None"/>
    </div> */}

<div className='about-content'>
    <h2 className='heading'>About <span>Me</span></h2>
    <h3>Web Developer</h3>
    <p>I'm a dedicated web developer with expertise in both frontend and backend technologies, specializing in React.js, Mongoose, Tailwind CSS, and Bootstrap. My passion lies in creating secure and authenticated web applications. With a strong understanding of web development principles, I thrive on solving complex problems and delivering efficient solutions.Building robust and innovative websites is not just my profession, but also my greatest joy. I am constantly exploring new frameworks, languages, and best practices to stay at the forefront of web development trends.</p>

</div>

     </section>
  )
}

export default Aboutcontent
