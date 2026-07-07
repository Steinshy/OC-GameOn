# CLAUDE.md

Guidance for AI assistants (and new contributors) working in this repository.

## Project Overview

GameOn is a static landing page with a registration modal for a fictional
video-game marathon (OpenClassrooms front-end project). It is built with
plain HTML, CSS and JavaScript — **no build step, no package manager, no
framework**. Open `index.html` in a browser (or serve the folder with any
static server) to run it. The live demo is deployed to GitHub Pages at
https://steinshy.github.io/OC-GameOn/, so all URLs must stay relative
(the site lives under the `/OC-GameOn/` subpath).

## Commands

- Run locally: `python3 -m http.server 8000` (or just open `index.html`)
- Format: `npx prettier --write .` (config in `.prettierrc`, exclusions in `.prettierignore`)

There are no tests; verify changes manually in the browser (mobile ≤1024px
and desktop ≥1025px, plus the modal open → validate → submit → confirm flow).

## Architecture

```
index.html                     Single page: header, hero, signup modal, loader
assets/css/
  style.css                    Design tokens (:root vars), reset, layout, header,
                               hero, footer, responsive breakpoints (1024/1025px)
  modal.css                    Modal, form, custom radio/checkbox, validation
                               states, modal animations
  loader.css                   Splash/loading screen + its keyframes
assets/js/
  mobileMenu.js                Self-contained hamburger menu (click/outside/Escape)
  modalForm/refs.js            All DOM references (modalRefs, formRefs, buttonRefs)
  modalForm/validation.js      Validation rules + field state + real-time listeners
  modalForm/modal.js           Open/close/reset/submit logic, setupModalForm()
  script.js                    Entry point: footer year + setupModalForm()
assets/manifest.json           PWA manifest (paths relative to /assets/)
```

Scripts are classic (non-module) scripts loaded at the end of `<body>` in
dependency order: `mobileMenu.js` → `refs.js` → `validation.js` → `modal.js`
→ `script.js`. Top-level `const` declarations are shared across scripts via
the global scope — no `window.*` exports, no bundler. Keep that load order
if you add or rename files, and keep the code `file://`-compatible (no ES
module imports, no fetch of local files).

## Conventions

- French UI text; code identifiers and comments in English.
- Validation state is driven by `data-error-visible` / `data-success-visible`
  attributes on field containers, styled in `modal.css`.
- Show/hide of modal sections uses `.show` / `.closing` classes; the JS
  close timeout (`MODAL_CLOSE_ANIMATION_MS`) must match the CSS animation
  duration in `modal.css`.
- CSS uses custom properties defined in `style.css` `:root` — reuse them
  instead of hardcoding colors/spacing; remove tokens that become unused.
- Accessibility matters here (it is graded): keep ARIA attributes, labels,
  `aria-live` error messages and `prefers-reduced-motion` support intact.
- Format with Prettier before committing (`.prettierrc` is the source of truth).
