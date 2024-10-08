import React from 'react';
import "../css/Content.css";
import Projects from './Projects';
import Experience from './Experience';
import About from './About';

const Content = () => {
  return (
    <>
      <div className="content-ctr">
        <About />
        <Projects />
        <Experience />
      </div>
    </>
  )
}

export default Content;