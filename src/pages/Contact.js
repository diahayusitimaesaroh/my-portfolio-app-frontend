// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send message');
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
  <div className="container centered-text">
    <h1 className="section-title">Get in Touch</h1>
  </div>
</section>


      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in-left">
              <h2>Contact Information</h2>
              <div className="info-item"><i className="fas fa-envelope"></i><span>diahayusitimaesaroh@gmail.com</span></div>
              <div className="info-item"><i className="fas fa-phone"></i><span>+62 882-1510-5814</span></div>
              <div className="info-item"><i className="fas fa-map-marker-alt"></i><span>Banyumas, Indonesia</span></div>

              <div className="social-links">
                <a href="https://github.com"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            <div className="contact-form-container fade-in-up">
              {submitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank you for your message!</h3>
                  <p>I’ll get back to you as soon as possible.</p>
                  <button onClick={() => setSubmitted(false)} className="btn">Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send a Message</h2>
                  {error && <div className="error-message">{error}</div>}
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required />
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
