import { Component, signal } from '@angular/core';
import data from '../../src/app/books/mock/data.json'
import { BookCard } from "./books/application/components/book-card/book-card";
@Component({
  selector: 'app-root',
  imports: [BookCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('la-librairie-des-autoedites-angular');
  book = signal(data.books[12]);
}
