import React from 'react';
import "../css/Content.css";
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Content = () => {
  return (
    <>
      <div className="content-ctr">
        content
        <Home />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default Content;