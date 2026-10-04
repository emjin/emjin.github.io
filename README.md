# emma-jin-site

## Run it locally

You need Node.js 20 or newer (`node -v` to check; install from https://nodejs.org or `brew install node`).

```sh
cd ~/Documents/PersonalWebsite
npm install        # first time only
npm run dev        # then open http://localhost:4321
```

The dev server reloads as you edit files. `npm test` runs the markdown-plugin tests (annotations, story links, heading ids, score tables).

## Where things go

- `src/content/blog/` — blog posts (markdown). Keep the frontmatter block (`title`, `date`) at the top. Replace `study-writeup.md` with your writeup.
- `src/content/stories/` — annotated stories. Filename becomes the URL: `my-story.md` → `/stories/my-story`. Use lowercase-and-hyphens filenames. A `title:` frontmatter line is optional.
- In the writeup, link to a story with its filename: `[My story](my-story.md)`.
- `src/annotations.config.mjs` — tag → label and box colour. Edit this when you send me (or decide) your mappings.

## Annotation syntax

```
**annotated text \[tag: comment\]**
```

Tags starting with `+` are green, the rest red. Brackets can be escaped or not. The comment can't contain `[word:`.

## Score tables

Leave the score cells in the writeup's tables blank — they're filled at build time from the `Metric: N` lines under each `### Model` heading, and shaded 1–2 red, 3–4 orange, 5–6 yellow. The bold line before a table (e.g. `**Hermione in Slytherin:**`) must match a `##` heading, columns must match the `###` headings, and rows must match the metric names. Scores after a `Full:` line fill the `Final - …` rows; `Overall score: N` fills `Final - overall`.

## Deploying

Push to a GitHub repo named `emjin.github.io`, then Settings → Pages → Source: GitHub Actions. The workflow in `.github/workflows/deploy.yml` builds on every push to `main`.
