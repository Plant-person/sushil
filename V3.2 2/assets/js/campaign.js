
// Smooth-scroll + active nav state
(() => {
  const navLinks = document.querySelectorAll('.navbar .nav-link[href^="#"]');
  const sections = [...document.querySelectorAll('section[id]')];

  const setActive = () => {
    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // collapse mobile menu on click
  const navCollapse = document.getElementById('navCollapse');
  navLinks.forEach(a => a.addEventListener('click', () => {
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
      bsCollapse.hide();
    }
  }));

  // Year in footer
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
})();
