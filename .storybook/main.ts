// Replace your-framework with the framework you are using (e.g., react-vite, vue3-vite, angular, etc.)
import type { StorybookConfig } from '@analogjs/storybook-angular';
const config: StorybookConfig = {
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  stories: [
    '../src/app/books/application/components/**/*.stories.ts',
    '../src/app/blog/application/components/**/*.stories.ts',
    '../src/app/shared/components/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-onboarding',
  ],
};

export default config;
