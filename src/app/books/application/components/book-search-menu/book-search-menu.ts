import { Component, HostListener, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCategory, BookCategoryTabItemModel } from '../../../domain/types/books.entities';

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
  bookCategory = input.required<BookCategory>();
  tabItems = input.required<BookCategoryTabItemModel[]>();

  // Output event
  filterBooksChange = output<FilterBooksEvent>();

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

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchValue = target.value.toString().toLowerCase();
    this.filterBooksChange.emit({ category: this.bookCategory(), searchedValue: searchValue });
  }
}
