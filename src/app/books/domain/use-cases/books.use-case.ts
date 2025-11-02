import { map, Observable } from 'rxjs';
import { BooksGateway } from '../ports/books.gateway';
import { Book, BookCategory } from '../types/books.entities';
import { inject, Injectable } from '@angular/core';
import { InMemoryBooksGateway } from '../../infrastructure/in-memory-books-gateway';

@Injectable({ providedIn: 'root' })
export default class BooksUseCase {

  private readonly _gateway: BooksGateway = inject(InMemoryBooksGateway);
  
  private _filterBooksByType(type: BookCategory, books: Book[]) {
    return books.filter((book) => book.type === type);
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

  public getAllBooks(): Observable<Book[]> {
    return this._gateway.getAllBooks();
  }

  public getOneBook(title: string): Observable<Book | undefined> {
    return this._gateway.getOneBook(title);
  }

  public filterBooks(type: BookCategory, searchedValue: string) {
    return this.getAllBooks().pipe(
      map((books) => {
        const filteredByType = this._filterBooksByType(type, books)
        return this._filterBooksBySearchedValue(filteredByType, searchedValue)
      })
    );
  }
}
