# Enerlytics AI — Fullstack SaaS (Next.js + Prisma + JWT)

Production-oriented SaaS application for building-level **energy, CO2, and financial analysis**.

## Features

- Public marketing landing page
- Real authentication: signup, login, logout
- JWT session management using secure httpOnly cookie
- Protected dashboard and protected API routes
- Excel/CSV file upload with metadata persistence
- Mock analysis pipeline (ready for Python integration)
- Results view with KPI cards, charts, recommendations, roadmap
- Mock PDF/PPT report export actions
- Settings page with profile + locale switcher (EN/FR/DE)
- PostgreSQL + Prisma data model
- Docker + docker-compose support

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + reusable UI components
- Prisma ORM + PostgreSQL
- bcryptjs + jsonwebtoken
- Recharts

## Database schema

- `users`
- `files`
- `analysis_results`

Schema is defined in `prisma/schema.prisma`.

## Environment

Copy and configure:

```bash
cp .env.example .env
```

Required variables:

- `DATABASE_URL`
- `JWT_SECRET`

## Local setup

```bash
npm install
npm run prisma:generate
npm run prisma:push
npm run dev
```

Open `http://localhost:3000`.

## Auth flow

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

JWT is signed server-side and stored in `enerlytics_token` httpOnly cookie.

## File and analysis flow

1. Upload via `POST /api/upload` (`multipart/form-data` with `file`)
2. Read queue via `GET /api/files`
3. Trigger analysis via `POST /api/analyze` with `{ fileId }`
4. Get result via `GET /api/results/:id`

## Future Python integration

Placeholder endpoint:

- `POST /api/process-excel`

Current behavior returns mocked response.
A dedicated hook is already marked in `app/api/analyze/route.ts` where the Python microservice call should be introduced.

## Docker

```bash
docker compose up --build
```

This starts:

- `db` PostgreSQL on `localhost:5432`
- `app` Next.js on `localhost:3000`
