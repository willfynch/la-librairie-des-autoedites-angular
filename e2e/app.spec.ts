import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/La Librairie/i);
});

test('books catalog page loads', async ({ page }) => {
  await page.goto('/livres');
  await expect(page.locator('app-book-list, [data-testid="book-list"]').first()).toBeVisible();
});
