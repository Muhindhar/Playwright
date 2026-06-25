import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
});

test('Automation exercise 8', async ({ page }) => {
  const pro = page.getByRole('link', { name: 'Products' });
  await pro.click();
  await expect(page).toHaveURL('https://automationexercise.com/products');
  const dress = page.getByRole('link', { name: 'View Product' }).first();
  await dress.click();
  const productHeading = page.getByRole('heading', { name: 'Blue Top' });
  await expect(productHeading).toBeVisible();
  const det = await productHeading.textContent();
  console.log(det);
});