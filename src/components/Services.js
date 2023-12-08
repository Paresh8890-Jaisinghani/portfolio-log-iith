import React from "react";
import "./Services.css";
import {FaReact,FaBootstrap,FaHtml5} from "react-icons/fa";


const Services = () => {
  return (
  <section className="services" id="services">
    <h2 className="heading">My<span>  Skills</span></h2>

<div className="services-container">
    <div className="services-box">
    <a className="i"> <FaReact color="blue"/>
    </a>
     <h3>React Developer</h3>
     <p>Designing and building user interfaces using the React JavaScript library, creating interactive and responsive web applications with a focus on component-based architecture and virtual DOM</p>
    
    </div>

    <div className="services-box">
    <a className="i"> <FaHtml5/>
    </a>
     <h3>HTML Developer</h3>
     <p>Creating and structuring the content of web pages using Hypertext Markup Language (HTML), ensuring proper layout, compatibility for browser rendering and user experience.</p>
    
    </div>


    <div className="services-box">
    <a className="i"> <FaBootstrap/>
    </a>
     <h3>JS Developer</h3>
     <p>Writing, optimizing, and maintaining code using the JavaScript programming language to create dynamic and interactive web applications, enhancing user experience.</p>
    
    </div>
</div>
  </section>
  )
}

export default Services
