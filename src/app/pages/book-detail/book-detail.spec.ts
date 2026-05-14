import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BooksGateway } from '../../books/domain/ports/books.gateway';
import { InMemoryBooksGateway } from '../../books/infrastructure/in-memory-books-gateway';
import { BookDetail } from './book-detail';

// Slug for "Une Etoile pour Noel" (Alodie Romand, novel) — exists in mock data
const EXISTING_SLUG = 'une-etoile-pour-noel';
const UNKNOWN_SLUG  = 'this-book-does-not-exist';

function setup(slug: string) {
  TestBed.configureTestingModule({
    imports: [BookDetail],
    providers: [
      provideZonelessChangeDetection(),
      { provide: BooksGateway, useClass: InMemoryBooksGateway },
      { provide: ActivatedRoute, useValue: { snapshot: {params: {title: slug} } }},
    ],
  });

  const fixture: ComponentFixture<BookDetail> = TestBed.createComponent(BookDetail);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

describe('BookDetail', () => {
  it('creates the component', () => {
    const { fixture } = setup(EXISTING_SLUG);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('displays the book title', () => {
    const { el } = setup(EXISTING_SLUG);
    expect(el.textContent).toContain('Une Etoile pour Noel');
  });

  it('displays the author name', () => {
    const { el } = setup(EXISTING_SLUG);
    expect(el.textContent).toContain('Alodie Romand');
  });

  it('renders a buy / external link CTA', () => {
    const { el } = setup(EXISTING_SLUG);
    const cta = el.querySelector<HTMLAnchorElement>('[data-testid="buy-cta"]');
    expect(cta).toBeTruthy();
    expect(cta?.href).toBeTruthy();
  });

  it('hides the reviews section when the book has no reviews', () => {
    const { el } = setup(EXISTING_SLUG);
    expect(el.querySelector('[data-testid="reviews-section"]')).toBeNull();
  });

  it('renders the related books section', () => {
    const { el } = setup(EXISTING_SLUG);
    expect(el.querySelector('[data-testid="related-books"]')).toBeTruthy();
  });

  it('shows at most 3 related books', () => {
    const { el } = setup(EXISTING_SLUG);
    const cards = el.querySelectorAll('[data-testid="related-book-card"]');
    expect(cards.length).toBeLessThanOrEqual(3);
  });

  it('renders nothing meaningful for an unknown slug', () => {
    const { el } = setup(UNKNOWN_SLUG);
    // No book title should appear and no buy CTA
    expect(el.querySelector('[data-testid="buy-cta"]')).toBeNull();
  });
});
