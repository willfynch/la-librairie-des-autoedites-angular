import { Component, signal } from '@angular/core';
import data from '../../src/app/books/mock/data.json';
import { BookCard } from './books/application/components/book-card/book-card';
import { HeroSectionComponent } from './books/application/components/hero-section/hero-section.component';
import {
  BookSearchMenuComponent,
  FilterBooksEvent,
} from './books/application/components/book-search-menu/book-search-menu.component';
import { BookCategory, BookCategoryTabItemModel } from './books/domain/types/books.entities';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { BlogArticleModel } from './blog/domain/types/blog.entities';
import { ArticleHeader } from "./blog/application/components/article-header/article-header";
import { ArticleAuthorBio } from "./blog/application/components/article-author-bio/article-author-bio";
import { ArticleCard } from "./blog/application/components/article-card/article-card";
import { WaveDivider } from "./shared/components/wave-divider/wave-divider";

@Component({
  selector: 'app-root',
  imports: [
    BookCard,
    HeroSectionComponent,
    BookSearchMenuComponent,
    Navbar,
    Footer,
    ArticleHeader,
    ArticleAuthorBio,
    ArticleCard,
    WaveDivider
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('la-librairie-des-autoedites-angular');
  book = signal(data.books[12]);
  mockArticle = signal<BlogArticleModel>({
    slug: 'comment-publier-votre-premier-livre',
    title: 'Comment publier votre premier livre en auto-édition',
    content:
      "L'auto-édition est devenue une option populaire pour les auteurs qui souhaitent garder le contrôle créatif et commercial de leurs œuvres.",
    tags: ['auto-édition', 'écriture', 'publication'],
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
    date: '2024-01-15',
    author: {
      author_name: 'Marie Dupont',
      author_pic:
        'https://i.postimg.cc/Y0dvxT2n/465190803-1063951018859068-3320607388455320261-n.jpg',
      author_description:
        "Auteure passionnée depuis plus de 10 ans, Marie accompagne les écrivains dans leur parcours d'auto-édition. Elle a publié plusieurs guides pratiques et anime des ateliers d'écriture.",
      author_link: 'https://example.com/auteurs/marie-dupont',
      author_title: 'Auteure et Coach en Écriture',
    },
    category: 'auto-édition',
  });

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
