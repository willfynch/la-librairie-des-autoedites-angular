import { Component, computed, inject, Signal } from '@angular/core';
import BooksUseCase from '../../books/domain/use-cases/books.use-case';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Book } from '../../books/domain/types/books.entities';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { toSignal } from '@angular/core/rxjs-interop';
import { slugify } from '../../utils/slugify';
import { BookCard } from "../../books/application/components/book-card/book-card";
import { NgOptimizedImage } from '@angular/common';
import { LinkButton } from '../../shared/components/link-button/link-button';
import { RouterlinkButton } from "../../shared/components/routerlink-button/routerlink-button";

@Component({
  selector: 'app-book-detail',
  imports: [HeroSectionComponent, BookCard, NgOptimizedImage, LinkButton, RouterLink, RouterlinkButton],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
})
export class BookDetail {
  // SERVICES
  private readonly bookUseCase = inject(BooksUseCase);
  private readonly route = inject(ActivatedRoute);

  private book$: Observable<Book | undefined> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => this.bookUseCase.getBookBySlug(params.get('title') ?? ''))
  );
  public $book: Signal<Book | undefined> = toSignal(this.book$);
  protected $relatedBooks = computed(() => this.bookUseCase.getRelatedBooks(slugify(this.$book()?.title)))
}
