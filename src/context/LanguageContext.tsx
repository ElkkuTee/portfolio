import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface Translations {
  [key: string]: string | Translations;
}

const fiTranslations: Translations = {
  nav: {
    about: 'Tietoja minusta',
    experience: 'Kokemus',
    skills: 'Taidot',
    projects: 'Projektit',
    contact: 'Yhteydenotto',
  },
  hero: {
    greeting: 'Hei, olen',
    subtitle: 'Ohjelmistokehitysopiskelija | Web-kehitys | Peliohjelmointi | Robotiikka',
    ctaProjects: 'Projektit',
    ctaCV: 'CV',
    ctaContact: 'Ota yhteyttä',
  },
  about: {
    title: 'Tietoja minusta',
    p1: 'Olen ohjelmistokehitysopiskelija, jolla on kiinnostus moderniin teknologiaan ja sovelluskehitykseen. Harjoittelen erilaisten ohjelmointiratkaisujen toteuttamista ja kehitän osaamistani jatkuvasti projektien ja kokeilujen kautta.',
    p2: 'Ohjelmoinnin maailmaan tutustuin jo nuorena, ja siitä lähtien olen ollut innokas oppimaan uutta. Kouluprojektien lisäksi olen toteuttanut useita vapaa-ajan projekteja.',
    p3: 'Erityisesti olen kiinnostunut web-kehityksestä, peliohjelmoinnista ja robotiikasta. Uskon, että käytännön projektit ovat paras tapa oppia.',
  },
  experience: {
    title: 'Kokemus',
    software: 'Ohjelmistokehitys',
    softwareDate: '2025–nykyhetki',
    projects: 'Vapaa-ajan projektit',
    projectsDate: '2021–nykyhetki',
    school: 'Peruskoulu',
    schoolDate: '2016–2025',
  },
  skills: {
    title: 'Taidot',
    programming: 'Ohjelmointikielet',
    web: 'Web-kehitys',
    other: 'Muut taidot',
    languages: 'Kielitaito',
    responsive: 'Responsiivinen suunnittelu',
    frontend: 'Frontend-kehitys',
    backend: 'Backend-kehitys',
    websites: 'Verkkosivut',
    game: 'Peliohjelmointi (Roblox)',
    robotics: 'Robotiikka',
    problem: 'Ongelmanratkaisu',
    management: 'Projektinhallinta',
    finnish: 'Suomi (äidinkieli)',
    english: 'Englanti (erinomainen)',
  },
  work: {
    title: 'Työkokemus',
    tet: 'TET-harjoittelut',
    daycare: 'Riekonmarjan päiväkoti',
    daycareDuration: '1 viikko',
    daycareDesc: 'Harjoittelin päiväkodin arjessa ja autoin lastenhoitotehtävissä. Opin tiimityöskentelyä ja vastuunkantoa.',
    market: 'S-market Ritaharju',
    marketDuration: '1 viikko',
    marketDesc: 'Opin kaupan alan perusteita, asiakaspalvelua ja varastotyöskentelyä. Harjoittelin erilaisia myymälätehtäviä.',
  },
  projects: {
    title: 'Projektit',
    roboTitle: 'ParkPolish-robotti',
    school: 'Kouluprojekti',
    roboDesc: 'Autonominen palvelurobotti autojen puhdistamiseen. Suunnitteluprojekti, jossa kehitettiin robotin toimintalogiikkaa.',
    view: 'Katso projektia',
    osarkourTitle: 'Osarkour peli ja kartta',
    osarkourDesc: 'Roblox-pelissä toteutettu parkour-peli ja sen kartta. Projekti sisälsi pelin mekaniikan suunnittelua.',
    accutronTitle: 'Accutron -sivusto',
    accutronDesc: 'Verkkosivusto Accutron-yritykselle.',
    hubTitle: 'Community hub -sivusto',
    personal: 'Vapaa-ajan projekti',
    hubDesc: 'Parkour-pelille tarkoitettu yhteisöalusta ja verkkosivusto (parkourreborn.com).',
    viewSite: 'Katso sivustoa',
  },
  contact: {
    title: 'Yhteydenotto',
    subtitle: 'Ota yhteyttä ja kerro miten voin auttaa!',
    email: 'Sähköposti',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    copyright: '© 2026 Elias Tarvainen. Kaikki oikeudet pidätetään.',
  },
};

const enTranslations: Translations = {
  nav: {
    about: 'About Me',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I am',
    subtitle: 'Software Development Student | Web Development | Game Programming | Robotics',
    ctaProjects: 'Projects',
    ctaCV: 'CV',
    ctaContact: 'Get in Touch',
  },
  about: {
    title: 'About Me',
    p1: 'I am a software development student with a passion for modern technology and application development. I practice implementing various programming solutions and continuously improve my skills through projects and experiments.',
    p2: 'I discovered the world of programming at a young age, and since then I have been eager to learn new things. In addition to school projects, I have completed several personal projects.',
    p3: 'I am particularly interested in web development, game programming, and robotics. I believe that practical projects are the best way to learn.',
  },
  experience: {
    title: 'Experience',
    software: 'Software Development',
    softwareDate: '2025–Present',
    projects: 'Personal Projects',
    projectsDate: '2021–Present',
    school: 'Primary School',
    schoolDate: '2016–2025',
  },
  skills: {
    title: 'Skills',
    programming: 'Programming Languages',
    web: 'Web Development',
    other: 'Other Skills',
    languages: 'Languages',
    responsive: 'Responsive Design',
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    websites: 'Websites',
    game: 'Game Programming (Roblox)',
    robotics: 'Robotics',
    problem: 'Problem Solving',
    management: 'Project Management',
    finnish: 'Finnish (Native)',
    english: 'English (Excellent)',
  },
  work: {
    title: 'Work Experience',
    tet: 'TET Internships',
    daycare: 'Riekonmarja Daycare',
    daycareDuration: '1 week',
    daycareDesc: 'I practiced daily life at the daycare and helped with childcare tasks. I learned teamwork and taking responsibility.',
    market: 'S-market Ritaharju',
    marketDuration: '1 week',
    marketDesc: 'I learned the basics of retail, customer service, and warehouse work. I practiced various store tasks.',
  },
  projects: {
    title: 'Projects',
    roboTitle: 'ParkPolish Robot',
    school: 'School Project',
    roboDesc: 'Autonomous service robot for car cleaning. A design project where the robot\'s operating logic was developed.',
    view: 'View Project',
    osarkourTitle: 'Osarkour Game and Map',
    osarkourDesc: 'Parkour game and its map implemented in Roblox. The project included designing game mechanics.',
    accutronTitle: 'Accutron -website',
    accutronDesc: 'Website for Accutron company.',
    hubTitle: 'Community Hub Website',
    personal: 'Personal Project',
    hubDesc: 'Community platform and website for a parkour game (parkourreborn.com).',
    viewSite: 'View Website',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Get in touch and let me know how I can help!',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    copyright: '© 2026 Elias Tarvainen. All rights reserved.',
  },
};

interface LanguageContextType {
  language: 'fi' | 'en';
  setLanguage: (lang: 'fi' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<'fi' | 'en'>('fi');

  const setLanguage = useCallback((lang: 'fi' | 'en') => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const translations = language === 'fi' ? fiTranslations : enTranslations;
      const keys = key.split('.');
      let value: Translations | string = translations;

      for (const k of keys) {
        if (typeof value === 'object' && value !== null && k in value) {
          value = value[k] as Translations | string;
        } else {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
