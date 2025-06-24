import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">! ÕtÀR</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Creative Problem Solver. I build beautiful, 
            functional web applications that make a difference.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;