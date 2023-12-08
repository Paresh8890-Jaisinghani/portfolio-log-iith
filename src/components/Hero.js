import React from "react";
import "./Hero.css";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa"
import wallpaper3 from "../images/wallpaper3.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {

    const el = useRef(null);

        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: ["Fronted Developer", "Backend Developer","Web Developer"], // Strings to display
                // Speed settings, try diffrent values untill you get good results
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 70,
                loop:true
            });
        })
        

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Paresh</h1>
                <h3>I'm a <span id="element" ref={el}></span></h3>
                <p>My passion lies in creating secure and authenticated web applications. With a strong understanding of web development Principles.</p>
                <div className="social-media">
                <a href="https://www.instagram.com/_p.a.r.e.s.h_24_/" role="button" target="_blank" rel="noopener noreferrer">
                            <FaInstagram/>
                        </a>
                        <a href="https://www.linkedin.com/in/paresh-jaisinghani-499950280/" role="button"  target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100091893769580&mibextid=ZbWKwL" role="button"  target="_blank" rel="noopener noreferrer">
                            <FaFacebook/>
                            </a>
                </div>
<a href="https://drive.google.com/file/d/1UtyYCU1Me7C-VIVaha7lL-7zGL8hIops/view?usp=sharing"  target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
            </div>

<div className="home-img">
    <img src={wallpaper3} alt="Paresh-img"/>
</div>

        </section>




    )
};


export default Hero;