### Website

This repo contains a small personal website built with TanStack Start, SolidJS, Vite, and Tailwind CSS. The app is server-rendered, uses file-based routing, and is configured for Cloudflare deployment via Alchemy.

The main homepage is composed from a few focused UI sections:
- avatar
- bio
- links

The local source lives in `src/`, static assets are in `public/`, and the main route entrypoint is `src/routes/index.tsx`.

### Quick Start

This project uses Bun for dependency management (`bun.lock` is checked in).

```bash
bun install
bun run dev
```

The local dev server runs on `http://localhost:3000`.

Useful scripts:
- `bun run build` builds the app
- `bun run preview` previews the production build
- `bun run test` runs the test suite
- `bun run lint` runs ESLint
