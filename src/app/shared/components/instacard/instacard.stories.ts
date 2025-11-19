import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InstacardComponent } from './instacard';
import { provideIcons } from '@ng-icons/core';
import { faBrandInstagram } from '@ng-icons/font-awesome/brands';

const meta: Meta<InstacardComponent> = {
  title: 'Shared/Instacard',
  component: InstacardComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideIcons({
          faBrandInstagram,
        }),
      ],
    }),
  ],
  argTypes: {
    card: {
      control: 'object',
      description: 'The Instagram card data including image, link, and alt text',
    },
  },
};

export default meta;
type Story = StoryObj<InstacardComponent>;

// Default story
export const Default: Story = {
  args: {
    card: {
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
      alt: 'Beautiful book photography',
      link: 'https://instagram.com/p/sample1',
    },
  },
};
