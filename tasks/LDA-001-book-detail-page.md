# LDA-001: Create "Book Details" Page

## Context
The book detail route `/livres/:slug` is referenced from book cards but the page/route does not exist — readers hit a dead end. This page is critical to converting browsers into actual book discovery.

## Scope
- New page component + route
- Includes author bio, external reviews, and related books (see Session Decisions below)
- No user-generated reviews, no multiple retailers, no content warnings (deferred)

## Acceptance Criteria

- [ ] Route `/livres/:slug` is registered in `app.routes.ts`
- [ ] Page displays:
  - Book cover image
  - Title
  - Author name
  - Synopsis (using the `catchPhrase` field)
  - Genre/category tags
  - External buy link as a prominent CTA button
- [ ] Author social link is shown if present
- [ ] "Related books" section shows up to 3 books from the same author, falling back to same category if fewer than 3 found
- [ ] Page is SSR-compatible (data loaded server-side)
- [ ] Storybook story created for the page component

## Technical Notes

- **Data Source**: Book data comes from `InMemoryBooksGateway` via `BooksUseCase`
- **Buy URL**: The `link` field on the `Book` entity is the external buy URL
- **Synopsis**: The `catchPhrase` field contains the synopsis
- **Related Books Logic**:
  1. Filter by same `authorName` first
  2. If fewer than 3 related books, fill remaining slots with books from same `category`
  3. Exclude the current book from related results
  4. Limit to 3 total
- **Component Structure**: Follow the project's clean architecture — inject `BooksUseCase` and let it handle filtering
- **Styling**: Use TailwindCSS 4 with DaisyUI for consistent design

## Session Decisions (2026-05-11)

### Page structure (ordered by importance)
1. **Hero** — cover (large), title, author, buy CTA button, social link
2. **The Book** — synopsis (`catchPhrase`), year, category tags
3. **About the Author** — `authorBio` text (new field to add to entity), social link
4. **Reviews & Mentions** — external/curated reviews only (uses existing `reviews?: BookReview[]` field); section hidden if no reviews
5. **Related Books** — "More by [Author]" (same author first, then same category); label adapts dynamically
6. Footer metadata (ISBN if available)

### Entity changes required before implementation
- Add `authorBio?: string` to the `Book` entity — single text field, 100–200 words max, no author photo for now
- `reviews?: BookReview[]` already exists in the entity but is not populated in mock data — add 2–3 sample reviews to at least 1–2 books for testing

### Data fetching strategy
Decided in session: **fetch full objects (`select *`) in `getAllBooks()`** — no split between lightweight catalog query and full detail query.

Rationale:
- At 60–300 books the payload is ~50–100 KB total — no need to optimize
- `getOneBook(slug)` reads from the cache populated by `getAllBooks()`; if the cache is cold (direct URL / SSR), it fetches by slug from Supabase
- Using a split query (lightweight list + detail fetch) would create an "incomplete cache" problem for no meaningful performance gain at this scale
- Angular `TransferState` bridges SSR → client hydration to avoid double-fetching on direct page loads

### Reviews strategy
External/curated reviews only for MVP (links to press, blogs, Goodreads). No user-generated reviews — avoids moderation complexity. The `BookReview` entity already supports `title`, `link`, `mark`, reviewer avatar, and date.

## Implementation Notes

- Book entity structure: check `src/app/books/domain/types/books.entities.ts`
- Use Angular's `ActivatedRoute` to extract the `:slug` parameter
- Component should be placed in `src/app/books/application/` or create a new feature folder for pages
- Ensure signals are used for reactive state if needed
