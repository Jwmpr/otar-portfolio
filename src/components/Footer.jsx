import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="gradient-text">! ÕtÀR</h3>
            <p className="footer-description">
              Full-Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="social-links">
              <a href="mailto:alman2506@hotmail.com" className="social-link" aria-label="Email">
                <span>📧</span>
              </a>
              <a href="https://discord.gg/jds2zmjc" className="social-link" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                <span>💬</span>
              </a>
              <a href="https://github.com" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <span>🐙</span>
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <span>💼</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><button type="button" className="footer-button">Web Development</button></li>
                <li><button type="button" className="footer-button">UI/UX Design</button></li>
                <li><button type="button" className="footer-button">Consulting</button></li>
                <li><button type="button" className="footer-button">Maintenance</button></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-list">
                <li><Link to="/contact">Contact</Link></li>
                <li><button type="button" className="footer-button">Resume</button></li>
                <li><button type="button" className="footer-button">Blog</button></li>
                <li><button type="button" className="footer-button">Newsletter</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} ! ÕtÀR. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <button type="button" className="footer-button">Privacy Policy</button>
            <button type="button" className="footer-button">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;