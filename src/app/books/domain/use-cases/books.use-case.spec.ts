import { TestBed } from '@angular/core/testing';
import { Injector, provideZonelessChangeDetection } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { BooksGateway } from '../ports/books.gateway';
import BooksUseCase from './books.use-case';
import { Book } from '../types/books.entities';
import { slugify } from '../../../utils/slugify';
import { toSignal } from '@angular/core/rxjs-interop';

const book = (
  overrides: Partial<Book> & Pick<Book, 'id' | 'title' | 'authorName' | 'category'>,
): Book => ({
  ISBN: '000-0000000000',
  year: 2024,
  link: 'https://example.com',
  tags: [],
  cover: '/cover.jpg',
  catchPhrase: 'A great book.',
  authorBio: 'Author bio.',
  ...overrides,
});

const FLORENCE = 'Florence Rivières';

// Tags are designed to test primary vs fallback pool logic precisely:
// id:1 — current book in most tests (Florence, tags: fantasy/adventure/sci-fi)
// id:2,3,4 — same author as id:1 → always in primary pool
// id:5 — different author, 2 tags in common with id:1 (fantasy+adventure) → primary pool
// id:6 — different author, 1 tag in common with id:1 (sci-fi) → fallback only
// id:7 — different author, 0 tags in common with id:1 → never included
const MOCK_BOOKS: Book[] = [
  book({ id: '1', title: 'The Yggdrasil Network', authorName: FLORENCE,        category: 'novel',  tags: ['fantasy', 'adventure', 'sci-fi'] }),
  book({ id: '2', title: 'Diag Race',             authorName: FLORENCE,        category: 'novel',  tags: ['post-apo', 'dystopia'] }),
  book({ id: '3', title: "L'art de la pose",      authorName: FLORENCE,        category: 'essay',  tags: ['photography', 'art'] }),
  book({ id: '4', title: 'evidence room',         authorName: FLORENCE,        category: 'poetry', tags: ['poetry', 'trauma'] }),
  book({ id: '5', title: 'Une Etoile pour Noel',  authorName: 'Alodie Romand', category: 'novel',  tags: ['fantasy', 'adventure', 'romance'] }),
  book({ id: '6', title: 'La Renarde',            authorName: 'Rosario',       category: 'novel',  tags: ['sci-fi', 'thriller'] }),
  book({ id: '7', title: 'Sylned V1.0 Supernova', authorName: 'Sandrine',      category: 'novel',  tags: ['romance', 'contemporary'] }),
];

class MockBooksGateway implements BooksGateway {
  getAllBooks = () => of(MOCK_BOOKS);
  getOneBook  = (slug: string) => of(MOCK_BOOKS.find((b) => slugify(b.title) === slug));
}

function setup() {
  TestBed.configureTestingModule({
    providers: [
      provideZonelessChangeDetection(),
      { provide: BooksGateway, useClass: MockBooksGateway },
    ],
  });
  return TestBed.inject(BooksUseCase);
}

// ---------------------------------------------------------------------------
// getBookBySlug
// ---------------------------------------------------------------------------
describe('BooksUseCase.getBookBySlug', () => {
  it('returns the correct book when the slug matches', () => {
    const useCase = setup();
    TestBed.tick();

    const book$ = useCase.getBookBySlug('the-yggdrasil-network');
    const $book = toSignal(book$, { injector: TestBed.inject(Injector) });

    expect($book()!.title).toBe('The Yggdrasil Network');
  });

  it('returns undefined for an unknown slug', async () => {
    const useCase = setup();
    TestBed.tick();

    let book = null;
    await firstValueFrom(useCase.getBookBySlug('does-not-exist')).then((value) => (book = value));

    expect(book).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// getRelatedBooks
// ---------------------------------------------------------------------------
describe('BooksUseCase.getRelatedBooks', () => {
  it('never returns more than 3 books', () => {
    const useCase = setup();
    TestBed.tick();

    const related = useCase.getRelatedBooks(slugify(MOCK_BOOKS[0].title));

    expect(related.length).toBeLessThanOrEqual(3);
  });

  it('excludes the current book from results', () => {
    const useCase = setup();
    TestBed.tick();

    const current = MOCK_BOOKS[0];
    const related = useCase.getRelatedBooks(slugify(current.title));

    expect(related.find((b) => b.id === current.id)).toBeUndefined();
  });

  it('only picks from the primary pool (same author OR 2+ tags) when it has 3+ books', () => {
    const useCase = setup();
    TestBed.tick();

    // id:1 primary pool = {2,3,4} same author + {5} 2-tag = 4 books ≥ 3
    // id:6 (1-tag only) and id:7 (0-tag) must never appear
    const related = useCase.getRelatedBooks(slugify(MOCK_BOOKS[0].title));
    const primaryIds = new Set(['2', '3', '4', '5']);

    expect(related.every((b) => primaryIds.has(b.id))).toBe(true);
  });

  it('falls back to 1-tag books when the primary pool has fewer than 3 books', () => {
    // Custom dataset: current has a unique author and only 1 book with 2+ common tags
    const current  = book({ id: 'c', title: 'Current',  authorName: 'Unique', category: 'novel', tags: ['X', 'Y', 'Z'] });
    const primary1 = book({ id: 'p', title: 'Primary1', authorName: 'Other1', category: 'novel', tags: ['X', 'Y', 'W'] }); // 2 common
    const fallback1 = book({ id: 'f1', title: 'Fallback1', authorName: 'Other2', category: 'novel', tags: ['X', 'W', 'V'] }); // 1 common
    const fallback2 = book({ id: 'f2', title: 'Fallback2', authorName: 'Other3', category: 'novel', tags: ['Y', 'W', 'V'] }); // 1 common
    const fallback3 = book({ id: 'f3', title: 'Fallback3', authorName: 'Other4', category: 'novel', tags: ['Z', 'W', 'V'] }); // 1 common
    const excluded  = book({ id: 'x',  title: 'Excluded',  authorName: 'Other5', category: 'novel', tags: ['W', 'V', 'U'] }); // 0 common

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: BooksGateway,
          useValue: { getAllBooks: () => of([current, primary1, fallback1, fallback2, fallback3, excluded]), getOneBook: () => of(undefined) },
        },
      ],
    });
    const useCase = TestBed.inject(BooksUseCase);
    TestBed.tick();

    const related = useCase.getRelatedBooks(slugify(current.title));
    const eligibleIds = new Set(['p', 'f1', 'f2', 'f3']);

    expect(related.length).toBe(3);
    expect(related.find((b) => b.id === 'x')).toBeUndefined();  // 0-tag book never included
    expect(related.find((b) => b.id === 'c')).toBeUndefined();  // current never included
    expect(related.every((b) => eligibleIds.has(b.id))).toBe(true);
  });

  it('returns an empty array when no related books exist', () => {
    const lonely = book({ id: '99', title: 'Solo', authorName: 'Unknown Author', category: 'humour', tags: ['unique-tag'] });

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        { provide: BooksGateway, useValue: { getAllBooks: () => of([lonely]), getOneBook: () => of(lonely) } },
      ],
    });
    const useCase = TestBed.inject(BooksUseCase);
    TestBed.tick();

    expect(useCase.getRelatedBooks(slugify(lonely.title))).toEqual([]);
  });
});
