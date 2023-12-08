import React from 'react'
import Heroimg5 from '../components/Heroimg5';
import Navbar from "../components/Navbar";
import Latest from '../components/Latest';
import Footer from '../components/Footer';
const Project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg5 heading ="PROJECTS." text="Some of my most recents Projects"/>
    <Latest/>
    <Footer/>
    </div>
  )
}

export default Project
