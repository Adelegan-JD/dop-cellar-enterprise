// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import tsconfigPaths from "vite-tsconfig-paths";
// import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// const preset = process.env.VERCEL ? "vercel" : (process.env.NITRO_PRESET ?? "node-server");

// export default defineConfig({
//   plugins: [
//     tsconfigPaths({ projects: ["./tsconfig.json"] }),
//     tailwindcss(),
//     tanstackStart({
//       target: preset,
//       server: { entry: undefined },
//     }),
//     react(),
//   ],
//   resolve: {
//     dedupe: ["react", "react-dom", "@tanstack/react-router"],
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const preset = process.env.VERCEL
  ? "vercel"
  : (process.env.NITRO_PRESET ?? "node-server");

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({}),
    nitro({ preset }),
    react(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
});