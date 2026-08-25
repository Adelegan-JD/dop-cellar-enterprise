# DopCellar Deployment Guide

This project is a TanStack Start application built with Vite and Nitro. It has
two supported production targets:

- **Vercel**, using Nitro's Vercel preset and Vercel Functions
- **Docker**, using Nitro's portable Node server output

## Local development

Install dependencies and start the Vite development server:

```bash
bun install
bun run dev
```

For a local production build and server:

```bash
bun run build
node .output/server/index.mjs
```

The server listens on port `3000` by default. Set `PORT` to use another port.

## Vercel

### Dashboard deployment

1. Import the repository into Vercel.
2. Use the repository root as the project root.
3. Let Vercel detect the TanStack Start/Nitro framework.
4. Configure environment variables in the Vercel project settings.
5. Deploy.

The project does not require a `vercel.json`. Nitro generates the Vercel Build
Output API configuration, including the server function and static asset
routes, during `vite build`. Do not set a custom `outputDirectory`; `.vercel/output`
is generated for Vercel's deployment pipeline.

Vercel reads the `build` script from `package.json`, so the build command is
`bun run build` by convention. No custom routes, rewrites, or function mappings
are required for the current application.

### GitHub Actions deployment

`.github/workflows/vercel-preview.yml` deploys pull requests as previews and
pushes to `main` as production deployments. It requires these repository
secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

The workflow pulls the matching Vercel environment, runs `vercel build`, and
deploys the resulting prebuilt output.

## Docker

The multi-stage `Dockerfile` builds Nitro's `node-server` preset and runs the
resulting `.output/server/index.mjs` file.

Build and run the image:

```bash
docker build -t dopcellar-web .
docker run --rm -p 3000:3000 --name dopcellar-web dopcellar-web
```

Open `http://localhost:3000`. The image exposes port `3000` and includes a
health check at `/api/health`. To use another port, pass it to the container:

```bash
docker run --rm -e PORT=8080 -p 8080:8080 --name dopcellar-web dopcellar-web
```

To publish the image to a registry:

```bash
docker tag dopcellar-web registry.example.com/dopcellar-web:latest
docker push registry.example.com/dopcellar-web:latest
```

## CI

`.github/workflows/ci.yml` installs the locked Bun dependency tree and runs the
production build on every push and pull request. CI sets
`NITRO_PRESET=node-server` so the checked build matches the Docker target.

## Environment variables

See `ENVIRONMENT.md` and `.env.example` for configuration guidance. Public
`VITE_*` variables are embedded at build time. Server-only variables must be
read inside server handlers at runtime and must not be exposed to client code.

## Backend additions

TanStack Start server functions and routes under `src/routes/api/` can be added
as backend features grow. Keep handlers portable across Vercel Functions and
the Node Docker runtime, and confirm compatibility before adding Node-specific
native modules.
