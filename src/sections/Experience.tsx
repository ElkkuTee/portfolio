import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { Laptop, Rocket, GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      icon: Laptop,
      title: t('experience.software'),
      date: t('experience.softwareDate'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: t('experience.projects'),
      date: t('experience.projectsDate'),
      color: 'from-pink-500 to-orange-500',
    },
    {
      icon: GraduationCap,
      title: t('experience.school'),
      date: t('experience.schoolDate'),
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Briefcase className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-400 font-medium">
              {language === 'fi' ? 'Kokemus' : 'Experience'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t('experience.title')}
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item relative flex items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center">
                      <exp.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
