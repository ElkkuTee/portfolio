import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from '../components/MagneticButton';
import { Mail, Phone, Github, MessageCircle, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll('.contact-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactLinks = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'elias.tarvainen@gmail.com',
      href: 'mailto:elias.tarvainen@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+358 40 1234567',
      href: 'tel:+358401234567',
      color: 'from-pink-500 to-orange-500',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: '@elkkutee',
      href: 'https://github.com/elkkutee',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">
              {language === 'fi' ? 'Yhteydenotto' : 'Contact'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Links */}
        <div ref={contentRef} className="space-y-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-item group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} p-0.5 flex-shrink-0`}
              >
                <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-slate-500 mb-1">{link.label}</p>
                <p className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
                  {link.value}
                </p>
              </div>

              {/* Arrow */}
              <Send className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            {language === 'fi' 
              ? 'Haluatko tehdä yhteistyötä? Ota yhteyttä!' 
              : 'Want to collaborate? Get in touch!'}
          </p>
          <MagneticButton 
            variant="primary" 
            href="mailto:elias.tarvainen@gmail.com"
          >
            <Mail className="w-5 h-5 mr-2" />
            {language === 'fi' ? 'Lähetä viesti' : 'Send Message'}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
