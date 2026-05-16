# Deploy to Netlify

This project is a Vite SPA (converted from TanStack Start SSR so it deploys cleanly to Netlify with no server runtime).

## Option A — Drag & drop (fastest)
1. Go to https://app.netlify.com/drop
2. Drag the **`dist/`** folder onto the page. Done.

## Option B — Git-based / Netlify CLI
Netlify will read `netlify.toml`:
- Build command: `bun run build` (or `npm run build` if you swap to npm)
- Publish directory: `dist`
- SPA fallback: `/* -> /index.html 200` (already in `public/_redirects` and `netlify.toml`)

## What was changed to avoid conflicts
The original project used TanStack **Start** (SSR on Cloudflare Workers), which does not produce a static `dist/` Netlify can serve. Conflicts removed:
- Removed `wrangler.jsonc`, `src/server.ts`, `src/start.ts` (Cloudflare Worker entry)
- Removed `@cloudflare/vite-plugin`, `@tanstack/react-start`, `@lovable.dev/vite-tanstack-config`
- Replaced `vite.config.ts` with a plain Vite + React + TanStack Router (file-based) + Tailwind v4 config
- Added `index.html` + `src/main.tsx` (SPA bootstrap with `RouterProvider`)
- Simplified `src/routes/__root.tsx` (removed `shellComponent` / `HeadContent` / `Scripts` — Start-only APIs)
- Added `netlify.toml` and `public/_redirects` for SPA routing

## Local dev
```
bun install   # or: npm install
bun run dev   # http://localhost:5173
bun run build # outputs dist/
```
