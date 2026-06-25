# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automationexercise.test.ts >> Automation exercise site
- Location: e2e\Automationexercise.test.ts:2:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: ' Signup / Login' })
    - locator resolved to <a href="/login">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import {test,Page,expect} from '@playwright/test';
  2  | test("Automation exercise site", async ({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     const signin = await page.getByRole('link', { name: ' Signup / Login' })
> 5  |     signin.click();
     |            ^ Error: locator.click: Test ended.
  6  |     const email = await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
  7  |     email.fill("demo09@gmail.com")
  8  |     const pass = await page.getByRole('textbox', { name: 'Password' })
  9  |     pass.fill("121");
  10 |     const login = await page.getByRole('button', { name: 'Login' })
  11 |     login.click();
  12 |     await expect(page.getByRole('heading', { name: 'AutomationExercise' }))
  13 | 
  14 | });
```