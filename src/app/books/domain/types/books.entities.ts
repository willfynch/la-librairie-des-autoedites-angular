export type Book = {
  title: string;
  ISBN: string;
  authorName: string;
  year: number;
  link: string;
  tags: string[];
  cover: string;
  catchPhrase: string;
  id: string;
  socialLink?: string;
  type: string;
  reviews?: BookReview[];
};

type BookReview = {
  content: string;
  image?: string;
  title: string;
  link: string;
  reviewer: string;
  mark?: number;
};

export type BookCategory = 'poetry' | 'novel' | 'essay' | 'youth' | 'erotism' | 'humour';

export interface BookCategoryTabItemModel {
  type: BookCategory;
  label: string;
}
