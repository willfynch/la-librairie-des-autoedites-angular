import { Component, computed, input, InputSignal } from '@angular/core';
import { Book } from '../../../domain/types/books.entities';
import { slugify } from '../../../../utils/slugify';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {

  public readonly book: InputSignal<Book> = input.required<Book>();
  public readonly slug = computed(()=> slugify(this.book().title));

}
