# TheBeautySpot — Project Overview

## What is TheBeautySpot?

TheBeautySpot is a website project currently in early setup phase.

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | Vite + React + TypeScript           |
| Docs     | Markdown files in `/docs`           |
| Database | TBD — `/database` folder reserved   |

## Repository Structure

```
TheBeautySpot/
├── frontend/          # Vite React TypeScript app
│   ├── src/           # Application source code
│   ├── public/        # Static assets
│   ├── index.html
│   └── vite.config.ts
├── docs/              # Project documentation
├── database/          # Database schemas, migrations, seeds (TBD)
└── specs/             # Project specifications
```

## Frontend

- Bootstrapped with `create-vite` using the `react-ts` template
- Package manager: npm
- Dev server: `cd frontend && npm run dev`
- Build: `cd frontend && npm run build`

## Status

- [x] Folder structure created
- [x] Vite React TypeScript project initialized
- [ ] Database setup
- [x] Color palette defined — see [specs/colors.md](../specs/colors.md)
- [ ] UI/design decisions
- [ ] Routing
- [ ] Deployment
