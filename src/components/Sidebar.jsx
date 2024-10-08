import React from 'react';
import "../css/Sidebar.css";
import { Link as LinkScroll } from "react-scroll";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-ctr">
        <h1 className="sidebar-maintitle">Vineet Panchal</h1>
        <h6 className="sidebar-subtitle">Software Developer/Engineer</h6>

        <nav className="navbar">
          <ul className="nav-links">
            <LinkScroll className="navbar-btn" id="btn-2" to="about" spy={true} smooth={true} offset={50} duration={500}>About</LinkScroll>
            <LinkScroll className="navbar-btn" id="btn-3" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</LinkScroll>
            <LinkScroll className="navbar-btn" id="btn-4" to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</LinkScroll>
          </ul>
        </nav>
        
        <h4 className="sidebar-quote">"There is always one bug to fix." - Ellen Ulman</h4>

        <div className="contact-ctr">
          <ul className="contact-links">
            <a href="https://github.com/vineet-panchal" target="_blank">
              <button class="github-btn">
                <span class="svg-ctr">
                  <svg
                    fill="white"
                    viewBox="0 0 496 512"
                    height="1.6em">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </span>
                <span class="github-btn-bg"></span>
              </button>
            </a>

            <a href="https://www.linkedin.com/in/vineet-panchal-010337253/" target="_blank">
              <button class="linkedin-btn">
                <span class="svg-ctr">
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </span>
                <span class="linkedin-btn-bg"></span>
              </button>
            </a>

            <a href="" target=''>
              <button class="email-btn">
                <span class="svg-ctr">
                  <svg
                    viewBox="0 -2.5 20 20"
                    version="1.1"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#000000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#000000]"> </path> </g> </g> </g> </g></svg>
                </span>
                <span class="email-btn-bg"></span>
              </button>
            </a>

          </ul>
        </div>

        <h4 className="copyright-mark">©Vineet Panchal - 2024</h4>

      </div>    
    </>
  )
}

export default Sidebar;