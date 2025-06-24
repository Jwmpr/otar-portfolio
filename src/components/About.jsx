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
    <section className="about page-section" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">About <span className="gradient-text">! ÕtÀR</span></h2>
            <p className="about-description">
              I'm a passionate developer with a love for creating digital experiences that matter. 
              With expertise in modern web technologies, I enjoy turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in writing clean, maintainable code and creating applications that users love.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className={`about-visual ${isVisible ? 'visible' : ''}`}>
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="card-icon">💻</div>
                  <div className="card-text">Clean Code</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="card-icon">🎨</div>
                  <div className="card-text">UI/UX Design</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="card-icon">🚀</div>
                  <div className="card-text">Performance</div>
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