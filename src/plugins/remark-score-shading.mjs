// Shades table cells that hold a single score: 1–2 red, 3–4 orange, 5–6 yellow.
const SHADES = { 1: 'red', 2: 'red', 3: 'orange', 4: 'orange', 5: 'yellow', 6: 'yellow' };

const plain = (node) => (node.value ?? '') + (node.children ?? []).map(plain).join('');

export function scoreShade(text) {
  return SHADES[text.trim()] ?? null;
}

export default function remarkScoreShading() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'table') {
        for (const row of node.children.slice(1)) {
          for (const cell of row.children) {
            const shade = scoreShade(plain(cell));
            if (!shade) continue;
            cell.data ??= {};
            cell.data.hProperties ??= {};
            cell.data.hProperties.className = [`score-${shade}`];
          }
        }
        return;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
