import { createFileRoute } from "@tanstack/react-router";

/**
 * Health check endpoint — used by Docker HEALTHCHECK, uptime monitors,
 * Vercel/Kubernetes/Fly liveness probes, and load balancers.
 *
 * Returns 200 with a small JSON body when the server is able to handle
 * requests. Keep this handler dependency-free: do NOT touch the database
 * or downstream APIs here, otherwise an unrelated outage will mark the
 * container as unhealthy and trigger restart loops.
 */
export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          JSON.stringify({
            status: "ok",
            uptime: typeof process !== "undefined" ? (process.uptime?.() ?? null) : null,
            timestamp: new Date().toISOString(),
          }),
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "cache-control": "no-store",
            },
          },
        ),
    },
  },
});
