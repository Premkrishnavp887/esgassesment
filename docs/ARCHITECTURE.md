# SAM Assessment Documentation

## System Architecture
SAM Assessment is a full-stack platform designed for enterprise talent evaluation.

### Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS, shadcn/ui, React Router, Zustand.
- **Backend**: Express, TypeScript.
- **Database**: PostgreSQL with Prisma ORM.
- **Authentication**: JWT & Bcrypt.

## Project Structure
- `src/`: React frontend source code.
- `backend/`: Express backend modules.
- `prisma/`: Database schema and migrations.
- `docs/`: System documentation.

## Getting Started
1. Run `npm install`.
2. Start the database using `docker-compose up -d`.
3. Run `npm run prisma:generate`.
4. Run `npm run dev`.
