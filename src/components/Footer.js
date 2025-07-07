import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer fade-in-up">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">About Me</h3>
            <p>
              I’m a fullstack developer passionate about crafting modern web applications using cutting-edge JavaScript technologies.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <div className="social-links">
              <a href="https://github.com/febriaji" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://linkedin.com/in/febriaji" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://twitter.com/febriaji" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <p>&copy; {new Date().getFullYear()} AYU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
