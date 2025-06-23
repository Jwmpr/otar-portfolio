import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts with beautiful data visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Netlify'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>📱</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;