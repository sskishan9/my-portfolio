import React from 'react';
import resume from '../assets/Resume.pdf'; 

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <p>
        Full Stack Developer with 3+ years of experience delivering scalable, high-performance web applications using React.js, Node.js, Express, and MongoDB. 
        Proven ability to optimize performance (up to 40%), build RESTful APIs, and enhance frontend responsiveness. 
        Skilled in Agile, CI/CD, and collaborating with cross-functional teams.
      </p>
      <a href={resume} download className="resume-btn">Download Resume</a>
    </section>
  );
};

export default About;
