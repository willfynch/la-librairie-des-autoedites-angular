import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroBookmark } from '@ng-icons/heroicons/outline';
import {
  bootstrapSubstack,
  bootstrapThreads,
} from '@ng-icons/bootstrap-icons';
import { Footer } from './footer';
import { faBrandInstagram, faBrandThreads } from '@ng-icons/font-awesome/brands';

const meta: Meta<Footer> = {
  title: 'Shared/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        // Provide router for potential navigation functionality
        provideRouter([]),
        // Provide icons for ng-icons
        provideIcons({
          heroBookmark,
          faBrandInstagram,
          bootstrapSubstack,
          faBrandThreads,
        }),
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Footer Component

A centered footer component built with DaisyUI that provides:
- Brand information with book icon
- Link to @ducaféetdesrimes website
- Social media buttons (Instagram, Substack, Threads)
- Copyright notice and tech stack information
- Amazon affiliate disclaimer

## Features

- **Responsive Design**: DaisyUI's footer-center provides automatic centering
- **Social Media Integration**: Square buttons for Instagram, Substack, and Threads
- **Brand Presence**: Book icon and link to main website
- **Legal Information**: Copyright and affiliate disclaimer

## Usage

\`\`\`typescript
import { Footer } from '@app/shared/components/footer';

@Component({
  standalone: true,
  imports: [Footer],
  template: '<app-footer />'
})
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<Footer>;

/**
 * Default footer state showing brand information, social media buttons,
 * and legal disclaimers. The footer is centered and responsive.
 */
export const Default: Story = {};

/**
 * Footer with custom background to show contrast.
 * Demonstrates how the footer looks at the bottom of a page.
 */
export const WithPageContext: Story = {
  decorators: [
    (story) => ({
      template: `
        <div class="min-h-screen bg-base-100 flex flex-col justify-end">
          <story />
        </div>
      `,
    }),
  ],
};
