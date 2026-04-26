// ============================================================
//  MAIN.JS — Core rendering & interaction logic
//  You do NOT need to edit this file to add projects/skills.
//  Edit projects.js instead.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  injectProfile();
  renderProjects();
  renderSkills();
  initParticles();
  initTypingEffect();
  initScrollReveal();
  initCustomCursor();
  initNavScroll();
  initProjectFilters();
  initMobileMenu();
});


// ─── INJECT PROFILE DATA ────────────────────────────────────
function injectProfile() {
  document.title = `${PROFILE.name} · ${PROFILE.role}`;
  setTextAll('[data-profile="name"]',     PROFILE.name);
  setTextAll('[data-profile="role"]',     PROFILE.role);
  setTextAll('[data-profile="tagline"]',  PROFILE.tagline);
  setTextAll('[data-profile="location"]', PROFILE.location);
  setTextAll('[data-profile="bio"]',      PROFILE.bio);

  setHrefAll('[data-profile="github"]',   PROFILE.github);
  setHrefAll('[data-profile="linkedin"]', PROFILE.linkedin);
  setHrefAll('[data-profile="resume"]',   PROFILE.resume);
  setHrefAll('[data-profile="email"]',    `mailto:${PROFILE.email}`);
  setTextAll('[data-profile="email-text"]', PROFILE.email);
}

function setTextAll(selector, value) {
  document.querySelectorAll(selector).forEach(el => el.textContent = value);
}
function setHrefAll(selector, value) {
  document.querySelectorAll(selector).forEach(el => el.href = value);
}


// ─── RENDER PROJECTS ────────────────────────────────────────
function renderProjects() {
  const featuredGrid = document.getElementById('featured-projects');
  const regularGrid  = document.getElementById('regular-projects');

  const featured = PROJECTS.filter(p => p.featured);
  const regular  = PROJECTS.filter(p => !p.featured);

  featuredGrid.innerHTML = featured.map(projectCardHTML).join('');
  regularGrid.innerHTML  = regular.map(projectCardHTML).join('');

  // Update project count badge
  const countEl = document.getElementById('project-count');
  if (countEl) countEl.textContent = PROJECTS.length;
}

function projectCardHTML(p) {
  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-link btn-demo">
         Live Demo <span>↗</span>
       </a>`
    : '';

  const imgBlock = p.image
    ? `<div class="card__image">
         <img src="${p.image}" alt="${p.title}" loading="lazy">
       </div>`
    : `<div class="card__image card__image--placeholder">
         <div class="placeholder-icon">${categoryIcon(p.category)}</div>
       </div>`;

  return `
    <article class="project-card reveal" data-category="${p.category}" data-id="${p.id}">
      ${imgBlock}
      <div class="card__body">
        <div class="card__meta">
          <span class="card__category">${p.category}</span>
          <span class="card__year">${p.year}</span>
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__problem">${p.problem}</p>
        <p class="card__outcome">✅ ${p.outcome}</p>
        <div class="card__tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card__links">
          <a href="${p.github}" target="_blank" rel="noopener" class="btn-link btn-github">
            GitHub <span>↗</span>
          </a>
          ${demoBtn}
        </div>
      </div>
    </article>`;
}

function categoryIcon(category) {
  const icons = {
    'Machine Learning': '🤖',
    'Data Analysis':    '📊',
    'NLP':              '🧠',
    'Computer Vision':  '👁',
    'Deep Learning':    '⚡',
    'Dashboard':        '📈'
  };
  return icons[category] || '💡';
}


// ─── PROJECT FILTERS ────────────────────────────────────────
function initProjectFilters() {
  const filterBar = document.getElementById('filter-bar');
  if (!filterBar) return;

  // Build filter buttons dynamically from project categories
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  filterBar.innerHTML = categories.map((cat, i) =>
    `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat}">
       ${cat}
     </button>`
  ).join('');

  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const match = filter === 'All' || card.dataset.category === filter;
      card.style.opacity    = match ? '1' : '0.2';
      card.style.transform  = match ? 'scale(1)' : 'scale(0.97)';
      card.style.pointerEvents = match ? 'auto' : 'none';
    });
  });
}


// ─── RENDER SKILLS ──────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = Object.entries(SKILLS).map(([group, skills]) => `
    <div class="skill-group reveal">
      <h4 class="skill-group__title">${group}</h4>
      <div class="skill-group__tags">
        ${skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}


// ─── TYPING EFFECT ──────────────────────────────────────────
function initTypingEffect() {
  const el = document.getElementById('typed-role');
  if (!el) return;

  const words = [PROFILE.role, 'ML Engineer', 'Problem Solver', 'Data Storyteller'];
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = words[wordIdx];
    if (deleting) {
      el.textContent = current.slice(0, charIdx--);
    } else {
      el.textContent = current.slice(0, charIdx++);
    }

    let delay = deleting ? 60 : 100;

    if (!deleting && charIdx > current.length) {
      delay = 2200;
      deleting = true;
    } else if (deleting && charIdx < 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      delay = 300;
    }

    setTimeout(type, delay);
  }
  setTimeout(type, 1000);
}


// ─── PARTICLE CANVAS ────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 60;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x:    Math.random() * canvas.width,
    y:    Math.random() * canvas.height,
    r:    Math.random() * 1.5 + 0.5,
    vx:   (Math.random() - 0.5) * 0.4,
    vy:   (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1
  }));

  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 245, 212, ${p.alpha})`;
      ctx.fill();

      // Draw lines to nearby particles
      particles.forEach(p2 => {
        const dx = p.x - p2.x, dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 245, 212, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Repel from mouse
      if (mouse.x !== null) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }
      }
    });

    requestAnimationFrame(draw);
  }
  draw();
}


// ─── SCROLL REVEAL ──────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe existing + dynamically added elements
  function observeAll() {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  observeAll();

  // Re-run after dynamic content renders
  setTimeout(observeAll, 200);
}


// ─── CUSTOM CURSOR ──────────────────────────────────────────
function initCustomCursor() {
  // Only on desktop
  if (window.innerWidth < 1024) return;

  const cursor = document.getElementById('cursor');
  const dot    = document.getElementById('cursor-dot');
  if (!cursor || !dot) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  // Smooth follow with lerp
  function animateCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
    dot.style.transform    = `translate(${mx - 4}px, ${my - 4}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Scale on hover over interactive elements
  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
  });
}


// ─── NAV SCROLL BEHAVIOR ────────────────────────────────────
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}


// ─── MOBILE MENU ────────────────────────────────────────────
function initMobileMenu() {
  const toggle  = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.classList.toggle('active', open);
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}
