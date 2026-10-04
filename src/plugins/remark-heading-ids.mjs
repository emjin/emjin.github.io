// Gives headings stable, predictable ids for in-page links.
// h1/h2: slug of the heading text            "Hermione in Slytherin" → #hermione-in-slytherin
// h3+:   parent h2's slug + own slug          "Sonnet" under it      → #hermione-in-slytherin-sonnet
// (so repeated headings like "Sonnet" under different sections stay unique)
import { slugify } from './remark-story-links.mjs';

const plain = (node) => (node.value ?? '') + (node.children ?? []).map(plain).join('');

export function headingId(depth, text, state) {
  const slug = slugify(text);
  if (depth <= 2) {
    state.section = slug;
    return slug;
  }
  return state.section ? `${state.section}-${slug}` : slug;
}

export default function remarkHeadingIds() {
  return (tree) => {
    const state = { section: '' };
    for (const node of tree.children) {
      if (node.type !== 'heading') continue;
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.id ??= headingId(node.depth, plain(node), state);
    }
  };
}
