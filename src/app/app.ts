import { Component, signal } from '@angular/core';
import data from '../../src/app/books/mock/data.json'
import { BookCard } from "./books/application/components/book-card/book-card";
import { HeroSectionComponent } from './books/application/components/hero-section/hero-section.component';
import { BookSearchMenuComponent, FilterBooksEvent } from './books/application/components/book-search-menu/book-search-menu.component';
import { BookCategory, BookCategoryTabItemModel } from './books/domain/types/books.entities';
@Component({
  selector: 'app-root',
  imports: [BookCard, HeroSectionComponent, BookSearchMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('la-librairie-des-autoedites-angular');
  book = signal(data.books[12]);

  // Book search menu properties
  currentCategory = signal<BookCategory>('poetry');

  categoryTabs: BookCategoryTabItemModel[] = [
    { type: 'poetry', label: 'Poésie' },
    { type: 'novel', label: 'Roman' },
    { type: 'essay', label: 'Essai' },
    { type: 'youth', label: 'Jeunesse' },
    { type: 'erotism', label: 'Érotisme' },
    { type: 'humour', label: 'Humour' },
  ];

  onFilterBooks(event: FilterBooksEvent): void {
    console.log('Filter books event:', event);

    // Update current category if provided
    if (event.type) {
      this.currentCategory.set(event.type);
    }

    // TODO: Implement actual filtering logic
    // if (event.searchedValue) {
    //   // Filter books by search value
    // }
  }
}
