import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">About <span className="gradient-text">Nexter</span></h2>
            <p className="about-description">
              We're a team of passionate innovators dedicated to pushing the boundaries of what's possible 
              in the digital realm. Founded in 2024, Nexter has quickly become a leader in creating 
              next-generation digital experiences.
            </p>
            <p className="about-description">
              Our mission is simple: to empower businesses and individuals with cutting-edge technology 
              that's both powerful and accessible. We believe that great design and robust functionality 
              should go hand in hand.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          
          <div className={`about-visual ${isVisible ? 'visible' : ''}`}>
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="card-icon">💡</div>
                  <div className="card-text">Innovation</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="card-icon">🎯</div>
                  <div className="card-text">Precision</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="card-icon">⚡</div>
                  <div className="card-text">Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;