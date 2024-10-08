import React from 'react';
import "../css/Sidebar.css";
import { Link as LinkScroll } from "react-scroll";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-ctr">
        <h1 className="sidebar-maintitle">Vineet Panchal</h1>
        <h6 className="sidebar-subtitle">Software Developer/Engineer</h6>
        <h4 className="sidebar-quote"></h4>

        <nav className="navbar">
          <ul className="nav-links">
            <LinkScroll className="navbar-btn" id="btn-1" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</LinkScroll>
            <LinkScroll className="navbar-btn" id="btn-2" to="about" spy={true} smooth={true} offset={50} duration={500}>About</LinkScroll>
            <LinkScroll className="navbar-btn" id="btn-3" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</LinkScroll>
            <LinkScroll className="navbar-btn" id="btn-4" to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</LinkScroll>
            <LinkScroll className="navbar-btn" id="btn-5" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</LinkScroll>
          </ul>
        </nav>
      </div>    
    </>
  )
}

export default Sidebar;