# La Librairie des Autoédités — Project Backlog

**Project**: Angular 21 SSR application (migrated from Next.js)  
**Last Updated**: 2026-05-15

---

## 🔺 Critical

- [ ] LDA-001: Create "book details" page `/livres/:slug` — MVP scope: book cover, title, author, synopsis (catchPhrase), genre tags, buy/external link CTA, author social link, related books; tests written, component in progress #deepwork 🔺 ➕ 2026-05-11 [spec](tasks/LDA-001-book-detail-page.md)
- [ ] LDA-002: Improve books search and filtering — implement tag/category filters first, then full-text search on title and author; improve search UX responsiveness #deepwork 🔺 ➕ 2026-05-11 [spec](tasks/LDA-002-books-search-filtering.md)
- [ ] LDA-003: Create the `/proposer-mon-livre` page and route #deepwork 🔺 ➕ 2026-05-11

---

## ⏫ Backlog

- [x] LDA-017: Migrate to Angular 21 — upgrade from v20.2 to v21 (v22 too fresh); migrate unit tests from Karma/Jasmine to Vitest; set up Playwright for E2E tests #deepwork ⏫ ➕ 2026-05-13 ✅ 2026-05-13
- [ ] LDA-018: Implement `getRelatedBooks(slug)` in `BooksUseCase` — primary pool: same author OR 2+ tags in common; fallback to 1-tag books only if primary pool < 3; pick 3 randomly from the pool; tests already written in `books.use-case.spec.ts` #deepwork ⏫ ➕ 2026-05-13
- [ ] LDA-019: Implement `getBookBySlug(slug): Observable<Book | undefined>` in `BooksUseCase` — tests already written in `books.use-case.spec.ts` #deepwork ⏫ ➕ 2026-05-13
- [ ] LDA-020: Populate `authorBio` field in mock data (`src/app/books/mock/_data.json`) — field added to `Book` entity, needed for the book detail page author section #deepwork 🔽 ➕ 2026-05-13
- [ ] LDA-004: Fix book catalog layout bug — tags sometimes overflow outside card borders #deepwork ⏫ ➕ 2026-05-11
- [ ] LDA-005: Improve book card design — hover animation opens the card like a book, revealing a hidden excerpt in Times New Roman (book-like animation); consider using this as a quick-preview mechanism to reduce clicks to detail page #deepwork 🔼 ➕ 2026-05-11 [spec](tasks/LDA-005-book-card-hover-animation.md)
- [ ] LDA-006: Create BlogUseCase #deepwork ⏫ ➕ 2026-05-11
- [ ] LDA-007: Create PartnersGateway (InMemoryPartnersGateway) #deepwork ⏫ ➕ 2026-05-11
- [ ] LDA-008: Complete the `hot-topic-books` component #deepwork ⏫ ➕ 2026-05-11
- [ ] LDA-009: Create Storybook story for `book-list` component #deepwork ⏫ ➕ 2026-05-11

---

## 🔼 Medium Priority

- [ ] LDA-010: Implement SEO meta tags #deepwork 🔼 ➕ 2026-05-11
- [ ] LDA-011: Add error handling #deepwork 🔼 ➕ 2026-05-11
- [ ] LDA-012: Increase test coverage #deepwork 🔼 ➕ 2026-05-11
- [ ] LDA-013: Create Storybook story for `cta-banner` shared component #deepwork 🔼 ➕ 2026-05-11
- [ ] LDA-016: Add pagination to the books catalog (`/livres`) #deepwork 🔼 ➕ 2026-05-11

---

## 🔽 Low Priority

- [ ] LDA-014: Create Storybook story for `hot-topic-books` component #deepwork 🔽 ➕ 2026-05-11
- [ ] LDA-015: Fill in TODO URL constants in src/app/utils/constants.ts #deepwork 🔽 ➕ 2026-05-11

---

## 🔄 In Progress

- [ ] LDA-001: book-detail component being coded by user — see Critical section

---

## ✅ Done

- [x] LDA-017: Migrate to Angular 21 + Vitest + Playwright ✅ 2026-05-13

---

## ❌ Cancelled

No cancelled tasks at this time.
