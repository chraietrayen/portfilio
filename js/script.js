/* ==========================================
   GOD-TIER PORTFOLIO — script.js
   Rayen Chraiet
   ========================================== */

(() => {
  'use strict';

  // ── PRELOADER ──────────────────────────
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    setTimeout(() => {
      pre.classList.add('done');
      initParticles();
      animateMetrics();
      triggerScrollReveals();
    }, 1200);
  });

  // ── SPA NAVIGATION ─────────────────────
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  const mainScroll = document.getElementById('main-scroll');

  function navigateTo(id) {
    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      // Re-trigger page animation
      target.style.animation = 'none';
      target.offsetHeight; // reflow
      target.style.animation = '';
    }
    const link = document.querySelector(`.nav-link[data-section="${id}"]`);
    if (link) link.classList.add('active');
    if (mainScroll) mainScroll.scrollTop = 0;
    // Re-trigger scroll reveals for new page
    setTimeout(triggerScrollReveals, 100);
    // close mobile sidebar
    closeMobile();
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.section);
    });
  });

  // CTA buttons that navigate
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(btn.dataset.nav);
    });
  });

  // ── MOBILE MENU ────────────────────────
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function closeMobile() {
    hamburger?.classList.remove('open');
    sidebar?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
  }

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    sidebar.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
  });
  mobileOverlay?.addEventListener('click', closeMobile);

  // ── SCROLL PROGRESS ────────────────────
  const scrollProgress = document.getElementById('scroll-progress');
  mainScroll?.addEventListener('scroll', () => {
    const el = mainScroll;
    const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = Math.min(pct, 100) + '%';
  });

  // ── SCROLL REVEAL ──────────────────────
  function triggerScrollReveals() {
    const items = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate skill bars when visible
          entry.target.querySelectorAll('.s-bar-fill').forEach(bar => {
            bar.style.width = bar.style.getPropertyValue('--w');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, root: mainScroll });
    items.forEach(item => {
      if (!item.classList.contains('visible')) {
        observer.observe(item);
      }
    });
  }

  // ── COUNTER ANIMATION ──────────────────
  function animateMetrics() {
    document.querySelectorAll('.metric-num').forEach(el => {
      const target = parseInt(el.dataset.count);
      if (!target) return;
      let current = 0;
      const duration = 1800;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 16);
    });
  }

  // ── PARTICLES ──────────────────────────
  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], mouse = { x: -1000, y: -1000 };
    const PARTICLE_COUNT = 60;
    const CONNECT_DIST = 140;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    document.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.x += dx * 0.008;
          p.y += dy * 0.008;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.opacity})`;
        ctx.fill();

        // Connect lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - d / CONNECT_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ── CUSTOM CURSOR ──────────────────────
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');

  if (cursor && trail && window.innerWidth > 768) {
    let cx = 0, cy = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', e => {
      tx = e.clientX;
      ty = e.clientY;
    });

    function updateCursor() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      cursor.style.left = tx + 'px';
      cursor.style.top = ty + 'px';
      trail.style.left = cx + 'px';
      trail.style.top = cy + 'px';
      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .nav-link, .cta-btn, .proj-card, .pill, .highlight, .c-link, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
  }

  // ── MAGNETIC BUTTONS ───────────────────
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ── 3D TILT on EDITOR ──────────────────
  const editor = document.querySelector('.editor');
  const heroWrap = document.querySelector('.hero-card-wrap');
  if (editor && heroWrap) {
    heroWrap.addEventListener('mousemove', e => {
      const rect = heroWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      editor.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
    });
    heroWrap.addEventListener('mouseleave', () => {
      editor.style.transform = '';
    });
  }

  // ── CONTACT FORM ───────────────────────
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name');
    const email = fd.get('email');
    const subject = fd.get('subject');
    const message = fd.get('message');

    // Mailto fallback
    const mailtoUrl = `mailto:rayenchraiet2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailtoUrl, '_blank');

    formStatus.textContent = '✓ Opening your email client...';
    formStatus.className = 'form-status-msg show ok';
    form.reset();
    setTimeout(() => {
      formStatus.className = 'form-status-msg';
    }, 4000);
  });

  // ── KEYBOARD SHORTCUTS ─────────────────
  const sectionKeys = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
  document.addEventListener('keydown', e => {
    // 1-7 for navigation
    const num = parseInt(e.key);
    if (num >= 1 && num <= 7 && !e.ctrlKey && !e.altKey) {
      const target = document.activeElement?.tagName;
      if (target === 'INPUT' || target === 'TEXTAREA') return;
      navigateTo(sectionKeys[num - 1]);
    }
    // Ctrl+K to cycle sections
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      const current = document.querySelector('.page.active')?.id;
      const idx = sectionKeys.indexOf(current);
      const next = sectionKeys[(idx + 1) % sectionKeys.length];
      navigateTo(next);
    }
  });

  // ── RIPPLE EFFECT on BUTTONS ───────────
  document.querySelectorAll('.cta-btn, .submit-btn, .proj-link-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;border-radius:50%;background:rgba(255,255,255,.25);
        width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;transform:scale(0);
        animation:ripple .6s ease-out forwards;pointer-events:none;z-index:5`;
      this.style.position = 'relative';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `@keyframes ripple{0%{transform:scale(0);opacity:1}100%{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(rippleStyle);

  // ── TYPING EFFECT in CODE EDITOR ───────
  function typeCodeEffect() {
    const lines = document.querySelectorAll('#editor-code .code-line');
    lines.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateX(-8px)';
      line.style.transition = `opacity .4s ease ${i * 0.08 + 0.5}s, transform .4s ease ${i * 0.08 + 0.5}s`;
      setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateX(0)';
      }, 50);
    });
  }
  // Run typing effect after preloader
  setTimeout(typeCodeEffect, 1400);

})();

