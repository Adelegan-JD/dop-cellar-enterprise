# Environment Variables

This project follows a strict split between **build-time** values (baked into
the client bundle) and **runtime** values (only available on the server).

See [`.env.example`](./.env.example) for the full list of variables.

---

## The two flavors

| Prefix      | Where it lives             | Accessed via              | Bundled into client? | Use for                                  |
| ----------- | -------------------------- | ------------------------- | -------------------- | ---------------------------------------- |
| `VITE_*`    | `.env*` files / host UI    | `import.meta.env.VITE_X`  | Yes (build time)     | Public URLs, anon/publishable keys       |
| (anything)  | Host secret store          | `process.env.X` at runtime| No                   | API keys, service-role keys, webhooks    |

**Golden rule:** Never reference `process.env.X` at module scope. Read it
*inside* a server function `.handler()` body or a server route handler.
Otherwise Vite cannot replace it and you'll get `undefined` in production.

```ts
// ❌ Wrong — evaluated at build time, becomes undefined in the bundle
const apiKey = process.env.RESEND_API_KEY;
export const sendEmail = createServerFn(...).handler(async () => {
  await fetch("https://api.resend.com/...", { headers: { Authorization: `Bearer ${apiKey}` } });
});

// ✅ Right — read at runtime, on the server
export const sendEmail = createServerFn(...).handler(async () => {
  const apiKey = process.env.RESEND_API_KEY!;
  await fetch("https://api.resend.com/...", { headers: { Authorization: `Bearer ${apiKey}` } });
});
```

---

## Local development

```bash
cp .env.example .env.local
# fill in only the values you need locally
bun install
bun run dev
```

`.env.local` is gitignored. Never commit real secrets.

---

## Vercel

1. **Project → Settings → Environment Variables.**
2. Add each variable and tick the environments it applies to:
   - **Production** — `main` branch deployments.
   - **Preview** — every pull request and non-prod branch.
   - **Development** — pulled by `vercel pull` for local CLI use.
3. Vercel injects all of them at build time for `VITE_*` and at runtime for
   everything else. No code changes needed.
4. The included CI workflow (`.github/workflows/vercel-preview.yml`) calls
   `vercel pull` before building, so PR previews automatically receive their
   own Preview-scoped environment.

**Required GitHub secrets** for the workflow:

| Secret              | Where to get it                                         |
| ------------------- | ------------------------------------------------------- |
| `VERCEL_TOKEN`      | https://vercel.com/account/tokens                       |
| `VERCEL_ORG_ID`     | Run `vercel link` locally → `.vercel/project.json`      |
| `VERCEL_PROJECT_ID` | Run `vercel link` locally → `.vercel/project.json`      |

---

## Docker

Two equivalent options:

```bash
# Option A: pass individually
docker run --rm -p 3000:3000 \
  -e SUPABASE_URL="..." \
  -e SUPABASE_SERVICE_ROLE_KEY="..." \
  -e RESEND_API_KEY="..." \
  dopcellar-web

# Option B: env file
docker run --rm -p 3000:3000 --env-file .env.production dopcellar-web
```

For `VITE_*` variables, remember they are baked into the bundle **at build
time**. If you need different public values per environment, build a
separate image per environment (or pass them as `--build-arg` and forward
into the build stage of the Dockerfile).

The container exposes `GET /api/health` for health checks. The
`HEALTHCHECK` directive in the Dockerfile uses it automatically — Docker
(and Kubernetes / Fly / ECS) will restart the container if it reports
unhealthy three checks in a row.

---

## Adding a new variable

1. Add the key (with a comment explaining what it's for) to `.env.example`.
2. Add it locally to `.env.local` if you need it for dev.
3. Add it in Vercel → Settings → Environment Variables (all relevant scopes).
4. Add it as a secret to your Docker host / orchestrator.
5. Read it inside the server handler — never at module scope.
