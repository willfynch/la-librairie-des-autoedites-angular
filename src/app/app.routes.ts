import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { BooksCatalog } from './pages/books-catalog/books-catalog';
import { Article } from './pages/blog/article/article';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
    path: '',
    component: Home,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:slug',
    component: Article,
  },
  {
    path: 'livres',
    component: BooksCatalog,
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'partenaires',
    loadComponent: () => import('./pages/partner/partners').then(m => m.Partners),
  },
  {
    path: 'partenaires/portail-ae',
    loadComponent: () => import('./pages/partner/portail-ae/portail-ae').then(m => m.PortailAE)
  }
];
