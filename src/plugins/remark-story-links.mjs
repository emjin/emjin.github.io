// Rewrites markdown links to story files so you can keep plain relative links
// in your writeup:   [Story one](story-one.md)  or  [..](./stories/story-one.md)
// become             /stories/story-one
const STORY_LINK = /^(?:\.{1,2}\/)*(?:stories\/)?([^/#?]+)\.md(#.*)?$/i;

export function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export default function remarkStoryLinks({ base = '' } = {}) {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'link' && typeof node.url === 'string') {
        const m = node.url.match(STORY_LINK);
        if (m && !/^[a-z]+:/i.test(node.url)) {
          node.url = `${base}/stories/${slugify(decodeURIComponent(m[1]))}${m[2] ?? ''}`;
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
