import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import TiltCard from '../components/TiltCard';
import { Building2, Baby, ShoppingCart, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.work-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
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

  const workItems = [
    {
      icon: Baby,
      title: t('work.tet'),
      place: t('work.daycare'),
      duration: t('work.daycareDuration'),
      description: t('work.daycareDesc'),
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: ShoppingCart,
      title: t('work.tet'),
      place: t('work.market'),
      duration: t('work.marketDuration'),
      description: t('work.marketDesc'),
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Building2 className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">
              {language === 'fi' ? 'Työkokemus' : 'Work Experience'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t('work.title')}
          </h2>
        </div>

        {/* Work Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-6"
          style={{ perspective: '1000px' }}
        >
          {workItems.map((item, index) => (
            <TiltCard key={index} className="work-card">
              <div className="glass-card p-6 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-purple-400 font-medium mb-4">
                  {item.place}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
