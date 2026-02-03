import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { Code2, Gamepad2, Bot, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.about-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const interests = [
    { icon: Code2, label: 'Web Dev', color: 'text-purple-400' },
    { icon: Gamepad2, label: 'Game Dev', color: 'text-pink-400' },
    { icon: Bot, label: 'Robotics', color: 'text-cyan-400' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">
              {language === 'fi' ? 'Tietoja' : 'About'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t('about.title')}
          </h2>
        </div>

        {/* About Cards */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
        >
          {/* Card 1 */}
          <div className="about-card glass-card p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t('about.p1')}
            </p>
          </div>

          {/* Card 2 */}
          <div className="about-card glass-card p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t('about.p2')}
            </p>
          </div>

          {/* Card 3 */}
          <div className="about-card glass-card p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t('about.p3')}
            </p>
          </div>
        </div>

        {/* Interests Tags */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <interest.icon className={`w-5 h-5 ${interest.color}`} />
              <span className="text-sm font-medium text-slate-300">
                {interest.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
