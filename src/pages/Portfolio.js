// src/pages/Portfolio.js
import React, { useEffect } from 'react';
import './Portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
      </div>
    </section>

      {/* Preview Image */}
      <section className="portfolio-image">
        <div className="container image-center" data-aos="zoom-in">
          <img
            src="/images/portfolio-project.png"
            alt="Preview Project"
            className="portfolio-preview"
          />
        </div>
      </section>

      {/* Project Grid */}
      <section className="portfolio-list">
        <div className="container">
          <div className="project-item" data-aos="fade-up">
            <h3 className="project-title">📝 Smart Notes App</h3>
            <p className="project-description">
              A minimalist note-taking app for managing tasks, ideas, and deadlines — built with React.js and local storage.
            </p>
          </div>

          <div className="project-item" data-aos="fade-up" data-aos-delay="150">
            <h3 className="project-title">📊 Analytics Dashboard</h3>
            <p className="project-description">
              Real-time user activity visualization using Chart.js and a robust Express backend.
            </p>
          </div>

          <div className="project-item" data-aos="fade-up" data-aos-delay="300">
            <h3 className="project-title">🏫 Academic Information System</h3>
            <p className="project-description">
              A complete MERN stack application for managing student data, schedules, and academic records.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
