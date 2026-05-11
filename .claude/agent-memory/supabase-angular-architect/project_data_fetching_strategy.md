---
name: Books catalog data-fetching strategy
description: Architectural decision on how to fetch books for catalog and detail pages in Angular SSR
type: project
---

Decided on Option B (Supabase as normal API with gateway-level caching) over Option A (fetch all once, reuse for details).

**Why:** SSR invalidates Option A — direct navigation to `/livres/:slug` starts with no in-memory state. Also, detail pages include extra data (reviews, full author bio) not present on catalog cards, making a single "fetch everything" query a permanent over-fetch that grows with the catalog.

**How to apply:** Implement as follows:

1. Two separate domain types: `BookCard` (lightweight, for catalog) and `Book extends BookCard` (full entity with reviews, for detail page)
2. Two gateway methods: `getAll(): Observable<BookCard[]>` and `getBySlug(slug: string): Observable<Book | null>`
3. Cache lives inside `SupabaseBooksGateway` as a private implementation detail — Use Cases and components are unaware of caching
4. `shareReplay(1)` on the `getAll()` Observable, skipped on the server (`isPlatformBrowser` guard)
5. `Map<string, Book>` for individual book entity cache in the gateway
6. Route resolver (`ResolveFn<Book>`) on `/livres/:slug` — runs on both server and client, eliminates loading state on detail page
7. Catalog page uses `toSignal(..., { initialValue: [] })` for non-blocking render with skeleton

The cache must NOT live in the Use Case — caching is infrastructure, not business logic. Use Cases are thin orchestrators.

`shareReplay` note: without `refCount: true` it keeps the source alive for the session — intentional for a catalog that never needs invalidation. If admin editing with live reflect is added, replace with `BehaviorSubject` + explicit `invalidate()` on the gateway.
