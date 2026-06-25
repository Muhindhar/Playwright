# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AE8.test.ts >> Automation exercise 8
- Location: e2e\AE8.test.ts:5:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at http://automationexercise.com/
Call log:
  - navigating to "http://automationexercise.com/", waiting until "load"

```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://automationexercise.com/products"
Received: "chrome-error://chromewebdata/"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    3 × unexpected value "chrome-error://chromewebdata/"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test.beforeEach(async ({page})=>{
  3  |     page.goto("http://automationexercise.com");
  4  | })
  5  | test("Automation exercise 8",async ({page})=>{
  6  |     const pro = await page.getByRole('link', { name: ' Products' });
  7  |     pro.click();
  8  |     const exp = "https://automationexercise.com/products"
> 9  |     await expect(page).toHaveURL(exp);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  10 |     const dress = await page.getByRole('link', { name: ' View Product' }).first();
  11 |     dress.click();
  12 |     const det = await page.getByRole('heading', { name: 'Blue Top' }).textContent();
  13 |     console.log(det);
  14 |     await expect(page).toBeTruthy();
  15 | });
```