import type { Meta, StoryObj } from '@storybook/angular';
import { BookSearchMenuComponent } from './book-search-menu';
import type { BookCategoryTabItemModel } from '../../../domain/types/books.entities';

// Mock data for tab items
const mockTabItems: BookCategoryTabItemModel[] = [
  { type: 'poetry', label: 'Poésie' },
  { type: 'novel', label: 'Roman' },
  { type: 'essay', label: 'Essai' },
  { type: 'youth', label: 'Jeunesse' },
  { type: 'erotism', label: 'Érotisme' },
  { type: 'humour', label: 'Humour' },
];

const meta: Meta<BookSearchMenuComponent> = {
  title: 'Books/BookSearchMenu',
  component: BookSearchMenuComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Search and filter menu for books. Features category tabs (horizontal menu on desktop, dropdown on mobile), search input, and automatic scroll-based hiding behavior (hides when scrolling down past 520px, reappears when scrolling up). Use the viewport toolbar to preview responsive behavior.',
      },
    },
  },
  argTypes: {
    // Input properties
    bookCategory: {
      control: { type: 'select' },
      options: ['poetry', 'novel', 'essay', 'youth', 'erotism', 'humour'],
      description: 'Currently selected book category',
      table: {
        type: { summary: 'BookCategory' },
      },
    },
    tabItems: {
      control: 'object',
      description: 'Array of category tab items to display',
      table: {
        type: { summary: 'BookCategoryTabItemModel[]' },
      },
    },
    // Output events
    filterBooks: {
      action: 'filterBooks',
      description: 'Emitted when user filters books by category or searches',
      table: {
        type: { summary: 'EventEmitter<FilterBooksEvent>' },
      },
    },
  },
  args: {
    tabItems: mockTabItems,
    bookCategory: 'novel',
  },
};

export default meta;
type Story = StoryObj<BookSearchMenuComponent>;

/**
 * Default state of the search menu with "Roman" (novel) category selected.
 * Shows horizontal tabs on desktop and dropdown button on mobile.
 *
 * Scroll behavior is automatic: the menu hides when scrolling down past 520px
 * and reappears when scrolling up. This is handled internally by the component.
 */
export const Default: Story = {};

/**
 * Poetry category selected.
 * Demonstrates the active state highlighting on the first category.
 */
export const PoetrySelected: Story = {
  args: {
    bookCategory: 'poetry',
  },
};

/**
 * Essay category selected.
 * Shows how the active state appears on different tabs.
 */
export const EssaySelected: Story = {
  args: {
    bookCategory: 'essay',
  },
};

/**
 * Youth category selected.
 * Demonstrates another category selection state.
 */
export const YouthSelected: Story = {
  args: {
    bookCategory: 'youth',
  },
};

/**
 * Humour category selected (last tab).
 * Shows the active state on the rightmost tab.
 */
export const HumourSelected: Story = {
  args: {
    bookCategory: 'humour',
  },
};

/**
 * Limited categories example.
 * Demonstrates the component with a subset of categories (only 3).
 * Useful for specific sections or filtered views.
 */
export const LimitedCategories: Story = {
  args: {
    tabItems: [
      { type: 'poetry', label: 'Poésie' },
      { type: 'novel', label: 'Roman' },
      { type: 'essay', label: 'Essai' },
    ],
    bookCategory: 'poetry',
  },
};
