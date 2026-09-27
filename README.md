# NETZ website

A lightweight, multi-page static marketing site for NETZ Soluções em Tecnologia. The pages are plain HTML, shared responsive CSS, and a small vanilla JavaScript file; no framework, API server, authentication, or database is needed for the current brochure site.

## Run a local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`. No package install or build step is required.

## Pages and source

- `index.html` — homepage with a clickable overview of the six service areas
- `solucoes.html` — six keyboard-accessible tabs with shareable hash links
- `como-funciona.html` — how a first conversation and engagement are structured
- `sobre.html` — company positioning and regional focus
- `contato.html` — WhatsApp, Instagram, business details, and common questions
- `styles/site.css` — responsive visual system
- `scripts/site.js` — mobile menu, service tabs, and current year

## Brand assets

- `assets/brand/netz-logo-source.jpeg` is the JPEG logo supplied by NETZ. The icon-only `netz-monogram-64.png` is used as the browser favicon, and `netz-monogram-180.png` as the touch icon. Both are square crops of the supplied upper “N” mark.
- Header and footer use a simple typographic `NETZ` wordmark without the symbol, as requested. If a clean transparent/vector wordmark becomes available later, it can replace the typeset text without changing the favicon.
- The homepage shows a service map instead of a synthetic team portrait. No generated-photo labels or fictional employee imagery are displayed.
- The homepage keeps client names already shown on the previous public site as text. Add only approved SVG/PNG assets under `assets/clients/` before changing that rail to customer logos.

## Database decision

A public information/marketing site does not need Firebase or another database just to display its pages, logo, services, or links. This version sends contact requests directly to the existing WhatsApp destination and stores no personal data. If NETZ wants to save form leads or add an authenticated customer area later, first agree on data, access, retention, and follow-up needs, then select a backend/database deliberately. Do not collect form data without an implemented destination and privacy notice.

## Deployment notes

This repository did not include a hosting/build configuration at review time. The site uses root-level `.html` pages and relative asset paths and requires no build step; confirm the current host's branch/root settings before deploying. The legacy hashed files in `assets/index-*.js` and `assets/index-*.css` were not referenced by the old `index.html` and remain untouched. Current work is on branch `feat/netz-site-revamp` in PR #3; it has not been merged or published to the NETZ domain.
