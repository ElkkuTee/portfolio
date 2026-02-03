import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from '../components/MagneticButton';
import TextScramble from '../components/TextScramble';
import { ChevronDown, FileText, FolderOpen, Mail } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, rotateX: -30 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 1.2, 
          ease: 'power3.out',
          delay: 0.3
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.6
        }
      );

      // Buttons animation
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            ease: 'back.out(1.7)',
            stagger: 0.1,
            delay: 0.9
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #0a0a0f 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <p 
          className="text-lg md:text-xl text-purple-400 font-medium mb-4"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        >
          {t('hero.greeting')}
        </p>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ perspective: '1000px' }}
        >
          <span className="gradient-text glow-text">
            <TextScramble 
              text="Elias Tarvainen" 
              trigger={isLoaded}
              delay={500}
              loop={true}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
          <MagneticButton 
            variant="primary" 
            onClick={scrollToProjects}
          >
            <FolderOpen className="w-5 h-5 mr-2" />
            {t('hero.ctaProjects')}
          </MagneticButton>
          
          <MagneticButton 
            variant="secondary" 
            href="/cv.pdf"
            target="_blank"
          >
            <FileText className="w-5 h-5 mr-2" />
            {t('hero.ctaCV')}
          </MagneticButton>
          
          <MagneticButton 
            variant="secondary" 
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2" />
            {t('hero.ctaContact')}
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors"
        >
          <span className="text-sm">{language === 'fi' ? 'Selaa' : 'Scroll'}</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}
