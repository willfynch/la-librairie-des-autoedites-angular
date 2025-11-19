import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { BooksCatalog } from './pages/books-catalog/books-catalog';
import { App } from './app';
import { Article } from './pages/blog/article/article';

export const routes: Routes = [
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:slug',
    component: Article,
  },
  {
    path: 'books',
    component: BooksCatalog,
  },
  {
    path: '',
    component: BooksCatalog,
  },
];
