const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const serviceContext = formData.get('serviceContext') || 'quote';
    const name = formData.get('name') || '';
    const company = formData.get('company') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const load = formData.get('load') || '';
    const weight = formData.get('weight') || '';
    const dimensions = formData.get('dimensions') || '';
    const site = formData.get('site') || '';
    const offload = formData.get('offload') || '';
    const countries = formData.get('countries') || '';
    const date = formData.get('date') || '';
    const notes = formData.get('notes') || '';

    const intro = serviceContext === 'abnormal transport'
      ? 'Good day Mercor Transport, I need an abnormal load transport quote.'
      : 'Good day Mercor Cranes, I need a crane/lifting quote.';

    const lines = [
      intro,
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      '',
      `Load / job: ${load}`,
      `Estimated mass: ${weight}`,
      `Dimensions: ${dimensions}`,
      `Loading / site address: ${site}`,
      offload ? `Offloading address: ${offload}` : '',
      countries ? `Countries / borders: ${countries}` : '',
      `Required date: ${date}`,
      `Notes: ${notes}`,
      '',
      'I can send photos of the load and site access.'
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    const mercorWhatsAppNumber = '27826525694';
    window.open(`https://wa.me/${mercorWhatsAppNumber}?text=${message}`, '_blank', 'noopener');
  });
}


// Varied scroll motion: only plays while scrolling down. Resets when the page returns to the top.
const directionalSelectors = [
  '.hero-copy h1', '.hero-copy .eyebrow', '.hero-text', '.hero-actions', '.hero-proof span',
  '.section-heading .eyebrow', '.section-heading h2', '.section-heading p',
  '.split-section > div > .eyebrow', '.split-section > div > h2', '.split-section > div > p', '.text-link',
  '.card', '.trust-strip div', '.industry-grid div', '.process-step', '.safety-card', '.mini-stats div',
  '.area-tags span', '.quote-checklist', '.quote-form', '.faq-grid details', '.stock-card', '.photo-card',
  '.client-pill', '.company-detail', '.footer'
];

const directions = ['motion-left', 'motion-up', 'motion-right', 'motion-down'];
const items = [];

directionalSelectors.forEach((selector) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (!element.classList.contains('motion-item')) {
      element.classList.add('motion-item');
      element.classList.add(directions[items.length % directions.length]);
      element.style.setProperty('--stagger', items.length % 8);
      items.push(element);
    }
  });
});

document.querySelectorAll('.cards, .process-grid, .industry-grid, .area-tags, .faq-grid, .stock-grid, .trust-strip, .mini-stats, .photo-grid, .company-details-grid').forEach((group) => {
  Array.from(group.children).forEach((child, index) => {
    child.style.setProperty('--stagger', index);
  });
});

const revealItems = Array.from(document.querySelectorAll('.reveal, .motion-item'));

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.88 && rect.bottom > window.innerHeight * -0.08;
};

let lastScrollY = window.scrollY;
let isScrollingDown = true;
let topResetArmed = false;
let topResetTimer = null;

const showVisibleItems = (force = false) => {
  if (!force && !isScrollingDown && window.scrollY > 8) return;

  revealItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('is-visible');
    }
  });
};

const resetAnimationsAtTop = () => {
  revealItems.forEach((item) => item.classList.remove('is-visible'));
  document.body.offsetHeight;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => showVisibleItems(true));
  });
};

if ('IntersectionObserver' in window && revealItems.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && (isScrollingDown || window.scrollY <= 8)) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -70px 0px'
  });

  revealItems.forEach((item) => revealObserver.observe(item));

  window.addEventListener('scroll', () => {
    const currentY = Math.max(0, window.scrollY);
    isScrollingDown = currentY > lastScrollY;
    lastScrollY = currentY;

    if (currentY > 140) {
      topResetArmed = true;
    }

    if (currentY <= 8 && topResetArmed) {
      topResetArmed = false;
      clearTimeout(topResetTimer);
      topResetTimer = setTimeout(resetAnimationsAtTop, 50);
    }

    if (isScrollingDown) {
      showVisibleItems();
    }
  }, { passive: true });

  showVisibleItems(true);
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
