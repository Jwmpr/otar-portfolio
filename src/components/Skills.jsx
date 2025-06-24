import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS/SCSS', level: 85 },
        { name: 'HTML5', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 80 },
        { name: 'Webpack', level: 75 }
      ]
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

    const skillCards = skillsRef.current?.querySelectorAll('.skill-category');
    skillCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills page-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="skills-grid" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`skill-category ${visibleItems.includes(categoryIndex) ? 'visible' : ''}`}
              data-index={categoryIndex}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: visibleItems.includes(categoryIndex) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;