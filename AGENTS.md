# Repository Guidelines

## Project Purpose & Design

Arklogs is an Astro personal blog and portfolio for projects, posts, and achievements, including ESP32 builds, CVE research, and CTF writeups. Vercel is the intended hosting platform. Prioritize project storytelling and readable technical content.

The owner intends to draw every visual component by hand. Preserve supplied artwork and its character; do not replace it with stock illustrations or generated artwork. Implement drawings with semantic HTML, accessible controls, and responsive layouts. Keep article text selectable and readable.

## Project Structure & Module Organization

The Astro site is scaffolded with these locations:

- `src/pages/`: routes and individual page entry points.
- `src/layouts/`: shared page and article layouts.
- `src/components/`: reusable Astro components.
- `src/content/posts/`: Markdown blog posts; schemas live in `src/content.config.ts`.
- `src/assets/`: artwork and images processed by Astro.
- `public/`: files served unchanged, including downloads.
- `tests/`: automated tests when introduced.

## Build, Test, and Development Commands

The following scripts are configured in `package.json` (use Node 22.19 or newer):

- `npm run dev`: start the local development server.
- `npm run build`: generate the production site.
- `npm run preview`: inspect the production build locally.

Run `npm install` before using them. Document additional checks when installed.

## Coding Style & Naming Conventions

Use two-space indentation, TypeScript for application logic, and PascalCase component names such as `ProjectCard.astro`. Use kebab-case content slugs and asset names, such as `esp32-weather-station`. Prefer Astro components and add client-side JavaScript only where interaction requires it. No formatter or linter is configured yet.

## Testing Guidelines

No testing framework or coverage threshold is established. Verify production builds, internal links, content rendering, keyboard navigation, and mobile layouts. Check artwork proportions and text contrast. When automated tests are added, use descriptive `*.test.ts` names and document their runner.

## Commit & Pull Request Guidelines

No project-specific commit history is available; parent-directory history is unrelated. Use concise imperative messages, such as `Add project gallery`. Pull requests should describe the change, link relevant issues, list verification performed, and include screenshots for visual changes.

## Agent & Configuration Boundaries

Keep visual choices easy to replace with the owner's hand-drawn assets. Never commit secrets or unpublished research details. Document required environment variable names in `.env.example` without real credentials.
