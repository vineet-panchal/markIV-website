import React from 'react';
import "../css/Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience-ctr" id="experience">
        <div className="experience-card-ctr" id="headstarter-ctr">
          <div className="experience-card-left" id="headstarter-left">
            <h1 className="experience-date">July - Sept 2024</h1>
          </div>
          <div className="experience-card-right" id="headstarter-right">
            <h1 className="experience-card-title" id="headstarter-title">
              Software Engineer Fellow - Headstarter AI
            </h1>
            <h4 className="experience-card-text" id="headstarter-text">
              Developed AI-powered web applications using Next, React, and OpenAI, improving user engagement by leveraging
              dynamic UI components and intelligent state management, resulting in a more interactive user experience.
            </h4>
            <div className="experience-tech" id="headstarter-tech">
              <button className="experience-tech-btn">Next JS</button>
              <button className="experience-tech-btn">React JS</button>
              <button className="experience-tech-btn">OpenAI</button>
              <button className="experience-tech-btn">Tailwind CSS</button>
              <button className="experience-tech-btn">Pinecone</button>
              <button className="experience-tech-btn">TypeScript</button>
            </div>
          </div>
        </div>

        <div className="experience-card-ctr" id="thecirclelabs-ctr">
          <div className="experience-card-left" id="thecirclelabs-left">
            <h1 className="experience-date">May - July 2024</h1>
          </div>
          <div className="experience-card-right" id="thecirclelabs-right">
            <h1 className="experience-card-title" id="thecirclelabs-title">
              Frontend Developer Intern - The Circle Labs
            </h1>
            <h4 className="experience-card-text" id="thecirclelabs-text">
              Designed and developed an engaging and informative website highlighting the organization’s mission and impact.
              Delivered a seamless and high-quality UI/UX experience, receiving positive feedback for its functionality and design.
            </h4>
            <div className="experience-tech" id="thecirclelabs-tech">
              <button className="experience-tech-btn">React JS</button>
              <button className="experience-tech-btn">Typescript</button>
              <button className="experience-tech-btn">Node JS</button>
              <button className="experience-tech-btn">Express JS</button>
              <button className="experience-tech-btn">MongoDB</button>
            </div>
          </div>
        </div>

        <div className="experience-card-ctr" id="thecodingclub-ctr">
          <div className="experience-card-left" id="thecodingclub-left">
            <h1 className="experience-date">Oct 2022 - June 2023</h1>
          </div>
          <div className="experience-card-right" id="thecodingclub-right">
            <h1 className="experience-card-title" id="thecodingclub-title">
              President & Teacher - The Coding Club
            </h1>
            <h4 className="experience-card-text" id="thecodingclub-text">
              Created and implemented a comprehensive coding curriculum for students in grades 9-12, covering core topics in
              Python, Java, and JavaScript, fostering a strong foundation in software development.
            </h4>
            <div className="experience-tech" id="thecodingclub-tech">
              <button className="experience-tech-btn">Python</button>
              <button className="experience-tech-btn">Java</button>
              <button className="experience-tech-btn">JavaScript</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience;