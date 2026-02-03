import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import { LanguageProvider } from './context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger for sections
    const sections = document.querySelectorAll('.reveal-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#0a0a0f]">
        {/* Scroll Progress Bar */}
        <div 
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        
        {/* Gradient Orbs */}
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
        
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main ref={mainRef} className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Work />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
