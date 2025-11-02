/**
 * Tailwind CSS v4 Configuration
 *
 * Note: With Tailwind v4, most configuration is now done in CSS (see src/styles.scss).
 * This file is kept minimal for Angular-specific content paths if needed.
 *
 * Theme extensions and DaisyUI configuration are now in src/styles.scss
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Angular-specific content paths
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}",
  ],
  // Theme and plugins are configured in src/styles.scss using @theme and @plugin directives
}

