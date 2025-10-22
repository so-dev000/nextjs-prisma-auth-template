# Next.js + Prisma + NextAuth Template

A modern, full-stack web application template built with Next.js 15, Prisma, NextAuth.js, and Mantine UI.

## Features

- **Framework**: Next.js 15 (App Router)
- **ORM**: Prisma with PostgreSQL
- **Authentication**: NextAuth.js v5 (with Google Provider)
- **UI**: Mantine UI with Emotion
- **Development**: Docker Compose for local database
- **Code Quality**: Pre-commit hooks for linting and type-checking

## Prerequisites

- Node.js 20.x
- Docker & Docker Compose
- `pre-commit` (see [installation guide](https://pre-commit.com/#installation))

## Quick Start

1.  **Use this template** on GitHub or clone the repository.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the setup script** to create your `.env` file and run database migrations:
    ```bash
    npm run setup
    ```
4.  **Configure environment variables** in the `.env` file with your database and Google OAuth credentials.
5.  **Install pre-commit hooks**:
    ```bash
    pre-commit install
    ```
6.  **Start the database and development server**:
    ```bash
    docker compose up -d
    npm run dev
    ```

Open your browser to `http://localhost:3000`.

## Available Scripts

<details>
<summary>Click to view all scripts</summary>

### Development
- `npm run setup`: Initializes the project by copying `.env.example` and running migrations.
- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code.
- `npm run type-check`: Checks TypeScript types.

### Database
- `npm run db:migrate`: Creates and applies a new migration.
- `npm run db:migrate:deploy`: Applies pending migrations.
- `npm run db:generate`: Generates the Prisma Client.
- `npm run db:studio`: Opens the Prisma Studio GUI.
- `npm run db:reset`: Resets the database.
</details>

## Project Structure

- `app/`: Source code, including pages, components, and API routes.
- `prisma/`: Database schema and migration files.
- `.env.example`: Template for environment variables.
- `.pre-commit-config.yaml`: Configuration for pre-commit hooks.
- `docker-compose.yaml`: Configuration for the local PostgreSQL database.

## Deployment

This template is optimized for deployment on [Vercel](https://vercel.com). Connect your GitHub repository and add your production environment variables to deploy.
