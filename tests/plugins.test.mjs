import { test } from 'node:test';
import assert from 'node:assert/strict';
import remarkAnnotations, { splitAnnotation } from '../src/plugins/remark-annotations.mjs';
import remarkStoryLinks from '../src/plugins/remark-story-links.mjs';

const t = (value) => ({ type: 'text', value });
const em = (value) => ({ type: 'emphasis', children: [t(value)] });
const plain = (nodes) => nodes.map((n) => (n.type === 'text' ? n.value : `*${n.children[0].value}*`)).join('');

test('splits the example annotation', () => {
  const r = splitAnnotation([
    t('Professor Flitwick sounded when a student produced an unusually elegant Charm [cont: Hermione wouldn’t know this yet]'),
  ]);
  assert.equal(r.tag, 'cont');
  assert.equal(plain(r.anchor), 'Professor Flitwick sounded when a student produced an unusually elegant Charm');
  assert.equal(plain(r.comment), 'Hermione wouldn’t know this yet');
});

test('handles + tags, hyphens and italics in both parts', () => {
  const r = splitAnnotation([t('She '), em('ran'), t(' home [+canon-cont: matches '), em('book two'), t(' ]')]);
  assert.equal(r.tag, '+canon-cont');
  assert.equal(plain(r.anchor), 'She *ran* home');
  assert.equal(plain(r.comment), 'matches *book two*');
});

test('ignores ordinary bold text', () => {
  assert.equal(splitAnnotation([t('just bold')]), null);
  assert.equal(splitAnnotation([t('a [bracket] here')]), null);
});

test('plugin rewrites strong nodes with label, colour and polarity', () => {
  const tree = { type: 'root', children: [{ type: 'paragraph', children: [
    t('x '), { type: 'strong', children: [t('good line [+prose: lovely]')] },
    t(' y '), { type: 'strong', children: [t('normal bold')] },
  ] }] };
  remarkAnnotations()(tree);
  const [, ann, , normal] = tree.children[0].children;
  assert.equal(ann.data.hName, 'span');
  assert.equal(ann.data.hProperties.dataPolarity, 'pos');
  assert.equal(ann.data.hProperties.dataTag, '+prose');
  const comment = ann.children[1];
  assert.match(comment.data.hProperties.style, /--ann-bg: #/);
  assert.equal(comment.children[0].children[0].value, 'Prose');
  assert.equal(normal.data, undefined);
});

test('comment in its own bold span attaches to preceding bold', () => {
  const tree = { type: 'root', children: [{ type: 'paragraph', children: [
    t('x '), { type: 'strong', children: [t('anchor text')] }, t(' '),
    { type: 'strong', children: [t('[canon-cont: nope]')] }, t('.'),
  ] }] };
  remarkAnnotations()(tree);
  const kids = tree.children[0].children;
  assert.equal(kids.length, 3);
  assert.equal(kids[1].children[0].children[0].value, 'anchor text');
  assert.equal(kids[1].children[1].children[1].children[0].value, 'nope');
});

test('comment-only bold after plain text becomes a point marker', () => {
  const tree = { type: 'root', children: [{ type: 'paragraph', children: [
    t('vibes '), { type: 'strong', children: [t('[+prose: fun]')] },
  ] }] };
  remarkAnnotations()(tree);
  const ann = tree.children[0].children[1];
  assert.deepEqual(ann.data.hProperties.className, ['annotation', 'ann-point']);
  assert.equal(tree.children[0].children[0].value, 'vibes ');
});

test('story links are rewritten', () => {
  const link = (url) => ({ type: 'link', url, children: [] });
  const tree = { type: 'root', children: [link('sample-story.md'), link('./stories/Story Two.md#part-2'), link('https://x.com/a.md')] };
  remarkStoryLinks()(tree);
  assert.deepEqual(tree.children.map((l) => l.url), ['/stories/sample-story', '/stories/story-two#part-2', 'https://x.com/a.md']);
});

import remarkHeadingIds from '../src/plugins/remark-heading-ids.mjs';
test('h3 ids are prefixed with their h2 section', () => {
  const h = (depth, value) => ({ type: 'heading', depth, children: [t(value)] });
  const tree = { type: 'root', children: [h(1, 'The stories'), h(2, 'Tris at Lightsbridge'), h(3, 'Sonnet'), h(2, 'Discussion')] };
  remarkHeadingIds()(tree);
  assert.deepEqual(tree.children.map((n) => n.data.hProperties.id),
    ['the-stories', 'tris-at-lightsbridge', 'tris-at-lightsbridge-sonnet', 'discussion']);
});

test('shades score cells by band', async () => {
  const { scoreShade } = await import('../src/plugins/remark-score-shading.mjs');
  assert.deepEqual([1, 2, 3, 4, 5, 6].map((n) => scoreShade(String(n))), ['red', 'red', 'orange', 'orange', 'yellow', 'yellow']);
  assert.equal(scoreShade(' 4 '), 'orange');
  assert.equal(scoreShade('Prose'), null);
  assert.equal(scoreShade('7'), null);
});

test('score tables are filled from the per-story scores', async () => {
  const { fromMarkdown } = await import('mdast-util-from-markdown');
  const { gfmTable } = await import('micromark-extension-gfm-table');
  const { gfmTableFromMarkdown } = await import('mdast-util-gfm-table');
  const { default: remarkScoreTable } = await import('../src/plugins/remark-score-table.mjs');
  const md = [
    '## Hermione in Slytherin', '### Sonnet', 'First chapter:  \nProse: 2', 'Full:  \nCharacter/plot: 5', 'Overall score: 6',
    '### Opus', 'Prose: 3', 'Overall score: 1',
    '## Discussion', '**Hermione in Slytherin:**',
    '| Metric | Sonnet | Opus |\n| :-- | :-- | :-- |\n| Prose | 9 | 9 |\n| Final \\- character/plot | 9 | 9 |\n| Final \\- overall | 9 | 9 |',
  ].join('\n\n');
  const tree = fromMarkdown(md, { extensions: [gfmTable()], mdastExtensions: [gfmTableFromMarkdown()] });
  remarkScoreTable()(tree);
  const cells = (n) => n.children.map((c) => (c.children[0]?.value ?? ''));
  const table = tree.children.find((n) => n.type === 'table');
  assert.deepEqual(table.children.slice(1).map(cells), [
    ['Prose', '2', '3'],
    ['Final - character/plot', '5', '9'],
    ['Final - overall', '6', '1'],
  ]);
});
