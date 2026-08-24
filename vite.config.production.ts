/**
 * Production vite config for deployment OUTSIDE Lovable (Vercel / Docker / any Node host).
 *
 * Inside Lovable's editor the live `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`,
 * which bakes in Cloudflare-Workers-specific bundling so the in-editor preview can run.
 * That config is not portable.
 *
 * After exporting to GitHub, replace `vite.config.ts` with this file
 * (see DEPLOYMENT.md, step 1) before running `bun install && bun run build`.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Pick the SSR preset based on where you're deploying.
//   - "vercel"      → Vercel (auto-detected, also fine as default)
//   - "node-server" → Docker / any Node host (emits .output/server/index.mjs)
const preset = process.env.VERCEL ? "vercel" : (process.env.NITRO_PRESET ?? "node-server");

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      target: preset,
      // Use the framework's own SSR entry (not src/server.ts, which is Worker-shaped).
      server: { entry: undefined },
    }),
    react(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
});
