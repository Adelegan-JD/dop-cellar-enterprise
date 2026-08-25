# # --- Build stage ------------------------------------------------------------
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Install bun (the lockfile is bun.lock). npm/pnpm work too if you prefer.
# RUN apk add --no-cache curl bash unzip \
#  && curl -fsSL https://bun.sh/install | bash
# ENV PATH="/root/.bun/bin:${PATH}"

# # Install deps first (better layer caching)
# COPY package.json bun.lock ./
# RUN bun install --frozen-lockfile

# # Copy the application source and build with the canonical Vite configuration.
# COPY . .
# RUN bun run build

# # --- Runtime stage ----------------------------------------------------------
# FROM node:20-alpine AS runner

# WORKDIR /app
# ENV NODE_ENV=production
# ENV PORT=3000

# # The node-server build emits the SSR server and client assets in dist/.
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 3000

# HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
#   CMD wget --no-verbose --tries=1 --spider "http://127.0.0.1:${PORT}/api/health" || exit 1

# CMD ["node", "dist/server/server.js"]


# --- Build stage ------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Install Bun for the committed Bun lockfile.
RUN apk add --no-cache curl bash unzip \
 && curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Install dependencies before copying application source for better layer caching.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build the portable Nitro node-server output.
COPY . .
ENV NITRO_PRESET=node-server
RUN bun run build

# --- Runtime stage ----------------------------------------------------------
FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Nitro provides the SSR server and static assets as one deployable output.
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider "http://127.0.0.1:${PORT}/api/health" || exit 1

CMD ["node", ".output/server/index.mjs"]