import "./Footer.css";
import React from 'react'
import {FaArrowAltCircleUp, FaArrowCircleUp} from 'react-icons/fa';

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer-text">
        <p>Copyright &copy; 2023 by Paresh || All Rights Reserved.</p>
    </div>

<div className="footer-iconTop">
    <a href="#">
        <FaArrowCircleUp/>
    </a>
</div>

   </footer>
  )
}

export default Footer