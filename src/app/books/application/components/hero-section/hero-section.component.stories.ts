import type { Meta, StoryObj } from '@storybook/angular';
import { HeroSectionComponent } from './hero-section.component';

const meta: Meta<HeroSectionComponent> = {
  title: 'Books/HeroSection',
  component: HeroSectionComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Hero section component for the bookstore homepage. Features a full-width hero banner with background image, overlay, title, description, and call-to-action button. Use the viewport toolbar to preview on different screen sizes (Mobile, Tablet, Desktop).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeroSectionComponent>;

/**
 * Default hero section with the main bookstore branding and call-to-action.
 * Uses a books-themed background image with dark overlay for text readability.
 *
 * Try switching between different viewports using the viewport selector in the toolbar
 * to see how the component responds to different screen sizes.
 */
export const Default: Story = {};
