const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const dropdownWraps = [...document.querySelectorAll('.nav-dropdown-wrap')];

const setDropdownState = (wrapper, isOpen) => {
  wrapper.classList.toggle('open', isOpen);
  wrapper.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', String(isOpen));
};

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    dropdownWraps.forEach((wrapper) => setDropdownState(wrapper, false));
  });
});

dropdownWraps.forEach((wrapper) => {
  wrapper.querySelector('.dropdown-toggle')?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !wrapper.classList.contains('open');
    dropdownWraps.forEach((item) => setDropdownState(item, item === wrapper && isOpen));
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown-wrap')) {
    dropdownWraps.forEach((wrapper) => setDropdownState(wrapper, false));
  }
  if (!event.target.closest('.main-nav') && !event.target.closest('.menu-toggle')) {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  dropdownWraps.forEach((wrapper) => setDropdownState(wrapper, false));
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.product-card').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    document.querySelectorAll('.product-card').forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
  });
});

document.querySelector('.rail-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('[data-feature-tabs]').forEach((module) => {
  const triggers = [...module.querySelectorAll('[role="tab"]')];
  const panels = [...module.querySelectorAll('[role="tabpanel"]')];

  const activate = (index, moveFocus = false) => {
    triggers.forEach((trigger, triggerIndex) => {
      const active = triggerIndex === index;
      trigger.classList.toggle('is-active', active);
      trigger.setAttribute('aria-selected', String(active));
      trigger.setAttribute('tabindex', active ? '0' : '-1');
    });
    panels.forEach((panel, panelIndex) => {
      const active = panelIndex === index;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
    if (moveFocus) triggers[index].focus();
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => activate(index));
    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const nextIndex = (index + (event.key === 'ArrowRight' ? 1 : -1) + triggers.length) % triggers.length;
      activate(nextIndex, true);
    });
  });
});

// Keep the shared legacy headers pointed at the local prototype pages.
const localContentLinks = {
  'https://www.datadowell.com/': 'index.html',
  'https://www.datadowell.com/case': 'case.html',
  'https://info.datadowell.com/': 'insights.html',
  'https://www.datadowell.com/categories/baogao': 'insights.html#reports',
  'https://www.datadowell.com/about': 'about.html',
  'https://www.datadowell.com/news': 'about.html#company-news'
};

document.querySelectorAll('a[href]').forEach((link) => {
  const localHref = localContentLinks[link.getAttribute('href')];
  if (localHref) link.setAttribute('href', localHref);
});
