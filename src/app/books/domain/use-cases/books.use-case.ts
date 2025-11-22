import { map, Observable } from 'rxjs';
import { BooksGateway } from '../ports/books.gateway';
import { Book, BookCategory } from '../types/books.entities';
import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class BooksUseCase {
  private readonly _gateway: BooksGateway = inject(BooksGateway);
  public selectedCategory: WritableSignal<BookCategory> = signal<BookCategory>('all');
  public searchedValue: WritableSignal<string> = signal<string>('');

  constructor() {
    effect(() => {
      this._filterBooks(this.selectedCategory(), this.searchedValue());
    });
  }

  private _filterBooksByCategory(category: BookCategory, books: Book[]) {
    return books.filter((book) => book.category === category);
  }

  private _filterBooksBySearchedValue(books: Book[], searchedValue: string) {
    return books.filter(
      (book: Book) =>
        book.title.toLowerCase().includes(searchedValue) ||
        book.authorName.toLowerCase().includes(searchedValue) ||
        book.catchPhrase.toLowerCase().includes(searchedValue) ||
        book.tags.some((tag) => tag.toLowerCase().includes(searchedValue))
    );
  }

  private _filterBooks(category: BookCategory, searchedValue: string) {
    this.selectedCategory.set(category);
    return this.getAllBooks().pipe(
      map((books) => {
        const filteredByType = this._filterBooksByCategory(category, books);
        return this._filterBooksBySearchedValue(filteredByType, searchedValue);
      })
    );
  }

  public getAllBooks(): Observable<Book[]> {
    return this._gateway.getAllBooks();
  }

  public getOneBook(title: string): Observable<Book | undefined> {
    return this._gateway.getOneBook(title);
  }
}
