import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiRedux, SiExpress, SiMongodb, SiMysql, SiBootstrap, SiJira, SiPostman } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 color="#E34C26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#264DE4" /> },
      { name: "JavaScript", icon: <FaJs color="#F0DB4F" /> },
      { name: "React.js", icon: <FaReact color="#61DBFB" /> },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> }
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
      { name: "Express.js", icon: <SiExpress color="#000" /> },
      { name: "Java", icon: <FaDatabase color="#f29111" /> } // using DB icon for Java (can be swapped with a better one)
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> }
    ],
    "Dev Tools": [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "JIRA", icon: <SiJira color="#0052CC" /> }
    ],
    Others: [
      { name: "JWT", icon: <FaDatabase color="#00bcd4" /> },
      { name: "REST APIs", icon: <FaDatabase color="#8BC34A" /> },
      { name: "Agile / CI-CD", icon: <FaDatabase color="#9C27B0" /> }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      {Object.keys(skills).map(category => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-row">
            {skills[category].map(skill => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
