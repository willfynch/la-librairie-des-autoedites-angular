import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { InstafeedComponent } from './instafeed';
import { provideIcons } from '@ng-icons/core';
import { heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';
import { faBrandInstagram } from '@ng-icons/font-awesome/brands';
import { PartnerInstaFeed } from '../../../domain/types/partners.entities';

// Mock data
const mockInstafeed: PartnerInstaFeed = {
  account: {
    name: 'lalibrairiedesautoedites',
    link: 'https://instagram.com/lalibrairiedesautoedites',
  },
  posts: [
    {
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
      alt: 'Featured book 1',
      link: 'https://instagram.com/p/sample1',
    },
    {
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop',
      alt: 'Featured book 2',
      link: 'https://instagram.com/p/sample2',
    },
    {
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
      alt: 'Featured book 3',
      link: 'https://instagram.com/p/sample3',
    },
    {
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
      alt: 'Featured book 4',
      link: 'https://instagram.com/p/sample4',
    },
  ],
};

const meta: Meta<InstafeedComponent> = {
  title: 'Shared/Instafeed',
  component: InstafeedComponent,
  tags: ['autodocs'],
    decorators: [
    applicationConfig({
      providers: [
        provideIcons({
          faBrandInstagram,
          heroArrowTopRightOnSquare
        }),
      ],
    }),
  ],
  argTypes: {
    instafeed: {
      control: 'object',
      description: 'Instagram feed data including account info and posts',
    },
  }
};

export default meta;
type Story = StoryObj<InstafeedComponent>;

// Default story with 4 posts
export const Default: Story = {
  args: {
    instafeed: mockInstafeed,
  },
};

// Story with minimal posts (2 posts)
export const MinimalPosts: Story = {
  args: {
    instafeed: {
      account: {
        name: '@bookstore',
        link: 'https://instagram.com/bookstore',
      },
      posts: [
        {
          image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
          alt: 'Book post 1',
          link: 'https://instagram.com/p/minimal1',
        },
        {
          image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop',
          alt: 'Book post 2',
          link: 'https://instagram.com/p/minimal2',
        },
      ],
    },
  },
};

// Story with many posts (9 posts)
export const ManyPosts: Story = {
  args: {
    instafeed: {
      account: {
        name: '@popularbookshop',
        link: 'https://instagram.com/popularbookshop',
      },
      posts: [
        {
          image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
          alt: 'Book 1',
          link: 'https://instagram.com/p/post1',
        },
        {
          image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop',
          alt: 'Book 2',
          link: 'https://instagram.com/p/post2',
        },
        {
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
          alt: 'Book 3',
          link: 'https://instagram.com/p/post3',
        },
        {
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
          alt: 'Book 4',
          link: 'https://instagram.com/p/post4',
        },
        {
          image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop',
          alt: 'Book 5',
          link: 'https://instagram.com/p/post5',
        },
        {
          image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop',
          alt: 'Book 6',
          link: 'https://instagram.com/p/post6',
        },
        {
          image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
          alt: 'Book 7',
          link: 'https://instagram.com/p/post7',
        },
        {
          image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=400&fit=crop',
          alt: 'Book 8',
          link: 'https://instagram.com/p/post8',
        },
        {
          image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=400&fit=crop',
          alt: 'Book 9',
          link: 'https://instagram.com/p/post9',
        },
      ],
    },
  },
};
