import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import {
  BookSearchMenuComponent,
  FilterBooksEvent,
} from '../../books/application/components/book-search-menu/book-search-menu';
import { BOOK_CATEGORIES } from '../../utils/constants';
import { BookCategory } from '../../books/domain/types/books.entities';
import BooksUseCase from '../../books/domain/use-cases/books.use-case';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookList } from "../../books/application/components/book-list/book-list";

@Component({
  selector: 'app-books-catalog',
  imports: [HeroSectionComponent, BookSearchMenuComponent, BookList],
  templateUrl: './books-catalog.html',
  styleUrl: './books-catalog.scss',
})
export class BooksCatalog {
  public readonly bookCategories = BOOK_CATEGORIES;
  private readonly _booksUseCase = inject(BooksUseCase);
  protected readonly selectedCategory = this._booksUseCase.selectedCategory.asReadonly();

  private readonly _books$ = this._booksUseCase.getAllBooks();
  protected readonly books = toSignal(this._books$, { initialValue: [] });

  updateSearchedValue(value: string) {
    this._booksUseCase.searchedValue.set('');
  }
  updateSelectedCategory(value: BookCategory) {
    this._booksUseCase.selectedCategory.set(value);
  }
}
