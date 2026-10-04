// Show/hide toggle + margin-note layout with dotted connectors.
const STORAGE_KEY = 'emmajin:showComments';
const SVG_NS = 'http://www.w3.org/2000/svg';
const NOTE_SPACING = 10; // px between stacked notes

function init() {
  const story = document.getElementById('story');
  if (!story) return;
  const body = story.querySelector('.story-body');
  const svg = story.querySelector('.ann-connectors');
  const button = document.getElementById('toggle-comments');
  const annotations = [...story.querySelectorAll('.annotation')];

  let shown = true;
  try { shown = localStorage.getItem(STORAGE_KEY) !== 'false'; } catch {}

  // Margin mode needs room for text column + gap + note column.
  const marginQuery = () => {
    const css = getComputedStyle(document.documentElement);
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const noteW = parseFloat(css.getPropertyValue('--note-w')) * rem;
    const gap = parseFloat(css.getPropertyValue('--note-gap')) * rem;
    return story.clientWidth >= body.offsetWidth + gap + noteW;
  };

  const lines = new Map(); // annotation -> svg element

  function layout() {
    svg.replaceChildren();
    lines.clear();
    for (const a of annotations) {
      const box = a.querySelector('.ann-comment');
      box.style.top = box.style.left = '';
    }
    story.style.minHeight = '';

    const useMargin = shown && marginQuery();
    story.classList.toggle('margin-mode', useMargin);
    if (!useMargin) return;

    const css = getComputedStyle(document.documentElement);
    const rem = parseFloat(css.fontSize);
    const gap = parseFloat(css.getPropertyValue('--note-gap')) * rem;
    const origin = story.getBoundingClientRect();
    const textRight = body.getBoundingClientRect().right - origin.left;
    const noteLeft = textRight + gap;
    let lastBottom = -Infinity;

    for (const a of annotations) {
      const mark = a.querySelector('.ann-text');
      const box = a.querySelector('.ann-comment');
      const rects = mark.getClientRects();
      if (!rects.length) continue;
      const r = rects[rects.length - 1]; // last line of the annotated text

      const anchorTop = r.top - origin.top;
      const top = Math.max(anchorTop - 6, lastBottom + NOTE_SPACING);
      box.style.left = `${noteLeft}px`;
      box.style.top = `${top}px`;
      lastBottom = top + box.offsetHeight;

      // Dotted line: from end of annotated text, along the gap under that line,
      // to the right edge of the text column, then across to the note.
      const y = r.bottom - origin.top + 1;
      const x0 = r.right - origin.left;
      const color = getComputedStyle(mark).color;
      const line = document.createElementNS(SVG_NS, 'polyline');
      line.setAttribute(
        'points',
        `${x0},${y} ${textRight + 8},${y} ${noteLeft},${top + 12}`,
      );
      line.setAttribute('stroke', color);
      svg.appendChild(line);
      lines.set(a, line);
    }
    story.style.minHeight = `${lastBottom}px`;
  }

  function apply() {
    story.classList.toggle('comments-hidden', !shown);
    button.textContent = shown ? 'Hide comments' : 'Show comments';
    button.setAttribute('aria-pressed', String(shown));
    layout();
  }

  button.addEventListener('click', () => {
    shown = !shown;
    try { localStorage.setItem(STORAGE_KEY, String(shown)); } catch {}
    apply();
  });

  // Hover/focus highlights both the text and its note.
  for (const a of annotations) {
    a.tabIndex = 0;
    const on = () => { a.classList.add('active'); lines.get(a)?.classList.add('active'); };
    const off = () => { a.classList.remove('active'); lines.get(a)?.classList.remove('active'); };
    a.addEventListener('mouseenter', on);
    a.addEventListener('mouseleave', off);
    a.addEventListener('focus', on);
    a.addEventListener('blur', off);
  }

  let frame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(layout);
  });
  document.fonts?.ready.then(layout);
  window.addEventListener('load', layout);
  apply();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
