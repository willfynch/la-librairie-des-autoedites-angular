import { Component, HostListener, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCategory, BookCategoryTabItemModel } from '../../../domain/types/books.entities';

export interface FilterBooksEvent {
  type?: BookCategory;
  searchedValue?: string;
}

@Component({
  selector: 'app-book-search-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-search-menu.component.html',
})
export class BookSearchMenuComponent {
  // Input signals
  bookCategory = input.required<BookCategory>();
  tabItems = input.required<BookCategoryTabItemModel[]>();

  // Output event
  filterBooks = output<FilterBooksEvent>();

  // Internal scroll tracking
  protected scrollY = signal<number>(0);
  protected scrollDirection = signal<'down' | 'up' | null>(null);
  private previousScrollY = 0;

  // Constants
  protected readonly ACTIVE_CLASS = 'active';

  @HostListener('window:scroll')
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

  // Methods
  handleFilterBooks(type?: BookCategory, searchedValue?: string): void {
    this.filterBooks.emit({ type, searchedValue });
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchValue = target.value.toString().toLowerCase();
    this.handleFilterBooks(this.bookCategory(), searchValue);
  }
}
