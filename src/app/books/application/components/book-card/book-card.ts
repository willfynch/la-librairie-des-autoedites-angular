import { Component, computed, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../domain/types/books.entities';
import { slugify } from '../../../../utils/slugify';

@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.html',
})
export class BookCard {

  public readonly book: InputSignal<Book> = input.required<Book>();
  public readonly slug = computed(() => slugify(this.book().title));
  public readonly tags = computed(() => this.book().tags.slice(0,3));

}
