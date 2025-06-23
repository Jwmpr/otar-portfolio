import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;