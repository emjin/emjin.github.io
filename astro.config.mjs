import { defineConfig } from 'astro/config';
import remarkStoryLinks from './src/plugins/remark-story-links.mjs';
import remarkAnnotations from './src/plugins/remark-annotations.mjs';
import remarkHeadingIds from './src/plugins/remark-heading-ids.mjs';

export default defineConfig({
  // Change if you use a custom domain.
  site: 'https://emjin.github.io',
  markdown: {
    remarkPlugins: [remarkHeadingIds, remarkStoryLinks, remarkAnnotations],
  },
});
