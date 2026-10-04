# Implementation Plan: Minimalist Personal Website

## Overview

A static site built with **Astro**, deployed to **GitHub Pages**. Two tabs: About and Blog. The blog contains one post (a research writeup) that links to several annotated stories with a show/hide comments toggle.

---

## 1. Architecture

```
personal-website/
├── astro.config.mjs
├── package.json
├── public/                     # favicon, static assets
├── src/
│   ├── layouts/
│   │   └── Base.astro          # nav (About | Blog), footer, global CSS
│   ├── pages/
│   │   ├── index.astro         # About (home page)
│   │   ├── blog/
│   │   │   ├── index.astro     # Blog list (one entry for now)
│   │   │   └── [slug].astro    # Renders the main writeup
│   │   └── stories/
│   │       └── [slug].astro    # Renders annotated stories
│   ├── content/
│   │   ├── blog/
│   │   │   └── study-writeup.md      # your main document
│   │   └── stories/
│   │       ├── story-1.md            # annotated stories
│   │       └── ...
│   ├── plugins/
│   │   └── remark-annotations.mjs    # parses [tag: comment] syntax
│   └── styles/
│       └── global.css
└── .github/workflows/deploy.yml      # auto-deploy to GitHub Pages
```

**Why Astro:** markdown-native content collections, zero JS shipped by default (only the comments toggle needs a small script), and remark plugin hooks make the custom annotation syntax clean to implement.

---

## 2. Pages

### About (`/`)
- Name: **Emma Jin**
- Tagline: "I like to write code and prose"
- Links: [LinkedIn](https://www.linkedin.com/in/emma-j-99366512a/), [GitHub](https://github.com/emjin)
- Minimal styling: centered column, system or single web font, generous whitespace.

### Blog (`/blog`)
- Simple list of posts (title + date). One entry for now; adding posts later = dropping a new `.md` file into `src/content/blog/`.

### Main writeup (`/blog/study-writeup`)
- Rendered from your markdown file as-is.
- Links to stories in your markdown should point to `/stories/<slug>` — either write them that way, or a small remark plugin rewrites relative links (e.g. `story-1.md` → `/stories/story-1`).

### Annotated stories (`/stories/<slug>`)
- Rendered from markdown through the custom annotation pipeline (below).
- Sticky "Show comments / Hide comments" toggle at the top.

---

## 3. Annotation System (the core work)

### Input syntax
Bolded text followed by an annotation, inside the bold span:

```
**annotated text [tag: comment text]**
```

Tags: `prose`, `+prose`, `cont`, `canon-cont`, `+canon-cont`, etc. A leading `+` means positive.

### Parsing: `remark-annotations.mjs`
A remark plugin that walks the markdown AST:

1. Find `strong` nodes whose text matches `^(.*)\[([+\w-]+):\s*(.+)\]$` (annotated text, tag, comment).
2. Replace with HTML:

```html
<span class="annotation" data-tag="cont" data-polarity="neg" id="ann-3">
  <mark class="ann-text">annotated text</mark>
  <span class="ann-comment" data-tag="cont">
    <span class="ann-label">Continuity</span>  <!-- shorthand label from tag→label map -->
    Hermione wouldn't know this yet
  </span>
</span>
```

- `data-polarity`: `pos` if tag starts with `+`, else `neg`.
- `data-tag`: tag with `+` stripped, used for comment-box shading and label lookup.
- The plugin resolves each tag to a shorthand label via a config map (e.g. `{ "cont": "Continuity", "prose": "Prose", "canon-cont": "Canon continuity" }` — you'll provide the mappings) and renders it as `.ann-label` at the top of the comment box. Unknown tags fall back to the raw tag text.

Edge cases to handle: annotations spanning italics/other inline formatting inside the bold; multiple annotations per paragraph; `[` `]` appearing in comment text (use a lazy/anchored regex; document that comments can't contain `]`).

### Display

**Annotated text color** (when comments shown):
- `data-polarity="neg"` → red text
- `data-polarity="pos"` → green text

**Comment boxes — margin notes (primary approach):**
- Article laid out as a two-column CSS grid: text column (~65ch) + margin column (~220px).
- Comments are absolutely positioned in the margin, vertically aligned with their anchor via a small script on page load (measure each `.ann-text` offset, place the comment box, nudge down to avoid overlaps).
- Dotted connector: a `border-top: 1px dotted` pseudo-element or a thin absolutely-positioned line from anchor to box.
- Box background shaded per tag via a small CSS map:

```css
.ann-comment[data-tag="prose"]      { background: #fdecec; }  /* red-tinted */
.ann-comment[data-tag="cont"]       { background: #fff4e0; }
.ann-comment[data-tag="canon-cont"] { background: #eef2fb; }
.annotation[data-polarity="pos"] .ann-comment { background: #eaf6ea; } /* green-tinted */
```

**Fallback (narrow screens / if positioning proves fiddly):** hover tooltip (CSS-only via the same `.ann-comment` element restyled as `position: absolute` popover) — you noted this is acceptable.

**Toggle ("Show comments" / "Hide comments"):**
- One button toggles `comments-hidden` class on the article. ~10 lines of vanilla JS.
- When hidden: `.ann-comment { display: none }`, annotated text reverts to normal color and weight — the story reads clean.
- Persist choice in `sessionStorage` (optional).

---

## 4. Deployment

- GitHub Actions workflow (`withastro/action`) builds and deploys on every push to `main`.
- Site served at `https://emjin.github.io/<repo>/` (or `emjin.github.io` if the repo is named `emjin.github.io`), or your custom domain.

---

## 5. Build Order

| Step | Task | Est. effort |
|---|---|---|
| 1 | Scaffold Astro project, Base layout with nav, global CSS | small |
| 2 | About page | trivial |
| 3 | Blog index + main writeup rendering | small |
| 4 | Story pages rendering plain markdown (no annotations yet) | small |
| 5 | remark-annotations plugin + red/green text + toggle | medium |
| 6 | Margin comment boxes with dotted connectors + tag shading | medium (the fiddly part) |
| 7 | Responsive fallback (hover/inline on mobile), polish | small |
| 8 | GitHub Pages workflow, deploy, (optional) custom domain | small |

Steps 1–5 give a fully working site with inline/hover comments; step 6 is the enhancement.

---

## 6. What YOU need to do

1. **Create a GitHub repo** — name it `emjin.github.io` for a clean URL, or anything else for `emjin.github.io/<name>`. Enable Pages: repo Settings → Pages → Source: GitHub Actions.
2. **Provide the content:**
   - Main writeup as a markdown file.
   - Each annotated story as a markdown file using the `**text [tag: comment]**` syntax consistently.
   - The full list of tags you use, with tag → shorthand label mappings (shown at the top of each comment box) and which colors you want each box shaded (or I'll hash tag names to colors).
3. **Confirm link convention** in the writeup — links to stories as `/stories/<slug>` or relative `.md` links for me to rewrite.
4. **(Optional) Buy a domain** — Cloudflare Registrar or Namecheap, ~$10–12/yr for a `.com`/`.dev`. Then:
   - Add a CNAME record pointing to `emjin.github.io`, plus GitHub's four A records for the apex domain.
   - Set the custom domain in repo Settings → Pages and check "Enforce HTTPS".
5. **Decide the site title / any styling preferences** (font, light/dark) — defaults will be minimalist: white background, dark text, one accent color.

No other accounts or payments needed — GitHub Pages hosting is free.
