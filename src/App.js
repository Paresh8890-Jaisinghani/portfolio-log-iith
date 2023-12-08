import React from 'react';
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
// import Verify from "./routes/Verify";
import Skill from "./routes/Skill";
import { Routes,Route } from 'react-router-dom';
import Contact from './routes/Contact';  

function App() {
  return (
    <>
    <Routes>
      <Route path = "/"  element ={<Home/>} />
      <Route path = "/about"  element ={<About/>} />
      <Route path = "/project"  element ={<Project/>} />
      {/* <Route path = "/verify"  element ={<Verify/>} /> */}
      <Route path = "/skill"  element ={<Skill/>} />
      <Route path = "/contact"  element ={<Contact/>} />
      
    </Routes>

    </>
  );
}

export default App;
