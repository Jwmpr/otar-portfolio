import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Creative Problem Solver. I build beautiful, 
            functional web applications that make a difference.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;