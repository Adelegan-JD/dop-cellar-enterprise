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
# IMPORTANT: build expects the Node/Vercel-preset vite.config (see DEPLOYMENT.md).
RUN bun run build

# --- Runtime stage ----------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# TanStack Start with the node-server preset emits a standalone server bundle
# in .output/ (Nitro convention). Copy only what's needed at runtime.
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
