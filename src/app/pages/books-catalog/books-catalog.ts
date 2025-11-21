import { Component, signal, WritableSignal } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section";
import { BookSearchMenuComponent, FilterBooksEvent } from "../../books/application/components/book-search-menu/book-search-menu";
import { BOOK_CATEGORIES } from '../../utils/constants';
import { BookCategory } from '../../books/domain/types/books.entities';

@Component({
  selector: 'app-books-catalog',
  imports: [HeroSectionComponent, BookSearchMenuComponent],
  templateUrl: './books-catalog.html',
  styleUrl: './books-catalog.scss',
})
export class BooksCatalog {

  public readonly bookCategories = BOOK_CATEGORIES;
  public selectedCategory: WritableSignal<BookCategory> = signal('poetry');

  filterBooks(event: FilterBooksEvent){
    const { category, searchedValue } = event;

    this.selectedCategory.set(category || 'poetry');
  }

}
