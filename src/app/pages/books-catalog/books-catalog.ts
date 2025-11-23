import { Component, inject, Signal } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import {
  BookSearchMenuComponent,
} from '../../books/application/components/book-search-menu/book-search-menu';
import { Book, BookCategory } from '../../books/domain/types/books.entities';
import BooksUseCase from '../../books/domain/use-cases/books.use-case';
import { BookList } from "../../books/application/components/book-list/book-list";

@Component({
  selector: 'app-books-catalog',
  imports: [HeroSectionComponent, BookSearchMenuComponent, BookList],
  templateUrl: './books-catalog.html',
  styleUrl: './books-catalog.scss',
})
export class BooksCatalog {

  // SERVICES
  private readonly _booksUseCase = inject(BooksUseCase);

  // SIGNALS AND OBSERVABLES
  protected readonly selectedCategory: Signal<BookCategory> = this._booksUseCase.selectedCategory;
  public readonly filteredBooksCount: Signal<number> = this._booksUseCase.filteredBooksCount;

  // STATIC VALUES
  public readonly bookCategories = this._booksUseCase.bookCategories;
  protected readonly books : Signal<Book[]> = this._booksUseCase.filteredBooks;

  updateSearchedValue(value: string) {
    this._booksUseCase.updateSearchedValue(value);
  }
  updateSelectedCategory(category: BookCategory) {
    this._booksUseCase.updateSelectedCategory(category);
  }
}
