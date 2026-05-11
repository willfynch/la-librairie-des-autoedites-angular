# LDA-002: Improve Books Search and Filtering

## Context
The books catalog has a large dataset (60+ books). Current filtering is limited and the UX needs improvement. Users should be able to discover books through multiple filtering dimensions without friction.

## Scope
- Improve the existing books search menu and filtering
- No Algolia or external search service (client-side filtering only)
- Enhance existing components, not replace them

## Acceptance Criteria

- [ ] Filter by multiple tags simultaneously (currently only one category at a time)
- [ ] Filter by author name
- [ ] Search input performs full-text match on:
  - Book title
  - Author name
- [ ] Active filters are visually indicated
- [ ] Users can clear individual filters (not just reset all)
- [ ] Filter state persists on page reload (query parameters)
- [ ] Search results update without full page reload (reactive)

## Technical Notes

- **Data Handling**: All filtering happens client-side via `BooksUseCase`
- **Use Case Extension**: Add new use case methods to support:
  - Multi-tag filtering
  - Author name filtering
  - Full-text search across title and author
- **State Management**: Use Angular signals for reactive filter state
- **URL Sync**: Use `ActivatedRoute` to:
  - Read query params on component init
  - Update query params when filters change
  - This enables browser back/forward and shareable URLs
- **Query Param Schema**:
  ```
  ?search=query&authors=name1,name2&tags=tag1,tag2
  ```

## Implementation Notes

- Filter state should be stored in signals for reactivity
- Use `switchMap` to update results when filters change
- Debounce search input to avoid excessive re-filtering
- Consider visual feedback while filtering (loading state, result count)
- Ensure accessibility: proper ARIA labels on filter controls
- Update Storybook stories for affected components to show filter states
