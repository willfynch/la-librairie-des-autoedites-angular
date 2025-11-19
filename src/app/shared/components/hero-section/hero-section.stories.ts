import type { Meta, StoryObj } from '@storybook/angular';
import { HeroSectionComponent } from './hero-section';

const meta: Meta<HeroSectionComponent> = {
  title: 'Shared/HeroSection',
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

export const Default: Story = {
  args: {
    title: 'La Librairie des Autoédités',
    bgUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1920&h=1080&fit=crop',
  },
};
export const WithContent: Story = {
  args: {
    title: 'La Librairie des Autoédités',
    bgUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1920&h=1080&fit=crop',
  },
  render: (args: { title: string; bgUrl: string }) => ({
    template: `
      <app-hero-section title="${args.title}" bgUrl="'${args.bgUrl}'">
        <div class="text-center text-white max-w-2xl mx-auto">
          <p class="mb-4 text-lg">
            Découvrez une sélection unique de livres autoédités par des auteurs passionnés. Plongez dans des histoires inédites et soutenez la créativité indépendante.
          </p>
          <button class="btn btn-primary btn-lg">Explorer la Collection</button>
          </div>
          </app-hero-section>`,
  }),
};
