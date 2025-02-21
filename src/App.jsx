import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseTrailer from './components/MouseTrailer';
// import Header from './components/Header';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize any global GSAP animations here if needed
  }, []);

  return (
    <div className="relative">
      <MouseTrailer />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <Header /> */}
    </div>
  );
}

export default App;