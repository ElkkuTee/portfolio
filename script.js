// Language translations
const translations = {
    fi: {
        nav: {
            about: "Tietoja minusta",
            experience: "Kokemus",
            skills: "Taidot",
            projects: "Projektit",
            contact: "Yhteydenotto"
        },
        hero: {
            subtitle: "Ohjelmistokehitysopiskelija | Web-kehitys | Peliohjelmointi | Robotiikka",
            projects: "Projektit",
            contact: "Ota yhteyttä"
        },
        about: {
            title: "Tietoja minusta",
            p1: "Olen ohjelmistokehitysopiskelija, jolla on kiinnostus moderniin teknologiaan ja sovelluskehitykseen. Harjoittelen erilaisten ohjelmointiratkaisujen toteuttamista ja kehitän osaamistani jatkuvasti projektien ja kokeilujen kautta. Tavoitteenani on rakentaa selkeitä, toimivia ja käyttäjäystävällisiä ratkaisuja.",
            p2: "Ohjelmoinnin maailmaan tutustuin jo nuorena, ja siitä lähtien olen ollut innokas oppimaan uutta. Kouluprojektien lisäksi olen toteuttanut useita vapaa-ajan projekteja, jotka ovat auttaneet minua kehittämään käytännön taitoja ja ymmärtämään paremmin ohjelmistokehityksen eri osa-alueita.",
            p3: "Eriityisesti olen kiinnostunut web-kehityksestä, peliohjelmoinnista ja robotiikasta. Uskon, että käytännön projektit ovat paras tapa oppia, joten pyrin aina toteuttamaan ideoitani konkreettiseksi koodiksi. Tulevaisuudessa haluan jatkaa oppimista ja kehittyä osaavaksi ohjelmistokehittäjäksi."
        },
        experience: {
            title: "Aiempi kokemus",
            software: "Ohjelmistokehitys",
            softwareDate: "2025–nykyhetki",
            projects: "Vapaa-ajan projektit",
            projectsDate: "2021–nykyhetki",
            school: "Peruskoulu",
            schoolDate: "2016–2025"
        },
        skills: {
            title: "Taidot",
            programming: "Ohjelmointikielet",
            web: "Web-kehitys",
            other: "Muut taidot",
            languages: "Kielitaito",
            responsive: "Responsiivinen suunnittelu",
            frontend: "Frontend-kehitys",
            backend: "Backend-kehitys",
            websites: "Verkkosivut",
            game: "Peliohjelmointi (Roblox)",
            robotics: "Robotiikka",
            problem: "Ongelmanratkaisu",
            management: "Projektinhallinta",
            finnish: "Suomi (äidinkieli)",
            english: "Englanti (erinomainen)"
        },
        work: {
            title: "Työkokemus",
            tet: "TET-harjoittelut",
            daycare: "Riekonmarjan päiväkoti<br>1 viikko",
            daycareDesc: "Harjoittelin päiväkodin arjessa ja autoin lastenhoitotehtävissä. Opin tiimityöskentelyä ja vastuunkantoa.",
            market: "S-market Ritaharju<br>1 viikko",
            marketDesc: "Opin kaupan alan perusteita, asiakaspalvelua ja varastotyöskentelyä. Harjoittelin erilaisia myymälätehtäviä."
        },
        projects: {
            title: "Projektit",
            roboTitle: "ParkPolish-robotti",
            school: "Kouluprojekti",
            roboDesc: "Autonominen palvelurobotti autojen puhdistamiseen. Suunnitteluprojekti, jossa kehitettiin robotin toimintalogiikkaa.",
            view: "Katso projektia →",
            osarkourTitle: "Osarkour peli ja kartta",
            osarkourDesc: "Roblox-pelissä toteutettu parkour-peli ja sen kartta. Projekti sisälsi pelin mekaniikan suunnittelua ja visuaalisen toteutuksen luomista.",
            hubTitle: "Community hub -sivusto",
            personal: "Vapaa-ajan projekti",
            hubDesc: "Parkour-pelille tarkoitettu yhteisöalusta ja verkkosivusto (parkourreborn.com). Sivusto tarjoaa pelaajille tietoa pelistä, yhteisötoimintoja ja päivityksiä.",
            viewSite: "Katso sivustoa →"
        },
        contact: {
            title: "Yhteydenotto"
        },
        footer: "&copy; 2026 Elias Tarvainen. Kaikki oikeudet pidätetään."
    },
    en: {
        nav: {
            about: "About Me",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "Software Development Student | Web Development | Game Programming | Robotics",
            projects: "Projects",
            contact: "Get in Touch"
        },
        about: {
            title: "About Me",
            p1: "I am a software development student with a passion for modern technology and application development. I practice implementing various programming solutions and continuously improve my skills through projects and experiments. My goal is to build clear, functional, and user-friendly solutions.",
            p2: "I discovered the world of programming at a young age, and since then I have been eager to learn new things. In addition to school projects, I have completed several personal projects that have helped me develop practical skills and better understand different areas of software development.",
            p3: "I am particularly interested in web development, game programming, and robotics. I believe that practical projects are the best way to learn, so I always strive to turn my ideas into concrete code. In the future, I want to continue learning and develop into a skilled software developer."
        },
        experience: {
            title: "Previous Experience",
            software: "Software Development",
            softwareDate: "2025–Present",
            projects: "Personal Projects",
            projectsDate: "2021–Present",
            school: "Primary School",
            schoolDate: "2016–2025"
        },
        skills: {
            title: "Skills",
            programming: "Programming Languages",
            web: "Web Development",
            other: "Other Skills",
            languages: "Language Skills",
            responsive: "Responsive Design",
            frontend: "Frontend Development",
            backend: "Backend Development",
            websites: "Websites",
            game: "Game Programming (Roblox)",
            robotics: "Robotics",
            problem: "Problem Solving",
            management: "Project Management",
            finnish: "Finnish (Native)",
            english: "English (Excellent)"
        },
        work: {
            title: "Work Experience",
            tet: "TET Internships",
            daycare: "Riekonmarja Daycare<br>1 week",
            daycareDesc: "I practiced daily life at the daycare and helped with childcare tasks. I learned teamwork and taking responsibility.",
            market: "S-market Ritaharju<br>1 week",
            marketDesc: "I learned the basics of retail, customer service, and warehouse work. I practiced various store tasks."
        },
        projects: {
            title: "Projects",
            roboTitle: "ParkPolish Robot",
            school: "School Project",
            roboDesc: "Autonomous service robot for car cleaning. A design project where the robot's operating logic was developed.",
            view: "View Project →",
            osarkourTitle: "Osarkour Game and Map",
            osarkourDesc: "Parkour game and its map implemented in Roblox. The project included designing game mechanics and creating visual implementation.",
            hubTitle: "Community Hub Website",
            personal: "Personal Project",
            hubDesc: "Community platform and website for a parkour game (parkourreborn.com). The site provides players with information about the game, community features, and updates.",
            viewSite: "View Website →"
        },
        contact: {
            title: "Contact"
        },
        footer: "&copy; 2026 Elias Tarvainen. All rights reserved."
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('lang') || 'fi';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.innerHTML = translation;
        }
    });
    
    // Update language switcher button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'fi' ? 'EN' : 'FI';
    }
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Language switcher button click handler
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const newLang = currentLang === 'fi' ? 'en' : 'fi';
            setLanguage(newLang);
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    
    // Add background blur on scroll
    if (scrollTop > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section elements
document.querySelectorAll('.timeline-item, .work-item, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Particle animation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${Math.random() > 0.5 ? '#6366f1' : '#8b5cf6'};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
        }
    }
    
    .particle {
        pointer-events: none;
        z-index: -1;
    }
`;
document.head.appendChild(style);

// Create particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Add hover effect to cards
document.querySelectorAll('.timeline-content, .work-item, .project-card, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple style
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Scroll progress indicator
const progress = document.createElement('div');
progress.className = 'scroll-progress';
progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progress);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + '%';
});