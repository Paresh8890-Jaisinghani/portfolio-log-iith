import React from 'react'
import Navbar from "../components/Navbar";
import Heroimg4 from '../components/Heroimg4';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Skill = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg4 heading = "SKILLS." text = "Expertise in Web applications"/>
     <Services/>
     <Footer/>
    </div>
  )
}

export default Skill
