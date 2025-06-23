import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="gradient-text">Nexter</h3>
            <p className="footer-description">
              Building the future of digital experiences, one innovation at a time.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>🐙</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-list">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-list">
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#status">Status</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Nexter. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;