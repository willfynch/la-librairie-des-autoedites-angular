import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { BooksCatalog } from './pages/books-catalog/books-catalog';
import { Article } from './pages/blog/article/article';
import { Home } from './pages/home/home';
import { BookDetail } from './pages/book-detail/book-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/article/article').then((m) => m.Article),
  },
  {
    path: 'livres',
    loadComponent: () => import('./pages/books-catalog/books-catalog').then((m) => m.BooksCatalog),
  },
  {
    path: 'livres/:title',
    loadComponent: () => import('./pages/book-detail/book-detail').then((m) => m.BookDetail),
  },
  {
    path: 'proposer-mon-livre',
    loadComponent: () => import('./pages/submit-book/submit-book').then((m) => m.SubmitBook),
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'partenaires',
    loadComponent: () => import('./pages/partner/partners').then((m) => m.Partners),
  },
  {
    path: 'partenaires/portail-ae',
    loadComponent: () => import('./pages/partner/portail-ae/portail-ae').then((m) => m.PortailAE),
  },
];
