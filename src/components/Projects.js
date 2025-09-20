import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "DS Merck GHH",
      description: "Component-based WordPress website for Merck with reusable modules, API integrations, and improved performance."
    },
    {
      name: "Merck Oncology Platform",
      description: "High-performance SPA using React.js & Node.js for managing 5,000+ patient entries, optimized for healthcare workflows."
    },
    {
      name: "Personal MERN Portfolio",
      description: "A full-stack portfolio website built with MongoDB, Express, React, and Node.js. Features include dynamic projects display, dark/light mode toggle, smooth scrolling navigation, and responsive design."
    },
    {
      name: "Task Manager App (MERN)",
      description: "A task management web app using MERN stack. Users can create, update, and delete tasks, with authentication, real-time updates, and responsive UI."
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
