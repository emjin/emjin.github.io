// Turns   **annotated text [tag: comment]**
// into    <span class="annotation" data-tag="tag" data-polarity="neg|pos">
//           <mark class="ann-text">annotated text</mark>
//           <span class="ann-comment" style="--ann-bg: …">
//             <span class="ann-label">Label</span>
//             <span class="ann-body">comment</span>
//           </span>
//         </span>
//
// Also accepted:
//   **annotated text** **[tag: comment]**   (comment in its own bold span)
//   plain text **[tag: comment]**           (no anchor text: rendered as a small marker)
//
// Brackets may be escaped (\[ \]) or not. Inline formatting (italics, links)
// inside the annotated text or the comment is preserved.
// Limitation: a comment can't itself contain "[word:".
import { resolveTag } from '../annotations.config.mjs';

const OPEN = /\[\s*(\+?[\w-]+)\s*:\s*/g;
const TRAILING = /\]([.,;:!?"'”’)…—–-]*)\s*$/;

function el(hName, hProperties, children) {
  // Reuse the "strong" node type; remark-rehype honours data.hName/hProperties.
  return { type: 'strong', data: { hName, hProperties }, children };
}

function text(value) {
  return { type: 'text', value };
}

// Returns { anchor, tag, comment } or null. `anchor` may be empty.
export function splitAnnotation(rawChildren) {
  // Merge adjacent text nodes (some parsers split around escapes like "\[").
  const children = [];
  for (const n of rawChildren) {
    const prev = children[children.length - 1];
    if (n.type === 'text' && prev?.type === 'text') children[children.length - 1] = text(prev.value + n.value);
    else children.push(n);
  }
  if (!children.length) return null;
  const last = children[children.length - 1];
  if (last.type !== 'text') return null;
  // Allow punctuation after the closing bracket, e.g. **text [tag: note].**
  const end = last.value.match(TRAILING);
  if (!end) return null;
  const trailing = end[1];
  if (trailing) children[children.length - 1] = text(last.value.slice(0, end.index + 1));

  // Find the right-most "[tag:" opener in a top-level text child.
  for (let i = children.length - 1; i >= 0; i--) {
    const node = children[i];
    if (node.type !== 'text') continue;
    const matches = [...node.value.matchAll(OPEN)];
    if (!matches.length) continue;
    const m = matches[matches.length - 1];

    const before = node.value.slice(0, m.index).replace(/\s+$/, '');
    const after = node.value.slice(m.index + m[0].length);

    const anchor = [...children.slice(0, i)];
    if (before) anchor.push(text(before));

    let comment = [];
    if (after) comment.push(text(after));
    comment.push(...children.slice(i + 1));
    comment = comment.map((n) => ({ ...n })); // shallow copy before mutating
    const tail = comment[comment.length - 1];
    if (!tail || tail.type !== 'text') return null;
    tail.value = tail.value.replace(/\]\s*$/, '').replace(/\s+$/, '');
    comment = comment.filter((n) => !(n.type === 'text' && n.value === ''));

    return { anchor, tag: m[1], comment, trailing };
  }
  return null;
}

const isPlainStrong = (n) => n?.type === 'strong' && !n.data?.hName;
const isBlank = (n) => n?.type === 'text' && /^\s*$/.test(n.value);

export default function remarkAnnotations() {
  return (tree) => {
    let count = 0;

    const build = ({ anchor, tag, comment }) => {
      const { label, color, positive, base } = resolveTag(tag);
      count += 1;
      const point = anchor.length === 0;
      return el(
        'span',
        {
          className: point ? ['annotation', 'ann-point'] : ['annotation'],
          id: `ann-${count}`,
          dataTag: tag,
          dataBaseTag: base,
          dataPolarity: positive ? 'pos' : 'neg',
        },
        [
          el('mark', { className: ['ann-text'] }, point ? [text('◆')] : anchor),
          el('span', { className: ['ann-comment'], style: `--ann-bg: ${color}` }, [
            el('span', { className: ['ann-label'] }, [text(label)]),
            el('span', { className: ['ann-body'] }, comment),
          ]),
        ],
      );
    };

    const walk = (node) => {
      if (!node.children) return;
      const out = [];
      for (const child of node.children) {
        if (child.type === 'strong') {
          const parts = splitAnnotation(child.children);
          if (parts) {
            if (parts.anchor.length === 0) {
              // Comment-only bold: attach to an immediately preceding bold span.
              if (isBlank(out.at(-1)) && isPlainStrong(out.at(-2))) {
                out.pop();
                parts.anchor = out.pop().children;
              } else if (isPlainStrong(out.at(-1))) {
                parts.anchor = out.pop().children;
              }
            }
            out.push(build(parts));
            if (parts.trailing) out.push(text(parts.trailing));
            continue;
          }
        }
        walk(child);
        out.push(child);
      }
      node.children = out;
    };
    walk(tree);
  };
}
