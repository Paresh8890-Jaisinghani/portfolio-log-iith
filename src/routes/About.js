import React from 'react'
import Navbar from "../components/Navbar";
import Aboutcontent from '../components/Aboutcontent';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
     <Navbar/>

<Heroimg2 heading = "ABOUT." text = "I am a Passionate Web Developer"/>
     <Aboutcontent/>
     <Footer/>

    </div>
  )
}

export default About
