# --- Build stage ------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install bun (the lockfile is bun.lock). npm/pnpm work too if you prefer.
RUN apk add --no-cache curl bash unzip \
 && curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Install deps first (better layer caching)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest and build
COPY . .

# Swap in the portable Node/Vercel vite config and drop the Cloudflare
# Worker entry before building (see DEPLOYMENT.md). This keeps a single
# repo working in Lovable's editor AND in Docker without manual steps.
RUN if [ -f vite.config.production.ts ]; then \
      mv vite.config.ts vite.config.lovable.ts && \
      mv vite.config.production.ts vite.config.ts; \
    fi \
 && rm -f src/server.ts wrangler.jsonc

ENV NITRO_PRESET=node-server
RUN bun run build

# --- Runtime stage ----------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# wget is in busybox on alpine; we use it for the HEALTHCHECK below.
# TanStack Start with the node-server preset emits a standalone server bundle
# in .output/ (Nitro convention). Copy only what's needed at runtime.
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Docker restarts the container when the health check fails repeatedly
# (depending on your orchestrator's restart policy). The endpoint is served
# by src/routes/api/health.ts and is intentionally dependency-free.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider "http://127.0.0.1:${PORT}/api/health" || exit 1

CMD ["node", ".output/server/index.mjs"]
