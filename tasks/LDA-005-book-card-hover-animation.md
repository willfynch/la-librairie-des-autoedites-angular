# LDA-005: Improve Book Card Design — Hover Animation

## Context
The book card design is functional but flat. A hover animation revealing an excerpt (like a book opening) can improve engagement and act as a quick-preview mechanism. This reduces the number of clicks needed to evaluate a book before deciding to visit the detail page.

## Scope
- Visual enhancement of the existing `book-card` component only
- No changes to data model or routing
- CSS-based animation only

## Acceptance Criteria

- [ ] On hover, the card animates like a book opening (cover flips/slides to reveal interior)
- [ ] The revealed interior shows the book's `catchPhrase` (excerpt) in a serif font (Times New Roman or similar)
- [ ] Animation is CSS-based (no JavaScript animation libraries)
- [ ] Animation is smooth (60fps, no jank on modern browsers)
- [ ] Reduced-motion media query is respected (`@media (prefers-reduced-motion: reduce)`)
- [ ] The card still shows cover, title, author at rest (no change to default state)
- [ ] Storybook story updated to demonstrate the hover state

## Technical Notes

- **Animation Technique**: Use CSS 3D transforms for the book-open effect
  - Front face: the book cover (existing)
  - Back face: the excerpt panel
  - Use `transform: rotateY()` to flip between faces
  - Use `transform-style: preserve-3d` on the card container
  - Use `backface-visibility: hidden` to hide the back face of each element
- **Excerpt Content**: The `catchPhrase` field on the Book entity contains the excerpt
- **Styling**:
  - Serif font for excerpt (Times New Roman, Georgia, or similar)
  - Background color should contrast with excerpt text
  - Excerpt should be readable (adequate padding and font size)
- **Accessibility**: 
  - Respect `prefers-reduced-motion` preference (disable animation for users who request it)
  - Ensure excerpt is still readable (sufficient contrast)
- **Performance**: 
  - Use `will-change: transform` to hint to browser for optimization
  - Test on low-end devices to ensure 60fps

## Implementation Notes

- Modify `src/app/books/application/components/book-card/book-card.component.ts` (or similar path)
- Add hover state styles in accompanying SCSS
- Consider using `@media (prefers-reduced-motion: reduce)` to simplify/disable animation
- Update related Storybook stories to showcase the hover state (may need interactive controls or hover pseudo-class in Canvas)
- Test across browsers for 3D transform support (all modern browsers support this)
