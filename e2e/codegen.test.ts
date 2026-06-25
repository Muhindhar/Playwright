import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('#content')).toContainText('Logout');
  await page.getByRole('heading', { name: 'Welcome to the Secure Area.' }).click();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - heading "Secure Area" [level=2]
    - heading "Welcome to the Secure Area. When you are done click logout below." [level=4]
    - link "Logout":
      - /url: /logout
    `);
});