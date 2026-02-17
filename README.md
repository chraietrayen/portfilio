# Rayen Chraiet - Portfolio

A modern, animated personal portfolio website built with **pure HTML, CSS, and JavaScript**. Inspired by VS Code's dark theme with a file-explorer sidebar, code-block styling, and rich animations.

## Live Demo

Deployed on Vercel: [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

## Features

- **VS Code-inspired design** - dark theme, file-tree sidebar, tab bar, code blocks with syntax highlighting
- **Pure HTML/CSS/JS** - zero frameworks, zero build tools, blazing fast
- **Rich CSS animations & transitions:**
  - Glassmorphism cards with shimmer borders
  - Animated gradient text
  - Floating parallax shapes
  - Scroll-reveal fade-in animations
  - Typing effect in code window
  - Skill bar fill animations with glow
  - Timeline dot-pop & line-draw effects
  - 3D tilt on project cards
  - Magnetic hover buttons with ripple effect
  - Particle network background (canvas)
  - Cursor glow following mouse
  - Scroll progress bar
  - Preloader with animated brackets
- **SPA-like navigation** - section switching with tab management, hash routing
- **Keyboard shortcuts** - press 1-7 to navigate, Ctrl+K to cycle
- **Fully responsive** - mobile sidebar drawer, adaptive grid layouts
- **Contact form** - opens email client with pre-filled data
- **Print-friendly** - hides UI chrome for clean printing

## Project Structure

```
portfilio/
-- index.html          # Main HTML (all sections)
-- css/
   -- style.css        # All styles, animations, responsive
-- js/
   -- script.js        # Navigation, particles, scroll effects, form
-- vercel.json         # Vercel static deployment config
-- package.json        # Metadata and dev server scripts
-- README.md           # This file
```

## Sections

| Section    | File Tab        | Description                              |
|------------|-----------------|------------------------------------------|
| Home       | home.jsx        | Hero with code window, stats, CTA        |
| About      | about.ts        | Personal info cards, bio                  |
| Skills     | skills.py       | Skill categories, tags, animated bars     |
| Education  | education.cpp   | Academic timeline                         |
| Experience | experience.cs   | Professional timeline with badges         |
| Projects   | projects.tsx    | Project card grid with hover overlays     |
| Contact    | contact.html    | Contact cards + form                      |

## Run Locally

```bash
# Option 1: Any static server
npx serve . -l 3000

# Option 2: Python
python -m http.server 3000

# Option 3: Just open index.html in a browser
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on push.

## Technologies

- HTML5 semantic markup
- CSS3 (custom properties, grid, flexbox, animations, backdrop-filter, clip-path)
- Vanilla JavaScript (ES6+, Intersection Observer, Canvas API)
- Google Fonts (JetBrains Mono, Inter)

## Author

**Rayen Chraiet** - Full Stack Developer from Tunisia
- Email: rayenchraiet2000@gmail.com
- GitHub: [chraietrayen](https://github.com/chraietrayen)

## License

MIT
