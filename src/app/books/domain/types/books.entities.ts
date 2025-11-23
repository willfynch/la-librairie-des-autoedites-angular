import { isOneOf } from '../../../shared/types/utility-types';

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
  category: string;
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

const bookCategories = ['poetry', 'novel', 'essay', 'youth', 'erotism', 'humour'] as const;
export type BookCategory = (typeof bookCategories)[number];
export function isValidCategory(value: unknown): value is BookCategory {
  return isOneOf<BookCategory>(value, bookCategories);
}

export interface BookCategoryTabItemModel {
  type: BookCategory;
  label: string;
}
