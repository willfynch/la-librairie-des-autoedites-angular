import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksGateway } from './books/domain/ports/books.gateway';
import { BlogGateway } from './blog/domain/ports/blog.gateway';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const articles$ = inject(BlogGateway)
        .getAllBlogArticles()
        .pipe(map((articles) => articles!.map((article) => ({ slug: article.slug }))));
      return firstValueFrom(articles$);
    },
  },
  {
    path: 'livres',
    renderMode: RenderMode.Server,
  },
  {
    path: 'a-propos',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'partenaires',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'partenaires/portail-ae',
    renderMode: RenderMode.Prerender,
  },
];
