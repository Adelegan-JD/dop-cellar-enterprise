# Deploying Dop Cellar Global Limited — Vercel & Docker

# DopCellar Deployment Guide

This document describes how to build and deploy the DopCellar corporate website.

## Stack

- React
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- TypeScript
- Node.js
- Vercel
- Docker

## Local development

```bash
bun install
bun run dev
```

Follow this guide once, after exporting the repo to GitHub and pulling it into VS Code.

---

## One-time migration (do this after `git pull` in VS Code)

### 1. Swap the Vite config

```bash
mv vite.config.ts vite.config.lovable.ts     # keep as backup, ignored at runtime
mv vite.config.production.ts vite.config.ts
```

### 2. Remove the Worker-specific server entry

The file `src/server.ts` is a Cloudflare Worker `fetch` handler. Outside Lovable
you don't need it — TanStack Start's own SSR entry handles requests on Node.

```bash
rm src/server.ts wrangler.jsonc
```

If you also see `@cloudflare/vite-plugin` in `package.json` dependencies, you
can remove it (optional, just keeps the dep tree clean):

```bash
bun remove @cloudflare/vite-plugin @lovable.dev/vite-tanstack-config
bun add -D vite @vitejs/plugin-react vite-tsconfig-paths @tailwindcss/vite
```

### 3. Verify the build locally

```bash
bun install
bun run build
node .output/server/index.mjs   # should boot on http://localhost:3000
```

If that works, you're ready for both Vercel and Docker.

---

## Deploying to Vercel

1. Push your repo to GitHub.
2. In Vercel: **Add New → Project** → import the repo.
3. Framework preset: **Other** (Vercel auto-detects via `vercel.json`).
4. Add environment variables under **Settings → Environment Variables**
   (none required for the marketing site today; add them as you wire backend features).
5. Deploy. Subsequent `git push` to your default branch redeploys automatically.

`vercel.json` is already included and points the build at `.output/public`.

---

## Deploying with Docker

A production-ready multi-stage `Dockerfile` is included.

```bash
# Build the image
docker build -t dopcellar-web .

# Run it
docker run --rm -p 3000:3000 --name dopcellar dopcellar-web
```

Visit http://localhost:3000.

To deploy the image to a registry (DigitalOcean, AWS ECR, Fly.io, Render, etc.):

```bash
docker tag dopcellar-web registry.example.com/dopcellar-web:latest
docker push registry.example.com/dopcellar-web:latest
```

The container listens on `PORT` (default 3000). Override with `-e PORT=8080`.

---

## Adding backend features later (inventory, dashboards, AI, WhatsApp, etc.)

Both Vercel and Node Docker support TanStack Start's full backend toolbox:

- **`createServerFn`** (in files like `src/lib/*.functions.ts`) — typed RPC from React components.
- **Server routes** under `src/routes/api/*` — raw HTTP for webhooks (WhatsApp Cloud API, payment callbacks, AI provider callbacks).
- **Database** — Postgres via Supabase, Neon, or a managed Postgres next to your Docker container.

Two rules to keep deployment portable as you grow:

1. **Never use `process.env.X` at module scope** — read env vars inside the handler body. Vite bundles modules at build time and `process.env` is only defined at runtime.
2. **Avoid Node-only native modules** in server functions (`sharp`, `puppeteer`, `child_process`) unless you've confirmed they work in the target runtime. Prefer HTTP API calls.

---

## What stays identical across Lovable / Vercel / Docker

- All component code in `src/components/`
- All page routes in `src/routes/`
- Content config in `src/config/site.ts` and `src/config/content.ts`
- Design tokens in `src/styles.css`
- Tailwind v4 configuration

Editing those in VS Code and pushing to GitHub will redeploy cleanly on either target.
