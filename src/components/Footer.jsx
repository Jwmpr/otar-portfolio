import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="gradient-text">Your Name</h3>
            <p className="footer-description">
              Full-Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>🐙</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span>📧</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><a href="#web-development">Web Development</a></li>
                <li><a href="#ui-design">UI/UX Design</a></li>
                <li><a href="#consulting">Consulting</a></li>
                <li><a href="#maintenance">Maintenance</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-list">
                <li><a href="#contact">Contact</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;