/* ============================================================
   AAA CINEMATIC PORTFOLIO — RAYEN CHRAIET
   JavaScript: All interactivity + i18n + effects
   ============================================================ */

// ==================== TRANSLATIONS ====================
const T = {
  en: {
    "nav.home": "Home", "nav.scanner": "Scanner", "nav.about": "About", "nav.skills": "Skills",
    "nav.experience": "Experience", "nav.projects": "Projects", "nav.hobbies": "Hobbies", "nav.contact": "Contact",
    "nav.status": "Open to work",
    "home.badge": "Full Stack Developer",
    "home.line1": "I Build",
    "home.subtitle": "Creative Developer \u2022 UI Engineer \u2022 Tech Artist",
    "home.desc": "I craft exceptional digital experiences. Specializing in full-stack development with a passion for clean code, stunning interfaces, and seamless user experiences.",
    "home.cta1": "VIEW PROJECTS", "home.cta2": "CONTACT ME",
    "home.projects": "Projects", "home.experience": "Years Exp.", "home.technologies": "Technologies",
    "home.scroll": "Scroll to explore",
    "scan.tag": "identity scan", "scan.heading": "Developer <span class=\"gradient-text\">Scan</span>",
    "scan.location": "LOCATION", "scan.age_label": "AGE", "scan.status": "STATUS",
    "scan.available": "AVAILABLE", "scan.level": "LEVEL", "scan.expert": "EXPERT",
    "scan.clearance": "CLEARANCE", "scan.full_access": "FULL ACCESS", "scan.confirmed": "\u2713 IDENTITY CONFIRMED",
    "about.tag": "who I am", "about.heading": "About <span class=\"gradient-text\">Me</span>",
    "about.quote": "I turn ideas into real-world products through clean code and creative design.",
    "about.p1": "I'm a passionate Full Stack Developer from <strong>Tunisia \ud83c\uddf9\ud83c\uddf3</strong>. I love crafting modern, responsive, and high-performance web applications.",
    "about.p2": "Whether it\u2019s building RESTful APIs, designing interactive UIs, or optimizing databases \u2014 I bring creativity and precision to every project.",
    "about.h1": "Fast Learner", "about.h1d": "Always exploring new tech",
    "about.h2": "Detail Oriented", "about.h2d": "Pixel-perfect results",
    "about.h3": "Problem Solver", "about.h3d": "Creative & logical thinking",
    "about.personal": "Personal", "about.name_l": "Name", "about.age_l": "Age",
    "about.location_l": "Location", "about.license_l": "License", "about.yes": "Yes",
    "about.contact": "Contact", "about.phone_l": "Phone",
    "about.languages": "Languages",
    "lang.arabic": "Arabic", "lang.native": "Native",
    "lang.french": "French", "lang.fluent": "Fluent",
    "lang.english": "English", "lang.advanced": "Advanced",
    "lang.german": "German", "lang.basic": "Basic",
    "skills.tag": "what I use", "skills.heading": "My <span class=\"gradient-text\">Skills</span>",
    "skills.languages": "Languages", "skills.frameworks": "Frameworks",
    "skills.tools": "Tools & DevOps", "skills.design": "Design & Software",
    "exp.tag": "career journey", "exp.heading": "My <span class=\"gradient-text\">Experience</span>",
    "exp.t1": "Full Stack Developer", "exp.job": "Job",
    "exp.d1": "Building and maintaining full-stack web applications with React, Node.js, and MongoDB.",
    "exp.t2": "Web Development Intern", "exp.intern": "Internship",
    "exp.d2": "Built responsive websites for clients. Hands-on with modern frameworks and agile methodology.",
    "exp.t3": "IT Club Lead", "exp.assoc": "Association",
    "exp.d3": "Organized coding workshops, hackathons, and tech talks.",
    "edu.t1": "Higher Institute of Technological Studies", "edu.s1": "License in Computer Science",
    "edu.d1": "Specialized in software engineering, web development, and database management.",
    "proj.tag": "featured work", "proj.heading": "My <span class=\"gradient-text\">Projects</span>",
    "proj.sub": "A curated showcase of projects that define my craft.",
    "proj.p7t": "SantecAI \u2014 Health Platform", "proj.p7d": "AI-powered healthcare platform with intelligent diagnostics, patient management, and secure authentication.",
    "proj.p1t": "Portfolio Website", "proj.p1d": "Modern cinematic portfolio with particles, glassmorphism, HUD scanner, and silky-smooth animations.",
    "proj.p2t": "E-Commerce Platform", "proj.p2d": "Full-featured online store with cart, checkout, auth, admin dashboard, and real-time inventory.",
    "proj.p3t": "Real-Time Chat App", "proj.p3d": "WebSocket messaging with rooms, file sharing, typing indicators, and end-to-end encryption.",
    "proj.p4t": "Task Management", "proj.p4d": "Kanban board with drag-and-drop, team collaboration, progress tracking, and analytics.",
    "proj.p5t": "AI Content Generator", "proj.p5d": "AI-powered creation tool using OpenAI APIs for blog posts, social media, and marketing copy.",
    "hobby.tag": "my passions", "hobby.heading": "My <span class=\"gradient-text\">Hobbies</span>",
    "hobby.sub": "What I do when I'm not coding.",
    "hobby.gameplay": "GAMEPLAY", "hobby.fps": "FPS",
    "hobby.valo_desc": "Competitive FPS gaming \u2014 tactical shooter with precise aim and team strategy. Nothing beats a clutch ace!",
    "hobby.agent": "Favorite Agent", "hobby.mode": "Game Mode", "hobby.playstyle": "Playstyle",
    "hobby.aggressive": "Aggressive Duelist",
    "music.genre": "Hip-Hop / Rap",
    "contact.tag": "let's connect", "contact.heading": "Get in <span class=\"gradient-text\">Touch</span>",
    "contact.cta": "Let's build something<br/><span class=\"gradient-text\">legendary together.</span>",
    "contact.qr_title": "Scan to Connect", "contact.qr_visit": "Visit Portfolio", "contact.qr_save": "Save Contact",
    "contact.form_title": "Send a Message", "contact.name": "Your Name",
    "contact.subject": "Subject", "contact.message": "Message", "contact.send": "Send Message",
    "footer.text": "Crafted with passion."
  },
  fr: {
    "nav.home": "Accueil", "nav.scanner": "Scan", "nav.about": "\u00c0 propos", "nav.skills": "Comp\u00e9tences",
    "nav.experience": "Exp\u00e9rience", "nav.projects": "Projets", "nav.hobbies": "Loisirs", "nav.contact": "Contact",
    "nav.status": "Disponible",
    "home.badge": "D\u00e9veloppeur Full Stack",
    "home.line1": "Je Cr\u00e9e",
    "home.subtitle": "D\u00e9veloppeur Cr\u00e9atif \u2022 UI Engineer \u2022 Artiste Tech",
    "home.desc": "Je cr\u00e9e des exp\u00e9riences num\u00e9riques exceptionnelles. Sp\u00e9cialis\u00e9 en d\u00e9veloppement full-stack avec une passion pour le code propre.",
    "home.cta1": "VOIR PROJETS", "home.cta2": "ME CONTACTER",
    "home.projects": "Projets", "home.experience": "Ann\u00e9es Exp.", "home.technologies": "Technologies",
    "home.scroll": "Defiler pour explorer",
    "scan.tag": "scan d'identit\u00e9", "scan.heading": "Scan <span class=\"gradient-text\">D\u00e9veloppeur</span>",
    "scan.location": "LIEU", "scan.age_label": "\u00c2GE", "scan.status": "STATUT",
    "scan.available": "DISPONIBLE", "scan.level": "NIVEAU", "scan.expert": "EXPERT",
    "scan.clearance": "AUTORISATION", "scan.full_access": "ACC\u00c8S TOTAL", "scan.confirmed": "\u2713 IDENTIT\u00c9 CONFIRM\u00c9E",
    "about.tag": "qui suis-je", "about.heading": "\u00c0 <span class=\"gradient-text\">Propos</span>",
    "about.quote": "Je transforme les id\u00e9es en produits r\u00e9els gr\u00e2ce \u00e0 un code propre et un design cr\u00e9atif.",
    "about.p1": "Je suis un d\u00e9veloppeur Full Stack passionn\u00e9 de <strong>Tunisie \ud83c\uddf9\ud83c\uddf3</strong>. J'adore cr\u00e9er des applications web modernes et performantes.",
    "about.p2": "Que ce soit la construction d'APIs RESTful, la conception d'interfaces interactives ou l'optimisation de bases de donn\u00e9es \u2014 j'apporte cr\u00e9ativit\u00e9 et pr\u00e9cision.",
    "about.h1": "Apprenant Rapide", "about.h1d": "Toujours en exploration",
    "about.h2": "Souci du D\u00e9tail", "about.h2d": "R\u00e9sultats pixel-perfect",
    "about.h3": "R\u00e9solveur", "about.h3d": "Pens\u00e9e cr\u00e9ative & logique",
    "about.personal": "Personnel", "about.name_l": "Nom", "about.age_l": "\u00c2ge",
    "about.location_l": "Lieu", "about.license_l": "Permis", "about.yes": "Oui",
    "about.contact": "Contact", "about.phone_l": "T\u00e9l\u00e9phone",
    "about.languages": "Langues",
    "lang.arabic": "Arabe", "lang.native": "Natif",
    "lang.french": "Fran\u00e7ais", "lang.fluent": "Courant",
    "lang.english": "Anglais", "lang.advanced": "Avanc\u00e9",
    "lang.german": "Allemand", "lang.basic": "Basique",
    "skills.tag": "mes outils", "skills.heading": "Mes <span class=\"gradient-text\">Comp\u00e9tences</span>",
    "skills.languages": "Langages", "skills.frameworks": "Frameworks",
    "skills.tools": "Outils & DevOps", "skills.design": "Design & Logiciels",
    "exp.tag": "parcours", "exp.heading": "Mon <span class=\"gradient-text\">Exp\u00e9rience</span>",
    "exp.t1": "D\u00e9veloppeur Full Stack", "exp.job": "Emploi",
    "exp.d1": "Construction et maintenance d'applications web full-stack avec React, Node.js et MongoDB.",
    "exp.t2": "Stagiaire D\u00e9veloppement Web", "exp.intern": "Stage",
    "exp.d2": "Construction de sites responsives pour les clients avec des frameworks modernes.",
    "exp.t3": "Responsable Club IT", "exp.assoc": "Association",
    "exp.d3": "Organisation d'ateliers de code, hackathons et conf\u00e9rences tech.",
    "edu.t1": "Institut Sup\u00e9rieur des \u00c9tudes Technologiques", "edu.s1": "Licence en Informatique",
    "edu.d1": "Sp\u00e9cialisation en g\u00e9nie logiciel, d\u00e9veloppement web et gestion de bases de donn\u00e9es.",
    "proj.tag": "travaux", "proj.heading": "Mes <span class=\"gradient-text\">Projets</span>",
    "proj.sub": "Un showcase de projets qui d\u00e9finissent mon savoir-faire.",
    "proj.p7t": "SantecAI \u2014 Plateforme Sant\u00e9", "proj.p7d": "Plateforme sant\u00e9 aliment\u00e9e par l'IA avec diagnostics intelligents.",
    "proj.p1t": "Site Portfolio", "proj.p1d": "Portfolio cin\u00e9matique avec particules, glassmorphisme et animations fluides.",
    "proj.p2t": "Plateforme E-Commerce", "proj.p2d": "Boutique en ligne compl\u00e8te avec panier, paiement et tableau de bord admin.",
    "proj.p3t": "Chat en Temps R\u00e9el", "proj.p3d": "Messagerie WebSocket avec salons, partage de fichiers et chiffrement.",
    "proj.p4t": "Gestion de T\u00e2ches", "proj.p4d": "Tableau Kanban avec glisser-d\u00e9poser et suivi de progr\u00e8s.",
    "proj.p5t": "G\u00e9n\u00e9rateur de Contenu IA", "proj.p5d": "Outil de cr\u00e9ation aliment\u00e9 par OpenAI pour blogs et r\u00e9seaux sociaux.",
    "hobby.tag": "mes passions", "hobby.heading": "Mes <span class=\"gradient-text\">Loisirs</span>",
    "hobby.sub": "Ce que je fais quand je ne code pas.",
    "hobby.gameplay": "GAMEPLAY", "hobby.fps": "FPS",
    "hobby.valo_desc": "FPS comp\u00e9titif \u2014 tir tactique avec vis\u00e9e pr\u00e9cise et strat\u00e9gie d'\u00e9quipe.",
    "hobby.agent": "Agent Pr\u00e9f\u00e9r\u00e9", "hobby.mode": "Mode de Jeu", "hobby.playstyle": "Style de Jeu",
    "hobby.aggressive": "Dueliste Agressif",
    "music.genre": "Hip-Hop / Rap",
    "contact.tag": "connectons-nous", "contact.heading": "Me <span class=\"gradient-text\">Contacter</span>",
    "contact.cta": "Construisons quelque chose de<br/><span class=\"gradient-text\">l\u00e9gendaire ensemble.</span>",
    "contact.qr_title": "Scanner pour Connecter", "contact.qr_visit": "Visiter Portfolio", "contact.qr_save": "Sauvegarder Contact",
    "contact.form_title": "Envoyer un Message", "contact.name": "Votre Nom",
    "contact.subject": "Sujet", "contact.message": "Message", "contact.send": "Envoyer",
    "footer.text": "Cr\u00e9\u00e9 avec passion."
  },
  de: {
    "nav.home": "Start", "nav.scanner": "Scanner", "nav.about": "\u00dcber mich", "nav.skills": "F\u00e4higkeiten",
    "nav.experience": "Erfahrung", "nav.projects": "Projekte", "nav.hobbies": "Hobbys", "nav.contact": "Kontakt",
    "nav.status": "Offen f\u00fcr Arbeit",
    "home.badge": "Full Stack Entwickler",
    "home.line1": "Ich Baue",
    "home.subtitle": "Kreativer Entwickler \u2022 UI Ingenieur \u2022 Tech K\u00fcnstler",
    "home.desc": "Ich erstelle au\u00dfergew\u00f6hnliche digitale Erlebnisse. Spezialisiert auf Full-Stack mit Leidenschaft f\u00fcr sauberen Code.",
    "home.cta1": "PROJEKTE ANSEHEN", "home.cta2": "KONTAKTIEREN",
    "home.projects": "Projekte", "home.experience": "Jahre Erf.", "home.technologies": "Technologien",
    "home.scroll": "Scrollen zum Erkunden",
    "scan.tag": "identit\u00e4tsscan", "scan.heading": "Entwickler <span class=\"gradient-text\">Scan</span>",
    "scan.location": "ORT", "scan.age_label": "ALTER", "scan.status": "STATUS",
    "scan.available": "VERF\u00dcGBAR", "scan.level": "STUFE", "scan.expert": "EXPERTE",
    "scan.clearance": "FREIGABE", "scan.full_access": "VOLLZUGRIFF", "scan.confirmed": "\u2713 IDENTIT\u00c4T BEST\u00c4TIGT",
    "about.tag": "wer ich bin", "about.heading": "\u00dcber <span class=\"gradient-text\">Mich</span>",
    "about.quote": "Ich verwandle Ideen in reale Produkte durch sauberen Code und kreatives Design.",
    "about.p1": "Ich bin leidenschaftlicher Full Stack Entwickler aus <strong>Tunesien \ud83c\uddf9\ud83c\uddf3</strong>. Ich liebe es, moderne Webanwendungen zu erstellen.",
    "about.p2": "Ob RESTful APIs, interaktive UIs oder Datenbankoptimierung \u2014 ich bringe Kreativit\u00e4t und Pr\u00e4zision ein.",
    "about.h1": "Schneller Lerner", "about.h1d": "Immer auf Entdeckungstour",
    "about.h2": "Detailorientiert", "about.h2d": "Pixelgenaue Ergebnisse",
    "about.h3": "Probleml\u00f6ser", "about.h3d": "Kreatives & logisches Denken",
    "about.personal": "Pers\u00f6nlich", "about.name_l": "Name", "about.age_l": "Alter",
    "about.location_l": "Ort", "about.license_l": "F\u00fchrerschein", "about.yes": "Ja",
    "about.contact": "Kontakt", "about.phone_l": "Telefon",
    "about.languages": "Sprachen",
    "lang.arabic": "Arabisch", "lang.native": "Muttersprache",
    "lang.french": "Franz\u00f6sisch", "lang.fluent": "Flie\u00dfend",
    "lang.english": "Englisch", "lang.advanced": "Fortgeschritten",
    "lang.german": "Deutsch", "lang.basic": "Grundkenntnisse",
    "skills.tag": "was ich nutze", "skills.heading": "Meine <span class=\"gradient-text\">F\u00e4higkeiten</span>",
    "skills.languages": "Sprachen", "skills.frameworks": "Frameworks",
    "skills.tools": "Tools & DevOps", "skills.design": "Design & Software",
    "exp.tag": "karriereweg", "exp.heading": "Meine <span class=\"gradient-text\">Erfahrung</span>",
    "exp.t1": "Full Stack Entwickler", "exp.job": "Beruf",
    "exp.d1": "Entwicklung und Wartung von Full-Stack-Webanwendungen mit React, Node.js und MongoDB.",
    "exp.t2": "Webentwicklung Praktikant", "exp.intern": "Praktikum",
    "exp.d2": "Erstellung responsiver Websites f\u00fcr Kunden mit modernen Frameworks.",
    "exp.t3": "IT-Club Leiter", "exp.assoc": "Verein",
    "exp.d3": "Organisation von Coding-Workshops, Hackathons und Tech-Talks.",
    "edu.t1": "Technologische Hochschule", "edu.s1": "Lizenz in Informatik",
    "edu.d1": "Spezialisierung in Softwareentwicklung, Webentwicklung und Datenbankmanagement.",
    "proj.tag": "ausgew\u00e4hlte arbeiten", "proj.heading": "Meine <span class=\"gradient-text\">Projekte</span>",
    "proj.sub": "Ausgew\u00e4hlte Projekte, die mein Handwerk definieren.",
    "proj.p7t": "SantecAI \u2014 Gesundheitsplattform", "proj.p7d": "KI-gest\u00fctzte Gesundheitsplattform mit intelligenter Diagnostik.",
    "proj.p1t": "Portfolio Website", "proj.p1d": "Modernes kinematisches Portfolio mit Partikeln und Animationen.",
    "proj.p2t": "E-Commerce Plattform", "proj.p2d": "Vollst\u00e4ndiger Online-Shop mit Warenkorb und Admin-Dashboard.",
    "proj.p3t": "Echtzeit-Chat-App", "proj.p3d": "WebSocket-Messaging mit R\u00e4umen und Verschl\u00fcsselung.",
    "proj.p4t": "Aufgabenverwaltung", "proj.p4d": "Kanban-Board mit Drag-and-Drop und Analysefunktionen.",
    "proj.p5t": "KI-Content-Generator", "proj.p5d": "KI-gest\u00fctztes Tool mit OpenAI-APIs f\u00fcr Blogbeitr\u00e4ge.",
    "hobby.tag": "meine leidenschaften", "hobby.heading": "Meine <span class=\"gradient-text\">Hobbys</span>",
    "hobby.sub": "Was ich mache, wenn ich nicht programmiere.",
    "hobby.gameplay": "GAMEPLAY", "hobby.fps": "FPS",
    "hobby.valo_desc": "Kompetitiver FPS \u2014 taktischer Shooter mit pr\u00e4zisem Zielen und Teamstrategie.",
    "hobby.agent": "Lieblingsagent", "hobby.mode": "Spielmodus", "hobby.playstyle": "Spielstil",
    "hobby.aggressive": "Aggressiver Duellant",
    "music.genre": "Hip-Hop / Rap",
    "contact.tag": "verbinden wir uns", "contact.heading": "Kontakt <span class=\"gradient-text\">aufnehmen</span>",
    "contact.cta": "Lasst uns etwas<br/><span class=\"gradient-text\">Legend\u00e4res bauen.</span>",
    "contact.qr_title": "Zum Verbinden scannen", "contact.qr_visit": "Portfolio besuchen", "contact.qr_save": "Kontakt speichern",
    "contact.form_title": "Nachricht senden", "contact.name": "Ihr Name",
    "contact.subject": "Betreff", "contact.message": "Nachricht", "contact.send": "Senden",
    "footer.text": "Mit Leidenschaft erstellt."
  },
  ar: {
    "nav.home": "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "nav.scanner": "\u0645\u0627\u0633\u062d", "nav.about": "\u0639\u0646\u064a", "nav.skills": "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a",
    "nav.experience": "\u0627\u0644\u062e\u0628\u0631\u0629", "nav.projects": "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", "nav.hobbies": "\u0627\u0644\u0647\u0648\u0627\u064a\u0627\u062a", "nav.contact": "\u0627\u062a\u0635\u0644 \u0628\u064a",
    "nav.status": "\u0645\u062a\u0627\u062d \u0644\u0644\u0639\u0645\u0644",
    "home.badge": "\u0645\u0637\u0648\u0631 Full Stack",
    "home.line1": "\u0623\u0628\u0646\u064a",
    "home.subtitle": "\u0645\u0637\u0648\u0631 \u0625\u0628\u062f\u0627\u0639\u064a \u2022 \u0645\u0647\u0646\u062f\u0633 \u0648\u0627\u062c\u0647\u0627\u062a \u2022 \u0641\u0646\u0627\u0646 \u062a\u0642\u0646\u064a",
    "home.desc": "\u0623\u0635\u0646\u0639 \u062a\u062c\u0627\u0631\u0628 \u0631\u0642\u0645\u064a\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629. \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 full-stack \u0645\u0639 \u0634\u063a\u0641 \u0628\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0646\u0638\u064a\u0641.",
    "home.cta1": "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", "home.cta2": "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a",
    "home.projects": "\u0645\u0634\u0627\u0631\u064a\u0639", "home.experience": "\u0633\u0646\u0648\u0627\u062a \u062e\u0628\u0631\u0629", "home.technologies": "\u062a\u0642\u0646\u064a\u0627\u062a",
    "home.scroll": "\u0645\u0631\u0631 \u0644\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641",
    "scan.tag": "\u0645\u0633\u062d \u0627\u0644\u0647\u0648\u064a\u0629", "scan.heading": "\u0645\u0633\u062d <span class=\"gradient-text\">\u0627\u0644\u0645\u0637\u0648\u0631</span>",
    "scan.location": "\u0627\u0644\u0645\u0648\u0642\u0639", "scan.age_label": "\u0627\u0644\u0639\u0645\u0631", "scan.status": "\u0627\u0644\u062d\u0627\u0644\u0629",
    "scan.available": "\u0645\u062a\u0627\u062d", "scan.level": "\u0627\u0644\u0645\u0633\u062a\u0648\u0649", "scan.expert": "\u062e\u0628\u064a\u0631",
    "scan.clearance": "\u0627\u0644\u062a\u0635\u0631\u064a\u062d", "scan.full_access": "\u0648\u0635\u0648\u0644 \u0643\u0627\u0645\u0644", "scan.confirmed": "\u2713 \u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0647\u0648\u064a\u0629",
    "about.tag": "\u0645\u0646 \u0623\u0646\u0627", "about.heading": "<span class=\"gradient-text\">\u0639\u0646\u064a</span>",
    "about.quote": "\u0623\u062d\u0648\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0643\u0648\u062f \u0646\u0638\u064a\u0641 \u0648\u062a\u0635\u0645\u064a\u0645 \u0625\u0628\u062f\u0627\u0639\u064a.",
    "about.p1": "\u0623\u0646\u0627 \u0645\u0637\u0648\u0631 Full Stack \u0634\u063a\u0648\u0641 \u0645\u0646 <strong>\u062a\u0648\u0646\u0633 \ud83c\uddf9\ud83c\uddf3</strong>. \u0623\u062d\u0628 \u0625\u0646\u0634\u0627\u0621 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u062d\u062f\u064a\u062b\u0629 \u0648\u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u0623\u062f\u0627\u0621.",
    "about.p2": "\u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0628\u0646\u0627\u0621 APIs \u0623\u0648 \u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u2014 \u0623\u0642\u062f\u0645 \u0627\u0644\u0625\u0628\u062f\u0627\u0639 \u0648\u0627\u0644\u062f\u0642\u0629 \u0641\u064a \u0643\u0644 \u0645\u0634\u0631\u0648\u0639.",
    "about.h1": "\u0645\u062a\u0639\u0644\u0645 \u0633\u0631\u064a\u0639", "about.h1d": "\u0623\u0633\u062a\u0643\u0634\u0641 \u062a\u0642\u0646\u064a\u0627\u062a \u062c\u062f\u064a\u062f\u0629 \u062f\u0627\u0626\u0645\u0627\u064b",
    "about.h2": "\u062f\u0642\u064a\u0642 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644", "about.h2d": "\u0646\u062a\u0627\u0626\u062c \u0645\u062b\u0627\u0644\u064a\u0629",
    "about.h3": "\u062d\u0644\u0627\u0644 \u0645\u0634\u0627\u0643\u0644", "about.h3d": "\u062a\u0641\u0643\u064a\u0631 \u0625\u0628\u062f\u0627\u0639\u064a \u0648\u0645\u0646\u0637\u0642\u064a",
    "about.personal": "\u0634\u062e\u0635\u064a", "about.name_l": "\u0627\u0644\u0627\u0633\u0645", "about.age_l": "\u0627\u0644\u0639\u0645\u0631",
    "about.location_l": "\u0627\u0644\u0645\u0648\u0642\u0639", "about.license_l": "\u0631\u062e\u0635\u0629 \u0642\u064a\u0627\u062f\u0629", "about.yes": "\u0646\u0639\u0645",
    "about.contact": "\u0627\u062a\u0635\u0627\u0644", "about.phone_l": "\u0647\u0627\u062a\u0641",
    "about.languages": "\u0627\u0644\u0644\u063a\u0627\u062a",
    "lang.arabic": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", "lang.native": "\u0644\u063a\u0629 \u0623\u0645",
    "lang.french": "\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629", "lang.fluent": "\u0637\u0644\u064a\u0642",
    "lang.english": "\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629", "lang.advanced": "\u0645\u062a\u0642\u062f\u0645",
    "lang.german": "\u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064a\u0629", "lang.basic": "\u0623\u0633\u0627\u0633\u064a",
    "skills.tag": "\u0645\u0627 \u0623\u0633\u062a\u062e\u062f\u0645", "skills.heading": "<span class=\"gradient-text\">\u0645\u0647\u0627\u0631\u0627\u062a\u064a</span>",
    "skills.languages": "\u0644\u063a\u0627\u062a \u0628\u0631\u0645\u062c\u0629", "skills.frameworks": "\u0623\u0637\u0631 \u0639\u0645\u0644",
    "skills.tools": "\u0623\u062f\u0648\u0627\u062a & DevOps", "skills.design": "\u062a\u0635\u0645\u064a\u0645 & \u0628\u0631\u0627\u0645\u062c",
    "exp.tag": "\u0645\u0633\u064a\u0631\u0629 \u0645\u0647\u0646\u064a\u0629", "exp.heading": "<span class=\"gradient-text\">\u062e\u0628\u0631\u062a\u064a</span>",
    "exp.t1": "\u0645\u0637\u0648\u0631 Full Stack", "exp.job": "\u0648\u0638\u064a\u0641\u0629",
    "exp.d1": "\u0628\u0646\u0627\u0621 \u0648\u0635\u064a\u0627\u0646\u0629 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u0643\u0627\u0645\u0644\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648 Node.js \u0648 MongoDB.",
    "exp.t2": "\u0645\u062a\u062f\u0631\u0628 \u062a\u0637\u0648\u064a\u0631 \u0648\u064a\u0628", "exp.intern": "\u062a\u062f\u0631\u064a\u0628",
    "exp.d2": "\u0628\u0646\u0627\u0621 \u0645\u0648\u0627\u0642\u0639 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u0637\u0631 \u062d\u062f\u064a\u062b\u0629.",
    "exp.t3": "\u0631\u0626\u064a\u0633 \u0646\u0627\u062f\u064a \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a", "exp.assoc": "\u062c\u0645\u0639\u064a\u0629",
    "exp.d3": "\u062a\u0646\u0638\u064a\u0645 \u0648\u0631\u0634 \u0628\u0631\u0645\u062c\u0629 \u0648\u0647\u0627\u0643\u0627\u062b\u0648\u0646 \u0648\u0645\u062d\u0627\u062f\u062b\u0627\u062a \u062a\u0642\u0646\u064a\u0629.",
    "edu.t1": "\u0627\u0644\u0645\u0639\u0647\u062f \u0627\u0644\u0639\u0627\u0644\u064a \u0644\u0644\u062f\u0631\u0627\u0633\u0627\u062a \u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0629", "edu.s1": "\u0625\u062c\u0627\u0632\u0629 \u0641\u064a \u0639\u0644\u0648\u0645 \u0627\u0644\u062d\u0627\u0633\u0648\u0628",
    "edu.d1": "\u062a\u062e\u0635\u0635 \u0641\u064a \u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0625\u062f\u0627\u0631\u0629 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.",
    "proj.tag": "\u0623\u0639\u0645\u0627\u0644 \u0645\u0645\u064a\u0632\u0629", "proj.heading": "<span class=\"gradient-text\">\u0645\u0634\u0627\u0631\u064a\u0639\u064a</span>",
    "proj.sub": "\u0639\u0631\u0636 \u0645\u062e\u062a\u0627\u0631 \u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u064a \u062a\u0639\u0631\u0641 \u062d\u0631\u0641\u062a\u064a.",
    "proj.p7t": "SantecAI \u2014 \u0645\u0646\u0635\u0629 \u0635\u062d\u064a\u0629", "proj.p7d": "\u0645\u0646\u0635\u0629 \u0631\u0639\u0627\u064a\u0629 \u0635\u062d\u064a\u0629 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.",
    "proj.p1t": "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062d\u0641\u0638\u0629", "proj.p1d": "\u0645\u062d\u0641\u0638\u0629 \u0633\u064a\u0646\u0645\u0627\u0626\u064a\u0629 \u062d\u062f\u064a\u062b\u0629 \u0645\u0639 \u062c\u0632\u064a\u0626\u0627\u062a \u0648\u0631\u0633\u0648\u0645 \u0645\u062a\u062d\u0631\u0643\u0629.",
    "proj.p2t": "\u0645\u0646\u0635\u0629 \u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629", "proj.p2d": "\u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0643\u0627\u0645\u0644 \u0645\u0639 \u0633\u0644\u0629 \u0648\u062f\u0641\u0639 \u0648\u0644\u0648\u062d\u0629 \u0625\u062f\u0627\u0631\u0629.",
    "proj.p3t": "\u062a\u0637\u0628\u064a\u0642 \u062f\u0631\u062f\u0634\u0629 \u0641\u0648\u0631\u064a\u0629", "proj.p3d": "\u0631\u0633\u0627\u0626\u0644 WebSocket \u0645\u0639 \u063a\u0631\u0641 \u0648\u0645\u0634\u0627\u0631\u0643\u0629 \u0645\u0644\u0641\u0627\u062a.",
    "proj.p4t": "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0647\u0627\u0645", "proj.p4d": "\u0644\u0648\u062d\u0629 Kanban \u0645\u0639 \u0633\u062d\u0628 \u0648\u0625\u0641\u0644\u0627\u062a \u0648\u062a\u062a\u0628\u0639 \u0627\u0644\u062a\u0642\u062f\u0645.",
    "proj.p5t": "\u0645\u0648\u0644\u062f \u0645\u062d\u062a\u0648\u0649 \u0630\u0643\u064a", "proj.p5d": "\u0623\u062f\u0627\u0629 \u0625\u0646\u0634\u0627\u0621 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0639\u0628\u0631 OpenAI.",
    "hobby.tag": "\u0634\u063a\u0641\u064a", "hobby.heading": "<span class=\"gradient-text\">\u0647\u0648\u0627\u064a\u0627\u062a\u064a</span>",
    "hobby.sub": "\u0645\u0627 \u0623\u0641\u0639\u0644\u0647 \u0639\u0646\u062f\u0645\u0627 \u0644\u0627 \u0623\u0628\u0631\u0645\u062c.",
    "hobby.gameplay": "\u0644\u0639\u0628", "hobby.fps": "\u062a\u0635\u0648\u064a\u0628",
    "hobby.valo_desc": "\u0644\u0639\u0628\u0629 \u062a\u0635\u0648\u064a\u0628 \u062a\u0646\u0627\u0641\u0633\u064a\u0629 \u2014 \u062a\u0643\u062a\u064a\u0643\u064a\u0629 \u0645\u0639 \u062a\u0635\u0648\u064a\u0628 \u062f\u0642\u064a\u0642 \u0648\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0641\u0631\u064a\u0642.",
    "hobby.agent": "\u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0644\u0645\u0641\u0636\u0644", "hobby.mode": "\u0648\u0636\u0639 \u0627\u0644\u0644\u0639\u0628", "hobby.playstyle": "\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0644\u0639\u0628",
    "hobby.aggressive": "\u0645\u0628\u0627\u0631\u0632 \u0647\u062c\u0648\u0645\u064a",
    "music.genre": "\u0647\u064a\u0628 \u0647\u0648\u0628 / \u0631\u0627\u0628",
    "contact.tag": "\u062a\u0648\u0627\u0635\u0644", "contact.heading": "<span class=\"gradient-text\">\u062a\u0648\u0627\u0635\u0644</span> \u0645\u0639\u064a",
    "contact.cta": "\u062f\u0639\u0646\u0627 \u0646\u0628\u0646\u064a \u0634\u064a\u0626\u0627\u064b<br/><span class=\"gradient-text\">\u0623\u0633\u0637\u0648\u0631\u064a\u0627\u064b \u0645\u0639\u0627\u064b.</span>",
    "contact.qr_title": "\u0627\u0645\u0633\u062d \u0644\u0644\u062a\u0648\u0627\u0635\u0644", "contact.qr_visit": "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u0641\u0638\u0629", "contact.qr_save": "\u062d\u0641\u0638 \u062c\u0647\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644",
    "contact.form_title": "\u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u0629", "contact.name": "\u0627\u0633\u0645\u0643",
    "contact.subject": "\u0627\u0644\u0645\u0648\u0636\u0648\u0639", "contact.message": "\u0627\u0644\u0631\u0633\u0627\u0644\u0629", "contact.send": "\u0625\u0631\u0633\u0627\u0644",
    "footer.text": "\u0635\u064f\u0646\u0639 \u0628\u0634\u063a\u0641."
  }
};

// ==================== STATE ====================
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentSection = 'home';

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initLanguage();
  initNavigation();
  initMobileMenu();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initParticles();
  initCursor();
  initMagnetic();
  initSkillBars();
  initRadialMeters();
  initContactForm();
  initKeyboard();
  initQRCodes();
  initTiltCards();
  initMusicPlayer();
  initRipple();
  initFPS();
  // Lucide icons
  if (window.lucide) window.lucide.createIcons();
});

// ==================== PRELOADER ====================
function initPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      el.classList.add('done');
      setTimeout(() => el.remove(), 800);
    }, 1200);
  });
  // Fallback
  setTimeout(() => { el.classList.add('done'); }, 4000);
}

// ==================== THEME ====================
function initTheme() {
  applyTheme(currentTheme);
  document.querySelectorAll('#theme-toggle, #theme-toggle-m').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  });
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// ==================== LANGUAGE ====================
function initLanguage() {
  applyLanguage(currentLang);
  const btn = document.getElementById('lang-btn');
  const dd = document.getElementById('lang-dropdown');
  if (btn && dd) {
    btn.addEventListener('click', (e) => { e.stopPropagation(); dd.classList.toggle('open'); });
    document.addEventListener('click', () => dd.classList.remove('open'));
    dd.addEventListener('click', e => e.stopPropagation());
    dd.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.dataset.lang;
        currentLang = lang;
        applyLanguage(lang);
        localStorage.setItem('lang', lang);
        dd.classList.remove('open');
        dd.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        document.getElementById('lang-current').textContent = lang.toUpperCase();
      });
    });
  }
  // Set initial active option
  const activeLangOpt = dd?.querySelector(`[data-lang="${currentLang}"]`);
  if (activeLangOpt) {
    dd.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
    activeLangOpt.classList.add('active');
  }
  const langCurrent = document.getElementById('lang-current');
  if (langCurrent) langCurrent.textContent = currentLang.toUpperCase();
}

function applyLanguage(lang) {
  const strings = T[lang] || T.en;
  const isRTL = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = strings[key];
      } else {
        el.innerHTML = strings[key];
      }
    }
  });
  if (window.lucide) window.lucide.createIcons();
}

// ==================== NAVIGATION ====================
function initNavigation() {
  const links = document.querySelectorAll('.nav-link[data-section]');
  const pages = document.querySelectorAll('.page');
  const ctaLinks = document.querySelectorAll('[data-nav]');

  function navigate(sectionId) {
    pages.forEach(p => p.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    const target = document.getElementById(sectionId);
    const link = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (target) {
      target.classList.add('active');
      currentSection = sectionId;
      const scroll = document.getElementById('main-scroll');
      if (scroll) scroll.scrollTop = 0;
      // Trigger scroll reveal for new page
      setTimeout(() => triggerScrollReveal(), 100);
      // Re-trigger animations
      triggerRadialMeters();
      triggerLangBars();
    }
    if (link) link.classList.add('active');
    // Close mobile menu
    closeMobile();
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.section);
    });
  });

  ctaLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.nav);
    });
  });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  if (!hamburger || !sidebar) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
  });
  if (overlay) overlay.addEventListener('click', closeMobile);
}
function closeMobile() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  hamburger?.classList.remove('open');
  sidebar?.classList.remove('open');
  overlay?.classList.remove('open');
}

// ==================== SCROLL PROGRESS ====================
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  const scroll = document.getElementById('main-scroll');
  if (!bar || !scroll) return;
  scroll.addEventListener('scroll', () => {
    const pct = scroll.scrollTop / (scroll.scrollHeight - scroll.clientHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  });
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
  const scroll = document.getElementById('main-scroll');
  if (!scroll) return;
  scroll.addEventListener('scroll', triggerScrollReveal);
  setTimeout(triggerScrollReveal, 200);
}
function triggerScrollReveal() {
  const scroll = document.getElementById('main-scroll');
  if (!scroll) return;
  const elements = document.querySelectorAll('.page.active .scroll-reveal');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const scrollRect = scroll.getBoundingClientRect();
    if (rect.top < scrollRect.bottom - 40) {
      el.classList.add('visible');
    }
  });
  // Also trigger langBar fill and radial meters
  triggerLangBars();
  triggerRadialMeters();
}

// ==================== COUNTERS ====================
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCount(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}
function animateCount(el, target) {
  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current + '+';
  }, 30);
}

// ==================== PARTICLES ====================
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.3 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const col = isDark ? '0,240,255' : '0,100,200';

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${p.a})`;
      ctx.fill();
    });

    // Lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${col},${0.06 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ==================== CURSOR ====================
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  if (!cursor || !trail) return;
  if (window.innerWidth < 768) return;

  let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Hover effect
  const hoverTargets = 'a, button, .cta-btn, .pill, .nav-link, .proj-card, .hobby-card, .mini-track, input, textarea';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ==================== MAGNETIC ====================
function initMagnetic() {
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ==================== SKILL BARS ====================
function initSkillBars() {
  // HUD bars in scanner + lang bars in about
  // These animate on scroll visibility
}

function triggerLangBars() {
  document.querySelectorAll('.lang-bar-fill').forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      fill.classList.add('visible');
    }
  });
}

// ==================== RADIAL METERS ====================
function initRadialMeters() {
  // Will be triggered by scroll reveal
}
function triggerRadialMeters() {
  document.querySelectorAll('.skill-radial').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const data = new FormData(form);
    const name = data.get('name');

    // Simulate send
    status.className = 'form-status-msg success';
    const msgs = {
      en: `Thanks ${name}! Message sent successfully.`,
      fr: `Merci ${name} ! Message envoyé avec succès.`,
      de: `Danke ${name}! Nachricht erfolgreich gesendet.`,
      ar: `شكراً ${name}! تم إرسال الرسالة بنجاح.`
    };
    status.textContent = msgs[currentLang] || msgs.en;
    form.reset();
    setTimeout(() => { status.className = 'form-status-msg'; }, 5000);
  });
}

// ==================== KEYBOARD SHORTCUTS ====================
function initKeyboard() {
  const sections = ['home', 'scanner', 'about', 'skills', 'experience', 'projects', 'hobbies', 'contact'];
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const num = parseInt(e.key);
    if (num >= 1 && num <= 8) {
      e.preventDefault();
      const link = document.querySelector(`.nav-link[data-section="${sections[num - 1]}"]`);
      if (link) link.click();
    }
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      const idx = sections.indexOf(currentSection);
      const next = sections[(idx + 1) % sections.length];
      const link = document.querySelector(`.nav-link[data-section="${next}"]`);
      if (link) link.click();
    }
  });
}

// ==================== QR CODES ====================
function initQRCodes() {
  const portfolioUrl = 'https://portfilio-one.vercel.app';
  const vcardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Rayen Chraiet\nTEL:+21694599198\nEMAIL:rayenchraiet2000@gmail.com\nURL:${portfolioUrl}\nEND:VCARD`;

  const qrPortfolio = document.getElementById('qr-portfolio');
  const qrVcard = document.getElementById('qr-vcard');

  if (qrPortfolio && typeof QRCode !== 'undefined') {
    new QRCode(qrPortfolio, { text: portfolioUrl, width: 100, height: 100, colorDark: '#00f0ff', colorLight: '#030014', correctLevel: QRCode.CorrectLevel.L });
  }
  if (qrVcard && typeof QRCode !== 'undefined') {
    new QRCode(qrVcard, { text: vcardData, width: 100, height: 100, colorDark: '#00ff88', colorLight: '#030014', correctLevel: QRCode.CorrectLevel.L });
  }
}

// ==================== TILT CARDS ====================
function initTiltCards() {
  const cards = document.querySelectorAll('.proj-card, .hobby-card, .info-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ==================== MUSIC PLAYER ====================
function initMusicPlayer() {
  const audio = document.getElementById('audio-el');
  const playerWrap = document.getElementById('music-player');
  const toggle = document.getElementById('player-toggle');
  const panel = document.getElementById('player-panel');
  const playBtn = document.getElementById('player-play');
  const progressBar = document.getElementById('player-progress-bar');
  const progressFill = document.getElementById('player-progress-fill');
  const currentTime = document.getElementById('player-current');
  const duration = document.getElementById('player-duration');
  const volumeSlider = document.getElementById('player-vol');

  if (!audio || !playerWrap) return;

  audio.volume = 0.6;

  // Toggle panel
  if (toggle) {
    toggle.addEventListener('click', () => {
      panel?.classList.toggle('open');
    });
  }

  // Play / Pause
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().catch(() => {});
        playerWrap.classList.add('playing');
      } else {
        audio.pause();
        playerWrap.classList.remove('playing');
      }
    });
  }

  // Track playable from hobbies
  document.querySelectorAll('.track-playable').forEach(track => {
    track.addEventListener('click', () => {
      const src = track.dataset.track;
      if (src && audio.querySelector('source')) {
        audio.querySelector('source').src = src;
        audio.load();
        audio.play().catch(() => {});
        playerWrap.classList.add('playing');
        panel?.classList.add('open');
      }
    });
  });

  // Progress
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if (progressFill) progressFill.style.width = pct + '%';
    if (currentTime) currentTime.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    if (duration) duration.textContent = formatTime(audio.duration);
  });

  // Seek
  if (progressBar) {
    progressBar.addEventListener('click', e => {
      const rect = progressBar.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      if (audio.duration) audio.currentTime = pct * audio.duration;
    });
  }

  // Volume
  if (volumeSlider) {
    volumeSlider.addEventListener('input', () => {
      audio.volume = volumeSlider.value / 100;
    });
  }

  // On end
  audio.addEventListener('ended', () => {
    playerWrap.classList.remove('playing');
    if (progressFill) progressFill.style.width = '0%';
  });
}

function formatTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

// ==================== RIPPLE ====================
function initRipple() {
  document.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:fixed;left:${e.clientX}px;top:${e.clientY}px;
      width:0;height:0;border-radius:50%;
      background:rgba(0,240,255,.15);pointer-events:none;
      transform:translate(-50%,-50%);z-index:9999;
      animation:rippleOut .6s ease forwards;
    `;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  // Add ripple animation style
  const style = document.createElement('style');
  style.textContent = '@keyframes rippleOut{to{width:80px;height:80px;opacity:0}}';
  document.head.appendChild(style);
}

// ==================== FPS COUNTER ====================
function initFPS() {
  const el = document.getElementById('fps-counter');
  if (!el) return;
  let frames = 0, lastTime = performance.now();
  function count() {
    frames++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
      el.textContent = frames + ' FPS';
      frames = 0;
      lastTime = now;
    }
    requestAnimationFrame(count);
  }
  requestAnimationFrame(count);
}
