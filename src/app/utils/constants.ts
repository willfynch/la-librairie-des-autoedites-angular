import { NavBarItemModel } from '../shared/types/models';

export const NAVBAR_ITEMS: NavBarItemModel[] = [
  { value: '', label: 'Accueil' },
  { value: 'livres', label: 'Livres' },
  { value: 'blog', label: 'Blog' },
  { value: 'a-propos', label: 'À propos' },
];

export const URLS_CONSTANTS = {
  BOOK_SUBMISSION_FORM: '#', // TODO: Add actual form URL
};

export const ACTIVE_CLASS = 'active';
