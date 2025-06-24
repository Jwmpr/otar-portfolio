import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive online shopping platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      category: 'Full-Stack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool that allows users to schedule posts, track analytics, manage multiple accounts, and engage with their audience across different platforms.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'Material-UI'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management API',
      description: 'A robust RESTful API for task management with user authentication, role-based permissions, real-time notifications, and comprehensive documentation. Includes automated testing and deployment.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A modern chat application with real-time messaging, file sharing, group chats, emoji support, and message encryption. Features responsive design and offline message sync.',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redis'],
      category: 'Real-Time',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'An interactive weather dashboard with detailed forecasts, historical data analysis, customizable alerts, and beautiful data visualizations. Integrates multiple weather APIs for accuracy.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'Data Visualization',
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
    <section className="projects page-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A showcase of my recent work across different categories and technologies
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
                <div className="project-category">{project.category}</div>
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