import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

const Features = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const featuresRef = useRef(null);

  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance that delivers results at the speed of thought.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Carefully crafted interfaces that delight users and drive engagement.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices and screen sizes.'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Stay connected with instant notifications and live data synchronization.'
    },
    {
      icon: '🌐',
      title: 'Global Scale',
      description: 'Built to handle millions of users across the globe with ease.'
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

    const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
    featureCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Why Choose <span className="gradient-text">Nexter</span>?</h2>
          <p className="section-subtitle">
            Discover the features that make us the preferred choice for forward-thinking businesses.
          </p>
        </div>
        
        <div className="features-grid" ref={featuresRef}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;