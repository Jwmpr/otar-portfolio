import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2 className="gradient-text">! ÕtÀR</h2>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className={isActive('/skills') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;