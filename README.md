# NETZ website

A lightweight, multi-page static marketing site for NETZ Soluções em Tecnologia. The pages are plain HTML, shared responsive CSS, and a small vanilla JavaScript file; there is no framework, API server, authentication, or database in this repository today.

## Run a local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`. The site runs without installing packages or building a bundle.

## Pages and source

- `index.html` — home and service overview
- `solucoes.html` — six keyboard-accessible service tabs with shareable hash links
- `como-funciona.html` — how a first conversation and engagement are structured
- `sobre.html` — company positioning and regional focus
- `contato.html` — WhatsApp, Instagram, business details, and common questions
- `styles/site.css` — responsive visual system
- `scripts/site.js` — mobile menu, service tabs, and current year

## Brand assets to finalize

- The real NETZ logo was not present in the connected repository when this redesign began. The prototype uses a text-only wordmark and does **not** pretend a generated `N.` mark is the official logo. Add the approved SVG (preferred) or transparent PNG to `assets/brand/`, then use it in the header/footer and create the matching browser favicon and social preview.
- `assets/netz-team-concept.webp` and `assets/netz-fieldwork-concept.webp` are optimized AI-generated concept images used in the prototype. They depict fictional people, not NETZ employees. Full-resolution PNG originals are delivered separately. Keep the visible “Imagem ilustrativa gerada por IA” captions until NETZ approves the concept images or supplies real team photos. Apply the real uniform logo only after receiving the approved artwork.
- The homepage preserves the client names that were already publicly listed on the old site, as text—not as fake logos. Place only approved official client SVG/PNG files in `assets/clients/` before converting this name rail into a logo carousel.

## Database decision

A public information/marketing site does not need Firebase or any other database just to display its pages, logo, service copy, or links. This version sends contact requests directly to the existing WhatsApp destination and stores no personal data. If NETZ later wants a lead form with saved submissions, an authenticated customer area, or another persistent workflow, first agree on the data, access, retention, and follow-up needs; then select a backend/database deliberately. Do not collect form data without an implemented destination and privacy notice.

## Deployment notes

This repository did not include a hosting/build configuration at review time. The new site uses root-level `.html` pages and relative asset paths and requires no build step, but confirm the current host's branch/root settings before deploying. The legacy hashed files in `assets/index-*.js` and `assets/index-*.css` were not referenced by the old `index.html`; they have been left untouched pending confirmation of the hosting setup. This work is on a feature branch and has not been pushed, merged, or published.
