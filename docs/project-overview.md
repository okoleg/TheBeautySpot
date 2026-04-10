# TheBeautySpot — Project Overview

## What is TheBeautySpot?

TheBeautySpot is a beauty salon website for The Beauty Spot MA, based in Boston, Massachusetts. The project is a modern rebuild of the original site at thebeautyspotma.com.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Vite + React + TypeScript           |
| Styling    | Tailwind CSS v4                     |
| Fonts      | Jura (headings), Montserrat (body)  |
| Hosting    | Firebase Hosting                    |
| Docs       | Markdown files in `/docs`           |
| Database   | TBD — `/database` folder reserved   |

## Repository Structure

```
TheBeautySpot/
├── frontend/          # Vite React TypeScript app
│   ├── src/           # Application source code
│   ├── public/        # Static assets
│   ├── dist/          # Production build output
│   ├── index.html
│   └── vite.config.ts
├── docs/              # Project documentation
├── database/          # Database schemas, migrations, seeds (TBD)
├── specs/             # Design & color specifications
├── firebase.json      # Firebase Hosting config
└── .firebaserc        # Firebase project reference
```

## Frontend

- Bootstrapped with `create-vite` using the `react-ts` template
- Package manager: npm
- Dev server: `cd frontend && npm run dev`
- Build: `cd frontend && npm run build`

## Deployment

- **Platform:** Firebase Hosting
- **Project ID:** `thebeautyspot-3e54c`
- **Live URL:** https://thebeautyspot-3e54c.web.app
- **Deploy command:** `firebase deploy --only hosting` (run from project root)
- **Build output:** `frontend/dist/`

## Status

- [x] Folder structure created
- [x] Vite React TypeScript project initialized
- [x] Tailwind CSS v4 configured
- [x] Color palette defined — see [specs/colors.md](../specs/colors.md)
- [x] Design system documented — see [specs/design-system.md](../specs/design-system.md)
- [x] Landing page built
- [x] Custom fonts — Jura + Montserrat
- [x] Firebase Hosting configured and deployed
- [ ] Database setup
- [ ] Routing / multi-page
- [ ] Custom domain
