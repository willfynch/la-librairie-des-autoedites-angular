---
name: Supabase SSR client setup and table design
description: SSR-safe Supabase initialization pattern and books table design notes
type: project
---

Use `@supabase/ssr` package (not `@supabase/supabase-js` directly). Two client variants:
- Browser: `createBrowserClient(url, anonKey)` — manages cookies for auth sessions automatically
- Server: `createServerClient(url, anonKey, { cookies: { getAll: () => [], setAll: () => {} } })` — empty cookie adapter is fine for read-only/unauthenticated queries

`SupabaseService` lives in `src/app/core/` and uses `isPlatformBrowser(PLATFORM_ID)` to return the correct client type.

When Supabase Auth is added later, the server client's cookie adapter must be wired to Express request/response objects via Angular's `REQUEST`/`RESPONSE` injection tokens.

**Books table design:**
- Add `published` boolean column — filter on this in both Supabase query AND RLS policy (belt and suspenders)
- RLS policy: `CREATE POLICY "public can read published books" ON books FOR SELECT USING (published = true)`
- Catalog query: `select('id, slug, title, author, cover_image_url, tags, category, catch_phrase')` — no reviews, no full bio
- Detail query: `select('*')` — full entity including reviews array
- Handle Supabase's `.single()` PGRST116 error code explicitly as "not found" (return null), not as an unhandled error

**Supabase free tier note:** Cold starts only apply to Edge Functions, not Postgres. Direct table queries on 300 rows return in under 50ms from EU region. No meaningful cold start concern for the catalog.
