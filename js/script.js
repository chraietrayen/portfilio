/* ===========================================================
   RAYEN CHRAIET PORTFOLIO — PREMIUM SCRIPT
   i18n · Theme Toggle · Particles · SPA Navigation
   =========================================================== */
;(function(){
'use strict';

/* ═══════════ i18n TRANSLATIONS ═══════════ */
const TRANSLATIONS = {
  en: {
    'nav.home':'Home','nav.about':'About','nav.skills':'Skills','nav.education':'Education',
    'nav.experience':'Experience','nav.projects':'Projects','nav.contact':'Contact','nav.status':'Open to work',
    'home.badge':'Full Stack Developer','home.greeting':'Hi, I\'m','home.desc':'I build exceptional digital experiences. Specializing in full-stack development with a passion for clean code, stunning interfaces, and seamless user experiences.',
    'home.cta1':'Let\'s Talk','home.cta2':'View Work','home.projects':'Projects','home.experience':'Years Exp.','home.technologies':'Technologies','home.scroll':'Scroll to explore',
    'about.tag':'who I am','about.heading':'About <span class="gradient-text">Me</span>',
    'about.quote':'I turn ideas into real-world products through clean code and creative design.',
    'about.p1':'I\'m a passionate Full Stack Developer from <strong>Tunisia 🇹🇳</strong>. I love crafting modern, responsive, and high-performance web applications. I thrive on turning complex problems into elegant solutions using cutting-edge technologies.',
    'about.p2':'Whether it\'s building RESTful APIs, designing interactive UIs, or optimizing databases — I bring creativity and precision to every project I touch.',
    'about.h1':'Fast Learner','about.h1d':'Always exploring new tech','about.h2':'Detail Oriented','about.h2d':'Pixel-perfect results','about.h3':'Problem Solver','about.h3d':'Creative & logical thinking',
    'about.personal':'Personal','about.name_l':'Name','about.age_l':'Age','about.location_l':'Location','about.license_l':'License','about.yes':'Yes',
    'about.contact':'Contact','about.phone_l':'Phone',
    'skills.tag':'what I use','skills.heading':'My <span class="gradient-text">Skills</span>','skills.languages':'Languages','skills.frameworks':'Frameworks','skills.tools':'Tools & DevOps','skills.design':'Design & Software',
    'edu.tag':'learning path','edu.heading':'My <span class="gradient-text">Education</span>',
    'edu.t1':'Higher Institute of Technological Studies','edu.s1':'License in Computer Science','edu.d1':'Specialized in software engineering, web development, and database management. Built full-stack projects and participated in hackathons.',
    'edu.t2':'High School — Baccalaureate','edu.s2':'Technical Sciences','edu.d2':'Graduated with honors. Focused on mathematics, physics, and computer science. First introduction to programming.',
    'edu.t3':'Online Certifications','edu.s3':'Continuous Learning','edu.d3':'React, Node.js, AWS Cloud Practitioner, and advanced JavaScript — Udemy, Coursera, freeCodeCamp.',
    'exp.tag':'career journey','exp.heading':'My <span class="gradient-text">Experience</span>',
    'exp.t1':'Full Stack Developer','exp.job':'Job','exp.d1':'Building and maintaining full-stack web applications with React, Node.js, and MongoDB. Leading frontend architecture and CI/CD pipelines.',
    'exp.t2':'Web Development Intern','exp.intern':'Internship','exp.d2':'Built responsive websites for clients. Hands-on with modern frameworks, RESTful APIs, and agile methodology.',
    'exp.t3':'IT Club Lead','exp.assoc':'Association','exp.d3':'Organized coding workshops, hackathons, and tech talks. Mentored junior students in web development.',
    'proj.tag':'featured work','proj.heading':'My <span class="gradient-text">Projects</span>','proj.sub':'A curated showcase of projects that define my craft.',
    'proj.p1t':'Portfolio Website','proj.p1d':'Modern animated portfolio with VS Code-inspired design, particles, glassmorphism, and silky-smooth animations.',
    'proj.p2t':'E-Commerce Platform','proj.p2d':'Full-featured online store with cart, checkout, auth, admin dashboard, and real-time inventory.',
    'proj.p3t':'Real-Time Chat App','proj.p3d':'WebSocket messaging with rooms, file sharing, typing indicators, and end-to-end encryption.',
    'proj.p4t':'Task Management','proj.p4d':'Kanban board with drag-and-drop, team collaboration, progress tracking, and analytics.',
    'proj.p5t':'AI Content Generator','proj.p5d':'AI-powered creation tool using OpenAI APIs for blog posts, social media, and marketing copy.',
    'proj.p6t':'Weather & News PWA','proj.p6d':'Progressive Web App with real-time weather, curated news, offline support, and push notifications.',
    'contact.tag':'let\'s connect','contact.heading':'Get in <span class="gradient-text">Touch</span>',
    'contact.cta':'Have a project in mind?<br/><span class="gradient-text">Let\'s build it together.</span>',
    'contact.form_title':'Send a Message','contact.name':'Your Name','contact.subject':'Subject','contact.message':'Message','contact.send':'Send Message',
    'footer.text':'Crafted with passion.',
    'contact.qr_title':'Scan to Connect','contact.qr_visit':'Visit Portfolio','contact.qr_save':'Save Contact','contact.qr_vcard':'vCard',
    'about.languages':'Languages','lang.arabic':'Arabic','lang.french':'French','lang.english':'English','lang.german':'German',
    'lang.native':'Native','lang.fluent':'Fluent','lang.advanced':'Advanced','lang.basic':'Basic',
    'proj.p7t':'SantecAI — Health Platform','proj.p7d':'AI-powered healthcare platform with intelligent diagnostics, patient management, and secure authentication.'
  },
  fr: {
    'nav.home':'Accueil','nav.about':'À propos','nav.skills':'Compétences','nav.education':'Éducation',
    'nav.experience':'Expérience','nav.projects':'Projets','nav.contact':'Contact','nav.status':'Disponible',
    'home.badge':'Développeur Full Stack','home.greeting':'Salut, je suis','home.desc':'Je crée des expériences numériques exceptionnelles. Spécialisé dans le développement full-stack avec une passion pour le code propre, les interfaces élégantes et les expériences utilisateur fluides.',
    'home.cta1':'Discutons','home.cta2':'Voir mes projets','home.projects':'Projets','home.experience':'Ans d\'exp.','home.technologies':'Technologies','home.scroll':'Défiler pour explorer',
    'about.tag':'qui je suis','about.heading':'À <span class="gradient-text">Propos</span>',
    'about.quote':'Je transforme les idées en produits concrets grâce à un code propre et un design créatif.',
    'about.p1':'Je suis un développeur Full Stack passionné de <strong>Tunisie 🇹🇳</strong>. J\'aime créer des applications web modernes, réactives et performantes. Je transforme les problèmes complexes en solutions élégantes avec des technologies de pointe.',
    'about.p2':'Qu\'il s\'agisse de créer des API RESTful, de concevoir des interfaces interactives ou d\'optimiser des bases de données — j\'apporte créativité et précision à chaque projet.',
    'about.h1':'Apprenant rapide','about.h1d':'Toujours à explorer les nouvelles technologies','about.h2':'Orienté détails','about.h2d':'Résultats parfaits au pixel près','about.h3':'Résolveur de problèmes','about.h3d':'Pensée créative et logique',
    'about.personal':'Personnel','about.name_l':'Nom','about.age_l':'Âge','about.location_l':'Lieu','about.license_l':'Permis','about.yes':'Oui',
    'about.contact':'Contact','about.phone_l':'Téléphone',
    'skills.tag':'ce que j\'utilise','skills.heading':'Mes <span class="gradient-text">Compétences</span>','skills.languages':'Langages','skills.frameworks':'Frameworks','skills.tools':'Outils & DevOps','skills.design':'Design & Logiciels',
    'edu.tag':'parcours d\'apprentissage','edu.heading':'Mon <span class="gradient-text">Éducation</span>',
    'edu.t1':'Institut Supérieur des Études Technologiques','edu.s1':'Licence en Informatique','edu.d1':'Spécialisé en génie logiciel, développement web et gestion de bases de données. Projets full-stack et participation à des hackathons.',
    'edu.t2':'Lycée — Baccalauréat','edu.s2':'Sciences Techniques','edu.d2':'Diplômé avec mention. Concentré sur les mathématiques, la physique et l\'informatique. Première introduction à la programmation.',
    'edu.t3':'Certifications en ligne','edu.s3':'Apprentissage continu','edu.d3':'React, Node.js, AWS Cloud Practitioner et JavaScript avancé — Udemy, Coursera, freeCodeCamp.',
    'exp.tag':'parcours professionnel','exp.heading':'Mon <span class="gradient-text">Expérience</span>',
    'exp.t1':'Développeur Full Stack','exp.job':'Emploi','exp.d1':'Construction et maintenance d\'applications web full-stack avec React, Node.js et MongoDB. Direction de l\'architecture frontend et des pipelines CI/CD.',
    'exp.t2':'Stagiaire en développement web','exp.intern':'Stage','exp.d2':'Création de sites web réactifs pour les clients. Pratique avec des frameworks modernes, des API RESTful et la méthodologie agile.',
    'exp.t3':'Responsable du club IT','exp.assoc':'Association','exp.d3':'Organisation d\'ateliers de codage, de hackathons et de conférences tech. Mentorat des étudiants juniors en développement web.',
    'proj.tag':'travaux en vedette','proj.heading':'Mes <span class="gradient-text">Projets</span>','proj.sub':'Une vitrine soignée de projets qui définissent mon art.',
    'proj.p1t':'Site Portfolio','proj.p1d':'Portfolio animé moderne avec un design inspiré de VS Code, des particules, du glassmorphisme et des animations fluides.',
    'proj.p2t':'Plateforme E-Commerce','proj.p2d':'Boutique en ligne complète avec panier, paiement, authentification, tableau de bord admin et inventaire en temps réel.',
    'proj.p3t':'Application de Chat','proj.p3d':'Messagerie WebSocket avec salons, partage de fichiers, indicateurs de frappe et chiffrement de bout en bout.',
    'proj.p4t':'Gestion de tâches','proj.p4d':'Tableau Kanban avec glisser-déposer, collaboration en équipe, suivi de progression et analytiques.',
    'proj.p5t':'Générateur de contenu IA','proj.p5d':'Outil de création alimenté par l\'IA utilisant les APIs OpenAI pour les articles de blog, les réseaux sociaux et le marketing.',
    'proj.p6t':'PWA Météo & Actualités','proj.p6d':'Application Web Progressive avec météo en temps réel, actualités, support hors ligne et notifications push.',
    'contact.tag':'restons en contact','contact.heading':'Me <span class="gradient-text">Contacter</span>',
    'contact.cta':'Un projet en tête ?<br/><span class="gradient-text">Construisons-le ensemble.</span>',
    'contact.form_title':'Envoyer un message','contact.name':'Votre nom','contact.subject':'Sujet','contact.message':'Message','contact.send':'Envoyer',
    'footer.text':'Créé avec passion.',
    'contact.qr_title':'Scanner pour se connecter','contact.qr_visit':'Visiter le portfolio','contact.qr_save':'Enregistrer le contact','contact.qr_vcard':'vCard',
    'about.languages':'Langues','lang.arabic':'Arabe','lang.french':'Français','lang.english':'Anglais','lang.german':'Allemand',
    'lang.native':'Natif','lang.fluent':'Courant','lang.advanced':'Avancé','lang.basic':'Basique',
    'proj.p7t':'SantecAI — Plateforme Santé','proj.p7d':'Plateforme de santé propulsée par l\'IA avec diagnostics intelligents, gestion des patients et authentification sécurisée.'
  },
  de: {
    'nav.home':'Startseite','nav.about':'Über mich','nav.skills':'Fähigkeiten','nav.education':'Bildung',
    'nav.experience':'Erfahrung','nav.projects':'Projekte','nav.contact':'Kontakt','nav.status':'Offen für Arbeit',
    'home.badge':'Full Stack Entwickler','home.greeting':'Hallo, ich bin','home.desc':'Ich entwickle außergewöhnliche digitale Erlebnisse. Spezialisiert auf Full-Stack-Entwicklung mit einer Leidenschaft für sauberen Code, elegante Oberflächen und nahtlose Benutzererfahrungen.',
    'home.cta1':'Kontakt aufnehmen','home.cta2':'Projekte ansehen','home.projects':'Projekte','home.experience':'Jahre Erf.','home.technologies':'Technologien','home.scroll':'Scrollen zum Erkunden',
    'about.tag':'wer ich bin','about.heading':'Über <span class="gradient-text">Mich</span>',
    'about.quote':'Ich verwandle Ideen in reale Produkte durch sauberen Code und kreatives Design.',
    'about.p1':'Ich bin ein leidenschaftlicher Full Stack Entwickler aus <strong>Tunesien 🇹🇳</strong>. Ich liebe es, moderne, responsive und leistungsstarke Webanwendungen zu entwickeln. Ich verwandle komplexe Probleme in elegante Lösungen mit modernsten Technologien.',
    'about.p2':'Ob RESTful APIs erstellen, interaktive Oberflächen gestalten oder Datenbanken optimieren — ich bringe Kreativität und Präzision in jedes Projekt.',
    'about.h1':'Schneller Lerner','about.h1d':'Immer neue Technologien erforschend','about.h2':'Detailorientiert','about.h2d':'Pixelgenaue Ergebnisse','about.h3':'Problemlöser','about.h3d':'Kreatives & logisches Denken',
    'about.personal':'Persönliches','about.name_l':'Name','about.age_l':'Alter','about.location_l':'Standort','about.license_l':'Führerschein','about.yes':'Ja',
    'about.contact':'Kontakt','about.phone_l':'Telefon',
    'skills.tag':'was ich nutze','skills.heading':'Meine <span class="gradient-text">Fähigkeiten</span>','skills.languages':'Sprachen','skills.frameworks':'Frameworks','skills.tools':'Tools & DevOps','skills.design':'Design & Software',
    'edu.tag':'Bildungsweg','edu.heading':'Meine <span class="gradient-text">Bildung</span>',
    'edu.t1':'Höheres Institut für Technologische Studien','edu.s1':'Lizenz in Informatik','edu.d1':'Spezialisiert auf Software-Engineering, Webentwicklung und Datenbankmanagement. Full-Stack-Projekte und Hackathon-Teilnahme.',
    'edu.t2':'Gymnasium — Abitur','edu.s2':'Technische Wissenschaften','edu.d2':'Mit Auszeichnung abgeschlossen. Fokus auf Mathematik, Physik und Informatik. Erste Einführung in die Programmierung.',
    'edu.t3':'Online-Zertifizierungen','edu.s3':'Kontinuierliches Lernen','edu.d3':'React, Node.js, AWS Cloud Practitioner und fortgeschrittenes JavaScript — Udemy, Coursera, freeCodeCamp.',
    'exp.tag':'Karriereweg','exp.heading':'Meine <span class="gradient-text">Erfahrung</span>',
    'exp.t1':'Full Stack Entwickler','exp.job':'Stelle','exp.d1':'Erstellung und Wartung von Full-Stack-Webanwendungen mit React, Node.js und MongoDB. Leitung der Frontend-Architektur und CI/CD-Pipelines.',
    'exp.t2':'Webentwicklung-Praktikant','exp.intern':'Praktikum','exp.d2':'Erstellung responsiver Websites für Kunden. Praxis mit modernen Frameworks, RESTful APIs und agiler Methodik.',
    'exp.t3':'IT-Club-Leiter','exp.assoc':'Verein','exp.d3':'Organisation von Coding-Workshops, Hackathons und Tech-Talks. Mentoring von Junioren in der Webentwicklung.',
    'proj.tag':'ausgewählte Arbeiten','proj.heading':'Meine <span class="gradient-text">Projekte</span>','proj.sub':'Eine kuratierte Auswahl von Projekten, die mein Handwerk definieren.',
    'proj.p1t':'Portfolio-Website','proj.p1d':'Modernes animiertes Portfolio mit VS Code-inspiriertem Design, Partikeln, Glassmorphismus und seidigen Animationen.',
    'proj.p2t':'E-Commerce-Plattform','proj.p2d':'Voll ausgestatteter Online-Shop mit Warenkorb, Checkout, Auth, Admin-Dashboard und Echtzeit-Inventar.',
    'proj.p3t':'Echtzeit-Chat-App','proj.p3d':'WebSocket-Messaging mit Räumen, Dateiübertragung, Tipp-Indikatoren und End-to-End-Verschlüsselung.',
    'proj.p4t':'Aufgabenverwaltung','proj.p4d':'Kanban-Board mit Drag-and-Drop, Teamzusammenarbeit, Fortschrittsverfolgung und Analytik.',
    'proj.p5t':'KI-Content-Generator','proj.p5d':'KI-gestütztes Erstellungstool mit OpenAI APIs für Blogposts, Social Media und Marketingtexte.',
    'proj.p6t':'Wetter & Nachrichten PWA','proj.p6d':'Progressive Web App mit Echtzeit-Wetter, kuratierten Nachrichten, Offline-Support und Push-Benachrichtigungen.',
    'contact.tag':'in Kontakt treten','contact.heading':'<span class="gradient-text">Kontakt</span> aufnehmen',
    'contact.cta':'Ein Projekt im Sinn?<br/><span class="gradient-text">Lass es uns gemeinsam bauen.</span>',
    'contact.form_title':'Nachricht senden','contact.name':'Ihr Name','contact.subject':'Betreff','contact.message':'Nachricht','contact.send':'Senden',
    'footer.text':'Mit Leidenschaft erstellt.',
    'contact.qr_title':'Scannen zum Verbinden','contact.qr_visit':'Portfolio besuchen','contact.qr_save':'Kontakt speichern','contact.qr_vcard':'vCard',
    'about.languages':'Sprachen','lang.arabic':'Arabisch','lang.french':'Französisch','lang.english':'Englisch','lang.german':'Deutsch',
    'lang.native':'Muttersprache','lang.fluent':'Fließend','lang.advanced':'Fortgeschritten','lang.basic':'Grundkenntnisse',
    'proj.p7t':'SantecAI — Gesundheitsplattform','proj.p7d':'KI-gestützte Gesundheitsplattform mit intelligenter Diagnostik, Patientenverwaltung und sicherer Authentifizierung.'
  },
  ar: {
    'nav.home':'الرئيسية','nav.about':'عني','nav.skills':'المهارات','nav.education':'التعليم',
    'nav.experience':'الخبرة','nav.projects':'المشاريع','nav.contact':'اتصل بي','nav.status':'متاح للعمل',
    'home.badge':'مطور Full Stack','home.greeting':'مرحبًا، أنا','home.desc':'أبني تجارب رقمية استثنائية. متخصص في تطوير Full-Stack مع شغف للكود النظيف والواجهات الأنيقة وتجارب المستخدم السلسة.',
    'home.cta1':'لنتحدث','home.cta2':'عرض الأعمال','home.projects':'مشاريع','home.experience':'سنوات خبرة','home.technologies':'تقنيات','home.scroll':'مرر لاستكشاف المزيد',
    'about.tag':'من أنا','about.heading':'<span class="gradient-text">عني</span>',
    'about.quote':'أحوّل الأفكار إلى منتجات حقيقية من خلال كود نظيف وتصميم إبداعي.',
    'about.p1':'أنا مطور Full Stack شغوف من <strong>تونس 🇹🇳</strong>. أحب إنشاء تطبيقات ويب حديثة ومتجاوبة وعالية الأداء. أحول المشاكل المعقدة إلى حلول أنيقة باستخدام أحدث التقنيات.',
    'about.p2':'سواء كان بناء واجهات برمجة RESTful أو تصميم واجهات تفاعلية أو تحسين قواعد البيانات — أقدم الإبداع والدقة في كل مشروع.',
    'about.h1':'سريع التعلم','about.h1d':'دائمًا أستكشف تقنيات جديدة','about.h2':'دقيق في التفاصيل','about.h2d':'نتائج مثالية حتى آخر بكسل','about.h3':'حلّال مشاكل','about.h3d':'تفكير إبداعي ومنطقي',
    'about.personal':'شخصي','about.name_l':'الاسم','about.age_l':'العمر','about.location_l':'الموقع','about.license_l':'رخصة قيادة','about.yes':'نعم',
    'about.contact':'اتصل','about.phone_l':'الهاتف',
    'skills.tag':'ما أستخدمه','skills.heading':'<span class="gradient-text">مهاراتي</span>','skills.languages':'اللغات','skills.frameworks':'أطر العمل','skills.tools':'الأدوات و DevOps','skills.design':'التصميم والبرمجيات',
    'edu.tag':'مسيرتي التعليمية','edu.heading':'<span class="gradient-text">تعليمي</span>',
    'edu.t1':'المعهد العالي للدراسات التكنولوجية','edu.s1':'إجازة في علوم الحاسوب','edu.d1':'تخصص في هندسة البرمجيات وتطوير الويب وإدارة قواعد البيانات. مشاريع Full-Stack ومشاركة في الهاكاثون.',
    'edu.t2':'الثانوية — البكالوريا','edu.s2':'العلوم التقنية','edu.d2':'تخرج بتفوق. تركيز على الرياضيات والفيزياء وعلوم الحاسوب. أول مقدمة للبرمجة.',
    'edu.t3':'شهادات عبر الإنترنت','edu.s3':'تعلم مستمر','edu.d3':'React, Node.js, AWS Cloud Practitioner و JavaScript متقدم — Udemy, Coursera, freeCodeCamp.',
    'exp.tag':'مسيرتي المهنية','exp.heading':'<span class="gradient-text">خبرتي</span>',
    'exp.t1':'مطور Full Stack','exp.job':'وظيفة','exp.d1':'بناء وصيانة تطبيقات ويب Full-Stack باستخدام React و Node.js و MongoDB. قيادة هندسة الواجهة الأمامية وأنابيب CI/CD.',
    'exp.t2':'متدرب تطوير ويب','exp.intern':'تدريب','exp.d2':'إنشاء مواقع ويب متجاوبة للعملاء. ممارسة مع أطر عمل حديثة وواجهات RESTful وأجايل.',
    'exp.t3':'رئيس نادي تكنولوجيا المعلومات','exp.assoc':'جمعية','exp.d3':'تنظيم ورش عمل البرمجة والهاكاثون والمحاضرات التقنية. إرشاد الطلاب المبتدئين في تطوير الويب.',
    'proj.tag':'أعمال مميزة','proj.heading':'<span class="gradient-text">مشاريعي</span>','proj.sub':'عرض منسّق لمشاريع تعرّف حرفتي.',
    'proj.p1t':'موقع البورتفوليو','proj.p1d':'بورتفوليو متحرك حديث بتصميم مستوحى من VS Code مع جزيئات وزجاجية وحركات سلسة.',
    'proj.p2t':'منصة التجارة الإلكترونية','proj.p2d':'متجر إلكتروني متكامل مع سلة، دفع، مصادقة، لوحة إدارة ومخزون في الوقت الحقيقي.',
    'proj.p3t':'تطبيق دردشة فوري','proj.p3d':'مراسلة WebSocket مع غرف ومشاركة ملفات ومؤشرات كتابة وتشفير من طرف إلى طرف.',
    'proj.p4t':'إدارة المهام','proj.p4d':'لوحة كانبان مع السحب والإفلات وتعاون الفريق وتتبع التقدم والتحليلات.',
    'proj.p5t':'مولد محتوى بالذكاء الاصطناعي','proj.p5d':'أداة إنشاء مدعومة بالذكاء الاصطناعي باستخدام OpenAI APIs للمقالات والتواصل الاجتماعي والتسويق.',
    'proj.p6t':'تطبيق الطقس والأخبار','proj.p6d':'تطبيق ويب تقدمي مع طقس مباشر وأخبار منسقة ودعم بدون إنترنت وإشعارات فورية.',
    'contact.tag':'تواصل معي','contact.heading':'<span class="gradient-text">تواصل</span> معي',
    'contact.cta':'لديك مشروع في ذهنك؟<br/><span class="gradient-text">لنبنيه معًا.</span>',
    'contact.form_title':'أرسل رسالة','contact.name':'اسمك','contact.subject':'الموضوع','contact.message':'الرسالة','contact.send':'إرسال',
    'footer.text':'صُنع بشغف.',
    'contact.qr_title':'امسح للتواصل','contact.qr_visit':'زيارة البورتفوليو','contact.qr_save':'حفظ جهة الاتصال','contact.qr_vcard':'بطاقة اتصال',
    'about.languages':'اللغات','lang.arabic':'العربية','lang.french':'الفرنسية','lang.english':'الإنجليزية','lang.german':'الألمانية',
    'lang.native':'لغة أم','lang.fluent':'طلاقة','lang.advanced':'متقدم','lang.basic':'أساسي',
    'proj.p7t':'SantecAI — منصة صحية','proj.p7d':'منصة صحية مدعومة بالذكاء الاصطناعي مع تشخيصات ذكية وإدارة المرضى ومصادقة آمنة.'
  }
};

/* ═══════════ GLOBALS ═══════════ */
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ═══════════ INIT ═══════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  initLucide();
  initPreloader();
  initNavigation();
  initMobileMenu();
  initThemeToggle();
  initLangSwitcher();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initParticles();
  initCursor();
  initMagnetic();
  initRipple();
  initEditorTilt();
  initContactForm();
  initKeyboardShortcuts();
  initSkillBars();
  initQRCodes();
});

/* ═══════════ LUCIDE ICONS ═══════════ */
function initLucide(){
  if(window.lucide) window.lucide.createIcons();
}

/* ═══════════ THEME ═══════════ */
function applyTheme(theme){
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.content = theme === 'dark' ? '#0a1628' : '#f0f4ff';
}

function initThemeToggle(){
  $$('#theme-toggle, #theme-toggle-m').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      if(window.lucide) window.lucide.createIcons();
    });
  });
}

/* ═══════════ i18n ═══════════ */
function applyLanguage(lang){
  currentLang = lang;
  const dict = TRANSLATIONS[lang];
  if(!dict) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){
      el.innerHTML = dict[key];
    }
  });
  localStorage.setItem('lang', lang);
  // Update lang button
  const langCurr = $('#lang-current');
  if(langCurr) langCurr.textContent = lang.toUpperCase();
  // Update active class
  $$('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });
}

function initLangSwitcher(){
  const btn = $('#lang-btn');
  const dropdown = $('#lang-dropdown');
  if(!btn || !dropdown) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  $$('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      applyLanguage(opt.dataset.lang);
      dropdown.classList.remove('open');
      if(window.lucide) window.lucide.createIcons();
    });
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));
}

/* ═══════════ PRELOADER ═══════════ */
function initPreloader(){
  const preloader = $('#preloader');
  if(!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 600);
    }, 800);
  });
  // Fallback
  setTimeout(() => {
    preloader.classList.add('hidden');
    setTimeout(() => preloader.remove(), 600);
  }, 3000);
}

/* ═══════════ SPA NAVIGATION ═══════════ */
function initNavigation(){
  const links = $$('.nav-link[data-section]');
  const pages = $$('.page');

  function navigateTo(id){
    pages.forEach(p => p.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    const target = document.getElementById(id);
    if(target){
      target.classList.remove('active');
      void target.offsetWidth; // force reflow for animation
      target.classList.add('active');
    }
    links.forEach(l => {
      if(l.dataset.section === id) l.classList.add('active');
    });
    const scroll = $('#main-scroll');
    if(scroll) scroll.scrollTop = 0;
    // Trigger reveals on new page
    setTimeout(() => observeReveals(), 100);
    setTimeout(() => animateBars(), 200);
    window.location.hash = id;
  }

  links.forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(l.dataset.section);
      // Close mobile sidebar
      const sidebar = $('#sidebar');
      const overlay = $('#mobile-overlay');
      const hamburger = $('#hamburger');
      if(sidebar) sidebar.classList.remove('open');
      if(overlay) overlay.classList.remove('open');
      if(hamburger) hamburger.classList.remove('open');
    });
  });

  // CTA nav buttons
  $$('[data-nav]').forEach(b => {
    b.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(b.dataset.nav);
    });
  });

  // Hash on load
  const hash = window.location.hash.replace('#','');
  if(hash && document.getElementById(hash)){
    navigateTo(hash);
  }

  window.navigateTo = navigateTo;
}

/* ═══════════ MOBILE MENU ═══════════ */
function initMobileMenu(){
  const hamburger = $('#hamburger');
  const sidebar = $('#sidebar');
  const overlay = $('#mobile-overlay');
  if(!hamburger || !sidebar || !overlay) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    hamburger.classList.remove('open');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

/* ═══════════ SCROLL PROGRESS ═══════════ */
function initScrollProgress(){
  const bar = $('#scroll-progress');
  const scroll = $('#main-scroll');
  if(!bar || !scroll) return;
  scroll.addEventListener('scroll', () => {
    const pct = scroll.scrollTop / (scroll.scrollHeight - scroll.clientHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  });
}

/* ═══════════ SCROLL REVEAL ═══════════ */
let revealObserver;
function initScrollReveal(){
  const scroll = $('#main-scroll');
  if(!scroll) return;
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { root: scroll, threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  observeReveals();
}

function observeReveals(){
  if(!revealObserver) return;
  $$('.scroll-reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ═══════════ COUNTERS ═══════════ */
function initCounters(){
  const counters = $$('[data-count]');
  let ran = false;
  const scroll = $('#main-scroll');
  if(!scroll) return;

  function runCounters(){
    if(ran) return;
    const home = $('#home');
    if(!home || !home.classList.contains('active')) return;
    ran = true;
    counters.forEach(c => {
      const target = parseInt(c.dataset.count);
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if(current >= target){ current = target; clearInterval(timer); }
        c.textContent = current;
      }, 30);
    });
  }
  // Run on load if home is active
  setTimeout(runCounters, 1200);
  // Re-run when navigating to home
  const origNav = window.navigateTo;
  if(origNav){
    window.navigateTo = function(id){
      origNav(id);
      if(id === 'home'){ ran = false; setTimeout(runCounters, 400); }
    };
  }
}

/* ═══════════ SKILL BARS ═══════════ */
function initSkillBars(){
  setTimeout(animateBars, 500);
}

function animateBars(){
  $$('.skill-card').forEach(card => {
    if(card.classList.contains('visible')){
      card.querySelectorAll('.s-bar-fill').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--w');
      });
    }
  });
}

/* ═══════════ PARTICLES ═══════════ */
function initParticles(){
  const canvas = $('#particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [], mouse = { x: -1000, y: -1000 };
  const COUNT = Math.min(80, Math.floor(window.innerWidth / 20));

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class P {
    constructor(){
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - .5) * .4;
      this.vy = (Math.random() - .5) * .4;
      this.r = Math.random() * 2 + 1;
      this.o = Math.random() * .4 + .1;
    }
    update(){
      this.x += this.vx;
      this.y += this.vy;
      if(this.x < 0 || this.x > w) this.vx *= -1;
      if(this.y < 0 || this.y > h) this.vy *= -1;
      // Mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 120){
        const force = (120 - dist) / 120 * .015;
        this.vx += dx * force;
        this.vy += dy * force;
      }
      // Dampen
      this.vx *= .998;
      this.vy *= .998;
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(255,255,255,.15)';
      ctx.globalAlpha = this.o;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  for(let i = 0; i < COUNT; i++) particles.push(new P());

  function connectLines(){
    for(let i = 0; i < particles.length; i++){
      for(let j = i+1; j < particles.length; j++){
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 150){
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(255,255,255,.15)';
          ctx.globalAlpha = (1 - dist / 150) * .3;
          ctx.lineWidth = .5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function loop(){
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    connectLines();
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
}

/* ═══════════ CUSTOM CURSOR ═══════════ */
function initCursor(){
  const cursor = $('#cursor');
  const trail = $('#cursor-trail');
  if(!cursor || !trail || !matchMedia('(hover:hover)').matches) return;

  let cx = 0, cy = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    trail.style.left = tx + 'px';
    trail.style.top = ty + 'px';
  });

  function lerp(a, b, t){ return a + (b - a) * t; }
  function animate(){
    cx = lerp(cx, tx, .12);
    cy = lerp(cy, ty, .12);
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Hover effect on interactive elements
  $$('a, button, .magnetic, .proj-card, .glass-card, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

/* ═══════════ MAGNETIC BUTTONS ═══════════ */
function initMagnetic(){
  $$('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * .2}px, ${y * .2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ═══════════ RIPPLE ═══════════ */
function initRipple(){
  $$('.magnetic, .cta-btn, .submit-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

/* ═══════════ EDITOR TILT ═══════════ */
function initEditorTilt(){
  const editor = $('.editor');
  if(!editor || !matchMedia('(hover:hover)').matches) return;
  const wrap = editor.closest('.hero-card-wrap');
  if(!wrap) return;

  wrap.addEventListener('mousemove', e => {
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    editor.style.transform = `perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateZ(10px)`;
  });
  wrap.addEventListener('mouseleave', () => {
    editor.style.transform = '';
  });
}

/* ═══════════ CONTACT FORM ═══════════ */
function initContactForm(){
  const form = $('#contact-form');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const subject = form.querySelector('[name="subject"]').value;
    const message = form.querySelector('[name="message"]').value;

    const mailto = `mailto:rayenchraiet2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, '_blank');

    const status = $('#form-status');
    if(status){
      const msgs = { en: 'Opening email client...', fr: 'Ouverture du client email...', de: 'E-Mail-Client wird geöffnet...', ar: 'جارٍ فتح عميل البريد الإلكتروني...' };
      status.textContent = msgs[currentLang] || msgs.en;
      status.className = 'form-status-msg show success';
      setTimeout(() => status.className = 'form-status-msg', 3000);
    }
    form.reset();
  });
}

/* ═══════════ KEYBOARD SHORTCUTS ═══════════ */
function initKeyboardShortcuts(){
  const sections = ['home','about','skills','education','experience','projects','contact'];
  document.addEventListener('keydown', e => {
    // 1-7 keys
    const n = parseInt(e.key);
    if(n >= 1 && n <= 7 && !e.ctrlKey && !e.altKey && !e.metaKey){
      const tag = document.activeElement?.tagName;
      if(tag === 'INPUT' || tag === 'TEXTAREA') return;
      e.preventDefault();
      if(window.navigateTo) window.navigateTo(sections[n-1]);
    }
    // Ctrl+K cycle
    if(e.ctrlKey && e.key === 'k'){
      e.preventDefault();
      const active = document.querySelector('.page.active');
      if(!active) return;
      const idx = sections.indexOf(active.id);
      const next = sections[(idx + 1) % sections.length];
      if(window.navigateTo) window.navigateTo(next);
    }
  });
}

/* ═══════════ QR CODES ═══════════ */
function initQRCodes(){
  if(typeof QRCode === 'undefined') return;
  const portfolioEl = document.getElementById('qr-portfolio');
  const vcardEl = document.getElementById('qr-vcard');

  if(portfolioEl && !portfolioEl.hasChildNodes()){
    new QRCode(portfolioEl, {
      text: window.location.origin || 'https://portfilio-chraietrayen.vercel.app',
      width: 130,
      height: 130,
      colorDark: '#1d4ed8',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  if(vcardEl && !vcardEl.hasChildNodes()){
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Chraiet;Rayen;;;',
      'FN:Rayen Chraiet',
      'TITLE:Full Stack Developer',
      'TEL;TYPE=CELL:+21694599198',
      'EMAIL:rayenchraiet2000@gmail.com',
      'URL:https://github.com/chraietrayen',
      'NOTE:Full Stack Developer from Tunisia',
      'END:VCARD'
    ].join('\n');
    new QRCode(vcardEl, {
      text: vcard,
      width: 130,
      height: 130,
      colorDark: '#1d4ed8',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

})(); 
