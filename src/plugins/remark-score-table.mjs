// Fills score tables from the scores written earlier in the post, so the
// table can't drift from the per-story sections.
//
// Scores are collected from lines like "Prose: 3" under a ### heading (the
// model), keyed by the ## heading above it (the prompt). After a "Full:" line,
// scores count as final: "Character/plot: 5" → "Final - character/plot", and
// "Overall score: 4" → "Final - overall".
//
// A table is filled when the paragraph right before it names a ## heading,
// e.g. **Hermione in Slytherin:**. Its columns are matched to ### headings
// and its rows to metric names; cells with no matching score are left as-is.

const plain = (node) =>
  node.type === 'break' ? '\n' : (node.value ?? '') + (node.children ?? []).map(plain).join('');

const norm = (s) => s.replace(/\s+/g, ' ').replace(/:$/, '').trim().toLowerCase();

const SCORE_LINE = /^(.+?):\s*(\d+)$/;

export function collectScores(tree) {
  const scores = new Map(); // "prompt|model|metric" → "4"
  let prompt = '';
  let model = '';
  let final = false;
  for (const node of tree.children) {
    if (node.type === 'heading') {
      if (node.depth <= 2) prompt = node.depth === 2 ? norm(plain(node)) : '';
      model = node.depth === 3 ? norm(plain(node)) : '';
      final = false;
      continue;
    }
    if (node.type !== 'paragraph' || !prompt || !model) continue;
    for (const line of plain(node).split('\n').map((l) => l.trim())) {
      if (norm(line) === 'full') {
        final = true;
        continue;
      }
      const m = line.match(SCORE_LINE);
      if (!m) continue;
      let metric = norm(m[1]);
      if (metric === 'overall score') metric = 'final - overall';
      else if (final) metric = `final - ${metric}`;
      scores.set(`${prompt}|${model}|${metric}`, m[2]);
    }
  }
  return scores;
}

export default function remarkScoreTable() {
  return (tree) => {
    const scores = collectScores(tree);
    const prompts = new Set([...scores.keys()].map((k) => k.split('|')[0]));
    tree.children.forEach((node, i) => {
      const label = tree.children[i - 1];
      if (node.type !== 'table' || label?.type !== 'paragraph') return;
      const prompt = norm(plain(label));
      if (!prompts.has(prompt)) return;
      const [header, ...rows] = node.children;
      const models = header.children.map((cell) => norm(plain(cell)));
      for (const row of rows) {
        const metric = norm(plain(row.children[0]));
        row.children.forEach((cell, c) => {
          const score = scores.get(`${prompt}|${models[c]}|${metric}`);
          if (score !== undefined) cell.children = [{ type: 'text', value: score }];
        });
      }
    });
  };
}
