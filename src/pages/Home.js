import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 data-aos="zoom-in">Halo, I'm Diah</h1>
            <h2 data-aos="fade-up" data-aos-delay="200">Student at STMIK WIDYA UTAMA</h2>
            <p data-aos="fade-up" data-aos-delay="300">
             Designing elegant and adaptive web solutions that bring ideas to life—beautifully and efficiently
            </p>
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
              <Link to="/portfolio" className="btn">See My Work</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="skill-icon"><i className="fab fa-figma"></i></div>
            <h3>UI/UX Design</h3>
            <p>
              Designing engaging interfaces and intuitive user experiences using Figma and modern design principles.
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="skill-icon"><i className="fas fa-server"></i></div>
            <h3>Deployment & DevOps</h3>
            <p>
              Deploying apps on Vercel, Netlify, or Render, and understanding the basics of CI/CD pipelines.
            </p>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="skill-icon"><i className="fas fa-database"></i></div>
            <h3>State Management</h3>
            <p>
              Managing application state using Redux, Context API, or React Query for scalable web apps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
