---
name: Backend and catalog architecture decisions
description: Confirmed backend stack and migration decisions for La Librairie des Autoédités
type: project
---

Supabase confirmed as the sole backend (no custom server). Books catalog is migrating from a JSON file in the repo to a Supabase `books` table.

**Why:** Supabase covers all current needs: catalog storage, submission forms (public write via anon key + RLS), admin dashboard (Supabase Studio short-term, /admin route long-term), and future Instagram/Threads OAuth via Supabase Auth + Edge Functions.

**How to apply:** All gateway implementations should target Supabase. The service role key stays in Edge Functions only — never exposed to the Angular client. Anon key + RLS is the public access model.

Key future features planned:
- `/livres/:slug` book detail pages (not yet built as of 2026-05-11)
- In-app submission form (replaces external Tally form)
- Admin dashboard at `/admin` route with approve → publish workflow
- Instagram/Threads OAuth login (future, not imminent)
