import { BookCategoryTabItemModel } from '../books/domain/types/books.entities';
import { InstaFeed, NavBarItemModel } from '../shared/types/models';

export const NAVBAR_ITEMS: NavBarItemModel[] = [
  { value: '', label: 'Accueil' },
  { value: 'livres', label: 'Livres' },
  { value: 'blog', label: 'Blog' },
  { value: 'a-propos', label: 'À propos' },
];

export const BOOK_CATEGORIES: BookCategoryTabItemModel[] = [
  { type: 'all', label: 'Tous' },
  { type: 'poetry', label: 'Poésie' },
  { type: 'novel', label: 'Roman' },
  { type: 'essay', label: 'Essai' },
  { type: 'youth', label: 'Jeunesse' },
  { type: 'erotism', label: 'Érotisme' },
  { type: 'humour', label: 'Humour' },
];

export const URLS_CONSTANTS = {
  BOOK_SUBMISSION_FORM: '#', // TODO: Add actual form URL
  WEBSITE_URL: 'https://ducafeetdesrimes.com', // TODO: Update with actual URL
  INSTA_URL: 'https://instagram.com/ducafeetdesrimes', // TODO: Update with actual URL
  SUBSTACK_URL: 'https://substack.com/@ducafeetdesrimes', // TODO: Update with actual URL
  THREADS_URL: 'https://threads.net/@ducafeetdesrimes', // TODO: Update with actual URL
};

export const ACTIVE_CLASS = 'active';

export const INSTAFEED: InstaFeed = {
  account: {
    name: "portailautoedition",
    link: "https://www.instagram.com/portailautoedition/",
  },
  posts: [
    {
      image: '../../../public/images/insta1.webp',
      link: "https://www.instagram.com/p/DADO4GgNBuG/",
      alt: "Projet Pandore : Science-fiction, paranormal",
    },
    {
      image: '../../../public/images/insta2.webp',
      link: "https://www.instagram.com/p/DAA_xootUZK/",
      alt: "Alfur SÖgur : heroic fantasy",
    },
    {
      image: '../../../public/images/insta6.webp',
      link: "https://www.instagram.com/p/DAJf9INtZDq/",
      alt: "Le bruit des anges : roman",
    },
    {
      image: '../../../public/images/insta7.webp',
      link: "https://www.instagram.com/p/C__E15mNRmm/",
      alt: "Let's dance : romance fantastique",
    },
    {
      image: '../../../public/images/insta8.webp',
      link: "https://www.instagram.com/p/C_sS0n9t8_6/",
      alt: "Podcast : dédicacer en librairie",
    },
    {
      image: '../../../public/images/insta9.webp',
      link: "https://www.instagram.com/p/DAd_jtZNGVq/",
      alt: "Concours des parutions trimestrielles",
    },
  ],
};