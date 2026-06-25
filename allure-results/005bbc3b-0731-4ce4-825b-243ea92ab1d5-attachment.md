# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automationexercise.test.ts >> Automation exercise site
- Location: e2e\Automationexercise.test.ts:2:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//input[@data-qa=\'login-email\']')

```

# Test source

```ts
  1  | import {test,Page,expect} from '@playwright/test';
  2  | test("Automation exercise site", async ({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     const signin = await page.getByRole('link',{name:"Signup / Login"})
  5  |     signin.click();
  6  |     const email = await page.locator("//input[@data-qa='login-email']");
> 7  |     email.fill("demo09@gmail.com")
     |           ^ Error: locator.fill: Test ended.
  8  |     const pass = await page.getByRole('textbox',{name:"password"});
  9  |     pass.fill("121");
  10 |     const login = await page.getByText("Login");
  11 |     login.click();
  12 |     await expect(page.locator("//div[@class='item active']//span[1]")).toBeVisible();
  13 | 
  14 | });
```