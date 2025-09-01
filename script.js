// Mostrar sección
function showSection(sectionId){
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));
    const selected = document.getElementById(sectionId);
    if(selected) selected.classList.add('active');
}

// Traducciones con innerHTML para todos los textos incluyendo <strong>
const translations = {
    en: {
        "menu-home": "Home",
        "menu-about": "About Me",
        "menu-portfolio": "Portfolio",
        "menu-contact": "Contact",
        "home-title": "Welcome to my personal website!",
        "home-text": "Showcasing my <strong>portfolio</strong>, skills, and experience in <strong>web development</strong>, <strong>digital art</strong>, and <strong>game development</strong>.",
        "home-btn": "See My Work",
        "about-title": "About Me",
        "about-text": "I have experience in <strong>web development</strong>, <strong>digital art</strong>, and <strong>game development</strong>. Passionate about creating interactive experiences and visually appealing designs.",
        "portfolio-title": "Portfolio",
        "proj1-title": "Project 1",
        "proj1-text": "Description of <strong>project 1</strong>.",
        "proj2-title": "Project 2",
        "proj2-text": "Description of <strong>project 2</strong>.",
        "proj3-title": "Project 3",
        "proj3-text": "Description of <strong>project 3</strong>.",
        "contact-title": "Contact",
        "contact-text": "You can contact me via GitHub: <a href='https://github.com/rob16m' target='_blank'>https://github.com/rob16m</a>",
        "footer-text": "© 2025 Roberto Márquez"
    },
    es: {
        "menu-home": "Inicio",
        "menu-about": "Sobre Mí",
        "menu-portfolio": "Portafolio",
        "menu-contact": "Contacto",
        "home-title": "¡Bienvenido a mi sitio personal!",
        "home-text": "Mostrando mi <strong>portafolio</strong>, habilidades y experiencia en <strong>desarrollo web</strong>, <strong>arte digital</strong> y <strong>desarrollo de videojuegos</strong>.",
        "home-btn": "Ver Mi Trabajo",
        "about-title": "Sobre Mí",
        "about-text": "Tengo experiencia en <strong>desarrollo web</strong>, <strong>arte digital</strong> y <strong>desarrollo de videojuegos</strong>. Apasionado por crear experiencias interactivas y diseños visualmente atractivos.",
        "portfolio-title": "Portafolio",
        "proj1-title": "Proyecto 1",
        "proj1-text": "Descripción de <strong>tu proyecto 1</strong>.",
        "proj2-title": "Proyecto 2",
        "proj2-text": "Descripción de <strong>tu proyecto 2</strong>.",
        "proj3-title": "Proyecto 3",
        "proj3-text": "Descripción de <strong>tu proyecto 3</strong>.",
        "contact-title": "Contacto",
        "contact-text": "Puedes contactarme a través de GitHub: <a href='https://github.com/rob16m' target='_blank'>https://github.com/rob16m</a>",
        "footer-text": "© 2025 Roberto Márquez"
    }
};

// Cambiar idioma usando innerHTML
function changeLanguage(lang){
    for(const id in translations[lang]){
        const el = document.getElementById(id);
        if(el) el.innerHTML = translations[lang][id];
    }
}
