# PersonalWebsite

A modern personal website / portfolio built with **React**, **TypeScript**, and **Vite**.

## Features

- Responsive, accessible single-page layout (hero, about, projects, contact)
- Interactive contact form with client-side validation
- Fast dev server and optimized production build via Vite
- Unit + component tests with Vitest and Testing Library

## Getting started

Requires Node.js 20+ and npm.

```bash
npm ci          # install dependencies (use `npm install` to update the lockfile)
npm run dev     # start the dev server at http://localhost:5173
```

## Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the Vite dev server (port 5173)        |
| `npm run build`    | Type-check and build for production (`dist`) |
| `npm run preview`  | Preview the production build locally         |
| `npm run lint`     | Run ESLint over the project                  |
| `npm test`         | Run the test suite once                      |
| `npm run test:watch` | Run tests in watch mode                    |

## Project structure

```
src/
  components/    UI sections (Navbar, Hero, About, Projects, Contact)
  data/          Editable site content (profile, skills, projects, socials)
  test/          Test setup
  App.tsx        Page composition
  index.css      Global styles / theme tokens
```

## Cloud Agent environment

This repo ships a `.cursor/environment.json` that installs dependencies with
`npm ci` and runs the Vite dev server on port 5173 in a `dev` terminal.
