import { test, expect } from '@playwright/test';

// "Une Etoile pour Noel" by Alodie Romand — simple slug, exists in mock data
const BOOK_SLUG  = 'une-etoile-pour-noel';
const BOOK_TITLE = 'Une Etoile pour Noel';
const BOOK_URL   = `/livres/${BOOK_SLUG}`;

test.describe('Book detail page', () => {
  test('loads at /livres/:slug', async ({ page }) => {
    await page.goto(BOOK_URL);
    await expect(page).toHaveURL(BOOK_URL);
  });

  test('displays the book title', async ({ page }) => {
    await page.goto(BOOK_URL);
    await expect(page.getByText(BOOK_TITLE)).toBeVisible();
  });

  test('displays the author name', async ({ page }) => {
    await page.goto(BOOK_URL);
    await expect(page.getByText('Alodie Romand')).toBeVisible();
  });

  test('has a visible buy / external link CTA', async ({ page }) => {
    await page.goto(BOOK_URL);
    const cta = page.getByTestId('buy-cta');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', /.+/);
  });

  test('does not show the reviews section when there are no reviews', async ({ page }) => {
    await page.goto(BOOK_URL);
    await expect(page.getByTestId('reviews-section')).not.toBeVisible();
  });

  test('shows a related books section', async ({ page }) => {
    await page.goto(BOOK_URL);
    await expect(page.getByTestId('related-books')).toBeVisible();
  });

  test('shows at most 3 related book cards', async ({ page }) => {
    await page.goto(BOOK_URL);
    const cards = page.getByTestId('related-book-card');
    await expect(cards).toHaveCount(expect.any(Number) as never);
    const count = await cards.count();
    expect(count).toBeLessThanOrEqual(3);
  });

  test('redirects or shows empty state for an unknown slug', async ({ page }) => {
    await page.goto('/livres/this-book-does-not-exist');
    // Either redirects away or stays on page without a buy CTA
    const hasCta = await page.getByTestId('buy-cta').isVisible().catch(() => false);
    expect(hasCta).toBe(false);
  });
});
