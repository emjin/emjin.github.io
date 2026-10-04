// Tag → shorthand label + comment-box shading.
//
// Lookup order for a tag like "+prose": exact key ("+prose") first, then the
// tag without its "+" ("prose"), then the fallback below.
// Tags starting with "+" render their annotated text in green; all others in red.
//
// PLACEHOLDER labels (guessed from your rubric) — replace with your own mappings.
export const tags = {
  'prose':      { label: 'Prose',                     color: '#fbe4e4' },
  'cont':       { label: 'Continuity',                color: '#fcefd8' },
  'char':       { label: 'Character/plot',            color: '#efe6f7' },
  'canon-cont': { label: 'Continuity with canon',     color: '#e5ebf6' },
  'canon-char': { label: 'Character recognizability', color: '#e2f1f1' },
  'exec':       { label: 'Execution of the prompt',   color: '#f4f1dc' },
};

export const fallback = { color: '#efefef' }; // label falls back to the raw tag

export function resolveTag(tag) {
  const base = tag.replace(/^\+/, '');
  const entry = tags[tag] ?? tags[base] ?? {};
  return {
    label: entry.label ?? tag,
    color: entry.color ?? fallback.color,
    positive: tag.startsWith('+'),
    base,
  };
}
