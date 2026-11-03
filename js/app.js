// ==========================================================================
// TSALITS SABILA FATAH — EDITORIAL LUXURY APPLICATION SCRIPT
// Philosophy: Minimalist, expressive, accessible, and high-performance
// ==========================================================================

import {
  PERSONAL_INFO,
  EXPERTISE_PILLARS,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
  ORGANIZATIONS,
  CERTIFICATES,
  SKILL_MATRIX
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initCustomCursor();
  initHeaderScroll();
  initMobileMenu();
  initHeroConstellation();
  renderAllSections();
  initScrollReveal();
  initModal();
  initContactActions();
});

/* --------------------------------------------------------------------------
   1. Live Surabaya Time (UTC+7 / WIB)
   Editorial touch reminiscent of European luxury houses (Florence, Paris, Tokyo)
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockElement = document.getElementById('live-clock');
  if (!clockElement) return;

  function updateClock() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
      clockElement.textContent = `${timeString} WIB`;
    } catch {
      clockElement.textContent = 'SURABAYA, ID';
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   2. Custom Luxury Cursor
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorRing = document.querySelector('.custom-cursor-ring');

  if (!cursorDot || !cursorRing) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Smooth lerp for ring follower
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Attach hover state on interactive elements
  function attachCursorHover() {
    const interactives = document.querySelectorAll('a, button, input, textarea, .cursor-pointer, .interactive-card');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  attachCursorHover();
  window.attachCursorHover = attachCursorHover;
}

/* --------------------------------------------------------------------------
   3. Header Scroll & Active Section Spy
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const navBrand = document.getElementById('nav-brand-name');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateHeader() {
    const scrollPos = window.scrollY;

    // Header background change
    if (scrollPos > 60) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active Section Spy
    let currentId = 'home';
    sections.forEach((section) => {
      const top = section.offsetTop - 160;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id') || 'home';
      }
    });

    // Toggle brand name visibility: hidden when at 'home', visible on other sections (Experience, Projects, Skills, Contact)
    if (navBrand) {
      if (currentId === 'home' || scrollPos < 100) {
        navBrand.classList.add('opacity-0', 'pointer-events-none', '-translate-x-2');
        navBrand.classList.remove('opacity-100', 'pointer-events-auto', 'translate-x-0');
      } else {
        navBrand.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-2');
        navBrand.classList.add('opacity-100', 'pointer-events-auto', 'translate-x-0');
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/* --------------------------------------------------------------------------
   4. Mobile Menu Navigation
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  function toggleMenu() {
    const isOpen = overlay.classList.contains('open');
    if (isOpen) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    } else {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    });
  });
}

/* --------------------------------------------------------------------------
   5. Dynamic Section Rendering
   -------------------------------------------------------------------------- */
function renderAllSections() {
  renderHeroStats();
  renderExpertise();
  renderProjects();
  renderChronicle();
  renderOrganizations();
  renderCertificates();
  renderSkillMatrix();
}

// Hero Stats
function renderHeroStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container) return;

  container.innerHTML = PERSONAL_INFO.stats
    .map(
      (s) => `
      <div class="border-t border-[rgba(255,255,255,0.08)]/60 pt-4 pb-2">
        <div class="text-[10px] tracking-widest uppercase text-[#A1A8B8] font-sans mb-1">${s.label}</div>
        <div class="font-serif text-3xl md:text-4xl text-white leading-none">${s.value}</div>
        <div class="text-xs text-[#A1A8B8] mt-1 font-sans">${s.sub}</div>
      </div>
    `
    )
    .join('');
}

// Expertise Pillars (Editorial layout)
function renderExpertise() {
  const container = document.getElementById('expertise-container');
  if (!container) return;

  container.innerHTML = EXPERTISE_PILLARS.map(
    (pillar) => `
    <article class="expertise-pillar-item group cursor-pointer transition-all duration-300">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Roman Numeral & Title -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-4 mb-2">
            <span class="font-serif italic text-2xl text-[#60A5FA] font-normal">${pillar.roman}.</span>
            <span class="text-[11px] tracking-widest uppercase font-semibold text-[#A1A8B8]">${pillar.subtitle}</span>
          </div>
          <h3 class="font-serif text-3xl md:text-4xl text-white group-hover:text-[#60A5FA] transition-colors leading-tight">
            ${pillar.title}
          </h3>
          <div class="text-xs text-[#60A5FA] font-sans font-medium tracking-wide mt-2">
            ${pillar.highlight}
          </div>
        </div>

        <!-- Description -->
        <div class="lg:col-span-4">
          <p class="text-[#A1A8B8] text-sm md:text-base leading-relaxed">
            ${pillar.desc}
          </p>
        </div>

        <!-- Tool tags -->
        <div class="lg:col-span-3 flex flex-wrap gap-2 pt-1">
          ${pillar.tools
            .map(
              (t) => `
            <span class="text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 bg-[#0D0F14] border border-[rgba(255,255,255,0.08)]/80 text-[#A1A8B8] group-hover:border-[#60A5FA]/40 transition-colors">
              ${t}
            </span>
          `
            )
            .join('')}
        </div>

      </div>
    </article>
  `
  ).join('');
}

// Selected Projects (Alternating Large Editorial Showcase — PDF Documentation)
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PROJECTS.map((proj, idx) => {
    const isEven = idx % 2 === 0;

    return `
      <article class="project-monograph-card group reveal-init">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}">
            
            <!-- PDF Document Dossier Showcase Column -->
            <div class="lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}">
              <div class="editorial-pdf-card p-6 sm:p-8 md:p-10 cursor-pointer group/pdf relative overflow-hidden" onclick="window.openProjectModal('${proj.id}')">
                
                <!-- Watermark PDF tag -->
                <div class="absolute -right-8 -bottom-10 opacity-[0.035] text-white pointer-events-none select-none font-serif text-[160px] leading-none">
                  PDF
                </div>

                <!-- Card Header -->
                <div class="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-[rgba(255,255,255,0.08)]">
                  <div class="flex items-center gap-2.5">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#172554] text-[#60A5FA] border border-[#1E3A8A] text-[10px] uppercase font-bold tracking-widest rounded-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      PDF
                    </span>
                    <span class="text-xs font-semibold text-[#A1A8B8] font-sans tracking-wide">${proj.fileSize}</span>
                  </div>
                  <span class="text-[10px] tracking-widest uppercase font-semibold text-[#A1A8B8] font-sans">${proj.catalogNum} · ${proj.period}</span>
                </div>

                <!-- Document Presentation Slate -->
                <div class="relative z-10 py-4 md:py-6 flex flex-col sm:flex-row items-start gap-6">
                  <!-- Vector PDF Document Icon (Brighter & Crisp Contrast) -->
                  <div class="shrink-0 w-20 h-24 rounded border border-[rgba(96,165,250,0.4)] bg-[#1A2333] p-3 shadow-md flex flex-col justify-between group-hover/pdf:border-[#60A5FA] group-hover/pdf:-translate-y-1 transition-all duration-300 relative">
                    <div class="w-8 h-1.5 bg-[#3B82F6] rounded-full"></div>
                    <div class="space-y-1.5">
                      <div class="w-full h-1 bg-slate-200/90 rounded"></div>
                      <div class="w-5/6 h-1 bg-slate-200/90 rounded"></div>
                      <div class="w-full h-1 bg-slate-200/90 rounded"></div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-bold text-[#60A5FA] tracking-tight">PDF</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#141A26] border-b border-l border-[#60A5FA]/40"></div>
                  </div>

                  <!-- Document Meta & Title -->
                  <div class="flex-1">
                    <div class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA] mb-1.5 font-sans">
                      ${proj.docCategory}
                    </div>
                    <h4 class="font-serif text-2xl sm:text-3xl text-white group-hover/pdf:text-[#60A5FA] transition-colors leading-snug mb-3">
                      ${proj.docTitle}
                    </h4>
                    <div class="text-xs text-[#A1A8B8] font-sans flex flex-wrap items-center gap-2">
                      <span>Berkas:</span>
                      <span class="font-mono text-white font-medium bg-[#1E293B] px-2 py-0.5 border border-[rgba(255,255,255,0.15)] rounded">${proj.pdfFile.split('/').pop()}</span>
                    </div>
                  </div>
                </div>

                <!-- Footer indicator on Document Slate -->
                <div class="relative z-10 pt-4 mt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs text-[#A1A8B8] font-sans">
                  <span>Format: Dokumen Resmi PDF</span>
                  <span class="font-semibold text-[#60A5FA] group-hover/pdf:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Pratinjau Dokumen</span>
                    <span>&rarr;</span>
                  </span>
                </div>

              </div>
            </div>

            <!-- Content & Monograph Column -->
            <div class="lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-[#60A5FA] font-serif italic text-lg">${proj.catalogNum}</span>
                <span class="w-8 h-[1px] bg-slate-300"></span>
                <span class="text-[10px] tracking-widest uppercase font-semibold text-[#A1A8B8]">${proj.category}</span>
              </div>

              <h3 class="font-serif text-3xl md:text-5xl text-white leading-tight mb-4 group-hover:text-[#60A5FA] transition-colors cursor-pointer" onclick="window.openProjectModal('${proj.id}')">
                ${proj.title}
              </h3>

              <div class="text-xs text-[#A1A8B8] font-sans uppercase tracking-widest mb-4">
                Role: <span class="text-[#60A5FA] font-semibold">${proj.role}</span> &mdash; ${proj.client}
              </div>

              <p class="text-[#A1A8B8] text-sm md:text-base leading-relaxed mb-6 font-sans">
                ${proj.overview}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-8">
                ${proj.tags
                  .slice(0, 5)
                  .map(
                    (tag) => `
                  <span class="project-tag-pill">${tag}</span>
                `
                  )
                  .join('')}
              </div>

              <!-- Button CTA -->
              <div class="flex flex-wrap items-center gap-3">
                <button 
                  type="button" 
                  onclick="window.openProjectModal('${proj.id}')"
                  class="btn-editorial btn-editorial-burgundy group/btn"
                >
                  <span>Baca Dokumen &amp; Studi Kasus</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>
      </article>
    `;
  }).join('');
}

// Experience & Education Chronicle
function renderChronicle() {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = EXPERIENCES.map(
    (exp) => `
    <div class="chronicle-item reveal-init">
      <div class="flex flex-wrap items-baseline gap-3 mb-1">
        <span class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA]">${exp.period}</span>
        <span class="text-[#A1A8B8]">·</span>
        <span class="text-xs text-[#A1A8B8] font-sans">${exp.location}</span>
        <span class="ml-auto text-[10px] tracking-wider uppercase px-2 py-0.5 border border-[rgba(255,255,255,0.08)] text-[#A1A8B8] bg-[#0D0F14]">
          ${exp.badge}
        </span>
      </div>

      <h4 class="font-serif text-2xl text-white leading-snug">
        ${exp.role}
      </h4>
      <div class="text-sm font-semibold text-[#A1A8B8] mb-3 font-sans">
        ${exp.company}
      </div>

      <p class="text-[#A1A8B8] text-sm mb-4 leading-relaxed font-sans">
        ${exp.description}
      </p>

      <ul class="space-y-2">
        ${exp.points
          .map(
            (pt) => `
          <li class="flex items-start gap-2.5 text-xs text-[#A1A8B8] leading-relaxed font-sans">
            <span class="text-[#60A5FA] mt-1 text-sm leading-none">▪</span>
            <span>${pt}</span>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `
  ).join('');

  // Education details card
  const eduContainer = document.getElementById('education-card-container');
  if (eduContainer) {
    eduContainer.innerHTML = `
      <div class="p-8 bg-[#0D0F14] border border-[rgba(255,255,255,0.08)]/80 shadow-sm relative reveal-init">
        <div class="flex items-center justify-between mb-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
          <div>
            <div class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA]">${EDUCATION.degree}</div>
            <h4 class="font-serif text-2xl md:text-3xl text-white">${EDUCATION.institution}</h4>
          </div>
          <div class="text-right">
            <div class="font-serif text-3xl text-[#60A5FA] font-semibold">${EDUCATION.gpa}</div>
            <div class="text-[10px] text-[#A1A8B8] tracking-wider uppercase font-sans">${EDUCATION.academicHonors}</div>
          </div>
        </div>

        <div class="text-xs text-[#A1A8B8] mb-6 font-sans">
          Period: <span class="font-semibold text-white">${EDUCATION.period}</span> · ${EDUCATION.faculty}
        </div>

        <div class="text-xs tracking-wider uppercase font-semibold text-[#A1A8B8] mb-3 font-sans">
          Curriculum &amp; Key Core Disciplines:
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${EDUCATION.relevantCourses
            .map(
              (c) => `
            <div class="text-xs text-[#A1A8B8] flex items-center gap-2 p-2 bg-slate-50 border border-[rgba(255,255,255,0.08)]/60 font-sans">
              <span class="text-[#60A5FA]">✦</span>
              <span>${c}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }
}

// Organizations & Leadership Section
function renderOrganizations() {
  const container = document.getElementById('organizations-container');
  if (!container) return;

  container.innerHTML = ORGANIZATIONS.map(
    (org) => `
    <article class="p-8 bg-[#0D0F14] border border-[rgba(255,255,255,0.08)]/80 hover:border-[#60A5FA] transition-all duration-300 reveal-init group">
      <div class="flex items-center justify-between mb-4">
        <span class="font-serif italic text-xl text-[#60A5FA]">${org.roman}.</span>
        <span class="text-[10px] tracking-widest uppercase font-semibold text-[#A1A8B8]">${org.category}</span>
        <span class="text-xs text-[#A1A8B8] font-sans">${org.period}</span>
      </div>

      <h4 class="font-serif text-2xl text-white group-hover:text-[#60A5FA] transition-colors leading-snug mb-1">
        ${org.role}
      </h4>
      <div class="text-xs font-semibold uppercase tracking-wider text-[#A1A8B8] mb-4 font-sans">
        ${org.organization}
      </div>

      <p class="text-[#A1A8B8] text-sm leading-relaxed mb-5 font-sans">
        ${org.description}
      </p>

      <ul class="space-y-2 border-t border-[rgba(255,255,255,0.08)]/80 pt-4">
        ${org.points
          .map(
            (p) => `
          <li class="text-xs text-[#A1A8B8] flex items-start gap-2 font-sans">
            <span class="text-[#60A5FA] mt-0.5">•</span>
            <span>${p}</span>
          </li>
        `
          )
          .join('')}
      </ul>
    </article>
  `
  ).join('');
}

// Certificates & Accreditations Catalog
function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  container.innerHTML = CERTIFICATES.map(
    (cert) => `
    <div class="certificate-card reveal-init">
      <div class="flex items-center justify-between mb-4">
        <span class="certificate-badge-stamp">${cert.badge}</span>
        <span class="text-xs font-serif italic text-[#A1A8B8]">${cert.year}</span>
      </div>

      <h4 class="font-serif text-2xl text-white leading-snug mb-1">
        ${cert.title}
      </h4>
      <div class="text-[11px] font-semibold text-[#60A5FA] uppercase tracking-wider mb-4 font-sans">
        ${cert.issuer}
      </div>

      <p class="text-[#A1A8B8] text-xs leading-relaxed mb-6 font-sans">
        ${cert.desc}
      </p>

      <div class="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(255,255,255,0.08)]/60">
        ${cert.skills
          .map(
            (s) => `
          <span class="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#141A26] text-[#A1A8B8] font-sans">
            ${s}
          </span>
        `
          )
          .join('')}
      </div>
    </div>
  `
  ).join('');
}

// Skills Matrix
function renderSkillMatrix() {
  const container = document.getElementById('skills-matrix-container');
  if (!container) return;

  container.innerHTML = SKILL_MATRIX.map(
    (group) => `
    <div class="p-8 bg-[#0D0F14] border border-[rgba(255,255,255,0.08)]/80 reveal-init">
      <div class="flex items-center gap-3 mb-6 pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span class="font-serif italic text-xl text-[#60A5FA]">${group.roman}.</span>
        <h4 class="font-serif text-2xl text-white">${group.category}</h4>
      </div>

      <div class="space-y-4">
        ${group.items
          .map(
            (item) => `
          <div class="border-b border-slate-100 pb-3 last:border-b-0">
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-semibold text-white font-sans">${item.name}</span>
              <span class="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#141A26] text-[#60A5FA] font-sans">
                ${item.level}
              </span>
            </div>
            <p class="text-xs text-[#A1A8B8] font-sans">${item.desc}</p>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `
  ).join('');
}

/* --------------------------------------------------------------------------
   6. Scroll Reveal Observer
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-init');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   7. Monograph Case Study Modal
   -------------------------------------------------------------------------- */
function initModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('project-modal-close');
  const modalBody = document.getElementById('project-modal-body');

  if (!backdrop || !modalBody) return;

  window.openProjectModal = function (projectId) {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (!proj) return;

    modalBody.innerHTML = `
      <div class="p-6 md:p-12">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-6 mb-8 gap-4">
          <div>
            <div class="text-xs font-serif italic text-[#60A5FA] tracking-widest mb-1">
              CATALOG ${proj.catalogNum} · DOKUMEN PROYEK RESMI
            </div>
            <h2 class="font-serif text-3xl md:text-5xl text-white leading-tight">
              ${proj.title}
            </h2>
            <div class="text-xs tracking-widest uppercase font-sans text-[#A1A8B8] mt-2">
              ${proj.category} — ${proj.period}
            </div>
          </div>
          
          <div class="flex items-center gap-3 shrink-0" onclick="event.stopPropagation()">
            <a 
              href="${encodeURI(proj.pdfFile)}" 
              target="_blank" 
              class="btn-editorial btn-editorial-burgundy text-xs py-2.5 px-4"
            >
              <span>Buka di Tab Baru ↗</span>
            </a>
            <a 
              href="${encodeURI(proj.pdfFile)}" 
              download 
              class="btn-editorial text-xs py-2.5 px-4"
            >
              <span>Unduh PDF (${proj.fileSize}) ↓</span>
            </a>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-[#141A26]/80 border border-[rgba(255,255,255,0.08)] mb-8 font-sans">
          ${proj.metrics
            .map(
              (m) => `
            <div>
              <div class="text-[10px] uppercase tracking-wider text-[#A1A8B8]">${m.label}</div>
              <div class="text-sm font-semibold text-white mt-0.5">${m.value}</div>
            </div>
          `
            )
            .join('')}
        </div>

        <!-- Interactive PDF Reader Frame -->
        <div class="border border-[rgba(255,255,255,0.08)] bg-[#0D0F14] mb-8 shadow-sm">
          <div class="bg-[#141A26] px-4 py-3 border-b border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-3 font-sans">
            <div class="flex items-center gap-2.5">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#172554] text-[#60A5FA] border border-[#1E3A8A] text-[10px] uppercase font-bold tracking-widest rounded-sm">
                PDF VIEWER
              </span>
              <span class="text-xs font-semibold text-white">${proj.docTitle}</span>
            </div>
            <div class="text-[11px] text-[#A1A8B8] font-mono">
              ${proj.pdfFile.split('/').pop()} · ${proj.fileSize}
            </div>
          </div>

          <div class="relative w-full h-[600px] md:h-[750px] bg-[#141A26]">
            <iframe 
              src="${encodeURI(proj.pdfFile)}#toolbar=1&navpanes=0&scrollbar=1&view=FitH" 
              class="w-full h-full border-0" 
              title="${proj.title} PDF Document"
            >
              <div class="p-8 text-center bg-[#0D0F14] h-full flex flex-col items-center justify-center">
                <p class="text-sm text-[#A1A8B8] mb-4">Pratinjau PDF interaktif tidak dapat dimuat langsung di browser Anda.</p>
                <a href="${encodeURI(proj.pdfFile)}" target="_blank" class="btn-editorial btn-editorial-burgundy">
                  <span>Buka Dokumen PDF (${proj.fileSize}) ↗</span>
                </a>
              </div>
            </iframe>
          </div>
        </div>

        <!-- Monograph Narrative Sections -->
        <div class="space-y-8 font-sans">
          <div>
            <div class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA] mb-2">01 · Deskripsi &amp; Ruang Lingkup Proyek</div>
            <p class="text-[#A1A8B8] text-sm md:text-base leading-relaxed">
              ${proj.overview}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[rgba(255,255,255,0.08)] pt-6">
            <div>
              <div class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA] mb-2">02 · Tantangan Teknis</div>
              <p class="text-[#A1A8B8] text-sm leading-relaxed">
                ${proj.challenge}
              </p>
            </div>
            <div>
              <div class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA] mb-2">03 · Solusi &amp; Metodologi</div>
              <p class="text-[#A1A8B8] text-sm leading-relaxed">
                ${proj.solution}
              </p>
            </div>
          </div>

          <div class="border-t border-[rgba(255,255,255,0.08)] pt-6">
            <div class="text-[10px] tracking-widest uppercase font-semibold text-[#60A5FA] mb-2">04 · Hasil &amp; Dampak (Deliverables)</div>
            <p class="text-[#A1A8B8] text-sm md:text-base leading-relaxed bg-[#172554]/40 p-4 border-l-2 border-[#1E3A8A]">
              ${proj.impact}
            </p>
          </div>

          <!-- Technologies tags -->
          <div class="border-t border-[rgba(255,255,255,0.08)] pt-6">
            <div class="text-[10px] tracking-widest uppercase font-semibold text-[#A1A8B8] mb-3">Teknologi &amp; Metodologi</div>
            <div class="flex flex-wrap gap-2">
              ${proj.tags
                .map(
                  (t) => `
                <span class="text-xs uppercase tracking-wider px-3 py-1 bg-[#141A26] text-[#A1A8B8] border border-[rgba(255,255,255,0.08)]">
                  ${t}
                </span>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    window.attachCursorHover?.();
  };

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* --------------------------------------------------------------------------
   8. Contact Actions & Clipboard Copy
   -------------------------------------------------------------------------- */
function initContactActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-feedback');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
        if (toast) {
          toast.classList.remove('opacity-0', 'pointer-events-none');
          toast.classList.add('opacity-100');
          setTimeout(() => {
            toast.classList.remove('opacity-100');
            toast.classList.add('opacity-0', 'pointer-events-none');
          }, 3000);
        }
      });
    });
  }
}



/* --------------------------------------------------------------------------
   9. Interactive Dark Luxury Hero Constellation Background
   Sophisticated celestial particle graph reacting subtly to cursor
   -------------------------------------------------------------------------- */
function initHeroConstellation() {
  const canvas = document.getElementById('hero-constellation-canvas');
  if (!canvas) return;

  const heroSection = document.getElementById('home');
  if (!heroSection) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = heroSection.offsetWidth);
  let height = (canvas.height = heroSection.offsetHeight);

  let isHeroVisible = true;
  let animationFrameId = null;

  // Particle configuration
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
  const maxDistance = 120;
  const mouse = { x: -1000, y: -1000, radius: 140 };

  const particles = [];

  class Particle {
    constructor() {
      this.reset();
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.45);
      this.vy = (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.45);
      this.radius = Math.random() * 1.6 + 0.8;
      this.baseAlpha = Math.random() * 0.45 + 0.25;
      this.alpha = this.baseAlpha;
      this.isAccent = Math.random() > 0.65; // ~35% electric blue, others soft white/navy
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseVal = Math.random() * Math.PI * 2;
    }

    update() {
      if (!prefersReducedMotion) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Twinkle pulse
        this.pulseVal += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseVal) * 0.15;
      }

      // Mouse interactive slight repel / attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);

      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 1.2;
        this.y -= Math.sin(angle) * force * 1.2;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isAccent
        ? `rgba(96, 165, 250, ${this.alpha})` // #60A5FA electric blue
        : `rgba(226, 232, 240, ${this.alpha * 0.7})`; // Soft pearlescent white
      ctx.fill();

      // Subtle glow for accent particles
      if (this.isAccent) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${this.alpha * 0.15})`;
        ctx.fill();
      }
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Resize handler
  function handleResize() {
    if (!heroSection) return;
    width = canvas.width = heroSection.offsetWidth;
    height = canvas.height = heroSection.offsetHeight;
  }
  window.addEventListener('resize', handleResize);

  // Mouse interaction on hero
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  heroSection.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Render loop
  function animate() {
    if (!isHeroVisible) {
      animationFrameId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Connect to mouse if nearby
    if (mouse.x > 0 && mouse.y > 0) {
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const lineAlpha = (1 - dist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Update and draw each particle
    for (const p of particles) {
      p.update();
      p.draw();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  // IntersectionObserver to preserve resources when scrolled down
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroVisible = entry.isIntersecting;
          if (isHeroVisible && !animationFrameId) {
            animate();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(heroSection);
  } else {
    animate();
  }
}
