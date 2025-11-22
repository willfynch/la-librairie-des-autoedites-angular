import { Component, HostListener, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Book,
  BookCategory,
  BookCategoryTabItemModel,
  isValidCategory,
} from '../../../domain/types/books.entities';
import BooksUseCase from '../../../domain/use-cases/books.use-case';

export interface FilterBooksEvent {
  category?: BookCategory;
  searchedValue?: string;
}

@Component({
  selector: 'app-book-search-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-search-menu.html',
  host: {
    onscroll: 'onWindowScroll()',
  },
})
export class BookSearchMenuComponent {
  // Input signals
  public readonly bookCategory = input.required<BookCategory>();
  public readonly tabItems = input.required<BookCategoryTabItemModel[]>();

  public readonly searchInputChange = output<string>();
  public readonly categoryChange = output<BookCategory>();

  // Internal scroll tracking
  protected scrollY = signal<number>(0);
  protected scrollDirection = signal<'down' | 'up' | null>(null);
  private previousScrollY = 0;

  // Constants
  protected readonly ACTIVE_CLASS = 'btn-active';

  onWindowScroll(): void {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;

    // Determine scroll direction
    if (currentScrollY > this.previousScrollY) {
      this.scrollDirection.set('down');
    } else if (currentScrollY < this.previousScrollY) {
      this.scrollDirection.set('up');
    }

    // Update scroll position
    this.scrollY.set(currentScrollY);
    this.previousScrollY = currentScrollY;
  }

  onSearchInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchValue = target.value.toString().toLowerCase();
    this.searchInputChange.emit(searchValue);
  }

  onCategoryChange(event: Event): void {
    const category = (event.target as HTMLButtonElement).value.toString().toLowerCase();
    if (isValidCategory(category)) {
      this.categoryChange.emit(category);
    }
  }
}
