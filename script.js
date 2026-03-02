// CUSTOM CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a, .edu-card, .exp-card, .pub-card, .extras-card').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(240,165,0,0.8)'; });
    el.addEventListener('mouseleave', () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(240,165,0,0.5)'; });
  });

  // SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  reveals.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.08}s`; obs.observe(el); });