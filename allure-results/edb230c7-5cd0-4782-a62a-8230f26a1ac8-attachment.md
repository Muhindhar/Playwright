# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegendemoblaze.test.ts >> test
- Location: e2e\codegendemoblaze.test.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Total: 360 Name:' })

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.demoblaze.com/');
  5  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  6  | 
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  9  | 
  10 |   await page.locator('#loginusername').click();
  11 |   await page.locator('#loginusername').fill('Muhindhar');
  12 |   await page.locator('#loginpassword').click();
  13 |   await page.locator('#loginpassword').fill('muhi122181');
  14 |   await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();
  15 | 
  16 |   await page.getByRole('button', { name: 'Log in' }).click();
  17 |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  18 | 
  19 |   await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  20 |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  21 | 
  22 |   page.once('dialog', dialog => {
  23 |     console.log(`Dialog message: ${dialog.message()}`);
  24 |     dialog.dismiss().catch(() => {});
  25 |   });
  26 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  27 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  28 |   //await expect(page.getByRole('row', { name: 'Samsung galaxy s6 360 Delete' })).toBeVisible();
  29 |   await page.isVisible("//h2[text()='Products']");
  30 |   await page.getByRole('button', { name: 'Place Order' }).click();
  31 | 
  32 |   //await expect(page.getByRole('dialog', { name: 'Place order' })).toBeVisible();
  33 | 
> 34 |   await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
     |                                                                 ^ Error: locator.click: Target page, context or browser has been closed
  35 |   await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('Muhindhar');
  36 |   await page.getByRole('textbox', { name: 'Country:' }).click();
  37 |   await page.getByRole('textbox', { name: 'Country:' }).fill('india');
  38 |   await page.getByRole('textbox', { name: 'City:' }).click();
  39 |   await page.getByRole('textbox', { name: 'City:' }).fill('city');
  40 |   await page.getByRole('textbox', { name: 'Credit card:' }).click();
  41 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234567890');
  42 |   await page.getByRole('textbox', { name: 'Month:' }).click();
  43 |   await page.getByRole('textbox', { name: 'Month:' }).fill('01');
  44 |   await page.getByRole('textbox', { name: 'Year:' }).click();
  45 |   await page.getByRole('textbox', { name: 'Year:' }).fill('2026');
  46 |   await page.getByRole('button', { name: 'Purchase' }).click();
  47 |   //await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  48 | 
  49 |   await page.getByRole('button', { name: 'OK' }).click();
  50 |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  51 | 
  52 |   await page.getByRole('link', { name: 'Log out' }).click();
  53 | });
```