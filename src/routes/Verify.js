import React from 'react'
import Navbar from "../components/Navbar";
import Heroimg3 from '../components/Heroimg3';
import Chat from "../components/Chat"; 
import Footer from '../components/Footer';
// import Verify from '../components/Verify';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 heading = "CONTACT." text="Let's have some chat"/>
      <Chat/>
      {/* <Verify/> */}
      <Footer/>
    </div>
  )
}

export default Contact
