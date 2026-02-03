import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import TiltCard from '../components/TiltCard';
import { FolderGit2, ExternalLink, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card-wrapper');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: t('projects.roboTitle'),
      type: t('projects.school'),
      description: t('projects.roboDesc'),
      link: '#',
      linkText: t('projects.view'),
      image: 'robo',
    },
    {
      title: t('projects.osarkourTitle'),
      type: t('projects.school'),
      description: t('projects.osarkourDesc'),
      link: 'https://www.roblox.com/games/110680508484976/Osarkour',
      linkText: t('projects.view'),
      image: 'osarkour',
    },
    {
      title: t('projects.hubTitle'),
      type: t('projects.personal'),
      description: t('projects.hubDesc'),
      link: 'https://parkourreborn.com',
      linkText: t('projects.viewSite'),
      image: 'parkourrebornhub',
    },
    {
      title: t('projects.accutronTitle'),
      type: t('projects.personal'),
      description: t('projects.accutronDesc'),
      link: 'https://accutron.eu',
      linkText: t('projects.viewSite'),
      image: 'accutron',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <FolderGit2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">
              {language === 'fi' ? 'Projektit' : 'Projects'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t('projects.title')}
          </h2>
        </div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <TiltCard className="project-card-wrapper" tiltAmount={10}>
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="project-image-container relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 overflow-hidden">
                    <img 
                      src={`/${project.image}.png`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Decorative sparkles */}
                    <Sparkles className="absolute top-4 right-4 w-5 h-5 text-purple-400/50" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Type Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-3 w-fit">
                      {project.type}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-purple-400 group">
                      {project.linkText}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
