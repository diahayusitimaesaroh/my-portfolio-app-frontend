import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container center-content">
          <h1 className="section-title" data-aos="fade-down">About Me</h1>
        </div>
      </section>
<div className="overflow-hidden leading-none">
  <svg viewBox="0 0 1440 320" className="-mb-1" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,106.7C672,96,768,96,864,112C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
</div>

      <section className="about-content">
        <div className="container center-content">
          <div className="about-text" data-aos="zoom-in">
            <h2>Who I Am</h2>
           <p>
  I'm a creative <strong>fullstack developer</strong> driven by a love for clean <strong>UI/UX</strong> and seamless interactivity. I specialize in building responsive interfaces with <strong>React</strong> and developing robust backends using <strong>Node.js</strong> and <strong>Express</strong>.
</p>
<p>
  From shaping concepts into designs with <strong>Figma</strong> to launching applications via <strong>Vercel</strong>, <strong>Netlify</strong>, or <strong>Render</strong>, I focus on delivering smooth, engaging digital experiences.
</p>
<p>
  I thrive on collaboration, user-centered thinking, and staying current with the ever-evolving <strong>JavaScript</strong> ecosystem — including modern <strong>CI/CD</strong> practices.
</p>
<p>
  When I'm not coding, I enjoy exploring design trends, experimenting with new tools, and fine-tuning my workflow.
</p>

            <h3>Education</h3>
            <ul className="no-bullets">
              <li>Bachelor of Computer Science – STMIK Widya Utama (2020)</li>
              <li>Advanced JavaScript Certification – Code Academy (2021)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="timeline">
  <div className="container center-content">
    <h2 className="section-title timeline-heading" data-aos="fade-up">My Journey</h2>
    <div className="timeline-horizontal">

      <div className="timeline-entry" data-aos="fade-up">
        <h3>Senior Developer at Tech Solutions Inc.</h3>
        <p className="timeline-date">2022 – Present</p>
        <p>
          Leading the end-to-end development of fullstack applications using the <strong>MERN stack</strong>, while streamlining deployment pipelines through modern <strong>CI/CD</strong> practices. Collaborate cross-functionally to deliver scalable, high-performance solutions.
        </p>
      </div>

      <div className="timeline-entry" data-aos="fade-up">
        <h3>Junior Developer at WebWorks Agency</h3>
        <p className="timeline-date">2020 – 2022</p>
        <p>
          Worked closely with designers to translate creative concepts into clean, responsive UIs. Helped optimize front-end performance and ensure consistent, user-centered experiences across devices.
        </p>
      </div>

      <div className="timeline-entry" data-aos="fade-up">
        <h3>Freelance Web Developer</h3>
        <p className="timeline-date">2018 – 2020</p>
        <p>
          Delivered custom websites for small businesses and personal brands — covering everything from UI design to backend development. Focused on building lightweight, SEO-friendly, and maintainable web solutions.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default About;
