# Portfolio Project — Copilot Instructions

## Overview
Static personal portfolio website for Rayen Chraiet built with pure HTML, CSS, and JavaScript.
VS Code dark theme inspired design with rich animations, transitions, and interactive effects.

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- Google Fonts (JetBrains Mono, Inter)
- Deployed on Vercel as a static site

## Project Structure
- `index.html` — Single HTML file with all 7 sections (Home, About, Skills, Education, Experience, Projects, Contact)
- `css/style.css` — All styles including animations, glassmorphism, responsive layouts
- `js/script.js` — SPA navigation, particles canvas, scroll reveals, form handling, tilt effects
- `vercel.json` — Vercel static deployment configuration
- `package.json` — Dev server scripts (`npx serve`)

## Key Features
- SPA-like section switching with tab bar management
- Particle network canvas background
- Glassmorphism cards, animated gradient text, 3D tilt cards
- Scroll-reveal animations via Intersection Observer
- Skill bar fill animations, timeline dot-pop effects
- Magnetic hover buttons with ripple click effects
- Cursor glow, scroll progress bar, preloader
- Keyboard shortcuts (1-7 for nav, Ctrl+K to cycle)
- Mobile responsive with sidebar drawer

## Running Locally
```bash
npx serve . -l 3000
```

## Deploying
```bash
vercel --prod
```