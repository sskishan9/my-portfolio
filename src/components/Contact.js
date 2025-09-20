import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:sameerkishan99@gmail.com">sameerkishan99@gmail.com</a>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:9133534343">+91 91335 34343</a>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Rajahmundry, Andhra Pradesh, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
