import { Component, input } from '@angular/core';
import { Book } from '../../../domain/types/books.entities';
import { BookCard } from "../book-card/book-card";

@Component({
  selector: 'app-book-list',
  imports: [BookCard],
  templateUrl: './book-list.html',
})
export class BookList {

  public readonly books = input.required<Book[]>();

}
