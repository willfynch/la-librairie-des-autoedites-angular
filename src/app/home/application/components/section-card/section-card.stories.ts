import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { SectionCard } from './section-card';

const meta: Meta<SectionCard> = {
  title: 'Shared/SectionCard',
  component: SectionCard,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL of the background image',
    },
    title: {
      control: 'text',
      description: 'Title text to display on the card',
    },
    path: {
      control: 'text',
      description: 'Navigation path/route',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Section Card Component

A hoverable card component for navigating to different sections of the application.

## Features

- **Grayscale to Color Effect**: Cards start in grayscale and transition to full color on hover
- **RouterLink Integration**: Navigates to specified routes
- **Responsive Background**: Full-cover background images with dark overlay
- **Accessibility**: Proper ARIA labels for screen readers

## Usage

Since this component uses \`@Attribute\` decorator, properties must be set as HTML attributes:

\`\`\`html
<app-section-card
  image="assets/images/books.jpg"
  title="Livres"
  path="/livres">
</app-section-card>
\`\`\`

## Design Details

- Fixed height: 256px (h-64)
- Rounded corners
- Dark overlay (50% opacity) for text readability
- Smooth transition effects (500ms)
- Large title text (5xl) for impact
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<SectionCard>;

/**
 * Default section card showing the "Livres" (Books) section.
 * Hover to see the grayscale-to-color transition effect.
 */
export const Default: Story = {
  args: {
    image: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg",
    title: 'Livres',
    path: '/livres',
  }
};
