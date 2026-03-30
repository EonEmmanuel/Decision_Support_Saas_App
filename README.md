# Enerlytics AI — Decision Support SaaS Frontend

Modern Next.js App Router frontend for a building analytics SaaS platform focused on energy, CO2, and financial optimization.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Recharts for dashboard visualizations
- shadcn-style reusable UI primitives

## Product Areas
1. **Public marketing landing page** (`/`)
2. **Authenticated app** (`/login`, `/signup`, `/dashboard`)

## Dashboard Pages
- `/dashboard` KPI overview + charts
- `/dashboard/upload` drag/drop upload UI + file statuses
- `/dashboard/analysis` overview cards + recommendations table + roadmap timeline
- `/dashboard/reports` export actions + preview / empty / error states
- `/dashboard/settings` profile + language switcher scaffold (EN/FR/DE)

## API Mock Endpoints
- `POST /api/upload`
- `POST /api/analyze`
- `GET /api/results/:id`
- `POST /api/process-excel` (Python integration placeholder)

## i18n Structure
Translation keys are scaffolded in `lib/i18n.ts` with locale support for:
- `en`
- `fr`
- `de`

## Run Locally
```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
