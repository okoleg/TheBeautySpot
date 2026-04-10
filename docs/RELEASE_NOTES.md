# Release Notes

---

## v0.3.0 — 2026-04-10

### What's New
- Logo converted from PNG to SVG (vector — crisp at any size)
- Three logo variants saved in `assets/logo/`: black SVG, pink SVG, original PNG
- Black SVG logo used in the header
- Favicon updated to pink circle with "THE BEAUTY SPOT." text
- Logo responsive sizing: smaller on mobile, larger on desktop
- Nav padding adjusted for mobile proportional spacing

---

## v0.2.0 — 2026-04-10

### What's New
- Deployed to Firebase Hosting — live at https://thebeautyspot-3e54c.web.app
- Added custom fonts: **Jura** (headings) and **Montserrat** (body) to match original site
- Unique styled CTA buttons with pink shadow, uppercase Jura font, lift-on-hover effect
- Sticky header with glass effect on scroll (backdrop blur + transparent when at top)
- Improved service & contact cards — visible border and shadow at rest, pink glow on hover
- Tailwind CSS v4 fully integrated

### Files Added
- `firebase.json` — Firebase Hosting configuration
- `.firebaserc` — Firebase project reference
- `docs/deployment.md` — Deployment guide

---

## v0.1.0 — 2026-04-09

### Initial Release
- Project folder structure: `frontend/`, `docs/`, `database/`, `specs/`
- Vite + React + TypeScript bootstrapped
- Tailwind CSS v4 configured
- Landing page built with sections: Hero, Stats, Services, About, Contact, Footer
- Brand colors: Pink `#FF66C4`, Black, White
- Animations: fade-up entrance, floating sparkles
- Glassmorphism nav
- Design system documented in `specs/design-system.md`
- Color palette documented in `specs/colors.md`
- GitHub repository: https://github.com/okoleg/TheBeautySpot
