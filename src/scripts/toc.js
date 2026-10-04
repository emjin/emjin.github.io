// Sidebar contents: always open on wide screens, collapsible on narrow ones,
// and highlights the section currently being read.
function init() {
  const nav = document.querySelector('.post-toc');
  if (!nav) return;
  const details = nav.querySelector('details');
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const targets = links
    .map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1))))
    .filter(Boolean);

  const wide = window.matchMedia('(min-width: 64rem)');
  const syncOpen = () => { details.open = wide.matches; };
  wide.addEventListener('change', syncOpen);
  syncOpen();

  // Close the collapsed menu after picking a section on narrow screens.
  links.forEach((a) => a.addEventListener('click', () => { if (!wide.matches) details.open = false; }));

  let current;
  const update = () => {
    const offset = window.innerHeight * 0.25;
    let active = targets[0];
    for (const t of targets) {
      if (t.getBoundingClientRect().top - offset <= 0) active = t;
      else break;
    }
    if (active === current) return;
    current = active;
    for (const a of links) {
      const on = a.hash.slice(1) === active?.id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    }
    // Keep the active link visible inside a scrolling sidebar.
    const link = links.find((a) => a.classList.contains('active'));
    if (link && wide.matches) link.scrollIntoView({ block: 'nearest' });
  };

  let frame;
  window.addEventListener('scroll', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  }, { passive: true });
  update();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
