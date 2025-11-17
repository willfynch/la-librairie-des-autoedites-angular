import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { BookCard } from './book-card';
import { Book } from '../../../domain/types/books.entities';
import { provideRouter, withHashLocation } from '@angular/router';

const meta: Meta<BookCard> = {
  component: BookCard,
  title: 'Books/BookCard',
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([], withHashLocation())],
    }),
  ],
};

export default meta;

type Story = StoryObj<BookCard>;

// Sample book data for stories
const sampleBook: Book = {
  id: '1',
  title: 'Le Voyage Extraordinaire',
  ISBN: '978-2-1234-5678-9',
  authorName: 'Marie Dubois',
  year: 2024,
  link: 'https://example.com/book/1',
  tags: ['Aventure', 'Fiction', 'Fantastique'],
  cover: 'https://images.pexels.com/photos/3547625/pexels-photo-3547625.jpeg',
  catchPhrase:
    'Une aventure épique à travers des mondes inconnus, où chaque page révèle de nouveaux mystères.',
  type: 'novel',
  socialLink: 'https://twitter.com/mariedubois',
};

export const Default: Story = {
  args: {
    book: sampleBook,
  },
};

