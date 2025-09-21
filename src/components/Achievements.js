import React from 'react';
import { FaAward } from 'react-icons/fa';
import './Achievements.css';

const achievements = [
  { 
    award: "React.js Certification", 
    description: "Certified by HackerRank for mastering React.js concepts and development", 
    year: "2023" 
  },
  { 
    award: "Front End Developer Certification", 
    description: "Certified by HackerRank in modern frontend development and responsive design", 
    year: "2025" 
  },
  { 
    award: "Google Cloud Associate Data Practitioner", 
    description: "Certified in cloud data fundamentals and GCP services", 
    year: "2025" 
  },
  { 
    award: "Ichamp Award", 
    description: "Recognized for key contributions and delivering high-impact solutions in project development", 
    year: "2024" 
  },
  { 
    award: "Accenture Excellence Award", 
    description: "Honored for outstanding performance, teamwork, and consistent delivery of high-quality results", 
    year: "2025" 
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements & Certifications</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <FaAward className="achievement-icon" />
            <h3 className="award-title">{item.award}</h3>
            <p className="award-description">{item.description}</p>
            <p className="award-year">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
