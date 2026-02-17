/* ======================================================
   GTA VI MIAMI NEON PORTFOLIO — js/script.js
   Rayen Chraiet — 2026
   ====================================================== */

/* ========== i18n TRANSLATIONS ========== */
const TRANSLATIONS = {
  en: {
    'nav.home':'Home','nav.scanner':'Scanner','nav.about':'About','nav.skills':'Skills',
    'nav.experience':'Experience','nav.projects':'Projects','nav.contact':'Contact','nav.status':'Open to work',
    'home.badge':'Full Stack Developer','home.greeting':'Hi, I\'m','home.desc':'I build exceptional digital experiences. Specializing in full-stack development with a passion for clean code, stunning interfaces, and seamless user experiences.',
    'home.cta1':'Let\'s Talk','home.cta2':'View Work','home.projects':'Projects','home.experience':'Years Exp.','home.technologies':'Technologies','home.scroll':'Scroll to explore',
    'scan.tag':'identity scan','scan.heading':'Developer <span class="gradient-text">Scan</span>',
    'scan.location':'LOCATION','scan.age_label':'AGE','scan.status':'STATUS','scan.available':'AVAILABLE',
    'scan.level':'LEVEL','scan.expert':'EXPERT','scan.clearance':'CLEARANCE','scan.full_access':'FULL ACCESS',
    'scan.confirmed':'\u2713 IDENTITY CONFIRMED',
    'about.tag':'who I am','about.heading':'About <span class="gradient-text">Me</span>',
    'about.quote':'I turn ideas into real-world products through clean code and creative design.',
    'about.p1':'I\'m a passionate Full Stack Developer from <strong>Tunisia \ud83c\uddf9\ud83c\uddf3</strong>. I love crafting modern, responsive, and high-performance web applications.',
    'about.p2':'Whether it\'s building RESTful APIs, designing interactive UIs, or optimizing databases \u2014 I bring creativity and precision to every project.',
    'about.h1':'Fast Learner','about.h1d':'Always exploring new tech',
    'about.h2':'Detail Oriented','about.h2d':'Pixel-perfect results',
    'about.h3':'Problem Solver','about.h3d':'Creative & logical thinking',
    'about.personal':'Personal','about.contact':'Contact','about.languages':'Languages',
    'about.name_l':'Name','about.age_l':'Age','about.location_l':'Location','about.license_l':'License','about.yes':'Yes',
    'about.phone_l':'Phone',
    'lang.arabic':'Arabic','lang.french':'French','lang.english':'English','lang.german':'German',
    'lang.native':'Native','lang.fluent':'Fluent','lang.advanced':'Advanced','lang.basic':'Basic',
    'skills.tag':'what I use','skills.heading':'My <span class="gradient-text">Skills</span>',
    'skills.languages':'Languages','skills.frameworks':'Frameworks','skills.tools':'Tools & DevOps','skills.design':'Design & Software',
    'exp.tag':'career journey','exp.heading':'My <span class="gradient-text">Experience</span>',
    'exp.t1':'Full Stack Developer','exp.d1':'Building and maintaining full-stack web applications with React, Node.js, and MongoDB.',
    'exp.t2':'Web Development Intern','exp.d2':'Built responsive websites for clients. Hands-on with modern frameworks and agile methodology.',
    'exp.t3':'IT Club Lead','exp.d3':'Organized coding workshops, hackathons, and tech talks.',
    'exp.job':'Job','exp.intern':'Internship','exp.assoc':'Association',
    'edu.t1':'Higher Institute of Technological Studies','edu.s1':'License in Computer Science',
    'edu.d1':'Specialized in software engineering, web development, and database management.',
    'proj.tag':'featured work','proj.heading':'My <span class="gradient-text">Projects</span>',
    'proj.sub':'A curated showcase of projects that define my craft.',
    'proj.p7t':'SantecAI \u2014 Health Platform','proj.p7d':'AI-powered healthcare platform with intelligent diagnostics, patient management, and secure authentication.',
    'proj.p1t':'Portfolio Website','proj.p1d':'Modern animated portfolio with cinematic design, particles, glassmorphism, and silky-smooth animations.',
    'proj.p2t':'E-Commerce Platform','proj.p2d':'Full-featured online store with cart, checkout, auth, admin dashboard, and real-time inventory.',
    'proj.p3t':'Real-Time Chat App','proj.p3d':'WebSocket messaging with rooms, file sharing, typing indicators, and end-to-end encryption.',
    'proj.p4t':'Task Management','proj.p4d':'Kanban board with drag-and-drop, team collaboration, progress tracking, and analytics.',
    'proj.p5t':'AI Content Generator','proj.p5d':'AI-powered creation tool using OpenAI APIs for blog posts, social media, and marketing copy.',
    'contact.tag':'let\'s connect','contact.heading':'Get in <span class="gradient-text">Touch</span>',
    'contact.cta':'Have a project in mind?<br/><span class="gradient-text">Let\'s build it together.</span>',
    'contact.qr_title':'Scan to Connect','contact.qr_visit':'Visit Portfolio','contact.qr_save':'Save Contact','contact.qr_vcard':'vCard',
    'contact.form_title':'Send a Message','contact.name':'Your Name','contact.subject':'Subject','contact.message':'Message','contact.send':'Send Message',
    'contact.success':'Message sent successfully!','contact.error':'Oops! Something went wrong.',
    'footer.text':'Crafted with passion.'
  },
  fr: {
    'nav.home':'Accueil','nav.scanner':'Scanner','nav.about':'\u00c0 propos','nav.skills':'Comp\u00e9tences',
    'nav.experience':'Exp\u00e9rience','nav.projects':'Projets','nav.contact':'Contact','nav.status':'Ouvert aux offres',
    'home.badge':'D\u00e9veloppeur Full Stack','home.greeting':'Salut, je suis','home.desc':'Je cr\u00e9e des exp\u00e9riences num\u00e9riques exceptionnelles. Sp\u00e9cialis\u00e9 en d\u00e9veloppement full-stack avec une passion pour le code propre et les interfaces modernes.',
    'home.cta1':'Parlons-en','home.cta2':'Voir mes projets','home.projects':'Projets','home.experience':'Ans d\'exp.','home.technologies':'Technologies','home.scroll':'D\u00e9filez pour explorer',
    'scan.tag':'scan d\'identit\u00e9','scan.heading':'Scan <span class="gradient-text">D\u00e9veloppeur</span>',
    'scan.location':'LOCALISATION','scan.age_label':'\u00c2GE','scan.status':'STATUT','scan.available':'DISPONIBLE',
    'scan.level':'NIVEAU','scan.expert':'EXPERT','scan.clearance':'ACC\u00c8S','scan.full_access':'ACC\u00c8S COMPLET',
    'scan.confirmed':'\u2713 IDENTIT\u00c9 CONFIRM\u00c9E',
    'about.tag':'qui je suis','about.heading':'\u00c0 <span class="gradient-text">Propos</span>',
    'about.quote':'Je transforme les id\u00e9es en produits r\u00e9els gr\u00e2ce \u00e0 un code propre et un design cr\u00e9atif.',
    'about.p1':'Je suis un d\u00e9veloppeur Full Stack passionn\u00e9 de <strong>Tunisie \ud83c\uddf9\ud83c\uddf3</strong>. J\'aime cr\u00e9er des applications web modernes et performantes.',
    'about.p2':'Qu\'il s\'agisse de cr\u00e9er des APIs, de concevoir des interfaces ou d\'optimiser des bases de donn\u00e9es \u2014 j\'apporte cr\u00e9ativit\u00e9 et pr\u00e9cision \u00e0 chaque projet.',
    'about.h1':'Apprentissage rapide','about.h1d':'Toujours \u00e0 explorer de nouvelles tech',
    'about.h2':'Souci du d\u00e9tail','about.h2d':'R\u00e9sultats pixel-perfect',
    'about.h3':'R\u00e9solveur de probl\u00e8mes','about.h3d':'Pens\u00e9e cr\u00e9ative & logique',
    'about.personal':'Personnel','about.contact':'Contact','about.languages':'Langues',
    'about.name_l':'Nom','about.age_l':'\u00c2ge','about.location_l':'Localisation','about.license_l':'Permis','about.yes':'Oui',
    'about.phone_l':'T\u00e9l\u00e9phone',
    'lang.arabic':'Arabe','lang.french':'Fran\u00e7ais','lang.english':'Anglais','lang.german':'Allemand',
    'lang.native':'Natif','lang.fluent':'Courant','lang.advanced':'Avanc\u00e9','lang.basic':'Basique',
    'skills.tag':'ce que j\'utilise','skills.heading':'Mes <span class="gradient-text">Comp\u00e9tences</span>',
    'skills.languages':'Langages','skills.frameworks':'Frameworks','skills.tools':'Outils & DevOps','skills.design':'Design & Logiciels',
    'exp.tag':'parcours professionnel','exp.heading':'Mon <span class="gradient-text">Exp\u00e9rience</span>',
    'exp.t1':'D\u00e9veloppeur Full Stack','exp.d1':'Cr\u00e9ation et maintenance d\'applications web full-stack avec React, Node.js et MongoDB.',
    'exp.t2':'Stagiaire D\u00e9veloppement Web','exp.d2':'Cr\u00e9ation de sites web r\u00e9actifs. Exp\u00e9rience avec les frameworks modernes et la m\u00e9thodologie agile.',
    'exp.t3':'Responsable Club IT','exp.d3':'Organisation d\'ateliers, hackathons et conf\u00e9rences tech.',
    'exp.job':'Emploi','exp.intern':'Stage','exp.assoc':'Association',
    'edu.t1':'Institut Sup\u00e9rieur des \u00c9tudes Technologiques','edu.s1':'Licence en Informatique',
    'edu.d1':'Sp\u00e9cialisation en g\u00e9nie logiciel, d\u00e9veloppement web et gestion de bases de donn\u00e9es.',
    'proj.tag':'travaux en vedette','proj.heading':'Mes <span class="gradient-text">Projets</span>',
    'proj.sub':'Une s\u00e9lection de projets qui d\u00e9finissent mon savoir-faire.',
    'proj.p7t':'SantecAI \u2014 Plateforme Sant\u00e9','proj.p7d':'Plateforme de sant\u00e9 aliment\u00e9e par l\'IA avec diagnostics intelligents et gestion des patients.',
    'proj.p1t':'Site Portfolio','proj.p1d':'Portfolio anim\u00e9 avec design cin\u00e9matique, particules et animations fluides.',
    'proj.p2t':'Plateforme E-Commerce','proj.p2d':'Boutique en ligne compl\u00e8te avec panier, paiement et panneau d\'administration.',
    'proj.p3t':'Chat en Temps R\u00e9el','proj.p3d':'Messagerie WebSocket avec salons, partage de fichiers et chiffrement de bout en bout.',
    'proj.p4t':'Gestion des T\u00e2ches','proj.p4d':'Tableau Kanban avec glisser-d\u00e9poser, suivi d\'avancement et analytiques.',
    'proj.p5t':'G\u00e9n\u00e9rateur de Contenu IA','proj.p5d':'Outil de cr\u00e9ation aliment\u00e9 par l\'IA pour articles de blog et r\u00e9seaux sociaux.',
    'contact.tag':'restons en contact','contact.heading':'Me <span class="gradient-text">Contacter</span>',
    'contact.cta':'Vous avez un projet en t\u00eate ?<br/><span class="gradient-text">Construisons-le ensemble.</span>',
    'contact.qr_title':'Scanner pour se connecter','contact.qr_visit':'Visiter le Portfolio','contact.qr_save':'Enregistrer le Contact','contact.qr_vcard':'vCard',
    'contact.form_title':'Envoyer un message','contact.name':'Votre Nom','contact.subject':'Sujet','contact.message':'Message','contact.send':'Envoyer',
    'contact.success':'Message envoy\u00e9 avec succ\u00e8s !','contact.error':'Oups ! Quelque chose s\'est mal pass\u00e9.',
    'footer.text':'Cr\u00e9\u00e9 avec passion.'
  },
  de: {
    'nav.home':'Startseite','nav.scanner':'Scanner','nav.about':'\u00dcber mich','nav.skills':'F\u00e4higkeiten',
    'nav.experience':'Erfahrung','nav.projects':'Projekte','nav.contact':'Kontakt','nav.status':'Offen f\u00fcr Arbeit',
    'home.badge':'Full Stack Entwickler','home.greeting':'Hallo, ich bin','home.desc':'Ich baue au\u00dfergew\u00f6hnliche digitale Erlebnisse. Spezialisiert auf Full-Stack-Entwicklung mit Leidenschaft f\u00fcr sauberen Code und moderne Interfaces.',
    'home.cta1':'Kontakt','home.cta2':'Arbeiten ansehen','home.projects':'Projekte','home.experience':'Jahre Erf.','home.technologies':'Technologien','home.scroll':'Scrollen zum Erkunden',
    'scan.tag':'identit\u00e4tsscan','scan.heading':'Entwickler-<span class="gradient-text">Scan</span>',
    'scan.location':'STANDORT','scan.age_label':'ALTER','scan.status':'STATUS','scan.available':'VERF\u00dcGBAR',
    'scan.level':'STUFE','scan.expert':'EXPERTE','scan.clearance':'ZUGANG','scan.full_access':'VOLLZUGANG',
    'scan.confirmed':'\u2713 IDENTIT\u00c4T BEST\u00c4TIGT',
    'about.tag':'wer ich bin','about.heading':'\u00dcber <span class="gradient-text">Mich</span>',
    'about.quote':'Ich verwandle Ideen in reale Produkte durch sauberen Code und kreatives Design.',
    'about.p1':'Ich bin ein leidenschaftlicher Full Stack Entwickler aus <strong>Tunesien \ud83c\uddf9\ud83c\uddf3</strong>. Ich liebe es, moderne und leistungsstarke Webanwendungen zu erstellen.',
    'about.p2':'Ob APIs, interaktive UIs oder Datenbanken \u2014 ich bringe Kreativit\u00e4t und Pr\u00e4zision in jedes Projekt.',
    'about.h1':'Schneller Lerner','about.h1d':'Immer neue Technologien erkundend',
    'about.h2':'Detailorientiert','about.h2d':'Pixelgenaue Ergebnisse',
    'about.h3':'Probleml\u00f6ser','about.h3d':'Kreatives & logisches Denken',
    'about.personal':'Pers\u00f6nlich','about.contact':'Kontakt','about.languages':'Sprachen',
    'about.name_l':'Name','about.age_l':'Alter','about.location_l':'Standort','about.license_l':'F\u00fchrerschein','about.yes':'Ja',
    'about.phone_l':'Telefon',
    'lang.arabic':'Arabisch','lang.french':'Franz\u00f6sisch','lang.english':'Englisch','lang.german':'Deutsch',
    'lang.native':'Muttersprache','lang.fluent':'Flie\u00dfend','lang.advanced':'Fortgeschritten','lang.basic':'Grundkenntnisse',
    'skills.tag':'was ich nutze','skills.heading':'Meine <span class="gradient-text">F\u00e4higkeiten</span>',
    'skills.languages':'Sprachen','skills.frameworks':'Frameworks','skills.tools':'Tools & DevOps','skills.design':'Design & Software',
    'exp.tag':'karriereweg','exp.heading':'Meine <span class="gradient-text">Erfahrung</span>',
    'exp.t1':'Full Stack Entwickler','exp.d1':'Entwicklung und Wartung von Full-Stack-Webanwendungen mit React, Node.js und MongoDB.',
    'exp.t2':'Webentwicklung Praktikant','exp.d2':'Erstellung responsiver Websites. Erfahrung mit modernen Frameworks und agiler Methodik.',
    'exp.t3':'IT-Club Leiter','exp.d3':'Organisation von Coding-Workshops, Hackathons und Tech-Talks.',
    'exp.job':'Beruf','exp.intern':'Praktikum','exp.assoc':'Verein',
    'edu.t1':'H\u00f6heres Institut f\u00fcr Technologische Studien','edu.s1':'Lizenz in Informatik',
    'edu.d1':'Spezialisierung auf Softwareentwicklung, Webentwicklung und Datenbankmanagement.',
    'proj.tag':'ausgew\u00e4hlte arbeiten','proj.heading':'Meine <span class="gradient-text">Projekte</span>',
    'proj.sub':'Eine kuratierte Auswahl von Projekten, die mein Handwerk definieren.',
    'proj.p7t':'SantecAI \u2014 Gesundheitsplattform','proj.p7d':'KI-gest\u00fctzte Gesundheitsplattform mit intelligenter Diagnostik und Patientenmanagement.',
    'proj.p1t':'Portfolio Website','proj.p1d':'Modernes animiertes Portfolio mit kinematischem Design, Partikeln und fl\u00fcssigen Animationen.',
    'proj.p2t':'E-Commerce Plattform','proj.p2d':'Online-Shop mit Warenkorb, Kasse, Admin-Dashboard und Echtzeit-Inventar.',
    'proj.p3t':'Echtzeit-Chat App','proj.p3d':'WebSocket-Messaging mit R\u00e4umen, Dateifreigabe und Ende-zu-Ende-Verschl\u00fcsselung.',
    'proj.p4t':'Aufgabenverwaltung','proj.p4d':'Kanban-Board mit Drag-and-Drop, Fortschrittsverfolgung und Analysen.',
    'proj.p5t':'KI-Content-Generator','proj.p5d':'KI-gest\u00fctztes Tool f\u00fcr Blogbeitr\u00e4ge, Social Media und Marketingtexte.',
    'contact.tag':'in kontakt treten','contact.heading':'<span class="gradient-text">Kontakt</span> aufnehmen',
    'contact.cta':'Ein Projekt im Sinn?<br/><span class="gradient-text">Lassen Sie es uns gemeinsam bauen.</span>',
    'contact.qr_title':'Scannen zum Verbinden','contact.qr_visit':'Portfolio besuchen','contact.qr_save':'Kontakt speichern','contact.qr_vcard':'vCard',
    'contact.form_title':'Nachricht senden','contact.name':'Ihr Name','contact.subject':'Betreff','contact.message':'Nachricht','contact.send':'Senden',
    'contact.success':'Nachricht erfolgreich gesendet!','contact.error':'Hoppla! Etwas ist schiefgelaufen.',
    'footer.text':'Mit Leidenschaft erstellt.'
  },
  ar: {
    'nav.home':'\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629','nav.scanner':'\u0627\u0644\u0645\u0627\u0633\u062d','nav.about':'\u0639\u0646\u0651\u064a','nav.skills':'\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a',
    'nav.experience':'\u0627\u0644\u062e\u0628\u0631\u0629','nav.projects':'\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639','nav.contact':'\u0627\u0644\u062a\u0648\u0627\u0635\u0644','nav.status':'\u0645\u0641\u062a\u0648\u062d \u0644\u0644\u0639\u0645\u0644',
    'home.badge':'\u0645\u0637\u0648\u0631 Full Stack','home.greeting':'\u0645\u0631\u062d\u0628\u0627\u060c \u0623\u0646\u0627','home.desc':'\u0623\u0628\u0646\u064a \u062a\u062c\u0627\u0631\u0628 \u0631\u0642\u0645\u064a\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629. \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u0634\u0627\u0645\u0644 \u0645\u0639 \u0634\u063a\u0641 \u0628\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0646\u0638\u064a\u0641 \u0648\u0627\u0644\u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u0645\u0630\u0647\u0644\u0629.',
    'home.cta1':'\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a','home.cta2':'\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644','home.projects':'\u0645\u0634\u0627\u0631\u064a\u0639','home.experience':'\u0633\u0646\u0648\u0627\u062a \u062e\u0628\u0631\u0629','home.technologies':'\u062a\u0642\u0646\u064a\u0627\u062a','home.scroll':'\u0627\u0633\u062d\u0628 \u0644\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641',
    'scan.tag':'\u0645\u0633\u062d \u0627\u0644\u0647\u0648\u064a\u0629','scan.heading':'\u0645\u0633\u062d <span class="gradient-text">\u0627\u0644\u0645\u0637\u0648\u0631</span>',
    'scan.location':'\u0627\u0644\u0645\u0648\u0642\u0639','scan.age_label':'\u0627\u0644\u0639\u0645\u0631','scan.status':'\u0627\u0644\u062d\u0627\u0644\u0629','scan.available':'\u0645\u062a\u0627\u062d',
    'scan.level':'\u0627\u0644\u0645\u0633\u062a\u0648\u0649','scan.expert':'\u062e\u0628\u064a\u0631','scan.clearance':'\u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0629','scan.full_access':'\u0648\u0635\u0648\u0644 \u0643\u0627\u0645\u0644',
    'scan.confirmed':'\u2713 \u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0647\u0648\u064a\u0629',
    'about.tag':'\u0645\u0646 \u0623\u0646\u0627','about.heading':'\u0639\u0646 <span class="gradient-text">\u0646\u0641\u0633\u064a</span>',
    'about.quote':'\u0623\u062d\u0648\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0625\u0644\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0643\u0648\u062f \u0646\u0638\u064a\u0641 \u0648\u062a\u0635\u0645\u064a\u0645 \u0625\u0628\u062f\u0627\u0639\u064a.',
    'about.p1':'\u0623\u0646\u0627 \u0645\u0637\u0648\u0631 Full Stack \u0634\u063a\u0648\u0641 \u0645\u0646 <strong>\u062a\u0648\u0646\u0633 \ud83c\uddf9\ud83c\uddf3</strong>. \u0623\u062d\u0628 \u0625\u0646\u0634\u0627\u0621 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u062d\u062f\u064a\u062b\u0629 \u0648\u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u0623\u062f\u0627\u0621.',
    'about.p2':'\u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0628\u0646\u0627\u0621 APIs \u0623\u0648 \u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0623\u0648 \u062a\u062d\u0633\u064a\u0646 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u2014 \u0623\u062c\u0644\u0628 \u0627\u0644\u0625\u0628\u062f\u0627\u0639 \u0648\u0627\u0644\u062f\u0642\u0629.',
    'about.h1':'\u0645\u062a\u0639\u0644\u0645 \u0633\u0631\u064a\u0639','about.h1d':'\u062f\u0627\u0626\u0645\u0627 \u0623\u0633\u062a\u0643\u0634\u0641 \u062a\u0642\u0646\u064a\u0627\u062a \u062c\u062f\u064a\u062f\u0629',
    'about.h2':'\u062f\u0642\u064a\u0642 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644','about.h2d':'\u0646\u062a\u0627\u0626\u062c \u0628\u0643\u0633\u0644 \u0645\u062b\u0627\u0644\u064a',
    'about.h3':'\u062d\u0644\u0627\u0644 \u0645\u0634\u0627\u0643\u0644','about.h3d':'\u062a\u0641\u0643\u064a\u0631 \u0625\u0628\u062f\u0627\u0639\u064a \u0648\u0645\u0646\u0637\u0642\u064a',
    'about.personal':'\u0634\u062e\u0635\u064a','about.contact':'\u0627\u0644\u062a\u0648\u0627\u0635\u0644','about.languages':'\u0627\u0644\u0644\u063a\u0627\u062a',
    'about.name_l':'\u0627\u0644\u0627\u0633\u0645','about.age_l':'\u0627\u0644\u0639\u0645\u0631','about.location_l':'\u0627\u0644\u0645\u0648\u0642\u0639','about.license_l':'\u0631\u062e\u0635\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629','about.yes':'\u0646\u0639\u0645',
    'about.phone_l':'\u0627\u0644\u0647\u0627\u062a\u0641',
    'lang.arabic':'\u0627\u0644\u0639\u0631\u0628\u064a\u0629','lang.french':'\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629','lang.english':'\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629','lang.german':'\u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064a\u0629',
    'lang.native':'\u0644\u063a\u0629 \u0623\u0645','lang.fluent':'\u0637\u0644\u064a\u0642','lang.advanced':'\u0645\u062a\u0642\u062f\u0645','lang.basic':'\u0623\u0633\u0627\u0633\u064a',
    'skills.tag':'\u0645\u0627 \u0623\u0633\u062a\u062e\u062f\u0645\u0647','skills.heading':'<span class="gradient-text">\u0645\u0647\u0627\u0631\u0627\u062a\u064a</span>',
    'skills.languages':'\u0644\u063a\u0627\u062a \u0627\u0644\u0628\u0631\u0645\u062c\u0629','skills.frameworks':'\u0623\u0637\u0631 \u0627\u0644\u0639\u0645\u0644','skills.tools':'\u0623\u062f\u0648\u0627\u062a & DevOps','skills.design':'\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c',
    'exp.tag':'\u0627\u0644\u0645\u0633\u064a\u0631\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629','exp.heading':'<span class="gradient-text">\u062e\u0628\u0631\u062a\u064a</span>',
    'exp.t1':'\u0645\u0637\u0648\u0631 Full Stack','exp.d1':'\u0628\u0646\u0627\u0621 \u0648\u0635\u064a\u0627\u0646\u0629 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u0634\u0627\u0645\u0644\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React \u0648 Node.js \u0648 MongoDB.',
    'exp.t2':'\u0645\u062a\u062f\u0631\u0628 \u062a\u0637\u0648\u064a\u0631 \u0648\u064a\u0628','exp.d2':'\u0628\u0646\u0627\u0621 \u0645\u0648\u0627\u0642\u0639 \u0648\u064a\u0628 \u0645\u062a\u062c\u0627\u0648\u0628\u0629. \u062e\u0628\u0631\u0629 \u0639\u0645\u0644\u064a\u0629 \u0645\u0639 \u0623\u0637\u0631 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062d\u062f\u064a\u062b\u0629 \u0648\u0645\u0646\u0647\u062c\u064a\u0629 Agile.',
    'exp.t3':'\u0631\u0626\u064a\u0633 \u0646\u0627\u062f\u064a \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a','exp.d3':'\u062a\u0646\u0638\u064a\u0645 \u0648\u0631\u0634 \u0628\u0631\u0645\u062c\u0629 \u0648\u0647\u0627\u0643\u0627\u062b\u0648\u0646\u0627\u062a \u0648\u0645\u062d\u0627\u062f\u062b\u0627\u062a \u062a\u0642\u0646\u064a\u0629.',
    'exp.job':'\u0648\u0638\u064a\u0641\u0629','exp.intern':'\u062a\u062f\u0631\u064a\u0628','exp.assoc':'\u062c\u0645\u0639\u064a\u0629',
    'edu.t1':'\u0627\u0644\u0645\u0639\u0647\u062f \u0627\u0644\u0639\u0627\u0644\u064a \u0644\u0644\u062f\u0631\u0627\u0633\u0627\u062a \u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0629','edu.s1':'\u0625\u062c\u0627\u0632\u0629 \u0641\u064a \u0639\u0644\u0648\u0645 \u0627\u0644\u062d\u0627\u0633\u0648\u0628',
    'edu.d1':'\u062a\u062e\u0635\u0635 \u0641\u064a \u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0625\u062f\u0627\u0631\u0629 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.',
    'proj.tag':'\u0623\u0639\u0645\u0627\u0644 \u0645\u0645\u064a\u0632\u0629','proj.heading':'<span class="gradient-text">\u0645\u0634\u0627\u0631\u064a\u0639\u064a</span>',
    'proj.sub':'\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u062e\u062a\u0627\u0631\u0629 \u0645\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u062a\u064a \u062a\u0639\u0631\u0641 \u062d\u0631\u0641\u062a\u064a.',
    'proj.p7t':'SantecAI \u2014 \u0645\u0646\u0635\u0629 \u0635\u062d\u064a\u0629','proj.p7d':'\u0645\u0646\u0635\u0629 \u0635\u062d\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0639 \u062a\u0634\u062e\u064a\u0635 \u0630\u0643\u064a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0631\u0636\u0649.',
    'proj.p1t':'\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062d\u0641\u0638\u0629','proj.p1d':'\u0645\u062d\u0641\u0638\u0629 \u0645\u0639 \u062a\u0635\u0645\u064a\u0645 \u0633\u064a\u0646\u0645\u0627\u0626\u064a \u0648\u062c\u0633\u064a\u0645\u0627\u062a \u0648\u0631\u0633\u0648\u0645 \u0645\u062a\u062d\u0631\u0643\u0629 \u0633\u0644\u0633\u0629.',
    'proj.p2t':'\u0645\u0646\u0635\u0629 \u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629','proj.p2d':'\u0645\u062a\u062c\u0631 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0643\u0627\u0645\u0644 \u0645\u0639 \u0633\u0644\u0629 \u0648\u062f\u0641\u0639 \u0648\u0644\u0648\u062d\u0629 \u0625\u062f\u0627\u0631\u0629.',
    'proj.p3t':'\u062a\u0637\u0628\u064a\u0642 \u0645\u062d\u0627\u062f\u062b\u0629 \u0641\u0648\u0631\u064a','proj.p3d':'\u0645\u0631\u0627\u0633\u0644\u0629 WebSocket \u0645\u0639 \u063a\u0631\u0641 \u0648\u0645\u0634\u0627\u0631\u0643\u0629 \u0645\u0644\u0641\u0627\u062a \u0648\u062a\u0634\u0641\u064a\u0631.',
    'proj.p4t':'\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0647\u0627\u0645','proj.p4d':'\u0644\u0648\u062d\u0629 Kanban \u0645\u0639 \u0633\u062d\u0628 \u0648\u0625\u0641\u0644\u0627\u062a \u0648\u062a\u062a\u0628\u0639 \u0648\u062a\u062d\u0644\u064a\u0644\u0627\u062a.',
    'proj.p5t':'\u0645\u0648\u0644\u062f \u0645\u062d\u062a\u0648\u0649 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a','proj.p5d':'\u0623\u062f\u0627\u0629 \u0625\u0646\u0634\u0627\u0621 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0644\u0645\u062f\u0648\u0646\u0627\u062a \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644.',
    'contact.tag':'\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a','contact.heading':'<span class="gradient-text">\u062a\u0648\u0627\u0635\u0644</span> \u0645\u0639\u064a',
    'contact.cta':'\u0644\u062f\u064a\u0643 \u0645\u0634\u0631\u0648\u0639 \u0641\u064a \u0627\u0644\u0628\u0627\u0644\u061f<br/><span class="gradient-text">\u062f\u0639\u0646\u0627 \u0646\u0628\u0646\u064a\u0647 \u0645\u0639\u0627.</span>',
    'contact.qr_title':'\u0627\u0645\u0633\u062d \u0644\u0644\u062a\u0648\u0627\u0635\u0644','contact.qr_visit':'\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u062d\u0641\u0638\u0629','contact.qr_save':'\u062d\u0641\u0638 \u062c\u0647\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644','contact.qr_vcard':'vCard',
    'contact.form_title':'\u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u0629','contact.name':'\u0627\u0633\u0645\u0643','contact.subject':'\u0627\u0644\u0645\u0648\u0636\u0648\u0639','contact.message':'\u0627\u0644\u0631\u0633\u0627\u0644\u0629','contact.send':'\u0625\u0631\u0633\u0627\u0644',
    'contact.success':'\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0646\u062c\u0627\u062d!','contact.error':'\u062d\u062f\u062b \u062e\u0637\u0623!',
    'footer.text':'\u0635\u064f\u0646\u0639 \u0628\u0634\u063a\u0641.'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initLanguage();
  initLucide();
  initNavigation();
  initMobileMenu();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initParticles();
  initCursor();
  initMagnetic();
  initSkillBars();
  initContactForm();
  initKeyboardShortcuts();
  initQRCodes();
});

/* ========== PRELOADER ========== */
function initPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      el.classList.add('done');
      document.body.style.overflow = '';
    }, 1200);
  });
  // Fallback
  setTimeout(() => { el.classList.add('done'); document.body.style.overflow = ''; }, 4000);
}

/* ========== THEME ========== */
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
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const mc = document.querySelector('meta[name="theme-color"]');
  if (mc) mc.content = t === 'dark' ? '#050510' : '#f0f0f8';
}

/* ========== LANGUAGE ========== */
function initLanguage() {
  applyLanguage(currentLang);
  const btn = document.getElementById('lang-btn');
  const dd = document.getElementById('lang-dropdown');
  if (!btn || !dd) return;
  btn.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
  document.addEventListener('click', () => dd.classList.remove('open'));
  dd.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      currentLang = opt.dataset.lang;
      applyLanguage(currentLang);
      localStorage.setItem('lang', currentLang);
      dd.classList.remove('open');
      dd.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
}
function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.getElementById('lang-current').textContent = lang.toUpperCase();
  document.documentElement.lang = lang;
  const isRTL = lang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
  // Re-init lucide after innerHTML changes
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ========== LUCIDE ========== */
function initLucide() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ========== NAVIGATION ========== */
function initNavigation() {
  const links = document.querySelectorAll('.nav-link[data-section]');
  const pages = document.querySelectorAll('.page');
  function navigate(sectionId) {
    pages.forEach(p => p.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    const target = document.getElementById(sectionId);
    const link = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (target) { target.classList.add('active'); triggerScrollReveals(target); }
    if (link) link.classList.add('active');
    const scroll = document.getElementById('main-scroll');
    if (scroll) scroll.scrollTop = 0;
    // Close mobile menu
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('mobile-overlay')?.classList.remove('open');
    document.getElementById('hamburger')?.classList.remove('active');
  }
  links.forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();
      navigate(l.dataset.section);
    });
  });
  // CTA buttons nav
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.nav); });
  });
}

/* ========== MOBILE MENU ========== */
function initMobileMenu() {
  const ham = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  if (!ham) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay?.addEventListener('click', () => {
    ham.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

/* ========== SCROLL PROGRESS ========== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  const scroll = document.getElementById('main-scroll');
  if (!bar || !scroll) return;
  scroll.addEventListener('scroll', () => {
    const pct = scroll.scrollTop / (scroll.scrollHeight - scroll.clientHeight) * 100;
    bar.style.width = pct + '%';
  });
}

/* ========== SCROLL REVEAL ========== */
function initScrollReveal() {
  const scroll = document.getElementById('main-scroll');
  if (!scroll) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { root: scroll, threshold: 0.1 });
  document.querySelectorAll('.scroll-reveal').forEach(el => obs.observe(el));
}
function triggerScrollReveals(section) {
  if (!section) return;
  // Re-observe elements in the newly active section
  const scroll = document.getElementById('main-scroll');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { root: scroll, threshold: 0.1 });
  section.querySelectorAll('.scroll-reveal').forEach(el => {
    el.classList.remove('visible');
    void el.offsetWidth; // force reflow
    obs.observe(el);
  });
  // Also trigger skill bars and language fills
  setTimeout(() => {
    section.querySelectorAll('.skill-card, .scanner-container, .info-card').forEach(el => el.classList.add('visible'));
  }, 400);
}

/* ========== COUNTERS ========== */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  let done = false;
  function run() {
    if (done) return;
    done = true;
    counters.forEach(el => {
      const target = parseInt(el.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = current;
      }, 40);
    });
  }
  // Run after preloader
  setTimeout(run, 1800);
}

/* ========== PARTICLES ========== */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const COLORS = ['#00f0ff', '#ff2d78', '#b24dff', '#00ff88', '#ff6b35'];
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function createParticle() {
    return {
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 2 + .5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * .5 + .2
    };
  }
  function init() {
    resize();
    particles = [];
    const count = Math.min(80, Math.floor(w * h / 15000));
    for (let i = 0; i < count; i++) particles.push(createParticle());
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    // Draw connections
    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].color;
          ctx.globalAlpha = .06 * (1 - dist / 120);
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  init();
  draw();
  window.addEventListener('resize', () => { resize(); });
}

/* ========== CURSOR ========== */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  if (!cursor || !trail || window.innerWidth < 768) return;
  let mx = 0, my = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animate() {
    tx += (mx - tx) * .15;
    ty += (my - ty) * .15;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    trail.style.left = tx + 'px';
    trail.style.top = ty + 'px';
    requestAnimationFrame(animate);
  }
  animate();
  // Hover states
  const hoverEls = 'a, button, .magnetic, .proj-card, .glass-card, .pill, .control-btn';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

/* ========== MAGNETIC ========== */
function initMagnetic() {
  if (window.innerWidth < 768) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * .2}px, ${y * .2}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ========== SKILL BARS ========== */
function initSkillBars() {
  // Handled via CSS + .visible class toggle in triggerScrollReveals
  // Also init on first active page
  const home = document.getElementById('home');
  if (home) {
    setTimeout(() => triggerScrollReveals(home), 1500);
  }
}

/* ========== CONTACT FORM ========== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    status.textContent = '';
    status.className = 'form-status-msg';
    try {
      // Simulate send (no backend)
      await new Promise(r => setTimeout(r, 1000));
      status.textContent = dict['contact.success'] || 'Sent!';
      status.classList.add('success');
      form.reset();
    } catch (err) {
      status.textContent = dict['contact.error'] || 'Error!';
      status.classList.add('error');
    }
  });
}

/* ========== KEYBOARD SHORTCUTS ========== */
function initKeyboardShortcuts() {
  const sections = ['home','scanner','about','skills','experience','projects','contact'];
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const num = parseInt(e.key);
    if (num >= 1 && num <= sections.length) {
      e.preventDefault();
      const link = document.querySelector(`.nav-link[data-section="${sections[num - 1]}"]`);
      if (link) link.click();
    }
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      const links = document.querySelectorAll('.nav-link[data-section]');
      const activeIdx = sections.indexOf(document.querySelector('.nav-link.active')?.dataset.section);
      const next = (activeIdx + 1) % sections.length;
      links[next]?.click();
    }
  });
}

/* ========== QR CODES ========== */
function initQRCodes() {
  // Wait for QRCode library to load
  const tryInit = () => {
    if (typeof QRCode === 'undefined') {
      setTimeout(tryInit, 500);
      return;
    }
    const isDark = currentTheme === 'dark';
    const colorDark = isDark ? '#00f0ff' : '#1a1a3a';
    const colorLight = '#ffffff';

    // Portfolio QR
    const qrPortfolio = document.getElementById('qr-portfolio');
    if (qrPortfolio && !qrPortfolio.hasChildNodes()) {
      new QRCode(qrPortfolio, {
        text: 'https://portfilio-one.vercel.app',
        width: 110, height: 110,
        colorDark: colorDark, colorLight: colorLight,
        correctLevel: QRCode.CorrectLevel.M
      });
    }
    // vCard QR
    const qrVcard = document.getElementById('qr-vcard');
    if (qrVcard && !qrVcard.hasChildNodes()) {
      new QRCode(qrVcard, {
        text: [
          'BEGIN:VCARD', 'VERSION:3.0',
          'N:Chraiet;Rayen', 'FN:Rayen Chraiet',
          'TEL:+21694599198', 'EMAIL:rayenchraiet2000@gmail.com',
          'URL:https://portfilio-one.vercel.app',
          'ADR:;;Tunisia', 'END:VCARD'
        ].join('\n'),
        width: 110, height: 110,
        colorDark: colorDark, colorLight: colorLight,
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  };
  // Delay to let page settle
  setTimeout(tryInit, 2000);
}
