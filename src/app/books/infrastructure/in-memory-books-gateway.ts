import { Injectable } from '@angular/core';
import { BooksGateway } from '../domain/ports/books.gateway';
import { defer, map, Observable, of } from 'rxjs';
import { Book } from '../domain/types/books.entities';
import data from '../mock/data.json';
import { slugify } from '../../utils/slugify';

@Injectable({ providedIn: 'root' })
export class InMemoryBooksGateway implements BooksGateway {
  private static _books: Book[] = data.books;

  getAllBooks(): Observable<Book[]> {
    return defer(() => of(InMemoryBooksGateway._books));
  }

  getOneBook(title: string): Observable<Book | undefined> {
    return this.getAllBooks().pipe(
      map((books) => books.findLast((book) => slugify(book.title) === title))
    );
  }

}
