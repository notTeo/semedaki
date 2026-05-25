/* ═══════════════════════════════════════════════════════════════════
   Σεμεδάκι — Café Bistro
   script.js — Vanilla JS, no frameworks, no modules
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

// ── Suppress observer during click-initiated smooth scroll ────────
var suppressObserver = false;
var suppressTimer    = null;

// ── Category display order ────────────────────────────────────────
const CATEGORY_ORDER = [
  'Καφέδες',
  'Ροφήματα Σοκολάτας',
  'Τσάι',
  'Φυσικοί Χυμοί',
  'Smoothies',
  'Milkshakes',
  'Snacks Αλμυρά',
  'Sandwiches',
  'Snacks Γλυκά',
  'Γλυκά',
  'Cocktails',
  'Αναψυκτικά',
];

// ── Escape HTML to prevent XSS ────────────────────────────────────
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Category name → safe element ID ──────────────────────────────
function categoryToId(index) {
  return 'menu-cat-' + index;
}

// ── Group items by category, respecting CATEGORY_ORDER ───────────
function groupByCategory(items) {
  // Build a map: categoryName → [items]
  const map = new Map();
  items.forEach(function (item) {
    const cat = item.category || 'Άλλα';
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat).push(item);
  });

  // Sort categories: known order first, then remainder alphabetically
  const orderedCategories = [];
  CATEGORY_ORDER.forEach(function (name) {
    if (map.has(name)) {
      orderedCategories.push({ name: name, items: map.get(name) });
      map.delete(name);
    }
  });

  // Append remaining categories (not in predefined order), sorted alphabetically
  const remaining = Array.from(map.keys()).sort(function (a, b) {
    return a.localeCompare(b, 'el');
  });
  remaining.forEach(function (name) {
    orderedCategories.push({ name: name, items: map.get(name) });
  });

  return orderedCategories;
}

// ── Render a single menu card ─────────────────────────────────────
function createCard(item) {
  const article = document.createElement('article');
  article.className = 'menu-card';

  const hasDesc = item.description && item.description.trim().length > 0;

  // Only make expandable (keyboard-focusable) when there's a description
  if (hasDesc) {
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'button');
    article.setAttribute('aria-expanded', 'false');
    article.setAttribute('aria-label', escapeHtml(item.name) + ' — πατήστε για περισσότερα');
  }

  const descHtml = hasDesc
    ? '<p class="card-desc">' + escapeHtml(item.description.trim()) + '</p>'
    : '';

  article.innerHTML =
    '<div class="card-img-wrap">' +
      '<img' +
        ' src="' + escapeHtml(item.image) + '"' +
        ' alt="' + escapeHtml(item.name) + '"' +
        ' loading="lazy"' +
        ' decoding="async"' +
      ' />' +
    '</div>' +
    '<div class="card-body">' +
      '<h4 class="card-name">' + escapeHtml(item.name) + '</h4>' +
      descHtml +
      '<div class="card-footer">' +
        '<span class="card-price">' + escapeHtml(item.price) + '</span>' +
      '</div>' +
    '</div>';

  if (!hasDesc) return article;

  // Toggle expanded description on click or Enter/Space
  function toggleExpand() {
    const expanded = article.classList.toggle('expanded');
    article.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  article.addEventListener('click', toggleExpand);
  article.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  });

  return article;
}

// ── Render menu categories and cards ─────────────────────────────
function renderMenu(grouped) {
  const menuContent = document.getElementById('menu-content');
  const pillsContainer = document.getElementById('category-pills');

  if (!menuContent || !pillsContainer) return;

  menuContent.innerHTML = '';
  pillsContainer.innerHTML = '';

  grouped.forEach(function (group, index) {
    const sectionId = categoryToId(index);

    // ── Category section ──────────────────────────────
    const section = document.createElement('div');
    section.className = 'menu-category';
    section.id = sectionId;
    section.setAttribute('data-category', group.name);

    const heading = document.createElement('h3');
    heading.className = 'category-title';
    heading.textContent = group.name;
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    group.items.forEach(function (item) {
      grid.appendChild(createCard(item));
    });

    section.appendChild(grid);
    menuContent.appendChild(section);

    // ── Pill ──────────────────────────────────────────
    const pill = document.createElement('button');
    pill.className = 'pill';
    pill.textContent = group.name;
    pill.setAttribute('data-target', sectionId);
    pill.setAttribute('aria-label', 'Μετάβαση στην κατηγορία ' + group.name);

    if (index === 0) pill.classList.add('active');

    pill.addEventListener('click', function () {
      const target = document.getElementById(sectionId);
      if (!target) return;

      // ① Calculate scroll position FIRST — before anything that can change scrollY
      const header      = document.getElementById('site-header');
      const pillsWrap   = document.querySelector('.pills-wrapper');
      const headerH     = header    ? header.offsetHeight    : 0;
      const pillsH      = pillsWrap ? pillsWrap.offsetHeight : 0;
      const offset      = headerH + pillsH + 16;
      const top         = target.getBoundingClientRect().top + window.scrollY - offset;

      // ② Update active UI
      document.querySelectorAll('.pill').forEach(function (p) {
        p.classList.remove('active');
      });
      pill.classList.add('active');
      pill.scrollIntoView({ block: 'nearest', inline: 'nearest' });

      // ③ Lock the observer out for 800ms — use a real timer variable so it's cancellable
      suppressObserver = true;
      clearTimeout(suppressTimer);
      suppressTimer = setTimeout(function () {
        suppressObserver = false;
      }, 800);

      // ④ Scroll to section
      window.scrollTo({ top: top, behavior: 'smooth' });
    });

    pillsContainer.appendChild(pill);
  });

  // Set up IntersectionObserver to update active pill on scroll
  // Pass sticky offset so the observer ignores sections hidden behind the header+pills bar
  const obsHeader   = document.getElementById('site-header');
  const obsPillsWrap = document.querySelector('.pills-wrapper');
  const topOffset   = (obsHeader    ? obsHeader.offsetHeight    : 0)
                    + (obsPillsWrap ? obsPillsWrap.offsetHeight : 0);
  initCategoryObserver(grouped, topOffset);
}

// ── IntersectionObserver: active pill tracking ───────────────────
function initCategoryObserver(grouped, topOffset) {
  const pills = document.querySelectorAll('.pill');
  if (!pills.length) return;

  // Map from section ID → pill element
  const pillMap = {};
  pills.forEach(function (pill) {
    pillMap[pill.getAttribute('data-target')] = pill;
  });

  const visibleIds = new Set();

  // Get all section elements in document order
  const sections = Array.from(document.querySelectorAll('.menu-category'));

  function updateActivePill() {
    if (suppressObserver) return;   // click-initiated scroll in progress
    if (!visibleIds.size) return;

    // Pick the first (topmost) visible section
    for (var i = 0; i < sections.length; i++) {
      if (visibleIds.has(sections[i].id)) {
        const activePill = pillMap[sections[i].id];
        if (activePill) {
          pills.forEach(function (p) { p.classList.remove('active'); });
          activePill.classList.add('active');

          // Scroll the active pill into view within the pills container
          activePill.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
        break;
      }
    }
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleIds.add(entry.target.id);
        } else {
          visibleIds.delete(entry.target.id);
        }
      });
      updateActivePill();
    },
    {
      // Negative top margin excludes sections hidden behind the sticky header+pills bar,
      // so the active pill only updates once the section is actually visible on screen.
      rootMargin: '-' + (topOffset || 0) + 'px 0px -40% 0px',
      threshold: 0,
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

// ── IntersectionObserver: section fade-in ────────────────────────
function initFadeObserver() {
  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const sections = document.querySelectorAll('.fade-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.08 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
}


// ── Mobile menu ───────────────────────────────────────────────────
function initMobileMenu() {
  var hamburger   = document.getElementById('hamburger');
  var mobileMenu  = document.getElementById('mobile-menu');
  var navLinks    = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Κλείσιμο μενού πλοήγησης');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Άνοιγμα μενού πλοήγησης');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  hamburger.addEventListener('click', function () {
    if (mobileMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when a nav link is tapped
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

// ── Hours: highlight today ────────────────────────────────────────
function initHours() {
  var today = new Date().getDay(); // 0 = Sunday, 1 = Monday, …, 6 = Saturday

  document.querySelectorAll('[data-day]').forEach(function (row) {
    var days = row.getAttribute('data-day').split(',').map(Number);
    if (days.indexOf(today) !== -1) {
      row.classList.add('today');
    }
  });
}

// ── Load & render menu ────────────────────────────────────────────
function loadMenu() {
  const menuContent = document.getElementById('menu-content');

  // PRODUCTS is defined in assets/products.js (loaded before this script)
  if (typeof PRODUCTS === 'undefined' || !Array.isArray(PRODUCTS) || PRODUCTS.length === 0) {
    if (menuContent) {
      menuContent.innerHTML =
        '<p style="color:var(--color-muted);padding:2rem 0;text-align:center;">' +
        'Το μενού δεν ήταν δυνατό να φορτωθεί.' +
        '</p>';
    }
    console.error('PRODUCTS not found — make sure assets/products.js is loaded.');
    return;
  }

  const grouped = groupByCategory(PRODUCTS);
  renderMenu(grouped);
}

// ── Bootstrap ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  loadMenu();       // uses window.PRODUCTS from assets/products.js
  initHours();
  initMobileMenu();
  initFadeObserver();
});
