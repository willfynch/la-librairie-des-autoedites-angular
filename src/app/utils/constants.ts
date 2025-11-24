import { BookCategoryTabItemModel } from '../books/domain/types/books.entities';
import { PartnerInstaFeed } from '../partners/domain/types/partners.entities';
import { NavBarItemModel } from '../shared/types/models';

export const NAVBAR_ITEMS: NavBarItemModel[] = [
  { value: '', label: 'Accueil' },
  { value: 'livres', label: 'Livres' },
  { value: 'blog', label: 'Blog' },
  {
    value: 'partenaires',
    label: 'Partenaires',
  },
  { value: 'a-propos', label: 'À propos' },
];

export const BOOK_CATEGORIES: BookCategoryTabItemModel[] = [
  { type: 'novel', label: 'Roman' },
  { type: 'poetry', label: 'Poésie' },
  { type: 'essay', label: 'Essai' },
  { type: 'youth', label: 'Jeunesse' },
  { type: 'humour', label: 'Humour' },
  { type: 'erotism', label: '+18' },
];

export const URLS_CONSTANTS = {
  BOOK_SUBMISSION_FORM: '#', // TODO: Add actual form URL
  WEBSITE_URL: 'https://ducafeetdesrimes.com', // TODO: Update with actual URL
  INSTA_URL: 'https://instagram.com/ducafeetdesrimes', // TODO: Update with actual URL
  SUBSTACK_URL: 'https://substack.com/@ducafeetdesrimes', // TODO: Update with actual URL
  THREADS_URL: 'https://threads.net/@ducafeetdesrimes', // TODO: Update with actual URL
};

export const ACTIVE_CLASS = 'active';


