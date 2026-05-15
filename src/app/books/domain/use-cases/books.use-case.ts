import { firstValueFrom, map, Observable, shareReplay, tap } from 'rxjs';
import { BooksGateway } from '../ports/books.gateway';
import { Book, BookCategory } from '../types/books.entities';
import {
  computed,
  effect,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BOOK_CATEGORIES } from '../../../utils/constants';
import { slugify } from '../../../utils/slugify';
import { getThreeRandomNumbers } from '../../../utils/helpers';

@Injectable({ providedIn: 'root' })
export default class BooksUseCase {
  // SERVICES
  private readonly _gateway: BooksGateway = inject(BooksGateway);

  // SIGNALS AND OBSERVABLES
  private readonly _cachedBooks$: Observable<Book[]> = this._gateway
    .getAllBooks()
    .pipe(shareReplay({ bufferSize: 1, refCount: false }));
  private readonly _allBooks = toSignal(this._cachedBooks$, { initialValue: [] });
  public readonly $allBooks: Signal<Book[]> = this._allBooks;

  // FILTER SIGNALS
  private _searchedValue: WritableSignal<string> = signal<string>('');
  private _selectedCategory: WritableSignal<BookCategory> = signal<BookCategory>('novel');
  public readonly selectedCategory: Signal<BookCategory> = this._selectedCategory.asReadonly();

  // FILTERED BOOKS
  public readonly filteredBooks: Signal<Book[]> = computed(() => {
    const _allBooks = this._allBooks();
    if (!_allBooks) return [];

    return _allBooks
      .filter((book: Book) => this._filterBooksByCategory(book, this._selectedCategory()))
      .filter((book: Book) => this._filterBooksBySearchedValue(book, this._searchedValue()));
  });

  // BOOK COUNT SIGNALS - Useful for UI

  public readonly totalBooksCount: Signal<number> = computed(() => this._allBooks()?.length ?? 0);
  public readonly filteredBooksCount: Signal<number> = computed(() => this.filteredBooks().length);

  // STATIC VALUES

  public readonly bookCategories = BOOK_CATEGORIES;

  // METHODS

  private _filterBooksByCategory(book: Book, category: BookCategory): boolean {
    return book.category === category;
  }

  private _filterBooksBySearchedValue(book: Book, searchedValue: string): boolean {
    const searchedValueLower = searchedValue.toLocaleLowerCase();
    return (
      book.title.toLowerCase().includes(searchedValueLower) ||
      book.authorName.toLowerCase().includes(searchedValueLower) ||
      book.tags.some((tag) => tag.toLowerCase().includes(searchedValueLower))
    );
  }

  public updateSelectedCategory(category: BookCategory): void {
    this._selectedCategory.set(category);
  }

  public updateSearchedValue(value: string): void {
    this._searchedValue.set(value);
  }

  public resetFilters(): void {
    this._selectedCategory.set('novel');
    this._searchedValue.set('');
  }

  public getAllBooks(): Observable<Book[]> {
    return this._gateway.getAllBooks();
  }

  public getBookBySlug(slug: string): Observable<Book | undefined> {
    return this._gateway.getOneBook(slug);
  }

  public getOneBookSync(slug: string): Book | undefined {
    return this._allBooks()?.find((book) => slugify(book.title) === slug);
  }

  private getCommonTags(firstBook: Book, secondBook: Book): string[] {
    const firstBookTags = firstBook.tags;
    const secondBookTags = secondBook.tags;
    const commonTags: string[] = [];

    firstBookTags.forEach(tag=>{
      if(secondBookTags.includes(tag)){
        commonTags.push(tag)
      }
    });

    return commonTags;
  }

  public getRelatedBooks(slug: string): Book[] {
    const currentBook = this._allBooks().findLast((book) => slugify(book.title) === slug);
    if(currentBook===undefined){
      throw new Error('No book was found.')
    }
    const relatedBooks: Book[] = [];

    // exclude current book
    const allOtherBooks = this._allBooks()?.filter((book) => slugify(book.title) !== slug);

    // Lists of related books
    const sameAuthorBooks = allOtherBooks.filter(
      (book) => book.authorName === currentBook?.authorName,
    );

    const booksFromOtherAuthorsWithTwoCommonTags = allOtherBooks
      .filter((book) => book.authorName !== currentBook?.authorName)
      .filter((book) => this.getCommonTags(book, currentBook).length >= 2);

    const booksFromOtherAuthorsWithOneCommonTags = allOtherBooks
      .filter((book) => book.authorName !== currentBook?.authorName)
      .filter((book) => this.getCommonTags(book, currentBook).length >= 1);


    let pool = [...sameAuthorBooks, ...booksFromOtherAuthorsWithTwoCommonTags];

    if(pool.length < 3){
      pool = [...pool, ...booksFromOtherAuthorsWithOneCommonTags];
    }

    const listOfIndexes = Array.from({length: pool.length}, (x, i) => i)
    const randomIndexes = getThreeRandomNumbers(listOfIndexes);

    randomIndexes.forEach(index => {
      relatedBooks.push(pool[index]);
    })

    return relatedBooks;
  }
}
