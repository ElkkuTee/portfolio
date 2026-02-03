import { useLanguage } from '../context/LanguageContext';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-12 mt-12">
      {/* Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a 
              href="#" 
              className="text-2xl font-bold gradient-text"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              ET
            </a>
            <p className="text-slate-500 text-sm">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Made With */}
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-purple-400" />
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#about" 
              className="text-slate-500 hover:text-purple-400 transition-colors text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#projects" 
              className="text-slate-500 hover:text-purple-400 transition-colors text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#contact" 
              className="text-slate-500 hover:text-purple-400 transition-colors text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
