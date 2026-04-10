# Release Notes

---

## v0.5.0 — 2026-04-10

### What's New
- Hero section: background photos now at full opacity (90%), Boston MA label removed
- Stats section (V1 & V3): added "Why Us?" copy — eyebrow, heading, and descriptive paragraph from original site
- About section: expanded to two-column layout with full founders story from original site; title remains full-width centered
- Contact section: address updated to 123 Highland Ave, Needham, MA 02494, Floor 3
- Contact section: added Work Hours card (Mon–Fri 10am–7pm, Sat 10am–6pm, Sun closed)
- V3 renamed to "Photo Hero" — synced to latest V1 design

---

## v0.4.0 — 2026-04-10

### What's New
- 5 design versions selectable via floating switcher (bottom-right corner)
  - V1: Pink Classic (original)
  - V2: Soft & Minimal — cream/rose palette
  - V3: Dark Luxury — black & gold
  - V4: Bold Editorial — stark black & white, sharp typography
  - V5: Glam Gradient — deep purple/pink
- Version switcher uses `?v=1..5` URL params
- Self-hosted fonts (Jura, Montserrat via @fontsource) — no Google CDN
- Icons via react-icons (SVG, tree-shaken) — no icon font CDN
- Phone number in header — clickable to call, icon-only on mobile
- Footer redesigned — black background with inverted logo
- Shared data extracted to `src/data.ts`

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
