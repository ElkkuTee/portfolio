import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import TiltCard from '../components/TiltCard';
import { 
  Code, 
  Globe, 
  Lightbulb, 
  Languages, 
  Cpu,
  Wrench,
  Puzzle,
  Users
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
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

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.programming'),
      color: 'from-purple-500 to-pink-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    },
    {
      icon: Globe,
      title: t('skills.web'),
      color: 'from-pink-500 to-orange-500',
      skills: [
        t('skills.responsive'),
        t('skills.frontend'),
        t('skills.backend'),
        t('skills.websites'),
      ],
    },
    {
      icon: Lightbulb,
      title: t('skills.other'),
      color: 'from-cyan-500 to-blue-500',
      skills: [
        t('skills.game'),
        t('skills.robotics'),
        t('skills.problem'),
        t('skills.management'),
      ],
    },
    {
      icon: Languages,
      title: t('skills.languages'),
      color: 'from-green-500 to-teal-500',
      skills: [t('skills.finnish'), t('skills.english')],
    },
  ];

  const getSkillIcon = (skill: string) => {
    if (skill.includes('HTML') || skill.includes('CSS') || skill.includes('JavaScript') || skill.includes('Python')) {
      return <Code className="w-3 h-3" />;
    }
    if (skill.includes('Web') || skill.includes('Responsive') || skill.includes('Frontend') || skill.includes('Backend')) {
      return <Globe className="w-3 h-3" />;
    }
    if (skill.includes('Game') || skill.includes('Roblox')) {
      return <Cpu className="w-3 h-3" />;
    }
    if (skill.includes('Robotics')) {
      return <Wrench className="w-3 h-3" />;
    }
    if (skill.includes('Problem')) {
      return <Puzzle className="w-3 h-3" />;
    }
    if (skill.includes('Management')) {
      return <Users className="w-3 h-3" />;
    }
    return <Lightbulb className="w-3 h-3" />;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              {language === 'fi' ? 'Osaaminen' : 'Skills'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t('skills.title')}
          </h2>
        </div>

        {/* Skills Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <TiltCard key={index} className="skill-card">
              <div className="glass-card p-6 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag"
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
