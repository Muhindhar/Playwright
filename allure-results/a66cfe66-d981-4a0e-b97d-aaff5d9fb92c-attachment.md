# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automationexercise.test.ts >> Automation exercise site
- Location: e2e\Automationexercise.test.ts:2:5

# Error details

```
Error: locator.type: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'email' })
    - locator resolved to <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/>
  - elementHandle.type("demo09@gmail.com")

```

# Test source

```ts
  1  | import {test,Page,expect} from '@playwright/test';
  2  | test("Automation exercise site", async ({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     const signin = await page.getByRole('link',{name:"Signup / Login"})
  5  |     signin.click();
  6  |     const email = await page.getByRole('textbox',{name:"email"});
> 7  |     email.type("demo09@gmail.com")
     |           ^ Error: locator.type: Test ended.
  8  |     const pass = await page.getByRole('textbox',{name:"password"});
  9  |     pass.type("121");
  10 |     const login = await page.getByText("Login");
  11 |     login.click();
  12 |     await expect(page.locator("//div[@class='item active']//span[1]")).toBeVisible();
  13 |     
  14 | });
```