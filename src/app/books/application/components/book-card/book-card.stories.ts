import {
  applicationConfig,
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { BookCard } from './book-card';
import { Book } from '../../../domain/types/books.entities';
import { provideRouter, withHashLocation } from '@angular/router';
import data from '../../../mock/data.json';

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
const sampleBook: Book = data.books[80];

export const Default: Story = {
  args: {
    book: sampleBook,
  },
};

export const InGrid: Story = {
  args: {
    book: sampleBook,
  },
  decorators: [
    componentWrapperDecorator(
      (story) =>
        `<div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2 md:gap-4
  justify-items-center p-4">
    @for(i of [1,2,3,4,5,6]; track i){
      ${story}
    }</div>


    `
    ),
  ],
};
