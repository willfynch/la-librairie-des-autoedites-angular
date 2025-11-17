import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';

const meta: Meta<Navbar> = {
  title: 'Shared/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        // Provide router for navigation functionality
        provideRouter([
          { path: '', redirectTo: '/', pathMatch: 'full' },
          { path: 'livres', component: Navbar },
          { path: 'blog', component: Navbar },
          { path: 'a-propos', component: Navbar },
        ]),
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Navbar Component

A responsive navigation bar component built with DaisyUI that provides:
- Sticky positioning at the top of the page
- Mobile-responsive hamburger menu
- Active route highlighting
- Brand logo and navigation links
- Call-to-action button for book submission

## Features

- **Responsive Design**: Desktop menu with centered links, mobile dropdown menu
- **Active State Tracking**: Automatically highlights the current route
- **Sticky Header**: Stays at the top during scroll
- **DaisyUI Styled**: Uses DaisyUI navbar, menu, and button components
- **Router Integration**: Works with Angular Router for navigation

## Usage

\`\`\`typescript
import { Navbar } from '@app/shared/components/navbar';

@Component({
  standalone: true,
  imports: [Navbar],
  template: '<app-navbar />'
})
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<Navbar>;

/**
 * Default navbar state showing all navigation items.
 * The navbar is sticky and responsive.
 */
export const Default: Story = {};



