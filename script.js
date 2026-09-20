/* =========================================================
   BENJI BOKOMOFULO — PORTFOLIO PERSONNEL
   Script principal — v3
   ========================================================= */

console.log('Bienvenue sur le portfolio de Benji Bokomofulo.');

/* ---------- Dictionnaire de traduction FR / EN ---------- */
const I18N = {
  fr: {
    'nav-accueil': 'Accueil', 'nav-apropos': 'À propos', 'nav-competences': 'Compétences',
    'nav-experiences': 'Expériences', 'nav-projets': 'Projets', 'nav-cv': 'Mon CV', 'nav-contact': 'Contact',

    'hero-badge': 'Réseaux · Développement · Cybersécurité',
    'hero-subtitle': 'Étudiant en Sciences Informatiques — Réseaux & Télécommunications',
    'hero-subsubtitle': 'Université Révérend Kim · Kinshasa, RDC',
    'hero-slogan': 'Bienvenue dans la page de l\u2019ingénieur Ben ; l\u2019excellence scientifique pour le développement technologique de la RDC.',
    'hero-cta1': 'Me contacter', 'hero-cta2': 'Voir mon CV',

    'marquee-1': 'Bienvenue dans la page de l\u2019ingénieur Ben',
    'marquee-2': 'L\u2019excellence scientifique pour le développement technologique de la RDC',
    'marquee-3': 'J\u2019apprends → Je pratique → Je collabore → Je progresse → Je réalise',

    'id-naissance': 'Né le <strong>02 décembre 2005</strong> à Kinshasa, RDC',
    'id-parents': 'Fils de <strong>Junior Bokomofulo</strong> et <strong>Charlène Kamuanya</strong>',
    'id-fratrie': 'Aîné d\u2019une fratrie de <strong>8 enfants</strong>',

    'stat-1-label': 'Année de Licence (L3)', 'stat-2-label': 'Frères et sœurs', 'stat-3-label': 'Moyenne au Diplôme d\u2019État', 'stat-4-label': 'Domaines de compétence',

    'apropos-title': 'Qui suis-je ?',
    'apropos-p1': 'Je m\u2019appelle Benji Bokomofulo, étudiant en Troisième Licence à l\u2019Université Révérend Kim, Faculté des Sciences Informatiques, Département Réseaux Informatiques &amp; Télécommunications. Je suis un jeune ingénieur en devenir, passionné par les mathématiques, la technologie, la cybersécurité, les réseaux, le développement web et mobile, les systèmes embarqués et l\u2019innovation numérique.',
    'apropos-p2': 'Mon parcours est marqué par une implication active dans le monde académique, ecclésiastique et communautaire : moniteur auprès des enfants à l\u2019Église Source de Vie — La Borne Macampagne, et membre organisateur du CIC. Aîné d\u2019une famille de huit enfants, j\u2019ai développé très tôt un sens élevé de responsabilité, de leadership et d\u2019organisation.',
    'val-1': 'Discipline', 'val-2': 'Rigueur', 'val-3': 'Leadership', 'val-4': 'Créativité', 'val-5': 'Adaptabilité',

    'competences-title': 'Compétences techniques', 'competences-lead': 'Des compétences construites entre formation académique, pratique autodidacte et projets concrets.',
    'cat-reseaux': 'Réseaux Informatiques', 'cat-dev': 'Développement Web', 'cat-bdd': 'Bases de Données', 'cat-iot': 'Systèmes Embarqués &amp; IoT', 'cat-prog': 'Programmation', 'cat-cyber': 'Cybersécurité',
    'softskills-title': 'Compétences humaines',
    'soft-1': 'Leadership', 'soft-2': 'Communication', 'soft-3': 'Organisation', 'soft-4': 'Gestion du stress', 'soft-5': 'Résolution de problèmes', 'soft-6': 'Travail en équipe', 'soft-7': 'Adaptabilité', 'soft-8': 'Sens de l\u2019initiative',

    'exp-title': 'Expériences &amp; responsabilités',
    'exp1-title': 'Église Source de Vie — La Borne Macampagne', 'exp1-role': 'Moniteur auprès des enfants',
    'exp1-li1': 'Encadrement et enseignement des enfants', 'exp1-li2': 'Organisation d\u2019activités pédagogiques', 'exp1-li3': 'Gestion de groupes et communication',
    'exp2-title': 'CIC — Comité d\u2019Initiative et de Coordination', 'exp2-role': 'Membre de l\u2019équipe organisatrice',
    'exp2-li1': 'Coordination et planification d\u2019événements', 'exp2-li2': 'Gestion de projets en équipe', 'exp2-li3': 'Responsable de la Programmation des Formations',

    'projets-title': 'Projets réalisés', 'projets-lead': 'Une sélection de projets académiques et personnels, entre réseaux, IoT, web et mobile.',
    'filter-tous': 'Tous', 'filter-iot': 'IoT', 'filter-web': 'Web', 'filter-mobile': 'Mobile', 'filter-reseau': 'Réseau',
    'proj1-tag': 'IoT', 'proj1-title': 'Régulation du niveau d\u2019eau', 'proj1-desc': 'ESP32 + capteur ultrason, API PHP/MySQL, interface web temps réel, automatisation de pompe et alertes.',
    'proj2-tag': 'Mobile', 'proj2-title': 'Applications institutionnelles', 'proj2-desc': 'Gestion d\u2019églises, d\u2019écoles, d\u2019académies, de pharmacies et de restaurants (membres, notes, stocks, facturation).',
    'proj3-tag': 'Réseau', 'proj3-title': 'Optimisation réseau', 'proj3-desc': 'Analyse du trafic, optimisation de bande passante, configuration et sécurisation d\u2019équipements réseau.',
    'proj4-tag': 'Web', 'proj4-title': 'Projets académiques & personnels', 'proj4-desc': 'Bases de données complexes, scripts Python d\u2019automatisation, mini-API REST, simulations Cisco Packet Tracer.',

    'objectifs-title': 'Objectifs professionnels',
    'obj1-title': 'Court terme', 'obj1-desc': 'Valider ma L3, obtenir la certification CCNA 1 et renforcer mes bases en cybersécurité.',
    'obj2-title': 'Moyen terme', 'obj2-desc': 'Concevoir des systèmes IoT avancés et développer des solutions web &amp; mobiles professionnelles.',
    'obj3-title': 'Long terme', 'obj3-desc': 'Devenir ingénieur réseau &amp; cybersécurité, et créer une entreprise technologique en RDC.',

    'contact-title': 'Me contacter', 'contact-lead': 'Une question, un projet ou une opportunité ? Écrivez-moi directement — le message arrive dans ma boîte mail.',
    'form-name': 'Nom', 'form-email': 'Email', 'form-message': 'Message', 'form-submit': 'Envoyer le message', 'copy-email': 'Copier l\u2019adresse email',
    'form-fallback': 'Le formulaire ne s\u2019ouvre pas ? Écrivez-moi directement :',
    'footer-liens': 'Liens', 'footer-infos': 'Infos', 'footer-loc': 'Kinshasa, RDC', 'footer-dispo': 'Disponible pour échanges &amp; collaborations', 'footer-cursus': 'L3 Réseaux &amp; Télécoms', 'back-top': 'Haut de page',

    'cv-title': 'Mon CV', 'cv-lead': 'Le détail complet de mon profil, mes compétences et mon parcours — téléchargeable en PDF.',
    'cv-download': 'Télécharger le CV (PDF)', 'cv-print': 'Imprimer',
    'cv-info-title': 'Informations personnelles',
    'info-nom': 'Nom', 'info-naissance': 'Date de naissance', 'info-lieu': 'Lieu de naissance', 'info-nat': 'Nationalité', 'info-adresse': 'Adresse', 'info-email': 'Email',
    'cv-profil-title': 'Profil professionnel',
    'cv-profil-text': 'Jeune ingénieur en formation dans les réseaux informatiques, les télécommunications, le développement web, les systèmes embarqués et la cybersécurité. Passionné par les mathématiques et l\u2019innovation, polyvalent et rigoureux, capable de concevoir des systèmes IoT et d\u2019administrer des infrastructures réseau. Aîné d\u2019une famille de 8 enfants, doté d\u2019un sens élevé de responsabilité et de leadership.',
    'cv-parcours-title': 'Parcours académique',
    'cursus-lead': 'Mon cursus scolaire, de l\u2019école primaire à l\u2019université.',
    'cursus-1-title': 'École Primaire', 'cursus-1-desc': 'Scolarité primaire à Kinshasa, RDC — bases fondamentales en mathématiques, sciences et français.',
    'cursus-l1-title': 'Première Licence — Sciences Informatiques', 'cursus-l1-desc': 'Université Révérend Kim, Kinshasa. Fondamentaux : algorithmique, programmation, mathématiques appliquées, introduction aux réseaux.',
    'cursus-l2-title': 'Deuxième Licence — Réseaux Informatiques &amp; Télécommunications', 'cursus-l2-desc': 'Approfondissement des systèmes d\u2019exploitation, des protocoles réseaux, des bases de données et des premiers travaux pratiques (Cisco Packet Tracer).',
    'parcours-1-title': 'Troisième Licence — Sciences Informatiques', 'parcours-1-desc': 'Département Réseaux Informatiques &amp; Télécommunications, Université Révérend Kim, Kinshasa — année en cours.',
    'parcours-2-title': 'Diplôme d\u2019État — 2023', 'parcours-2-desc': 'Collège Abbé Loya 2, section Sciences, moyenne de 79%.',
    'cv-certif-title': 'Certifications visées', 'certif-lead': 'Objectifs de certification en cours de préparation.',
    'certif-1': 'Cisco CCNA — en préparation', 'certif-2': 'Certification Python', 'certif-3': 'Certification en cybersécurité', 'certif-4': 'Formation IoT avancée',
    'cv-langues-title': 'Langues', 'langue-fr': 'Français', 'langue-fr-niv': 'Courant', 'langue-en': 'Anglais', 'langue-en-niv': 'Niveau technique moyen',
    'cv-interet-title': 'Centres d\u2019intérêt', 'interet-1': 'Mathématiques', 'interet-2': 'Cybersécurité', 'interet-3': 'Innovation &amp; IoT',
    'cv-ref-title': 'Références', 'ref-1': 'Responsable d\u2019église', 'ref-2': 'Responsable CIC', 'ref-3': 'Encadreurs académiques',
    'cv-contact-title': 'Contact professionnel',
  },
  en: {
    'nav-accueil': 'Home', 'nav-apropos': 'About', 'nav-competences': 'Skills',
    'nav-experiences': 'Experience', 'nav-projets': 'Projects', 'nav-cv': 'My CV', 'nav-contact': 'Contact',

    'hero-badge': 'Networking · Development · Cybersecurity',
    'hero-subtitle': 'Computer Science Student — Networks & Telecommunications',
    'hero-subsubtitle': 'Reverend Kim University · Kinshasa, DRC',
    'hero-slogan': 'Welcome to engineer Ben\u2019s page; scientific excellence for the technological development of the DRC.',
    'hero-cta1': 'Contact me', 'hero-cta2': 'View my CV',

    'marquee-1': 'Welcome to engineer Ben\u2019s page',
    'marquee-2': 'Scientific excellence for the technological development of the DRC',
    'marquee-3': 'I learn → I practice → I collaborate → I progress → I achieve',

    'id-naissance': 'Born on <strong>December 2, 2005</strong> in Kinshasa, DRC',
    'id-parents': 'Son of <strong>Junior Bokomofulo</strong> and <strong>Charlène Kamuanya</strong>',
    'id-fratrie': 'Eldest of <strong>8 children</strong>',

    'stat-1-label': 'Year of study (3rd year)', 'stat-2-label': 'Siblings', 'stat-3-label': 'High school diploma average', 'stat-4-label': 'Fields of expertise',

    'apropos-title': 'Who am I?',
    'apropos-p1': 'My name is Benji Bokomofulo, a third-year student at Reverend Kim University, Faculty of Computer Science, Department of Computer Networks &amp; Telecommunications. I am a young engineer in the making, passionate about mathematics, technology, cybersecurity, networking, web and mobile development, embedded systems and digital innovation.',
    'apropos-p2': 'My journey is marked by active involvement in academic, church and community life: children\u2019s mentor at Église Source de Vie — La Borne Macampagne, and organizing member of CIC. As the eldest of eight children, I developed a strong sense of responsibility, leadership and organization early on.',
    'val-1': 'Discipline', 'val-2': 'Rigor', 'val-3': 'Leadership', 'val-4': 'Creativity', 'val-5': 'Adaptability',

    'competences-title': 'Technical skills', 'competences-lead': 'Skills built between academic training, self-taught practice and hands-on projects.',
    'cat-reseaux': 'Computer Networks', 'cat-dev': 'Web Development', 'cat-bdd': 'Databases', 'cat-iot': 'Embedded Systems &amp; IoT', 'cat-prog': 'Programming', 'cat-cyber': 'Cybersecurity',
    'softskills-title': 'Soft skills',
    'soft-1': 'Leadership', 'soft-2': 'Communication', 'soft-3': 'Organization', 'soft-4': 'Stress management', 'soft-5': 'Problem solving', 'soft-6': 'Teamwork', 'soft-7': 'Adaptability', 'soft-8': 'Initiative',

    'exp-title': 'Experience &amp; responsibilities',
    'exp1-title': 'Église Source de Vie — La Borne Macampagne', 'exp1-role': 'Children\u2019s mentor',
    'exp1-li1': 'Supervising and teaching children', 'exp1-li2': 'Organizing educational activities', 'exp1-li3': 'Group management and communication',
    'exp2-title': 'CIC — Initiative &amp; Coordination Committee', 'exp2-role': 'Organizing team member',
    'exp2-li1': 'Coordinating and planning events', 'exp2-li2': 'Team project management', 'exp2-li3': 'Head of Training Programming',

    'projets-title': 'Projects', 'projets-lead': 'A selection of academic and personal projects across networking, IoT, web and mobile.',
    'filter-tous': 'All', 'filter-iot': 'IoT', 'filter-web': 'Web', 'filter-mobile': 'Mobile', 'filter-reseau': 'Network',
    'proj1-tag': 'IoT', 'proj1-title': 'Water level regulation', 'proj1-desc': 'ESP32 + ultrasonic sensor, PHP/MySQL API, real-time web interface, pump automation and alerts.',
    'proj2-tag': 'Mobile', 'proj2-title': 'Institutional applications', 'proj2-desc': 'Management apps for churches, schools, academies, pharmacies and restaurants (members, grades, stock, billing).',
    'proj3-tag': 'Network', 'proj3-title': 'Network optimization', 'proj3-desc': 'Traffic analysis, bandwidth optimization, configuration and security of network equipment.',
    'proj4-tag': 'Web', 'proj4-title': 'Academic &amp; personal projects', 'proj4-desc': 'Complex databases, Python automation scripts, mini REST APIs, Cisco Packet Tracer simulations.',

    'objectifs-title': 'Professional goals',
    'obj1-title': 'Short term', 'obj1-desc': 'Complete my 3rd year, earn the CCNA 1 certification and strengthen my cybersecurity fundamentals.',
    'obj2-title': 'Medium term', 'obj2-desc': 'Design advanced IoT systems and develop professional web &amp; mobile solutions.',
    'obj3-title': 'Long term', 'obj3-desc': 'Become a network &amp; cybersecurity engineer, and start a technology company in the DRC.',

    'contact-title': 'Get in touch', 'contact-lead': 'A question, a project or an opportunity? Write to me directly — the message lands straight in my inbox.',
    'form-name': 'Name', 'form-email': 'Email', 'form-message': 'Message', 'form-submit': 'Send message', 'copy-email': 'Copy email address',
    'form-fallback': 'Form not loading? Email me directly:',
    'footer-liens': 'Links', 'footer-infos': 'Info', 'footer-loc': 'Kinshasa, DRC', 'footer-dispo': 'Available for collaboration', 'footer-cursus': '3rd year, Networks &amp; Telecoms', 'back-top': 'Back to top',

    'cv-title': 'My CV', 'cv-lead': 'The full detail of my profile, skills and background — downloadable as a PDF.',
    'cv-download': 'Download CV (PDF)', 'cv-print': 'Print',
    'cv-info-title': 'Personal information',
    'info-nom': 'Name', 'info-naissance': 'Date of birth', 'info-lieu': 'Place of birth', 'info-nat': 'Nationality', 'info-adresse': 'Address', 'info-email': 'Email',
    'cv-profil-title': 'Professional profile',
    'cv-profil-text': 'Young engineer in training in computer networks, telecommunications, web development, embedded systems and cybersecurity. Passionate about mathematics and innovation, versatile and rigorous, able to design IoT systems and administer network infrastructure. Eldest of 8 children, with a strong sense of responsibility and leadership.',
    'cv-parcours-title': 'Academic background',
    'cursus-lead': 'My schooling path, from primary school to university.',
    'cursus-1-title': 'Primary School', 'cursus-1-desc': 'Primary education in Kinshasa, DRC — foundations in mathematics, science and French.',
    'cursus-l1-title': 'First year — Computer Science', 'cursus-l1-desc': 'Reverend Kim University, Kinshasa. Fundamentals: algorithms, programming, applied mathematics, introduction to networking.',
    'cursus-l2-title': 'Second year — Computer Networks &amp; Telecommunications', 'cursus-l2-desc': 'Deeper work on operating systems, network protocols, databases and first hands-on labs (Cisco Packet Tracer).',
    'parcours-1-title': 'Third year — Computer Science', 'parcours-1-desc': 'Department of Computer Networks &amp; Telecommunications, Reverend Kim University, Kinshasa — current year.',
    'parcours-2-title': 'High school diploma — 2023', 'parcours-2-desc': 'Collège Abbé Loya 2, Science track, 79% average.',
    'cv-certif-title': 'Target certifications', 'certif-lead': 'Certification goals currently in preparation.',
    'certif-1': 'Cisco CCNA — in preparation', 'certif-2': 'Python certification', 'certif-3': 'Cybersecurity certification', 'certif-4': 'Advanced IoT training',
    'cv-langues-title': 'Languages', 'langue-fr': 'French', 'langue-fr-niv': 'Fluent', 'langue-en': 'English', 'langue-en-niv': 'Intermediate technical level',
    'cv-interet-title': 'Interests', 'interet-1': 'Mathematics', 'interet-2': 'Cybersecurity', 'interet-3': 'Innovation &amp; IoT',
    'cv-ref-title': 'References', 'ref-1': 'Church leader', 'ref-2': 'CIC coordinator', 'ref-3': 'Academic supervisors',
    'cv-contact-title': 'Professional contact',
  }
};

let currentLang = 'fr';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = I18N[lang][key];
    if (text !== undefined) el.innerHTML = text;
  });
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    const parts = [I18N[lang]['marquee-1'], I18N[lang]['marquee-2'], I18N[lang]['marquee-3']];
    marqueeTrack.innerHTML = parts.concat(parts).map(t => `<span>${t}</span>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {

  applyLanguage('fr');
  setInterval(() => { applyLanguage(currentLang === 'fr' ? 'en' : 'fr'); }, 5000);

  /* ---------- Mode clair / sombre ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const applyTheme = (mode) => {
      document.body.classList.toggle('dark-mode', mode === 'dark');
      themeToggle.checked = mode === 'dark';
    };
    let savedTheme = 'light';
    try { savedTheme = window.localStorage ? (localStorage.getItem('bb-theme') || 'light') : 'light'; } catch (e) { savedTheme = 'light'; }
    applyTheme(savedTheme);
    themeToggle.addEventListener('change', () => {
      const next = themeToggle.checked ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem('bb-theme', next); } catch (e) { /* stockage indisponible, on ignore */ }
    });
  }

  /* ---------- Barre de progression au scroll ---------- */
  const progressBar = document.getElementById('scroll-progress');
  function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- Carrousel photo (hero) : image1/image2 toutes les 5s ---------- */
  const carouselImgs = document.querySelectorAll('.hero-carousel img');
  const dots = document.querySelectorAll('.carousel-dots span');
  let carouselIndex = 0;
  if (carouselImgs.length > 1) {
    setInterval(() => {
      carouselImgs[carouselIndex].classList.remove('is-active');
      if (dots[carouselIndex]) dots[carouselIndex].classList.remove('is-active');
      carouselIndex = (carouselIndex + 1) % carouselImgs.length;
      carouselImgs[carouselIndex].classList.add('is-active');
      if (dots[carouselIndex]) dots[carouselIndex].classList.add('is-active');
    }, 5000);
  }

  /* ---------- Menu burger mobile ---------- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Animation au scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Barres de compétences animées ---------- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length && 'IntersectionObserver' in window) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-percent') + '%';
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    skillBars.forEach(bar => barObserver.observe(bar));
  }

  /* ---------- Compteurs animés ---------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const duration = 1100;
        const start = performance.now();
        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(progress * target);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => countObserver.observe(el));
  }

  /* ---------- Lien de navigation actif au scroll ---------- */
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(navAnchors).map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(sec => spy.observe(sec));
  }

  /* ---------- Filtre de projets ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const show = filter === 'tous' || card.getAttribute('data-category') === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- Bouton retour en haut ---------- */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 400 ? '1' : '0';
      backToTop.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Copier l'adresse email ---------- */
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText('bokomofulob@gmail.com');
        const original = btn.textContent;
        btn.textContent = currentLang === 'fr' ? 'Adresse copiée !' : 'Address copied!';
        setTimeout(() => { btn.textContent = original; }, 2000);
      } catch (err) { /* presse-papiers indisponible, on ignore */ }
    });
  });

  /* ---------- Bouton impression (page CV) ---------- */
  document.querySelectorAll('.print-btn').forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });

  /* ---------- Validation légère du formulaire (avant envoi réel via FormSubmit) ---------- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const feedback = document.getElementById('form-feedback');
      if (!name || !email || !message || !emailPattern.test(email)) {
        e.preventDefault();
        if (feedback) {
          feedback.textContent = currentLang === 'fr'
            ? 'Merci de remplir correctement tous les champs.'
            : 'Please fill in all fields correctly.';
          feedback.style.color = '#e05c5c';
        }
      } else if (feedback) {
        feedback.textContent = currentLang === 'fr'
          ? 'Ouverture de ta messagerie... si rien ne se passe, utilise le lien email ci-dessous.'
          : 'Opening your email app... if nothing happens, use the email link below.';
        feedback.style.color = '#8bd0c2';
      }
    });
  }

  /* ---------- Année dynamique dans le footer ---------- */
  document.querySelectorAll('.current-year').forEach(el => { el.textContent = new Date().getFullYear(); });

});
